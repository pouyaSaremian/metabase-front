---
title: "فیلتر کردن تاریخ با SQL"
description: "یادگیری فیلتر کردن تاریخ با SQL: نحوه فیلتر کردن داده‌هایتان بر اساس تاریخ، از تطابق‌های ساده تا الگوهای پیچیده مانند روزهای کاری و دوره‌های نسبی."
redirect_from:
  - /learn/sql/filtering/by-date
toc:
  - id: "sql-filtering-by-date"
    title: "فیلتر کردن تاریخ با SQL"
    level: 1
    href: "#sql-filtering-by-date"
  - id: "what-we-ll-cover"
    title: "آنچه پوشش می‌دهیم"
    level: 2
    href: "#what-we-ll-cover"
  - id: "difference-between-dates-and-timestamps-and-dates-stored-as-strings"
    title: "تفاوت بین تاریخ‌ها و timestampها و تاریخ‌های ذخیره شده به صورت رشته"
    level: 2
    href: "#difference-between-dates-and-timestamps-and-dates-stored-as-strings"
  - id: "convert-a-timestamp-to-a-date"
    title: "تبدیل timestamp به تاریخ"
    level: 3
    href: "#convert-a-timestamp-to-a-date"
  - id: "sql-to-filter-rows-by-a-single-date"
    title: "SQL برای فیلتر کردن ردیف‌ها با یک تاریخ"
    level: 2
    href: "#sql-to-filter-rows-by-a-single-date"
  - id: "sql-to-filter-before-or-after-a-date"
    title: "SQL برای فیلتر کردن قبل یا بعد از یک تاریخ"
    level: 2
    href: "#sql-to-filter-before-or-after-a-date"
  - id: "sql-to-filter-date-ranges-with-between"
    title: "SQL برای فیلتر کردن محدوده تاریخ با BETWEEN"
    level: 2
    href: "#sql-to-filter-date-ranges-with-between"
  - id: "sql-to-filter-by-part-of-a-date-by-week-or-month-and-so-on"
    title: "SQL برای فیلتر کردن بر اساس بخشی از تاریخ (هفته یا ماه و غیره)"
    level: 2
    href: "#sql-to-filter-by-part-of-a-date-by-week-or-month-and-so-on"
  - id: "sql-to-filter-by-relative-dates"
    title: "SQL برای فیلتر کردن بر اساس تاریخ‌های نسبی"
    level: 2
    href: "#sql-to-filter-by-relative-dates"
  - id: "sql-to-filter-by-day-of-week"
    title: "SQL برای فیلتر کردن بر اساس روز هفته"
    level: 2
    href: "#sql-to-filter-by-day-of-week"
  - id: "sql-to-filter-by-range-of-hours"
    title: "SQL برای فیلتر کردن بر اساس محدوده ساعات"
    level: 2
    href: "#sql-to-filter-by-range-of-hours"
  - id: "sql-to-filter-by-fiscal-periods"
    title: "SQL برای فیلتر کردن بر اساس دوره‌های مالی"
    level: 2
    href: "#sql-to-filter-by-fiscal-periods"
  - id: "sql-to-filter-by-recurring-dates"
    title: "SQL برای فیلتر کردن بر اساس تاریخ‌های تکراری"
    level: 2
    href: "#sql-to-filter-by-recurring-dates"
  - id: "sql-to-filter-by-business-days"
    title: "SQL برای فیلتر کردن بر اساس روزهای کاری"
    level: 2
    href: "#sql-to-filter-by-business-days"
  - id: "sql-to-filter-for-last-x-days"
    title: "SQL برای فیلتر کردن X روز گذشته"
    level: 2
    href: "#sql-to-filter-for-last-x-days"
  - id: "sql-to-filter-by-the-difference-between-two-dates"
    title: "SQL برای فیلتر کردن بر اساس تفاوت بین دو تاریخ"
    level: 2
    href: "#sql-to-filter-by-the-difference-between-two-dates"
  - id: "sql-to-filter-by-date-ranges-with-gaps"
    title: "SQL برای فیلتر کردن بر اساس محدوده تاریخ با فاصله"
    level: 2
    href: "#sql-to-filter-by-date-ranges-with-gaps"
  - id: "sql-to-filter-for-or-exclude-rows-with-missing-dates"
    title: "SQL برای فیلتر کردن یا حذف ردیف‌هایی با تاریخ‌های گم‌شده"
    level: 2
    href: "#sql-to-filter-for-or-exclude-rows-with-missing-dates"
  - id: "sql-to-filter-by-a-date-variable"
    title: "SQL برای فیلتر کردن بر اساس متغیر تاریخ"
    level: 2
    href: "#sql-to-filter-by-a-date-variable"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "فیلتر کردن با SQL"
    href: "index.html"
---

# فیلتر کردن تاریخ با SQL

یادگیری فیلتر کردن تاریخ با SQL: نحوه فیلتر کردن داده‌هایتان بر اساس تاریخ، از تطابق‌های ساده تا الگوهای پیچیده مانند روزهای کاری و دوره‌های نسبی.

مردم دوست دارند بدانند چه زمانی اتفاقات رخ داده است. این راهنما نحوه فیلتر کردن داده‌هایتان بر اساس تاریخ را نشان می‌دهد، از تطابق‌های ساده تا الگوهای پیچیده مانند روزهای کاری و دوره‌های متحرک.

## آنچه پوشش می‌دهیم

- [تفاوت بین تاریخ‌ها و timestampها](#difference-between-dates-and-timestamps-and-dates-stored-as-strings)
- [تطابق‌های دقیق تاریخ](#sql-to-filter-rows-by-a-single-date)
- [قبل یا بعد از یک تاریخ](#sql-to-filter-before-or-after-a-date)
- [محدوده تاریخ با `BETWEEN`](#sql-to-filter-date-ranges-with-between)
- [بخشی از تاریخ (هفته، ماه و غیره)](#sql-to-filter-by-part-of-a-date-by-week-or-month-and-so-on)
- [تاریخ‌های نسبی](#sql-to-filter-by-relative-dates)
- [روز هفته](#sql-to-filter-by-day-of-week)
- [محدوده ساعات](#sql-to-filter-by-range-of-hours)
- [دوره‌های مالی](#sql-to-filter-by-fiscal-periods)
- [تاریخ‌های تکراری](#sql-to-filter-by-recurring-dates)
- [روزهای کاری](#sql-to-filter-by-business-days)
- [X روز گذشته](#sql-to-filter-for-last-x-days)
- [تفاوت بین دو تاریخ](#sql-to-filter-by-the-difference-between-two-dates)
- [محدوده تاریخ با فاصله](#sql-to-filter-by-date-ranges-with-gaps)
- [تاریخ‌های گم‌شده](#sql-to-filter-for-or-exclude-rows-with-missing-dates)
- [متغیرهای تاریخ](#sql-to-filter-by-a-date-variable)

> نیاز به یادآوری سریع قبل از ورود به SQL پیشرفته دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما را برای دستورات و نحو اصلی بررسی کنید. همچنین برای به اشتراک گذاشتن با همکارانی که تازه در تحلیل داده شروع کرده‌اند عالی است.

## تفاوت بین تاریخ‌ها و timestampها و تاریخ‌های ذخیره شده به صورت رشته

در SQL، `DATE` و `TIMESTAMP` انواع داده متمایز هستند:

```
SELECT
  DATE '2025-05-04' AS this_is_a_date,
  TIMESTAMP '2025-05-04 14:30:00' AS this_is_a_timestamp
FROM
  orders
LIMIT
  1;

```

یک مقدار `DATE`:

- فقط تاریخ تقویمی را ذخیره می‌کند (سال، ماه، روز)
- فاقد جزء زمان است
- فرمت معمول آن 'YYYY-MM-DD' است
- فضای ذخیره‌سازی (کمی) کمتری می‌گیرد

یک مقدار `TIMESTAMP`:

- هم تاریخ و هم زمان را ذخیره می‌کند (سال، ماه، روز، ساعت، دقیقه، ثانیه و اغلب ثانیه‌های کسری)
- فرمت معمول آن `YYYY-MM-DD HH:MM:SS.SSS` است (میلی‌ثانیه‌های کسری، `.SSS`، اختیاری هستند)
- ممکن است شامل اطلاعات منطقه زمانی باشد (`TIMESTAMP WITH TIME ZONE` یا `TIMESTAMPTZ`)

تاریخ‌ها همچنین (به ندرت) می‌توانند به صورت رشته (یعنی متن) ذخیره شوند.

بیشتر ابزارها (از جمله متابیس) اطلاعات نوع ستون را در بخش مرجع داده به شما می‌دهند. همچنین معمولاً می‌توانید `INFORMATION_SCHEMA` پایگاه داده را پرس‌وجو کنید. در اینجا نحوه دریافت نوع داده برای ستون‌های جدول orders در پایگاه داده نمونه:

```
SELECT
  TABLE_NAME,
  COLUMN_NAME,
  DATA_TYPE
FROM
  INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'ORDERS';

```

که برمی‌گرداند:

```txt
| TABLE_NAME | COLUMN_NAME | DATA_TYPE        |
| ---------- | ----------- | ---------------- |
| ORDERS     | ID          | BIGINT           |
| ORDERS     | USER_ID     | INTEGER          |
| ORDERS     | PRODUCT_ID  | INTEGER          |
| ORDERS     | SUBTOTAL    | DOUBLE PRECISION |
| ORDERS     | TAX         | DOUBLE PRECISION |
| ORDERS     | TOTAL       | DOUBLE PRECISION |
| ORDERS     | DISCOUNT    | DOUBLE PRECISION |
| ORDERS     | CREATED_AT  | TIMESTAMP        |
| ORDERS     | QUANTITY    | INTEGER          |

```

در اینجا ستون تاریخ، `CREATED_AT` یک `TIMESTAMP` است.

در عمل، مگر اینکه با تاریخ‌هایی کار می‌کنید که زمان دقیق مهم است، می‌خواهید هنگام پرس‌وجو از جداول به نوع `DATE` تبدیل کنید، زیرا معمولاً نتایج را بر اساس روز (یا هفته، ماه، سه‌ماهه یا سال) فیلتر و گروه‌بندی می‌کنید.

### تبدیل timestamp به تاریخ

می‌توانید از [`CAST`](../working-with-sql/syntax-reference.html#sql-cast) برای تبدیل timestamp به تاریخ استفاده کنید:

```
SELECT
  id,
  CAST(created_at AS DATE) AS order_date
FROM
  orders;

```

## SQL برای فیلتر کردن ردیف‌ها با یک تاریخ

برای جستجوی یک تطابق دقیق تاریخ، می‌توانید از بند `WHERE` با عملگرهای مقایسه استفاده کنید. در اینجا یک پرس‌وجو برای دریافت همه سفارش‌های ثبت شده در 4 می 2025:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- `>=` و `<` تمساح‌هایی هستند که عدد بزرگتر را می‌خورند
  created_at >= DATE '2025-05-04'
  AND created_at < DATE '2025-05-05';

```

چرا فقط `WHERE created_at = '2025-05-04'` نیست؟ دو دلیل:

- `created_at` یک فیلد با timestamp است. بنابراین حتی اگر `WHERE created_at = '2025-05-04'` یک بند معتبر باشد، آن فیلتر فقط سفارش‌های ثبت شده در `2025-05-04T00:00:00` (نیمه‌شب 4 می 2025) را برمی‌گرداند. با استفاده از `AND` می‌توانیم از پایگاه داده بخواهیم *همه* سفارش‌های ثبت شده بین نیمه‌شب 4 می تا (اما شامل) نیمه‌شب 5 می را برگرداند.
- استفاده از یک محدوده پرس‌وجو را sargable نگه می‌دارد، که اصطلاح فنی برای "پرس‌وجوهایی که به پردازنده پرس‌وجو اجازه می‌دهند از هر ایندکسی روی یک ستون استفاده کند" است. Sargable مخفف Search ARGument ABLE است. (ایندکس‌ها را در مقاله دیگری پوشش خواهیم داد.)

به طور جایگزین، می‌توانید timestamp را به تاریخ تبدیل کنید، مثل این:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- تبدیل ستون به نوع تاریخ برای حذف زمان
  CAST(created_at AS DATE) = DATE '2025-05-04';

```

این پرس‌وجو کار می‌کند، اما چون پردازنده پرس‌وجو باید یک تابع `CAST` را روی هر مقدار در ستون اجرا کند، پردازنده پرس‌وجو نمی‌تواند از هیچ ایندکسی روی ستون برای سرعت بخشیدن به نتایج استفاده کند (یعنی: پرس‌وجو *sargable* نیست).

کلمه کلیدی [`DATE`](../working-with-sql/syntax-reference.html#sql-date) ضروری نیست. بیشتر پایگاه‌های داده `YYYY-MM-DD` را به عنوان تاریخ تشخیص می‌دهند، اما بهتر است صریح باشید.

## SQL برای فیلتر کردن قبل یا بعد از یک تاریخ

می‌توانید از عملگرهای مقایسه برای یافتن تاریخ‌های قبل یا بعد از یک تاریخ خاص استفاده کنید. در اینجا سفارش‌های *قبل* از 4 می 2025 را دریافت می‌کنیم:

```
SELECT
  *
FROM
  orders
WHERE
  -- دریافت سفارش‌های قبل از نیمه‌شب 4 می 2025
  -- (نیمه‌شب شروع یک روز است)
  created_at < DATE '2025-05-04';

```

اگر می‌خواهید سفارش‌های ثبت شده در طول روز `2025-05-04` را شامل کنید، می‌توانید تاریخ را به `2025-05-05` افزایش دهید، یا از [`INTERVAL`](../working-with-sql/syntax-reference.html#sql-interval) برای افزودن یک روز استفاده کنید:

```
SELECT
  *
FROM
  orders
WHERE
  -- دریافت سفارش‌های از 4 می 2025 و قبل از آن
  created_at < DATE '2025-05-04' + INTERVAL '1' DAY;

```

SQL از همه عملگرهای مقایسه استاندارد پشتیبانی می‌کند، اما به خاطر داشته باشید که این عملگرها بسته به اینکه با تاریخ‌ها یا timestampها کار می‌کنید نتایج متفاوتی برمی‌گردانند.

- `>` (بعد)
- `>=` (در یا بعد)
- `<` (قبل)
- `<=` (در یا قبل: اگر با timestampها کار می‌کنید، فقط نیمه‌شب آن تاریخ را شامل می‌شود).

## SQL برای فیلتر کردن محدوده تاریخ با BETWEEN

برای یافتن تاریخ‌های درون یک محدوده، از [`BETWEEN`](../working-with-sql/syntax-reference.html#sql-between) استفاده کنید. در اینجا سفارش‌های ثبت شده بین نیمه‌شب 1 می و نیمه‌شب 15 می 2025 را فیلتر می‌کنیم:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌های از نیمه‌شب 1 می تا نیمه‌شب 15 می 2025
  created_at BETWEEN DATE '2025-05-01' AND  DATE '2025-05-15';

```

حتی اگر `BETWEEN` *شامل* هر دو تاریخ شروع و پایان باشد، این پرس‌وجو همه سفارش‌های ثبت شده در `2025-05-15` را برنمی‌گرداند. این به این دلیل است که ستون `created_at` شامل timestamp است، نه تاریخ، بنابراین پرس‌وجو فقط سفارش‌های ثبت شده تا نیمه‌شب 15 می را شامل می‌شود. اگر می‌خواهید سفارش‌های ثبت شده در زمان‌های دیگر در 15 می را شامل کنید، باید محدوده را به 16 می افزایش دهید.

به طور جایگزین، می‌توانید فیلترهای مقایسه‌ای را برای برگرداندن یک محدوده ترکیب کنید. در اینجا ترجمه پرس‌وجوی بالا با `BETWEEN`: دوباره سفارش‌های ثبت شده بین نیمه‌شب 1 می و نیمه‌شب 15 می 2025 را فیلتر می‌کنیم:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- تقلید از BETWEEN: دریافت سفارش‌های از
  -- نیمه‌شب 1 می تا نیمه‌شب 15 می 2025
  -- اگر می‌خواستید همه سفارش‌های 15 می را شامل کنید،
  -- باید `< '2025-05-16'` بنویسید
  created_at >= DATE '2025-05-01'
  AND created_at <= DATE '2025-05-15';

```

## SQL برای فیلتر کردن بر اساس بخشی از تاریخ (هفته یا ماه و غیره)

می‌توانید بر اساس بخش‌های خاصی از یک تاریخ (مثل سال، ماه یا روز) با استفاده از [`EXTRACT`](../working-with-sql/syntax-reference.html#sql-extract) فیلتر کنید. بیایید بگوییم می‌خواهید همه سفارش‌های ثبت شده در می را دریافت کنید، بدون توجه به سال. می‌توانید `MONTH FROM` یک ستون تاریخ را استخراج کنید، مثل این:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت همه سفارش‌های ایجاد شده در می
  EXTRACT(MONTH FROM created_at) = 5;

```

همچنین می‌توانید استخراج کنید:

- `YEAR`
- `MONTH`
- `DAY`
- `HOUR`
- `MINUTE`
- `SECOND`
- `DOW` (روز هفته)
- `DOY` (روز سال)

## SQL برای فیلتر کردن بر اساس تاریخ‌های نسبی

برای فیلتر کردن بر اساس تاریخ‌های نسبی، مثل X روز قبلی، می‌توانید از `CURRENT_DATE` و `INTERVAL` استفاده کنید. در اینجا یک پرس‌وجو برای دریافت سفارش‌های ثبت شده در هفت روز گذشته (شامل امروز):

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- از آنجایی که با timestampها کار می‌کنیم، CURRENT_DATE تاریخ فعلی را در نیمه‌شب برمی‌گرداند
  -- پس باید یک روز اضافه کنیم تا سفارش‌های ثبت شده در تاریخ فعلی را شامل کنیم.
  created_at <= CURRENT_DATE + INTERVAL '1' DAY
  -- دریافت سفارش‌های از 7 روز گذشته
  AND created_at >= CURRENT_DATE - INTERVAL '7' DAY;

```

توابع تاریخ نسبی از پایگاه داده به پایگاه داده متفاوت هستند، پس باید بررسی کنید که پایگاه داده شما از کدام‌ها استفاده می‌کند. نام‌های رایج توابع تاریخ نسبی شامل:

- `CURRENT_DATE`: تاریخ امروز
- `CURRENT_TIMESTAMP`: تاریخ و زمان فعلی
- `NOW()`: تاریخ و زمان فعلی
- `INTERVAL`: مشخص کردن یک دوره زمانی

کلمه کلیدی `INTERVAL` واحدهای زمانی مختلفی را می‌پذیرد. در اینجا رایج‌ترین واحدهای پشتیبانی شده:

- `YEAR` / `YEARS`
- `MONTH` / `MONTHS`
- `WEEK` / `WEEKS`
- `DAY` / `DAYS`
- `HOUR` / `HOURS`
- `MINUTE` / `MINUTES`
- `SECOND` / `SECONDS`
- `MILLISECOND` / `MILLISECONDS`

توجه داشته باشید که پایگاه‌های داده مختلف ممکن است واحدهای مختلفی را پشتیبانی کنند یا نحو کمی متفاوتی داشته باشند. همیشه مستندات پایگاه داده خود را برای فهرست کامل واحدهای interval پشتیبانی شده بررسی کنید.

## SQL برای فیلتر کردن بر اساس روز هفته

برای یافتن سفارش‌های ثبت شده در روزهای خاص هفته، می‌توانید `DOW` (روز هفته) را `EXTRACT` کنید. در اینجا یک پرس‌وجو برای دریافت همه سفارش‌های ثبت شده در دوشنبه یا جمعه:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌های ثبت شده در دوشنبه‌ها (2) و جمعه‌ها (6)
  EXTRACT(DOW FROM created_at) IN (2, 6);

```

متأسفانه، پایگاه‌های داده مختلف روزهای هفته را متفاوت شماره‌گذاری می‌کنند، پس نتایج پرس‌وجوی خود را بررسی کنید تا مطمئن شوید عدد روز صحیح هفته را برمی‌گرداند.

## SQL برای فیلتر کردن بر اساس محدوده ساعات

برای یافتن سفارش‌های ثبت شده در یک محدوده ساعات، بدون توجه به تاریخ، می‌توانیم ساعات را `EXTRACT` کنیم `BETWEEN` دو ساعت از روز. در اینجا سفارش‌های ثبت شده بین 09:00 و 17:59 هر روز را فیلتر می‌کنیم:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌های ثبت شده بین 9 صبح و 5 بعدازظهر
  EXTRACT(HOUR FROM created_at) BETWEEN 9 AND 17;

```

توجه داشته باشید که ساعت کل ساعت را شامل می‌شود. اگر می‌خواستید سفارش‌های ثبت شده بعد از 5 بعدازظهر (17:00) را قطع کنید، باید از `BETWEEN 9 AND 16` استفاده کنید.

## SQL برای فیلتر کردن بر اساس دوره‌های مالی

برای یافتن سفارش‌های دوره‌های مالی خاص (مثل سه‌ماهه یا سال مالی)، می‌توانید `QUARTER` و `YEAR` را `EXTRACT` کنید. در اینجا یک پرس‌وجو که همه سفارش‌های سه‌ماهه دوم 2025 را دریافت می‌کند:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌های سه‌ماهه دوم 2025 (آوریل تا ژوئن)
  EXTRACT(QUARTER FROM created_at) = 2
  AND
  EXTRACT(YEAR FROM created_at) = 2025;

```

## SQL برای فیلتر کردن بر اساس تاریخ‌های تکراری

برای یافتن سفارش‌هایی که در همان *روز* هر ماه رخ می‌دهند، از `EXTRACT` و عملگر `=` استفاده کنید. در اینجا یک پرس‌وجو که همه سفارش‌های ثبت شده در 15 هر ماه را پیدا می‌کند:

```
SELECT
  *
FROM
  orders
WHERE
  -- دریافت سفارش‌های ثبت شده در 15 هر ماه
  EXTRACT(DAY FROM created_at) = 15;

```

بدیهی است، برخی ماه‌ها روزهای کمتری نسبت به دیگران دارند. اگر دنبال 31 هر ماه هستید، فوریه، آوریل، ژوئن، سپتامبر و نوامبر را از دست می‌دهید. برای گرفتن همه سفارش‌های ثبت شده در آخرین روز هر ماه، می‌توانید از `EXTRACT` و `INTERVAL` استفاده کنید:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- سفارش‌های ثبت شده در آخرین روز هر ماه
  EXTRACT(DAY FROM (created_at + INTERVAL '1' DAY)) = 1;

```

`EXTRACT(DAY FROM (created_at + INTERVAL '1' DAY)) = 1` بررسی می‌کند که آیا افزودن یک روز به مقدار `created_at` روز ماه را به 1 تبدیل می‌کند. برای تجزیه بیشتر:

- `created_at + INTERVAL '1' DAY` تاریخ + یک روز است.
- `EXTRACT (DAY FROM ...)` مقدار روز را دریافت می‌کند.
- که با مقدار 1 مقایسه می‌کنیم (یعنی اگر یک روز اضافه کنیم، آیا اولین روز ماه بعد است؟)

اگر افزودن یک روز به مقدار `created_at` برابر با 1 باشد (یعنی اولین روز ماه)، این یعنی مقدار `created_at` باید آخرین روز ماه قبل باشد.

## SQL برای فیلتر کردن بر اساس روزهای کاری

برای یافتن سفارش‌های ثبت شده در روزهای کاری، دوشنبه تا جمعه، (به استثنای آخر هفته)، می‌توانید روز هفته را `EXTRACT` کنید و برای یک محدوده با `BETWEEN` فیلتر کنید. در اینجا یک پرس‌وجو برای فیلتر کردن سفارش‌های ثبت شده دوشنبه تا جمعه:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- اگر روز هفته (DOW) شما یکشنبه را به عنوان 1 شروع می‌کند، پس BETWEEN 2 AND 6 است (دوشنبه-جمعه)
  -- اگر DOW شما دوشنبه را به عنوان 1 شروع می‌کند، پس BETWEEN 1 AND 5 است (دوشنبه-جمعه)
 EXTRACT(DOW FROM created_at) BETWEEN 2 AND 6;

```

همچنین می‌توانید مجموعه‌ای از تعطیلات را برای حذف با `NOT IN` مشخص کنید:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  created_at > '2024-12-31'
  AND created_at < '2025-02-01'
  AND EXTRACT(DOW FROM created_at) BETWEEN 2 AND 6
  -- حذف برخی تعطیلات آمریکایی در 2025.
  -- چون created_at یک timestamp است، باید آن را به عنوان تاریخ cast کنیم.
  AND CAST(created_at AS DATE) NOT IN (
    DATE '2025-01-01', -- روز سال نو
    DATE '2025-07-04', -- روز استقلال
    DATE '2025-09-01', -- روز کارگر
    DATE '2025-09-07', -- روز دیگر خطای نحو
    DATE '2025-11-27' -- روز شکرگزاری
    -- و هر تعطیلات و تاریخ دیگری که می‌خواهید حذف کنید
  );

```

اگر `created_at` را به تاریخ cast نکرده بودیم، فقط سفارش‌های ثبت شده دقیقاً در نیمه‌شب آن روزها را حذف می‌کردیم.

## SQL برای فیلتر کردن X روز گذشته

برای یافتن سفارش‌ها بر اساس سن آن‌ها، می‌توانید از `BETWEEN`، `CURRENT_DATE` و `INTERVAL` استفاده کنید. در اینجا یک پرس‌وجو که سفارش‌های ثبت شده بین 30 و 60 روز پیش را فیلتر می‌کند:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌هایی که بین 30 و 60 روز سن دارند
  created_at BETWEEN CURRENT_DATE - INTERVAL '60' DAY AND CURRENT_DATE - INTERVAL '30' DAY;

```

## SQL برای فیلتر کردن بر اساس تفاوت بین دو تاریخ

بیایید بگوییم می‌خواهیم همه حساب‌هایی را ببینیم که در عرض سه روز از ایجاد آن‌ها لغو شده‌اند. باید:

- برای حساب‌های لغو شده فیلتر کنیم
- روز را از دو ستون تاریخ استخراج کنیم تا بتوانیم تفاوت را محاسبه کنیم
- برای تفاوت‌های کمتر یا مساوی 3 فیلتر کنیم.

```
SELECT
  id,
  created_at,
  canceled_at,
  -- دریافت شماره روز برای تاریخ
  -- محاسبه تفاوت در تاریخ‌ها
  EXTRACT(DAY FROM canceled_at - created_at) AS days_active
FROM
  accounts
WHERE
  -- فیلتر برای حساب‌های لغو شده.
  canceled_at IS NOT NULL
 AND
  -- محاسبه روز دوباره
  EXTRACT(DAY FROM canceled_at - created_at) <= 3;

```

دلیل اینکه نمی‌توانید از نام مستعار `days_active` در بند `WHERE` استفاده کنید به دلیل [ترتیب عملیات در SQL](../working-with-sql/sql-best-practices.html#the-general-order-of-query-execution) است. در این مورد، بند `WHERE` قبل از بند `SELECT` ارزیابی می‌شود، بنابراین از نام مستعار `days_active` آگاه نیست. البته، موتورهای پایگاه داده متفاوت هستند، پس ممکن است در برخی موارد بتوانید به نام مستعار اشاره کنید. اگر می‌خواهید از نوشتن `EXTRACT` دو بار اجتناب کنید، می‌توانید از یک [عبارت جدول مشترک](../working-with-sql/sql-cte.html) استفاده کنید:

```
WITH account_activity AS (
  SELECT
    id,
    created_at,
    canceled_at,
    EXTRACT(DAY FROM canceled_at - created_at) AS days_active
  FROM
    accounts
  WHERE
    canceled_at IS NOT NULL
)

SELECT
  *
FROM
  account_activity
WHERE
  days_active <= 3;

```

در حالی که SQL استاندارد نیست، بسیاری از پایگاه‌های داده از یک تابع `DATEDIFF` پشتیبانی می‌کنند که به شما اجازه می‌دهد ردیف‌ها را بر اساس تفاوت بین تاریخ‌های اندازه‌گیری شده در واحدهای خاص فیلتر کنید. می‌توانید از `DATEDIFF` برای یافتن رکوردهایی استفاده کنید که مقدار مشخصی از زمان بین دو تاریخ گذشته است:

```
SELECT
  id,
  created_at,
  canceled_at,
  DATEDIFF (DAY, created_at, canceled_at) as days_active
FROM
  accounts
WHERE
  -- فیلتر برای حساب‌های لغو شده
  canceled_at IS NOT NULL
  -- و فیلتر برای حساب‌هایی که در عرض سه روز لغو شده‌اند
  AND DATEDIFF (DAY, created_at, canceled_at) <= 3;

```

در اینجا `DATEDIFF` یک واحد (`DAY`) و یک تاریخ شروع و پایان می‌گیرد و تعداد واحدها (در این مورد روزها) بین دو تاریخ را محاسبه می‌کند. برخی پایگاه‌های داده تابع `DATEDIFF` را متفاوت پیاده‌سازی می‌کنند، پس مستندات آن‌ها را برای امضای تابع بررسی کنید.

## SQL برای فیلتر کردن بر اساس محدوده تاریخ با فاصله

برای یافتن سفارش‌ها در محدوده‌های تاریخ خاص در حالی که دوره‌های خاصی را حذف می‌کنید، می‌توانید چندین فیلتر را با `AND` ترکیب کنید. در اینجا تاریخ‌های می 2025 را دریافت می‌کنیم، به استثنای آخر هفته‌ها و هر سفارش ایجاد شده در طول فروش بزرگ فرضی که در 25 و 26 می اجرا کردیم:

```
SELECT
  id,
  created_at
FROM
  orders
WHERE
  -- دریافت سفارش‌های از می 2025
  created_at >= '2025-05-01'
  AND created_at < '2025-06-01'
  -- اما حذف آخر هفته‌ها: نه یکشنبه (1) یا شنبه (7)
  -- اگرچه توجه داشته باشید که شماره‌گذاری روزهای هفته در پایگاه‌های داده سازگار نیست
  AND EXTRACT(DOW FROM created_at) NOT IN (1, 7)
  -- و حذف تاریخ‌های خاص
  -- که باید cast کنیم، چون created_at شامل timestamp است
  AND CAST(created_at AS DATE) NOT IN (
    DATE '2025-05-25',
    DATE '2025-05-26'
    );

```

## SQL برای فیلتر کردن یا حذف ردیف‌هایی با تاریخ‌های گم‌شده

برای یافتن ردیف‌هایی که یک ستون تاریخ خالی است (null):

```
SELECT
  *
FROM
  orders
WHERE
  created_at IS NULL;

```

برای یافتن ردیف‌هایی که واقعاً یک مقدار دارند (null نیستند):

```
SELECT
  *
FROM
  orders
WHERE
  created_at IS NOT NULL;

```

## SQL برای فیلتر کردن بر اساس متغیر تاریخ

[پارامترهای SQL](../../../docs/latest/questions/native-editor/sql-parameters.html) را بررسی کنید.

## مطالعه بیشتر

- [پرس‌وجوی SQL](../getting-started/querying-tables.html)
- [فیلتر کردن متن با SQL](by-text.html)
- [بهترین روش‌های SQL](../working-with-sql/sql-best-practices.html)

[](by-text.html)
