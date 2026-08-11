---
id: wp-speed-stack-deep-dive
title: Cách hoạt động & So sánh 4 combo
---

# Cách hoạt động & So sánh 4 combo

> Trang này đào sâu về 4 Performance Stack: cơ chế xử lý bên dưới → so sánh → chi phí → khi nào nên đổi. Nếu chỉ cần bảng tóm tắt để chọn nhanh, xem [Performance Stack khuyến nghị](./wp-speed-plugin-checklist). Link tài liệu & hướng dẫn cấu hình nằm ở [cuối trang](#tài-liệu-tham-khảo).

| Combo | Stack |
| --- | --- |
| **A** | LiteSpeed Cache + QUIC.cloud CDN + ShortPixel/Imagify + (tuỳ chọn) Perfmatters |
| **B** | WP Rocket + Cloudflare/BunnyCDN + Imagify + Perfmatters |
| **C** | FlyingPress + BunnyCDN + ShortPixel + Perfmatters |
| **D** | Autoptimize + Cloudflare (free CDN) |

---

# Phần 1 — Cách hoạt động

## Luồng chung của 1 page request

Bất kể combo nào, 1 lượt truy cập đều đi qua các lớp sau theo thứ tự. Combo khác nhau chủ yếu ở chỗ **lớp nào "chặn" request lại sớm nhất** — chặn càng sớm càng nhanh, vì PHP + query database luôn là phần chậm nhất:

1. **DNS** — phân giải domain ra IP (CDN edge hoặc server gốc).
2. **CDN edge** (nếu có) — nếu asset tĩnh (CSS/JS/ảnh/font) đã cache sẵn ở điểm gần người dùng, trả về ngay, không chạm tới server gốc. HTML thường **không** được cache ở đây trừ khi cấu hình riêng.
3. **Server cache** (module của LiteSpeed, hoặc plugin cache) — nếu trang đã có bản HTML cache sẵn, trả về ngay tại đây. Đây là lớp quan trọng nhất: tránh được toàn bộ bước 4–6.
4. **WordPress bootstrap + PHP xử lý** — chỉ chạy khi cache ở bước 3 bị miss (trang chưa cache, hoặc bị loại trừ khỏi cache như giỏ hàng/checkout).
5. **Object cache** (Redis/Memcached, nếu có) — trước khi query DB thật, PHP check object cache trước.
6. **MySQL/MariaDB** — chỉ bị chạm tới khi object cache cũng miss.
7. Kết quả HTML được ghi lại vào cache (bước 3) cho lần sau, trả về qua CDN edge tới browser.
8. Browser render trang. JS bị delay (nếu có) chỉ chạy khi người dùng tương tác thật — xảy ra **sau khi trang đã tải xong**, không liên quan tới các lớp cache trên. Đây là lý do "cache không sửa được INP" (xem [Playbook LCP/INP/CLS](./wp-speed-cwv-playbook)).

## Combo A — LiteSpeed: chặn ở tầng server, trước cả PHP

- LSCache là **module của chính LiteSpeed Web Server**, không phải code PHP chạy sau khi WordPress đã load. Khi cache hit, request được trả lời ngay ở tầng server — WordPress **không hề được khởi động**.
- Đây là lý do combo A thường có TTFB thấp nhất dù miễn phí: bỏ qua toàn bộ bước 4–6 mà combo B/C vẫn phải chạm tới một phần.
- QUIC.cloud CDN đứng trước LSCache, cache cả static asset lẫn (tuỳ cấu hình) HTML ngay tại edge.

## Combo B & C — WP Rocket / FlyingPress: cache bằng PHP qua `advanced-cache.php`

- Cả hai dùng chung cơ chế **`advanced-cache.php`** — file "drop-in" chính thức của WordPress core, chạy rất sớm trong vòng đời request (trước khi phần lớn plugin/theme load). File này kiểm tra có bản HTML cache sẵn không, có thì trả về và `exit` ngay.
- Vẫn cần PHP khởi động tối thiểu nên TTFB của B/C thường nhỉnh hơn A một chút trên cùng hạ tầng — bù lại không bị ràng buộc host LiteSpeed.
- FlyingPress (C) khác WP Rocket chủ yếu ở **bước 8** (phía browser): delay JS mạnh tay hơn, trì hoãn nhiều script hơn tới khi có tương tác thật. Đây là lý do C thường thắng B ở điểm INP dù cơ chế cache HTML ở bước 3 gần như giống nhau.

## Combo D — Autoptimize + Cloudflare: không có cache HTML thật

Đây là khác biệt lớn nhất so với A/B/C:

- **Autoptimize không tạo cache HTML** — chỉ minify/combine CSS-JS, tức chỉ tối ưu bước 8 (phía browser), hoàn toàn không đụng tới bước 3.
- **Cloudflare free mặc định không cache HTML động** — chỉ cache static asset tại CDN edge, trừ khi tự thêm Page Rule "Cache Everything" (rủi ro: dễ cache nhầm nội dung cá nhân hoá như giỏ hàng nếu loại trừ path sai). Cách set 3 Page Rule an toàn: xem [hướng dẫn Cloudflare free CDN](#tài-liệu-tham-khảo).
- Kết quả: mỗi request HTML gần như luôn đi hết bước 4–6. Đây là lý do combo D có TTFB/LCP kém hơn hẳn A/B/C dù cấu hình đúng, và tại sao nó cần thêm 1 lớp cache khác (vd: WP Super Cache) mới đạt hiệu năng ngang các combo còn lại.

<details>
<summary>Mẹo: lấy browser cache headers vào <code>.htaccess</code> mà không giữ plugin</summary>

Dùng plugin để **sinh** cấu hình cache rồi **gỡ plugin** đi, tránh tốn thêm CPU/RAM chạy nền:

1. Cài **WP Fastest Cache**, bật **Browser Caching** (cùng các option cache khác nếu muốn).
2. Plugin tự ghi rule vào `.htaccess`. Mở file qua File Manager của hosting, copy toàn bộ đoạn mã plugin vừa ghi, lưu tạm ra ngoài.
3. **Deactivate + Delete** plugin (đoạn mã thường bị xoá theo khi gỡ).
4. Dán lại đoạn mã vào `.htaccess`, lưu.

:::danger[Chỉ thay được 1 phần]
Cách này **chỉ** giữ được browser cache headers (`Cache-Control`, `Expires`). **Page Caching, Preload, Minify** chạy bằng PHP nên mất hẳn khi xoá plugin — không nằm trong `.htaccess`. Muốn có page caching thật thì vẫn phải giữ 1 plugin cache chạy thường trực.
:::

</details>

## Vì sao "chặn sớm hơn" luôn thắng

| Chặn ở bước | Combo | Có cần khởi động WordPress không? |
| --- | --- | --- |
| 2 — CDN edge | A (QUIC.cloud, nếu cache cả HTML) | Không |
| 3 — Server cache | A (module LSCache) | Không |
| 3 — Server cache (qua PHP) | B, C (`advanced-cache.php`) | Tối thiểu |
| 4–6 — PHP + DB đầy đủ | D (không có page cache thật) | Có — chạy toàn bộ mỗi lần |

---

# Phần 2 — So sánh & lựa chọn

## Bảng so sánh

| Tiêu chí | A — LiteSpeed | B — WP Rocket | C — FlyingPress | D — Autoptimize |
| --- | --- | --- | --- | --- |
| **Chi phí/năm** | Free (QUIC.cloud tính phí nếu vượt free tier) | ~$59 | ~$60 | Free |
| **Ràng buộc hosting** | Bắt buộc LiteSpeed Web Server | Không | Không | Không |
| **Độ khó setup** | Trung bình — nhiều option, dễ rối | Thấp nhất — bật là chạy | Thấp — giao diện gọn | Cao nhất — tự ráp nhiều mảnh |
| **Điểm INP** | Tốt | Tốt | Tốt nhất — delay JS mạnh tay mặc định | Kém nhất — không có delay JS sẵn |
| **Cộng đồng / support** | Tốt | Tốt nhất — dễ tra khi gặp lỗi lạ | Trung bình — ít người dùng hơn | Tự lo, ít support chính thức |
| **Rủi ro khi bật tối ưu nâng cao** | Trung bình | Thấp | Trung bình–cao — delay JS mạnh dễ vỡ chức năng | Cao — không có "safe mode" |
| **Điểm mạnh riêng** | Cache tầng server (Phần 1); CDN tích hợp, khỏi trỏ DNS phức tạp | Chạy mọi server, ổn định nhất, không lock-in | Ra tính năng mới sớm hơn WP Rocket | Không phụ thuộc nhà cung cấp thương mại — không lo tăng giá/ngừng phát triển |
| **Điểm yếu riêng** | Đổi host là mất hẳn lợi thế cache tầng server | INP thua C trên cùng 1 site | Tài liệu mỏng khi gặp lỗi hiếm | Thiếu cả page cache lẫn critical CSS — phải tự ghép/tự làm tay |

## Chi phí thực tế theo quy mô site

Ước tính theo năm cho 1 site (giá tham khảo tại thời điểm viết):

| Quy mô site | Combo | Ghi chú |
| --- | --- | --- |
| Site nhỏ/cá nhân, ngân sách 0đ | **D** | Đổi lại: tự cấu hình, điểm INP không tối ưu |
| Site nhỏ-vừa, ngân sách hạn chế | **A** (nếu host hỗ trợ LiteSpeed) | Rẻ nhất trong nhóm "đủ bộ tính năng" |
| Site business/tin tức, traffic vừa | **B** | Cân bằng tốt giữa chi phí — ổn định — công sức |
| Site ưu tiên điểm CWV cao (SEO) | **C** | Chi phí ngang B, đổi lại điểm INP tốt hơn |
| Agency quản lý nhiều site | **A** hoặc **B** | LiteSpeed Cache free không giới hạn site; WP Rocket có gói multi-site |

## Khi nào nên đổi combo

- **Chuyển host sang LiteSpeed** → đổi sang combo A để tận dụng cache miễn phí cấp server, bớt phí hàng năm.
- **Combo B nhưng điểm INP mãi không đạt "Good"** → cân nhắc combo C, combo tối ưu INP mạnh nhất.
- **Ngân sách bị cắt / site quá nhỏ** → chuyển combo D, bù lại bằng công sức tự cấu hình.
- **Traffic tăng đột biến** → bất kể combo nào, ưu tiên bổ sung object cache (Redis) trước khi nghĩ tới đổi combo (xem [Hosting, PHP & Database](./wp-speed-hosting-php-db)).
- **Bắt đầu quản lý nhiều site (agency)** → ưu tiên combo tối ưu chi phí theo đầu site (A hoặc D).

---

## Tài liệu tham khảo

**Docs chính thức** — mô tả tính năng, ổn định lâu dài:

| Combo | Tài liệu |
| --- | --- |
| **A** | [LSCache for WP](https://docs.litespeedtech.com/lscache/lscwp/) · [QUIC.cloud](https://quic.cloud/docs/) |
| **B** | [WP Rocket](https://docs.wp-rocket.me/) · [Cloudflare Cache](https://developers.cloudflare.com/cache/) · [Bunny](https://docs.bunny.net/) |
| **C** | [FlyingPress](https://docs.flyingpress.com/) · [Bunny](https://docs.bunny.net/) |
| **D** | [Autoptimize](https://vi.wordpress.org/plugins/autoptimize/) · [Cloudflare Cache](https://developers.cloudflare.com/cache/) |
| Bổ trợ | [Perfmatters](https://perfmatters.io/) · [ShortPixel](https://shortpixel.com/) · [Imagify](https://imagify.io/) |

**Hướng dẫn cấu hình từng option** — thực dụng hơn khi ngồi setup thật:

| Combo | Bài hướng dẫn |
| --- | --- |
| **A** | [LiteSpeed Cache settings](https://onlinemediamasters.com/litespeed-cache-settings/) · [QUIC.cloud CDN](https://onlinemediamasters.com/quic-cloud-cdn/) |
| **B** | [WP Rocket settings](https://onlinemediamasters.com/wp-rocket-settings/) · [Cloudflare settings cho WordPress](https://onlinemediamasters.com/cloudflare-settings-wordpress/) |
| **C** | [FlyingPress settings](https://onlinemediamasters.com/flyingpress-settings/) · [FlyingPress + Perfmatters: tránh xung đột](https://wpservice.pro/tools-of-the-trade/best-flyingpress-settings/) — phân vai "một plugin lái, một plugin tỉa" để không vỡ mobile menu; có mục riêng cho Elementor, GeneratePress, WooCommerce |
| **D** | [Autoptimize settings](https://onlinemediamasters.com/autoptimize-settings/) · [Cloudflare free CDN](https://novo-media.ch/en/web-optimization/cloudflare-free-cdn/) — 3 Page Rule cụ thể để ép cache HTML trên gói free |
| Bổ trợ | [Perfmatters settings](https://onlinemediamasters.com/perfmatters-settings/) |

:::note
Nhóm thứ hai là blog bên thứ ba, không phải tài liệu chính thức — chi tiết và cập nhật thường xuyên, nhưng có affiliate link hoặc quảng cáo công cụ riêng của tác giả. Phần cấu hình từng option đáng tham khảo; phần khuyến nghị "nên mua gì / host nào tốt" nên đọc có chọn lọc.
:::

Khái niệm 4 loại cache & cơ chế cache của WordPress core: [WordPress Advanced Administration — Cache](https://developer.wordpress.org/advanced-administration/performance/cache/).
