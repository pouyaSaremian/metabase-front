---
title: "SDK تجزیه و تحلیل تعبیه‌شده - سؤال‌ها"
description: نحوه جاسازی نمودارها در برنامه خود با SDK تجزیه و تحلیل تعبیه‌شده.
---

# SDK تجزیه و تحلیل تعبیه‌شده - سؤال‌ها

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

روش‌های مختلفی برای جاسازی سؤال‌ها وجود دارد:

- [سؤال ایستا](#staticquestion). یک نمودار را جاسازی می‌کند. کلیک روی نمودار هیچ کاری انجام نمی‌دهد.
- [سؤال تعاملی](#interactivequestion). کلیک روی نمودار منوی حفاری را به شما می‌دهد.
- [سازنده پرس‌وجو](#embedding-the-query-builder-for-creating-new-questions). سازنده پرس‌وجوی گرافیکی را بدون یک پرس‌وجوی از پیش تعریف شده جاسازی می‌کند.

## جاسازی یک سؤال

می‌توانید یک سؤال را با استفاده از یکی از اجزای سؤال جاسازی کنید:

### `StaticQuestion`

یک جزء سؤال سبک. از این جزء استفاده کنید وقتی می‌خواهید نتایج را بدون اجازه دادن به افراد برای تعامل با داده نمایش دهید.

![Static question](../images/static-question.png)

جزء یک ارتفاع پیش‌فرض دارد، که می‌تواند با استفاده از prop `height` سفارشی شود. برای به ارث بردن ارتفاع از کانتینر والد، می‌توانید `100%` را به prop height ارسال کنید.

#### مرجع API

- [Component](./api/StaticQuestion.html)
- [Props](./api/StaticQuestionProps.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/questions/static-question.tsx" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/StaticQuestionProps.md" snippet="properties" %}

### `InteractiveQuestion`

از این جزء استفاده کنید وقتی می‌خواهید به افراد اجازه دهید داده‌های خود را کاوش کنند و چیدمان سؤال را سفارشی کنند.

![Interactive question](../images/interactive-question.png)

#### مرجع API

- [Component](./api/InteractiveQuestion.html)
- [Props](./api/InteractiveQuestionProps.html)

#### مثال

```typescript
{% include_file "{{ dirname }}/snippets/questions/interactive-question.tsx" %}
```

#### Props

{% include_file "{{ dirname }}/api/snippets/InteractiveQuestionProps.md" snippet="properties" %}

## ارسال پارامترهای SQL به سؤال‌های SQL با `initialSqlParameters`

می‌توانید مقادیر پارامتر را به سؤال‌های تعریف شده با SQL از طریق prop `initialSqlParameters`، در فرمت `{parameter_name: parameter_value}` ارسال کنید. بیشتر در مورد [پارامترهای SQL](../../questions/native-editor/sql-parameters.md) بیاموزید.

```typescript
{% include_file "{{ dirname }}/snippets/questions/initial-sql-parameters.tsx" snippet="example" %}
```

`initialSqlParameters` نمی‌تواند با سؤال‌های ساخته شده با استفاده از سازنده پرس‌وجو استفاده شود.

## سؤال‌ها با زبان طبیعی

[چت هوش مصنوعی](./ai-chat.md) را ببینید.

## سفارشی کردن سؤال‌های تعاملی

به‌طور پیش‌فرض، SDK تجزیه و تحلیل تعبیه‌شده یک چیدمان پیش‌فرض برای سؤال‌های تعاملی ارائه می‌دهد که به شما امکان می‌دهد سؤال‌های خود را مشاهده کنید، فیلترها و تجمیع‌ها را اعمال کنید و عملکرد درون سازنده پرس‌وجو را دسترسی داشته باشید.

در اینجا یک مثال از استفاده از جزء `InteractiveQuestion` با چیدمان پیش‌فرض آن آمده است:

```typescript
{% include_file "{{ dirname }}/snippets/questions/customize-interactive-question.tsx" snippet="example-default-interactive-question" %}
```

برای سفارشی کردن چیدمان، از اجزای namespaced درون جزء `InteractiveQuestion` استفاده کنید. به عنوان مثال:

```typescript
{% include_file "{{ dirname }}/snippets/questions/customize-interactive-question.tsx" snippet="example-customized-interactive-question" %}
```

### اجزای سؤال تعاملی

این اجزا از طریق namespace `InteractiveQuestion` در دسترس هستند (مثلاً، `<InteractiveQuestion.Filter />`).

#### مرجع API:

- [InteractiveQuestion.BackButton](./api/InteractiveQuestion.html#backbutton)
- [InteractiveQuestion.Breakout](./api/InteractiveQuestion.html#breakout)
- [InteractiveQuestion.BreakoutDropdown](./api/InteractiveQuestion.html#breakoutdropdown)
- [InteractiveQuestion.ChartTypeDropdown](./api/InteractiveQuestion.html#charttypedropdown)
- [InteractiveQuestion.ChartTypeSelector](./api/InteractiveQuestion.html#charttypeselector)
- [InteractiveQuestion.Editor](./api/InteractiveQuestion.html#editor)
- [InteractiveQuestion.EditorButton](./api/InteractiveQuestion.html#editorbutton)
- [InteractiveQuestion.Filter](./api/InteractiveQuestion.html#filter)
- [InteractiveQuestion.FilterDropdown](./api/InteractiveQuestion.html#filterdropdown)
- [InteractiveQuestion.QuestionSettings](./api/InteractiveQuestion.html#questionsettings)
- [InteractiveQuestion.QuestionSettingsDropdown](./api/InteractiveQuestion.html#questionsettingsdropdown)
- [InteractiveQuestion.QuestionVisualization](./api/InteractiveQuestion.html#questionvisualization)
- [InteractiveQuestion.ResetButton](./api/InteractiveQuestion.html#resetbutton)
- [InteractiveQuestion.SaveButton](./api/InteractiveQuestion.html#savebutton)
- [InteractiveQuestion.SaveQuestionForm](./api/InteractiveQuestion.html#savequestionform)
- [InteractiveQuestion.Summarize](./api/InteractiveQuestion.html#summarize)
- [InteractiveQuestion.SummarizeDropdown](./api/InteractiveQuestion.html#summarizedropdown)
- [InteractiveQuestion.DownloadWidget](./api/InteractiveQuestion.html#downloadwidget)
- [InteractiveQuestion.DownloadWidgetDropdown](./api/InteractiveQuestion.html#downloadwidgetdropdown)
- [InteractiveQuestion.Title](./api/InteractiveQuestion.html#title)

## پلاگین‌های سؤال تعاملی

می‌توانید از [پلاگین‌ها](./plugins.md) برای افزودن عملکرد سفارشی به سؤال‌های خود استفاده کنید.

### `mapQuestionClickActions`

این پلاگین به شما امکان می‌دهد اقدامات سفارشی به منوی click-through یک سؤال تعاملی اضافه کنید. می‌توانید ظاهر و رفتار اقدامات سفارشی را اضافه و سفارشی کنید.

```typescript
{% include_file "{{ dirname }}/snippets/questions/interactive-question-plugins.tsx" snippet="example" %}
```

## جلوگیری از ذخیره تغییرات به یک `InteractiveQuestion` توسط افراد

برای جلوگیری از ذخیره تغییرات به یک سؤال تعاملی توسط افراد، یا از ذخیره تغییرات به عنوان یک سؤال جدید، می‌توانید `isSaveEnabled={false}` را تنظیم کنید:

```tsx
{% include_file "{{ dirname }}/snippets/questions/disable-question-save.tsx" %}
```

## جاسازی سازنده پرس‌وجو برای ایجاد سؤال‌های جدید

![Query builder](../images/query-builder.png)

می‌توانید سازنده پرس‌وجو را برای ایجاد سؤال‌های جدید با ارسال prop `questionId="new"` به جزء `InteractiveQuestion` جاسازی کنید. می‌توانید از [prop `children`](#customizing-interactive-questions) برای سفارشی کردن چیدمان برای ایجاد سؤال‌های جدید استفاده کنید.

```tsx
{% include_file "{{ dirname }}/snippets/questions/new-question.tsx" %}
```

برای سفارشی کردن چیدمان ویرایشگر سؤال، از جزء `InteractiveQuestion` [مستقیماً با یک prop `children` سفارشی](#customizing-interactive-questions) استفاده کنید.
