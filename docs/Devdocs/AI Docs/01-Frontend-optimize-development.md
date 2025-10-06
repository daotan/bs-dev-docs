---
id: frontend_optimize_development
title: Frontend development
---
# 📘 Ứng dụng AI cho frontend dev
> **Mục tiêu:** Giúp Dev team tận dụng AI để giảm thời gian development frontend trên Magento 2, Shopify, React/PWA,...

---

## 1. Vì sao dùng AI trong development?
- **Tiết kiệm thời gian**: Generate code snippet, boilerplate, hoặc template nhanh.  
- **Debug hiệu quả**: Copy error log → AI phân tích nguyên nhân và gợi ý fix.  
- **Refactor code**: Từ inline JS/CSS thành code sạch, dễ maintain.  
- **Học nhanh công nghệ mới**: AI giải thích code, framework, hoặc pattern.  
- **Documentation tự động**: Sinh README, usage guide cho theme/module.  
- **Còn nhiều nhiều nữa**: ...

---

## 2. Ngôn ngữ sử dụng khi viết Prompt
- Có thể viết **tiếng Việt hoặc tiếng Anh**.  
- Khuyến nghị:
  - Viết **tiếng Việt** nếu mô tả dễ hơn.  
  - Giữ nguyên **thuật ngữ/code/error log bằng tiếng Anh**.  
  - Viết **tiếng Anh** chuẩn là cách tốt nhất để AI có thể mapping dễ hơn tới các tài liệu mà nó đã dc training, vì hầu hết tài liệu AI dc training sẽ là tiếng anh.

:::info[Chú ý]

Viết prompt bằng tiếng Anh thì kết quả thường chuẩn hơn về cú pháp code, vì hầu hết tài liệu gốc đều là tiếng Anh. Nhưng nếu tiếng Anh chưa tốt, bạn có thể mô tả sai ý hoặc viết lủng củng → AI hiểu sai.
=> Nếu tiếng Anh không đủ tốt thì nên viết prompt bằng tiếng Việt, nhưng những phần thuật ngữ/code/error log thì giữ nguyên tiếng Anh.

:::

📌 Ví dụ prompt song ngữ tốt:
```text
Tôi đang customize Magento 2 checkout page.
Đây là Knockout JS code:

[CODE]
Và đây là error log trong console:

[ERROR]
Hãy giúp tôi phân tích nguyên nhân và viết lại code đúng chuẩn Magento 2.
```

## 3. Workflow đề xuất khi làm với AI

- **Khi bắt đầu task:** dùng AI để generate skeleton code (layout XML, React component, Liquid snippet…).
- **Trong khi code:** nếu gặp bug, copy error log + code → đưa vào prompt để phân tích.
- **Khi hoàn thành:** nhờ AI viết doc hoặc refactor code cho sạch.
- **Review:** AI không thay thế code review, nhưng hỗ trợ giải thích logic hoặc detect code smell.

## 4. Best Practices khi viết Prompt
- Luôn cung cấp context rõ ràng: platform, framework, mục tiêu.
- Đưa code hoặc error log cụ thể thay vì mô tả chung chung.
- Yêu cầu AI:
    - “Explain” → khi muốn học/hiểu.
    - “Rewrite” → khi muốn code sạch, tối ưu.
    - “Generate” → khi muốn code mới từ đầu.

:::danger[Nhớ!]

AI là trợ lý tăng tốc, không phải người code thay. Team nên:
- Sử dụng AI để tiết kiệm thời gian xử lý bug/boilerplate.
- Luôn kiểm tra lại code AI sinh ra.
- Chia sẻ prompt hiệu quả trong team để cải thiện dần “Prompt Library”.

:::

## 5. Prompt Library
