---
title: Funnel charts
redirect_from:
  - /docs/latest/questions/sharing/visualizations/funnel
description: Funnel charts visualize how a value is broken out by a series of steps, and the percent change between steps. To build a funnel chart in Metabase, you need a table with the name and value for each step.
---

<!-- markdownlint-disable-next-line MD025 -->
# نمودارهای Funnel

نمودارهای Funnel نشان می‌دهند یک مقدار چگونه در طول مجموعه‌ای از گام‌ها توزیع می‌شود و درصد تغییر بین گام‌ها چقدر است.

![Funnel](../images/funnel.png)

Funnelها به‌طور متداول در تجارت الکترونیک و فروش استفاده می‌شوند تا نشان دهند در هر گام از فرآیند Checkout یا چرخهٔ فروش چه تعداد مشتری حضور دارند. Funnel فقط زمانی معنا دارد که گام‌ها ترتیبی باشند و مقدار Metric معمولاً از هر گام به گام بعدی کاهش یابد.

## شکل داده برای نمودار Funnel

برای ساخت Funnel در متابیس، باید جدولی با دست‌کم دو ستون داشته باشید: یک ستون برای گام‌های Funnel و ستونی دیگر برای Metric موردنظر، مثل تعداد مشتریان در هر گام.

شکل داده‌ای که برای ساخت نمودار بالا استفاده شده، شبیه جدول زیر است:

| Stage         | Opportunities |
| ------------- | ------------- |
| Leads         | 3901          |
| Qualification | 3714          |
| Prospecting   | 3231          |
| Proposal      | 2972          |
| Negotiation   | 1588          |
| Closed        | 737           |

اگر در نتایج کوئری ستون‌های بیشتری داشته باشید، در [تنظیمات داده](#funnel-chart-settings) می‌توانید مشخص کنید کدام ستون برای گام‌های Funnel و کدام ستون برای Metric استفاده شود.

به‌صورت پیش‌فرض، متابیس گام‌ها را به همان ترتیبی که در نتایج کوئری ظاهر می‌شوند نشان می‌دهد، اما در [تنظیمات داده](#funnel-chart-settings) می‌توانید ترتیب گام‌ها را عوض کنید یا بعضی از آن‌ها را مخفی کنید.

## ساخت کوئری برای نمودار Funnel

برای ساخت کوئری با شکل مناسب برای Funnel، معمولاً لازم است داده‌ها را خلاصه (Summarize) کنید.

اگر دادهٔ خام شما (قبل از Aggregation) ستونی داشته باشد که برای هر نقطهٔ داده، گام مربوطه را مشخص کند، می‌توانید کوئری ساده‌ای با Breakout بر اساس همین گام‌ها بسازید:

![A query in the query builder used to build a funnel chart](../images/build-a-funnel-query.png)

اگر داده‌های مربوط به گام‌های مختلف Funnel از جدول‌های متفاوت بیاید، یا لازم باشد برای هر گام فیلترها یا قواعد Aggregation متفاوتی به‌کار ببرید، می‌توانید برای هر گام یک سؤال جداگانه بسازید و بعد آن‌ها را با یک کوئری SQL ترکیب کنید.

برای مثال، می‌توانید سه سؤال مستقل در [Query builder](../query-builder/editor.md) بسازید که هرکدام Count مربوط به مراحل `Leads`، `Qualification` و `Proposal` را برگردانند. سپس یک [کوئری SQL](../native-editor/writing-sql.md) بنویسید که با [ارجاع به این سؤال‌ها](../native-editor/referencing-saved-questions-in-queries.md) و استفاده از `UNION`، خروجی را در شکل مناسب برای ساخت نمودار Funnel برگرداند.

```sql
-- example of a query that retrieves results of questions and combines them with UNION

SELECT 'Leads' as step, * from {% raw %}{{#120-leads}}{% endraw %}
UNION
SELECT 'Qualified' as step, * from {% raw %}{{#121-qualified}}{% endraw %}
UNION
SELECT 'Prospects' as step, * from {% raw %}{{#122-prospects}}{% endraw %}

```

![Data for the funnel coming from a SQL union](../images/funnel-as-sql.png)

## نحوهٔ خواندن نمودار Funnel

نمودار Funnel مقدار Metric را برای هر گام، و همین‌طور نسبت آن مقدار به مقدار گام _اول_ نشان می‌دهد. مقدار گام اول در سمت چپ نمودار نمایش داده می‌شود.

![Funnel chart with a tooltip](../images/read-a-funnel.png)

برای مثال، عبارت "76.19%, 2,972" زیر یک گام یعنی مقدار Metric در آن گام برابر ۲٬۹۷۲ است که ۷۶٫۱۹٪ مقدار گام _اول_ (۳٬۹۰۱) محسوب می‌شود.

برای دیدن درصد نسبت به گام _قبلی_ (به‌جای گام اول)، روی گام Hover کنید و Tooltip را بخوانید.

## تنظیمات نمودار Funnel

برای بازکردن تنظیمات نمودار، روی آیکون **چرخ‌دنده** در پایینِ چپ نمودار کلیک کنید.

![Funnel chart settings](../images/funnel-settings.png)

اگر در نتایج کوئری بیش از دو ستون دارید، در تب **Data** می‌توانید مشخص کنید کدام ستون برای گام‌های Funnel و کدام ستون برای Metric استفاده شود.

می‌توانید ترتیب گام‌ها را با کشیدن و رها کردن (Drag & Drop) عوض کنید، یا با کلیک روی آیکون **چشم** روی کارت هر گام، آن گام را موقتاً مخفی کنید.

برای تغییر قالب‌بندی نمایش Metric (مثلاً فرمت عدد، واحد پول و …)، روی آیکون **سه نقطه** کنار نام Metric کلیک کنید. این تنظیمات فقط روی خود مقدار Metric اعمال می‌شود و روی درصدهایی که هر گام را با گام اول مقایسه می‌کنند (درصد کناری هر ستون) اعمال نمی‌شود.

## محدودیت‌ها و جایگزین‌ها

در حال حاضر نمی‌توانید رنگ یا جهت (Orientation) Funnel را تغییر دهید، و امکان اضافه‌کردن Breakout هم وجود ندارد.  
اگر به تنظیمات بصری انعطاف‌پذیرتری نیاز دارید، می‌توانید به‌جای Funnel از [نمودار میله‌ای یا ردیفی](./line-bar-and-area-charts.md) استفاده کنید.
