---
id: intro
title: Overview
---

# Tổng quan về Shopify theme

Các theme của Shopify cơ bản được xây dựng dựa trên templating language là [Liquid](https://shopify.dev/docs/api/liquid), đi kèm với nó là HTML, CSS, JavaScript và JSON. Shopify cung cấp một số các công cụ và best practices để tối ưu quá trình phát triển.

Là một developer, chúng ta có thể tạo theme mới cho một merchant cụ thể, hoặc tùy biến lại theme đã có sẵn, thậm chí tự tạo theme riêng để bán trên Shopify Theme Store. Ngoài ra bạn cũng có thể tạo apps để mở rộng chức năng cho một theme.

## Cấu trúc của Shopify theme

Thư mục theme được tổ chức theo [tiêu chuẩn thư mục](https://shopify.dev/docs/themes/architecture#directory-structure-and-component-types) của một Shopify theme, bao gồm các file template và layout quan trọng của theme và các tài nguyên thiết yếu như ảnh, stylesheets, và code JavaScript.

Là một nhà phát triển, bạn nên tối ưu các tính năng, sắp xếp tổ chức cơ cấu của theme cho phù hợp với yêu cầu của khách hàng. Tham khảo thêm về [best pratices khi design một theme](https://shopify.dev/docs/themes/best-practices/design).

### Markup and features

Một page hoàn chỉnh được xây dựng nên từ các thành phần sau.
![](https://shopify.dev/assets/themes/architecture/all-components.png)

1. [**Layout file**](https://shopify.dev/docs/themes/architecture/layouts)
2. [**Template**](https://shopify.dev/docs/themes/architecture/templates) được áp dụng để hiển thị page
3. [**Section groups**](https://shopify.dev/docs/themes/architecture/section-groups) chứa các [section](https://shopify.dev/docs/themes/architecture/sections) và [app block](https://shopify.dev/docs/themes/architecture/sections/app-blocks). Admin có thể thêm các section vào trong section group, hoặc loại bỏ 1 số thành phần và sắp xếp chúng tùy ý thông qua theme editor.
4. [**Section**](https://shopify.dev/docs/themes/architecture/sections) thuộc section groups.
5. Các [**Block**](https://shopify.dev/docs/themes/architecture/sections/section-schema#blocks) là khối thành phần hiển thị nội dung cơ bản nằm trong các section.

Theme nên chứa các loại template khác nhau để hiển thị nội dung đặc trưng cho từng page, như [home page](https://shopify.dev/docs/themes/architecture/templates/index) và [product page](https://shopify.dev/docs/themes/architecture/templates/product).

Các tính năng, chức năng trong theme được xây dựng từ các Liquid template files, sections, blocks và [snippets](https://shopify.dev/docs/themes/architecture#snippets).
Với cấu trúc như thế này, ta có thể dễ dàng tạo ra các block có khả năng tái sử dụng và kết hợp với các khối hoặc các nhóm nội dung khác để tạo ra một trang web linh hoạt, sáng tạo và đa dạng. Đó là mục tiêu cơ bản của Shopify theme:

### Hỗ trợ khả năng tùy biến cho merchant

Merchant có thể tùy biến theme của họ thông qua Shopify admin bằng cách sử dụng công cụ [Shopify theme editor](https://shopify.dev/docs/themes/tools/online-editor). Bạn có thể cung cấp các lựa chọn tùy biến nội dung page, cho phép các merchant có thể quản lý và tạo ra các nội dung nhằm nâng cao trải nghiệm người dùng mà không cần phải code:

- Bạn có thể khởi tạo các khối nội dung theo hướng module hóa. Bằng cách sử dụng [sections và blocks](https://shopify.dev/docs/themes/best-practices/templates-sections-blocks).
- Bạn có thể khởi tạo các [lựa chọn cấu hình](https://shopify.dev/docs/themes/architecture/settings) cho phép merchant có thể thiết lập hành vi và giao diện của theme. Merchant cũng có thể thiết lập các giá trị linh động bằng cách sử dụng [dynamic sources](https://shopify.dev/docs/themes/architecture/settings/dynamic-sources).

### Các tài nguyên bổ sung

Bạn có thể thêm các tài nguyên khác như js files, css,... để đồng nhất giao diện thành phần và các tính năng có trên theme, hoặc để lưu trữ các tài nguyên có tính tái sử dụng cho các component khác.

Ví dụ như, khởi tạo các file css định nghĩa các class cần thiết của một component như button, block, card, container,... Sau khó sử dụng các class này để áp dụng cho các thành phần tương tự khác nhằm tiết kiệm thời gian develop. Css và javascript được lưu trữ ở thư mục [assets](https://shopify.dev/docs/themes/architecture#assets) của theme.

Ngoài ra, bạn cũng có thể cung cấp translation cho theme thông qua các locale files, được lưu tại thư mục [locales](https://shopify.dev/docs/themes/architecture/locales).

---

### Tư liệu tham khảo

- [Shopify themes overview](https://shopify.dev/docs/themes/getting-started)
