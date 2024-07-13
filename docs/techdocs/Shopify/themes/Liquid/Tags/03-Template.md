---
title: Template
---

# Template

Các tag Template được dùng để khai báo các đoạn comment hoặc các đoạn mã không thuộc quy tắc của Liqid, và cách để thiết lập mối liên kết giữa các template khác.

## comment

Cho phép viết các đoạn code bất kì mà Liquid sẽ bỏ qua không render. Những dòng lệnh nằm trong `comment` block (ngay cả Liquid) sẽ không in ra ngoài template.

```liquid title="Input"
{% assign verb = "turned" %}
{% comment %}
{% assign verb = "converted" %}
{% endcomment %}
Anything you put between {% comment %} and {% endcomment %} tags
is {{ verb }} into a comment.
```

```html title="Output"


Anything you put between  tags
is turned into a comment.
```

## Inline comments

Bạn có thể sử dụng inline comment để ngăn không cho render các đoạn mã của Liquid. Những dòng inline comment nằm trong các tag cũng sẽ không render ra ngoài.

Bạn cũng có thể viết nhiều dòng inline comments. Tuy nhiên, mỗi dòng phải bắt đầu bằng kí tự `#`.

```liquid title="Input"
{% # for i in (1..3) -%}
  {{ i }}
{% # endfor %}

{%
  ###############################
  # This is a comment
  # across multiple lines
  ###############################
%}
```

```html title="Output"


```

### Inline comments trong `liquid`

Bạn có thể viết inline comment trong tag [`liquid`](#liquid).

```liquid title="Input"
{% liquid
  # this is a comment
  assign topic = 'Learning about comments!'
  echo topic
%}
```

```html title="Output"
Learning about comments!
```

## raw

Cho phép viết đoạn văn thuần túy. Liquid sẽ bỏ qua mọi biểu thức và cú pháp của nó nằm trong thẻ này.

```liquid title="Input"
{% raw %}
In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
{% endraw %}
```

```html title="Output"
In Handlebars, {{ this }} will be HTML-escaped, but {{{ that }}} will not.
```

## liquid

Cho phép viết tổng hợp các tags và các khai báo của Liquid. Để code trông ngắn gọn hơn.

```liquid
{% liquid
case section.blocks.size
when 1
  assign column_size = ''
when 2
  assign column_size = 'one-half'
when 3
  assign column_size = 'one-third'
else
  assign column_size = 'one-quarter'
endcase %}
```
:::tip
Để render thông tin trong khi dùng `liquid` tag, bạn có thể sử dụng lệnh [`echo`](#echo).
:::

## echo

Render giá trị ra nội dung HTML. Cách khai báo này tương tự như khi dùng `{{` và `}}`.

```liquid title="Input"
{% liquid
for product in collection.products
  echo product.title | capitalize
endfor %}
```

```html title="Output"
Hat Shirt Pants
```

## render

Thêm nội dung render của một template khác vào template hiện tại.

```liquid
{% render "template-name" %}
```

Chú ý ta không cần phải viết thêm đuôi `.liquid` của tên file.

Đoạn code nằm trong template con không có quyền truy cập vào các biến của template cha. Tương tự, template cha cũng không thể truy cập đến các biến khai báo trong template con.

## render (parameters)

Các biến của template cha có thể được truyền vào template con thông qua phương pháp truyền tham số.

```liquid
{% assign my_variable = "apples" %}
{% render "name", my_variable: my_variable, my_other_variable: "oranges" %}
```

Object cũng có thể được truyền thông qua tham số.

```liquid
{% assign featured_product = all_products["product_handle"] %}
{% render "product", product: featured_product %}
```

### with

Object có thể được truyền vào template bằng cách sử dụng từ khóa `with` với tùy chọn `as` thay thế tên tham biến.

```liquid
{% assign featured_product = all_products["product_handle"] %}
{% render "product" with featured_product as product %}
```

Ở ví dụ trên, `product` nằm trong template được render sẽ nhận giá trị của biến `featured_product` nằm ở template cha.

### for

Bạn có thể thực hiện render các phần tử của một mảng với cùng một template thông qua từ khóa `for` với tùy chọn `as` thay thế tên tham biến của các phần tử.

```liquid
{% assign variants = product.variants %}
{% render "product_variant" for variants as variant %}
```

Ở ví dụ trên, template `"product_variant"` sẽ được sử dụng nhiều lần cho mỗi `product` nằm trong danh sách `variants`. Mỗi lần render, `product` sẽ nhận các biến thể khác nhau phụ thuộc vào phần tử của vòng lặp hiện tại.

:::note
Khi sử dụng `for`, bạn có thể truy cập thuộc tính [`forloop`](./Iteration#forloop-object) từ template con.
:::

## include

Từ khóa `include` đã không còn support nữa. Chuyển sang sử dụng [`render`](#render).