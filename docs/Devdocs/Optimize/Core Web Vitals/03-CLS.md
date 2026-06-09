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

## Nguồn tham khảo

https://web.dev/articles/cls
