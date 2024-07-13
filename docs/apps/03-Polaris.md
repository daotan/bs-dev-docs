---
id: polaris
title: Polaris
---

# Polaris

Hệ thống thiết kế [**Polaris**](https://polaris.shopify.com/?shpxid=c792a82e-8EDC-4B21-9C3E-4525D79D0439) bao gồm các nguyên tắc, design patterns của các UI components, tokens, icons để xây dựng apps trong Shopify admin. 

Shopify admin là khu vực mà người dùng quản lý hoạt động kinh doanh của họ. Shopify apps được nhúng vào admin để chúng có thể tích hợp vào các quy trình hoạt động của người dùng. Shopify admin cung cấp một surface (bề mặt) cho các embedded apps (ứng dụng nhúng) để render UI của chúng. Trên web, một surface là một iframe và trong [**Shopify mobile app**](https://www.shopify.com/install?shpxid=c792a82e-8EDC-4B21-9C3E-4525D79D0439), surface là một WebView.

![Shopify App Overview](/img/polaris.png)

Bên trong một app surface, Shopify khuyến khích bạn sử dụng [**Polaris**](https://polaris.shopify.com/?shpxid=caf05616-172F-4297-52C2-5C3BDD2CD8FF) để tạo ra các giao diện gần gũi và trải nghiệm người dùng được nhất quán. Nói cách khác, app của bạn nên có design của Polaris để người dùng có thể nắm bắt và sử dụng dễ dàng hơn.
App của bạn nên import thư viện [**Polaris React**](https://www.npmjs.com/package/@shopify/polaris), thư viện bao gồm các component có sẵn của Polaris mà bạn có thể sử dụng trong Shopify admin. Sau đó, thực hiện theo [**App Design Guidelines**](https://shopify.dev/docs/apps/design-guidelines) để đàm bảo đem lại trải nghiệm người dùng nhất quán và gần gũi.

Polaris bao gồm các tính năng sau:

+ **Hướng dẫn design**: Hướng dẫn những mặt như khả năng tiếp cận, màu sắc, kiểu chữ, cách dòng, quy tắc đặt tên, và ngôn ngữ biểu đạt hành động cho phép bạn sáng tạo những trải nghiệm của một trang admin.
+ **Thành phần**: Các khối thành phần cơ bản có thể tái sử dụng, hình thành bởi các giao diện thành phần và styles đi kèm, được đóng gói thông qua code.
+ **Tokens**: Các biến CSS quyết định chủ trương thiết kế cho các thành phần như màu sắc, cách dòng, kiểu chữ. Áp dụng chúng trong app để thống nhất trải nghiệm giao diện người dùng.
+ **Icons**: Những icons được thiết kế tỉ mỉ cẩn thận tập trung vào chủ đề thương mại và tinh thần kinh doanh. Sử dụng chúng như một phương tiện hỗ trợ trực quan giúp người dùng hoàn thiện các công việc.
+ **Patterns**: Các giải pháp có thể lặp lại tùy cho những vấn đề UX thông thường trong một tình huống cụ thể của người dùng. Sử dụng đúng pattern, phù hợp ngữ cảnh sẽ giúp trang admin dễ sử dụng và cảm thấy gần gũi hơn.

## App Bridge

Để hoàn tất khởi tạo một trải nghiệm người dùng, Shopify apps phải render nội dung bên ngoài surface của chúng ở một số vị trí khác của trang admin. [**Thư viện App Bridge**](https://shopify.dev/docs/apps/tools/app-bridge) cho phép Shopify apps trigger admin ở bên ngoài surface thực hiện render UI.

App Bridge thường áp dụng cho trường hợp như: 
+ Render một [menu điều hướng](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-nav-menu) bên trái Shopify admin.
+ Render [thanh save](https://shopify.dev/docs/api/app-bridge-library/apis/contextual-save-bar) nằm trên cùng của Shopify admin.
+ Render [thanh tiêu đề](https://shopify.dev/docs/api/app-bridge-library/web-components/ui-title-bar) với các phím action chủ đạo và phụ.

## Tham khảo
+ [Shopify Apps - Polaris](https://shopify.dev/docs/apps/tools/polaris)
