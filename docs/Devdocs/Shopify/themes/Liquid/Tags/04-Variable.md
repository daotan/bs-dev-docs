---
title: Variable
---

# Variable

Các variable tags cho phép tạo ra khác biến mới trong Liquid.

## assign

Tạo mới biến.

```liquid title="Input"
{% assign my_variable = false %}
{% if my_variable != true %}
  This statement is valid.
{% endif %}
```

```html title="Output"
This statement is valid.
```

Thêm kí tự `"` để lưu giá trị dưới dạng một string.

```liquid title="Input"
{% assign foo = "bar" %}
{{ foo }}
```

```html title="Output"

bar
```

## capture

Gán toàn bộ nội dung sau thẻ mở và trước thẻ đóng của tag `capture`. Những biến được khởi tạo bởi `capture` sẽ lưu nội dung dưới dạng string.

```liquid title="Input"
{% capture my_variable %}I am being captured.{% endcapture %}
{{ my_variable }}
```

```html title="Output"
I am being captured.
```

Bạn cũng có thể sử dụng giá trị các biến liquid khác trong nội dung của `capture`. 

```liquid title="Input"
{% assign favorite_food = "pizza" %}
{% assign age = 35 %}

{% capture about_me %}
I am {{ age }} and my favorite food is {{ favorite_food }}.
{% endcapture %}

{{ about_me }}
```

```html title="Output"
I am 35 and my favourite food is pizza.
```

## increment

Khởi tạo và hiển thị biến với giá trị mới bắt đầu từ 0. Ở những lần gọi tiếp theo, giá trị của biến sẽ được tăng thêm 1 đơn vị và hiển thị ra ngoài template.

```liquid title="Input"
                              # var = 0
{% increment my_counter %}    # echo var++
{% increment my_counter %}    # echo var++
{% increment my_counter %}    # echo var++
```

```html title="Output"
0
1
2
```

:::note
Biến được khởi tạo bởi `increment` hoạt động **độc lập** so với biến được khai báo bởi `assign` hoặc `capture` cùng tên.

Ở ví dụ phía dưới, một biến có tên `"var"` được khởi tạo thông qua `assign`. Tiếp đó là các tag `increment` thực hiện liên tiếp tăng 1 đơn vị với cùng tên biến trước đó. Chú ý trong trường hợp này, mặc dù cả 2 biến được sử dụng giữa 2 tag `assign` và `increment` là giống nhau, nhưng giá trị của biến `"var"` được khai báo bởi `assign` không bị ảnh hưởng bởi các dòng lệnh `increment`, do đó giá trị của `"var"` vẫn được bảo toàn.

```liquid title="Input"
{% assign var = 10 %}
{% increment var %}
{% increment var %}
{% increment var %}
{{ var }}
```

```html title="Output"
0
1
2
10
```
:::

:::tip

[`increment`](#increment) và [`decrement`](#decrement) đều [chia sẻ cùng một biến](#increment_n_decrement). Cho nên lời gọi giữa `increment` và `decrement` sẽ tăng giảm giá trị của cùng một biến đó.

:::

## decrement

Khởi tạo và hiển thị biến với giá trị mới bắt đầu từ -1. Ở những lần gọi tiếp theo, giá trị của biến sẽ giảm đi 1 đơn vị, và hiển thị ra ngoài template.

```liquid title="Input"
                              # var = 0
{% decrement my_counter %}    # echo --var
{% decrement my_counter %}    # echo --var
{% decrement my_counter %}    # echo --var
```

```html title="Output"
-1
-2
-3
```

:::note

Tương tự như [`increment`](#increment) Biến được khởi tạo bởi `decrement` hoạt động **độc lập** so với biến được khai báo bởi `assign` hoặc `capture` cùng tên.

:::

:::tip

[`increment`](#increment) và [`decrement`](#decrement) đều [chia sẻ cùng một biến](#increment_n_decrement). Cho nên lời gọi giữa `increment` và `decrement` sẽ tăng giảm giá trị của cùng một biến đó.

:::

## `increment` và `decrement` {#increment_n_decrement}
:::tip[Bạn có thể kết hợp giữa `increment` và `decrement` cho cùng một biến!]

[`increment`](#increment) và [`decrement`](#decrement) đều chia sẻ cùng một biến. Cho nên lời gọi giữa `increment` và `decrement` sẽ tăng giảm giá trị của cùng một biến đó.

```liquid title="Input"
                      # var = 0
{% increment var %}   # echo var++
{% increment var %}   # echo var++
{% decrement var %}   # echo --var
{% increment var %}   # echo var++
{% decrement var %}   # echo --var
{% decrement var %}   # echo --var
```

```liquid title="Output"
0
1
1
1
1
0
```

:::