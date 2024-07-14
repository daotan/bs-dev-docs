---
id: architecture
title: Architecture
---

# Cấu trúc thư mục của Shopify app

## app/

Đây là thư mục làm việc chính của project, bao gồm các file và thư mục sau:

```bash title="your-app/"
app/
├─ routes/
├─ db.server.ts
├─ entry.server.tsx
├─ globals.d.ts
├─ root.tsx
├─ shopify.server.ts
```

:::warning
Các file có đuôi `.server` là những file sẽ được Remix bundling dành riêng cho server, trong các Remix routing file khi import file này bạn chỉ có thể sử dụng chúng ở các router module thuộc về bên server như [`loader`](https://remix.run/docs/en/main/route/loader) hoặc [`action`](https://remix.run/docs/en/main/route/action).
:::

### routes/

Thư mục routing của Remix. Tham khảo [Route Configuration](https://remix.run/docs/en/main/discussion/routes) và [Route File Naming](https://remix.run/docs/en/main/file-conventions/routes) để tìm hiểu cách hoạt động của Remix router.



<details>
<summary>
Hướng dẫn Remix căn bản
</summary>
<div class="video-wrapper">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RBYJTop1e-g?si=9ces_vdS1K3Fmehq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</div>
</details>


### db.server.ts

File chứa prisma client instance sử dụng để làm việc với database của app.

### root.tsx

Root component của Remix. Tìm hiểu thêm về [root](https://remix.run/docs/en/main/file-conventions/root) route.

### shopify.server.ts

File chứa các chức năng của Shopify, các chức năng thường sử dụng là:
+ `authenticate`: Cung cấp các phương thức xác thực request và tạo api request trên Shopify.
+ `unauthenticated`: Cung cấp các phương thức xác thực request và tạo api request ngoài Shopify (đến một store khác).
+ `login`: Đăng nhập người dùng và redirect đến app route.
+ `sessionStorage`: Là `SessionStorage` instance mà bạn truyền ở config option. VD: PrismaSessionStorage
+ `apiVersion`: Phiên bản api của Shopify đang dùng.

## prisma/

```bash title="your-app/"
prisma/
    ├── migrations/
    └── schema.prisma
```

Thư mục làm việc của Prisma.

### migrations

Thư mục chứa các file migration do prisma generate. Tham khảo [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate).

### schema.prisma

File cấu hình của Prisma ORM setup. Tham khảo [Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema/overview).

<details>
<summary>
Prisma Tutorials
</summary>

**Prisma in 100 Seconds:**

<div class="video-wrapper">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rLRIB6AF2Dg?si=bI_YEL_oBwQteaKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</div>
<br/>

**Prisma Basic Tutorial:**

<div class="video-wrapper">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RebA5J-rlwg?si=1E7R4OS9cB9mu2Pp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</div>
<br/>
</details>

## public/

Thư mục chứa asset file.