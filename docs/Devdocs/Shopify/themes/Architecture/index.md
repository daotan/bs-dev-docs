---
sidebar_position: 1
title: Architecture
description: Tổng quan về kiến trúc Shopify theme
---

# Kiến trúc của Shopify theme

## Nội dung

Theme files được chia làm 3 loại:

+ [**Markup and features**](https://shopify.dev/docs/themes/architecture#markup-and-features) - Các file này kiểm soát layout và chức năng của một theme. Bằng cách sử dụng Liquid để tạo ra nội dung HTML cho các page của store.

+ [**Supporting assets**](https://shopify.dev/docs/themes/architecture#supporting-assets) - Các tài nguyên bổ sung bao gồm các css file, JavaScript, locales,...bất cứ những file hỗ trợ cho giao diện và chức năng của theme.

+ [**Config files**](https://shopify.dev/docs/themes/architecture#allowing-for-customization-of-theme-components) - Bao gồm các JSON file để lưu thông tin cấu hình có thể sử dụng để tùy biến bởi merchant thông qua [theme editor](https://shopify.dev/docs/themes/tools/online-editor).

## Cấu trúc thư mục và các thành phần

```bash title="Shopify theme directory structure"
.
├── assets
├── config
├── layout
├── locales
├── sections
├── snippets
└── templates
    └── customers
```

Các thư mục con không nằm trong các thư mục kể trên sẽ không được Shopify hỗ trợ.

### `assets`

Thư mục `assets` chứa tất cả các tài nguyên sử dụng trong theme, bao gồm ảnh, css, file JavaScript.

Sử dụng filter [asset_url](https://shopify.dev/docs/api/liquid/filters/asset_url) của Liquid để lấy thông tin đường dẫn tài nguyên theme của bạn.

Bạn có thể truy cập các chức năng giới hạn của Liquid ở trong các tài nguyên phi nhị nhân (các file text, js, css) bằng cách thêm đuôi mở rộng `.liquid` vào cuối file. Trường hợp áp dụng thường thấy bao gồm các file JavaScript, CSS. Các file với đuôi mở rộng này có thể truy cập các tính năng sau:

+ [`settings` object](https://shopify.dev/docs/api/liquid/objects/settings)
+ Liquid [filters](https://shopify.dev/docs/api/liquid/filters)

### `config`

Thư mục `config` chứa các [file cấu hình](https://shopify.dev/docs/themes/architecture/config) của một theme. Các file config làm nhiệm vụ thiết lập [settings](https://shopify.dev/docs/themes/architecture/settings) trong mục **Theme settings** của theme editor, cũng như lưu trữ thông tin cấu hình của chúng.

Theme settings thiết lập các thông tin cấu hình tổng quan như color, font size, custom css,... và có thể truy cập thông qua [`settings` object](https://shopify.dev/docs/api/liquid/objects/settings).

### `layout`

Thư mục `layout` chứa các [file layout](https://shopify.dev/docs/themes/architecture/layouts) của một theme, là các file chứa các thông tin [template](https://shopify.dev/docs/themes/architecture#templates) sẽ được render.

Layouts là các file Liquid cho phép bạn include các content xuất hiện trên một vị trí có mặt ở tất cả các trang web. Bạn có thể thiết lập thông tin thẻ `<head>`, hay các nhóm sections cho header và footer ở layout.

File `theme.liquid` phải có sẵn trong thư mục này trước khi upload lên Shopify.

### `locales`

Thư mục `locales` chứa các [file dịch thuật](https://shopify.dev/docs/themes/architecture/locales) của một theme, được sử dụng để cung cấp các nội dung đã được dịch sẵn. Các file locale cho phép merchant có thể tùy biến để đem lại trải nghiệm gần gũi hơn với các khách hàng thông qua một loạt các nội dung đã được dịch sang ngôn ngữ của từng đối tượng khách hàng.

### `sections`

Thư mục `sections` chứa các [section](https://shopify.dev/docs/themes/architecture/sections) của theme, và cả [section groups](https://shopify.dev/docs/themes/architecture/section-groups).

Sections là các file Liquid cho phép khởi tạo các nội dung có thể tái sử dụng và tùy biến bởi merchants. Họ - các merchant có thể include các block cho phép thêm, sửa, xóa hoặc sắp xếp vị trí nội dung trong một section.

Sections group là các JSON containers cho phép merchant thêm, sửa, xóa các section nằm trong một vùng trên layout như header và footer.

### `snippets`

Thư mục `snippets` chứa các file Liquid có template là các giao diện dạng thành phần (có thể tái sử dụng). Bạn có thể tham chiếu các snippets này trong theme thông qua tag [render](https://shopify.dev/docs/api/liquid/tags/render) của Liquid.

### `templates`

Thư mục `templates` chứa các [file template](https://shopify.dev/docs/themes/architecture/templates) của một theme, quyết định những nội dung nào sẽ hiển thị trên một page.

VD: Thư mục templates/customers chứa các file template tập trung vào thông tin người dùng như đăng nhập, my account,...

Template được sử dụng để cung cấp thông tin chức năng cho một page. Bạn có thể tạo template product recommendations cho một product của product page, hoặc thêm comment form cho một bài viết. Bạn còn có thể [tạo ra nhiều phiên bản khác nhau của cùng một template](https://shopify.dev/docs/themes/architecture/templates#alternate-templates) để áp dụng cho các trường hợp đặc biệt nhất định.