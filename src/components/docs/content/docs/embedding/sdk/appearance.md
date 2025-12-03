---
title: "SDK تجزیه و تحلیل تعبیه‌شده - ظاهر"
---

# SDK تجزیه و تحلیل تعبیه‌شده - ظاهر

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

می‌توانید اجزای متابیس جاسازی شده خود را با یک تم استایل دهید.

در اینجا یک مثال که شامل گزینه‌های استایل‌دهی مختلف موجود است آمده است:

```ts
{% include_file "{{ dirname }}/snippets/appearance/theme.ts" %}
```

### سفارشی کردن اجزای loader و error

می‌توانید اجزای خود را برای حالت‌های loading و error با مشخص کردن `loaderComponent` و `errorComponent` به عنوان props به `MetabaseProvider` ارائه دهید.

```tsx
{% include_file "{{ dirname }}/snippets/appearance/customizing-loader-and-components.tsx" snippet="imports" %}

{% include_file "{{ dirname }}/snippets/appearance/customizing-loader-and-components.tsx" snippet="example" %}
```

## محدودیت‌ها

- متغیرهای CSS هنوز پشتیبانی نمی‌شوند. اگر می‌خواهید متابیس از متغیرهای CSS پشتیبانی کند، لطفاً این [درخواست ویژگی](https://github.com/metabase/metabase/issues/59237) را upvote کنید.
- رنگ‌های تنظیم شده در تنظیمات تجسم برای یک سؤال رنگ‌های تم را override می‌کنند.
