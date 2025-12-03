---
title: SDK تجزیه و تحلیل تعبیه‌شده - مجموعه‌ها
---

# SDK تجزیه و تحلیل تعبیه‌شده - مجموعه‌ها

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

## جاسازی یک مرورگر مجموعه

می‌توانید مرورگر مجموعه متابیس را جاسازی کنید تا افراد بتوانند موارد در متابیس شما را از برنامه شما کاوش کنند.

### `CollectionBrowser`

#### مرجع API

- [Component](./api/CollectionBrowser.html)
- [Props](./api/CollectionBrowserProps.html)

#### مثال

```tsx
{% include_file "{{ dirname }}/snippets/collections/collection-browser.tsx" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/CollectionBrowserProps.md" snippet="properties" %}

## مخفی کردن collection picker و hard code کردن مجموعه‌ای که می‌خواهید افراد چیزها را در آن ذخیره کنند

با سؤال‌های ایستا، یک مجموعه خاص را به عنوان مجموعه‌ای که افراد می‌توانند موارد را در آن ذخیره کنند تنظیم می‌کنید، تا نیازی به انتخاب مجموعه نداشته باشند. برای hard-code کردن یک مجموعه:

۱. `isSaveEnabled` را روی true تنظیم کنید.
۲. `targetCollection` را روی collection ID که می‌خواهید افراد موارد را در آن ذخیره کنند تنظیم کنید.

برای گزینه‌های بیشتر، [Props سؤال](./questions.md) را ببینید.
