---
title: SDK تجزیه و تحلیل تعبیه‌شده - استفاده از SDK با Next.js
---

# SDK تجزیه و تحلیل تعبیه‌شده - استفاده از SDK با Next.js

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

{% include youtube.html id='UfL8okz36d0' %}

برخی یادداشت‌ها در مورد استفاده از SDK تجزیه و تحلیل تعبیه‌شده با [Next.js](https://nextjs.org/). SDK تست شده است که با Next.js 14 کار می‌کند، اگرچه ممکن است با نسخه‌های دیگر کار کند.

یک [برنامه نمونه Next.js که از SDK استفاده می‌کند](https://github.com/metabase/metabase-nextjs-sdk-embedding-sample) را ببینید.

## اجزای SDK با Server Side Rendering (SSR) یا React Server Components

از Embedded Analytics SDK v57، اجزای SDK به طور خودکار server-side rendering (SSR) را رد می‌کنند و فقط در کلاینت رندر می‌شوند.

### لایه سازگاری برای Server Side Rendering (SSR) (منسوخ شده)

از Embedded Analytics SDK 57، لایه سازگاری برای server-side rendering (SSR) منسوخ شده و دیگر لازم نیست. اگر از لایه سازگاری استفاده می‌کنید، importهای خود را از `@metabase/embedding-sdk-react/next` به `@metabase/embedding-sdk-react` تغییر دهید.

## مدیریت احراز هویت

App Router و Pages Router روش‌های مختلفی برای تعریف API routeها دارند. اگر می‌خواهید کاربران را از سرور خود با JWT احراز هویت کنید، می‌توانید دستورالعمل‌های زیر را دنبال کنید. اما اگر می‌خواهید با کلیدهای API برای توسعه محلی احراز هویت کنید، [احراز هویت محلی با کلیدهای API](./authentication.md#authenticating-locally-with-api-keys) را ببینید.

### استفاده از App Router

می‌توانید یک Route handler ایجاد کنید که افراد را به متابیس وارد می‌کند.

یک فایل `route.ts` جدید در دایرکتوری `app/*` خود ایجاد کنید، مثلاً `app/sso/metabase/route.ts` که با یک endpoint در /sso/metabase مطابقت دارد. این route handler باید یک JWT برای کاربر احراز هویت شده تولید کند و توکن را در یک شی JSON با شکل `{ jwt: string }` برگرداند.

```typescript
{% include_file "{{ dirname }}/snippets/next-js/app-router-authentication-api-route.ts" snippet="imports" %}

{% include_file "{{ dirname }}/snippets/next-js/app-router-authentication-api-route.ts" snippet="example" %}
```

سپس، این `authConfig` را به `MetabaseProvider` ارسال کنید

```typescript
{% include_file "{{ dirname }}/snippets/next-js/authentication-auth-config.tsx" %}
```

### استفاده از Pages Router

می‌توانید یک API route ایجاد کنید که افراد را به متابیس وارد می‌کند.

یک فایل `metabase.ts` جدید در دایرکتوری `pages/api/*` خود ایجاد کنید، مثلاً `pages/api/sso/metabase.ts` که با یک endpoint در /api/sso/metabase مطابقت دارد. این API route باید یک JWT برای کاربر احراز هویت شده تولید کند و توکن را در یک شی JSON با شکل `{ jwt: string }` برگرداند.

```typescript
{% include_file "{{ dirname }}/snippets/next-js/pages-router-authentication-api-route.ts" snippet="imports" %}

{% include_file "{{ dirname }}/snippets/next-js/pages-router-authentication-api-route.ts" snippet="example" %}
```

سپس، این `authConfig` را به `MetabaseProvider` ارسال کنید

```ts
{% include_file "{{ dirname }}/snippets/next-js/authentication-auth-config.tsx" %}
```
