---
title: "SDK تجزیه و تحلیل تعبیه‌شده - داشبوردها"
---

# SDK تجزیه و تحلیل تعبیه‌شده - داشبوردها

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

می‌توانید یک داشبورد تعاملی، قابل ویرایش، یا ایستا را جاسازی کنید.

**به خاطر داشته باشید که جاسازی چندین نمونه از داشبوردها در همان صفحه هنوز پشتیبانی نمی‌شود.**

## جاسازی یک داشبورد

می‌توانید یک داشبورد را با استفاده از یکی از اجزای داشبورد جاسازی کنید:

### `StaticDashboard`

یک جزء داشبورد سبک. از این جزء استفاده کنید وقتی می‌خواهید نتایج را بدون اجازه دادن به افراد برای تعامل با داده نمایش دهید.

#### مرجع API

- [Component](./api/StaticDashboard.html)
- [Props](./api/StaticDashboardProps.html)

#### Props

{% include_file "{{ dirname }}/api/snippets/StaticDashboardProps.md" snippet="properties" %}

### `InteractiveDashboard`

یک جزء داشبورد با حفاری به پایین، رفتارهای کلیک، و توانایی مشاهده و کلیک به سؤال‌ها. از این جزء استفاده کنید وقتی می‌خواهید به افراد اجازه دهید داده‌های خود را کاوش کنند.

#### مرجع API

- [Component](./api/InteractiveDashboard.html)
- [Props](./api/InteractiveDashboardProps.html)

#### Props

{% include_file "{{ dirname }}/api/snippets/InteractiveDashboardProps.md" snippet="properties" %}

### `EditableDashboard`

یک جزء داشبورد با ویژگی‌های موجود در جزء `InteractiveDashboard`، و همچنین توانایی افزودن و به‌روزرسانی سؤال‌ها، چیدمان، و محتوا درون داشبورد خود. از این جزء استفاده کنید وقتی می‌خواهید به افراد توانایی تغییر داشبوردهای خود را بدهید، مثلاً در یک پنل admin در برنامه خود.

#### مرجع API

- [Component](./api/EditableDashboard.html)
- [Props](./api/EditableDashboardProps.html)

#### Props

{% include_file "{{ dirname }}/api/snippets/EditableDashboardProps.md" snippet="properties" %}

## مثال داشبورد جاسازی شده با جزء `InteractiveDashboard`

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/interactive-dashboard.tsx" %}
```

## سفارشی کردن ارتفاع داشبورد

به‌طور پیش‌فرض، اجزای داشبورد ارتفاع کامل صفحه (100vh) را می‌گیرند. می‌توانید این را با استایل‌های سفارشی ارسال شده از طریق props `style` یا `className` override کنید.

```tsx
{% include_file "{{ dirname }}/snippets/dashboards/custom-height.tsx" snippet="example" %}
```

## سفارشی کردن چیدمان سؤال حفاری

هنگام حفاری یا کلیک روی یک کارت سؤال در داشبورد، به نمای سؤال هدایت می‌شوید. به‌طور پیش‌فرض، سؤال در [چیدمان پیش‌فرض](./questions.md#customizing-interactive-questions) برای سؤال‌های تعاملی نمایش داده می‌شود.

برای سفارشی کردن چیدمان سؤال، یک prop `renderDrillThroughQuestion` به جزء `InteractiveDashboard` ارسال کنید، با نمای سفارشی به عنوان جزء فرزند.

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/custom-drill-through-question-layout.tsx" snippet="example-1" %}

{% include_file "{{ dirname }}/snippets/dashboards/custom-drill-through-question-layout.tsx" snippet="example-2" %}
```

prop questionView یک جزء React را می‌پذیرد که در نمای سؤال رندر می‌شود، که می‌توانید با اجزای namespaced درون جزء `InteractiveQuestion` بسازید. برای یک مثال چیدمان، [سفارشی کردن سؤال‌های تعاملی](./questions.md#customizing-interactive-questions) را ببینید.

## پلاگین‌های داشبورد

### `dashboardCardMenu`

این پلاگین به شما امکان می‌دهد اقدامات سفارشی را در منوی overflow کارت‌های داشبورد اضافه، حذف و تغییر دهید. پلاگین به عنوان یک منوی dropdown در گوشه بالا سمت راست کارت ظاهر می‌شود.

پیکربندی پیش‌فرض پلاگین به این شکل است:

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-base-1" %}
```

`dashboardCardMenu`: می‌تواند در InteractiveDashboard به این شکل استفاده شود:

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-base-2" %}
```

#### فعال/غیرفعال کردن اقدامات پیش‌فرض

برای حذف دکمه دانلود از منوی dashcard، `withDownloads` را روی `false` تنظیم کنید. برای حذف لینک ویرایش از منوی dashcard، `withEditLink` را روی `false` تنظیم کنید.

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-default-actions" %}
```

#### افزودن اقدامات سفارشی به منوی موجود:

می‌توانید اقدامات سفارشی را به منوی dashcard با افزودن یک شی به آرایه `customItems` اضافه کنید. هر عنصر می‌تواند یک شی یا یک تابع باشد که سؤال dashcard را می‌گیرد و فهرستی از موارد سفارشی را در فرمت زیر خروجی می‌دهد:

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-custom-action-type" %}
```

در اینجا یک مثال آمده است:

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-custom-actions" %}
```

#### جایگزینی منوی موجود با جزء خود

اگر می‌خواهید منوی موجود را با جزء خود جایگزین کنید، می‌توانید با ارائه یک تابع که یک جزء React برمی‌گرداند این کار را انجام دهید. این تابع همچنین می‌تواند سؤال را به عنوان آرگومان دریافت کند.

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/plugins.tsx" snippet="example-custom-actions-menu" %}
```

## ایجاد داشبوردها

ایجاد یک داشبورد می‌تواند با hook `useCreateDashboardApi` یا جزء `CreateDashboardModal` انجام شود.

### `useCreateDashboardApi`

از این hook استفاده کنید اگر می‌خواهید کنترل کامل بر UI و تنظیمات داشته باشید.

تا زمانی که SDK تجزیه و تحلیل تعبیه‌شده به طور کامل بارگذاری و مقداردهی اولیه نشده باشد، hook `null` برمی‌گرداند.

#### مرجع API

- [Hook](./api/useCreateDashboardApi.html)
- [Options](./api/CreateDashboardValues.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/create-dashboard.tsx" snippet="example-hook" %}
```

#### Options

{% include_file "{{ dirname }}/api/snippets/CreateDashboardValues.md" snippet="properties" %}

### `CreateDashboardModal`

#### مرجع API

- [Component](./api/CreateDashboardModal.html)
- [Props](./api/CreateDashboardModalProps.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/dashboards/create-dashboard.tsx" snippet="example-component" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/CreateDashboardModalProps.md" snippet="properties" %}
