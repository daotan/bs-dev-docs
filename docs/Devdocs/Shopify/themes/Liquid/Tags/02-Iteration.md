---
title: Iteration
---

# Iteration

Quá trình thực hiện một hành động lặp đi lặp lại với từng thành phần trong một tập hợp được gọi là một Iteration.
Trong Liquid, Iteration biểu diễn dưới dạng các câu lệnh sau:

## for

Lặp lại quá trình thực thi một khối lệnh. Để lấy thông tin về vòng lặp hiện tại, sử dụng [`forloop`](#forloop-object) (đây là object).

```liquid title="Input"
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
```

```html title="Output"
hat shirt pants
```

### else

Bổ trợ cho trường hợp vòng lặp có số lần lặp bằng 0.

```liquid title="Input"
{% for product in collection.products %}
  {{ product.title }}
{% else %}
  The collection is empty.
{% endfor %}
```

```html title="Output"
The collection is empty.
```

### break

Dùng để ngưng quá trình lặp.

```liquid title="Input"
{% for i in (1..5) %}
  {% if i == 4 %}
    {% break %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

```html title="Output"
1 2 3
```

### continue

Dùng để skip vị trí vòng lặp hiện tại.

```liquid title="Input"
{% for i in (1..5) %}
  {% if i == 4 %}
    {% continue %}
  {% else %}
    {{ i }}
  {% endif %}
{% endfor %}
```

```html title="Output"
1 2 3 5
```

:::tip
Bạn cũng có thể gọi **key** và **value** trong vòng lặp bằng cách sử dụng dấu `[]` để truy cập key và value tương ứng.

```liquid title="Input"
{% for item in persons %}
  {{ item[0] }}: {{ item[1] }}
{% endfor %}
```

```html title="Output"
name: Jack age: 18 name: James age: 34
```

Ở ví dụ trên:

- `{{ item[0] }}` là key.
- `{{ item[1] }}` là value.
  :::

## for (parameters)

Các tham số vòng lặp được đặt sau biểu thức vòng lặp có dạng `foo:bar`, trong đó `foo` là từ khóa và `bar` là giá trị tham số.

### limit

Tham số cho phép giới hạn số lần cần lặp.

```liquid title="Input"
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit:2 %}
  {{ item }}
{% endfor %}
```

```html title="Output"
1 2
```

### offset

Bắt đầu vị trí vòng lặp nhất định.

```liquid title="Input"
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array offset:2 %}
  {{ item }}
{% endfor %}
```

```html title="Output"
3 4 5 6
```

:::tip
Bạn có thể tiếp tục lặp một danh sách tại vị trí dang dở của vòng lặp trước đó bằng cách sử dụng từ khóa `continue`.

```liquid title="Input"
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit: 3 %}
  {{ item }}
{% endfor %}
{% for item in array limit: 3 offset: continue %}
  {{ item }}
{% endfor %}
```

```html title="Output"
1 2 3 4 5 6
```

:::

### range

Định nghĩa một khoảng dãy số cần lặp. Dãy số có thể được định nghĩa thông qua một biểu thức dãy số hoặc cũng có thể là một biến.

```liquid title="Input"
{% for i in (3..5) %}
  {{ i }}
{% endfor %}

{% assign num = 4 %}
{% assign range = (1..num) %}
{% for i in range %}
  {{ i }}
{% endfor %}
```

```html title="Output"
3 4 5 1 2 3 4
```

### reversed

Đảo ngược thứ tự lặp.

```liquid title="Input"
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}
```

```html title="Output"
6 5 4 3 2 1
```

## forloop (object)

Cung cấp thông tin về vòng lặp hiện tại.

```json
{
  "first": true,
  "index": 1,
  "index0": 0,
  "last": false,
  "length": 4,
  "rindex": 3
}
```

### Sử dụng biến forloop

```liquid title="Input"
{% assign smoothie_flavors = "orange, strawberry, banana" | split: ", " %}

{% for flavor in smoothie_flavors -%}
  {%- if forloop.length > 0 -%}
    {{ flavor }}{% unless forloop.last %}-{% endunless -%}
  {%- endif -%}
{% endfor %}
```

```html title="Output"
orange-strawberry-banana
```

### Các thuộc tính của forloop

| Thuộc tính   | Mô tả                                                                                                         | Kiểu trả về |
| ------------ | ------------------------------------------------------------------------------------------------------------- | ----------- |
| `length`     | Tổng số lần cần lặp.                                                                                          | `number`    |
| `parentloop` | Giá trị forloop của vòng lặp cha . Nếu như vòng lặp hiện tại không nằm trong một vòng lặp khác sẽ trả về nil. | `forloop`   |
| `index`      | Vị trí hiện tại của vòng lặp với dãy tính từ 1.                                                               | `number`    |
| `index0`     | Vị trí hiện tại của vòng lặp với dãy tính từ 0.                                                               | `number`    |
| `rindex`     | Vị trí hiện tại của vòng lặp tính từ phải sang. **Nhưng dãy tính từ 1**.                                      | `number`    |
| `rindex0`    | Vị trí hiện tại của vòng lặp tính từ phải sang. **Nhưng dãy tính từ 0**.                                      | `number`    |
| `first`      | Trả về `true` nếu đang lặp ở vị trí **đầu tiên**. Ngược lại trả về `false`.                                   | `boolean`   |
| `last`       | Trả về `true` nếu đang lặp ở vị trí **cuối cùng**. Ngược lại trả về `false`.                                  | `boolean`   |

## cycle

Lặp qua một nhóm các chuỗi kí tự và in chúng theo thứ tự truyền dưới dạng tham số. Mỗi khi qua một phần tử trong vòng lặp, cycle sẽ đẩy con trỏ danh sách tham số khai báo của nó tới tham số tiếp theo và in giá trị đó. Và sẽ quay vòng liên tục.

`cycle` phải sử dụng trong vòng lặp for.

```liquid title="Input"
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}
{% cycle "one", "two", "three" %}
```

```html title="Output"
one two three one
```

:::tip

Ứng dụng thực tế của `cycle`:

- Áp dụng css class odd/even cho trang trí row table.
- Áp dụng css class cho cột cuối cùng của một product row.

:::

## cycle (parameters)

cycle có thể được gom theo nhóm trong trường hợp ta cần sử dụng nhiều loại `cycle` trong template. Nếu không cung cấp tên group cho cycle, cycle sẽ ngầm hiểu các câu lệnh gọi đến cùng một danh sách các tham số được quy về cùng một group.

```liquid title="Input"
{% cycle "first": "one", "two", "three" %}
{% cycle "second": "one", "two", "three" %}
{% cycle "second": "one", "two", "three" %}
{% cycle "first": "one", "two", "three" %}
```

```html title="Output"
one one two two
```

## tablerow

Khởi tạo table trong HTML. Tag này cần phải nằm giữa nội dung thẻ `<table>` và `</table>`.
Để sử dụng các thuộc tính có sẵn của tablerow. Đọc thêm về thuộc tính [`tablrowloop`](#tablerowloop-object) (object).

```liquid title="Input"
<table>
{% tablerow product in collection.products %}
  {{ product.title }}
{% endtablerow %}
</table>
```

```html title="Output"
<table>
  <tr class="row1">
    <td class="col1">Cool Shirt</td>
    <td class="col2">Alien Poster</td>
    <td class="col3">Batman Poster</td>
    <td class="col4">Bullseye Shirt</td>
    <td class="col5">Another Classic Vinyl</td>
    <td class="col6">Awesome Jeans</td>
  </tr>
</table>
```

## tablerow (parameters)

Các tham số vòng lặp được đặt sau biểu thức vòng lặp có dạng `foo:bar`, trong đó `foo` là từ khóa và `bar` là giá trị tham số.

### cols

Xác định số lượng cột cần có của một hàng.

```liquid title="Input"
{% tablerow product in collection.products cols:2 %}
  {{ product.title }}
{% endtablerow %}
```

```liquid title="output"
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
  </tr>
  <tr class="row2">
    <td class="col1">
      Batman Poster
    </td>
    <td class="col2">
      Bullseye Shirt
    </td>
  </tr>
  <tr class="row3">
    <td class="col1">
      Another Classic Vinyl
    </td>
    <td class="col2">
      Awesome Jeans
    </td>
  </tr>
</table>
```

### limit

Thoát khỏi vòng lặp với một vị trí nhất định.

```liquid
{% tablerow product in collection.products cols:2 limit:3 %}
  {{ product.title }}
{% endtablerow %}
```

### offset

Bắt đầu vòng lặp sau một vị trí nhất định.

```liquid
{% tablerow product in collection.products cols:2 offset:3 %}
  {{ product.title }}
{% endtablerow %}
```

### range

Tham số đặc biệt xác định khoảng giá trị cần lặp.

```liquid
<!--variable number example-->

{% assign num = 4 %}
<table>
{% tablerow i in (1..num) %}
  {{ i }}
{% endtablerow %}
</table>

<!--literal number example-->

<table>
{% tablerow i in (3..5) %}
  {{ i }}
{% endtablerow %}
</table>
```

## tablerowloop (object)

Chứa thông tin của vòng lặp dùng tablerow.

```json
{
  "col": 1,
  "col0": 0,
  "col_first": true,
  "col_last": false,
  "first": true,
  "index": 1,
  "index0": 0,
  "last": false,
  "length": 5,
  "rindex": 5,
  "rindex0": 4,
  "row": 1
}
```

### tablerowloop (properties)

| Thuộc tính  | Mô tả                                                                        | Giá trị trả về |
| ----------- | ---------------------------------------------------------------------------- | -------------- |
| `col`       | Vị trí hiện tại của cột. Dãy tính từ 1.                                      | `number`       |
| `col0`      | Vị trí hiện tại của cột. Dãy tính từ 0.                                      | `number`       |
| `col_first` | Trả về `true` nếu đang lặp vị trí đầu tiên của cột. Trả về `false` nếu sai.  | `boolean`      |
| `col_last`  | Trả về `true` nếu đang lặp vị trí cuối cùng của cột. Trả về `false` nếu sai. | `boolean`      |
| `first`     | Trả về `true` nếu đang lặp vị trí phần tử đầu tiên. Trả về `false` nếu sai.  | `boolean`      |
| `index`     | Vị trí hiện tại của vòng lặp. Dãy tính từ 1.                                 | `number`       |
| `index0`    | Vị trí hiện tại của vòng lặp. Dãy tính từ 0.                                 | `number`       |
| `last`      | Trả về `true` nếu đang lặp vị trí phần tử cuối cùng. Trả về `false` nếu sai. | `boolean`      |
| `length`    | Tổng số lượng phần tử của vòng lặp.                                          | `number`       |
| `rindex`    | Vị trí hiện tại của vòng lặp tính từ phải sang. Nhưng với dãy tính từ 1.     | `number`       |
| `rindex0`   | Vị trí hiện tại của vòng lặp tính từ phải sang. Nhưng với dãy tính từ 0.     | `number`       |
| `row`       | Vị trí hiện tại của phần tử với dãy tính từ 1.                               | `number`       |