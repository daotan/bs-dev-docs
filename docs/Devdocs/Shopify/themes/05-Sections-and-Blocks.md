---
title: Sections & Blocks
---

# Sections & Blocks

<div class="video-wrapper">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jzhsYMxUp8s?si=Lwm194opl_oVzC6C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</div>

<br/>

Theme sử dụng các sections để tạo layout mà bạn mong muốn. Đa số các section được tạo nên từ các block kèm các chức năng nhất định, như headers, text, single images hoặc links. Sử dụng các sections và blocks trong template sẽ cung cấp khả năng sắp xếp nội dung trang web của bạn được linh hoạt hơn, giúp bạn quản lý giao diện và chủ đề cảm hứng của cửa hàng mà không cần phải code. Mỗi template có thể chứa tới 25 sections.

Mỗi section có thể chứa nhiều loại blocks. Bạn có thể thêm tới 50 blocks mỗi section. Các section và block nào có sẵn sẽ phụ thuộc vào theme của bạn.

Một số sections có những giới hạn số lượng block nhất định, hoặc giới hạn theo từng loại section. Ví dụ, với section `Image with text` chỉ có thể hiển thị những block chức năng do theme designer tạo ra mà bạn có thể sử dụng. Trong bộ theme miễn phí mặc định của Shopify - Dawn, bạn chỉ có thể thêm một trong những các block dưới đây:

- heading
- paragraph
- button

Bạn có thể customize các section thông qua mục _Settings_ để chèn thêm ảnh, lựa chọn căn chỉnh khối, kích cỡ, màu nền,...theo mong muốn của bạn.

Nếu như các section mà bạn thêm vào trong store layout không bao gồm các settings hoặc options mà bạn cần, bạn có thể [tự viết code cho theme](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/edit-theme-code#edit-your-theme-code) hoặc [liên hệ với nhà phát triển của theme](https://help.shopify.com/en/manual/online-store/themes/theme-support#where-to-find-support-for-your-theme) để được hỗ trợ.

## Templates and sections

Các thông tin của page được lưu dưới dạng file `.json` nằm trong thư mục `/templates` của theme. Các nhà phát triển có thể cấu trúc lại page của mình thông qua các khai báo và tùy chỉnh các file JSON này. Những file này được gọi là các [JSON templates file](https://shopify.dev/themes/architecture/templates/json-templates?itcat=partner_blog&itterm=how_to_create_your_first_shopify_theme_section&shpxid=bf3abf4c-40DA-4E3D-10FC-A49877481233).

JSON template không bao gồm các lệnh liquid hay các dòng lệnh markup để hiển thị nội dung, nó chỉ là một file config đơn thuần để Shopify đọc và xác định những section nào sẽ hiển thị trên page, và theo thứ tự như thế nào.

Một ví dụ đơn giản của template file `product.json` như sau:

```json title="Templates/product.json"
{
  "name": "Product",
  "sections": {
    "main": {
      "type": "main-product"
    }
  },
  "order": ["main"]
}
```

Ở trường hợp này, một product page sẽ hiển thị một section có tên file là `main-product.liquid`, và đây là section duy nhất mặc định hiển thị. Nếu một merchant tùy biến page này, và thêm nhiều section khác vào trong page, file `product.json` sẽ được update theo dữ liệu tùy chỉnh đó.

## Basics of sections

Khi phát triển theme của bạn với sections và JSON templates, bạn nên cân nhắc xây dựng các section file theo 2 danh mục riêng biệt: **Main page sections** và **Modular sections** (section thành phần chức năng).

### Main page sections

Trong một main page section, bạn nên bổ sung các thông tin, block mặc định cho page đó. Ví dụ, ở main section của product page, bạn có thể thêm các thông tin hiển thị cơ bản cho product như product title, description, media, price, add-to-cart form.

Bạn có thể truy cập các biến của Liquid, hoặc objects trong một section dựa trên page template mà section đó được gọi. Điều này có nghĩa là một section khi được render trong một file template `product.json` sẽ có thể truy cập bất cứ thuộc tính nào của [**product** Liquid object](https://shopify.dev/api/liquid/objects/product?itcat=partner_blog&itterm=how_to_create_your_first_shopify_theme_section&shpxid=bf3abf4c-40DA-4E3D-10FC-A49877481233) - chứa thông tin product của page hiện tại.

Tương tự, một section được gọi trong file `collection.json` sẽ có khả năng truy cập tất cả các thuộc tính của [**collection** Liquid object](https://shopify.dev/api/liquid/objects/collection?itcat=partner_blog&itterm=how_to_create_your_first_shopify_theme_section&shpxid=bf3abf4c-40DA-4E3D-10FC-A49877481233).

Tất cả các section, bất kể vị trí nào chúng xuất hiện đều có thể truy cập [global objects](https://shopify.dev/api/liquid/objects?itcat=partner_blog&itterm=how_to_create_your_first_shopify_theme_section&shpxid=bf3abf4c-40DA-4E3D-10FC-A49877481233#global-objects) của Liquid.

Bên cạnh việc có thể truy cập các biến của Liquid trên main page section, bạn còn có thể khởi tạo các settings thông qua `{% schema %}` tags. Các thông tin settings có thể được truy cập trong chính section đó, và merchant có thể thay đổi các setting thông qua theme editor.

Sở dĩ một main page section chỉ nên hiển thị trong một page template nhất định, bạn không nên khai báo `"presets"` trong `{% schema %}` tag để theme editor không hiển thị section này trong mục select section.

Để xem ví dụ của một main page section, bạn có thể tìm hiểu file `main-product.liquid` trong thư mục `/sections` của theme Dawn, hoặc bất cứ section nào có tiền tố `main` nằm trong tên file. Như một nguyên tắc, bạn nên đặt tên các main page section với tiền tố `main` để giúp bạn dễ dàng phân biệt các loại section.

### Modular sections

Modular sections là các section có thể tái sử dụng ở các ví trí khác nhau trên giao diện của store, cung cấp các chức năng cho một page. Ví dụ của loại section này bao gồm feature collections, slideshows, newsletter signup forms.

Những section thuộc loại này nên được thêm vào các page bởi merchant thông qua theme editor thay vì thêm mặc định. Để thêm một section vào page thông qua theme editor, section thuộc loại này phải khai báo presets trong schema của nó. Một khi đã thêm presets, section tương ứng sẽ xuất hiện trong mục các section có sẵn mà merchant có thể lựa chọn thông qua việc click **Add section** trong theme editor.

<div class="medium-image-container">
![Shopify section adding a theme](/img/Shopify-theme-section-adding-a-theme.webp)
</div>

Đối lập với main page section, modular section chứa nội dung có thể tái sử dụng trên bất kì vị trí nào của page và hiển thị ở mọi loại page. Do đó các nhà phát triển nên tránh phụ thuộc vào các biến Liquid objects cố định của page khi làm việc với modular section.

Tuy nhiên, vẫn có khả năng hạn chế một section chỉ có thể hiển thị ở một số loại page nhất định bằng cách dùng thuộc tính [**templates**](https://shopify.dev/docs/themes/architecture/sections/section-schema#enabled_on) của mục **enabled_on** hoặc **disable_on** trong schema. Ví dụ, nếu như bạn muốn giới hạn một section chỉ có thể hiển thị ở product và collection page, bạn nên thêm dòng này trong `schema` tag:

```json
{
  "enabled_on": {
    "templates": ["product", "collection"],
  }
}
```

Thuộc tính `templates` nhận danh sách các string đại diện cho [page type](https://shopify.dev/docs/api/liquid/objects/request#request-page_type).

## Section settings

Như chúng ta được biết, các setting đều khai báo trong các section file, nằm bên trong các tag `{% schema %}`. Thông tin nằm trong tag này sẽ được hiển thị trên giao diện của theme editor. Bắt đầu với một ví dụ khởi tạo một text section thông thường như sau:

```liquid
<div class="custom-text-section">
  <h2> {{ section.settings.custom_text_title }} </h2>
  <div>{{ section.settings.custom_text_body }}</div>
</div>

{% schema %}
  {
    "name": "Text Box",
    "settings": [
      {
        "id": "custom_text_title",
        "type": "text",
        "label": "Text box heading",
        "default": "Title"
      },
      {
        "id": "custom_text_body",
        "type": "richtext",
        "label": "Add custom text below",
        "default": "<p>Add your text here</p>"
      }
    ]
  }
{% endschema %}
```

Ở ví dụ này chúng ta có 2 thành phần HTML: thẻ `<h2>` và `<div>`. Mỗi thành phần chứa nội dung động là các giá trị thuộc `section.settings` - một Liquid object cho phép tham chiếu đến thông tin setting được cập nhật từ theme editor bởi merchant.

Bên dưới nội dung HTML là tag `{% schema %}` của Liquid nơi chứa thông tin setting của section. Mỗi setting là một object, chúng ta sẽ định nghĩa các thông tin căn bản cho setting như id, type và các thông tin hiển thị của chúng trên theme editor. Để truy cập thông tin các setting trong Liquid, ta chèn thêm id của setting bên cạnh `section.settings`. Thêm nữa chúng ta cũng khai báo kiểu dữ liệu của setting và giao diện nhập liệu của chúng trên theme editor.

Thông tin settings hiện tại của chúng ta gồm:

- **id** là thuộc tính nằm trong biến `section.settings` của Liquid
- **type** xác định kiểu dữ liệu đầu ra của setting
- **label** của setting trên theme editor
- **default** chứa giá trị mặc định của setting

Ví dụ trên chúng ta chỉ khởi tạo một text box cho phần heading và richtext box cho nội dung chính của section, bạn có thể thêm nhiều hơn các loại setting khác (image_pick, radio, video_url và font_picker,...) và bố cục lại layout cho section tùy vào yêu cầu của khách hàng.

Vậy là chúng ta đã tạo xong một section, tuy nhiên ta vẫn thiếu một khía cạnh quan trọng: xác định nơi mà section sẽ xuất hiện trên theme. Phần tìm hiểu thêm một số bước tiếp cận khi include các sections ta sẽ để sau, bây giờ ta cấu hình cho phép section có thể add ở trong theme editor trên bất cứ page nào bằng cách khởi tạo presets.

Presets là các cấu hình mặc định của sections, nằm trong `{% schema %}` tags. Ở ví dụ của chúng ta, presets trông như sau:

```liquid
"presets": [
  {
  "name": "custom-text",
  "category": "Custom"
  }
]
```

Sau khi đã thêm dòng code trên, phần custom text-box section của chúng ta sẽ trông như thế này:

```liquid
<div class="custom-text-section">
  <h2> {{ section.settings.custom_text_title }} </h2>
  <div>{{ section.settings.custom_text_body }}</div>
</div>

{% schema %}
  {
    "name": "Text Box",
    "settings": [
      {
        "id": "custom_text_title",
        "type": "text",
        "label": "Text box heading",
        "default": "Title"
      },
      {
        "id": "custom_text_body",
        "type": "richtext",
        "label": "Add custom text below",
        "default": "<p>Add your text here</p>"
      }
    ],
    "presets": [
      {
        "name": "custom-text",
        "category": "Custom"
      }
    ]
  }
{% endschema %}
```

Bây giờ, trên theme editor, nếu như ta chọn phần **Add section** trên bất cứ page nào, section này sẽ xuất hiện dưới dạng option có sẵn. Phần settings mà chúng ta đã khởi tạo cũng sẽ xuất hiện ở sidebar bên phải với các label và các text mặc định do ta khai báo. Từ đây ta có thể hiệu chỉnh thông tin các setting cho section của chúng ta, giao diện section từ đó mà cũng thay đổi theo.

## Including sections on pages

Có một số phương pháp để ta có thể include các section trên các page của một theme. Chúng ta sẽ tìm hiểu từng cách tiếp cận của các phương pháp và phát hiện ra những quy luật nào áp dụng cho những phương pháp đó.

### Thêm sections trong các file JSON template

Khi chúng ta nhìn vào nội dung khai báo section của các main page section nằm trong file JSON template, chúng ta thấy trong section luôn nhận một thuộc tính `main`, đây là section default của page đó và nó sẽ chứa các nội dung quan trọng cho page đó.

Bên cạnh `main` section, ta còn có thể thêm các section khác mà chúng cũng sẽ hiển thị mặc định trên page. Lấy một ví dụ ở file JSON template sau, ta thêm một product recommendations section trên page bằng cách thêm một object mới ngay dưới `main` section:

```json
{
  "name": "Product",
  "sections": {
    "main": {
      "type": "product-template"
    },
    "recommendations": {
      "type": "product-recommendations"
    }
  },
  "order": [
    "main",
    "recommendations"
  ]
}
```

Ở trường hợp trên, ta đang gán name cho section đó, gọi là `recommendations`, và thuộc tính `type` của section này là để xác định file nào nằm trong mục sections sẽ được thêm vào.

Vì JSON templates có thể thêm nhiều hơn một sections, ta nên định nghĩa thứ tự các section sẽ xuất hiện, thông qua thuộc tính `order`. Tất các các section được include vào trong một file JSON template sẽ phải thiết lập thứ tự mặc định. Tuy nhiên, merchant vẫn có thể sắp xếp lại thứ tự của section trên theme editor.

Section không có presets mà được thêm vào JSON templates sẽ không thể bị loại bỏ thông qua theme editor, nhưng có thể ẩn đi nếu như merchant không cần chúng.

### Thêm sections dưới dạng options cho tất cả các page

Như chúng ta đã thấy ở ví dụ custom text section, ta có thể biến một section xuất hiện trên tất cả các page một khi ta khai báo `presets` ở phần cấu hình `schema`.

```liquid
"presets": [
  {
  "name": "custom-text",
  "category": "Custom"
  }
]
```

Khi section được include thông qua phương pháp này, các sections đó có thể được thêm, thay đổi vị trí và xóa bỏ thông qua theme editor. Các section này cũng có thể giới hạn cho một số page thông qua thuộc tính `templates`.

Với chức năng kéo thả các section đối với các sections có khai báo presets sẽ cho phép bạn xây dựng các dynamic sections (sections động), bạn có thể tạo thêm nhiều lựa chọn cho việc tùy biến và cá nhân hóa store của bạn. Bạn có thể tạo ra các section linh hoạt, di động như video, products hoặc image galleries.
Ví dụ cho một section sử dụng phương pháp này là [newsletter section của Dawn theme](https://github.com/Shopify/dawn/blob/main/sections/newsletter.liquid).

### Sử dụng `{% section %}` tags để thêm các static section

`section` tag của Liquid cho phép bạn render một section từ thư mục `/sections` trong một Liquid layout hoặc một file template. Tag này có thể có dạng như:

```liquid
{% section 'header' %}
```

Các section được thêm bằng các sử dụng `section` tag sẽ không thể bị loại bỏ, thay đổi vị trí hay ẩn đi thông qua theme editor. Vị trí của section trên page bị khóa lại, và phụ thuộc vào nơi mà chúng được thêm trong một layout file hoặc template.

Bước tiếp cận này thường được sử dụng cho nội dung và các thành phần mà luôn hiển thị trên page như headers, footers và announcement bars. Lấy một ví dụ như của theme Dawn, bạn có thể kiểm tra file [`theme.liquid`](https://github.com/Shopify/dawn/blob/main/layout/theme.liquid#L112) nơi sẽ include header và footer sections thông qua `section` tag.

## Tham khảo

- [How to Create Your First Shopify Theme Section - Shopify.com](https://www.shopify.com/partners/blog/how-to-create-your-first-shopify-theme-section)
- [Sections and blocks - Shopify Help Center](https://help.shopify.com/en/manual/online-store/themes/theme-structure/sections-and-blocks)
