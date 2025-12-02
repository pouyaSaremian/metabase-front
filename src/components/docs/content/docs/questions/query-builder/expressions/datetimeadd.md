---
title: DatetimeAdd
---

---

# DatetimeAdd

تابع `datetimeAdd` یک مقدار تاریخ/زمان می‌گیرد و تعدادی واحد زمانی به آن اضافه می‌کند.  
این تابع برای کار با داده‌های سری زمانی که برای آن‌ها «زمان شروع» و «زمان پایان» دارید (مانند سشن‌ها یا اشتراک‌ها) بسیار مفید است.

| Syntax                                                                              | Example                                 |
| ----------------------------------------------------------------------------------- | --------------------------------------- |
| `datetimeAdd(column, amount, unit)`                                                 | `datetimeAdd("2021-03-25", 1, "month")` |
| یک مقدار تاریخ/زمان را گرفته و تعداد مشخصی واحد زمانی را به آن اضافه می‌کند.       | `2021-04-25`                            |

## پارامترها

پارامتر `column` می‌تواند یکی از موارد زیر باشد:

- نام یک ستون Timestamp،
- یک عبارت سفارشی که [datetime](#accepted-data-types) برمی‌گرداند، یا
- یک رشته با فرمت `"YYYY-MM-DD"` یا `"YYYY-MM-DDTHH:MM:SS"`.

پارامتر `unit` می‌تواند یکی از این مقدارها باشد:

- `"year"`
- `"quarter"`
- `"month"`
- `"day"`
- `"hour"`
- `"minute"`
- `"second"`
- `"millisecond"`

پارامتر `amount`:

- باید عدد صحیح باشد؛ مقادیر کسری (مثل ۰٫۵ سال) پشتیبانی نمی‌شوند.
- می‌تواند منفی باشد؛ برای مثال `datetimeAdd("2021-03-25", -1, "month")` تاریخ `2021-02-25` را برمی‌گرداند.

## محاسبهٔ زمان پایان

فرض کنید عاشق قهوه هستید و می‌خواهید تازگی (Freshness) دانه‌های قهوه را دنبال کنید:

| Coffee                 | Opened On         | Finish By         |
| ---------------------- | ----------------- | ----------------- |
| DAK Honey Dude         | October 31, 2022  | November 14, 2022 |
| NO6 Full City Espresso | November 7, 2022  | November 21, 2022 |
| Ghost Roaster Giakanja | November 27, 2022 | December 11, 2022 |

در این جدول، ستون **Finish By** یک ستون سفارشی است با این عبارت:

```text
datetimeAdd([Opened On], 14, "day")
```

## بررسی این‌که تاریخ فعلی داخل یک بازه هست یا نه

فرض کنید می‌خواهید بررسی کنید «امروز» بین یک زمان شروع و [زمان پایان](#calculating-an-end-date) قرار دارد یا نه.  
در این مثال، فرض کنیم امروز ۱ دسامبر ۲۰۲۲ است.

| Coffee                 | Opened On         | Finish By         | Still Fresh Today |
| ---------------------- | ----------------- | ----------------- | ----------------- |
| DAK Honey Dude         | October 31, 2022  | November 14, 2022 | No                |
| NO6 Full City Espresso | November 7, 2022  | November 21, 2022 | No                |
| Ghost Roaster Giakanja | November 27, 2022 | December 11, 2022 | Yes               |

- ستون **Finish By** همان عبارتی را دارد که بالا دیدیم:

```text
datetimeAdd([Opened On], 14, "day")
```

- ستون **Still Fresh Today** با استفاده از تابع [`case`](../expressions/case.md) بررسی می‌کند که آیا تاریخ فعلی ([`now`](../expressions/now.md)) [بین](../expressions-list.md#between) مقدارهای **Opened On** و **Finish By** قرار دارد یا نه:

```text
case(between(now, [Opened On], [Finish By]), "Yes", "No")
```

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `datetimeAdd` |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| String                                                                                                                         | ❌                      |
| Number                                                                                                                         | ❌                      |
| Timestamp                                                                                                                      | ✅                      |
| Boolean                                                                                                                        | ❌                      |
| JSON                                                                                                                           | ❌                      |

در این مستند، از «timestamp» و «datetime» برای اشاره به هر نوع دادهٔ زمانی پشتیبانی‌شده در متابیس استفاده می‌کنیم. برای جزئیات بیش‌تر، بخش [مناطق زمانی](../../../configuring-metabase/timezones.md#data-types) را ببینید.

اگر Timestampها در دیتابیس شما به‌صورت رشته یا عدد ذخیره شده‌اند، یک ادمین می‌تواند روی صفحهٔ Table Metadata آن‌ها را به نوع Timestamp [Cast کند](../../../data-modeling/metadata-editing.md#cast-to-a-specific-data-type).

## محدودیت‌ها

اگر از MongoDB استفاده می‌کنید، `datetimeAdd` فقط روی نسخه‌های ۵ به بعد کار می‌کند.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که مانند عبارت `datetimeAdd` متابیس کار می‌کنند، همراه با نکاتی برای انتخاب بهترین گزینه.

**[عبارت‌های متابیس](../expressions-list.md)**

- [`datetimeSubtract`](#datetimesubtract)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### datetimeSubtract

دو تابع `datetimeSubtract` و `datetimeAdd` از نظر توانایی معادل هستند، چون می‌توانید برای `amount` مقدار منفی بدهید.  
به‌طور کلی بهتر است از «دوبار منفی» (مثل کم‌کردن یک عدد منفی) پرهیز کنید.

```text
datetimeSubtract([Opened On], -14, "day")
```

از نظر نتیجه معادل است با:

```text
datetimeAdd([Opened On], 14, "day")
```

### SQL

وقتی سؤالی را با [Query builder](https://www.metabase.com/glossary/query-builder) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما را به کوئری ترجمه کرده و روی دیتابیس اجرا می‌کند.

اگر دادهٔ نمونهٔ [قهوه](#calculating-an-end-date) را در یک دیتابیس PostgreSQL ذخیره کرده باشید:

```sql
SELECT opened_on + INTERVAL '14 days' AS finish_by
FROM coffee
```

این کوئری معادل عبارت زیر در متابیس است:

```text
datetimeAdd([Opened On], 14, "day")
```

### Spreadsheets

اگر دادهٔ نمونهٔ [قهوه](#calculating-an-end-date) در Spreadsheet باشد و ستون "Opened On" در ستون A با فرمت تاریخ ذخیره شده باشد، فرمول زیر:

```text
A:A + 14
```

همان نتیجه‌ای را می‌دهد که:

```text
datetimeAdd([Opened On], 14, "day")
```

در اکثر ابزارهای Spreadsheet برای واحدهای زمانی مختلف (روز، ماه، سال و…) باید از توابع متفاوتی استفاده کنید؛ `datetimeAdd` همهٔ آن‌ها را پشت یک سینتکس واحد پنهان می‌کند.

### Python

اگر دادهٔ نمونهٔ [قهوه](#calculating-an-end-date) را در یک DataFrame `pandas` به نام `df` ذخیره کرده باشید، می‌توانید با ماژول `datetime` و تابع `timedelta` این‌طور عمل کنید:

```text
df['Finish By'] = df['Opened On'] + datetime.timedelta(days=14)
```

که معادل این عبارت در متابیس است:

```text
datetimeAdd([Opened On], 14, "day")
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
- [تحلیل سری زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series/start)
