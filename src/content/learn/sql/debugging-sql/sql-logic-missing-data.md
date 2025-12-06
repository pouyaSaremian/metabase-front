---
title: "عیب‌یابی داده‌های گم‌شده در نتایج پرس‌وجوی SQL"
description: "چه کاری انجام دهید وقتی پرس‌وجوی شما داده‌هایی که ردیف‌ها یا ستون‌ها را گم کرده‌اند برمی‌گرداند."
redirect_from:
  - /learn/sql/debugging-sql/sql-logic-missing-data
  - /learn/debugging-sql/sql-logic-missing-data
  - /learn/grow-your-data-skills/learn-sql/debugging-sql/sql-logic-missing-data
toc:
  - id: "debugging-missing-data-in-sql-query-results"
    title: "عیب‌یابی داده‌های گم‌شده در نتایج پرس‌وجوی SQL"
    level: 1
    href: "#debugging-missing-data-in-sql-query-results"
  - id: "where-is-your-data-missing"
    title: "داده شما کجا گم شده است؟"
    level: 2
    href: "#where-is-your-data-missing"
  - id: "missing-rows"
    title: "ردیف‌های گم‌شده"
    level: 2
    href: "#missing-rows"
  - id: "how-joins-filter-out-unmatched-rows"
    title: "نحوه فیلتر کردن ردیف‌های غیرمطابق توسط joinها"
    level: 3
    href: "#how-joins-filter-out-unmatched-rows"
  - id: "how-to-fill-in-data-for-missing-report-dates"
    title: "نحوه پر کردن داده برای تاریخ‌های گزارش گم‌شده"
    level: 2
    href: "#how-to-fill-in-data-for-missing-report-dates"
  - id: "missing-columns"
    title: "ستون‌های گم‌شده"
    level: 2
    href: "#missing-columns"
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

# عیب‌یابی داده‌های گم‌شده در نتایج پرس‌وجوی SQL

چه کاری انجام دهید وقتی پرس‌وجوی شما داده‌هایی که ردیف‌ها یا ستون‌ها را گم کرده‌اند برمی‌گرداند.

## داده شما کجا گم شده است؟

- [ردیف‌ها](#missing-rows)
- [ستون‌ها](#missing-columns)

## ردیف‌های گم‌شده

قبل از شروع، مطمئن شوید [schemaهای جداول یا پرس‌وجوهای تودرتو منبع](sql-logic.html) خود را می‌دانید.

1. بررسی کنید که آیا جداول یا پرس‌وجوهای منبع شما ردیف‌های گم‌شده دارند.
2. [جدول زیر](#how-joins-filter-out-unmatched-rows) را بررسی کنید تا ببینید آیا به دلیل نوع join خود ردیف‌ها را گم کرده‌اید.
3. شرایط join خود را در بند `ON` بررسی کنید. به عنوان مثال: ``` -- شرط join زیر همه تراکنش‌ها را از جدول Orders -- جایی که دسته محصول 'Gizmo' است فیلتر می‌کند. SELECT * FROM orders o JOIN products p ON o.product_id = p.id AND p.category <> 'Gizmo'; ```
4. بررسی کنید که آیا بند `WHERE` شما با بند `JOIN` شما تعامل دارد. به عنوان مثال: ``` -- بند WHERE زیر همه تراکنش‌ها را از جدول Orders -- جایی که دسته محصول 'Gizmo' است فیلتر می‌کند. SELECT * FROM orders o JOIN products p ON o.product_id = p.id AND p.category = 'Gizmo' WHERE p.category <> 'Gizmo' ```
5. اگر می‌خواهید ردیف‌هایی به نتیجه پرس‌وجوی خود *اضافه* کنید تا داده‌ای که خالی، صفر، یا `NULL` است را پر کنید، به [نحوه پر کردن داده برای تاریخ‌های گزارش گم‌شده](#how-to-fill-in-data-for-missing-report-dates) بروید.

### نحوه فیلتر کردن ردیف‌های غیرمطابق توسط joinها

| Join type | اگر شرط join برآورده نشود |
| --- | --- |
| A INNER JOIN B | ردیف‌ها از هر دو A و B فیلتر می‌شوند. |
| A LEFT JOIN B | ردیف‌ها از B فیلتر می‌شوند. |
| B LEFT JOIN A | ردیف‌ها از A فیلتر می‌شوند. |
| A OUTER JOIN B | ردیف‌ها از هر دو A و B فیلتر می‌شوند. |
| A FULL JOIN B | هیچ ردیفی فیلتر نمی‌شود. |

**توضیح**

ترتیب جداول در بند `JOIN` شما بر ردیف‌هایی که پرس‌وجو برمی‌گرداند تأثیر می‌گذارد.

به عنوان مثال، وقتی یک `LEFT JOIN` می‌نویسید، جدولی که *قبل* از بند `LEFT JOIN` در پرس‌وجوی شما می‌آید "در سمت چپ" است. ردیف‌ها از جدول "در سمت راست" (جدول *بعد* از بند `LEFT JOIN`) فیلتر می‌شوند اگر شرط(های) join شما در بند `ON` را برآورده نکنند.

[ترتیب اجرا](../working-with-sql/sql-best-practices.html#the-general-order-of-query-execution) پرس‌وجو ممکن است شرایط join و بندهای `WHERE` شما را به روش‌هایی که ممکن است انتظار نداشته باشید ترکیب کند.

**مطالعه بیشتر**

- [دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره](sql-logic.html#common-reasons-for-unexpected-query-results)
- [مشکلات رایج با joinهای SQL](../working-with-sql/sql-join-types.html#common-problems-with-sql-joins)
- [انواع join](../working-with-sql/sql-join-types.html)
- [ETLها، ELTها و Reverse ETLها](../../grow-your-data-skills/data-landscape/etl-landscape.html)

## نحوه پر کردن داده برای تاریخ‌های گزارش گم‌شده

اگر جداول یا پرس‌وجوهای تودرتو منبع شما فقط ردیف‌ها را برای تاریخ‌هایی که چیزی اتفاق افتاده ذخیره می‌کنند، نتایجی با تاریخ‌های گزارش گم‌شده دریافت خواهید کرد.

به عنوان مثال، جدول `Orders` در [پایگاه داده نمونه](../../../glossary/sample-database.html) فقط ردیف‌ها را برای تاریخ‌هایی که سفارش‌ها ایجاد شده‌اند ذخیره می‌کند. هیچ ردیفی برای تاریخ‌هایی که فعالیت سفارش وجود نداشته ذخیره نمی‌کند.

```
-- پرس‌وجوی زیر مجموع فروش را محاسبه می‌کند
-- برای هر روزی که حداقل یک سفارش داشته است.

-- به عنوان مثال، توجه داشته باشید که هیچ ردیفی
-- در نتایج پرس‌وجو برای 5 می 2016 وجود ندارد.

SELECT
    DATE_TRUNC('day', o.created_at)::date AS "order_created_date",
    SUM(p.price) AS "total_sales"
FROM
    orders o
    JOIN products p ON o.product_id = p.id
WHERE
    o.created_at BETWEEN'2016-05-01'::date
    AND '2016-05-30'::date
GROUP BY
    "order_created_date"
ORDER BY
    "order_created_date" ASC;

```

اگر می‌خواهید نتیجه‌ای مثل جدول زیر، باید `JOIN` خود را با یک جدول یا ستون که همه تاریخ‌ها (یا هر دنباله دیگری) را که می‌خواهید دارد شروع کنید. از مدیر پایگاه داده خود بپرسید آیا جدولی وجود دارد که بتوانید برای این استفاده کنید.

```
+--------------------+-------------+
| report_date        | total_sales |
+--------------------+-------------+
| May 4, 2016        | 98.78       |
+--------------------+-------------+
| May 5, 2016        | 0.00        |
+--------------------+-------------+
| May 6, 2016        | 87.29       |
+--------------------+-------------+
| May 7, 2016        | 0.00        |
+--------------------+-------------+
| May 8, 2016        | 81.61       |
+--------------------+-------------+

```

اگر گویش SQL شما از تابع `GENERATE_SERIES` پشتیبانی می‌کند، می‌توانید یک ستون موقت که تاریخ‌های گزارش شما را ذخیره می‌کند ایجاد کنید.

```
-- پرس‌وجوی زیر مجموع فروش را محاسبه می‌کند
-- برای هر روز در دوره گزارش،
-- شامل روزهایی با 0 سفارش.

-- CTE date_series یک ردیف
-- به ازای هر تاریخی که می‌خواهید در نتیجه نهایی خود تولید می‌کند.

WITH date_series AS (
    SELECT
        *
    FROM
        GENERATE_SERIES('2016-05-01'::date, '2020-05-30'::date, '1 day'::interval) report_date
)

-- CTE fact_orders مجموع فروش را تولید می‌کند
-- برای هر تاریخی که یک سفارش داشته است.

, fact_orders AS (
    SELECT
        DATE_TRUNC('day', o.created_at)::date AS "order_created_date",
        SUM(p.price) AS "total_sales"
    FROM
        orders o
        JOIN products p ON o.product_id = p.id
    GROUP BY
        "order_created_date"
    ORDER BY
        "order_created_date" ASC
)

-- پرس‌وجوی اصلی دو CTE را با هم join می‌کند
-- و از تابع COALESCE برای پر کردن تاریخ‌ها استفاده می‌کند
-- جایی که سفارشی وجود نداشت (یعنی مقدار مجموع فروش 0).

SELECT
    d.report_date,
    o.order_created_date,
    COALESCE(o.total_sales, 0) AS total_sales
FROM
    date_series d
    LEFT JOIN fact_orders o ON d.date = o.order_created_date
;

```

## ستون‌های گم‌شده

- آیا از نام‌های مستعار جدول صحیح استفاده می‌کنید؟
- آیا جدول را در بند `FROM` خود گم کرده‌اید؟
1. اگر داده را join می‌کنید، بررسی کنید که آیا عبارت `SELECT` شما شامل ستون‌هایی که می‌خواهید است.
2. بررسی کنید که آیا جداول یا نتایج پرس‌وجوی منبع شما ستون‌های گم‌شده دارند با دنبال کردن مرحله 1 در [عیب‌یابی منطق SQL](sql-logic.html).
3. بیشتر درباره [دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره](sql-logic.html#common-reasons-for-unexpected-query-results) یاد بگیرید.

## آیا مشکل متفاوتی دارید؟

- [نتیجه من داده تکراری دارد](sql-logic-duplicated-data.html).
- [تجمیع‌های من (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند](sql-logic.html#aggregated-results-counts-sums-etc-are-wrong).
- [تاریخ‌ها و زمان‌های من اشتباه هستند](../../../docs/latest/troubleshooting-guide/timezones.html).
- [داده من به‌روز نیست](../../../docs/latest/troubleshooting-guide/sync-fingerprint-scan.html).
- [یک خطای نحو SQL دارم](sql-syntax.html).
- [یک پیام خطا دارم که خاص پرس‌وجو یا نحو SQL من نیست](../../../docs/latest/troubleshooting-guide/error-message.html).

## آیا هنوز گیر کرده‌اید؟

جستجو کنید یا از [جامعه متابیس](https://discourse.metabase.com/) بپرسید.

[](sql-logic-duplicated-data.html)
