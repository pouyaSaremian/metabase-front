---
title: "نحوه محاسبه ارزش طول عمر مشتری (LTV) با SQL"
description: "یادگیری نحوه استفاده از SQL برای محاسبه ارزش طول عمر مشتری در متابیس."
redirect_from:
  - /learn/sql/working-with-sql/ltv-with-metabase
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/ltv-with-metabase
toc:
  - id: "how-to-calculate-customer-lifetime-value-ltv-with-sql"
    title: "نحوه محاسبه ارزش طول عمر مشتری (LTV) با SQL"
    level: 1
    href: "#how-to-calculate-customer-lifetime-value-ltv-with-sql"
  - id: "basic-ltv-formula"
    title: "فرمول پایه LTV"
    level: 2
    href: "#basic-ltv-formula"
  - id: "build-on-existing-metabase-questions"
    title: "ساخت بر اساس سؤال‌های موجود متابیس"
    level: 3
    href: "#build-on-existing-metabase-questions"
  - id: "what-we-re-working-toward-ltv-table"
    title: "آنچه به سمت آن کار می‌کنیم: جدول LTV"
    level: 2
    href: "#what-we-re-working-toward-ltv-table"
  - id: "what-your-data-looks-like"
    title: "داده شما چگونه به نظر می‌رسد"
    level: 2
    href: "#what-your-data-looks-like"
  - id: "invoices"
    title: "فاکتورها"
    level: 3
    href: "#invoices"
  - id: "subscriptions"
    title: "اشتراک‌ها"
    level: 3
    href: "#subscriptions"
  - id: "revenue-changes"
    title: "تغییرات درآمد"
    level: 3
    href: "#revenue-changes"
  - id: "step-1-calculate-your-pre-ltv-metrics"
    title: "مرحله 1: محاسبه معیارهای پیش از LTV شما"
    level: 2
    href: "#step-1-calculate-your-pre-ltv-metrics"
  - id: "monthly-recurring-revenue-mrr"
    title: "درآمد مکرر ماهانه (MRR)"
    level: 3
    href: "#monthly-recurring-revenue-mrr"
  - id: "average-revenue-per-customer-aprc"
    title: "میانگین درآمد به ازای هر مشتری (APRC)"
    level: 3
    href: "#average-revenue-per-customer-aprc"
  - id: "subscription-churn-rate"
    title: "نرخ ریزش اشتراک"
    level: 3
    href: "#subscription-churn-rate"
  - id: "step-2-sql-query-for-ltv"
    title: "مرحله 2: پرس‌وجوی SQL برای LTV"
    level: 2
    href: "#step-2-sql-query-for-ltv"
  - id: "step-3-visualizing-your-ltv"
    title: "مرحله 3: تجسم LTV شما"
    level: 2
    href: "#step-3-visualizing-your-ltv"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "کار با SQL"
    href: "index.html"
---

# نحوه محاسبه ارزش طول عمر مشتری (LTV) با SQL

یادگیری نحوه استفاده از SQL برای محاسبه ارزش طول عمر مشتری در متابیس.

در [مقدمه ما درباره ارزش طول عمر مشتری](../../../blog/calculating-ltv.html)، درباره جایی که برخی شرکت‌ها با معیار اشتباه می‌کنند بحث کردیم و راهنمایی درباره استفاده از LTV ارائه دادیم. این راهنما رویکرد عملی‌تری دارد: دقیقاً *چگونه* یک شرکت مبتنی بر اشتراک می‌تواند کل مبلغ پولی که یک مشتری در طول عمر خود به عنوان مشتری خرج خواهد کرد را با استفاده از پرس‌وجوهای SQL در متابیس تخمین بزند.

با مرور فرمول تعیین LTV و معیارهایی که برای رسیدن به آن نیاز دارید شروع می‌کنیم، و سپس یک پرس‌وجوی SQL نمونه ارائه می‌دهیم که می‌توانید برای دریافت داده LTV اجرا کنید. اگر فقط به دنبال آن پرس‌وجوی SQL نمونه هستید، آزادانه [به جلو بپرید](#step-2-sql-query-for-ltv).

## فرمول پایه LTV

این [فرمول ساده](../../../blog/calculating-ltv.html#basic-ltv-formula-for-saas-companies) برای شرکت‌های SaaS مبتنی بر اشتراک نقطه شروع خوبی برای محاسبه LTV است، تقسیم [میانگین درآمد به ازای هر مشتری](#average-revenue-per-customer-aprc) (APRC) بر [نرخ ریزش اشتراک](#subscription-churn-rate):

```
Customer LTV = ARPC / Churn rate

```

در طول محاسبات خود با یک بازه واحد بمانید. اگر سه‌ماهه صورتحساب می‌دهید، پس محاسبه تعداد اشتراک‌های شما در هر ماه خیلی مفید نخواهد بود. در مثال ما، با ارقام ماهانه پیش می‌رویم.

### ساخت بر اساس سؤال‌های موجود متابیس

استفاده از سؤال‌ها یا مدل‌های موجود برای محاسبات LTV شما می‌تواند تلاش زیادی را صرفه‌جویی کند، پس ارزش دارد بررسی کنید که آیا کسی در سازمان شما هر یک از این محاسبات را خودش انجام داده است. حتی ممکن است به آن معیارهای محاسبه شده مستقیماً از هر پردازنده پرداخت شخص ثالثی که استفاده می‌کنید (مثل درآمد یا داده ریزش از Stripe) دسترسی داشته باشید — اگر این مورد است، مدل‌سازی LTV کمی آسان‌تر می‌شود.

## آنچه به سمت آن کار می‌کنیم: جدول LTV

هدف ما این است که به جدولی برسیم که شامل یک ردیف برای هر چرخه صورتحساب است، با ستون‌های متناظر با داده خاص برای آن چرخه صورتحساب. آن جدول نتیجه شامل فیلدهای زیر خواهد بود:

- ماه چرخه صورتحساب
- درآمد مکرر ماهانه (MRR)
- تعداد اشتراک‌ها
- میانگین درآمد به ازای هر مشتری (ARPC)
- نرخ ریزش اشتراک
- ارزش طول عمر مشتری (LTV)

## داده شما چگونه به نظر می‌رسد

برای ساده‌سازی مثال ما، می‌گوییم که سه جدول برای شروع داریم: `Invoices`، `Subscriptions`، و `Revenue changes`:

### فاکتورها

```
| invoice_id | subscriber_id | month         | amount_dollars |
| ---------- | ------------- | ------------- | -------------- |
| N001       | S001          | January 2021  | 100            |
| N002       | S002          | January 2021  | 150            |
| N003       | S001          | February 2021 | 100            |
| N004       | S002          | February 2021 | 150            |
| N005       | S003          | February 2021 | 200            |
| N006       | S001          | March 2021    | 100            |
| N007       | S003          | March 2021    | 200            |
| ...        | ...           | ...           | ...            |

```

### اشتراک‌ها

```
| subscriber_id | active | monthly_invoice | created_at    | cancelled_at |
| ------------- | ------ | --------------- | ------------- | ------------ |
| S001          | Yes    | 100             | January 2021  |              |
| S002          | No     | 150             | January 2021  | March 2021   |
| S003          | Yes    | 200             | February 2021 |              |
| ...           | ...    | ...             | ...           | ...          |

```

### تغییرات درآمد

```
| month         | invoice_id | subscriber_id | dollar_change | change_type |
| ------------- | ---------- | ------------- | ------------- | ----------- |
| January 2021  | N001       | S001          | 100           | new         |
| January 2021  | N002       | S002          | 150           | new         |
| February 2021 | N003       | S001          | 0             | retain      |
| February 2021 | N004       | S002          | 0             | retain      |
| February 2021 | N005       | S003          | 200           | new         |
| March 2021    | N006       | S001          | 0             | retain      |
| March 2021    | N007       | S002          | -150          | removed     |
| March 2021    | N008       | S003          | 0             | retain      |
| ...           | ...        | ...           | ...           | ...         |

```

## مرحله 1: محاسبه معیارهای پیش از LTV شما

ابتدا از طریق پرس‌وجوها برای تعیین سه معیار پایه زیر که در محاسبه ارزش طول عمر نقش دارند راه می‌رویم:

- [درآمد مکرر ماهانه (MRR)](#monthly-recurring-revenue-mrr)
- [میانگین درآمد به ازای هر مشتری (ARPC)](#average-revenue-per-customer-aprc)
- [نرخ ریزش اشتراک](#subscription-churn-rate)

### درآمد مکرر ماهانه (MRR)

کل درآمد مکرر برای هر دوره پرداخت (در مورد ما، یک ماه) به ما درکی از جریان درآمد قابل پیش‌بینی می‌دهد. برای دریافت این عدد، مجموع فیلد `amount_dollars` در جدول `Invoices` را محاسبه می‌کنیم. اگر فقط می‌خواستیم این مقدار را محاسبه کنیم، چیزی مثل این انجام می‌دادیم:

```
SELECT
    month,
    sum(amount_dollars) AS mrr
FROM
    invoices
GROUP BY month

```

در اینجا نحوه به نظر رسیدن آن خروجی:

```
| month         | MRR |
| ------------- | --- |
| January 2021  | 250 |
| February 2021 | 450 |
| March 2021    | 300 |

```

در پرس‌وجوی نهایی خود برای دریافت LTV، MRR را با زیرپرس‌وجوی زیر محاسبه می‌کنیم:

```
sum(amount_dollars) AS mrr,

```

### میانگین درآمد به ازای هر مشتری (APRC)

APRC به ما می‌گوید تقریباً چقدر درآمد از هر مشتری به دست می‌آوریم. ابتدا تعداد اشتراک‌های فعال گروه‌بندی شده بر اساس ماه را می‌شماریم، و سپس MRR را بر آن عدد تقسیم می‌کنیم.

اگر می‌خواستیم APRC را از جدول `Invoices` خود محاسبه کنیم، این کار را انجام می‌دادیم:

```
SELECT
    month,
    sum(amount_dollars) AS mrr,
    count(DISTINCT subscription_id) AS subscriptions,
    (mrr / subscriptions) AS arpc
FROM
    invoices
GROUP BY
    month

```

در اینجا خروجی ما پس از این مرحله:

```
| month         | MRR | subscriptions | ARPC |
| ------------- | --- | ------------- | ---- |
| January 2021  | 250 | 2             | 125  |
| February 2021 | 450 | 3             | 150  |
| March 2021    | 300 | 2             | 150  |

```

زیرپرس‌وجوی زیر را برای محاسبه APRC در پرس‌وجوی SQL نهایی خود شامل می‌کنیم:

```
(mrr / subscriptions) AS arpc

```

### نرخ ریزش اشتراک

نرخ ریزش نسبتی است که نشان می‌دهد چه بخشی از مشتریان در طول دوره پرداخت اخیر پرداخت برای سرویس شما را متوقف کردند. برای محاسبه نرخ ریزش اشتراک، تعداد اشتراک‌های منتقل شده از ماه قبل را بر تعداد کل اشتراک‌های ماه قبل تقسیم کنید.

از دو CTE در ابتدای پرس‌وجوی خود برای محاسبه نرخ ریزش استفاده می‌کنیم:

```
WITH total_subscriptions AS (
    SELECT
        date_trunc('month', invoices.date) AS month,
        count(DISTINCT invoices.subscription_id) AS subscriptions,
        sum(amount_dollars) AS mrr
    FROM
        invoices
    GROUP BY
        1
),
churned_subscriptions AS (
    SELECT
        s.month,
        s.subscriptions,
        s.mrr,
        lag(subscriptions) OVER (ORDER BY s.month) AS last_month_subscriptions,
        count(DISTINCT CASE WHEN revenue_changes.change_type = 'removed' THEN
                revenue_changes.subscription_id
            END) AS churned_subscriptions
    FROM
        total_subscriptions s
        LEFT JOIN revenue_changes ON s.month = revenue_changes.month
    GROUP BY
        1,
        2,
        3
)

```

نتایج ما از این CTEها چیزی مثل این به نظر می‌رسد:

```
| month         | churned_subscriptions | last_month_subscriptions |
| ------------- | --------------------- | ------------------------ |
| January 2021  |                       |                          |
| February 2021 | 0                     | 2                        |
| March 2021    | 1                     | 3                        |

```

## مرحله 2: پرس‌وجوی SQL برای LTV

وقتی آماده اجرای پرس‌وجوی کامل هستیم، **+ New** > **SQL query** را از نوار ناوبری اصلی متابیس انتخاب می‌کنیم و کد زیر را وارد می‌کنیم:

```
WITH total_subscriptions AS (
    SELECT
        date_trunc('month', invoices.date) AS month,
        count(DISTINCT invoices.subscription_id) AS subscriptions,
        sum(amount_dollars) AS mrr
    FROM
        invoices
    GROUP BY
        1
),
churned_subscriptions AS (
    SELECT
        s.month,
        s.subscriptions,
        s.mrr,
        lag(subscriptions) OVER (ORDER BY s.month) AS last_month_subscriptions,
        count(DISTINCT CASE WHEN revenue_changes.change_type = 'removed' THEN
                revenue_changes.subscription_id
            END) AS churned_subscriptions
    FROM
        total_subscriptions s
        LEFT JOIN revenue_changes ON s.month = revenue_changes.month
    GROUP BY
        1,
        2,
        3
)
SELECT
    month,
    (mrr / subscriptions) AS arpc,
    (churned_subscriptions / last_month_subscriptions::float) AS subscription_churn_rate,
    (mrr / subscriptions) / (churned_subscriptions / last_month_subscriptions::float) AS ltv
FROM
    churned_subscriptions
WHERE
    month >= '2021-01-01'

```

پس از اجرای پرس‌وجوی خود، به جدولی می‌رسیم که شامل یک ستون `LTV` است — معیاری که دنبال آن بودیم:

```
| month         | MRR | subscription_total | ARPC | subscription_churn_rate | LTV   |
| ------------- | --- | ------------------ | ---- | ----------------------- | ----- |
| January 2021  | 250 | 2                  | 125  |                         |       |
| February 2021 | 450 | 3                  | 150  | 0.00                    |       |
| March 2021    | 300 | 2                  | 150  | 0.33                    | 454.5 |

```

## مرحله 3: تجسم LTV شما

در نهایت، تجسم این پرس‌وجو به عنوان یک نمودار خطی می‌تواند به ما کمک کند بهتر تحلیل کنیم که آن معیار چگونه در طول زمان تغییر کرده است. در اینجا برخی محاسبات LTV دیگر در متابیس، تجسم شده به عنوان هم جدول و هم نمودار خطی:

![Customer LTV table.](../../images/ltv-with-metabase/ltv-table.png)

![Visualizing our LTV over time.](../../images/ltv-with-metabase/ltv-line-chart.png)

حالا که این معیار را داریم، می‌توانیم از آن برای تصمیم‌گیری درباره چیزهایی مثل تلاش‌های بازاریابی، نیازهای کارکنان، و اولویت‌بندی ویژگی استفاده کنیم.

[](dates-in-sql.html)
[](syntax-reference.html)
