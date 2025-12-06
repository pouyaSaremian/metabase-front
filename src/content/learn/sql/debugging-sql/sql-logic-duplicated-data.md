---
title: "عیب‌یابی داده‌های تکراری در نتایج پرس‌وجوی SQL"
description: "چه کاری انجام دهید وقتی پرس‌وجوی شما داده با ردیف‌ها یا ستون‌های تکراری برمی‌گرداند."
redirect_from:
  - /learn/sql/debugging-sql/sql-logic-duplicated-data
  - /learn/debugging-sql/sql-logic-duplicated-data
  - /learn/grow-your-data-skills/learn-sql/debugging-sql/sql-logic-duplicated-data
toc:
  - id: "debugging-duplicated-data-in-sql-query-results"
    title: "عیب‌یابی داده‌های تکراری در نتایج پرس‌وجوی SQL"
    level: 1
    href: "#debugging-duplicated-data-in-sql-query-results"
  - id: "duplicated-rows"
    title: "ردیف‌های تکراری"
    level: 2
    href: "#duplicated-rows"
  - id: "join-types-and-table-relationships"
    title: "انواع join و رابطه‌های جدول"
    level: 3
    href: "#join-types-and-table-relationships"
  - id: "how-to-reduce-table-relationships"
    title: "نحوه کاهش رابطه‌های جدول"
    level: 2
    href: "#how-to-reduce-table-relationships"
  - id: "option-1-use-an-inner-join-with-a-one-to-many-relationship"
    title: "گزینه 1: استفاده از INNER JOIN با رابطه یک به چند"
    level: 3
    href: "#option-1-use-an-inner-join-with-a-one-to-many-relationship"
  - id: "option-2-use-a-cte-to-reduce-the-table-relationship"
    title: "گزینه 2: استفاده از CTE برای کاهش رابطه جدول"
    level: 3
    href: "#option-2-use-a-cte-to-reduce-the-table-relationship"
  - id: "duplicated-columns"
    title: "ستون‌های تکراری"
    level: 2
    href: "#duplicated-columns"
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

# عیب‌یابی داده‌های تکراری در نتایج پرس‌وجوی SQL

چه کاری انجام دهید وقتی پرس‌وجوی شما داده با ردیف‌ها یا ستون‌های تکراری برمی‌گرداند.

داده شما کجا تکراری می‌شود؟

- [ردیف‌ها](#duplicated-rows)
- [ستون‌ها](#duplicated-columns)

## ردیف‌های تکراری

قبل از شروع، مطمئن شوید [schemaهای جداول یا پرس‌وجوهای تودرتو منبع](sql-logic.html) خود را می‌دانید.

1. آیا بند `GROUP BY` را گم کرده‌اید؟
2. بررسی کنید که آیا جداول یا پرس‌وجوهای منبع شما ردیف‌های تکراری دارند. باید مراحل 3 و 4 را برای هر جدول یا نتیجه پرس‌وجویی که شامل ردیف‌های تکراری است تکرار کنید. ``` -- اگر row_count بیشتر از 1 باشد، -- ردیف‌های تکراری در نتایج خود دارید. SELECT < your_columns >, COUNT(*) AS row_count FROM < your_table_or_upstream_query > GROUP BY < your_columns > ORDER BY row_count DESC; ```
3. [جدول زیر](#join-types-and-table-relationships) را بررسی کنید تا ببینید نوع join شما چگونه با رابطه‌های جدول شما تعامل می‌کند.
4. [نوع join خود را تغییر دهید یا رابطه‌های جدول خود را کاهش دهید](#how-to-reduce-table-relationships).

**توضیح**

ردیف‌ها می‌توانند به طور تصادفی تکراری شوند وقتی داده در سیستم‌های upstream یا کارهای ETL به‌روز می‌شود.

برخی جداول ردیف‌هایی دارند که در نگاه اول شبیه تکراری به نظر می‌رسند. این با جداولی که تغییرات وضعیت را ردیابی می‌کنند رایج است (مثلاً یک جدول وضعیت سفارش که هر بار که وضعیت تغییر می‌کند یک ردیف اضافه می‌کند). جداول وضعیت ممکن است ردیف‌هایی داشته باشند که دقیقاً یکسان به نظر می‌رسند، به جز timestamp ردیف. می‌تواند دشوار باشد تشخیص دهید که آیا جداولی با ستون‌های زیاد دارید، پس حتماً مرحله 2 بالا را اجرا کنید یا از مدیر پایگاه داده خود بپرسید اگر مطمئن نیستید.

اگر joinهای خود را با فرض یک رابطه [یک به یک](../../grow-your-data-skills/data-fundamentals/table-relationships.html#one-to-one-relationship) برای جداولی که در واقع یک رابطه [یک به چند](../../grow-your-data-skills/data-fundamentals/table-relationships.html#one-to-many-relationship) یا [چند به چند](../../grow-your-data-skills/data-fundamentals/table-relationships.html#many-to-many-relationship) دارند نوشته‌اید، برای *هر* تطابق در جدول "چند" ردیف تکراری دریافت خواهید کرد.

**مطالعه بیشتر**

- [دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره](sql-logic.html#common-reasons-for-unexpected-query-results)
- [ترکیب جداول با join](../../grow-your-data-skills/learn-sql/working-with-sql/sql-joins.html)
- [مشکلات رایج با joinهای SQL](../working-with-sql/sql-join-types.html#common-problems-with-sql-joins)
- [Schema چیست؟](../../../glossary/schema.html)
- [رابطه‌های جدول پایگاه داده](../../grow-your-data-skills/data-fundamentals/table-relationships.html)

### انواع join و رابطه‌های جدول

این جدول خلاصه می‌کند که [انواع join](../working-with-sql/sql-join-types.html) چگونه با [رابطه‌های جدول](../../grow-your-data-skills/data-fundamentals/table-relationships.html) تعامل می‌کنند تا تکراری تولید کنند وقتی ردیف‌های مطابق پیدا می‌شوند.

| A یک به یک با B است | A یک به چند با B است | A چند به چند با B است |  |
| --- | --- | --- | --- |
| A INNER JOIN B | هیچ ردیف تکراری. | هیچ ردیف تکراری. | ردیف‌های تکراری از A یا B. |
| A LEFT JOIN B | هیچ ردیف تکراری. | تکراری‌های ممکن از جدول B. | ردیف‌های تکراری از A یا B. |
| B LEFT JOIN A | هیچ ردیف تکراری. | تکراری‌های ممکن از جدول B. | ردیف‌های تکراری از A یا B. |
| A OUTER JOIN B | هیچ ردیف تکراری. | تکراری‌های ممکن از جدول B. | ردیف‌های تکراری از A یا B. |
| A FULL JOIN B | هیچ ردیف تکراری. | ردیف‌های تکراری از جدول B. | ردیف‌های تکراری از A یا B. |

## نحوه کاهش رابطه‌های جدول

اگر ردیف‌های تکراری دارید چون یک رابطه [یک به یک](../../grow-your-data-skills/data-fundamentals/table-relationships.html#one-to-one-relationship) را فرض می‌کنید وقتی در واقع جداولی دارید که [یک به چند](../../grow-your-data-skills/data-fundamentals/table-relationships.html#one-to-many-relationship) یا [چند به چند](../../grow-your-data-skills/data-fundamentals/table-relationships.html#many-to-many-relationship) هستند، می‌توانید تکراری‌ها را با استفاده از:

- یک [INNER JOIN](#option-1-use-an-inner-join-with-a-one-to-many-relationship) برای یک رابطه یک به چند حذف کنید.
- یک [CTE با تابع تجمیع](#option-2-use-a-cte-to-reduce-the-table-relationship) برای یک رابطه یک به چند یا چند به چند.

به عنوان مثال:

```
-- فرض کنید table_a یک یک به چند با table_b است.

-- پرس‌وجوی زیر ردیف‌ها را از table_b تکراری می‌کند
-- برای هر ردیف مطابق در table_a.

SELECT
    < your_columns >
FROM
    table_a
    LEFT JOIN table_b ON key_a = key_b;

```

### گزینه 1: استفاده از INNER JOIN با رابطه یک به چند

```
-- پرس‌وجوی زیر یک ردیف از table_b دریافت می‌کند
-- برای هر ردیف مطابق در table_a.

SELECT
    < your_columns >
FROM
    table_a
    INNER JOIN table_b ON key_a = key_b;

```

### گزینه 2: استفاده از CTE برای کاهش رابطه جدول

```
-- پرس‌وجوی زیر مقادیر تجمیع شده از table_b دریافت می‌کند
-- برای هر ردیف مطابق در table_a.

WITH table_b_reduced AS (
    SELECT
        AGGREGATE_FUNCTION (< your_columns >)
    FROM
        table_b_reduced
    GROUP BY
        < your_columns >
)
SELECT
    < your_columns >
FROM
    table_a
    JOIN table_b_reduced ON key_a = key_b_reduced;

```

## ستون‌های تکراری

1. اگر داده را join می‌کنید، بررسی کنید که آیا عبارت `SELECT` شما شامل هر دو ستون [کلید اصلی](../../../glossary/primary-key.html) و [کلید خارجی](../../../glossary/foreign-key.html) است.
2. بررسی کنید که آیا ستون‌های شما در منبع تکراری هستند با دنبال کردن مراحل در [عیب‌یابی منطق SQL](sql-logic.html).
3. بیشتر درباره [دلایل رایج برای نتایج پرس‌وجوی غیرمنتظره](sql-logic.html#common-reasons-for-unexpected-query-results) یاد بگیرید.

## آیا مشکل متفاوتی دارید؟

- [نتیجه من داده گم‌شده دارد](../../grow-your-data-skills/learn-sql/debugging-sql/sql-logic-missing-data.html).
- [تجمیع‌های من (شمارش‌ها، مجموع‌ها و غیره) اشتباه هستند](sql-logic.html#aggregated-results-counts-sums-etc-are-wrong).
- [تاریخ‌ها و زمان‌های من اشتباه هستند](../../../docs/latest/troubleshooting-guide/timezones.html).
- [داده من به‌روز نیست](../../../docs/latest/troubleshooting-guide/sync-fingerprint-scan.html).
- [یک خطای نحو SQL دارم](../../grow-your-data-skills/learn-sql/debugging-sql/sql-syntax.html).
- [یک پیام خطا دارم که خاص پرس‌وجو یا نحو SQL من نیست](../../../docs/latest/troubleshooting-guide/error-message.html).

## آیا هنوز گیر کرده‌اید؟

جستجو کنید یا از [جامعه متابیس](https://discourse.metabase.com/) بپرسید.

[](sql-logic.html)
[](sql-logic-missing-data.html)
