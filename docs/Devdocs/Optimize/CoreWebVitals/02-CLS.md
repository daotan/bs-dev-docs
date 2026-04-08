---
id: cls
title: CLS
---

# CLS
## CLS là gì?
+ CLS (Cumulative Layout Shift) là một chỉ số trong Core Web Vitals dùng để đo độ ổn định layout của page.
+ Nó đo:
  + Nội dung bị “nhảy” bao nhiêu (diện tích bị ảnh hưởng)
  + Và “nhảy xa” bao nhiêu (khoảng cách dịch chuyển)
+ Vì vậy CLS = mức độ xê dịch bất ngờ của UI trong suốt vòng đời trang

## Mức CLS bao nhiêu là tốt?
Để mang lại trải nghiệm người dùng tốt, các trang web nên cố gắng đạt điểm CLS từ 0,1 trở xuống.
![Core Web Vitals](/img/metric-cls.png)

## CLS được tính như thế nào?
Công thức:
```bash
    CLS = impact fraction × distance fraction
```
+ Impact fraction: % vùng viewport bị ảnh hưởng
+ Distance fraction: khoảng cách phần tử bị dịch chuyển
<strong> Ví dụ: </strong>
![Core Web Vitals](/img/ex-cls.png)
+ Trong hình trên: Có 1 element chiếm 50% khung hình. Sau đó bị dịch chuyển xuống 25% -> impact fraction(phần khung đỏ) là 0.75
+ Phần tử dich chuyển 25% -> distance fraction là 0.25. 
+ Áp dụng công thức thì chỉ số cls là: 0.75 * 0.25 = 0.1875
+ Nếu nhiều session window thì CLS không cộng toàn bộ → chỉ lấy session window tệ nhất

## Các cách optimize CLS

<strong> Image/video luôn có width/height hoặc aspect-ratio </strong>

```html title="html"
  <img src="a.jpg" width="640" height="360" />
```
Hoặc
```css title="CSS"
    aspect-ratio: 16 / 9;
```

<strong>Iframe/Embed (YouTube, map, social) cần set kích thước trước</strong>

```css title="CSS"
  .embed {
    width: 100%;
    aspect-ratio: 16/9;
  }
```

<strong>Ads/dynamic slot: Không collapse khi chưa load ads, dự trữ slot cố định (max size của element)</strong>

```css title="CSS"
  .ad-slot {
    min-height: 250px;
  }
```

<strong>Tránh insert content “đẩy layout” (vd dùng prepend của js)</strong>

+ Cách làm đúng là insert vào placeholder có sẵn

```html title="html"
  <div class="block-banner"></div>
```
```css title="CSS"
  .block-banner {
    min-height: 300px;
  }
```
```javascript title="js"
  document.querySelector('.block-banner').prepend(newBanner);
```
+ Overlay (position fixed)
```css
  .banner {
    position: fixed;
    top: 0;
  }
```

<strong>Font loading không gây shift</strong>

Dùng swap
```css title="CSS"
  @font-face {
    font-display: swap;
  }
```
:::tip
  Dùng thêm size-adjust để giảm chênh lệch fallback font
:::

<strong>Tránh layout shift do async data</strong>

Đặt trước kích thước của element
```css
  .section {
    min-height: 300px;
  }
```
<strong></strong>
<strong></strong>

## Nguồn tham khảo

https://web.dev/articles/cls

https://web.dev/articles/optimize-cls