---
id: wp-speed-caching-cdn
title: Caching, Font, Image, CDN
---

# Caching, Font, Image, CDN

:::note[Trang này dùng khi nào?]
Nếu đã chọn 1 trong 4 [Performance Stack](./wp-speed-plugin-checklist) (WP Rocket/LiteSpeed Cache/FlyingPress...), phần lớn nội dung dưới đây (browser cache, minify/combine CSS-JS, render-blocking) đã được plugin đó tự lo — **không cần làm lại thủ công**. Trang này hữu ích khi: đi theo hướng DIY nhiều plugin nhỏ thay vì 1 plugin all-in-one, hoặc cần xử lý phần mà plugin cache không cover (Google Fonts, WebP, setup Cloudflare).
:::

## 4 loại cache trên WordPress

Theo [WordPress Developer Handbook](https://developer.wordpress.org/advanced-administration/performance/cache/), caching là cách nhanh nhất để cải thiện performance. Có 4 loại, thường dùng kết hợp chứ không loại trừ nhau:

| Loại | Cơ chế | Công cụ |
| --- | --- | --- |
| **Caching Plugin** | Convert post/page thành file HTML tĩnh, giảm tải xử lý PHP+DB mỗi request | WP Rocket, LiteSpeed Cache, WP Fastest Cache... |
| **Browser Caching** | Lưu file tĩnh (ảnh, CSS, JS) trên máy người dùng qua HTTP header, trả `304 Not Modified` thay vì tải lại toàn bộ (`200 OK`) | `Cache-Control: max-age`, `Expires`, `ETag` |
| **Object Caching** | Lưu kết quả truy vấn DB/tính toán tốn kém vào bộ nhớ nhanh, dùng lại giữa các request | Redis, Memcached, APCu |
| **Server Caching** | Cache ở tầng server, phù hợp site traffic lớn | **Varnish** (cache HTML dựng sẵn trong RAM), **OPcache** (cache PHP bytecode đã biên dịch) |

:::tip
Object cache và OPcache thường phải do hosting hỗ trợ sẵn (hoặc cần quyền server để cài) — kiểm tra trước khi chọn plugin cache, vì một số plugin (WP Rocket, LiteSpeed Cache) có thể tự kết nối Redis/Memcached nếu server đã có.
:::

## Browser caching qua .htaccess (không cần giữ plugin)

Mẹo: dùng plugin để **sinh** cấu hình cache, sau đó **gỡ plugin** để không tốn thêm CPU/RAM — vì mỗi plugin chạy nền đều tốn tài nguyên dù chỉ dùng 1 lần.

1. Cài **WP Fastest Cache**, bật các tuỳ chọn:
   - **Cache System** — bật hệ thống lưu bộ nhớ đệm.
   - **Preload** — tự tạo cache cho trang chủ, bài viết, chuyên mục...
   - **New Post & Update Post** — tự xoá cache khi có nội dung mới/cập nhật.
   - **Minify HTML & CSS** — giảm dung lượng tệp.
   - **Browser Caching** — tận dụng cache phía trình duyệt.
2. Plugin sẽ tự ghi các rule cache vào file `.htaccess`. Mở file này qua **File Editor** của Yoast SEO (hoặc File Manager của hosting), copy toàn bộ đoạn mã plugin vừa ghi, lưu tạm ra Notepad++.
3. **Deactivate + Delete** plugin WP Fastest Cache để giải phóng tài nguyên (đoạn mã cache thường bị xoá theo khi gỡ plugin).
4. Dán lại đoạn mã đã copy vào `.htaccess`, **Save changes**.
5. Kiểm tra kết quả bằng Google PageSpeed Insights — server giờ tự phục vụ cache mà không cần plugin chạy nền.

:::danger[Chỉ thay được 1 phần, không phải toàn bộ]
Cách này chỉ giữ lại được phần **browser cache headers** (`Cache-Control`, `Expires`) trong `.htaccess`. **Page Caching, Preload và Minify HTML/CSS** — những tính năng chính của WP Fastest Cache — chạy bằng PHP nên **mất hẳn** khi xoá plugin, không nằm trong `.htaccess`. Chỉ dùng mẹo này nếu chỉ cần browser caching; nếu muốn cả page caching thì phải giữ 1 plugin cache chạy thường trực (xem [Performance Stack](./wp-speed-plugin-checklist)).
:::

## Fix Google Fonts chậm

- Dùng plugin **OMGF | Host Google Fonts Locally** để host font tại chỗ và thêm preload.

:::danger[Lưu ý]
Không preload toàn bộ font — mỗi font preload sẽ tăng thời gian phản hồi vì trình duyệt phải tải hết các font đó trước khi hiển thị trang. Chỉ preload những font thực sự cần thiết (thường là font dùng ở above-the-fold).
:::

## Giảm Server Response Time (TTFB)

Xoay quanh 3 trục: **Hosting**, **giảm page size**, và **Cache**.

- **Hosting**: TTFB và CDN ảnh hưởng trực tiếp tới CLS, LCP và SEO — cân nhắc kỹ khi chọn host.
- **Giảm page size**:
  - Hạn chế HTTP request không cần thiết từ file/script/plugin thừa.
  - Nén ảnh trước hoặc trong khi upload.
  - Chọn theme nhẹ, tối ưu code, không cồng kềnh tính năng.
- **Caching optimization**:
  - **Gzip**: bật nén Gzip để giảm dung lượng dữ liệu truyền tải. Một số host (vd: WP Engine) dùng **Brotli** — nén tốt hơn Gzip.
  - **Cache**: thiết lập cache ở cả server và trình duyệt.
  - **Minification**: gộp/rút gọn HTML, CSS, JS bằng cách bỏ khoảng trắng thừa mà không đổi chức năng.

Plugin gợi ý cho page size: **EWWW Image Optimizer** (nén ảnh). Xem mục caching ở đầu trang để chọn plugin cache.

## Dọn CSS/JS không dùng (Unused CSS/JS)

Chọn **1 trong 2** — không chạy song song vì dễ xung đột (double-minify, double-combine):

- **Asset CleanUp** — chặn/unload plugin·script theo từng trang cụ thể, kiểm soát chi tiết hơn, nhưng phải check thủ công từng page.
- **Autoptimize** — tự động minify + combine CSS/JS toàn site, đơn giản hơn nhưng ít control theo từng trang (xem thêm ở mục "Loại bỏ render-blocking resources" bên dưới).

Nếu chọn Asset CleanUp:
1. Cài **Asset CleanUp**, bật chế độ quản lý ở **Front-end** để kiểm tra lỗi giao diện trực tiếp.
2. **Minify** + **Combine** các file CSS/JS ngay trong Asset CleanUp.
3. **Unload** plugin/script không cần thiết theo từng trang cụ thể (vd: tắt script Contact Form ở trang chủ).

**Cách tìm file rác** (áp dụng cho cả 2 lựa chọn)
- Tab **Coverage** trong Chrome DevTools — file nào có thanh màu đỏ (unused) cao là ứng viên cần dọn.
- Extension **CSS Used** để lọc riêng đoạn CSS đang thực sự hiển thị.

:::note
Asset CleanUp chủ yếu chặn file theo từng trang riêng lẻ (check theo từng page), không có sẵn cách check unused CSS/JS cho toàn site cùng lúc.
:::

## Chuyển ảnh sang định dạng Next-Gen (WebP)

Dùng plugin **WebP Express**: vào **Settings → WebP Express** và cấu hình:

| Tuỳ chọn | Giá trị |
| --- | --- |
| Operation mode | Varied image responses |
| Destination folder | Mingled |
| Destination structure | Document root |
| Alter HTML | Bật — để plugin tự sửa HTML, phục vụ WebP cho trình duyệt hỗ trợ |

Plugin thay thế: **EWWW Image Optimizer**, **Imagify**.

## Loại bỏ render-blocking resources

Dùng plugin **[Autoptimize](https://vi.wordpress.org/plugins/autoptimize/)** (lựa chọn thay thế Asset CleanUp ở mục trên — không chạy cả hai cùng lúc), tick các tuỳ chọn tối ưu cho JS, CSS và HTML.

Kết quả thực tế ghi nhận: thời gian load giảm từ **1900ms → 450ms**.

## Preload Key Requests

1. Chạy PageSpeed Insights, copy URL tài nguyên được đề xuất preload (thường là font chữ).
2. Thêm vào phần **Scripts in Header** (có thể dùng plugin **Insert Headers and Footers**):

```html title="html"
<link rel="preload" href="[url]" as="font" crossorigin="anonymous">
```

## Gắn CDN (Cloudflare) + HTTPS

1. **Thêm site vào Cloudflare**: đăng nhập → **Add a Site** → nhập domain → chọn gói → Cloudflare quét DNS hiện có → **Continue**.
2. **Trỏ Nameservers** (vd trên Namecheap): copy 2 nameserver Cloudflare cung cấp → vào domain trên Namecheap → **Manage → Nameservers → Custom DNS** → dán và lưu → quay lại Cloudflare bấm **Done, check nameservers**.
3. **Bảo mật & tối ưu trên Cloudflare**:
   - **SSL/TLS**: chọn **Full** để mã hoá traffic giữa Cloudflare và server.
   - **Always Use HTTPS**: không nên bật trực tiếp trên Cloudflare (đôi khi gây lỗi) — dùng plugin WordPress thay thế.
   - **Auto Minify**: nên thực hiện qua plugin WordPress để hiệu quả hơn.
4. **Cấu hình HTTPS trên WordPress**: cài **Really Simple SSL** → **Go ahead, activate SSL** (tự redirect HTTP → HTTPS). Kiểm tra **Settings → General**: cả *WordPress Address* và *Site Address* phải bắt đầu bằng `https://`.
5. **Kiểm tra kết quả**: dùng [httpstatus.io](https://httpstatus.io) — đảm bảo mọi biến thể domain (có/không `www`) đều trả về `200 OK` qua HTTPS.

## Việc nhỏ nhưng hiệu quả

- **Xoá plugin/theme không dùng**: đơn giản là cái nào không cần thì remove hoặc inactive.
