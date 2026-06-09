---
id: inp
title: INP
---

# INP
## INP là gì?
+ INP (Interaction to Next Paint) là metric đo độ phản hồi của website khi user tương tác.
+ Nó đo thời gian từ lúc user click / tap / gõ phím → đến khi UI phản hồi.
+ Cách INP hoạt động:
  + Ghi nhận tất cả interactions trong suốt lifecycle page.
  + Chọn ra interaction chậm nhất (gần worst-case) → làm INP

## Mức INP bao nhiêu là tốt?
Để mang lại trải nghiệm người dùng tốt, các trang web nên cố gắng đạt được thời gian phản hồi từ 200ms trở xuống.
![Core Web Vitals](/img/metric-inp.png)

## INP đo những gì trong 1 interaction
Một interaction gồm 3 phần:
1. Input delay
   + User click nhưng main thread đang bận → bị delay
2. Processing
   + JS handler chạy
3. Presentation delay
   + Chờ browser render frame mới

## Nguồn tham khảo

https://web.dev/articles/inp
