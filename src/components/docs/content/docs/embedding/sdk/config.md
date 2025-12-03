---
title: SDK تجزیه و تحلیل تعبیه‌شده - پیکربندی
---

# SDK تجزیه و تحلیل تعبیه‌شده - پیکربندی

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

## ارسال یک شی پیکربندی به `MetabaseProvider`

برای استفاده از SDK در برنامه خود، نیاز دارید جزء `MetabaseProvider` را import کنید و یک شی `authConfig` به آن ارائه دهید.

### `MetabaseProvider`

یک جزء که SDK را پیکربندی می‌کند و context و تم SDK متابیس را ارائه می‌دهد.

#### مرجع API

- [Component](./api/MetabaseProvider.html)
- [Props](./api/MetabaseProviderProps.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/config/config-base.tsx" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/MetabaseProviderProps.md" snippet="properties" %}

## Event handlerهای سراسری

می‌توانید با تعریف prop `eventHandlers` برای `MetabaseProvider` به رویدادها گوش دهید.

### `SdkEventHandlersConfig`

یک شی را می‌پذیرد که در آن هر کلید یک نوع رویداد و مقدار مربوطه تابع event handler است.

#### مرجع API

- [Type](./api/SdkEventHandlersConfig.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/config/config-with-event-handlers.tsx" snippet="example" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/SdkEventHandlersConfig.md" snippet="properties" %}

## بارگذاری مجدد اجزای متابیس

در صورتی که نیاز دارید یک جزء متابیس را بارگذاری مجدد کنید، مثلاً، کاربران شما داده برنامه را تغییر می‌دهند و آن داده برای رندر کردن یک سؤال در متابیس استفاده می‌شود. اگر این سؤال را جاسازی می‌کنید و می‌خواهید متابیس را مجبور کنید سؤال را برای نمایش آخرین داده بارگذاری مجدد کند، می‌توانید با استفاده از prop `key` برای مجبور کردن یک جزء به بارگذاری مجدد این کار را انجام دهید.

```typescript
{% include_file "{{ dirname }}/snippets/config/reload-metabase-provider.tsx" snippet="example" %}
```
