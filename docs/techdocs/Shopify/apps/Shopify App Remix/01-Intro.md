---
id: overview
title: Overview
---

# Overview

Shopify App với template là Remix Framework sẽ là template mà bạn phần lớn sử dụng xuyên suốt các dự án.
Vì vậy sẽ có một số thông tin bạn cần phải nắm bắt được khi làm việc với template này.

## Các tính năng

Remix app đi kèm với các chức năng có sẵn sau đây:

+ **OAuth**: Cài đặt app và trao quyền hạn.
+ **GraphQL Admin API**: Tạo query hoặc mutation của Shopify admin.
+ **REST Admin API**: Tương tác với REST API của Shopify admin.
+ **Webhooks**: Callbacks gửi bởi Shopify khi có các sự kiện xảy ra.
+ **AppBridge**: tích hợp thư viện AppBrigde của Shopify.
+ **Polaris**: tích hợp thư viện Polaris React để sử dụng các thành phần giao diện Polaris.

## Tech Stack

Template này sử dụng [Remix](https://remix.run/). Kèm theo đó là một số công cụ, thư viện giúp phát triển app dễ dàng hơn:

+ [Shopify App Remix](https://shopify.dev/docs/api/shopify-app-remix) cung cấp chức năng xác thực và các phương thức tương tác với Shopify APIs và Graphqls.
+ [Shopify App Bridge](https://shopify.dev/docs/apps/tools/app-bridge) cho phép app của bạn tích hợp liền mạch với Shopify admin.
+ [Polaris React](https://polaris.shopify.com/) thư viện thành phần giao diện tuân theo hệ thống thiết kế Polaris của Shopify.
+ [Webhooks](https://github.com/Shopify/shopify-app-js/tree/main/packages/shopify-app-remix#authenticating-webhook-requests): Callbacks gửi bởi Shopify khi có các sự kiện xảy ra.

## Tham khảo
+ [Github - Shopify App Template Remix](https://github.com/Shopify/shopify-app-template-remix)