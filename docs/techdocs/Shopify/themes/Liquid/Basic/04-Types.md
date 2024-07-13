---
title: Types
---

# Các kiểu dữ liệu

Liquid objects có 6 kiểu dữ liệu:
+ [String](#string)
+ [Number](#number)
+ [Boolean](#boolean)
+ [Nil](#nil)
+ [Array](#array)
+ [EmptyDrop](#emptydrop)

## String

Strings là các chuỗi kí tự.

```liquid
{% assign my_string = "Hello World!" %}
```

## Number

Numbers bao gồm floats và integers:

```liquid
{% assign my_int = 25 %}
{% assign my_float = -39.756 %}
```

## Boolean

Booleans có giá trị là `true` và `false`.

```liquid
{% assign foo = true %}
{% assign bar = false %}
```

## Nil

Nil is a là một giá trị đặc biệt được trả về khi code của Liquid không cho ra kết quả nào. Đây không phải là một string.

Nil là một falsy.

Ở ví dụ dưới đây, nếu như user không tồn tại (user trả về nil), Liquid sẽ không render dòng chữ hello:

```liquid
{% if user %}
  Hello {{ user.name }}!
{% endif %}
```

Tags hoặc bất cứ giá trị output nào cho ra nil đều bị Liquid bỏ qua không render.

```liquid title="Input"
The current user is {{ user.name }}
```

```liquid title="Output"
The current user is
```

## Array

Arrays là danh sách các biến.

### Truy cập thông tin các item trong một Arrays

Để truy cập thông tin các item trong array, bạn có thể lặp từng item thông qua vòng lặp [for](../Tags/Iteration#for):

```liquid title="Input"
<!-- if site.users = "Tobi", "Laura", "Tetsuro", "Adam" -->
{% for user in site.users %}
  {{ user }}
{% endfor %}
```

```liquid title="Output"
  Tobi Laura Tetsuro Adam
```

### Truy cập item cụ thể trong array

Sử dụng kí hiệu `[]` để truy cập item với vị trí cụ thể trong mảng. Index đầu tiên của mảng bắt đầu bằng số 0. Nếu như index là giá trị âm thì sẽ tính từ cuối mảng.

```liquid title="Input"
<!-- if site.users = "Tobi", "Laura", "Tetsuro", "Adam" -->
{{ site.users[0] }}
{{ site.users[1] }}
{{ site.users[-1] }}
```
```liquid title="Output"
Tobi
Laura
Adam
```

### Khởi tạo mảng

:::danger
Bạn không thể khởi tạo mảng trong Liquid.
:::

Tuy nhiên, bạn vẫn có thể sử dụng filter `split` để tách string thành một mảng các chuỗi kí tự con.

## EmptyDrop

EmptyDrop là một object trả về từ Liquid nếu như dữ liệu của chúng bị xóa bỏ. 
Ở ví dụ dưới đây, `page_1`, `page_2` và `page_3` là các EmptyDrop objects:

```liquid
{% assign variable = "hello" %}
{% assign page_1 = pages[variable] %}
{% assign page_2 = pages["does-not-exist"] %}
{% assign page_3 = pages.this-handle-does-not-exist %}
```

### Kiểm tra biến không tồn tại

Bạn có thể kiểm tra nếu như một object tồn tại hay không trước khi truy cập đến thuộc tính của chúng.

```liquid
{% unless pages == empty %}
  <h1>{{ pages.frontpage.title }}</h1>
  <div>{{ pages.frontpage.content }}</div>
{% endunless %}
```
:::note
Empty strings và empty arrays sẽ trả về true nếu so sánh với `empty`.
:::