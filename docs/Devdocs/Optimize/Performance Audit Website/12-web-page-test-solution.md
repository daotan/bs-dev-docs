---
id: web-page-test-solution
title: Solution WebPageTest
---

# Solution Cải Thiện Các Chỉ số

<strong> Ảnh report </strong>

![WebPageTest](/img/performance-audit-website/webPageTest-img-report.png)

<strong> Solution </strong>
- Site đã convert ảnh webp. Cần Optimize size ảnh, upload ảnh có width height phù hợp với block chứa ảnh.

<strong> Ảnh report </strong>

![WebPageTest](/img/performance-audit-website/webPageTest-change-img-report.png)

<strong> Solution </strong>
- Upload thay ảnh bị report bằng ảnh webp.
- Ảnh webp cần phải resize trước khi upload lên site.

<strong> Ảnh report </strong>

![WebPageTest](/img/performance-audit-website/webPageTest-img-width-height-report.png)

<strong> Solution </strong>

- Set width height cho những img tag được report. 

<strong> Ảnh report </strong>

![WebPageTest](/img/performance-audit-website/webPageTest-render-block-report.png)

<strong> Solution </strong>
- Có thể move js xuống cuối qua config `bin/magento config:set dev/js/move_script_to_bottom 1`.
- Css cần check những đoạn quan trọng cho phần viewport để tách ra inline vào header. Những css còn lại load async.