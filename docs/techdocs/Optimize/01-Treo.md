---
id: treo
title: Treo.sh
---

## Tổng quan về  Treo.sh

Treo.sh - Là 1 bên thứ 3 giám sát và hiển thị report về speed của các website. Nó được hỗ trợ bởi lighthouse (powered by Lighthouse).

Các report ở Treo.sh tập trung vào trải nghiệm của người dùng thực, nên số liệu đo lường nó sẽ không hoàn toàn giống 100% khi mình test với những tool phổ biến hiện nay như [“Lighthouse”](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) hay [“Pagespeed insights"](https://pagespeed.web.dev/).

Treo.sh là công cụ tuyệt vời để các doanh nghiệp bắt đầu hiểu được hiệu suất của trang web đối với người dùng trên toàn thế giới.

Dữ liệu hiển thị report ở treo.sh sẽ dựa trên dataset [CrUX](https://developer.chrome.com/docs/crux/) của chrome. Đây là một tập dữ liệu phản ánh cách người dùng Chrome thực tế trải nghiệm các điểm đến phổ biến trên web.

Có [một số điều cần nhớ](https://fershad.com/writing/using-treos-free-site-speed-test/) khi xem dữ liệu CrUX:
    1. Dữ liệu được lấy từ các phiên của người dùng Google Chrome đã chọn chia sẻ dữ liệu này với Google.
    2. Dữ liệu không bao gồm những người sử dụng Chrome trên iOS.
    3. Nếu một trang web không có nhiều lưu lượng truy cập (Lượng traffic đủ để cung cấp dữ liệu ẩn danh có ý nghĩa) thì bạn sẽ không thấy bất kỳ kết quả nào.
    4. Điểm số trung bình của 1 website được report là tập hợp từ toàn bộ cả page mà treo.sh thông kê, có nghĩa là nó k chỉ dựa vào điểm của mỗi homepage hoạc 1 page cố định nào đó.
    5. Bộ dữ liệu CrUX được cập nhật hàng tháng.


## Treo.sh giúp gì cho việc improve performance
Treo.sh sẽ report chi tiết các thông số liên quan đến từng page và mỗi loại thiết bị (mobile, desktop, tablet) và các yếu tố cấu thành khác như country.

Ở Treo.sh có thể setup alert gửi thông báo về cho admin dựa trên các rules nhất định.
![Alert Notify](/treo/img/alert.png)

Để  sử dụng treo.sh với đẩy đủ report chi tiết thì cần [trả phí](https://treo.sh/pricing)

![Treo Pricing](/treo/img/pricing.png)

### Monitoring Tool
Sử dụng Treo.sh sẽ cho ta 1 cái nhìn từ tổng quan chi tiết với bảng dashboard khá trực quan như sau:
- Có thể so sánh các chỉ số với website của đối thủ, từ đó xây dừng phương án tối ưu tốt hơn
![Monitoring feature](/treo/img/monitoring.png)

Monitoring theo từng page
![Monitoring per page](/treo/img/monitoring-per-page.png)

=> Từ đó nhận biết xem những page nào đang gặp vấn đề, và tìm ra giải pháp tối ưu cụ thể cho từng trường hợp.

=> Số lượng URL cần dc crawl có thể dc import qua file sitemap. hoạc để treo.sh tự detect.
Tuy nhiên Số lượng url mà tool treo.sh crawl sẽ giới hạn theo gói pricing mà mình mua.
Nên mình có thể ưu tiên crawl nhưng url cần thiết thông qua sitemap.

### Detail monitoring
Các bảng report data cốt yếu ảnh hưởng tới mục tiêu và giải pháp làm cải thiện speed của website.

    1. Biểu đồ report 1 website được đo lường tổng thể  trong 12 tháng gần nhất.
![Monitoring detail](/treo/img/monitoring-detail.png)

    2. Biểu đồ cho các thông số ở 1 page cụ thể 
![Monitoring detail](/treo/img/monitoring-detail-page.png)

    3. Biểu đồ  chi tiết về performance ở mỗi country
![Monitoring detail](/treo/img/monitoring-country.png)


### Ý nghĩa của các biểu đồ monitoring
    1. Đánh giá được hiện trạng website của mình so với các đối thủ
    2. Xác định được các Page ảnh hưởng tới performance chung của website.
    3. Xác định được country nào đang có vấn đề về performance
    4. Xác định được những metrics nào (CWV) đang có điểm số không tốt.

    ====> Từ đó tập trung được vào mục tiêu cụ thể  cần optimize.

    Việc improve performance sẽ dựa trên target về customer’s location của kh. KHông hẳn điểm trung bình thấp là đã thấp, mà cần đánh giá dựa vào target customer của kh ở mỗi country hoạc page.

    Từ các bảng biểu đồ, biểu thị các thông số bên trên cho ta tới 1 kết quả là: Các số liệu thống kê về speed nó sẽ k đồng nhất với nhau qua khác mốc thời gian khác nhau, và ở mỗi thiết bị khác nhau cũng như vậy

----------------------------------------
## Optimize dựa trên report của Treo.sh
### Nhận biết hiện trạng của website
- Về điểm số Treo.sh sẽ report chi tiết cho từng page. do vậy từ bảng số liệu của page đó chúng ta có quyết định cải thiện thêm hay không.
- Điểm số được cho là bình thường chấp nhận dc là số liệu được tính trung bình đạt 50- 75% của tháng được report

#### VD1. xem bảng report sau của V508
![Ex1](/treo/img/ex1.png)
    
- Điểm FCP: tiêu chí của kh là phải dưới 1.8s (đây là số liệu dc đánh giá là good của google page speed). nhưng như bảng report bên trên thì 75% của tháng đó là 2.0s => Kết quả này chủ ở mức khá (> 50%)
- Điềm LCP: tiêu chí của kh là phải dưới 2.5s  (đây là số liệu dc đánh giá là good của google page speed).  nhưng như bảng report bên trên thì 75% của tháng đó là 2.3s => Kết quả này rất tốt.
- Các điểm khác cách tính cũng tương tự.
- Điểm được đánh giá là mức khá (chấp nhận dc) khi tỉ lệ đạt dưới 75% (nhưng trên 50%). dưới 50% của target thì dc xem là chưa đạt, dưới 25% được xem là kém, và trên 75% được xem là tốt. [Reference](https://www.speedcurve.com/web-performance-guide/averages-medians-percentiles/)


#### VD2. Test site BC
![Ex2](/treo/img/ex2.png)
- => Ta có thể thấy điểm số trung bình của các điểm Core web vitals khá thấp. cần optimize


### LÀM SAO ĐỂ TĂNG điểm trung bình

    1. Cần check và tăng theo từng page
    2. Cần check điểm số dựa trên từng location
    3. Cần check điểm số vào cải thiện trên mỗi loại thiết bị (desktop, mobile, tablet)
    4. MOBILE FIRST là ưu tiên cao nhất khi làm optimize

#### Các phương án làm optimize đã từng được sharing ở link dướ đây
https://docs.google.com/document/d/1uWuDpSPLVn6fWubjvxQxPrWJ3FyXzL5i9SeKO5zOTgA/edit

## Tư liệu tham khảo

- [**CURX**](https://developer.chrome.com/docs/crux/)
- [**Treo speed test**](https://fershad.com/writing/using-treos-free-site-speed-test/)
- [**Performance guide**](https://www.speedcurve.com/web-performance-guide/averages-medians-percentiles/)
