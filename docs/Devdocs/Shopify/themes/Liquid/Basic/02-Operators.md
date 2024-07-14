---
title: Operators
---

# Toán tử trong Liquid

Là một templating language, Liquid giới hạn khá nhiều các toán tử, hầu như chỉ là các toán tử logic hoặc các phép so sánh, câu điều kiện đơn giản.

## Các toán tử cơ bản

| Kí hiệu | Ý nghĩa           |
| ------- | ----------------- |
| `==`    | bằng nhau         |
| `!=`    | khác nhau         |
| `>`     | lớn hơn           |
| `<`     | bé hơn            |
| `>=`    | lớn hơn hoặc bằng |
| `<=`    | bé hơn hoặc bằng  |
| `or`    | điều kiện hoặc    |
| `and`   | điều kiện và      |

Ví dụ:

```liquid
{% if product.title == "Awesome Shoes" %}
These shoes are awesome!
{% endif %}
```

Bạn cũng có thể kết hợp các phép logic với nhau thông qua 2 phép toán `or` hoặc `and`:

```liquid
{% if product.type == "Shirt" or product.type == "Shoes" %}
This is a shirt or a pair of shoes.
{% endif %}
```

## contains

`contains` kiểm tra liệu có sự xuất hiện của chuỗi văn bản con trong một chuỗi nội dung hoàn chỉnh.

```liquid
{% if product.title contains "Pack" %}
This product's title contains the word Pack.
{% endif %}
```

`contains` cũng có thể dùng để kiểm tra sự xuất hiện của giá trị trong một mảng.

```liquid
{% if product.tags contains "Hello" %}
This product has been tagged with "Hello".
{% endif %}
```
:::note
`contains` chỉ có thể dùng với string. Bạn không thể dùng để kiểm tra sự xuất hiện của object trong một danh sách các object.
:::

## Thứ tự các phép toán

Với các tags có nhiều hơn một các phép toán `or` hoặc `and`, sẽ được thực thi từ _phải_ sang _trái_. Đặc biệt, bạn **không thể** dùng kí hiệu `()` để nhóm các điều kiện với nhau, vì đây là kí hiệu không hợp lệ. Liquid sẽ bỏ qua những tag chứa các kí hiệu không hợp lệ đó.

```liquid
{% if true or false and false %}
This evaluates to true, since the `and` condition is checked first.
{% endif %}
```

```liquid
{% if true and false and false or true %}
This evaluates to false, since the tags are checked like this: true and (false and (false or true)) true and (false and true) true and false false
{% endif %}
```
