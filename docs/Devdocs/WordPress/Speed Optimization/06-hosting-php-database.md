---
id: wp-speed-hosting-php-db
title: Hosting, PHP & Database
---

# Hosting, PHP & Database

Các trang trước tập trung vào plugin và front-end. Trang này nói về tầng hạ tầng bên dưới — thứ quyết định "trần" performance mà plugin không tự sửa được. Tổng hợp từ [WordPress Advanced Administration Handbook](https://developer.wordpress.org/advanced-administration/performance/).

## Chọn loại hosting phù hợp

| Loại hosting | Đặc điểm | Việc có thể tối ưu |
| --- | --- | --- |
| Shared Hosting | Ít quyền kiểm soát server | Tập trung vào cache, cấu hình WordPress, offload nội dung ra CDN |
| Managed WordPress Hosting | Stack đã cấu hình sẵn (thường có cache/OPcache/CDN tích hợp) | Tối ưu trong phạm vi hosting cho phép — thường ít việc phải làm nhất |
| VPS / Dedicated | Toàn quyền kiểm soát server | Tối ưu sâu cả phần mềm (PHP, MySQL, web server) lẫn content delivery |
| Nhiều server | Dành cho site traffic rất lớn | Load balancer phân tải + phân tán database (xem HyperDB bên dưới) |

Yếu tố khác ảnh hưởng tốc độ ngoài "loại hosting":
- **Phần cứng**: CPU, RAM, tốc độ ổ đĩa (SSD/NVMe) ảnh hưởng trực tiếp.
- **Khoảng cách địa lý** server ↔ người dùng — dùng CDN để giảm.
- **Phiên bản phần mềm**: Linux, Apache/Nginx, MySQL/MariaDB, PHP luôn nên ở bản còn được support (vá bug + tăng performance).
- **Traffic độc hại**: brute-force, DDoS cần được chặn (Cloudflare, plugin security) — traffic rác cũng ngốn tài nguyên server.

:::tip[DNS]
Dùng DNS service ngoài (Cloudflare DNS, Route 53...) thay vì để chính server WordPress xử lý DNS — giảm tải cho server gốc.
:::

## PHP: version & cấu hình

**Version**: chạy PHP 8.x bản mới nhất còn được hỗ trợ chính thức. PHP 7.4 đã hết vòng đời (EOL) — nếu site còn chạy 7.4 hoặc thấp hơn, đây là rủi ro bảo mật, không chỉ là vấn đề tốc độ. Luôn test trên staging trước khi upgrade (một số plugin/theme cũ có thể chưa tương thích PHP 8).

**OPcache**: bật opcode cache (OPcache đi kèm sẵn trong PHP, chỉ cần enable) — cache bytecode PHP đã biên dịch, tránh việc compile lại file PHP ở mỗi request. Ảnh hưởng tốc độ rất lớn, gần như bắt buộc phải bật trên production.

**Các directive quan trọng trong `php.ini`**

| Directive | Ý nghĩa | Lưu ý |
| --- | --- | --- |
| `max_execution_time` | Thời gian tối đa 1 script PHP được chạy | Canh khớp với timeout của web server (Apache/Nginx), không thấp hơn |
| `max_input_time` | Thời gian tối đa để nhận input/upload | Quan trọng với site có upload file lớn |
| `memory_limit` | RAM tối đa cho 1 lần render PHP | Xem 2 hằng số WordPress bên dưới |
| `upload_max_filesize` | Dung lượng tối đa 1 file upload | |
| `post_max_size` | Dung lượng tối đa 1 request (phải ≥ `upload_max_filesize`) | |

**2 hằng số memory limit riêng của WordPress** (khai báo trong `wp-config.php`):

```php title="wp-config.php"
define( 'WP_MEMORY_LIMIT', '64M' );      // Frontend — mặc định 40MB (64MB cho Multisite)
define( 'WP_MAX_MEMORY_LIMIT', '256M' ); // Backend/wp-admin — mặc định 256MB
```

Backend cần memory cao hơn frontend vì xử lý ảnh, import dữ liệu, chạy plugin nặng.

:::info[WP-Cron]
Mặc định `wp-cron.php` chạy dựa trên mỗi lượt truy cập trang (tốn ít tài nguyên nhưng không chính xác về thời gian). Với site traffic cao, nên tắt cron kiểu này và dùng system cron thật để trigger đúng lịch:

```php title="wp-config.php"
define( 'DISABLE_WP_CRON', true );
```

```bash title="crontab -e"
*/15 * * * * curl -s https://example.com/wp-cron.php?doing_wp_cron > /dev/null 2>&1
```
:::

## MySQL / MariaDB

- Đảm bảo mọi bảng dùng **InnoDB**, không phải MyISAM (MyISAM cũ hơn, lock toàn bảng khi ghi) — convert bảng cũ nếu site lâu đời còn sót MyISAM.
- Tinh chỉnh query cache (nếu server hỗ trợ) để tăng tốc các query lặp lại.
- Giới hạn số revision lưu cho mỗi post/page — mặc định WordPress lưu revision vô hạn, gây phình database:

```php title="wp-config.php"
define( 'WP_POST_REVISIONS', 5 );
```

- Dọn database định kỳ: xoá revision cũ, transients hết hạn, spam comment (xem thêm [checklist bảo trì](./wp-speed-plugin-checklist)).

## Autoloaded options

:::danger[Ngưỡng quan trọng — dễ bị bỏ sót]
"Autoloaded options" là các config của plugin/theme được tự động load vào memory ở **mọi** page request, kể cả khi trang đó không dùng đến. WordPress khuyến nghị giữ tổng dung lượng autoload dưới **800KB**. Vượt ngưỡng này làm chậm toàn bộ site — kể cả khi đã bật page cache đầy đủ, vì cache không giúp được với query autoload này trên các request chưa cache hoặc admin-ajax.
:::

Cách kiểm tra nhanh (chạy trong phpMyAdmin/Adminer hoặc WP-CLI):

```sql
SELECT SUM(LENGTH(option_value)) AS autoload_size
FROM wp_options WHERE autoload = 'yes';
```

Nếu vượt 800KB: dùng plugin **Query Monitor** hoặc **WP-Optimize** để tìm option nặng nhất (thường do plugin cũ/đã gỡ để lại rác), rồi xoá hoặc set `autoload = 'no'` cho các option không cần load mỗi request. Bật **Object Cache** thường trực (Redis/Memcached) cũng giảm đáng kể tác động của vấn đề này.

## Khi 1 server không còn đủ tải

- **Load balancer**: phân traffic ra nhiều web server.
- **HyperDB**: plugin chính thức của WordPress.com để phân tán database (replicated hoặc partitioned) ra nhiều server, dùng khi 1 database server không còn đáp ứng nổi.

Đây là mức tối ưu cho site traffic rất lớn — phần lớn site sẽ không cần tới, nhưng cần biết để không tự tối ưu sai hướng khi vấn đề thực chất là hạ tầng.

## Nguồn tham khảo

- [Performance / Optimization — WordPress Developer Handbook](https://developer.wordpress.org/advanced-administration/performance/)
- [Cache](https://developer.wordpress.org/advanced-administration/performance/cache/)
- [Optimization](https://developer.wordpress.org/advanced-administration/performance/optimization/)
- [PHP](https://developer.wordpress.org/advanced-administration/performance/php/)
