---
title: Control flow
---

# Control flow

Control flow tags quyết định việc có nên thực thi các khối lệnh Liquid hay không.

## if

Thực thi khối lệnh khi thỏa mãn một điều kiện nhất định.

```liquid title="Input"
{% if product.title == "Awesome Shoes" %}
  These shoes are awesome!
{% endif %}
```

```html title="Output"
These shoes are awesome!
```

## unless

Trái ngược với `if` - `unless` thực thi khối lệnh khi không thỏa mãn điều kiện.

```liquid title="Input"
{% unless product.title == "Awesome Shoes" %}
  These shoes are not awesome.
{% endunless %}
```

```html title="Output"
These shoes are not awesome.
```

Câu lệnh trên cũng tương tự với câu lệnh sau:

```liquid
{% if product.title != "Awesome Shoes" %}
  These shoes are not awesome.
{% endif %}
```

## elsif / else

Đây là các lệnh mở rộng điều kiện từ `if` và `unless`.

```liquid title="Input"
<!-- If customer.name = "anonymous" -->
{% if customer.name == "kevin" %}
  Hey Kevin!
{% elsif customer.name == "anonymous" %}
  Hey Anonymous!
{% else %}
  Hi Stranger!
{% endif %}
```

```html title="Output"
<!-- If customer.name = "anonymous" -->
{% if customer.name == "kevin" %}
Hey Anonymous!
{% endif %}
```

## case/when

Thực thi lệnh điều kiện dạng switch case thường thấy ở các ngôn ngữ lập trình khác.
`case` đóng vai là một switch. `when` là các case.

`when` có thể nhận nhiều giá trị cùng lúc. Khi xử lí điều kiện, biểu thức sẽ tìm xem trong số các giá trị được cung cấp, có giá trị nào trùng với giá trị được so sánh hay không. Nếu có sẽ thực thi khối lệnh tương ứng. Bạn có thể sử dụng `,` hoặc `or` để ngăn cách các giá trị.

Ngoài ra, bạn cũng có thể tùy chọn bổ sung `else` để thực thi lệnh khi không thỏa mãn bất cứ điều kiện nào.

```liquid title="Input"
{% assign handle = "cake" %}
{% case handle %}
  {% when "cake" %}
     This is a cake
  {% when "cookie", "biscuit" %}
     This is a cookie
  {% else %}
     This is not a cake nor a cookie
{% endcase %}
```

```html title="Output"
This is a cake
```