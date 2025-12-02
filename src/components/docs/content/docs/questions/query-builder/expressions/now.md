---
title: Now
---

---

# Now

تابع `now` تاریخ و زمان فعلی را بر اساس [Report timezone متابیس](../../../configuring-metabase/localization.md#report-timezone) برمی‌گرداند.

## ساخت منطق شرطی بر اساس تاریخ یا زمان فعلی

فرض کنید جدولی از وظایف (Tasks) دارید و می‌خواهید برای هر وظیفه، ستونی برای وضعیت (Status) تعریف کنید. در این مثال فرض می‌کنیم «الان» برابر است با ۲۲ نوامبر ۲۰۲۲، ساعت ۱۲:۰۰:۰۰.

| Task   | Start                       | Deadline                    | Status          |
| ------ | --------------------------- | --------------------------- | --------------- |
| Draft  | November 1, 2022, 12:00:00  | November 30, 2022, 12:00:00 | In progress     |
| Review | November 15, 2022, 12:00:00 | November 19, 2022, 12:00:00 | Needs extension |
| Edit   | November 22, 2022, 12:00:00 | November 22, 2022, 12:00:00 | DUE RIGHT NOW!  |

برای مشخص‌کردن این‌که یک تسک «در حال انجام» است، می‌توانید از عبارت زیر استفاده کنید:

```
now() >= [Start] AND now() < [Deadline]
```

برای بررسی این‌که آیا نیاز به تمدید Deadline دارید:

```
now() >= [Start] AND now() >= [Deadline]
```

و اگر می‌خواهید تسک‌هایی را که دقیقاً همین لحظه سررسیده‌اند علامت بزنید:

```
now() = [Deadline]
```

برای ساختن ستون **Status** که هر سه حالت بالا را پوشش دهد، همهٔ این شرط‌ها را در یک عبارت `case` می‌پیچیم:

```
case(now() >= [Start] AND now() < [Deadline], "In progress",
     now() >= [Start] AND now() >= [Deadline], "Needs extension",
     now() = [Deadline], "DUE RIGHT NOW!")
```

## انواع داده (Data types)

| [نوع داده](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview#examples-of-data-types) | مقدار برگردانده‌شده توسط `now()` |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| String                                                                                                                         | ❌                                |
| Number                                                                                                                         | ❌                                |
| Timestamp                                                                                                                      | ✅                                |
| Boolean                                                                                                                        | ❌                                |
| JSON                                                                                                                           | ❌                                |

اگر دیتابیس شما از منطقهٔ زمانی پشتیبانی کند، `now` مقداری از نوع `timestamp with time zone` برمی‌گرداند، در غیر این صورت مقدار از نوع `timestamp without time zone` خواهد بود.

برای جزئیات بیش‌تر دربارهٔ رفتار این انواع داده در متابیس، بخش [مناطق زمانی](../../../configuring-metabase/timezones.md#data-types) را ببینید.

## محدودیت‌ها

ممکن است `now` در «زمان محلی شما» واقعاً معادل «الان» نباشد، اگر در منطقهٔ زمانی متفاوتی نسبت به Report timezone متابیس زندگی می‌کنید.

اگر لازم است `now` را با ستونی در منطقهٔ زمانی دیگر مقایسه کنید، از تابع [convertTimezone](./converttimezone.md) استفاده کنید تا هر دو سمت مقایسه را به یک منطقهٔ زمانی منتقل کنید. برای مثال:

```
convertTimezone(now, 'UTC', <report timezone>) >= convertTimezone([Deadline], 'UTC', <source time zone>)
```

## توابع مرتبط

در ابزارهای دیگر هم توابعی برای گرفتن «الان» وجود دارد؛ انتخاب بین آن‌ها به کانتکست شما (SQL، Spreadsheet، Python و غیره) بستگی دارد.

- [SQL](#sql)
- [Spreadsheets](#spreadsheets)
- [Python](#python)

### SQL

وقتی یک سؤال را با [Query builder](https://www.metabase.com/glossary/query-builder) اجرا می‌کنید، متابیس تنظیمات گرافیکی شما (فیلترها، Summarize و غیره) را به SQL ترجمه می‌کند و آن را روی دیتابیس اجرا می‌کند.

به‌صورت پیش‌فرض، `now` از [Report timezone متابیس](../../../configuring-metabase/localization.md#report-timezone) استفاده می‌کند. اگر ادمین شما Report timezone را تنظیم نکرده باشد، `now` از منطقهٔ زمانی دیتابیس استفاده می‌کند.

مثلاً اگر دیتابیس شما Postgres باشد و Report timezone روی EST تنظیم شده باشد، معادل SQL زیر را خواهید داشت:

```sql
SELECT CURRENT_TIMESTAMP AT TIME ZONE 'EST'
```

اگر Report timezone نداشته باشید، `now` در منطقهٔ زمانی دیتابیس Postgres (معمولاً UTC) محاسبه می‌شود؛ مثل:

```sql
SELECT CURRENT_TIME
```

### Spreadsheets

در اکثر Spreadsheetها، تابع `NOW()` تاریخ و زمان فعلی را بر اساس منطقهٔ زمانی سیستم‌عامل شما (زمان روی کامپیوتر یا موبایل) برمی‌گرداند.

### Python

در Python (با استفاده از ماژول `pandas`) می‌توانید از `pd.Timestamp.now()` استفاده کنید. این تابع یک شیء `Timestamp` برمی‌گرداند که شامل تاریخ و زمان فعلی در منطقهٔ زمانی سیستم شماست.

## مطالعهٔ بیشتر

- [مستندات Custom expressions](../expressions.md)
- [آموزش Custom expressions](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions)
- [تحلیل سری زمانی](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series/start)
