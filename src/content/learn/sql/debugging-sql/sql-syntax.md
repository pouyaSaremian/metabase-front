---
title: "عیب‌یابی خطاهای نحو SQL"
description: "چه کاری انجام دهید وقتی پرس‌وجوی شما یک پیام خطا برمی‌گرداند."
redirect_from:
  - /learn/sql/debugging-sql/sql-syntax
  - /learn/debugging-sql/sql-syntax
  - /learn/grow-your-data-skills/learn-sql/debugging-sql/sql-syntax
toc:
  - id: "debugging-sql-syntax-errors"
    title: "عیب‌یابی خطاهای نحو SQL"
    level: 1
    href: "#debugging-sql-syntax-errors"
  - id: "debugging-a-sql-query"
    title: "عیب‌یابی یک پرس‌وجوی SQL"
    level: 2
    href: "#debugging-a-sql-query"
  - id: "how-does-sql-debugging-work"
    title: "عیب‌یابی SQL چگونه کار می‌کند؟"
    level: 2
    href: "#how-does-sql-debugging-work"
  - id: "debugging-sql-syntax"
    title: "عیب‌یابی نحو SQL"
    level: 2
    href: "#debugging-sql-syntax"
  - id: "common-sql-reference-guides"
    title: "راهنماهای مرجع SQL رایج"
    level: 2
    href: "#common-sql-reference-guides"
  - id: "common-sql-syntax-errors"
    title: "خطاهای رایج نحو SQL"
    level: 2
    href: "#common-sql-syntax-errors"
  - id: "column-or-table-name-is-not-found-or-not-recognized"
    title: "نام ستون یا جدول \"پیدا نشد\" یا \"شناخته نشد\""
    level: 3
    href: "#column-or-table-name-is-not-found-or-not-recognized"
  - id: "sql-function-does-not-exist"
    title: "تابع SQL وجود ندارد"
    level: 3
    href: "#sql-function-does-not-exist"
  - id: "how-to-find-the-failing-line-in-a-sql-query"
    title: "نحوه یافتن خط ناموفق در یک پرس‌وجوی SQL"
    level: 2
    href: "#how-to-find-the-failing-line-in-a-sql-query"
  - id: "reading-your-sql-error-message"
    title: "خواندن پیام خطای SQL شما"
    level: 3
    href: "#reading-your-sql-error-message"
  - id: "reducing-the-size-of-a-sql-query"
    title: "کاهش اندازه یک پرس‌وجوی SQL"
    level: 3
    href: "#reducing-the-size-of-a-sql-query"
  - id: "how-to-find-out-what-sql-dialect-to-use"
    title: "نحوه فهمیدن کدام گویش SQL استفاده کنیم"
    level: 2
    href: "#how-to-find-out-what-sql-dialect-to-use"
  - id: "do-you-have-a-different-problem"
    title: "آیا مشکل متفاوتی دارید؟"
    level: 2
    href: "#do-you-have-a-different-problem"
  - id: "are-you-still-stuck"
    title: "آیا هنوز گیر کرده‌اید؟"
    level: 2
    href: "#are-you-still-stuck"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "عیب‌یابی SQL"
    href: "index.html"
---

# عیب‌یابی خطاهای نحو SQL

چه کاری انجام دهید وقتی پرس‌وجوی شما یک پیام خطا برمی‌گرداند.

خواندن یک پیام خطا نباید مثل حل یک معما احساس شود. این راهنمای عیب‌یابی توضیح می‌دهد چه کاری می‌توانید درباره پرس‌وجوهای سرسخت که از اجرا امتناع می‌کنند انجام دهید.

## عیب‌یابی یک پرس‌وجوی SQL

اگر پرس‌وجوی SQL شما شامل متغیرهای SQL است که شبیه `{{ variable }}` به نظر می‌رسند، ابتدا به [عیب‌یابی متغیرهای SQL](../../../docs/latest/troubleshooting-guide/sql.html) بروید.

- [نمی‌دانم پرس‌وجوی SQL من کجا ناموفق است](#how-to-find-the-failing-line-in-a-sql-query).
1. به خطی که در پرس‌وجوی SQL شما ناموفق است بروید.
2. [نحو SQL](#debugging-sql-syntax) را روی خطی که در پرس‌وجوی SQL شما ناموفق است بررسی کنید.
3. [منطق پرس‌وجو](sql-logic.html) خود را بررسی کنید اگر پرس‌وجو از joinها، زیرپرس‌وجوها، یا CTEها استفاده می‌کند.
4. اگر یک پیام خطا دریافت می‌کنید که خاص پرس‌وجوی SQL شما نیست، به [عیب‌یابی پیام‌های خطا](../../../docs/latest/troubleshooting-guide/error-message.html) بروید.

> نیاز به یادآوری سریع قبل از ورود به SQL پیشرفته دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما را برای دستورات و نحو اصلی بررسی کنید. همچنین برای به اشتراک گذاشتن با همکارانی که تازه در تحلیل داده شروع کرده‌اند عالی است.

## عیب‌یابی SQL چگونه کار می‌کند؟

- پیام‌های خطای SQL برای هر خط در پرس‌وجوی شما که اجرا نمی‌شود نمایش داده می‌شوند. باید مراحل بالا را برای هر خطی که ناموفق بود دنبال کنید.
- اگر هر تغییری در یک خط ایجاد کردید، پرس‌وجوی خود را اجرا کنید تا بررسی کنید آیا مشکل برطرف شده است قبل از رفتن به مرحله بعد. می‌توانید یک بند `LIMIT` در انتهای پرس‌وجوی خود اضافه کنید تا فرآیند را سرعت بخشید.
- توجه داشته باشید که [پرس‌وجوهای SQL از بالا به پایین اجرا نمی‌شوند](../working-with-sql/sql-best-practices.html#the-general-order-of-query-execution)، پس خطوط پرس‌وجوی خود را به ترتیبی که نوشته شده‌اند عیب‌یابی نمی‌کنید. پیام‌های خطا را دنبال کنید تا به شما کمک کند خطوطی که نیاز به توجه دارند را پیدا کنید.

## عیب‌یابی نحو SQL

1. املای خطی که در پرس‌وجوی SQL شما ناموفق است را مرور کنید.
2. برای براکت‌ها یا کاماهای گم‌شده روی خطی که در پرس‌وجوی SQL شما ناموفق است مرور کنید.
3. خطوط کامنت شده (خطوطی که با `--` یا `/*` شروع می‌شوند) را حذف کنید.
4. برای خطاهای نحو رایج که [خاص گویش SQL شما](#common-sql-reference-guides) هستند مرور کنید.

**توضیح**

پایگاه داده شما باید بتواند پرس‌وجوی شما را "بخواند" تا آن را اجرا کند.

- املای صحیح به پایگاه داده شما دقیقاً *چه چیزی* را جستجو کند می‌گوید.
- نقطه‌گذاری به پایگاه داده شما *چگونه* (مثلاً چه ترتیبی استفاده کند) داده شما را جستجو کند می‌گوید.
- کامنت‌ها برای خواندن یا اجرا شدن در نظر گرفته نشده‌اند، اما گاهی اوقات فاصله‌های خالی یا نمادهای دنباله‌دار می‌توانند به طور غیرمنتظره با خواندن و اجرای خطوط مجاور تداخل کنند.

## راهنماهای مرجع SQL رایج

قبل از شروع، راهنمای مرجع SQL برای گویش SQL که استفاده می‌کنید را باز کنید. ما به برخی از رایج‌ترین‌ها در اینجا لینک داده‌ایم:

- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/language-structure.html)
- [PostgreSQL](https://www.postgresql.org/docs/current/sql-syntax-lexical.html)
- [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/language-reference)
- [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/dg/cm_chap_SQLCommandRef.html)
- [Google BigQuery](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical)
- [Snowflake](https://docs.snowflake.com/en/sql-reference/constructs.html)
- [نمی‌دانم کدام گویش SQL استفاده کنم](#how-to-find-out-what-sql-dialect-to-use).

## خطاهای رایج نحو SQL

پیام خطای شما چه می‌گوید؟

- [نام ستون یا جدول من \"پیدا نشد\" یا \"شناخته نشد\"](#column-or-table-name-is-not-found-or-not-recognized).
- [تابع SQL من \"وجود ندارد\"](#sql-function-does-not-exist).

### نام ستون یا جدول \"پیدا نشد\" یا \"شناخته نشد\"

اگر پرس‌وجوی SQL شما شامل متغیرهای SQL است که شبیه `{{ variable }}` به نظر می‌رسند، ابتدا به [عیب‌یابی متغیرهای SQL](../../../docs/latest/troubleshooting-guide/sql.html) بروید.

**مراحل**

- `SELECT 'column_name'`
- `SELECT "column_name"`
- `SELECT `column_name``
- آیا از علامت‌های نقل قول صحیح استفاده می‌کنید؟ به عنوان مثال:
- `FROM table_name`
- `FROM schema_name.table_name`
- `FROM database_name.schema_name.table_name`
- آیا از مسیر صحیح به ستون‌ها و جداول استفاده می‌کنید؟ به عنوان مثال:
- `SELECT users` خطا می‌دهد.
- `SELECT "users"` به درستی اجرا می‌شود.
- آیا نام ستون شما یک کلمه رزرو شده است؟ به عنوان مثال: [در PostgresSQL، 'users' یک کلمه کلیدی رزرو شده است](https://www.postgresql.org/docs/current/sql-keywords-appendix.html).
1. یک سؤال در [query builder](../../../docs/latest/questions/query-builder/editor.html) با استفاده از همان ستون‌ها و جداول سؤال SQL خود ایجاد کنید.
2. [سؤال را به SQL تبدیل کنید](../../../docs/latest/questions/query-builder/editor.html#viewing-the-native-query-that-powers-your-question).
3. نحوه ارجاع پرس‌وجوی SQL تولید شده توسط متابیس به نام ستون و جدول را ببینید.
- **نکته: از متابیس برای بررسی نحو نام ستون و جدول استفاده کنید**
1. بخش **ساختار** [راهنمای مرجع](#common-sql-reference-guides) را برای گویش SQL خود مرور کنید.
- `SELECT * FROM your_table_name LIMIT 10;` را اجرا کنید تا به دنبال نام ستون یا جدول برای استفاده در پرس‌وجوی خود بگردید.
- اگر شما یک مدیر متابیس هستید، صفحه Data model را برای [schema اصلی](../../../docs/latest/data-modeling/metadata-editing.html) بررسی کنید.
- اگر نام ستون یا جدول در مرجع داده وجود ندارد:
- از مدیر متابیس خود بپرسید آیا ستون در سمت پایگاه داده تغییر نام داده یا حذف شده است.
- اگر شما یک مدیر متابیس هستید، ممکن است نیاز به [اجرای یک sync](../../../docs/latest/databases/connecting.html#syncing-and-scanning-databases) برای به‌روزرسانی داده خود داشته باشید.
- اگر نام ستون وجود دارد، اما نمی‌توانید ستون را از ویرایشگر SQL پرس‌وجو کنید:
2. [مرجع داده](#common-sql-reference-guides) را برای نام ستون‌ها و جداول در پرس‌وجوی خود مرور کنید.

**توضیح**

باید مطمئن شوید که از نحو صحیح برای گویش SQL استفاده شده توسط پایگاه داده خود استفاده می‌کنید.

پرس‌وجوی شما همچنین باید از نام ستون و جدول که با نام‌های اصلی در پایگاه داده شما مطابقت دارند استفاده کند. متابیس از [نام‌های نمایش](../../../docs/latest/data-modeling/metadata-editing.html) استفاده می‌کند که می‌توانند توسط مدیر متابیس شما به‌روزرسانی شوند، پس مرجع داده ممکن است با schema پایگاه داده شما مطابقت نداشته باشد. همچنین ممکن است یک ستون یا جدول در سمت پایگاه داده تغییر نام داده شده باشد، اما متابیس sync را برای دریافت به‌روزرسانی‌ها اجرا نکرده است.

**مطالعه بیشتر**

- [نحوه اجرای پرس‌وجوهای SQL توسط متابیس](../../../docs/latest/questions/native-editor/writing-sql.html#how-metabase-executes-sql-queries)
- [نحوه همگام‌سازی متابیس با پایگاه داده شما](../../../docs/latest/databases/sync-scan.html#how-database-syncs-work)
- [بهترین روش‌های SQL](../working-with-sql/sql-best-practices.html)

### تابع SQL وجود ندارد

اگر پرس‌وجوی SQL شما شامل متغیرهای SQL است که شبیه `{{ variable }}` به نظر می‌رسند، ابتدا به [عیب‌یابی متغیرهای SQL](../../../docs/latest/troubleshooting-guide/sql.html) بروید.

**مراحل**

- می‌توانید از [مرجع داده](../../../docs/latest/exploration-and-organization/data-model-reference.html) متابیس برای مرور نوع فیلد ستون (به عنوان یک پروکسی برای نوع داده) استفاده کنید.
- همچنین می‌توانید مستقیماً information schema را در پایگاه داده خود پرس‌وجو کنید اگر مجوز دسترسی به آن را دارید.
1. نوع داده ستونی که می‌خواهید تابع شما روی آن اعمال شود را مرور کنید.
- تأیید کنید که تابع برای گویش SQL شما وجود دارد.
- نوع(های) داده پذیرفته شده توسط تابع خود را مرور کنید.
2. بخش **تابع** [راهنمای مرجع](#common-sql-reference-guides) را برای گویش SQL خود مرور کنید.
- ستون خود را به نوع داده صحیح در پرس‌وجوی SQL خود cast کنید.
- اگر شما یک مدیر متابیس هستید، همچنین می‌توانید انواع داده را از صفحه [Table metadata](../../../docs/latest/data-modeling/metadata-editing.html) cast کنید.
3. اگر نوع فیلد ستون شما با نوع داده مورد انتظار تابع شما مطابقت ندارد:

**توضیح**

توابع SQL برای کار روی انواع داده خاص در پایگاه داده شما طراحی شده‌اند. به عنوان مثال، [تابع `DATE_TRUNC` در PostgresSQL](https://www.postgresql.org/docs/current/functions-datetime.html#FUNCTIONS-DATETIME-TRUNC) روی ستون‌هایی با داده تایپ شده `date`، `timestamp`، و `time` در یک پایگاه داده Postgres کار می‌کند. اگر سعی کنید از تابع `DATE_TRUNC` روی یک ستون با نوع داده `string` در پایگاه داده خود استفاده کنید، کار نمی‌کند.

توجه داشته باشید که [انواع فیلد](../../../glossary/field-type.html) متابیس یک به یک با انواع داده در پایگاه داده شما نیستند. در این مورد، نوع فیلد اطلاعات کافی درباره نوع داده ستون برای عیب‌یابی خطا به شما می‌دهد.

**مطالعه بیشتر**

- [نحوه اجرای پرس‌وجوهای SQL توسط متابیس](../../../docs/latest/questions/native-editor/writing-sql.html#how-metabase-executes-sql-queries)
- [مستندات انواع فیلد](../../../docs/latest/data-modeling/semantic-types.html)
- [بهترین روش‌های SQL](../working-with-sql/sql-best-practices.html)

## نحوه یافتن خط ناموفق در یک پرس‌وجوی SQL

اگر پرس‌وجوی SQL شما شامل متغیرهای SQL است که شبیه `{{ variable }}` به نظر می‌رسند، ابتدا به [عیب‌یابی متغیرهای SQL](../../../docs/latest/troubleshooting-guide/sql.html) بروید.

پس از یافتن خطی که در پرس‌وجوی SQL شما ناموفق است، به مراحل در [عیب‌یابی یک پرس‌وجوی SQL](#debugging-a-sql-query) بروید.

### خواندن پیام خطای SQL شما

آیا پیام خطای شما:

- خط یا موقعیت کاراکتر را به شما می‌گوید؟
- شامل یک نام جدول یا ستون است؟ اگر نام جدول یا ستون بیش از یک بار در پرس‌وجوی شما ظاهر می‌شود، [اندازه پرس‌وجوی خود را کاهش دهید](#reducing-the-size-of-a-sql-query).
- به یک بند SQL اشاره می‌کند؟

### کاهش اندازه یک پرس‌وجوی SQL

اگر پرس‌وجوی شما از:

- **زیرپرس‌وجوها** (پرس‌وجوهای تودرتو) استفاده می‌کند، هر زیرپرس‌وجو را به طور جداگانه اجرا کنید. با زیرپرس‌وجوهای داخلی شروع کنید و به سمت بیرون کار کنید.
- **CTEها** استفاده می‌کند، هر CTE را به طور جداگانه اجرا کنید. با CTE پایه خود شروع کنید و به سمت پایین پرس‌وجو کار کنید.
- **متغیرهای SQL که به مدل‌های متابیس اشاره می‌کنند** استفاده می‌کند، هر مدل را به طور جداگانه اجرا کنید. با باز کردن پنل متغیرها به مدل بروید، یا شماره ID مدل را از متغیر در نوار جستجوی متابیس وارد کنید.
- به خاطر داشته باشید [پیام خطای SQL را بخوانید](#reading-your-sql-error-message) همانطور که سعی می‌کنید مشکل را جدا کنید. برای اطلاعات بیشتر، به [عیب‌یابی SQL چگونه کار می‌کند؟](#how-does-sql-debugging-work) بروید.

**نکات برای کار در ویرایشگر SQL**

خطوط پرس‌وجوی SQL خود را برجسته کنید تا:

- خطوط را با `Cmd + Return` یا `Ctrl + Enter` اجرا کنید.
- خطوط را با `Cmd + /` یا `Ctrl + /` کامنت/کامنت‌زدایی کنید.

## نحوه فهمیدن کدام گویش SQL استفاده کنیم

گویش SQL بر اساس [پایگاه داده](../../../data-sources/index.html) که جداولی که می‌خواهید پرس‌وجو کنید را ذخیره می‌کند است. پس از فهمیدن کدام گویش SQL استفاده کنید، می‌توانید مراحل در [عیب‌یابی یک پرس‌وجوی SQL](#debugging-a-sql-query) را دنبال کنید.

برای فهمیدن کدام پایگاه داده پرس‌وجو می‌کنید:

- اگر شما یک مدیر متابیس هستید، به **Admin settings** > **Databases** بروید و در ستون **Engine** نگاه کنید.
- در غیر این صورت، از شخصی که متابیس شما را راه‌اندازی کرده بپرسید.

## آیا مشکل متفاوتی دارید؟

- [نتایج پرس‌وجوی من ردیف‌های تکراری دارند](sql-logic-duplicated-data.html).
- [نتایج پرس‌وجوی من ردیف‌های گم‌شده دارند](sql-logic-missing-data.html).
- [تجمیع‌های من (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند](sql-logic.html#aggregated-results-counts-sums-etc-are-wrong).
- [نتایج پرس‌وجوی من اشتباه هستند](sql-logic.html).
- [تاریخ‌ها و زمان‌های من اشتباه هستند](../../../docs/latest/troubleshooting-guide/timezones.html).
- [داده من به‌روز نیست](../../../docs/latest/troubleshooting-guide/sync-fingerprint-scan.html).
- [یک پیام خطا دارم که خاص پرس‌وجو یا نحو SQL من نیست](../../../docs/latest/troubleshooting-guide/error-message.html).

## آیا هنوز گیر کرده‌اید؟

جستجو کنید یا از [جامعه متابیس](https://discourse.metabase.com/search?q=sql%20error%20message) بپرسید.

[](sql-logic.html)
