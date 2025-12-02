---
title: DatetimeDiff
---

---

# DatetimeDiff

تابع `datetimeDiff` فاصلهٔ زمانی بین دو مقدار تاریخ/زمان را بر اساس واحد زمانی مشخص محاسبه می‌کند.  
توجه کنید که اختلاف بر حسب **واحدهای کامل** محاسبه می‌شود (مثال زیر را ببینید).

| Syntax                                                                                                    | Example                                             |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `datetimeDiff(datetime1, datetime2, unit)`                                                                | `datetimeDiff("2022-02-01", "2022-03-01", "month")` |
| اختلاف دو مقدار datetime (یعنی `datetime2` منهای `datetime1`) را در واحد زمانی مشخص برمی‌گرداند.       | `1`                                                 |

## پارامترها

پارامترهای `datetime1` و `datetime2` می‌توانند یکی از موارد زیر باشند:

- نام یک ستون Timestamp،
- یک عبارت سفارشی که [datetime](#accepted-data-types) برمی‌گرداند، یا
- یک رشته با فرمت `"YYYY-MM-DD"` یا `"YYYY-MM-DDTHH:MM:SS"`.

پارامتر `unit` می‌تواند یکی از مقادیر زیر باشد:

- `"year"`
- `"quarter"`
- `"month"`
- `"week"`
- `"day"`
- `"hour"`
- `"minute"`
- `"second"`

## محاسبهٔ «سن» (Age)

فرض کنید پنیرساز هستید و می‌خواهید فرایند کهنه‌شدن (Aging) پنیرها را دنبال کنید:

| Cheese        | Aging Start      | Aging End        | Mature Age (Months) |
| ------------- | ---------------- | ---------------- | ------------------- |
| Provolone     | January 19, 2022 | March 17, 2022   | 1                   |
| Feta          | January 25, 2022 | May 3, 2022      | 3                   |
| Monterey Jack | January 27, 2022 | October 11, 2022 | 8                   |

ستون **Mature Age (Months)** یک ستون سفارشی است با این عبارت:

```text
datetimeDiff([Aging Start], [Aging End], "month")
```

برای محاسبهٔ «سن فعلی» یک پنیر بر حسب ماه، می‌توانید از [`now`](../expressions/now.md) به‌عنوان پارامتر دوم استفاده کنید:

```text
datetimeDiff([Aging Start], now, "month")
```

برای محاسبهٔ سن فعلی بر حسب روز:

```text
datetimeDiff([Aging Start], now, "day")
```

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `datetimeDiff` |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| String                                                                                                                         | ❌                       |
| Number                                                                                                                         | ❌                       |
| Timestamp                                                                                                                      | ✅                       |
| Boolean                                                                                                                        | ❌                       |
| JSON                                                                                                                           | ❌                       |

در این مستند از «timestamp» و «datetime» برای اشاره به هر نوع دادهٔ زمانی پشتیبانی‌شده در متابیس استفاده می‌کنیم. برای جزئیات بیش‌تر، بخش [مناطق زمانی](../../../configuring-metabase/timezones.md#data-types) را ببینید.

اگر Timestampها در دیتابیس شما به‌صورت رشته یا عدد ذخیره شده‌اند، یک ادمین می‌تواند روی صفحهٔ Table Metadata آن‌ها را به نوع Timestamp [Cast کند](../../../data-modeling/metadata-editing.md#cast-to-a-specific-data-type).

## محدودیت‌ها

در حال حاضر تابع `datetimeDiff` برای دیتابیس زیر در دسترس نیست:

- Druid

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که مانند عبارت `datetimeDiff` متابیس کار می‌کنند، همراه با نکاتی برای انتخاب بهترین گزینه.

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### SQL

وقتی سؤالی را با [Query builder](https://www.metabase.com/glossary/query-builder) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما (فیلترها، Summarize و…) را به کوئری تبدیل کرده و روی دیتابیس اجرا می‌کند.

اگر دادهٔ نمونهٔ [پنیرها](#calculating-age) را در PostgreSQL ذخیره کرده باشید:

```sql
SELECT DATE_PART('month', AGE(aging_end, aging_start)) AS mature_age_months
FROM cheese
```

این کوئری معادل عبارت زیر در متابیس است:

```text
datetimeDiff([Aging Start], [Aging End], "month")
```

بعضی دیتابیس‌ها (مثل Snowflake و BigQuery) توابعی مانند `DATEDIFF` یا `DATE_DIFF` دارند. برای جزئیات بیش‌تر می‌توانید به فهرست [راهنماهای رایج SQL](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#common-sql-reference-guides) مراجعه کنید.

### Spreadsheets

اگر دادهٔ نمونهٔ [پنیرها](#calculating-age) در Spreadsheet باشد و ستون "Aging Start" در ستون B و "Aging End" در ستون C قرار داشته باشند:

```text
DATEDIF(B1, C1, "M")
```

همان نتیجه‌ای را تولید می‌کند که:

```text
datetimeDiff([Aging Start], [Aging End], "month")
```

بله، اسم تابع `DATEDIF` است و فقط یک حرف «F» دارد.

### Python

اگر دادهٔ نمونهٔ [پنیرها](#calculating-age) را در یک DataFrame به نام `df` داشته باشید، می‌توانید تاریخ‌ها را مستقیماً از هم کم کنید و با استفاده از `timedelta64` در `numpy` اختلاف را به ماه تبدیل کنید:

```text
df['Mature Age (Months)'] = (df['Aging End'] - df['Aging Start']) / np.timedelta64(1, 'M')
```

که معادل این عبارت در متابیس است:

```text
datetimeDiff([Aging Start], [Aging End], "month")
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
- [تحلیل سری زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series/start)
