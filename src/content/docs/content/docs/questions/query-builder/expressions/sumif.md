---
title: SumIf
---

# SumIf

تابع `SumIf` مجموع مقادیر یک ستون را **مشروط به یک شرط** حساب می‌کند.

نحو کلی: `SumIf(column, condition)`

مثال: در جدول زیر، عبارت `SumIf([Payment], [Plan] = "Basic")` مقدار `200` را برمی‌گرداند.

| Payment | Plan     |
| ------- | -------- |
| 100     | Basic    |
| 100     | Basic    |
| 200     | Business |
| 200     | Business |
| 400     | Premium  |

> [فرمول‌های تجمیعی](../expressions-list.md#aggregations) مثل `sumif` باید در منوی [**Summarize**](../../query-builder/summarizing-and-grouping.md) → **Custom Expression** اضافه شوند (در صورت نیاز اسکرول کنید).

## پارامترها

- `column`: نام یک ستون عددی، یا یک [تابع](../expressions-list.md#functions) که ستون عددی برمی‌گرداند.
- `condition`: یک [تابع](../expressions-list.md#functions) یا [عبارت شرطی](../expressions.md#conditional-operators) که مقدار بولی (`true` یا `false`) برمی‌گرداند؛ مانند `[Payment] > 100`.

## چند شرط (Multiple conditions)

برای نشان‌دادن حالت‌های مختلف `SumIf` (شرط‌های [الزامی](#required-conditions)، [اختیاری](#optional-conditions) و [ترکیبی](#some-required-and-some-optional-conditions)) از جدول نمونهٔ زیر استفاده می‌کنیم:

| Payment | Plan     | Date Received    |
| ------- | -------- | ---------------- |
| 100     | Basic    | October 1, 2020  |
| 100     | Basic    | October 1, 2020  |
| 200     | Business | October 1, 2020  |
| 200     | Business | November 1, 2020 |
| 400     | Premium  | November 1, 2020 |

### شرط‌های الزامی (Required)

برای جمع‌زدن ستون بر اساس چند شرط الزامی، شرط‌ها را با عملگر `AND` ترکیب کنید:

```text
SumIf([Payment], ([Plan] = "Basic" AND month([Date Received]) = 10))
```

در دادهٔ نمونه، این عبارت مجموع پرداخت‌های مربوط به پلن Basic در ماه اکتبر (۲۰۰) را برمی‌گرداند.

### شرط‌های اختیاری (Optional)

برای جمع‌زدن ستون با چند شرط اختیاری، شرط‌ها را با `OR` ترکیب کنید:

```text
SumIf([Payment], ([Plan] = "Basic" OR [Plan] = "Business"))
```

در دادهٔ نمونه، این عبارت مقدار `600` را برمی‌گرداند.

### ترکیبی از شرط‌های الزامی و اختیاری

برای ترکیب شرط‌های الزامی و اختیاری، حتماً از پرانتز استفاده کنید:

```text
SumIf([Payment], ([Plan] = "Basic" OR [Plan] = "Business") AND month([Date Received]) = 10)
```

در دادهٔ نمونه، این عبارت مقدار `400` را برمی‌گرداند.

> **نکته:** عادت کنید همیشه دور گروه‌های `AND` و `OR` پرانتز بگذارید تا ناخواسته شرط اجباری را اختیاری (یا برعکس) نکنید.

## زیرجمع‌های شرطی بر اساس Group

برای به‌دست‌آوردن زیرجمع‌های شرطی بر اساس دسته (مثلاً مجموع پرداخت‌ها به‌ازای هر پلن):

1. یک فرمول `SumIf` با شرط‌های موردنظر بنویسید.
2. یک ستون [**Group by**](../../query-builder/summarizing-and-grouping.md) در Query builder اضافه کنید.

با دادهٔ نمونه:

| Payment | Plan     | Date Received    |
| ------- | -------- | ---------------- |
| 100     | Basic    | October 1, 2020  |
| 100     | Basic    | October 1, 2020  |
| 200     | Business | October 1, 2020  |
| 200     | Business | November 1, 2020 |
| 400     | Premium  | November 1, 2020 |

برای جمع‌زدن پرداخت‌های پلن‌های Business و Premium:

```text
SumIf([Payment], [Plan] = "Business" OR [Plan] = "Premium")
```

یا برای جمع‌زدن همهٔ پلن‌هایی که Basic نیستند:

```text
SumIf([Payment], [Plan] != "Basic")
```

> عملگر «نامساوی» را باید به‌صورت `!=` بنویسید.

برای دیدن این مجموع‌ها به‌تفکیک ماه، ستون **Group by** را روی "Date Received: Month" قرار دهید:

| Date Received: Month | Total Payments for Business and Premium Plans |
| -------------------- | --------------------------------------------- |
| October              | 200                                           |
| November             | 600                                           |

> **نکته:** برای خوانایی بیش‌تر، هنگام به‌اشتراک‌گذاشتن تحلیل با دیگران، استفاده از فیلتر `OR` (مثلاً Plan = Basic OR Plan = Business) معمولاً شفاف‌تر از `!=` است، چون دقیقاً نشان می‌دهد کدام دسته‌ها در جمع لحاظ شده‌اند.

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `SumIf` |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| String                                                                                                                         | ❌                |
| Number                                                                                                                         | ✅                |
| Timestamp                                                                                                                      | ❌                |
| Boolean                                                                                                                        | ✅                |
| JSON                                                                                                                           | ❌                |

جزئیات بیش‌تر را در بخش [پارامترها](#parameters) ببینید.

## توابع مرتبط

روش‌های مختلف برای رسیدن به همان نتیجه؛ چون هنوز بخش بزرگی از دنیا با CSV کار می‌کند.

**در خود متابیس**

- [`case`](#case)
- [`CumulativeSum`](#cumulativesum)

**در ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### case

می‌توانید [`Sum`](../expressions-list.md#sum) و [`case`](./case.md) را ترکیب کنید:

```text
Sum(case([Plan] = "Basic", [Payment]))
```

که همان کار زیر را انجام می‌دهد:

```text
SumIf([Payment], [Plan] = "Basic")
``>

مزیت نسخهٔ `case` این است که می‌توانید در صورت برقرار نبودن شرط، ستون دیگری را جمع بزنید.  
مثلاً می‌توانید ستونی به نام `Revenue` بسازید که:

- وقتی `Plan = Basic` است، ستون `Payment` را جمع می‌زند، و
- در غیر این صورت، ستون `Contract` را.

```text
sum(case([Plan] = "Basic", [Payment], [Contract]))
```

### CumulativeSum

`SumIf` خودش مجموع تجمعی (Running total) تولید نمی‌کند. برای این کار باید تجمیع [`CumulativeSum`](../expressions-list.md#cumulativesum) را با عبارت [`case`](./case.md) ترکیب کنید.

مثلاً برای به‌دست‌آوردن Running total پرداخت‌های Business و Premium به‌تفکیک ماه (با استفاده از [دادهٔ نمونهٔ پرداخت‌ها](#conditional-subtotals-by-group)):

| Date Received: Month | Total Payments for Business and Premium Plans |
| -------------------- | --------------------------------------------- |
| October              | 200                                           |
| November             | 800                                           |

یک تجمیع از مسیر **Summarize > Custom expression** بسازید:

```text
CumulativeSum(case(([Plan] = "Business" OR [Plan] = "Premium"), [Payment], 0))
```

و **Group by** را روی "Date Received: Month" ست کنید.

### SQL

وقتی سؤالی را با [Query builder](https://www.metabase.com/glossary/query-builder) اجرا می‌کنید، متابیس آن را به SQL تبدیل کرده و روی دیتابیس اجرا می‌کند.

اگر [دادهٔ نمونهٔ پرداخت‌ها](#sumif) را در دیتابیس PostgreSQL ذخیره کرده باشید، کوئری زیر:

```sql
SELECT
    SUM(CASE WHEN plan = 'Basic' THEN payment ELSE 0 END) AS total_payments_basic
FROM invoices
```

معادل عبارت زیر در متابیس است:

```text
SumIf([Payment], [Plan] = "Basic")
```

برای اضافه‌کردن [چند شرط همراه با Group by](#conditional-subtotals-by-group):

```sql
SELECT
    DATE_TRUNC('month', date_received)                       AS date_received_month,
    SUM(CASE WHEN plan = 'Business' OR plan = 'Premium'
             THEN payment ELSE 0 END) AS total_payments_business_or_premium
FROM invoices
GROUP BY
    DATE_TRUNC('month', date_received)
```

بخش `SELECT` این کوئری معادل عبارت زیر در متابیس است:

```text
SumIf([Payment], [Plan] = "Business" OR [Plan] = "Premium")
```

و بخش `GROUP BY` معادل تنظیم ستون [**Group by**](../../query-builder/summarizing-and-grouping.md) روی "Date Received: Month" است.

### Spreadsheets

اگر [دادهٔ نمونهٔ پرداخت‌ها](#sumif) را در Spreadsheet داشته باشید و ستون "Payment" در ستون A و "Plan" در ستون B باشد، فرمول زیر:

```text
=SUMIF(B:B, "Basic", A:A)
```

همان نتیجه‌ای را تولید می‌کند که:

```text
SumIf([Payment], [Plan] = "Basic")
```

برای افزودن شرط‌های بیش‌تر، معمولاً باید سراغ فرمول‌های Array در Spreadsheet بروید.

### Python

اگر [دادهٔ نمونهٔ پرداخت‌ها](#sumif) را در یک DataFrame `pandas` به نام `df` داشته باشید، کد زیر:

```python
df.loc[df['Plan'] == "Basic", 'Payment'].sum()
```

معادل عبارت زیر در متابیس است:

```text
SumIf([Payment], [Plan] = "Basic")
```

برای اضافه‌کردن [چند شرط همراه با Group by](#conditional-subtotals-by-group):

```python
import datetime as dt

# اختیاری: تبدیل ستون به datetime
df['Date Received'] = pd.to_datetime(df['Date Received'])

# استخراج ماه
df['Date Received: Month'] = df['Date Received'].dt.to_period('M')

# اعمال شرط‌ها
df_filtered = df[(df['Plan'] == 'Business') | (df['Plan'] == 'Premium')]

# جمع و Group by
df_filtered.groupby('Date Received: Month')['Payment'].sum()
```

این مراحل همان نتیجه‌ای را تولید می‌کنند که این عبارت متابیس (با **Group by** روی "Date Received: Month"):

```text
SumIf([Payment], [Plan] = "Business" OR [Plan] = "Premium")
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
