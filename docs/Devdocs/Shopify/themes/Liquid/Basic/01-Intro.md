---
title: Liquid - Introduction
sidebar_label: Introduction
---

# Introduction

Liquid sử dụng sự kết hợp giữa [objects](#objects), [tags](#tags) và [filters](#filters) trong các template files để hiển thị dữ liệu.

## Objects 

**Objects** chứa nội dung mà Liquid sẽ hiển thị lên ở một page. Objects và tất cả các các giá trị khác được Liquid hiển thị ngăn cách bởi 2 kí hiệu `{{` và `}}`

```liquid title="Input"
{{ page.title }}
```

```liquid title="Output"
Introduction
```

Ở ví dụ trên, Liquid hiển thị giá trị của thuộc tính `title` của object `page`, thuộc tính này có nội dung là `Introduction`.

## Tags

**Tags** được dùng để kiểm soát logic hiển thị cho một template hoặc khai báo biến. Logic tags được ngăn cách bởi 2 kí hiệu là `{%` và `%}`.

```liquid title="Input"
{% if user %}
  Hello {{ user.name }}!
{% endif %}
```

```liquid title="Output"
  Hello Adam!
```

Tags trong Liquid được chia ra làm 4 loại:
+ [Control flow](../Tags/Control-flow)
+ [Iteration](../Tags/Iteration)
+ [Template](../Tags/Template)
+ [Variable](../Tags/Variable)

Truy cập từng mục để hiểu thêm về cách sử dụng các loại tag trên.

## Filters

**Filters** thay đổi đầu ra của một giá trị hoặc một object. Chúng được sử dụng trong các khai báo nằm trong biểu thức có kí hiệu `{{ }}` và các khai báo biến, ngăn cách bởi dấu `|` (giống với cơ chế đường ống lệnh của linux).

```liquid title="Input"
{{ "/my/fancy/url" | append: ".html" }}
```

```liquid title="Output"
/my/fancy/url.html
```
