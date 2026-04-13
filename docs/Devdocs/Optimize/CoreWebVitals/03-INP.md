---
id: inp
title: INP
---

# INP
## INP là gì?
+ INP (Interaction to Next Paint) là metric đo độ phản hồi của website khi user tương tác.
+ Nó đo thời gian từ lúc user click / tap / gõ phím → đến khi UI phản hồi.
+ Cách INP hoạt động:
  + Ghi nhận tất cả interactions trong suốt lifecycle page.
  + Chọn ra interaction chậm nhất (gần worst-case) → làm INP

## Mức INP bao nhiêu là tốt?
Để mang lại trải nghiệm người dùng tốt, các trang web nên cố gắng đạt được thời gian phản hồi từ 200ms trở xuống.
![Core Web Vitals](/img/metric-inp.png)

## INP đo những gì trong 1 interaction
Một interaction gồm 3 phần:
1. Input delay
   + User click nhưng main thread đang bận → bị delay
2. Processing
   + JS handler chạy
3. Presentation delay
   + Chờ browser render frame mới
##  Các cách optimize INP
### Giảm Input Delay
1. Giảm long tasks
   + Split code
   + Lazy load
   + Code-splitting
2. Giảm JS execution lúc load
   + defer / async
   + giảm bundle size
3. Tránh block khi user tương tác sớm
   + user click khi page chưa load xong → rất dễ INP cao
### Tối ưu event callback
Mục tiêu: callback chạy càng nhanh càng tốt.

<strong>Thường xuyên nhường lại luồng chính (Yielding)</strong>

Nếu logic tương tác phức tạp, khó giảm khối lượng công việc, hãy chia nhỏ công việc thành các tác vụ riêng biệt.

+ Cách đơn giản: Dùng setTimeout (callback được đưa vào tác vụ mới)
+ Chỉ chạy những logic cần thiết để cập nhật giao diện ngay lập tức. Trì hoãn tất cả công việc còn lại đến sau khung hình tiếp theo.
+ Ví Dụ (trình soạn thảo văn bản):
```javascript title="javascript"
textBox.addEventListener('input', (inputEvent) => {
  // Chỉ cập nhật UI ngay lập tức
  updateTextBox(inputEvent);

  // Trì hoãn mọi việc khác (đếm từ, kiểm tra lỗi, lưu) đến sau khung hình tiếp theo
  requestAnimationFrame(() => {
    setTimeout(() => {
      const text = textBox.textContent;
      updateWordCount(text);
      checkSpelling(text);
      saveChanges(text);
    }, 0);
  });
});
```
![Core Web Vitals](/img/optimize-long-tasks.png)

<strong>Tránh Layout Thrashing</strong>
+ Layout thrashing xảy ra khi bạn cập nhật style rồi ngay lập tức đọc giá trị style đó trong cùng một tác vụ. Trình duyệt buộc phải chạy layout đồng bộ, gây nghẽn.
![Core Web Vitals](/img/layout-thrashing.png)
+ Cách tránh:
  + Đọc giá trị style trước, cập nhật style sau.
  + Không trộn lẫn đọc và ghi trong cùng một khối code mà không tách biệt.
  + Ví dụ:
```javascript title="javascript"
  // 1. READ phase
   const widths = elements.map(el => el.offsetWidth);
   
   // 2. WRITE phase
   elements.forEach((el, i) => {
      el.style.width = widths[i] + 10 + "px";
   });
```

### Giảm độ trễ hiển thị
<strong>Giảm kích thước DOM</strong>
+ DOM nhỏ → render nhanh.
+ DOM cực lớn → render chậm, đặc biệt ở lần render đầu và khi phản hồi tương tác.
+ Giải pháp: Làm phẳng DOM, thêm phần tử dần dần thay vì tải tất cả từ đầu.
+ Ví Dụ: 
```javascript title="javascript"
   let i = 0;
   const chunkSize = 50;
   
   function renderChunk() {
      const fragment = document.createDocumentFragment();
   
      for (let j = 0; j < chunkSize && i < data.length; j++, i++) {
         const li = document.createElement("li");
         li.textContent = data[i];
         fragment.appendChild(li);
      }
   
      list.appendChild(fragment);
   
      if (i < data.length) {
         requestAnimationFrame(renderChunk); // yield cho browser
      }
   }
   
   renderChunk(); 
```

<strong>Dùng CSS content-visibility</strong>

Thuộc tính này giúp trì hoãn render các phần tử nằm ngoài màn hình (offscreen) cho đến khi chúng gần hiển thị.

<strong>Lợi ích:</strong> Giảm công việc render cả lúc tải trang lẫn lúc tương tác.
Ví dụ:
```html title="html"
   <section class="card">Item 1</section>
   <section class="card">Item 2</section>
   <section class="card">Item 3</section>
```
```css title="CSS"
   .card {
     content-visibility: auto;
   }
```

<strong>Hiểu chi phí render HTML bằng JavaScript</strong>

+ <strong>HTML từ server:</strong> Được gửi theo luồng (stream), trình duyệt phân tích cú pháp và render dần, tự động nhường luồng → hiệu quả.

+ <strong>HTML từ JavaScript (kiểu SPA):</strong> Bạn dùng JS để tạo HTML → trình duyệt phải chạy JS xong mới bắt đầu phân tích và render. Tốn kém hơn nhiều.

+ <strong>Khuyến nghị:</strong> Tránh render một lượng lớn HTML bằng JavaScript nếu không muốn làm chậm khung hình tiếp theo.

## Nguồn tham khảo

https://web.dev/articles/inp

https://web.dev/articles/optimize-inp