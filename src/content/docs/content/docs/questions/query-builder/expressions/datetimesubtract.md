---
title: DatetimeSubtract
---

---

# DatetimeSubtract

تابع `datetimeSubtract` یک مقدار تاریخ/زمان (Datetime) را می‌گیرد و یک واحد زمانی مشخص را از آن کم می‌کند.  
این تابع هنگام کار با داده‌های سری زمانی که برای آن‌ها «زمان شروع» و «زمان پایان» دارید (مثل سشن‌ها یا اشتراک‌ها) بسیار مفید است.

| Syntax                                                                                     | Example                                      |
| ------------------------------------------------------------------------------------------ | -------------------------------------------- |
| `datetimeSubtract(column, amount, unit)`                                                   | `datetimeSubtract("2021-03-25", 1, "month")` |
| یک مقدار تاریخ/زمان را گرفته و تعداد مشخصی واحد زمانی را از آن کم می‌کند.                 | `2021-02-25`                                 |

## پارامترها

پارامتر `column` می‌تواند یکی از موارد زیر باشد:

- نام یک ستون Timestamp،
- یک عبارت سفارشی که [datetime](#accepted-data-types) برمی‌گرداند، یا
- یک رشته با فرمت `"YYYY-MM-DD"` یا `"YYYY-MM-DDTHH:MM:SS"` (مثل مثال بالا).

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

- باید یک عدد صحیح (Integer) باشد؛ مقادیر کسری (مثل ۰٫۵ سال) پشتیبانی نمی‌شوند.
- می‌تواند منفی باشد؛ برای مثال `datetimeSubtract("2021-03-25", -1, "month")` تاریخ `2021-04-25` را برمی‌گرداند.

## محاسبهٔ زمان شروع

فرض کنید برای یک شب تفریحی برنامه‌ریزی می‌کنید. می‌دانید رفت‌وآمد بین مکان‌ها ۳۰ دقیقه طول می‌کشد و می‌خواهید بدانید برای رسیدن به هر رزرو، باید چه ساعتی راه بیفتید:

| Event   | Arrive By                  | Depart At                  |
| ------- | -------------------------- | -------------------------- |
| Drinks  | November 12, 2022 6:30 PM  | November 12, 2022 6:00 PM  |
| Dinner  | November 12, 2022 8:00 PM  | November 12, 2022 7:30 PM  |
| Dancing | November 13, 2022 12:00 AM | November 12, 2022 11:30 PM |

در این‌جا ستون **Depart At** یک ستون سفارشی است با این عبارت:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

## بررسی این‌که «الان» داخل یک بازه هست یا نه

حالا فرض کنید می‌خواهید بررسی کنید تاریخ/زمان فعلی بین [زمان شروع](#calculating-a-start-date) و زمان پایان قرار دارد یا نه. فرض کنیم «الان» برابر است با ۱۲ نوامبر، ساعت ۷:۴۵ بعد از ظهر.

| Event   | Arrive By                  | Depart At                  | On My Way |
| ------- | -------------------------- | -------------------------- | --------- |
| Drinks  | November 12, 2022 6:30 PM  | November 12, 2022 6:00 PM  | No        |
| Dinner  | November 12, 2022 8:00 PM  | November 12, 2022 7:30 PM  | Yes       |
| Dancing | November 13, 2022 12:00 AM | November 12, 2022 11:30 PM | No        |

- ستون **Depart At** همان‌طور که گفتیم با عبارت زیر محاسبه می‌شود:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

- ستون **On My Way** با استفاده از تابع [`case`](../expressions/case.md) بررسی می‌کند که آیا زمان فعلی ([`now`](../expressions/now.md)) [بین](../expressions-list.md#between) ستون‌های **Depart At** و **Arrive By** قرار دارد یا نه:

```text
case(between(now, [Depart At], [Arrive By]), "Yes", "No")
```

## انواع دادهٔ قابل قبول

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `datetimeSubtract` |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| String                                                                                                                         | ❌                           |
| Number                                                                                                                         | ❌                           |
| Timestamp                                                                                                                      | ✅                           |
| Boolean                                                                                                                        | ❌                           |
| JSON                                                                                                                           | ❌                           |

در این مستند هرجا از «timestamp» یا «datetime» صحبت می‌کنیم، منظور هر نوع دادهٔ زمانی‌ای است که متابیس پشتیبانی می‌کند. برای جزئیات بیش‌تر، بخش [مناطق زمانی](../../../configuring-metabase/timezones.md#data-types) را ببینید.

اگر Timestampها در دیتابیس شما به‌صورت رشته یا عدد ذخیره شده‌اند، یک ادمین می‌تواند در صفحهٔ Table Metadata آن‌ها را به نوع Timestamp [Cast کند](../../../data-modeling/metadata-editing.md#cast-to-a-specific-data-type).

## محدودیت‌ها

اگر از MongoDB استفاده می‌کنید، `datetimeSubtract` فقط روی نسخه‌های ۵ به بعد کار می‌کند.

## توابع مرتبط

در این بخش توابع و فرمول‌هایی را می‌بینید که مانند `datetimeSubtract` عمل می‌کنند، همراه با نکاتی برای انتخاب بهترین گزینه.

**[عبارت‌های متابیس](../expressions-list.md)**

- [`datetimeAdd`](#datetimeadd)

**ابزارهای دیگر**

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### datetimeAdd

دو تابع `datetimeSubtract` و `datetimeAdd` از نظر توانایی، معادل هستند؛ چون می‌توانید برای `amount` مقدار منفی بدهید.  
در مثال [رویدادها](#calculating-a-start-date) می‌توانستیم از هر دو استفاده کنیم، اما بهتر است تا حد امکان از «منفیِ منفی» (مثل کم‌کردن یک عدد منفی) اجتناب کنید.

```text
datetimeAdd([Arrive By], -30, "minute")
```

در عمل همان کار زیر را انجام می‌دهد:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

### SQL

وقتی سؤالی را با [Query builder](https://www.metabase.com/glossary/query-builder) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما (فیلترها، Summarize و…) را به کوئری ترجمه می‌کند و آن را روی دیتابیس اجرا می‌کند.

اگر دادهٔ نمونهٔ [رویدادها](#calculating-a-start-date) را در دیتابیس PostgreSQL ذخیره کرده باشید:

```sql
SELECT arrive_by - INTERVAL '30 minutes' AS depart_at
FROM events
```

از نظر منطقی معادل عبارت زیر در متابیس است:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

### Spreadsheets

اگر دادهٔ نمونهٔ [رویدادها](#calculating-a-start-date) را در Spreadsheet داشته باشید و ستون "Arrive By" در ستون A با فرمت datetime باشد، فرمول زیر:

```text
A:A - 30/(60*24)
```

همان نتیجه‌ای را تولید می‌کند که:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

در اغلب Spreadsheetها برای واحدهای مختلف زمان (روز، ماه، سال و …) باید از فرمول‌های متفاوتی استفاده کنید. `datetimeSubtract` این تفاوت‌ها را پشت یک API یک‌دست پنهان می‌کند.

### Python

اگر دادهٔ نمونهٔ [رویدادها](#calculating-a-start-date) را در یک DataFrame از `pandas` با نام `df` ذخیره کرده باشید، می‌توانید از ماژول `datetime` و تابع `timedelta` استفاده کنید:

```text
df['Depart At'] = df['Arrive By'] - datetime.timedelta(minutes=30)
```

این عبارت معادل است با:

```text
datetimeSubtract([Arrive By], 30, "minute")
```

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
- [تحلیل سری زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series/start)
