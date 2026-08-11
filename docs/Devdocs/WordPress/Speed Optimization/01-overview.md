---
id: wp-speed-overview
title: Tổng quan
---

# Tối ưu tốc độ WordPress — Tổng quan

> Ghi chú tổng hợp từ khoá học Optimize Speed WP. Mục này chỉ tóm tắt nhanh; chi tiết từng phần nằm ở các trang tiếp theo.

## Điểm cốt lõi cần nhớ

- **Core Web Vitals** là trọng tâm: tối ưu LCP, TBT (proxy của INP) và CLS — đo bằng Lighthouse / PageSpeed Insights.
- **3 việc cốt lõi cần lo**: Cache → Minify & Combine → Dọn CSS/JS dư thừa. Cách nhanh nhất là chọn **1 plugin all-in-one** (WP Rocket/LiteSpeed Cache/FlyingPress) tự lo cả 3 — xem [bộ plugin đề xuất](./wp-speed-plugin-checklist).
- **Ảnh**: luôn convert sang WebP/AVIF, khai báo `width`/`height`, không lazy-load ảnh hero.
- **Hạ tầng**: dùng CDN (Cloudflare/BunnyCDN) + HTTPS.

:::tip[Nguyên tắc chung]
Hầu hết các điểm cần tối ưu trên WordPress đều đã có plugin hỗ trợ sẵn — chỉ cần chọn đúng 1–2 plugin phù hợp là có thể xử lý gần hết checklist, không cần tự code tay. Xem [bộ plugin đề xuất](./wp-speed-plugin-checklist).
:::

## 5 tín hiệu "Page Experience" của Google

Core Web Vitals chỉ là 1 trong 5 nhóm tín hiệu Google dùng để đánh giá trải nghiệm trang:

| Tín hiệu | Yêu cầu |
| --- | --- |
| Core Web Vitals | LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1 |
| Mobile Friendly | Responsive tốt trên mọi kích thước màn hình |
| Safe Browsing | Không chứa mã độc / trang lừa đảo |
| HTTPS | Kết nối được mã hoá |
| No Intrusive Interstitials | Không dùng pop-up che nội dung chính |

Nguồn: [Page Experience Update — OneUpWeb](https://www.oneupweb.com/resources/page-experience-update/)

## Đi tiếp

1. [Playbook LCP / INP / CLS trên WordPress](./wp-speed-cwv-playbook) — nguyên nhân, giải pháp, cách làm cụ thể bằng plugin.
2. [Bộ plugin đề xuất & checklist bảo trì](./wp-speed-plugin-checklist) — performance stack, vai trò từng plugin, anti-patterns.
3. [Hosting, PHP & Database](./wp-speed-hosting-php-db) — chọn hosting, Cloudflare + HTTPS, config PHP, tuning MySQL, ngưỡng autoloaded options.
4. [Cách hoạt động & So sánh 4 combo](./wp-speed-stack-deep-dive) — luồng xử lý 1 request qua từng lớp cache, ưu/nhược điểm, chi phí, khi nào nên đổi combo.
