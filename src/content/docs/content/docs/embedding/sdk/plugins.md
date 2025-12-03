---
title: SDK تجزیه و تحلیل تعبیه‌شده - پلاگین‌ها
---

# SDK تجزیه و تحلیل تعبیه‌شده - پلاگین‌ها

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

SDK تجزیه و تحلیل تعبیه‌شده متابیس از پلاگین‌ها برای سفارشی کردن رفتار اجزا پشتیبانی می‌کند. این پلاگین‌ها می‌توانند در یک زمینه سراسری یا به صورت هر جزء استفاده شوند.

## پلاگین‌های سراسری

برای استفاده از یک پلاگین به صورت سراسری، پلاگین را به prop `pluginsConfig` `MetabaseProvider` اضافه کنید:

```typescript
{% include_file "{{ dirname }}/snippets/plugins/global-plugins.tsx" snippet="example" %}
```

## پلاگین‌های جزء

برای استفاده از یک پلاگین به صورت هر جزء، پلاگین را به عنوان یک prop به جزء ارسال کنید:

```typescript
{% include_file "{{ dirname }}/snippets/plugins/component-plugins.tsx" snippet="example" %}
```

## مطالعه بیشتر

- [پلاگین‌های سؤال تعاملی](./questions.md#interactive-question-plugins)
- [پلاگین‌های داشبورد](./dashboards.md#dashboard-plugins)
