---
title: Truthy and falsy
---

# Truthy và falsy

Khi một giá trị không thuộc kiểu dữ liệu [boolean](./Types#boolean) được sử dụng trong một ngữ cảnh có điều kiện (như các tag điều kiện `{% if ... %}`), Liquid sẽ quyết định quy đổi giá trị đó về `true` hoặc `false`. Giá trị được quy đổi về `true` được gọi là **truthy**. Giá trị được quy đổi về `false` được gọi là **falsy**.

## Truthy

:::tip
Tất cả các giá trị trong Liquid đều là `truthy`, trừ `nil` và `false`.
:::

Ở ví dụ dưới đây, từ "Tobi" tuy không phải là một boolean, nhưng nó vẫn được coi là một truthy trong câu lệnh điều kiện:

```liquid
{% assign name = "Tobi" %}
{% if name %}
This text will always appear since "name" is defined.
{% endif %}
```

Strings, ngay cả khi rỗng, vẫn được coi là truthy. Ví dụ sau vẫn sẽ tạo ra 1 tag HTML rỗng, mặc dù giá trị `page.category` tồn tại nhưng là một chuỗi rỗng:

```liquid title="Input"
{% if page.category %}
<h1>{{ page.category }}</h1>
{% endif %}
```

```liquid title="Output"
<h1></h1>
```

## Falsy

Các giá trị duy nhất được quy đổi về falsy là `nil` và `false`.

## Tổng kết

Bảng sau sẽ tổng kết lại các kiểu dữ liệu và truthy, falsy tương ứng của chúng.

|              | **truthy** | **falsy** |
| ------------ | ---------- | --------- |
| true         | •          |           |
| false        |            | •         |
| nil          |            | •         |
| string       | •          |           |
| empty string | •          |           |
| 0            | •          |           |
| integer      | •          |           |
| float        | •          |           |
| array        | •          |           |
| empty array  | •          |           |
| page         | •          |           |
| EmptyDrop    | •          |           |
