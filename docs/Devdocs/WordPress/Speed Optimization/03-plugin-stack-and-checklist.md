---
id: wp-speed-plugin-checklist
title: Bộ plugin đề xuất & Checklist
---

# Bộ plugin đề xuất & Checklist

## Bảng ưu tiên 80/20 (Impact / Effort)

Làm theo thứ tự này để đạt "Good" nhanh nhất với công sức ít nhất.

| Hạng mục | Impact | Effort | Ghi chú |
| --- | --- | --- | --- |
| Bật page caching | Rất cao | Thấp | Cài 1 plugin cache là có kết quả ngay |
| Tối ưu ảnh (WebP + nén + lazy) | Rất cao | Thấp | Plugin ảnh tự xử lý hàng loạt |
| Nâng cấp / chọn hosting tốt | Rất cao | Trung bình | Hạ TTFB ở gốc |
| Bật CDN | Cao | Thấp | Cloudflare / BunnyCDN / QUIC.cloud |
| Gỡ plugin thừa | Cao | Thấp | Audit & xoá thứ không dùng |
| Host font local + preload | Trung bình | Thấp | OMGF / tính năng của plugin cache |
| Khai báo dimensions ảnh (CLS) | Trung bình | Thấp | Sửa nguồn gây layout shift |
| Delay JS + defer script bên thứ ba | Cao (INP) | Trung bình | Phải test kỹ kẻo vỡ chức năng |
| Critical CSS + gỡ unused CSS | Cao | Trung bình | Kiểm tra lại layout sau khi bật |
| Object cache Redis | Cao (site động/Woo) | Trung bình | Cần hosting hỗ trợ |

## Performance Stack khuyến nghị

Chọn **1 trong 4** theo loại hosting, ngân sách và mục tiêu. Nguyên tắc bất di bất dịch: **không bao giờ chạy 2 plugin cache cùng lúc**.

| Phương án | Stack | Phù hợp khi |
| --- | --- | --- |
| **A — Host LiteSpeed** (rẻ & mạnh nhất) | [LiteSpeed Cache](https://wordpress.org/plugins/litespeed-cache/) (free) + [QUIC.cloud](https://quic.cloud/) CDN + [ShortPixel](https://shortpixel.com/)/[Imagify](https://imagify.io/) + (tuỳ chọn) [Perfmatters](https://perfmatters.io/) | Host dùng LiteSpeed (Hostinger, A2 Hosting, Cloudways...) — cache cấp máy chủ, thường nhanh nhất mà miễn phí |
| **B — Host thường** (Nginx/Apache) | [WP Rocket](https://wp-rocket.me/) (~$59/năm) + [Cloudflare](https://www.cloudflare.com/) hoặc [BunnyCDN](https://bunny.net/) + [Imagify](https://imagify.io/) + [Perfmatters](https://perfmatters.io/) | ~80% website — cấu hình nhanh, ít lỗi, chạy trên mọi server |
| **C — Tối ưu CWV/INP tối đa** | [FlyingPress](https://flyingpress.com/) (~$60/năm) + [BunnyCDN](https://bunny.net/) + [ShortPixel](https://shortpixel.com/) + [Perfmatters](https://perfmatters.io/) | Ưu tiên điểm Core Web Vitals (đặc biệt INP) cao nhất; giao diện gọn, ít chỗ "gãy" |
| **D — Ngân sách tối thiểu** | [Autoptimize](https://vi.wordpress.org/plugins/autoptimize/) (free) + [Cloudflare](https://www.cloudflare.com/) (free CDN) | Site nhỏ/ngân sách 0đ — rẻ và vẫn hiệu quả, đổi lại phải tự cấu hình nhiều hơn 3 phương án trên |

:::tip
Nếu host đã có cache cấp máy chủ (Kinsta, WP Engine, Cloudflare APO, Nginx FastCGI, LiteSpeed...), có thể **không cần** plugin cache đầy đủ — chỉ cần plugin tối ưu front-end (Perfmatters/FlyingPress) để lo critical CSS, gỡ unused CSS và delay JS.
:::

Muốn hiểu cơ chế bên dưới (tại sao combo này nhanh hơn combo kia), chi phí thực tế hay khi nào nên đổi combo? Xem [Cách hoạt động & So sánh 4 combo](./wp-speed-stack-deep-dive).

## Vai trò từng plugin trong các stack trên

Các stack ở trên đều là **plugin cache + plugin bổ trợ** kết hợp lại — bảng dưới đây tách rõ plugin nào thật sự cache, plugin nào chỉ hỗ trợ (không thể dùng một mình):

| Plugin | Vai trò | Giá | CWV/INP | Ghi chú |
| --- | --- | --- | --- | --- |
| LiteSpeed Cache | Cache (page + object) | Free | Xuất sắc | Cần server LiteSpeed; tích hợp QUIC.cloud |
| WP Rocket | Cache + critical CSS | ~$59/năm | Tốt | Ổn định, chạy mọi server, tự tối ưu khi kích hoạt |
| FlyingPress | Cache + critical CSS | ~$60/năm | Tốt nhất | Giao diện gọn, ít lỗi, ra tính năng sớm |
| W3 Total Cache | Cache (kiểm soát sâu) | Free | Khá (cần tinh chỉnh) | Cấu hình phức tạp, dễ set sai |
| WP Super / Fastest Cache | Cache cơ bản | Free | Cơ bản | Dễ dùng, ít tính năng nâng cao |
| Autoptimize | ❌ Không phải cache — minify/combine CSS/JS | Free | Trung bình | Cần kèm CDN (vd: Cloudflare) để đủ bộ (xem Option D) |
| Perfmatters | ❌ Không phải cache — Script Manager theo trang + preload ảnh hero/preconnect/font | ~$30/năm | Bổ trợ | Bắt buộc dùng **kèm** 1 plugin cache ở trên |

## Vì sao WordPress bị chậm

WordPress lõi vốn khá nhẹ — phần lớn độ chậm đến từ những gì được chất thêm lên trên:

- Hosting kém / shared quá tải → TTFB cao.
- Thiếu caching → mỗi request đều dựng lại trang từ PHP + query database.
- Ảnh chưa tối ưu: PNG/JPG nặng, không WebP, không nén, upload nguyên kích thước gốc.
- Theme nặng + page builder (Elementor, Divi...) → DOM lớn, nhiều CSS/JS, ảnh hưởng cả LCP, INP lẫn CLS.
- Quá nhiều plugin — mỗi plugin thêm CSS/JS/query, một số chạy nặng ở backend.
- CSS/JS chặn render trong `<head>`.
- Quá nhiều script bên thứ ba: quảng cáo, analytics, chat, pixel, A/B testing → ảnh hưởng INP.
- Database phình to: post revisions, transients hết hạn, spam, autoload options quá lớn.
- Không dùng CDN; PHP cũ; font tải kém.

## Anti-patterns — sai lầm phổ biến

- Chạy 2+ plugin cache cùng lúc → xung đột, khó debug, có khi còn chậm hơn.
- Lạm dụng plugin "all-in-one" nặng cho mọi thứ; lấy hosting/optimization từ chính nhà cung cấp page builder.
- Bật mọi hiệu ứng/animation của page builder dù không cần.
- Đặt slider/video nặng ngay khu vực hero (vùng tính LCP), hoặc lazy-load nhầm chính ảnh/video đó.
- Upload ảnh full-size không resize, thiếu `width`/`height`; dùng quá nhiều web font/font-weight.
- Gộp CSS/JS thiếu cân nhắc trên HTTP/2 — multiplexing khiến việc gộp file ít lợi, có thể hại cache.
- Không dọn database định kỳ; tích luỹ plugin rác đã ngừng dùng.
- Bật delay JS / gỡ unused CSS mà **không test** → vỡ menu, form, slider, giỏ hàng.
- Chạy plugin security/backup nặng vào giờ cao điểm.
- Chỉ đo Lighthouse desktop rồi tưởng site nhanh, hoặc đuổi theo điểm 100 Lighthouse thay vì "Good" trên field data thật — cả hai đều bỏ qua trải nghiệm thật của người dùng.

## Lưu ý riêng cho WooCommerce

- **Cart fragments** (AJAX cập nhật mini-cart) gây nhiều request — chỉ tải ở trang cần (giỏ hàng/thanh toán).
- Loại trừ cart/checkout/my-account khỏi page cache (các plugin tốt tự làm điều này).
- Dùng **object cache (Redis)** để tăng tốc truy vấn sản phẩm/đơn hàng — WooCommerce dùng nhiều bảng tuỳ chỉnh nặng truy vấn.
- Tối ưu database thường xuyên hơn site thường, do dữ liệu giao dịch phát sinh liên tục.

## Checklist bảo trì định kỳ

- **Hàng tháng**: đo lại PSI + Search Console; dọn database (revisions, transients); chạy Coverage soát CSS/JS thừa; cập nhật plugin/theme/PHP.
- **Khi thêm plugin mới**: đo lại Core Web Vitals, kiểm tra script phát sinh, tắt script ở trang không cần.
- **Liên tục**: theo dõi cảnh báo ở ~80% ngưỡng để bắt hồi quy sớm (sau deploy, sau thêm script quảng cáo...).
