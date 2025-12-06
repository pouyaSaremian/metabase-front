---
title: "عیب‌یابی منطق پرس‌وجوی SQL"
description: "چه کاری انجام دهید وقتی پرس‌وجوی شما داده‌هایی که اشتباه به نظر می‌رسند برمی‌گرداند."
redirect_from:
  - /learn/sql/debugging-sql/sql-logic
  - /learn/debugging-sql/sql-logic
  - /learn/grow-your-data-skills/learn-sql/debugging-sql/sql-logic
toc:
  - id: "debugging-sql-query-logic"
    title: "عیب‌یابی منطق پرس‌وجوی SQL"
    level: 1
    href: "#debugging-sql-query-logic"
  - id: "debugging-steps"
    title: "مراحل عیب‌یابی"
    level: 2
    href: "#debugging-steps"
  - id: "common-reasons-for-unexpected-query-results"
    title: "دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره"
    level: 2
    href: "#common-reasons-for-unexpected-query-results"
  - id: "common-sql-logic-problems"
    title: "مشکلات رایج منطق SQL"
    level: 2
    href: "#common-sql-logic-problems"
  - id: "aggregated-results-counts-sums-etc-are-wrong"
    title: "نتایج تجمیع شده (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند"
    level: 3
    href: "#aggregated-results-counts-sums-etc-are-wrong"
  - id: "how-to-identify-a-nested-query"
    title: "نحوه شناسایی یک پرس‌وجوی تودرتو"
    level: 2
    href: "#how-to-identify-a-nested-query"
  - id: "how-to-get-the-schema-for-a-nested-query"
    title: "نحوه دریافت schema برای یک پرس‌وجوی تودرتو"
    level: 2
    href: "#how-to-get-the-schema-for-a-nested-query"
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

# عیب‌یابی منطق پرس‌وجوی SQL

چه کاری انجام دهید وقتی پرس‌وجوی شما داده‌هایی که اشتباه به نظر می‌رسند برمی‌گرداند.

ترکیب داده می‌تواند خیلی سریع پیچیده شود (احتمالاً به همین دلیل است که صبورانه SQL می‌نویسید به جای استفاده از [query builder](../../metabase-basics/querying-and-dashboards/questions/multi-aggregation.html) دوستانه). این راهنمای عیب‌یابی توضیح می‌دهد چه کاری می‌توانید انجام دهید وقتی پرس‌وجوی شما نتایج غیرمنتظره برمی‌گرداند.

## مراحل عیب‌یابی

- اگر از جداول پایگاه داده خود استفاده می‌کنید، schemaها را از [مرجع داده](../../../docs/latest/exploration-and-organization/data-model-reference.html) دریافت کنید.
- اگر از پرس‌وجوهای تودرتو مثل زیرپرس‌وجوها، CTEها، سؤال‌های ذخیره شده، یا مدل‌ها استفاده می‌کنید، باید هر پرس‌وجوی تودرتو را به طور جداگانه اجرا کنید و [نتایج را به صورت دستی بررسی کنید](#how-to-get-the-schema-for-a-nested-query).
- [نمی‌دانم آیا از یک پرس‌وجوی تودرتو استفاده می‌کنم](#how-to-identify-a-nested-query).
1. Schemaها را برای منابع داده استفاده شده در پرس‌وجوی خود دریافت کنید.
- آیا بیش از یک کلید خارجی ممکن وجود دارد؟
- آیا کلیدهای خارجی تغییر نام داده‌اند یا به schema دیگری منتقل شده‌اند؟
- اگر مطمئن نیستید، از شخصی که schema را نگهداری می‌کند بپرسید.
2. کلیدهای خارجی جداول یا پرس‌وجوهای تودرتو خود را مرور کنید.
3. برای [مشکلات رایج منطق SQL](#common-sql-logic-problems) بررسی کنید.

## دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره

منطق SQL نحوه ترکیب داده از جداول یا منابع داده مختلف (شامل جداول موقت، مثل نتایج پرس‌وجوهای دیگر) را توصیف می‌کند. رایج‌ترین راه‌های ترکیب داده joinها و [پرس‌وجوهای تودرتو](#how-to-identify-a-nested-query) هستند.

حتی اگر منطق SQL شما *قبلاً* کار می‌کرد، می‌تواند زمانی که:

- جداول یا منابع داده تغییر کرده‌اند.
- پرس‌وجوهای تودرتو تغییر کرده‌اند (اگر بر اساس یک [سؤال ذخیره شده یا مدل](../../../docs/latest/questions/native-editor/referencing-saved-questions-in-queries.html) می‌سازید).
- پرس‌وجوهای تودرتو شما همانطور که انتظار دارید محاسبه نمی‌شوند (اگر آن‌ها را از ابتدا نوشته‌اید).
- داده شما شامل موارد لبه، مثل مقادیر خالی یا `NULL` است.

خراب شود.

بیشتر اوقات، این تغییرات به صورت upstream توسط سیستم‌هایی که داده شما را جمع‌آوری می‌کنند، یا افرادی که پایگاه‌های داده و ابزارهای BI شما را مدیریت می‌کنند معرفی می‌شوند.

برای تیم‌ها پیش‌بینی اثرات موجی از چنین تغییراتی بسیار دشوار است. رفع منطق SQL نه تنها درباره پاسخ به تغییر است، بلکه به‌روزرسانی رویکرد شما برای محافظت بهتر در برابر به‌روزرسانی‌های آینده است.

اگر یک پیام خطای قرمز دریافت می‌کنید که به بندهای SQL یا نام جدول و ستون اشاره می‌کند، به احتمال زیاد مشکل نحو SQL دارید. به جای آن به [عیب‌یابی نحو SQL](sql-syntax.html) بروید.

## مشکلات رایج منطق SQL

- [نتیجه من داده تکراری دارد](sql-logic-duplicated-data.html).
- [نتیجه من داده گم‌شده دارد](sql-logic-missing-data.html).
- [تجمیع‌های من (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند](#aggregated-results-counts-sums-etc-are-wrong).

### نتایج تجمیع شده (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند

- خیلی بالا، بررسی کنید که آیا جداول یا پرس‌وجوهای منبع شما [ردیف‌های تکراری](sql-logic-duplicated-data.html) دارند.
- خیلی پایین، بررسی کنید که آیا جداول یا پرس‌وجوهای منبع شما [ردیف‌های گم‌شده](sql-logic-missing-data.html) دارند.
1. اگر تجمیع‌های شما:
- چگونه ردیف‌های خالی یا `NULL` را در تجمیع‌های خود مدیریت می‌کنید؟
- چگونه رکوردهای نامعتبر، لغو شده یا منقضی شده را مدیریت می‌کنید؟ از مدیر متابیس یا تیم داده خود درباره منطق تجاری که ممکن است از آن اطلاع نداشته باشید بپرسید.
2. جداول یا پرس‌وجوهای منبع خود را برای فیلترها بررسی کنید.
- به عنوان مثال، اعمال `SUM` روی `COUNT_DISTINCT` ممکن است مقادیر منحصر به فرد را دو بار بشمارد.
3. اگر با `COUNT_DISTINCT` کار می‌کنید، بررسی کنید که آیا با توابع تجمیع دیگر تعامل دارد.
4. اگر با داده سری زمانی کار می‌کنید، [منطقه زمانی خود را بررسی کنید](../../../docs/latest/troubleshooting-guide/timezones.html).
5. اگر داده شما طبق برنامه به‌روز می‌شود، از مدیر متابیس خود بپرسید [آیا جداول شما به‌روز هستند](../../../docs/latest/troubleshooting-guide/sync-fingerprint-scan.html).

**توضیح**

تجمیع‌ها اغلب اولین جایی هستند که یک مشکل ناشی از یکی از [دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره](#common-reasons-for-unexpected-query-results) را تشخیص می‌دهید. مراحل بالا به شما کمک می‌کند هر مورد لبه داده که ممکن است نتایج شما را کج کند را بگیرید. اگر موارد لبه زیادی پیدا کردید، و انتظار دارید همان موارد را بارها و بارها مدیریت کنید، ممکن است بخواهید همه آن منطق را در یک [مدل](../../metabase-basics/getting-started/models.html) بسته‌بندی کنید تا به راحتی قابل استفاده مجدد باشد.

گاهی اوقات، ممکن است فقط به یک جفت چشم تازه نیاز داشته باشید. اگر نمی‌توانید علت اصلی را با استفاده از مراحل بالا پیدا کنید، از یک هم‌تیمی بخواهید به شما کمک کند ریاضیات خود را بررسی کنید!

**مطالعه بیشتر**

- [نحوه اجرای پرس‌وجوهای SQL توسط متابیس](../../../docs/latest/questions/native-editor/writing-sql.html#how-metabase-executes-sql-queries)

## نحوه شناسایی یک پرس‌وجوی تودرتو

اگر SQL شما شامل:

- **بیش از یک عبارت `SELECT`** است، از زیرپرس‌وجوها استفاده می‌کنید.
- **یک بند `WITH`** است، از CTEها (عبارات جدول مشترک) استفاده می‌کنید.
- **نمادی که شبیه `{{ variable }}` در بند `FROM` یا `WITH` شما به نظر می‌رسد** است، یک [متغیر SQL](../../../glossary/variable.html#example-variable-in-metabase) دارید که به یک [سؤال ذخیره شده یا مدل](../../../docs/latest/questions/native-editor/referencing-saved-questions-in-queries.html) ارجاع می‌دهد.

## نحوه دریافت schema برای یک پرس‌وجوی تودرتو

- برای **زیرپرس‌وجوها** یا **CTEها**، [هر بلوک `SELECT` را به طور جداگانه اجرا کنید](../../../docs/latest/questions/native-editor/writing-sql.html#running-query-selections) و از بند `LIMIT` استفاده کنید.
- برای **سؤال‌های ذخیره شده یا مدل‌ها**، به سؤال متابیس زیرین از پنل متغیرها یا با چسباندن شماره ID در نوار جستجو بروید. با استفاده از query builder یک محدودیت ردیف اضافه کنید، یا یک بند `LIMIT` در ویرایشگر SQL اضافه کنید.
1. نمونه‌ای از داده از پرس‌وجوی تودرتو خود دریافت کنید.
- در [پایگاه داده نمونه متابیس](../../../glossary/sample-database.html)، جدول `Products` یک ستون `ID` دارد، و جدول `Orders` یک ستون `Product ID` دارد.
- `ID` و `Product ID` هر دو شامل مقادیر عدد صحیح هستند، و بسیاری از آن مقادیر در هر دو ستون ظاهر می‌شوند.
2. نام ستون‌ها و مقادیر را بین نمونه‌های خود مقایسه کنید تا کلیدهای خارجی را بررسی کنید. به عنوان مثال:
- جدول `Products` مقادیر منحصر به فرد در ستون `ID` دارد.
- جدول `Orders` چندین ردیف با همان `Product ID` دارد.
- رابطه جدول از `Products` به `Orders` [یک به چند](../../grow-your-data-skills/data-fundamentals/table-relationships.html#one-to-many-relationship) است (فرض می‌کنیم که رابطه کلید خارجی معتبر است).
3. ردیف‌ها را بین نمونه‌های خود مقایسه کنید تا [رابطه‌های جدول](../../grow-your-data-skills/data-fundamentals/table-relationships.html) را بررسی کنید. به عنوان مثال:
4. اگر از یک [مدل](../../../docs/latest/data-modeling/models.html#database-column-this-maps-to) استفاده می‌کنید، می‌توانید با hover کردن روی نام ستون به دنبال متادیتای به صراحت تعریف شده بگردید.
5. اگر بر اساس کار شخص دیگری می‌سازید، از سازنده اصلی پرس‌وجو، سؤال ذخیره شده، یا مدل بپرسید.

**توضیح**

یک schema ستون‌ها در یک جدول، انواع داده آن ستون‌ها، و روابط بین ستون‌ها در جداول مختلف را توصیف می‌کند. این متادیتا معمولاً به صراحت برای جداول ذخیره شده در پایگاه داده شما توسط افرادی که داده شما را مدیریت می‌کنند تعریف می‌شود.

از آنجایی که نتایج پرس‌وجوهای تودرتو فقط به طور موقت ذخیره می‌شوند، متادیتا درباره نتایج در هیچ جا تعریف یا ذخیره نمی‌شود. مراحل بالا به شما کمک می‌کند به جای آن نتایج پرس‌وجو را به صورت دستی بررسی کنید.

پس از اینکه schemaها را برای پرس‌وجوهای تودرتو خود دارید، می‌توانید [مراحل عیب‌یابی](#debugging-steps) را دنبال کنید.

**مطالعه بیشتر**

- [نحوه شناسایی یک پرس‌وجوی تودرتو](#how-to-identify-a-nested-query)
- [Schema چیست؟](../../../glossary/schema.html)
- [رابطه‌های جدول پایگاه داده](../../grow-your-data-skills/data-fundamentals/table-relationships.html)
- [نحوه اجرای پرس‌وجوهای SQL توسط متابیس](../../../docs/latest/questions/native-editor/writing-sql.html#how-metabase-executes-sql-queries)

## آیا مشکل متفاوتی دارید؟

- [تاریخ‌ها و زمان‌های من اشتباه هستند](../../../docs/latest/troubleshooting-guide/timezones.html).
- [داده من به‌روز نیست](../../../docs/latest/troubleshooting-guide/sync-fingerprint-scan.html).
- [یک خطای نحو SQL دارم](sql-syntax.html).
- [یک پیام خطا دارم که خاص پرس‌وجو یا نحو SQL من نیست](../../../docs/latest/troubleshooting-guide/error-message.html).

## آیا هنوز گیر کرده‌اید؟

جستجو کنید یا از [جامعه متابیس](https://discourse.metabase.com/) بپرسید.

[](sql-syntax.html)
[](sql-logic-duplicated-data.html)
