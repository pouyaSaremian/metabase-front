---
title: "ساده‌سازی پرس‌وجوهای پیچیده با عبارات جدول مشترک (CTE)"
description: "CTEها مجموعه‌های نام‌گذاری شده از نتایج هستند که به سازماندهی کد شما کمک می‌کنند. آن‌ها به شما امکان استفاده مجدد از نتایج در همان پرس‌وجو و انجام تجمیع‌های چندسطحی را می‌دهند."
redirect_from:
  - /learn/sql/working-with-sql/sql-cte
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/sql-cte
  - /learn/sql-questions/sql-cte
toc:
  - id: "simplify-complex-queries-with-common-table-expressions-ctes"
    title: "ساده‌سازی پرس‌وجوهای پیچیده با عبارات جدول مشترک (CTE)"
    level: 1
    href: "#simplify-complex-queries-with-common-table-expressions-ctes"
  - id: "cte-benefits"
    title: "مزایای CTE"
    level: 2
    href: "#cte-benefits"
  - id: "cte-syntax"
    title: "نحو CTE"
    level: 2
    href: "#cte-syntax"
  - id: "cte-example"
    title: "مثال CTE"
    level: 2
    href: "#cte-example"
  - id: "cte-with-a-saved-question"
    title: "CTE با یک سؤال ذخیره شده"
    level: 2
    href: "#cte-with-a-saved-question"
  - id: "ctes-for-multi-level-aggregations"
    title: "CTEها برای تجمیع‌های چندسطحی"
    level: 2
    href: "#ctes-for-multi-level-aggregations"
  - id: "example-what-are-the-average-numbers-of-orders-placed-each-week-in-each-product-category"
    title: "مثال: میانگین تعداد سفارش‌های ثبت شده در هر هفته در هر دسته محصول چیست؟"
    level: 3
    href: "#example-what-are-the-average-numbers-of-orders-placed-each-week-in-each-product-category"
  - id: "multi-level-aggregation-in-the-query-builder"
    title: "تجمیع چندسطحی در query builder"
    level: 3
    href: "#multi-level-aggregation-in-the-query-builder"
  - id: "using-multiple-ctes-in-a-single-query"
    title: "استفاده از چندین CTE در یک پرس‌وجو"
    level: 2
    href: "#using-multiple-ctes-in-a-single-query"
  - id: "reading"
    title: "مطالعه"
    level: 2
    href: "#reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "کار با SQL"
    href: "index.html"
---

# ساده‌سازی پرس‌وجوهای پیچیده با عبارات جدول مشترک (CTE)

CTEها مجموعه‌های نام‌گذاری شده از نتایج هستند که به سازماندهی کد شما کمک می‌کنند. آن‌ها به شما امکان استفاده مجدد از نتایج در همان پرس‌وجو و انجام تجمیع‌های چندسطحی را می‌دهند.

یک **عبارت جدول مشترک (CTE)** یک مجموعه نتیجه نام‌گذاری شده در یک پرس‌وجوی SQL است. CTEها به سازماندهی کد شما کمک می‌کنند و به شما امکان انجام تجمیع‌های چندسطحی روی داده‌هایتان را می‌دهند، مثل یافتن میانگین یک مجموعه شمارش. ما از طریق چند مثال راه می‌رویم تا نحوه کار CTEها و چرا از آن‌ها استفاده می‌کنید را نشان دهیم، با استفاده از [پایگاه داده نمونه](../../../glossary/sample-database.html) همراه با متابیس تا بتوانید دنبال کنید.

## مزایای CTE

- *CTEها کد را خوانا‌تر می‌کنند.* و خوانایی پرس‌وجوها را برای عیب‌یابی آسان‌تر می‌کند.
- *CTEها می‌توانند نتایج را چندین بار در طول پرس‌وجو ارجاع دهند.* با ذخیره نتایج زیرپرس‌وجو، می‌توانید آن‌ها را در طول یک پرس‌وجوی بزرگ‌تر استفاده مجدد کنید.
- *CTEها می‌توانند به شما در انجام تجمیع‌های چندسطحی کمک کنند.* از CTEها برای ذخیره نتایج تجمیع‌ها استفاده کنید، که سپس می‌توانید در پرس‌وجوی اصلی خلاصه کنید.

## نحو CTE

نحو برای یک CTE از کلمه کلیدی `WITH` و یک نام متغیر برای ایجاد نوعی جدول موقت استفاده می‌کند که می‌توانید در بخش‌های دیگر پرس‌وجوی خود به آن ارجاع دهید.

```
WITH cte_name(column1, column2, etc.) AS (SELECT ...)

```

کلمه کلیدی `AS` در اینجا کمی غیرمعمول است. معمولاً `AS` برای مشخص کردن یک نام مستعار استفاده می‌شود، مثل `consumables_orders AS orders`، با `orders` که نام مستعار در سمت راست `AS` است. با CTEها، متغیر `cte_name` قبل از (در سمت چپ) کلمه کلیدی `AS` می‌آید، به دنبال زیرپرس‌وجو. توجه داشته باشید که فهرست ستون `(column1, column2, etc)` اختیاری است، به شرطی که هر ستون در عبارت `SELECT` یک نام منحصر به فرد داشته باشد.

## مثال CTE

بیایید از طریق یک مثال ساده برویم. می‌خواهیم فهرستی از همه سفارش‌ها با `total` که بیشتر از میانگین total سفارش است ببینیم.

```
SELECT
  id,
  total
FROM
  orders
WHERE
-- filter for orders with above-average totals
  total > (
    SELECT
      AVG(total)
    FROM
      orders
  )

```

این پرس‌وجو به ما می‌دهد:

```
|ID  |TOTAL  |
|----|-------|
|2   |117.03 |
|4   |115.22 |
|5   |134.91 |
|... |...    |

```

به اندازه کافی ساده به نظر می‌رسد: یک زیرپرس‌وجو داریم، `SELECT AVG(total) FROM orders`، تودرتو در بند `WHERE` که میانگین total سفارش را محاسبه می‌کند. اما اگر گرفتن میانگین پیچیده‌تر بود چه؟ به عنوان مثال، فرض کنید نیاز دارید سفارش‌های تست را فیلتر کنید، یا سفارش‌های قبل از راه‌اندازی اپلیکیشن را حذف کنید:

```
SELECT
  id,
  total
FROM
  orders
WHERE
  total > (
    -- calculate average order total
    SELECT
      AVG(total)
    FROM
      orders
    WHERE
      -- exclude test orders
      product_id > 10
      AND -- exclude orders before launch
      created_at > '2016-04-21'
      AND -- exclude test accounts
      user_id > 10
  )
ORDER BY
  total DESC

```

حالا پرس‌وجو شروع به از دست دادن خوانایی می‌کند. می‌توانیم زیرپرس‌وجو را به عنوان یک عبارت جدول مشترک با استفاده از یک عبارت `WITH` برای کپسوله کردن نتایج از آن زیرپرس‌وجو بازنویسی کنیم:

```
-- CTE to calculate average order total
-- with the name for the CTE (avg_order) and column (total)
WITH avg_order(total) AS (

-- CTE query
  SELECT
    AVG(total)
  FROM
    orders
  WHERE
    -- exclude test orders
    product_id > 10
    AND -- exclude orders before launch
    created_at > '2016-04-21'
    AND -- exclude test accounts
    user_id > 10
)

-- our main query:
-- orders with above-average totals
SELECT
  o.id,
  o.total
FROM
  orders AS o
  -- join the CTE: avg_order
  LEFT JOIN avg_order AS a
WHERE
  -- total is above average
  o.total > a.total
ORDER BY
  o.total DESC

```

CTE منطق یافتن میانگین را بسته‌بندی می‌کند و آن منطق را از پرس‌وجوی اصلی جدا می‌کند: یافتن order IDها با totalهای بالاتر از میانگین. توجه داشته باشید نتایج این CTE در هیچ جا ذخیره نمی‌شوند؛ زیرپرس‌وجوی آن هر بار که پرس‌وجو را اجرا می‌کنید اجرا می‌شود.

ذخیره این پرس‌وجو به عنوان یک CTE همچنین پرس‌وجو را برای تغییر آسان‌تر می‌کند. بیایید بگوییم که همچنین می‌خواستیم بدانیم کدام سفارش‌ها:

- totalهای بالاتر از میانگین دارند،
- تعداد آیتم‌های سفارش داده شده کمتر از میانگین دارند.

می‌توانیم به راحتی پرس‌وجو را مثل این گسترش دهیم:

```
-- CTE to calculate average order total and quantity
WITH avg_order(total, quantity) AS (
  SELECT
    AVG(total),
    AVG(quantity)
  FROM
    orders
  WHERE
    -- exclude test orders
    product_id > 10
    AND -- exclude orders before launch
    created_at > '2016-04-21'
    AND -- exclude test accounts
    user_id > 10
)

-- orders with above-average totals
SELECT
  o.id,
  o.total,
  o.quantity
FROM
  orders AS o -- join the CTE avg_order
  LEFT JOIN avg_order AS a
WHERE
  -- above-average total
  o.total > a.total
  -- below-average quantity
  AND o.quantity < a.quantity
ORDER BY
  o.total DESC,
  o.quantity ASC

```

همچنین می‌توانیم فقط زیرپرس‌وجو را در CTE انتخاب و اجرا کنیم.

![Highlighting part of a query in a CTE and running the selection to see its results.](../../images/sql-cte/run-selection.gif)

همانطور که در شکل بالا می‌بینید، همچنین می‌توانید زیرپرس‌وجوی CTE را به عنوان یک [snippet](../../metabase-basics/querying-and-dashboards/sql-in-metabase/snippets.html) ذخیره کنید، اما بهتر است یک زیرپرس‌وجو را به عنوان یک سؤال ذخیره کنید. قاعده سرانگشتی برای تصمیم بین snippet و سؤال ذخیره شده این است که اگر یک بلوک کد می‌تواند به تنهایی نتایج را برگرداند، ممکن است بخواهید آن را به عنوان یک سؤال ذخیره کنید ([Snippets در مقابل سؤال‌های ذخیره شده در مقابل viewها](../../metabase-basics/querying-and-dashboards/sql-in-metabase/organizing-sql.html) را ببینید).

یک مورد بهتر برای Snippet بند `WHERE` است که منطق فیلتر کردن برای سفارش‌های مشتری را می‌گیرد.

![Inserting a snippet, Customer orders, that filters out test orders and accounts.](../../images/sql-cte/snippet.png)

## CTE با یک سؤال ذخیره شده

می‌توانید از عبارت `WITH` برای ارجاع به یک سؤال ذخیره شده استفاده کنید:

```
WITH avg_order(total, quantity) AS {{#2}}

-- orders with above-average totals
SELECT
  o.id,
  o.total,
  o.quantity
FROM
  orders AS o -- join the CTE avg_order
  LEFT JOIN avg_order AS a
WHERE
  -- above-average totals
  o.total > a.total
  -- below-average quantity
  AND o.quantity < a.quantity
ORDER BY
  o.total DESC,
  o.quantity ASC

```

می‌توانید سؤال ارجاع داده شده توسط متغیر `{{#2}}` را با استفاده از **نوار کناری Variables** ببینید. در این مورد، `2` ID سؤال است.

![View referenced questions in the Variables sidebar.](../../images/sql-cte/click-through.gif)

با ذخیره آن زیرپرس‌وجو به عنوان یک سؤال مستقل، چندین سؤال می‌توانند به نتایج آن ارجاع دهند. و اگر نیاز به افزودن بندهای `WHERE` اضافی برای حذف سفارش‌های تست بیشتر از محاسبه دارید، هر سؤالی که به آن محاسبه ارجاع می‌دهد از به‌روزرسانی بهره‌مند می‌شود. جنبه دیگر این مزیت این است که اگر آن سؤال ذخیره شده را تغییر دهید تا ستون‌های متفاوتی برگرداند، پرس‌وجوهایی که به نتایج آن وابسته هستند خراب می‌شوند.

## CTEها برای تجمیع‌های چندسطحی

می‌توانید از CTEها برای انجام تجمیع‌های چندسطحی یا چندمرحله‌ای استفاده کنید. یعنی می‌توانید تجمیع روی تجمیع‌ها انجام دهید، مثل گرفتن میانگین یک شمارش.

### مثال: میانگین تعداد سفارش‌های ثبت شده در هر هفته در هر دسته محصول چیست؟

برای پاسخ به این سؤال در عنوان این بخش، باید:

1. شمارش سفارش‌ها در هر هفته در هر دسته محصول را پیدا کنیم.
2. میانگین شمارش برای هر دسته را پیدا کنیم.

می‌توانید از یک CTE برای یافتن شمارش استفاده کنید، سپس از پرس‌وجوی اصلی برای محاسبه میانگین استفاده کنید.

```
-- CTE to find orders per week by product category
WITH orders_per_week(
  order_week, order_count, category
) AS (
  SELECT
    DATE_TRUNC('week', o.created_at) as order_week,
    COUNT(*) as order_count,
    category
  FROM
    orders AS o
    left join products AS p ON o.product_id = p.id
  GROUP BY
    order_week,
    p.category
)

-- Main query to calculate average order count per week
SELECT
    category AS "Category",
    AVG(order_count) AS "Average orders per week"
FROM
  orders_per_week
GROUP BY
  category

```

که نتیجه می‌دهد:

```
|Category |Average orders per week|
|---------|-----------------------|
|Doohickey|19                     |
|Gizmo    |23                     |
|Widget   |25                     |
|Gadget   |24                     |

```

### تجمیع چندسطحی در query builder

فقط برای ارائه یک نمای کلی از آنچه در این پرس‌وجو اتفاق می‌افتد، در اینجا نحوه به نظر رسیدن پرس‌وجوی بالا در query builder متابیس:

![Using the query builder to find the average weekly count of orders by product category. Note the two summarization steps in green.](../../images/sql-cte/multi-level-aggregation.png)

می‌توانید به وضوح دو مرحله تجمیع (دو بخش **Summarize**) را ببینید. همانطور که این نشان می‌دهد، حتی وقتی پرس‌وجوهای SQL می‌نویسید، **Query Builder** می‌تواند یک ابزار عالی برای کاوش داده و کمک به برنامه‌ریزی رویکرد شما باشد.

## استفاده از چندین CTE در یک پرس‌وجو

می‌توانید از چندین CTE در همان پرس‌وجو استفاده کنید. فقط باید نام‌ها و زیرپرس‌وجوهای آن‌ها را با کاما جدا کنید، مثل این:

```
-- first CTE
WITH avg_order(total) AS (
  SELECT
    AVG(total)
  FROM
    orders
),
-- second CTE (note the preceding comma)
avg_product(rating) AS (
  SELECT
    AVG(rating)
  FROM
    products
)

```

## مطالعه

می‌توانید برخی CTEهای بیشتر در عمل را در مقاله ما درباره [کار با تاریخ‌ها در SQL](dates-in-sql.html) بررسی کنید، از جمله مثالی که از [CTE برای join به خودش](dates-in-sql.html#compare-week-over-week-totals) استفاده می‌کند.

[](sql-best-practices.html)
[](dates-in-sql.html)
