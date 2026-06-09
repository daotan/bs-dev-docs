---
id: lighthouse-solution
title: Solution Lighthouse
---

# Solution Cải Thiện Các Chỉ số

<strong> Ảnh report </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-image-optimize.png)

<strong> Solution </strong>
- Site đã convert ảnh webp. Cần Optimize size ảnh, upload ảnh có width height phù hợp với block chứa ảnh.

<strong> Ảnh report </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-render-block-report.png)

<strong> Solution </strong>
- Có thể move js xuống cuối qua config `bin/magento config:set dev/js/move_script_to_bottom 1`.
- Css cần check những đoạn quan trọng cho phần viewport để tách ra inline vào header. Những css còn lại load async.
- Google fonts dùng preload:

```html title="html"
  <link rel="preload" as="style"
        onload="this.rel='stylesheet'"
        href="https://fonts.googleapis.com/css2?family=..."/>
```

<strong> Ảnh report </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-LCP-report.png)

<strong> Solution </strong>
- Cần thêm fetchpriority=high vào img tag. 
- Sử dụng preload img:

```html title="html"
  <link rel="preload" as="image"
        href="/path/to/hero-image.jpg"
        fetchpriority="high"/>
```

<strong> Ảnh report </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-CLS-report.png)

<strong> Solution </strong>
- Set width, height cho ảnh chưa được set width/height.
- Những block chứa icon cần set min-width, min-height để giữ chỗ cho icon load bằng js.
- Custom fonts chưa load làm test width thay đổi -> fix: font-display: optional hoặc font-display: swap + size-adjust.

```css title="css"
    @font-face {
        font-family: 'NespressoLucas';
        src: url('NespressoLucas-Regular.woff') format('woff');
        font-display: optional; /* Không swap nếu font chưa ready → không CLS */
    }
```
- Hoặc nếu muốn vẫn dùng custom font nhưng minimize shift:

```css title="css"
    @font-face {
        font-family: 'NespressoLucas';
        src: url('NespressoLucas-Regular.woff') format('woff');
        font-display: swap;
        /* Thêm size-adjust để fallback font có size tương đương */
        size-adjust: 98%;
        ascent-override: 90%;
        descent-override: 10%;
    }
```

<strong> Ảnh report </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-thread-report.png)

<strong> Solution </strong>
- Check các file js được report xem có thể lazyload mà không ảnh hưởng đến hiển thị không. Nếu được thì để layzyload tránh block.