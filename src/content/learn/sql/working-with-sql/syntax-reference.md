---
title: "مرجع نحو SQL"
description: "آن کلمه کلیدی SQL چگونه دوباره کار می‌کند؟"
redirect_from:
  - /learn/sql/working-with-sql/syntax-reference
toc:
  - id: "sql-syntax-reference"
    title: "مرجع نحو SQL"
    level: 1
    href: "#sql-syntax-reference"
  - id: "sql-all"
    title: "SQL ALL"
    level: 2
    href: "#sql-all"
  - id: "sql-and"
    title: "SQL AND"
    level: 2
    href: "#sql-and"
  - id: "sql-any"
    title: "SQL ANY"
    level: 2
    href: "#sql-any"
  - id: "sql-array"
    title: "SQL ARRAY"
    level: 2
    href: "#sql-array"
  - id: "sql-avg"
    title: "SQL AVG"
    level: 2
    href: "#sql-avg"
  - id: "sql-as"
    title: "SQL AS"
    level: 2
    href: "#sql-as"
  - id: "sql-between"
    title: "SQL BETWEEN"
    level: 2
    href: "#sql-between"
  - id: "sql-case"
    title: "SQL CASE"
    level: 2
    href: "#sql-case"
  - id: "sql-cast"
    title: "SQL CAST"
    level: 2
    href: "#sql-cast"
  - id: "sql-count"
    title: "SQL COUNT"
    level: 2
    href: "#sql-count"
  - id: "sql-currentdate"
    title: "SQL CURRENT_DATE"
    level: 2
    href: "#sql-currentdate"
  - id: "sql-date"
    title: "SQL DATE"
    level: 2
    href: "#sql-date"
  - id: "sql-currenttime"
    title: "SQL CURRENT_TIME"
    level: 2
    href: "#sql-currenttime"
  - id: "sql-distinct"
    title: "SQL DISTINCT"
    level: 2
    href: "#sql-distinct"
  - id: "sql-except"
    title: "SQL EXCEPT"
    level: 2
    href: "#sql-except"
  - id: "sql-exists"
    title: "SQL EXISTS"
    level: 2
    href: "#sql-exists"
  - id: "sql-extract"
    title: "SQL EXTRACT"
    level: 2
    href: "#sql-extract"
  - id: "sql-from"
    title: "SQL FROM"
    level: 2
    href: "#sql-from"
  - id: "sql-group-by"
    title: "SQL GROUP BY"
    level: 2
    href: "#sql-group-by"
  - id: "sql-having"
    title: "SQL HAVING"
    level: 2
    href: "#sql-having"
  - id: "sql-in"
    title: "SQL IN"
    level: 2
    href: "#sql-in"
  - id: "sql-interval"
    title: "SQL INTERVAL"
    level: 2
    href: "#sql-interval"
  - id: "sql-inner-join"
    title: "SQL INNER JOIN"
    level: 2
    href: "#sql-inner-join"
  - id: "sql-intersect"
    title: "SQL INTERSECT"
    level: 2
    href: "#sql-intersect"
  - id: "sql-is-null"
    title: "SQL IS NULL"
    level: 2
    href: "#sql-is-null"
  - id: "sql-join"
    title: "SQL JOIN"
    level: 2
    href: "#sql-join"
  - id: "sql-left-join"
    title: "SQL LEFT JOIN"
    level: 2
    href: "#sql-left-join"
  - id: "sql-like"
    title: "SQL LIKE"
    level: 2
    href: "#sql-like"
  - id: "sql-limit"
    title: "SQL LIMIT"
    level: 2
    href: "#sql-limit"
  - id: "sql-max"
    title: "SQL MAX"
    level: 2
    href: "#sql-max"
  - id: "sql-min"
    title: "SQL MIN"
    level: 2
    href: "#sql-min"
  - id: "sql-mod"
    title: "SQL MOD"
    level: 2
    href: "#sql-mod"
  - id: "sql-not"
    title: "SQL NOT"
    level: 2
    href: "#sql-not"
  - id: "sql-null"
    title: "SQL NULL"
    level: 2
    href: "#sql-null"
  - id: "sql-on"
    title: "SQL ON"
    level: 2
    href: "#sql-on"
  - id: "sql-or"
    title: "SQL OR"
    level: 2
    href: "#sql-or"
  - id: "sql-order-by"
    title: "SQL ORDER BY"
    level: 2
    href: "#sql-order-by"
  - id: "sql-right-join"
    title: "SQL RIGHT JOIN"
    level: 2
    href: "#sql-right-join"
  - id: "sql-select"
    title: "SQL SELECT"
    level: 2
    href: "#sql-select"
  - id: "sql-some"
    title: "SQL SOME"
    level: 2
    href: "#sql-some"
  - id: "sql-sum"
    title: "SQL SUM"
    level: 2
    href: "#sql-sum"
  - id: "sql-union"
    title: "SQL UNION"
    level: 2
    href: "#sql-union"
  - id: "sql-union-all"
    title: "SQL UNION ALL"
    level: 2
    href: "#sql-union-all"
  - id: "sql-where"
    title: "SQL WHERE"
    level: 2
    href: "#sql-where"
  - id: "sql-with"
    title: "SQL WITH"
    level: 2
    href: "#sql-with"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "کار با SQL"
    href: "index.html"
---

# مرجع نحو SQL

آن کلمه کلیدی SQL چگونه دوباره کار می‌کند؟

## SQL ALL

بررسی می‌کند که آیا همه مقادیر در یک زیرپرس‌وجو یک شرط را برآورده می‌کنند.

```
WITH widget_prices AS (
  SELECT price
  FROM products
  WHERE category = 'Widget'
)
SELECT
  title,
  price,
  category
FROM
  products
WHERE
  price > ALL (SELECT price FROM widget_prices);

```

## SQL AND

ردیف‌هایی که چندین شرط در آن‌ها درست است را فیلتر می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  category = 'Gizmo'
  AND price > 50;

```

## SQL ANY

بررسی می‌کند که آیا هر مقدار در یک زیرپرس‌وجو یک شرط را برآورده می‌کند. `ANY` و `SOME` یکسان هستند.

```
SELECT
  title,
  price
FROM
  products
WHERE
  price > ANY (
    SELECT price
    FROM products
    WHERE category = 'Widget'
  );

```

## SQL ARRAY

به شما امکان کار با آرایه‌های مقادیر را می‌دهد. (نحو بر اساس پایگاه داده متفاوت است، اما در اینجا یک مثال به سبک Postgres است.)

```
SELECT ARRAY[price, 100, 200] AS price_array
FROM products
LIMIT 1;

```

## SQL AVG

میانگین مقدار یک ستون عددی را محاسبه می‌کند.

```
SELECT
  AVG(price)
FROM
  products;

```

## SQL AS

یک نام مستعار برای یک ستون در نتایج ایجاد می‌کند.

```
SELECT
  title AS "Product Name",
  category AS "Product Category"
FROM
  products;

```

## SQL BETWEEN

بررسی می‌کند که آیا یک مقدار در یک محدوده (شامل) است.

```
SELECT
  *
FROM
  products
WHERE
  price BETWEEN 10 AND 20;

```

همچنین [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL CASE

مقادیر را بر اساس شرایط برمی‌گرداند، مثل if-else.

```
SELECT
  title,
  CASE
    WHEN price > 100 THEN 'Expensive'
    ELSE 'Affordable'
  END AS price_category
FROM
  products;

```

## SQL CAST

یک مقدار را از یک نوع داده به نوع دیگر تبدیل می‌کند.

```
CAST(24.99 AS VARCHAR) AS price_text,
CAST('2024-01-01' AS DATE) AS order_date

```

همچنین [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL COUNT

تعداد ردیف‌ها را می‌شمارد.

```
SELECT
  COUNT(*)
FROM
  orders;

```

## SQL CURRENT_DATE

تاریخ فعلی را از سیستم برمی‌گرداند.

```
SELECT
  CURRENT_DATE AS today,
  CURRENT_DATE - INTERVAL '1' DAY AS yesterday,
  CURRENT_DATE + INTERVAL '1' DAY AS tomorrow;

```

[`INTERVAL`](#sql-interval) و [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL DATE

یک مقدار تاریخ از یک رشته ایجاد می‌کند یا بخش تاریخ را از یک timestamp استخراج می‌کند.

```
-- Create a date from a string
SELECT DATE '2024-05-04' AS specific_date;

```

بیشتر پایگاه‌های داده '2025-05-04` را به عنوان تاریخ استنباط می‌کنند، اما بهتر است صریح باشید.

همچنین [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL CURRENT_TIME

زمان فعلی را از سیستم برمی‌گرداند.

```
SELECT
  CURRENT_TIME AS right_now,
  CURRENT_TIME + INTERVAL '30' MINUTE AS thirty_mins_later;

```

[`INTERVAL`](#sql-interval) و [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL DISTINCT

فقط مقادیر منحصر به فرد را برمی‌گرداند.

```
SELECT
  DISTINCT category
FROM
  products;

```

## SQL EXCEPT

ردیف‌هایی از پرس‌وجوی اول که در پرس‌وجوی دوم نیستند را برمی‌گرداند.

```
SELECT
  id
FROM
  people
EXCEPT
SELECT
  user_id
FROM
  orders;

```

## SQL EXISTS

بررسی می‌کند که آیا یک زیرپرس‌وجو هر ردیفی برمی‌گرداند.

```
SELECT
  name
FROM
  people
WHERE
  EXISTS (
    SELECT 1
    FROM orders
    WHERE orders.user_id = people.id
  );

```

## SQL EXTRACT

یک بخش خاص (سال، ماه، روز و غیره) را از یک تاریخ یا timestamp استخراج می‌کند.

```
SELECT
  created_at as "timestamp",
  EXTRACT(YEAR FROM created_at) AS "year",
  EXTRACT(MONTH FROM created_at) AS "month",
  EXTRACT(DAY FROM created_at) AS "day",
  EXTRACT(HOUR FROM created_at) AS "hour",
  EXTRACT(DOW FROM created_at) AS "day of week"
FROM
  orders;

```

که نتیجه می‌دهد:

```
| timestamp                  | year  | month | day | hour | day of week |
| -------------------------- | ----- | ----- | --- | ---- | ----------- |
| February 11, 2025, 9:40 PM | 2,025 | 2     | 11  | 21   | 3           |
| May 15, 2024, 8:04 AM      | 2,024 | 5     | 15  | 8    | 4           |
| December 6, 2025, 10:22 PM | 2,025 | 12    | 6   | 22   | 7           |
| August 22, 2025, 4:30 PM   | 2,025 | 8     | 22  | 16   | 6           |
| October 10, 2024, 3:34 AM  | 2,024 | 10    | 10  | 3    | 5           |
| November 6, 2025, 4:38 PM  | 2,025 | 11    | 6   | 16   | 5           |

```

همچنین [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL FROM

جدولی که باید پرس‌وجو شود را مشخص می‌کند.

```
SELECT
  *
FROM
  products;

```

## SQL GROUP BY

ردیف‌هایی که مقادیر یکسانی در ستون‌های مشخص شده دارند را گروه‌بندی می‌کند.

```
SELECT
  category,
  COUNT(*)
FROM
  products
GROUP BY
  category;

```

## SQL HAVING

گروه‌ها را پس از تجمیع فیلتر می‌کند (با GROUP BY استفاده می‌شود).

```
SELECT
  category,
  COUNT(*)
FROM
  products
GROUP BY
  category
HAVING
  COUNT(*) > 2;

```

## SQL IN

بررسی می‌کند که آیا یک مقدار با هر مقدار در یک فهرست یا زیرپرس‌وجو مطابقت دارد.

استفاده از یک فهرست مقادیر:

```
SELECT
  *
FROM
  products
WHERE
  category IN ('Gizmo', 'Widget');

```

استفاده از یک زیرپرس‌وجو:

```
SELECT
  *
FROM
  orders
WHERE
  user_id IN (
    SELECT id
    FROM people
    WHERE state = 'VT'
  );

```

## SQL INTERVAL

یک دوره زمانی برای محاسبات تاریخ/زمان مشخص می‌کند. واحدهای رایج شامل سال، ماه، هفته، روز، ساعت، دقیقه و ثانیه است.

می‌توانید از `INTERVAL` برای افزودن روز استفاده کنید:

```
SELECT
  created_at,
  -- Add 7 days to a date
  created_at + INTERVAL '7' DAY AS next_week
FROM
  orders;

```

کم کردن ماه:

```
SELECT
  created_at,
  -- Subtract 2 months from a date
  created_at - INTERVAL '2' MONTH AS two_months_ago
FROM
  orders;

```

واحدهای datetime SQL شامل:

- `YEAR`
- `MONTH`
- `DAY`
- `HOUR`
- `MINUTE` - `SECOND`

همچنین [فیلتر کردن SQL بر اساس تاریخ](../filtering/by-date.html) را ببینید.

## SQL INNER JOIN

ردیف‌هایی را برمی‌گرداند که در هر دو جدول یک تطابق وجود دارد.

```
SELECT
  orders.id,
  products.title
FROM
  orders
INNER JOIN products ON orders.product_id = products.id;

```

همچنین [ترکیب جداول با joinهای SQL](sql-joins.html) را ببینید.

## SQL INTERSECT

ردیف‌هایی که در هر دو پرس‌وجو ظاهر می‌شوند را برمی‌گرداند.

```
SELECT
  id
FROM
  people
INTERSECT
SELECT
  user_id
FROM
  orders;

```

## SQL IS NULL

برای مقادیر گم‌شده (null) بررسی می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  vendor IS NULL;

```

## SQL JOIN

ردیف‌ها را از دو یا چند جدول بر اساس یک ستون مرتبط ترکیب می‌کند.

```
SELECT
  orders.id,
  products.title
FROM
  orders
JOIN products ON orders.product_id = products.id;

```

همچنین [ترکیب جداول با joinهای SQL](sql-joins.html) را ببینید.

## SQL LEFT JOIN

همه ردیف‌ها را از جدول چپ، و ردیف‌های مطابق از جدول راست برمی‌گرداند.

```
SELECT
  people.name,
  orders.id
FROM
  people
LEFT JOIN orders ON people.id = orders.user_id;

```

همچنین [ترکیب جداول با joinهای SQL](sql-joins.html) را ببینید.

## SQL LIKE

ردیف‌ها را با تطابق الگو فیلتر می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  title LIKE '%Wool%';

```

همچنین [فیلتر کردن SQL بر اساس متن](../filtering/by-text.html) را ببینید.

## SQL LIMIT

تعداد *ردیف‌های* برگردانده شده را محدود می‌کند.

```
SELECT
  *
FROM
  products
LIMIT
  3;

```

## SQL MAX

حداکثر مقدار در یک ستون را برمی‌گرداند.

```
SELECT
  MAX(price)
FROM
  products;

```

## SQL MIN

حداقل مقدار در یک ستون را برمی‌گرداند.

```
SELECT
  MIN(price)
FROM
  products;

```

## SQL MOD

تابع ریاضی که باقیمانده یک تقسیم را برمی‌گرداند. می‌تواند برای نمونه‌گیری ردیف‌ها با IDهای توزیع شده تصادفی استفاده شود.

```
SELECT
  *
FROM
  products
WHERE
  MOD(id, 10) = 3;

```

## SQL NOT

یک شرط را نفی می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  NOT category = 'Gizmo';

```

## SQL NULL

داده گم‌شده یا ناشناخته را نشان می‌دهد.

```
SELECT
  *
FROM
  products
WHERE
  vendor IS NULL;

```

## SQL ON

شرط join بین جداول را مشخص می‌کند.

```
SELECT
  orders.id,
  products.title
FROM
  orders
JOIN products ON orders.product_id = products.id;

```

## SQL OR

ردیف‌هایی که حداقل یک شرط در آن‌ها درست است را فیلتر می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  category = 'Gizmo'
  OR price > 100;

```

## SQL ORDER BY

مجموعه نتیجه را بر اساس یک یا چند ستون مرتب می‌کند.

```
SELECT
  title,
  price
FROM
  products
ORDER BY
  price DESC;

```

## SQL RIGHT JOIN

همه ردیف‌ها را از جدول راست، و ردیف‌های مطابق از جدول چپ برمی‌گرداند.

```
SELECT
  orders.id,
  people.name
FROM
  orders
RIGHT JOIN people ON orders.user_id = people.id;

```

## SQL SELECT

ستون‌هایی که باید از یک جدول برگردانده شوند را مشخص می‌کند.

```
-- Get all columns
SELECT
  *
FROM
  products;

-- Get specific columns
SELECT
  title,
  category
FROM
  products;

```

## SQL SOME

مشابه `ANY` - بررسی می‌کند که آیا هر مقدار در یک زیرپرس‌وجو یک شرط را برآورده می‌کند.

```
SELECT
  title,
  price
FROM
  products
WHERE
  price > SOME (
    SELECT price
    FROM products
    WHERE category = 'Widget'
  );

```

## SQL SUM

مقادیر در یک ستون را جمع می‌کند.

```
SELECT
  SUM(price)
FROM
  products;

```

## SQL UNION

نتایج دو پرس‌وجو را ترکیب می‌کند (تکراری‌ها را حذف می‌کند).

```
SELECT
  title
FROM
  products
UNION
SELECT
  name
FROM
  people;

```

## SQL UNION ALL

نتایج دو پرس‌وجو را ترکیب می‌کند و همه ردیف‌ها را نگه می‌دارد، حتی تکراری‌ها. پس اگر همان مقدار در هر دو پرس‌وجو ظاهر شود، دو بار آن را خواهید دید.

```
SELECT
  title
FROM
  products
UNION ALL
SELECT
  name
FROM
  people;

```

## SQL WHERE

ردیف‌ها را بر اساس شرایط مشخص شده فیلتر می‌کند.

```
SELECT
  *
FROM
  products
WHERE
  MOD(id, 10) = 3;

```

## SQL WITH

یک عبارت جدول مشترک (CTE) که می‌توانید در پرس‌وجوی خود استفاده کنید را تعریف می‌کند. مثل یک مجموعه نتیجه موقت است.

```
WITH expensive_products AS (
  SELECT *
  FROM products
  WHERE price > 100
)
SELECT title FROM expensive_products;

```

[](ltv-with-metabase.html)
