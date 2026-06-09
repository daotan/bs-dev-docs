---
id: cls-optimize
title: Optimize CLS
---

# Optimize CLS

## Image/video luôn có width/height hoặc aspect-ratio

- Luôn khai báo width và height trên thẻ `<img>` và `<video>`, hoặc dùng CSS `aspect-ratio` để browser có thể cấp phát đúng lượng không gian trước khi ảnh tải xong.

```html title="html"
    <img src="a.jpg" width="640" height="360" />
```
Hoặc
```css title="CSS"
    img {
        aspect-ratio: 16 / 9;
    }
```

- Các browser hiện đại tự tính `aspect-ratio` dựa trên `width` và `height` attribute, vì vậy chỉ cần set hai thuộc tính này là đủ để tránh layout shift ngay cả với responsive images.
- Với responsive images dùng `srcset`, giữ tất cả các ảnh cùng aspect ratio:
```css title="CSS"
    <img width="1000" height="1000"
        src="img-1000.jpg"
        srcset="img-1000.jpg 1000w, img-2000.jpg 2000w"
        alt="..." />
```

## Iframe/Embed (YouTube, map, social) 
#### Cần set kích thước trước:

- Dùng `min-height` hoặc CSS `aspect-ratio` để giữ chỗ cho content sẽ load sau. Tránh để container collapse về 0px khi không có iframe/embed — điều đó gây CLS tương đương với việc chèn nội dung.
```css title="CSS"
    .embed {
        width: 100%;
        aspect-ratio: 16/9;
    }
```
Hoặc
```css title="CSS"
    .embed {
    min-height: 250px;
}
```

## Ads/dynamic slot
- Không collapse khi chưa load ads, dự trữ slot cố định (max size của element)

```css title="CSS"
    .ad-slot {
        min-height: 250px;
    }
```

## Tránh insert content “đẩy layout” (vd dùng prepend của js)

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

## Font loading không gây shift

- Dùng swap
```css title="CSS"
    @font-face {
        font-display: swap;
    }
```
:::tip
Dùng thêm size-adjust để giảm chênh lệch fallback font
:::

## Tránh layout shift do async data

- Đặt trước kích thước của element
```css
    .section {
        min-height: 300px;
    }
```

## Nguồn tham khảo

https://web.dev/articles/optimize-cls