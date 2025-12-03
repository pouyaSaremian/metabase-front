---
title: "SDK تجزیه و تحلیل تعبیه‌شده - چت هوش مصنوعی"
summary: یک جزء چت هوش مصنوعی را در برنامه خود جاسازی کنید که می‌تواند پرس‌وجوها را از سؤال‌های زبان طبیعی ایجاد کند.
---

# SDK تجزیه و تحلیل تعبیه‌شده - چت هوش مصنوعی

![Embedded AI chat](../images/ai-chat.png)

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

می‌توانید یک چت هوش مصنوعی را در برنامه خود مشابه [Metabot](../embedded-analytics-js.md) در متابیس جاسازی کنید.

برای کمک به جاسازی Metabot برای یافتن و تمرکز آسان‌تر روی داده‌هایی که بیشتر به آن‌ها اهمیت می‌دهید، مجموعه حاوی مدل‌ها و متریک‌هایی که باید بتواند برای ایجاد پرس‌وجوها استفاده کند را انتخاب کنید.

اگر جزء Metabot را در یک برنامه جاسازی می‌کنید، می‌توانید یک مجموعه متفاوت را مشخص کنید که جاسازی Metabot مجاز به استفاده از آن برای ایجاد پرس‌وجوها است.

## پیش‌نمایش چت

می‌توانید [یک دمو از جزء چت هوش مصنوعی](https://embedded-analytics-sdk-demo.metabase.com/admin/analytics/new/ask-metabot) را در سایت دمو Shoppy ما بررسی کنید.

## مثال

```typescript
{% include_file "{{ dirname }}/snippets/questions/ai-question.tsx" %}
```

## Props

{% include_file "{{ dirname }}/api/snippets/MetabotQuestionProps.md" snippet="properties" %}

## مرجع API

- [Component](./api/MetabotQuestion.html)
- [Props](./api/MetabotQuestionProps.html)

## راه‌اندازی چت هوش مصنوعی

برای پیکربندی چت هوش مصنوعی جاسازی شده خود در متابیس:

۱. روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید.
۲. **Admin settings** را انتخاب کنید.
۳. روی تب **AI** کلیک کنید.
۴. در sidebar سمت چپ، **Embedded Metabot** را کلیک کنید.

هنگام جاسازی جزء Metabot در برنامه خود، باید یک مجموعه را مشخص کنید که جاسازی Metabot مجاز به استفاده از آن برای ایجاد پرس‌وجوها است. جاسازی Metabot فقط به آن مجموعه دسترسی خواهد داشت.

برای نکات و موارد بیشتر، [تنظیمات Metabot](../../ai/settings.md) را ببینید.

## چیدمان

از prop `layout` برای مشخص کردن اینکه از کدام چیدمان برای جزء Metabot استفاده شود استفاده کنید:

- `auto` (پیش‌فرض): Metabot از چیدمان `stacked` در صفحه‌نمایش‌های موبایل و چیدمان `sidebar` در صفحه‌نمایش‌های بزرگتر استفاده می‌کند.
- `stacked`: تجسم سؤال روی رابط چت قرار می‌گیرد.
- `sidebar`: تجسم سؤال در سمت چپ رابط چت ظاهر می‌شود، که در یک sidebar در سمت راست است.
