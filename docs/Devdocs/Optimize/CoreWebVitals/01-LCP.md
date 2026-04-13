---
id: lcp
title: LCP
---
# LCP

## LCP Là Gì?
+ Largest Contentful Paint (LCP) là một chỉ số trong Core Web Vitals dùng để đo thời gian hiển thị phần tử lớn nhất của trang. Những phần tử lớn nhất thường là: banner, img, video, Background image (CSS), Block text lớn (h1, p, div chứa text).
+ Cụ thể: LCP đo thời gian từ lúc bắt đầu tải trang → đến khi phần tử lớn nhất trong viewport được render.

## Mức LCP bao nhiêu là tốt?
Để mang lại trải nghiệm người dùng tốt, các trang web nên cố gắng đạt được thời gian hiển thị nội dung lớn nhất (Largest Contentful Paint) là 2,5 giây hoặc ít hơn.
![Core Web Vitals](/img/metric-lcp.png)

## Các thành phần ảnh hưởng đến LCP
+ Time To First Byte (TTFB): Là thời gian từ lúc người dùng request trang → đến khi byte đầu tiên từ server trả về.
+ Resource Load Delay: Là thời gian từ khi browser nhận HTML → đến khi bắt đầu tải resource quan trọng (ví dụ: ảnh LCP, CSS, font).
+ Resource Load Duration: Là thời gian để tải xong resource. Phụ thuộc vào kích thước file, network, CDN có nhanh không.
+ Render Delay: Là thời gian từ khi resource đã tải xong → đến khi nó được hiển thị lên màn hình.

## Các cách optimize LCP
### 1. Giảm TTFB
+ Dùng CDN (Cloudflare, Akamai…)
+ Enable caching (HTML cache nếu có thể)
+ Optimize database query
+ Dùng server gần user (edge/serverless)

<strong>Mục Tiêu < 500ms</strong>

### 2. Tối ưu resource của LCP element
#### Nếu LCP là IMAGE
Cần đầy đủ attribute loading="eager", fetchpriority="high", width, height.
```html title="html"
  <img src="hero.webp" 
      loading="eager" 
      fetchpriority="high" 
      width="1200" 
      height="600"/> 
```
:::info
+ loading="eager" → load ngay, không lazy
+ fetchpriority="high" → ưu tiên tải
+ width/height → tránh layout shift
:::

<strong>Có thể tối ưu thêm</strong>
+ Dùng WebP / AVIF
+ Resize đúng kích thước (không load ảnh 4K rồi scale xuống)
+ Optimize size ảnh.
+ Preload img:
```html title="html"
    <link 
      rel="preload" 
      as="image" 
      href="/hero.webp"
    />
```
#### Nếu LCP là text
Vấn đề thường là font load chậm. Cần css font-display: swap; hoặc preload font.
```css title="CSS"
    @font-face {
      font-display: swap;
    }
```
```html title="html"
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```
### 3. Loại bỏ render-blocking resources
Vấn đề là CSS/JS block render → LCP bị delay

Cách xử lý: 
- CSS:
  + Inline critical CSS: Những Css quan trọng cho hiển thị của viewport.
  + Load CSS còn lại async.
  + Remove CSS không sử dụng.
  + Minify CSS
- JS thêm async hoặc defer:
```bash
  <script src="app.js" defer></script>
```
Hoặc 
```bash
  <script src="analytics.js" async></script>
```
### 4. Những điều không nên làm
+ Không Lazy load cho LCP đặc biệt là img.
+ Tránh client-side rendering (CSR) nặng. Nên ưu tiên dùng SSR hoặc SSG .
:::info 
+ CSR(Client-Side Rendering) render giao diện ở phía trình duyệt (browser) bằng JavaScript.
+ SSR(Server-Side Rendering) render HTML mỗi request trên server
+ SSG (Static Site Generation) render HTML sẵn khi build (deploy)
:::

## Nguồn tham khảo

https://web.dev/articles/lcp

https://web.dev/articles/optimize-lcp