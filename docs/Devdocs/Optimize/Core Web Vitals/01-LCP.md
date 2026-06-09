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

## Nguồn tham khảo

https://web.dev/articles/lcp