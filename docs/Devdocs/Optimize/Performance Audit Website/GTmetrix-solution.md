---
id: GTmetrix-solution
title: Solution GTmetrix
---

# Solution Cải Thiện Các Chỉ số

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-img-report.png)

<strong> Solution </strong>
- Site đã convert ảnh webp. Cần Optimize size ảnh, upload ảnh có width height phù hợp với block chứa ảnh.

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-cdn-report.png)

<strong> Solution </strong>

- Sử dụng CDN để cache những static file.
  + Hình ảnh (.jpg, .png, .webp, .svg)
  + CSS (.css)
  + JavaScript (.js)
  + Font (.woff, .woff2, .ttf)
  + Video, audio tĩnh.

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-width-height-img-report.png)

<strong> Solution </strong>
- Set width height cho những img tag được report.

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-next-gen-format-img.png)

<strong> Solution </strong>

- Upload thay ảnh bị report bằng ảnh webp.
- Ảnh webp cần phải resize trước khi upload lên site.

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-render-block-report.png)

<strong> Solution </strong>
- Css cần check những đoạn quan trọng cho phần viewport để tách ra inline vào header. Những css còn lại load async.
- Google fonts dùng preload:

```html title="html"
  <link rel="preload" as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?family=..."/>
```

<strong> Ảnh report </strong>

![GTmetrix](/img/performance-audit-website/GTmetrix-thread-report.png)

<strong> Solution </strong>
- Check các file js được report xem có thể lazyload mà không ảnh hưởng đến hiển thị không. Nếu được thì để layzyload tránh block.