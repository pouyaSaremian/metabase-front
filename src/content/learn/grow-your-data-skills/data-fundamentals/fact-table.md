---
title: "مهندسی تحلیلی برای جداول واقعیت"
description: "نحوه مدل‌سازی داده برای یک جدول واقعیت، بر اساس موارد استفاده تحلیلی واقعی."
redirect_from:
  - /learn/grow-your-data-skills/data-fundamentals/fact-table
  - /learn/metabase-basics/querying-and-dashboards/data-modeling/fact-table
toc:
  - id: "analytics-engineering-for-fact-tables"
    title: "مهندسی تحلیلی برای جداول واقعیت"
    level: 1
    href: "#analytics-engineering-for-fact-tables"
  - id: "introduction"
    title: "مقدمه"
    level: 2
    href: "#introduction"
  - id: "overview"
    title: "مرور"
    level: 2
    href: "#overview"
  - id: "how-to-follow-along-with-this-tutorial"
    title: "نحوه دنبال کردن این آموزش"
    level: 2
    href: "#how-to-follow-along-with-this-tutorial"
  - id: "designing-the-fact-table"
    title: "طراحی جدول واقعیت"
    level: 2
    href: "#designing-the-fact-table"
  - id: "a-basic-fact-schema"
    title: "یک schema واقعیت پایه"
    level: 3
    href: "#a-basic-fact-schema"
  - id: "a-better-fact-schema"
    title: "یک schema واقعیت بهتر"
    level: 3
    href: "#a-better-fact-schema"
  - id: "initializing-the-fact-table"
    title: "مقداردهی اولیه جدول واقعیت"
    level: 2
    href: "#initializing-the-fact-table"
  - id: "loading-the-fact-table-incrementally"
    title: "بارگذاری تدریجی جدول واقعیت"
    level: 2
    href: "#loading-the-fact-table-incrementally"
  - id: "testing-the-fact-table-with-common-use-cases"
    title: "تست جدول واقعیت با موارد استفاده رایج"
    level: 2
    href: "#testing-the-fact-table-with-common-use-cases"
  - id: "setting-up-metabase"
    title: "تنظیم متابیس"
    level: 3
    href: "#setting-up-metabase"
  - id: "new-accounts"
    title: "حساب‌های جدید"
    level: 3
    href: "#new-accounts"
  - id: "churned-accounts"
    title: "حساب‌های ریزش شده"
    level: 3
    href: "#churned-accounts"
  - id: "advanced-use-case-cohort-table"
    title: "مورد استفاده پیشرفته: جدول کوهورت"
    level: 3
    href: "#advanced-use-case-cohort-table"
  - id: "improving-fact-table-performance"
    title: "بهبود عملکرد جدول واقعیت"
    level: 2
    href: "#improving-fact-table-performance"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "مبانی پایگاه داده"
    href: "index.html"
---

# مهندسی تحلیلی برای جداول واقعیت

نحوه مدل‌سازی داده برای یک جدول واقعیت، بر اساس موارد استفاده تحلیلی واقعی.

هدف مدل‌سازی داده این است که بازیابی داده را *سریع* (برای موتوری که پرس‌وجوها را پردازش می‌کند)، و *آسان* (برای افرادی که آن پرس‌وجوها را می‌نویسند) کند.

بیشتر [روش‌های انبار داده](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html#organize-data-to-anticipate-common-questions) برای تأکید بر سرعت در نظر گرفته شده‌اند. **مهندسی تحلیلی** (اصطلاحی [محبوب شده توسط dbt](https://www.getdbt.com/what-is-analytics-engineering/#what-is-an-analytics-engineer)، و گاهی اوقات در اصطلاح **تحلیل تمام‌پشته** بسته‌بندی شده) فرآیند مدل‌سازی داده برای قابلیت استفاده است. حتی اگر این چیزی نیست که آن را می‌نامید، احتمالاً هر زمان که نیاز به کنار هم گذاشتن یک [مجموعه داده کیوری شده](../../metabase-basics/getting-started/models.html)، یک [بخش یا معیار](../../../docs/latest/data-modeling/metrics.html)، یا یک [داشبورد](../../metabase-basics/querying-and-dashboards/dashboards/bi-dashboard-best-practices.html) برای شخص دیگری دارید مهندسی تحلیلی را تمرین می‌کنید.

این آموزش به شما نشان می‌دهد چگونه یک رویکرد مهندسی تحلیلی را به یک مجموعه داده در سطح انبار داده اعمال کنید—و به طور خاص‌تر، به نوع خاصی از مجموعه داده به نام **جدول واقعیت**.

## مقدمه

**جداول بعد** شامل یک snapshot از داده در یک نقطه در زمان هستند، مثل تعداد لیوان‌های نیمه‌تمام که در پایان روز کاری خود دارید.

```
| time                | total mugs |
|---------------------|------------|
| 2022-08-16 17:30:00 | 3          |

```

**جداول واقعیت** شامل یک تاریخچه از اطلاعات هستند، مثل نرخی که در طول روز قهوه خود را نوشیده‌اید.

```
| time                | mug      | coffee remaining |
|---------------------|----------|------------------|
| 2022-08-16 08:00:00 | 1        | 100%             |
| 2022-08-16 08:01:00 | 1        | 0%               |
| 2022-08-16 09:00:00 | 2        | 100%             |
| 2022-08-16 12:00:00 | 3        | 100%             |
| 2022-08-16 12:30:00 | 3        | 99%              |
| 2022-08-16 17:30:00 | 3        | 98%              |

```

جداول واقعیت و بعد با هم در یک [star schema](../../../glossary/schema.html#star-schema) (یا [snowflake schema](https://en.wikipedia.org/wiki/Snowflake_schema) مرتبط نزدیک) برای سازماندهی اطلاعات در یک انبار داده استفاده می‌شوند.

ممکن است بخواهید یک جدول واقعیت بسازید اگر:

- منابع داده شما (سیستم‌هایی که داده تولید می‌کنند، مثل پایگاه داده اپلیکیشن شما) فقط یک snapshot فعلی از اطلاعات را با ذخیره آن روی snapshot قبلی ذخیره می‌کنند.
- یک [مجموعه داده برای تأمین انرژی تحلیل جاسازی شده](../analytics/embedding-mistakes.html) برای مشتریان خود ایجاد می‌کنید. جداول واقعیت مستقل برای تحلیل خودخدمت عالی هستند، چون می‌توانند [طیف وسیعی از موارد استفاده](#testing-the-fact-table-with-common-use-cases) را بدون تکیه بر joinها پوشش دهند.

اما قبل از شروع، بیایید یک لیوان کافئین دیگر به مجموع روزانه شما اضافه کنیم—چیزهای زیادی پیش رو داریم!

```
| time                | total mugs |
|---------------------|------------|
| CURRENT_TIMESTAMP() | n+1        |

```

## مرور

در این آموزش، با یک جدول بعد که آن را `account` می‌نامیم کار می‌کنیم، مثل یک جدول بعد که ممکن است از یک CRM دریافت کنید. فرض می‌کنیم این جدول بعد `account` وضعیت فعلی مشتریان ما را ذخیره می‌کند، با وضعیت فعلی که توسط اپلیکیشن ما به‌روزرسانی می‌شود.

جدول `account` چیزی شبیه این به نظر می‌رسد:

```
| id               | country     | type       | status    |
|------------------|-------------|------------|-----------|
| 941bfb1b2fdab087 | Croatia     | Agency     | Active    |
| dbb64fd5c56e7783 | Singapore   | Partner    | Active    |
| 67aae9a2e3dccb4b | Egypt       | Partner    | Inactive  |
| ced40b3838dd9f07 | Chile       | Advertiser | Test      |
| ab7a61d256fc8edd | New Zealand | Advertiser | Inactive  |

```

**[قسمت 1: طراحی جدول واقعیت](#designing-the-fact-table)**

برای طراحی یک schema جدول واقعیت بر اساس `account`، باید انواع سؤال‌های تحلیلی که مردم ممکن است درباره تغییرات حساب‌های مشتری در طول زمان بپرسند را در نظر بگیریم. از آنجایی که جدول `account` شامل یک فیلد `status` است، می‌توانیم به سؤال‌هایی مثل:

- [چند حساب جدید هر ماه اضافه شد؟](#new-accounts)
- [چند حساب ریزش کرد (غیرفعال شد) هر ماه؟](#churned-accounts)
- [نرخ ریزش بر اساس کوهورت مشتری چیست؟](#advanced-use-case-cohort-table)

پاسخ دهیم.

**[قسمت 2: پیاده‌سازی جدول واقعیت](#initializing-the-fact-table)**

برای ایجاد `fact_account` از داده ذخیره شده در `account`، یک اسکریپت SQL می‌نویسیم تا:

1. `fact_account` را با داده `account` امروز مقداردهی اولیه کنیم.
2. یک snapshot از ردیف‌ها در `account` دریافت کنیم (فرض می‌کنیم توسط سیستم دیگری به‌روزرسانی می‌شود).
3. snapshot `account` هر روز را با داده تاریخی در `fact_account` مقایسه کنیم.
4. یک ردیف جدید در `fact_account` برای هر حسابی که از snapshot روز قبل تغییر کرده است درج کنیم.

**[قسمت 3: تست جدول واقعیت با موارد استفاده رایج](#testing-the-fact-table-with-common-use-cases)**

برای بررسی اینکه آیا جدول واقعیت ما در عمل مفید است، آن را با متابیس تنظیم می‌کنیم و سعی می‌کنیم به هر سه سؤال تحلیلی نمونه خود پاسخ دهیم.

**[قسمت 4: بهبود عملکرد جدول واقعیت](#improving-fact-table-performance)**

آخرین بخش این آموزش به شما ایده‌ای می‌دهد که چگونه به نظر می‌رسد روی جدول واقعیت خود تکرار کنید همانطور که برای تطابق با تاریخچه بیشتر (و سؤال‌های بیشتر!) مقیاس می‌کند.

## نحوه دنبال کردن این آموزش

اگر می‌خواهید مراحل زیر را روی داده خود اعمال کنید، توصیه می‌کنیم با یک جدول بعد که به طور منظم توسط سیستم منبع شما به‌روزرسانی می‌شود، و یک پایگاه داده یا انبار داده از انتخاب خود کار کنید.

در این آموزش، از Firebolt برای تست [درایور شریک آن‌ها](https://github.com/firebolt-db/metabase-firebolt-driver) با متابیس استفاده می‌کنیم. Firebolt یک انبار داده است که از برخی [DDL SQL کمی تغییر یافته](https://docs.firebolt.io/sql-reference/commands/) برای بارگذاری داده در [فرمتی که برای سریع‌تر اجرا شدن پرس‌وجوها طراحی شده](https://docs.firebolt.io/architecture-overview.html#storage-layer) استفاده می‌کند.

اگر با داده خود دنبال می‌کنید، نحو SQL شما احتمالاً دقیقاً با کد نمونه مطابقت نخواهد داشت. برای اطلاعات بیشتر، می‌توانید [راهنماهای مرجع برای گویش‌های SQL رایج](../learn-sql/debugging-sql/sql-syntax.html) را بررسی کنید.

## طراحی جدول واقعیت

### یک schema واقعیت پایه

ابتدا، یک schema برای جدول واقعیت خود پیش‌نویس می‌کنیم، که آن را `fact_account` می‌نامیم. قرار دادن یک schema در یک مرجع بصری مثل جدول نشان داده شده در زیر می‌تواند اعتبارسنجی اینکه آیا `fact_account` از پرس‌وجوهایی که می‌خواهیم انجام دهیم پشتیبانی می‌کند (یعنی سؤال‌های تحلیلی که مردم می‌خواهند پاسخ دهند) را آسان‌تر کند. یک مرجع بصری همچنین به عنوان یک منبع مفید بعداً برای هر کسی که با `fact_account` جدید است دو برابر می‌شود.

در این مثال، می‌خواهیم همه ستون‌های اصلی از `account` را نگه داریم. اگر نیاز به حذف هر ستونی داریم، همیشه می‌توانیم آن ستون‌ها را از طریق [صفحه Data Model](../../../docs/latest/data-modeling/metadata-editing.html) در متابیس پنهان کنیم. پنهان کردن ستون‌ها در متابیس در مقایسه با حذف ستون‌های زیاد از schema در ابتدا کمتر مختل‌کننده است، چون باید schema را هر بار که نیاز به بازیابی ستون‌ها داریم دوباره تولید کنیم.

همچنین یک ستون جدید به نام `updated_at` شامل می‌کنیم تا timestamp که یک ردیف به جدول درج شد را نشان دهد. در عمل، `updated_at` می‌تواند برای تقریب تاریخ یا زمان که تغییری به یک حساب داده شد استفاده شود.

این افزودن بر اساس این فرض است که همه ویژگی‌های `account` می‌توانند تغییر کنند، به جز `id`. به عنوان مثال، وضعیت یک حساب معین می‌تواند از `Active` به `Inactive` تغییر کند، یا `Type` حساب از `Partner` به `Advertiser`.

**مثال schema پایه `fact_account`**

```
| Column name     | Data type | Description                                                  | Expected values                                   |
|-----------------|-----------|--------------------------------------------------------------|---------------------------------------------------|
| id              | varchar   | The unique id of a customer account.                         | 16 character string                               |
| status          | varchar   | The current status of the account.                           | Active, Inactive, or Test                         |
| country         | varchar   | The country where the customer is located.                   | Any of the "English short names" used by the ISO. |
| type            | varchar   | The type of account.                                         | Agency, Partner, or Advertiser                    |
| updated_at      | datetime  | The date a row was added to the table                        |                                                   |

```

### یک schema واقعیت بهتر

برای بررسی قابلیت استفاده schema، یک پرس‌وجوی شبه-SQL برای یکی از سؤال‌های تحلیلی خود می‌نویسیم:

```
-- How many new accounts have been added each month?

WITH new_account AS (
    SELECT
        id,
        MIN(updated_at) AS first_added_at -- Infer the account creation date
    FROM
        fact_account
    GROUP BY
        id
)
SELECT
    DATE_TRUNC('month', first_added_at) AS report_month,
    COUNT(DISTINCT id) AS new_accounts
FROM
    new_account
GROUP BY
    report_month;

```

schema فعلی `fact_account` نیاز به یک مرحله اضافی برای دریافت (یا تخمین) timestamp "ایجاد" برای هر حساب دارد (در این مورد، تخمین برای حساب‌هایی که از قبل *قبل* از شروع نگه داشتن تاریخچه فعال بودند ضروری است).

خیلی آسان‌تر خواهد بود به سؤال‌ها درباره "حساب‌های جدید" پاسخ دهیم اگر به سادگی یک ستون برای تاریخ ایجاد حساب به schema `fact_account` اضافه کنیم. اما افزودن ستون‌ها پیچیدگی جدول (زمانی که طول می‌کشد کسی آن را درک و پرس‌وجو کند) و همچنین پیچیدگی اسکریپت SQL (زمانی که طول می‌کشد جدول را به‌روزرسانی کند) را افزایش می‌دهد.

برای کمک به تصمیم‌گیری اینکه آیا ارزش دارد یک ستون به schema `fact_account` خود اضافه کنیم، در نظر می‌گیریم که آیا timestamp ایجاد می‌تواند برای انواع دیگر سؤال‌های تحلیلی درباره حساب‌ها استفاده شود.

timestamp ایجاد یک حساب همچنین می‌تواند برای محاسبه:

- سن یک حساب.
- زمان تا یک رویداد مهم (مثل تعداد روزهایی که طول می‌کشد یک حساب ریزش کند یا غیرفعال شود).

استفاده شود.

این معیارها می‌توانند به موارد استفاده جالبی مثل [کاهش ریزش مشتری](../analytics/push-and-pull.html) یا [محاسبه LTV](../learn-sql/working-with-sql/ltv-with-metabase.html) اعمال شوند، پس احتمالاً ارزش دارد در `fact_account` شامل شود.

ستون `is_first_record` را اضافه می‌کنیم تا schema خود را روان نگه داریم. این ستون ردیفی که با اولین ورودی یک حساب در جدول واقعیت مطابقت دارد را علامت می‌زند.

اگر برنامه دارید یک جدول واقعیت برای ساده‌سازی خودخدمت بسازید (به طوری که جدول واقعیت شامل اطلاعاتی باشد که معمولاً در یک جدول بعد ثبت می‌شود)، همچنین می‌توانید یک ستون برای `is_latest_record` اضافه کنید. این ستون به مردم کمک می‌کند `fact_account` را برای داده فعلی (علاوه بر داده تاریخی) فیلتر کنند، تا بتوانند از همان جدول برای پاسخ سریع به سؤال‌هایی مثل: "چند حساب فعال تا به امروز داریم؟" استفاده کنند.

استفاده از این قرارداد می‌تواند پرس‌وجوهای کندتری ایجاد کند اما پذیرش آسان‌تری هنگام راه‌اندازی خودخدمت برای اولین بار (تا مردم مجبور نباشند joinها بین جداول واقعیت و بعد را به خاطر بسپارند).

**یک schema بهتر `fact_account`**

```
| Column name     | Data type | Description                                                         | Expected values                                   |
|-----------------|-----------|---------------------------------------------------------------------|---------------------------------------------------|
| id              | varchar   | The unique id of a customer account.                                | 16 character string                               |
| status          | varchar   | The current status of the account.                                  | "Active", "Inactive", "Test", or "Trial"          |
| country         | varchar   | The country where the customer is located.                          | Any of the "English short names" used by the ISO. |
| type            | varchar   | The type of account.                                                | "Agency", "Partner", or "Advertiser"              |
| ...             | ...       | ...                                                                 |                                                   |
| updated_at      | datetime  | The date a row was added to the table                               |                                                   |
| is_first_record | boolean   | TRUE if this is the first record in the table for a given id        |                                                   |
| is_latest_record| boolean   | TRUE if this is the most current record in the table for a given id |                                                   |

```

## مقداردهی اولیه جدول واقعیت

برای پیاده‌سازی schema واقعیت، با ایجاد یک جدول خالی `fact_account` برای ذخیره snapshotهای جدول `account` در طول زمان شروع می‌کنیم.

با یک انبار داده Firebolt کار می‌کنیم، پس می‌خواهیم جدول واقعیت را از [کنسول Firebolt](https://app.firebolt.io/) ایجاد کنیم. **SQL Workspace** > **New Script** را انتخاب می‌کنیم، و می‌نویسیم:

```
-- Create an empty fact_account table in your data warehouse.

CREATE FACT TABLE IF NOT EXISTS fact_account
(
    id                  varchar
    status              varchar
    country             varchar
    type                varchar
    updated_at          timestamp
    is_first_record     boolean
    is_latest_record    boolean
);

```

توجه داشته باشید که DDL Firebolt شامل کلمه کلیدی `FACT` است (می‌تواند در DDL SQL استاندارد حذف شود).

اگر جداول واقعیت را در همان اسکریپت SQL که برای ingest داده استفاده می‌کنید ایجاد می‌کنید، می‌توانید [قالب‌های اسکریپت SQL کامنت‌گذاری شده](https://docs.firebolt.io/using-the-sql-workspace/using-the-sql-workspace.html#using-script-templates) از دکمه **Import Script** در سایدبار راست تاشو دنبال کنید.

بعد، `fact_account` را با همه چیزهایی که در جدول account فعلی است پر می‌کنیم. می‌توانید این عبارات را در همان اسکریپت SQL که جدول واقعیت را ایجاد می‌کند شامل کنید:

```
-- Put an initial snapshot of data from "account" into "fact_account".
-- Add "quality of life" columns to make the data model nicer to work with.

INSERT INTO fact_account (
    SELECT
        *,
        CURRENT_TIMESTAMP() AS updated_at,
        is_first_record = TRUE,
        is_latest_record = TRUE
    FROM
        account);

```

## بارگذاری تدریجی جدول واقعیت

برای به‌روزرسانی `fact_account` با snapshotهای منظم از `account`، یک اسکریپت SQL دیگر می‌نویسیم تا:

1. `account` را برای یک snapshot فعلی از داده پرس‌وجو کنیم.
2. داده فعلی را با آخرین داده به‌روزرسانی شده در `fact_account` مقایسه کنیم.
3. ردیف‌هایی در `fact_account` برای رکوردهایی که از آخرین snapshot تغییر کرده‌اند درج کنیم.

نیاز دارید این اسکریپت SQL را خارج از انبار داده خود ذخیره و برنامه‌ریزی کنید، با استفاده از ابزارهایی مثل [dbt](https://www.getdbt.com/) یا [Dataform](https://www.dataform.co/). برای اطلاعات بیشتر، بخش [تبدیل داده](../data-landscape/etl-landscape.html) از آموزش ETL، ELT، و Reverse ETLها در Learn را بررسی کنید.

```
-- Add the latest snapshot from the account table.
-- This assumes that account is regularly updated from the source system.

INSERT INTO fact_account
SELECT
    *,
    is_first_record = TRUE
FROM
    account
WHERE
    id = id
    AND CURRENT_TIMESTAMP() <> updated_at ();

-- Update the rows from the previous snapshot, if applicable.

WITH previous_snapshot AS (
    SELECT
        id,
        ROW_NUMBER() OVER (PARTITION BY id ORDER BY updated_at DESC) AS row_number
    FROM
        fact_account
    WHERE
        is_first_record = TRUE)
UPDATE
    fact_account fa
SET
    is_latest_record = FALSE
FROM
    previous_snapshot ps
WHERE
    ps.row_number = 2;

```

## تست جدول واقعیت با موارد استفاده رایج

در اینجا نحوه به نظر رسیدن `fact_account` پس از شروع پر شدن با snapshotهای روزانه از `account`:

```
| id               | country   | type       | status    | updated_at          | is_first_record | is_latest_record |
|------------------|-----------|------------|-----------|---------------------|-----------------|------------------|
| 941bfb1b2fdab087 | Croatia   | Agency     | Active    | 2022-02-04 09:02:09 | TRUE            | FALSE            |
| 941bfb1b2fdab087 | Croatia   | Partner    | Active    | 2022-07-10 14:46:04 | FALSE           | TRUE             |
| dbb64fd5c56e7783 | Singapore | Partner    | Active    | 2022-05-10 02:42:07 | TRUE            | FALSE            |
| dbb64fd5c56e7783 | Singapore | Partner    | Inactive  | 2022-07-14 14:46:04 | FALSE           | TRUE             |
| ced40b3838dd9f07 | Chile     | Advertiser | Test      | 2022-07-02 06:22:34 | TRUE            | TRUE             |

```

حالا، می‌توانیم جدول واقعیت خود را در متابیس قرار دهیم تا ببینیم چگونه در پاسخ به سؤال‌های تحلیلی نمونه خود عمل می‌کند:

- [چند حساب جدید هر ماه اضافه شد؟](#new-accounts)
- [چند حساب ریزش کرد (غیرفعال شد) هر ماه؟](#churned-accounts)
- [نرخ ریزش بر اساس کوهورت مشتری چیست؟](#advanced-use-case-cohort-table)

### تنظیم متابیس

اگر پایگاه داده خود را از قبل با متابیس تنظیم نکرده‌اید، می‌توانید همه چیز را در چند دقیقه تنظیم کنید:

1. [دانلود و نصب متابیس](../../../docs/latest/installation-and-operation/installing-metabase.html)، یا برای [آزمایش رایگان متابیس Cloud](https://store.metabase.com/) ثبت‌نام کنید.
2. [پایگاه داده را اضافه کنید](../../../docs/latest/databases/connecting.html#adding-a-database-connection) با جدول واقعیت خود. > اگر با استفاده از Firebolt این آموزش را دنبال می‌کنید، به نام کاربری و رمز عبوری که برای ورود به [کنسول Firebolt](https://app.firebolt.io/) استفاده می‌کنید، و همچنین نام پایگاه داده (فهرست شده در صفحه اصلی کنسول) نیاز دارید.
3. از بالا سمت راست صفحه اصلی متابیس، **New** > **Question** را کلیک کنید.

### حساب‌های جدید

بگویید می‌خواهیم تعداد کل حساب‌های جدیدی که ماه گذشته اضافه شدند را بدانیم.

این نوع نتیجه با موارد استفاده خودخدمت مثل:

- یک [تجسم "عدد استاتیک"](../../../docs/latest/questions/visualizations/visualizing-results.html#numbers).
- یک تجسم [نوار پیشرفت](../../../docs/latest/questions/visualizations/visualizing-results.html#progress-bars) برای اندازه‌گیری حساب‌های جدید ماه گذشته در مقابل یک عدد هدف.

کار می‌کند.

مردم می‌توانند یک معیار مثل "حساب‌های جدید اضافه شده در ماه گذشته" را از [query builder](../../metabase-basics/getting-started/ask-a-question.html) متابیس با استفاده از این مراحل خودخدمت کنند:

1. به **New** > **Question** بروید.
2. `fact_account` را به عنوان داده شروع انتخاب کنید.
3. از **Pick the metric you want to see**، **Number of distinct values of** > **ID** را انتخاب کنید.
4. از دکمه **Filter**، **Is First Record** را کلیک کنید و "Is" (تنظیم پیش‌فرض) را با مقدار "True" انتخاب کنید.
5. از دکمه **Filter**، **Status** را کلیک کنید و "Is Not" را با مقدار "Test" انتخاب کنید.
6. **Last Updated At** را کلیک کنید و "Last Month" را انتخاب کنید.

یا می‌توانند همان مقدار را از هر SQL IDE (شامل [ویرایشگر SQL](../../../glossary/native-query-editor.html) متابیس) با استفاده از یک snippet مثل این خودخدمت کنند:

```
SELECT
    COUNT(DISTINCT id) AS new_accounts
FROM
    fact_account
WHERE
    is_first_record = TRUE
    AND status <> "Test"
    AND DATE_TRUNC('month', updated_at) = DATE_TRUNC('month', CURRENT_TIMESTAMP) - INTERVAL '1 MONTH';

```

### حساب‌های ریزش شده

علاوه بر حساب‌های جدیدی که به کسب‌وکار ما اضافه می‌شوند، همچنین می‌خواهیم حساب‌های ریزش شده که از دست رفته‌اند را ردیابی کنیم. این بار، به جای محدود کردن نتایج به داده ماه گذشته، یک جدول خلاصه ماهانه مثل این دریافت می‌کنیم:

```
| report_month | churned_accounts |
|--------------|------------------|
| 2022-05-01   | 23               |
| 2022-06-01   | 21               |
| 2022-07-01   | 16               |

```

این نوع نتیجه می‌تواند به مردم کمک کند خودخدمت:

- یک [نمودار میله‌ای](../../metabase-basics/querying-and-dashboards/visualization/bar-charts.html) یا [خطی](../../metabase-basics/querying-and-dashboards/visualization/line-charts.html) برای رسم تغییر در `churned_accounts` برای هر `report_month`.
- یک [تجسم "روند"](../../../docs/latest/questions/visualizations/visualizing-results.html#trends) برای نشان دادن تغییر درصد در تعداد حساب‌های ریزش شده، ماه به ماه.
- یک [سؤال ذخیره شده یا مدل](../../../docs/latest/questions/native-editor/referencing-saved-questions-in-queries.html) که می‌تواند به جداول دیگر روی `report_month` join شود. این به مردم امکان استفاده از ستون `churned_accounts` در [محاسبات با ستون‌های دیگر](../../metabase-basics/querying-and-dashboards/questions/custom-expressions.html) که در `fact_account` پیدا نمی‌شوند را می‌دهد.

مردم می‌توانند جدول خلاصه "حساب‌های ریزش شده ماهانه" را از [query builder](../../metabase-basics/getting-started/ask-a-question.html) متابیس با دنبال کردن این مراحل خودخدمت کنند:

1. به **New** > **Question** بروید.
2. `fact_account` را به عنوان داده شروع انتخاب کنید.
3. از **Pick the metric you want to see**، **Number of distinct values of** > **ID** را انتخاب کنید.
4. از **Pick a column to group by**، **Updated At: Month** را انتخاب کنید.
5. دکمه **Filter** را کلیک کنید.
6. **Status** را کلیک کنید و **True** را انتخاب کنید.

همچنین می‌توانند نتایج را از هر SQL IDE (شامل [ویرایشگر SQL](../../../glossary/native-query-editor.html) متابیس) با استفاده از یک پرس‌وجو مثل این دریافت کنند:

```
SELECT
    DATE_TRUNC('month', updated_at) AS report_month,
    COUNT(DISTINCT id) AS churned_accounts
FROM
    fact_account
WHERE
    status = 'inactive';

```

### مورد استفاده پیشرفته: جدول کوهورت

یک جدول کوهورت یکی از پیچیده‌ترین موارد استفاده است که می‌تواند توسط یک جدول واقعیت به خوبی طراحی شده تأمین انرژی شود. این جداول [نرخ ریزش](../learn-sql/working-with-sql/ltv-with-metabase.html) را به عنوان تابعی از سن حساب اندازه‌گیری می‌کنند، و می‌توانند برای شناسایی گروه‌هایی از مشتریان که به خصوص موفق یا ناموفق هستند استفاده شوند.

می‌خواهیم نتیجه‌ای مثل این دریافت کنیم:

```
| age | churned_accounts | total_accounts | churn_rate |
| --- | ---------------- | -------------- | ---------- |
| 1   | 21               | 436            | = 21 / 436 |
| 2   | 26               | 470            | = 26 / 470 |
| 3   | 18               | 506            | = 18 / 506 |

```

از آنجایی که این یک مورد استفاده پیشرفته است، روی نشان دادن نحوه تغییر "شکل" جدول `fact_account` به یک جدول کوهورت تمرکز می‌کنیم. این مراحل می‌توانند در متابیس با ایجاد یک سری سؤال‌های SQL ذخیره شده که بر اساس یکدیگر ساخته می‌شوند انجام شوند.

1. یک سؤال ذخیره شده ایجاد کنید که `first_added_month` و `churned_month` را برای هر حساب دریافت می‌کند: **نتیجه نمونه** ``` | id | first_added_month | churned_month | | ---------------- | ----------------- | ------------- | | 941bfb1b2fdab087 | 2022-02-01 | null | | dbb64fd5c56e7783 | 2022-05-01 | 2022-07-01 | | 67aae9a2e3dccb4b | 2022-07-01 | null | ``` **Snippet** ``` SELECT id, CASE WHEN is_first_record = TRUE THEN DATE_TRUNC('month', updated_at) END AS first_added_month, CASE WHEN status = 'inactive' THEN DATE_TRUNC('month', updated_at) ELSE NULL END AS churned_month FROM fact_account; ```
2. سؤال ذخیره شده از مرحله 1 را به یک ستون که یک ردیف به ازای هر ماه دارد join کنید. می‌توانید این کار را در SQL با تولید یک سری انجام دهید (یا ممکن است بتوانید از یک جدول موجود در انبار داده خود استفاده کنید). به شرایط join روی ماه‌ها توجه داشته باشید. **نتیجه نمونه** ``` | id | first_added_month | churned_month | report_month | age | is_churned | |------------------|-------------------|---------------|--------------|-----|------------| | dbb64fd5c56e7783 | 2022-05-01 | 2022-07-01 | 2022-05-01 | 1 | FALSE | | dbb64fd5c56e7783 | 2022-05-01 | 2022-07-01 | 2022-06-01 | 2 | FALSE | | dbb64fd5c56e7783 | 2022-05-01 | 2022-07-01 | 2022-07-01 | 3 | TRUE | ``` **Snippet** ``` WITH date_series AS ( SELECT * FROM GENERATE_SERIES('2022-01-01'::date, '2022-12-31'::date, '1 month'::interval) report_month ) SELECT *, age, CASE WHEN s.churned_month = d.report_month THEN TRUE ELSE FALSE END AS is_churned FROM step_1 s FULL JOIN date_series d ON d.report_month >= s.first_added_month AND (d.report_month <= s.churned_month OR d.report_month <= CURRENT_TIMESTAMP::date); ```
3. نتیجه شما از مرحله 2 حالا می‌تواند از query builder به نتیجه نهایی تجمیع شود (می‌توانید نرخ ریزش را با استفاده از یک ستون سفارشی محاسبه کنید). **نتیجه نمونه** ``` | age | churned_accounts | total_accounts | churn_rate | | --- | ---------------- | -------------- | ---------- | | 1 | 21 | 436 | = 21 / 436 | | 2 | 26 | 470 | = 26 / 470 | | 3 | 18 | 506 | = 18 / 506 | ``` **Snippet** ``` SELECT age, COUNT(DISTINCT CASE WHEN is_churned = TRUE THEN id END) AS churned_accounts, COUNT(DISTINCT CASE WHEN is_churned = FALSE THEN id END) AS total_accounts, churned_accounts / total_accounts AS churn_rate FROM step_2 GROUP BY age; ```

## بهبود عملکرد جدول واقعیت

پس از اینکه یک جدول واقعیت کار در تولید داریم، می‌خواهیم به نحوه مقیاس آن توجه کنیم همانطور که:

- جدول با تاریخچه بیشتر به‌روزرسانی می‌شود.
- افراد بیشتری شروع به اجرای پرس‌وجوها در برابر جدول به صورت موازی می‌کنند.

بگویید منطق ریزش خیلی محبوب می‌شود، به طوری که `fact_account` ما یک وابستگی (و گلوگاه) برای بسیاری از داشبوردها و تجمیع‌های downstream می‌شود.

برای بهبود عملکرد پرس‌وجوها در برابر جدول واقعیت، می‌خواهیم تجمیع‌ها را در برابر ستون‌هایی که بیشترین استفاده را در محاسبات ریزش دارند از پیش محاسبه کنیم.

چند راه برای انجام این کار در پایگاه‌های داده SQL وجود دارد:

- [ایندکس‌ها اضافه کنید](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html#index-frequently-queried-columns) به ستون‌هایی که بیشترین استفاده را در عبارات `GROUP BY` دارند.
- [viewها ایجاد کنید](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html#aggregate-data-ahead-of-time-with-summary-tables) از داده خلاصه شده (از پیش تجمیع شده).

در انبار داده Firebolt ما، می‌توانیم هر دو این بهینه‌سازی‌ها را با استفاده از [ایندکس‌های تجمیع](https://www.firebolt.io/blog/simplicity-and-power-of-agg-indexes-at-scale) ترکیب کنیم. تعریف ایندکس‌های تجمیع به موتور Firebolt می‌گوید جداول اضافی (زیر هود) ایجاد کند که باید به جای جدول واقعیت اصلی ارجاع داده شوند وقتی یک پرس‌وجوی SQL درخواست اعمال یک تجمیع خاص روی یک ستون معین می‌کند.

ایندکس‌های تجمیع همچنین می‌توانند در اسکریپت SQL که برای مقداردهی اولیه و بارگذاری جدول واقعیت استفاده می‌کنید شامل شوند (اما انتخاب ایندکس‌های *درست* پس از اینکه فرصت مشاهده نحوه استفاده مردم از جدول در عمل را داشته‌اید آسان‌تر است).

در اینجا یک مثال از یک ایندکس تجمیع Firebolt که به سرعت بخشیدن به شمارش حساب‌های ریزش شده تجمعی و فعلی در دوره‌های گزارش مختلف کمک می‌کند:

```
CREATE AGGREGATING INDEX IF NOT EXISTS churned_accounts ON fact_account
(
    updated_at,
    DATE_TRUNC('day', updated_at),
    DATE_TRUNC('week', updated_at),
    DATE_TRUNC('month', updated_at),
    DATE_TRUNC('quarter', updated_at),
    COUNT(DISTINCT CASE WHEN status = 'inactive' then id end),
    COUNT(DISTINCT CASE WHEN status = 'inactive' AND is_latest_record = TRUE then id end)
);

```

## مطالعه بیشتر

بیشتر درباره مدل‌سازی داده، انبار داده، و کار با SQL یاد بگیرید:

- [مدل‌ها در متابیس](../../metabase-basics/getting-started/models.html)
- [اشتباهات رایج مدل داده انجام شده توسط استارتاپ‌ها](../analytics/data-model-mistakes.html)
- [بهترین روش‌ها برای انبار داده](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html#organize-data-to-anticipate-common-questions)
- [کدام انبار داده باید استفاده کنید؟](../data-landscape/which-data-warehouse.html)
- [کار با SQL](../learn-sql/working-with-sql.html)

[](dimensions-and-measures.html)
[](normalization.html)
