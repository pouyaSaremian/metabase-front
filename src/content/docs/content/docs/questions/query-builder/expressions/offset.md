---
title: Offset
---

# Offset

> ⚠️ تابع `Offset` در حال حاضر برای MySQL/MariaDB، ClickHouse، MongoDB و Druid در دسترس نیست.

تابع `Offset` مقدار یک عبارت را از «سطر دیگری» در نتایج برمی‌گرداند.  
`Offset` فقط در گام **Summarize** در Query builder قابل استفاده است (نمی‌توانید از `Offset` برای ساخت ستون سفارشی استفاده کنید).

نحو کلی: `Offset(expression, rowOffset)`

- `expression`: مقداری که می‌خواهید از سطر دیگری دریافت کنید.
- `rowOffset`: تعداد سطر با مبنای سطر فعلی؛ مثلاً `-1` یعنی سطر قبلی، `1` یعنی سطر بعدی.

مثال: عبارت `Offset(Sum([Total]), -1)` مقدار `Sum([Total])` در سطر قبلی را برمی‌گرداند.

## ترتیب Breakoutها مهم است

چون `Offset` به دیگر سطرها اشاره می‌کند، ترتیب Breakoutها (گروه‌بندی‌ها) در Summarize اهمیت زیادی دارد.  
Breakoutها همان گروه‌هایی هستند که در بخش **Group By** تعریف می‌کنید. متابیس ابتدا بر اساس اولین Breakout مرتب می‌کند و سپس در صورت وجود Breakoutهای اضافه، آن‌ها را به‌صورت پارتیشن در نظر می‌گیرد.

مثلاً اگر می‌خواهید تعداد سفارش‌ها را بر اساس دسته‌بندی محصول در گذر زمان ببینید، و هم‌زمان تعداد سفارش دستهٔ محصول در «دورهٔ قبلی» را هم مقایسه کنید، باید ابتدا بر اساس `Created At` و بعد بر اساس دسته‌بندی محصول Group کنید.

## Offset داده‌های مفقود را در نظر نمی‌گیرد

تابع `Offset` فقط روی سطرهایی کار می‌کند که **واقعاً** در داده‌های شما وجود دارند؛ همین موضوع می‌تواند نتایج «صحیح ولی غیرمنتظره» تولید کند.

فرض کنید می‌خواهید شمارش هر **روز** را با روز قبلی مقایسه کنید.

در جدول زیر، ستون **Previous** با عبارت `Offset(Count, -1)` ساخته شده است:

| Date     | Count | Previous |
| -------- | ----- | -------- |
| 1-Oct-22 | 6     |          |
| 2-Oct-22 | 3     | 6        |
| 4-Oct-22 | 2     | 3        |

مقدار ستون **Previous** در تاریخ ۴ اکتبر برابر `3` است، یعنی مقدار سطر قبلی.  
اما سطر قبلی مربوط به ۲ اکتبر است؛ یعنی داده‌ای برای تاریخ ۳ اکتبر نداریم.  
اگر می‌خواهید با `Offset` «روز قبلی» (یا هفته قبلی و …) را مقایسه کنید، باید مطمئن باشید که دادهٔ شما برای **هر واحد زمانی** یک سطر دارد، حتی اگر مقدار آن روز صفر باشد.

اگر در داده‌هایتان تاریخ‌هایی جاافتاده‌اند، می‌توانید یک جدول تقویم (Calendar table) را با داده‌ها Join کنید تا برای هر روز یک سطر در خروجی داشته باشید.

## انواع داده

تابع `Offset` هر نوع مقداری را که در سطر مرجع (Offset شده) وجود دارد، بدون تغییر برمی‌گرداند.

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | مقدار برگردانده‌شده توسط `Offset` |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| String                                                                                                                         | ✅                                  |
| Number                                                                                                                         | ✅                                  |
| Timestamp                                                                                                                      | ✅                                  |
| Boolean                                                                                                                        | ✅                                  |
| JSON                                                                                                                           | ✅                                  |

## مثال: مقایسهٔ سال‌به‌سال (YoY) در سری زمانی با استفاده از `Offset`

در دیتابیس نمونهٔ متابیس (Sample Database) می‌توانید از `Offset` برای مقایسهٔ تعداد سفارش‌ها به‌صورت سال‌به‌سال استفاده کنید.

1. ابتدا یک Summarize روی `Sum of Total` انجام دهید.  
2. سپس همان Summarize را دوباره خلاصه کنید، این بار با استفاده از `Offset` مقدار سطر قبلی را بگیرید:

```text
Offset(Sum([Total]), -1)
```

3. حالا خروجی را بر اساس `Created At` به‌تفکیک سال Group کنید.

![Comparing year over year](../../images/sum-of-totals-for-previous-period.png)

خروجی چیزی شبیه این خواهد شد:

![Year over year order sum of order totals](../../images/year-over-year-sum-totals.png)

با داشتن این مقادیر Offset شده (به‌عنوان "Previous period") می‌توانید [ستون‌های سفارشی](../editor.md#custom-columns) بسازید تا مثلاً اختلاف بین مجموع سال‌ها را حساب کنید:

```text
[Sum of total] - [Previous period]
```

و درصد تغییر سال‌به‌سال را محاسبه کنید:

```text
[Difference] / [Previous period] * 100
```

![Difference and percentage change](../../images/diff-and-percentage.png)

## مثال: میانگین متحرک (Rolling average) با استفاده از `Offset`

می‌توانید با کمک یک عبارت سفارشی و تابع `Offset`، میانگین متحرک محاسبه کنید.

مثلاً فرض کنید می‌خواهید میانگین متحرک مجموع مبلغ سفارش‌ها را در سه ماه گذشته محاسبه کنید. می‌توانید چنین عبارتی بسازید:

```text
(Sum([Total]) + Offset(Sum([Total]), -1) + Offset(Sum([Total]), -2)) / 3
```

این عبارت، مجموع این دوره را با دو دورهٔ قبلی (Offsetهای `-1` و `-2`) جمع می‌زند و سپس بر ۳ تقسیم می‌کند تا میانگین سه‌دوره‌ای به‌دست آید.

![Rolling average](../../images/rolling-average.png)

## توابع مرتبط

### SQL

تابع `Offset` در SQL معادل Window functionهای `LAG` و `LEAD` است.

مثلاً اگر بخواهید نمودار خطی‌ای داشته باشید که دو سری را مقایسه کند:

1. تعداد سفارش‌های این ماه، و  
2. تعداد سفارش‌های ماه قبل،

ابتدا تعداد سفارش‌های این ماه را حساب می‌کنید، سپس با یک عبارت `offset`، مقدار ماه قبل را به‌دست می‌آورید:

```text
Offset(count, -1)
```

متابیس در پشت‌صحنه این عبارت را به Window function `LAG` تبدیل می‌کند، شبیه این کوئری:

```sql
SELECT
  "source"."CREATED_AT" AS "CREATED_AT",
  COUNT(*) AS "count",
  LAG(COUNT(*), 1) OVER (
    ORDER BY
      "source"."CREATED_AT" ASC
  ) AS "Order count previous period"
FROM
  (
    SELECT
      DATE_TRUNC('month', "PUBLIC"."ORDERS"."CREATED_AT") AS "CREATED_AT"
    FROM
      "PUBLIC"."ORDERS"
  ) AS "source"
GROUP BY
  "source"."CREATED_AT"
ORDER BY
  "source"."CREATED_AT" ASC
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
