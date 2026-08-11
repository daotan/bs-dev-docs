---
id: wp-speed-cwv-playbook
title: Playbook LCP / INP / CLS trên WordPress
---

# Playbook LCP / INP / CLS trên WordPress

Trang này tập trung vào **plugin/setting nào xử lý vấn đề gì trên WordPress**. Muốn hiểu bản chất kỹ thuật (code-level, không riêng WP) thì xem thêm mục [Core Web Vitals](<../../Optimize/Core Web Vitals/lcp>).

Mỗi metric trình bày theo cấu trúc: **nguyên nhân thường gặp → giải pháp (ưu tiên cao xuống thấp) → cách làm cụ thể trên WordPress**.

## LCP — Largest Contentful Paint (tốc độ tải)

**Nguyên nhân thường gặp**
- TTFB cao: máy chủ chậm, hosting shared quá tải, không có cache trang.
- CSS/JS chặn render (render-blocking) trong `<head>`.
- Ảnh hero/LCP nặng, sai định dạng (PNG/JPG thay vì WebP/AVIF), sai kích thước.
- Lazy-load nhầm ảnh hero khiến nó tải muộn.
- Font chặn render; thiếu CDN nên người dùng ở xa tải chậm.

**Giải pháp, ưu tiên cao → thấp**
1. Bật **page caching** — giảm TTFB mạnh nhất, có hiệu quả ngay sau khi cài plugin.
2. Nâng cấp hosting + object cache (Redis/Memcached) + OPcache + PHP 8.x — hạ TTFB ở gốc, đặc biệt với site động/WooCommerce.
3. Dùng **CDN** (Cloudflare, BunnyCDN, QUIC.cloud) — đưa tài nguyên tĩnh tới gần người dùng.
4. Tối ưu ảnh: chuyển WebP/AVIF (giảm 25–35% dung lượng), nén, phục vụ đúng kích thước qua `srcset`. Lazy-load ảnh **dưới** màn hình.
5. Ưu tiên ảnh LCP: **không** lazy-load ảnh hero; thêm `fetchpriority="high"` và preload nó.
6. Critical CSS + hoãn phần CSS còn lại + loại CSS thừa — bỏ hành vi chặn render của stylesheet ngoài.
7. Defer/async JS không cần cho render ban đầu.
8. Tối ưu font: host local, preload font đầu trang, `font-display: swap`.

**Cách làm trên WordPress**
- Cache + Critical CSS: **WP Rocket**, **LiteSpeed Cache**, hoặc **FlyingPress** (tự sinh critical CSS, gỡ unused CSS).
- Tối ưu ảnh: **ShortPixel**, **Imagify** hoặc **EWWW** (tự convert WebP/AVIF + nén hàng loạt).
- Ưu tiên ảnh hero & preconnect: **Perfmatters** cho phép preload, loại ảnh đầu khỏi lazy-load, thêm preconnect.
- Host font local + preload: **OMGF**. Lưu ý **không preload toàn bộ font** — mỗi font preload đều làm trình duyệt phải tải xong trước khi hiển thị trang; chỉ preload font dùng ở above-the-fold.

<details>
<summary>Convert ảnh sang WebP bằng WebP Express (nếu không dùng ShortPixel/Imagify)</summary>

Vào **Settings → WebP Express** và cấu hình:

| Tuỳ chọn | Giá trị |
| --- | --- |
| Operation mode | Varied image responses |
| Destination folder | Mingled |
| Destination structure | Document root |
| Alter HTML | Bật — để plugin tự sửa HTML, phục vụ WebP cho trình duyệt hỗ trợ |

</details>

:::info[Lưu ý HTTP/2]
Với HTTP/2 multiplexing, việc gộp (combine) nhiều file CSS/JS thành 1 bundle ít lợi và có thể hại cache. Ưu tiên loại bỏ CSS/JS thừa thay vì gộp file.
:::

## INP — Interaction to Next Paint (khả năng phản hồi)

Metric khó nhất và đáng đầu tư nhất hiện nay. **Caching không sửa được INP** — đây là vấn đề front-end/trình duyệt, xảy ra *sau khi* trang đã tải xong. Bản chất là bảo vệ main thread khỏi việc thừa đúng lúc người dùng mong giao diện phản hồi.

**3 thành phần của INP** (để chẩn đoán)

| Thành phần | Ý nghĩa |
| --- | --- |
| Input delay | Độ trễ trước khi xử lý — thường do main thread đang bận chạy JS khác |
| Processing duration | Thời gian chạy event handler |
| Presentation delay | Thời gian trình duyệt vẽ lại — bị ảnh hưởng bởi DOM lớn |

**Nguyên nhân thường gặp**
- JavaScript nặng chặn main thread (quá nhiều plugin, page builder, theme nặng).
- Script bên thứ ba: analytics, GTM, chat widget, quảng cáo, pixel A/B testing.
- DOM quá lớn (hàng nghìn phần tử — phổ biến với page builder lồng sâu).
- Event handler nặng/đồng bộ (ví dụ add-to-cart kích hoạt nhiều script cùng lúc).

**Giải pháp, ưu tiên cao → thấp**
1. **Delay JavaScript execution** — chỉ tải/chạy script không thiết yếu khi người dùng tương tác. Đòn bẩy lớn nhất cho INP/TBT.
2. Defer/async JS không thiết yếu cho render ban đầu.
3. Gỡ plugin thừa — mỗi plugin frontend thường thêm CSS/JS, ít plugin = ít JS phải chạy.
4. Quản lý script theo trang — tắt script ở trang không cần (vd: không tải JS contact form trên mọi trang).
5. Host analytics/GTM tại chỗ để loại bớt 1 request bên thứ ba.
6. Giảm DOM size — đơn giản hoá layout, tránh lồng section quá sâu trong page builder.
7. Chia nhỏ long task (cho dev): yield main thread (`scheduler.yield`/`setTimeout`), đẩy tính toán nặng sang Web Worker.
8. Debounce input cho live search/bộ lọc realtime.
9. `content-visibility` / CSS containment cho khu vực dưới màn hình.

**Cách làm trên WordPress**
- **FlyingPress**: mạnh nhất về INP mặc định nhờ chiến lược tải JS quyết liệt (~110ms trong test thực tế 2026).
- **WP Rocket**: bật *Delay JavaScript Execution* trong tab File Optimization.
- **LiteSpeed Cache**: có tuỳ chọn delay/defer JS tương đương.
- **Perfmatters** (Script Manager): bật/tắt từng script theo từng trang — mạnh nhất để dọn script thừa.
- **Asset CleanUp** / **Flying Scripts**: gỡ script không dùng và trì hoãn JS không thiết yếu.

:::tip[Quy trình dọn JS thừa]
Dùng tab **Coverage** trong DevTools để phát hiện CSS/JS không dùng, chạy lại hàng tháng sau mỗi lần thêm plugin/tính năng. Gỡ unused code làm giảm thời gian parse & execute — nguyên nhân gốc của hầu hết lỗi INP.
:::

## CLS — Cumulative Layout Shift (độ ổn định bố cục)

**Nguyên nhân thường gặp**
- Ảnh/video/iframe không khai báo `width`/`height` (hoặc `aspect-ratio`).
- Font tải muộn gây reflow (FOIT/FOUT) khi đổi từ font hệ thống sang font web.
- Nội dung chèn động phía trên nội dung hiện có: quảng cáo, banner, thanh cookie.
- Embed (YouTube, social) không được dành sẵn không gian.
- Slider/banner không cố định kích thước.

**Giải pháp**
1. Luôn đặt `width`/`height` (hoặc CSS `aspect-ratio`) cho mọi ảnh/video/iframe.
2. Dành sẵn không gian (reserve space) cho quảng cáo/embed/cookie bar bằng `min-height` cố định.
3. `font-display: swap` + preload font chính; cân nhắc `size-adjust`/fallback metrics để giảm reflow khi đổi font.
4. Tránh chèn nội dung phía trên phần người dùng đang xem.
5. Cố định kích thước slider/banner ngay từ CSS.

**Cách làm trên WordPress**
- Theme/plugin hiện đại thường tự thêm thuộc tính kích thước ảnh — kiểm tra lại với ảnh chèn thủ công và shortcode.
- Kiểm tra plugin quảng cáo: đảm bảo mỗi slot có chiều cao tối thiểu cố định.
- Host font local (**OMGF**, hoặc tính năng "Host Google Fonts locally" của **WP Rocket**/**LiteSpeed**) để kiểm soát thời điểm tải font.

## Metric bổ trợ

| Metric | Cách tối ưu |
| --- | --- |
| TTFB | Hosting tốt, page cache + object cache (Redis), OPcache, nâng PHP 8.x, CDN, giảm plugin backend, kiểm soát WordPress Heartbeat, dọn database |
| FCP | Loại CSS/JS chặn render, inline critical CSS, tối ưu font (preload + swap) |
| TBT | Proxy lab của INP — giảm thời gian thực thi JS (delay/defer, gỡ plugin thừa) kéo cả TBT lẫn INP xuống |

## Bảng tra nhanh

| Metric | Ngưỡng 2026 | Công cụ audit | Nguyên nhân chính | Cách xử lý nhanh nhất |
| --- | --- | --- | --- | --- |
| **LCP** | ≤ 2.5s | PageSpeed Insights | TTFB chậm; Hero image nặng; bị JS/CSS chặn render; lazy-load sai ảnh đầu | Hosting tốt + Page Cache → tắt lazy-load ảnh Hero → bật Preload Hero Image |
| **INP** | ≤ 200ms | Chrome DevTools, Web Vitals Extension | JS nặng trên Main Thread (long tasks); third-party tags; DOM lớn | Bật Delay/Defer JS (FlyingPress/WP Rocket) → tối ưu tracking script (GA4 direct thay vì GTM) → Perfmatters tắt JS thừa |
| **CLS** | ≤ 0.1 | WebPageTest, Search Console | Thiếu width/height cho img/iframe; web font đổi chậm; ads đẩy content | Bật "Add missing image dimensions" → `font-display: swap` + preload font → CSS `min-height` cho vùng Ads |
