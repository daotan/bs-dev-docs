---
title: CLI
---

# Shopify CLI for themes 

## Cài đặt Shopify CLI

Chạy những lệnh sau để cài đặt các pakage cần thiết để chạy CLI trên môi trường Linux, ngoài Node js:

```bash title="Terminal"
sudo apt update && sudo apt upgrade

sudo apt install curl gcc g++ make

sudo apt install ruby-full

sudo apt install ruby-dev
# Ruby development environment

sudo apt install git
```

## Các lệnh thông thường

### pull

Lệnh này yêu cầu bạn phải đăng nhập tới tài khoản Shopify Partner trên trình duyệt, sử dụng Shopify Auth. Lệnh sẽ kéo về các file theme của bạn về môi trường local.

```bash title="Terminal"
shopify theme pull
```

### dev

Lệnh này sẽ chạy theme của bạn trên môi trường local. 

```bash title="Terminal"
shopify theme dev
```

### check

Lệnh dùng để kiểm tra lỗi theme của bạn.

```bash title="Terminal"
shopify theme check
```

### push

Lệnh này sẽ đẩy tất cả các code theme mới nhất của bạn lên store.

```bash title="Terminal"
shopify theme push
```

### publish

Pulish theme của bạn.

```bash title="Terminal"
shopify theme publish
```

### logout

Đăng xuất tài khoản Shopify hoặc Partner của bạn. Thường dùng nếu như bạn làm việc với nhiều store khác nhau.

```bash title="Terminal"
shopify auth logout
```

Thông thường, những lệnh trên là đủ cho quá trình xây dựng và phát triển theme của bạn.

## Tham khảo

+ [Install Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)
+ [Shopify ClI commands for themes](https://shopify.dev/docs/themes/tools/cli/commands)