---
title: Metaobjects
---

# Metaobjects

<div class="video-wrapper">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/umPT10iToKU?si=oGcnxgA36ue2FhBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</div>

<br/>

Metaobjects giúp bạn bổ sung thêm dữ liệu có cấu trúc vào trong store. Ví dụ, bạn có thể lưu một phần thông tin của sản phẩm như các tính năng, size charts, thông tin kĩ thuật,...

Bạn có thể cập nhật các dữ liệu được lưu trong các metaobjects ở Shopify admin. Các ứng dụng có thể truy cập metaobjects thông qua metaobject API. Bạn cũng có thể truy cập metaobjects trong theme bằng cách sử dụng Liquid hoặc thông qua Storefront API. Xem thêm [metaobject](https://shopify.dev/docs/api/storefront/2023-07/objects/metaobject).

Metaobject gồm 2 thành phần chính:

1. Định nghĩa (**Definition**): nhóm các trường dữ liệu hình thành nên cấu trúc cho đối tượng. Các định nghĩa của metaobjects được quản lý thông qua `Settings` > `Custom data` ở Shopify admin.
2. Các thực thể (**Entries**): dữ liệu thuộc các định nghĩa tương ứng của metaobject. Các thực thể được khởi tại và quản lý thông qua `Content` > `Metaobjects` ở Shopify admin.

Khi bạn định nghĩa cho một metaobject, đảm bảo bổ sung những thông tin sau:

- **Name**: tên định nghĩa của metaobject, ví dự như `Authors`.
- **Type**: kiểu dữ liệu của metaobject.
- **Fields**: xác định kiểu dữ liệu nội dung mà bạn muốn hiển thị trong metaobject.
  - Mỗi field bao gồm name (bắt buộc), description, type, và validation rules như character limits, minimum và maximum values, hoặc preset values.
  - **Display name** được gán với một field duy nhất dùng để phân biệt giữa các metaobject. Bạn có thể lựa chọn thay đổi field sử dụng làm display name bất cứ lúc nào. Display name sẽ tự động gán với text field đầu tiên của metaobject, hoặc tự generate nếu không có text field nào tồn tại trong định nghĩa của metaobject.
- **Options**: xác định trạng thái hiển thị của metaobject.
  - **Access**: Mặc định, metaobject có thể hiển thị trên Storefront, nghĩa là metaobject có thể kết nối tới theme của bạn thông qua dynamic sources. Bạn có thể ngăn chặn khả năng truy cập đến metaobject từ Storefront bằng cách disable option này đi.
  - **Features**: Bạn có thể sử dụng metaobject để tạo một web page.

:::tip

- Metaobject khác metafield ở khả năng chứa nhiều thông tin hơn do chúng có cấu trúc và dễ dàng thêm bớt các field cần thiết.
- Một metafield có thể có kiểu dữ liệu là một metaobject, nhờ đó các product có thể cùng nhau chia sẻ thông tin thông qua các metaobject. Khi cần cập nhật thông tin chỉ cần thay đổi ở metaobject cũng sẽ thay đổi các product page liên quan khác.

:::

## Khởi tạo một metaobject

Bạn có thể khởi tạo metaobjects thông qua 2 vị trí trên Shopify admin:

- Từ `Content` > `Metaobjects`

![Content Metaobjects](/img/content-metaobjects.png)

- Từ `Settings` > `Custom data`

![Customer data](/img/setting-customer-data-metaobject.png)

Các bước định nghĩa một metaobject:

1. Tại Shopify admin, đi đến `Content` > `Metaobjects` hoặc `Settings` > `Custom data`.
2. Click chọn `Add definition`.
3. Tại trường `Name`, nhập vào tên định nghĩa của metaobject. Type của metaobject sẽ được generate tự động, và có thể thay đổi nếu muốn.
4. Click `Add field` và chọn kiểu content mà bạn muốn lưu trữ trong trường này của metaobject. Ví dụ như single line text. Mỗi field sẽ có các options và validation rules riêng biệt.
5. Cấu hình thông tin field và validation rules:
   - Nhập `Name` của field.
   - Tùy chọn: ở trường `Description`, nhập nội dung description cho field của bạn.
   - Tùy chọn: tích chọn `Use this field as display name` để chọn field này làm display name cho quá trình tìm kiếm và hiển thị ở Shopify admin.
   - Cấu hình các validation rules cho field, sau đó click `Done`.
6. Thêm các field bổ sung khác theo bước 5 tùy ý.
7. Tùy chọn: Để ngăn chặn khả năng truy cập đến storefront. Bỏ tích chọn `Storefronts` ở mục `Access` của phần `Options`.
8. Tùy chọn: Để cho phép các thực thể có cấu trúc của metaobject này được bổ sung trang thông tin hiển thị riêng biệt, tích chọn `Web pages` dước mục `Features`.
9. Click `Save`.

Sau khi định nghĩa xong một metaobject. Ta bắt đầu khởi tạo các thực thể của nó.

### Khởi tạo các thực thể

Sau khi đã có thông tin định nghĩa của một metaobject, bạn có thể bắt đầu tạo mới các thực thể với các trường dữ liệu dựa trên định nghĩa của metaobject đó.
Các thực thể của metaobject sẽ được lưu trong hệ thống Shopify.

Các bước khởi tạo các thực thể metaobject:

1. Từ Shopify admin, đi đến `Content` > `Metaobjects`.
2. Click chọn metaobject mà bạn muốn thêm các thực thể.
3. Click chọn `Add entry`.
4. Nhập thông tin các trường dữ liệu cần thiết, các trường này được tạo bởi định nghĩa của metaobject. Trường dữ liệu được đánh dấu là `Display name` có thể sử dụng để tìm kiếm các thực thể thông qua giá trị của trường đó.
5. Tùy chọn: Thiết lập trạng thái của metaobject. Các thực thể mới tạo sẽ mặc định để `Active`. Active có nghĩa là các metaobject có thể hiển thị trên giao diện store. Ngược lại nếu một thực thể chuyển về trạng thái `Draft` sẽ không thể hiển thị.
6. Click `Save`.
