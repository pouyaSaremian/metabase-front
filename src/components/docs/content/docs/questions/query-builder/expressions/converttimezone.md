---
title: ConvertTimezone
---

# ConvertTimezone

تابع `convertTimezone` یک timestamp را با در نظر گرفتن اختلاف منطقهٔ زمانی (Time zone) به منطقهٔ زمانی مقصد منتقل می‌کند؛ یعنی با اضافه یا کم کردن بازهٔ زمانی مناسب، مقدار جدید را برمی‌گرداند.

| Syntax                                                                | Example                                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `convertTimezone(column, target, source)`                             | `convertTimezone("2022-12-28T12:00:00", "Canada/Pacific", "Canada/Eastern")`      |
| شِفت دادن timestamp از منطقهٔ مبدأ به منطقهٔ مقصد                     | مقدار `2022-12-28T09:00:00`، نمایش به‌صورت `December 28, 2022 9:00 AM`           |

کار با timestamp و منطقهٔ زمانی معمولاً پر از ریزه‌کاری و خطا است، و اشکال‌ها هم سخت کشف می‌شوند. به همین خاطر بهتر است فقط وقتی از `convertTimezone` استفاده کنید که تفسیر داده‌های شما به مرزهای زمانی (Time-based cutoffs) حساس است.

مثلاً اگر فقط در حال شمارش لاگین‌های کاربران در طول زمان هستید، شاید اهمیت نداشته باشد که بعضی لاگین‌ها به‌جای دوشنبه، سه‌شنبه حساب شوند. اما اگر متابیس را برای کارهای دقیقی مثل محاسبهٔ مالیات استفاده می‌کنید، شما (و سازمان‌های قانونی) احتمالاً به تفاوت بین تراکنش‌های ۳۱ دسامبر و ۱ ژانویه خیلی حساس هستید.

## منطقه‌های زمانی پشتیبانی‌شده

متابیس از [tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) پشتیبانی می‌کند.

## پارامترها

`column` می‌تواند یکی از موارد زیر باشد:

- نام یک ستون timestamp،
- یک عبارت سفارشی که یک [timestamp](#انواع-دادهٔ-پذیرفته‌شده-accepted-data-types) برمی‌گرداند،
- یا یک رشته (String) با فرمت `"YYYY-MM-DD"` یا `"YYYY-MM-DDTHH:MM:SS"`.

`target`:

- نام منطقهٔ زمانی مقصد که می‌خواهید timestamp به آن تبدیل شود.

`source`:

- نام منطقهٔ زمانی فعلی ستون شما.
- برای ستون‌ها یا عبارت‌هایی با نوع دادهٔ `timestamp بدون time zone` الزامی است.
- برای ستون‌ها یا عبارت‌هایی با نوع دادهٔ `timestamp با time zone` اختیاری است.
- برای اطلاعات بیشتر، بخش [انواع دادهٔ پذیرفته‌شده](#انواع-دادهٔ-پذیرفته‌شده-accepted-data-types) را ببینید.

ما از نام‌های منطقهٔ زمانی در [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) پشتیبانی می‌کنیم (مثل `"Canada/Eastern"` به‌جای `"EST"`).

## ساخت تاریخ‌های گزارشی سفارشی

فرض کنید داده‌های سری زمانی دارید که در یک یا چند منطقهٔ زمانی ذخیره شده‌اند (**Source Time**)، و می‌خواهید تاریخ‌های گزارشی سفارشی برای تیمی که در EST کار می‌کند بسازید.

| Source Time                 | Team Report Time (EST)      |
| --------------------------- | --------------------------- |
| December 28, 2022, 10:00:00 | December 28, 2022, 07:00:00 |
| December 28, 2022, 21:00:00 | December 28, 2022, 19:00:00 |
| December 27, 2022, 08:00:00 | December 27, 2022, 05:00:00 |

اگر ستون **Source Time** به‌صورت `timestamp with time zone` یا `timestamp with offset` ذخیره شده باشد، فقط کافی است پارامتر `target` را مشخص کنید:

```text
convertTimezone([Source Time], "Canada/Eastern")
```

اگر **Source Time** به‌صورت `timestamp بدون time zone` ذخیره شده باشد، **حتماً** باید منطقهٔ زمانی مبدأ (`source`) را هم مشخص کنید (که معمولاً همان time zone دیتابیس شما است):

```text
convertTimezone([Source Time], "Canada/Eastern", "UTC")
```

بهتر است ستون‌هایی را که نتیجهٔ `convertTimezone` هستند با نام منطقهٔ زمانی مقصد (مثلاً `*_EST`) برچسب بزنید، یا منطقهٔ زمانی مقصد را در متادیتای مدل ثبت کنید. این کار وقتی کسی اختلاف بین اعداد را زیر سؤال می‌برد، خیلی کمکتان می‌کند.

اگر نتیجه‌ای که می‌گیرید مطابق انتظار نیست:

- بررسی کنید که [منطقهٔ زمانی مبدأ](#انتخاب-منطقهٔ-زمانی-مبدأ-choosing-a-source-time-zone) را درست انتخاب کرده‌اید یا نه.
- از ادمین دیتابیس بپرسید ستون شما `timestamp with time zone` است یا `timestamp without time zone` (بخش [انواع دادهٔ پذیرفته‌شده](#انواع-دادهٔ-پذیرفته‌شده-accepted-data-types) را ببینید).

### انتخاب منطقهٔ زمانی مبدأ (Choosing a source time zone)

موقع انجام تبدیل منطقهٔ زمانی، باید بدانید دادهٔ خام شما در چه منطقهٔ زمانی ثبت شده است. حتی در یک جدول، سؤال یا مدل، ممکن است ستون‌ها (یا ردیف‌های) مختلف، «منطقهٔ زمانی مبدأ» متفاوتی داشته باشند.

| Possible source time zone | توضیح                                                                      | مثال                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Client time zone          | منطقهٔ زمانی‌ای که رویداد در آن اتفاق افتاده است.                          | یک سرویس وب‌آنالیتیکس ممکن است زمان را در منطقهٔ زمانی محلی هر کاربر سایت ذخیره کند.                        |
| Database time zone        | متادیتای منطقهٔ زمانی که روی timestampهای دیتابیس اضافه شده است.           | رویهٔ رایج این است که همهٔ timestampها در UTC ذخیره شوند.                                                   |
| No time zone              | بدون متادیتای منطقهٔ زمانی                                                | دیتابیس‌ها شما را مجبور نمی‌کنند timestamp را حتماً با اطلاعات time zone ذخیره کنید.                         |
| Metabase report time zone | منطقهٔ زمانی‌ای که متابیس برای **نمایش** تاریخ‌ها و زمان‌ها استفاده می‌کند. | مثلاً متابیس می‌تواند زمان‌ها را در PST نمایش دهد، حتی اگر در دیتابیس به‌صورت UTC ذخیره شده باشند.        |

برای مثال، فرض کنید جدولی دارید که در هر ردیف یک بازدیدکنندهٔ وب‌سایت را نگه می‌دارد. فقط با دیدن مقدار `December 28, 2022, 12:00 PM` معلوم نیست که این timestamp خام:

- در time zone دیتابیس (معمولاً UTC) ذخیره شده،
- بدون اطلاعات time zone ذخیره شده (مثلاً اگر کاربر در HKT باشد، همان مقدار ممکن است «ضمنی» به‌معنای زمان هنگ‌کنگ باشد)،
- یا در گزارش متابیس طبق report time zone نمایش داده می‌شود.

برای جزئیات بیشتر، بخش [محدودیت‌ها](#محدودیت‌ها-limitations) را ببینید.

## انواع دادهٔ پذیرفته‌شده (Accepted data types)

| [Data type](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | سازگار با `convertTimezone` |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| String                                                                                                                         | ❌                           |
| Number                                                                                                                         | ❌                           |
| Timestamp                                                                                                                      | ✅                           |
| Boolean                                                                                                                        | ❌                           |
| JSON                                                                                                                           | ❌                           |

در این سند از واژه‌های "timestamp" و "datetime" برای اشاره به هر نوع دادهٔ زمانی‌ای که متابیس پشتیبانی می‌کند استفاده می‌کنیم.

اگر timestampها در دیتابیس شما به‌صورت String یا عدد ذخیره شده‌اند، ادمین می‌تواند آن‌ها را از صفحهٔ Table Metadata به [نوع timestamp Cast کند](../../../data-modeling/metadata-editing.md#cast-to-a-specific-data-type).

برای این‌که از `convertTimezone` بدون خطا و اشتباهات ظریف استفاده کنید، باید بدانید چند نوع اصلی timestamp وجود دارد:

| Data type                     | توضیح                                     | مثال                                              |
| ----------------------------- | ----------------------------------------- | ------------------------------------------------- |
| `timestamp with time zone`    | از موقعیت جغرافیایی/منطقهٔ زمانی خبر دارد | `2022-12-28T12:00:00 AT TIME ZONE 'America/Toronto'` |
| `timestamp with offset`       | از اختلاف زمانی نسبت به UTC آگاه است      | `2022-12-28T12:00:00-04:00`                       |
| `timestamp without time zone` | بدون اطلاعات time zone                    | `2022-12-28T12:00:00`                             |

بخش اول timestamp معمولاً در UTC است؛ منطقهٔ زمانی یا offset مشخص می‌کند چقدر باید جمع یا کم کنید تا زمان محلی به‌دست بیاید.

`convertTimezone` با هر سه نوع timestamp کار می‌کند، اما خروجی آن **همیشه** یک `timestamp بدون time zone` خواهد بود.

## محدودیت‌ها (Limitations)

تابع `convertTimezone` در حال حاضر برای دیتابیس‌های زیر در دسترس نیست:

- Amazon Athena
- Databricks
- Druid
- MongoDB
- Presto
- SparkSQL
- SQLite
- Metabase Sample Database

### نکاتی دربارهٔ منطقهٔ زمانی مبدأ

متابیس timestampهایی را که بدون time zone یا offset هستند، بدون تنظیم خاصی نمایش می‌دهد؛ به‌همین خاطر هنگام استفاده از `convertTimezone` باید روی [انتخاب منطقهٔ زمانی مبدأ](#انتخاب-منطقهٔ-زمانی-مبدأ-choosing-a-source-time-zone) دقت زیادی داشته باشید.

Metabase report time zone فقط روی داده‌هایی با نوع `timestamp with time zone` یا `timestamp with offset` اثر می‌گذارد. برای مثال:

| Raw timestamp در دیتابیس شما                   | نوع داده                     | Report time zone | نمایش در متابیس          |
| --------------------------------------------- | ---------------------------- | ---------------- | ------------------------- |
| `2022-12-28T12:00:00 AT TIME ZONE 'CST'`      | `timestamp with time zone`   | 'Canada/Eastern' | Dec 28, 2022, 1:00 PM     |
| `2022-12-28T12:00:00-06:00`                   | `timestamp with offset`      | 'Canada/Eastern' | Dec 28, 2022, 1:00 PM     |
| `2022-12-28T12:00:00`                         | `timestamp without time zone`| 'Canada/Eastern' | Dec 28, 2022, 12:00 PM    |

Metabase report time zone روی خروجی `convertTimezone` اعمال نمی‌شود. برای مثال:

```text
convertTimezone("2022-12-28T12:00:00 AT TIME ZONE 'Canada/Central'", "Canada/Pacific", "Canada/Central")
```

یک `timestamp بدون time zone` برمی‌گرداند:

```text
2022-12-28T04:00:00
```

که در متابیس به‌صورت:

```text
Dec 28, 2022, 4:00 AM
```

نمایش داده می‌شود.

اگر روی یک `timestamp بدون time zone` از `convertTimezone` استفاده می‌کنید، حتماً `source` را `'UTC'` قرار دهید؛ در غیر این صورت timestamp شما به اندازهٔ اشتباهی شِفت داده می‌شود. مثلاً اگر timestamp ما در واقع «ضمنی» در CST باشد، ولی بدون time zone ذخیره شده باشد، باید برای به‌دست آوردن نتیجه правиль، `'UTC'` را به‌عنوان مبدأ استفاده کنیم، نه `'CST'`.

اگر اشتباهاً `'CST'` را برای `source` یک `timestamp بدون time zone` بگذاریم:

```text
convertTimezone("2022-12-28T12:00:00", "Canada/Pacific", "Canada/Central")
```

نتیجهٔ خام:

```text
2022-12-28T10:00:00
```

خواهد بود که در متابیس به‌صورت:

```text
Dec 28, 2022, 10:00 AM
```

نمایش داده می‌شود؛ یعنی ۶ ساعت اختلاف ناخواسته.

## توابع مرتبط (Related functions)

در این بخش توابع و فرمول‌هایی را می‌بینید که معادل `convertTimezone` در متابیس عمل می‌کنند و بسته به ابزار می‌توانید از آن‌ها استفاده کنید:

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### SQL

وقتی با [Query builder](https://www.metabase.com/glossary/query-builder) یک سؤال می‌سازید، متابیس تنظیمات گرافیکی (فیلترها، خلاصه‌سازی و غیره) را به یک کوئری تبدیل و آن را روی دیتابیس اجرا می‌کند.

اگر داده‌های نمونهٔ [بخش بالا](#ساخت-تاریخ‌های-گزارشی-سفارشی-creating-custom-report-dates) به‌صورت `timestamp بدون time zone` در PostgreSQL ذخیره شده باشد:

```sql
SELECT source_time::TIMESTAMP AT TIME ZONE 'UTC' AT TIME ZONE 'America/Toronto' AS team_report_time_est
```

معادل این عبارت در متابیس است:

```text
convertTimezone([Source Time], "Canada/Eastern", "UTC")
```

اگر `source_time` از نوع `timestamp with time zone` یا `timestamp with offset` باشد (مثلاً در Snowflake)، دیگر لازم نیست در SQL یا متابیس، `source` را مشخص کنید:

```sql
SELECT convert_timezone('America/Toronto', source_time) AS team_report_time_est
```

معادل:

```text
convertTimezone([Source Time], "Canada/Eastern")
```

است. توجه کنید که نام منطقه‌های زمانی به دیتابیس شما بستگی دارد (مثلاً Snowflake بسیاری از مخفف‌های time zone مثل EST را قبول نمی‌کند).

### Spreadsheets

اگر داده‌های نمونهٔ [بخش گزارش سفارشی](#ساخت-تاریخ‌های-گزارشی-سفارشی-creating-custom-report-dates) در یک Spreadsheet باشد و «Source Time» در ستون A قرار داشته باشد، می‌توانید با کم‌کردن صریحِ اختلاف ساعت، آن را به EST تبدیل کنید:

```text
A1 - TIME(5, 0, 0)
```

که معادل:

```text
convertTimezone([Source Time], "Canada/Eastern")
```

در متابیس است.

### Python

اگر داده‌های نمونهٔ [بخش بالا](#ساخت-تاریخ‌های-گزارشی-سفارشی-creating-custom-report-dates) در یک DataFrame پانداس ذخیره شده باشد، می‌توانید ابتدا ستون **Source Time** را به timestamp همراه با time zone تبدیل کنید، و بعد آن را به EST ببرید:

```python
df["Source Time (UTC)"] = pd.to_datetime(df["Source Time"], utc=True)
df["Team Report Time (EST)"] = df["Source Time (UTC)"].dt.tz_convert(tz="Canada/Eastern")
```

این منطق معادل یک `convertTimezone` تو در تو است:

```text
convertTimezone(convertTimezone([Source Time], "UTC"), "Canada/Eastern", "UTC")
```

## مطالعهٔ بیشتر

- [مستندات تعبیرهای سفارشی (Custom expressions)](../expressions.md)
- [آموزش تعبیرهای سفارشی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
- [تحلیل سری‌های زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series/start)


