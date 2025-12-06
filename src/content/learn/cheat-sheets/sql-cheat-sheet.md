---
title: "برگه راهنمای SQL"
description: "برگه راهنمای SQL ما را برای مبتدیان با نحوه فیلتر و تجمیع داده، مثال‌ها، بهترین روش‌ها و بیشتر دریافت کنید."
redirect_from:
  - /learn/cheat-sheets/sql-cheat-sheet
toc:
  - id: "sql-cheat-sheet"
    title: "برگه راهنمای SQL"
    level: 1
    href: "#sql-cheat-sheet"
  - id: "sql-cheat-sheet-for-beginners"
    title: "برگه راهنمای SQL برای مبتدیان"
    level: 2
    href: "#sql-cheat-sheet-for-beginners"
  - id: "example-data"
    title: "داده نمونه"
    level: 2
    href: "#example-data"
  - id: "getting-data"
    title: "دریافت داده"
    level: 2
    href: "#getting-data"
  - id: "get-all-columns-from-a-table"
    title: "دریافت همه ستون‌ها از یک جدول"
    level: 3
    href: "#get-all-columns-from-a-table"
  - id: "get-specific-columns"
    title: "دریافت ستون‌های خاص"
    level: 3
    href: "#get-specific-columns"
  - id: "get-unique-values-from-a-column"
    title: "دریافت مقادیر یکتا از یک ستون"
    level: 3
    href: "#get-unique-values-from-a-column"
  - id: "filtering-data"
    title: "فیلتر کردن داده"
    level: 2
    href: "#filtering-data"
  - id: "filter-rows-above-a-certain-amount"
    title: "فیلتر ردیف‌های بالاتر از مقدار مشخص"
    level: 3
    href: "#filter-rows-above-a-certain-amount"
  - id: "filter-rows-matching-multiple-conditions"
    title: "فیلتر ردیف‌های مطابق با چند شرط"
    level: 3
    href: "#filter-rows-matching-multiple-conditions"
  - id: "filter-rows-matching-either-condition"
    title: "فیلتر ردیف‌های مطابق با هر یک از شرط‌ها"
    level: 3
    href: "#filter-rows-matching-either-condition"
  - id: "filter-rows-by-a-list-of-values"
    title: "فیلتر ردیف‌ها بر اساس فهرست مقادیر"
    level: 3
    href: "#filter-rows-by-a-list-of-values"
  - id: "exclude-rows-with-specific-values"
    title: "حذف ردیف‌ها با مقادیر خاص"
    level: 3
    href: "#exclude-rows-with-specific-values"
  - id: "filter-rows-within-a-range"
    title: "فیلتر ردیف‌ها در یک محدوده"
    level: 3
    href: "#filter-rows-within-a-range"
  - id: "filter-rows-by-text-patterns"
    title: "فیلتر ردیف‌ها بر اساس الگوهای متنی"
    level: 3
    href: "#filter-rows-by-text-patterns"
  - id: "filter-rows-by-date"
    title: "فیلتر ردیف‌ها بر اساس تاریخ"
    level: 3
    href: "#filter-rows-by-date"
  - id: "aggregating-data"
    title: "تجمیع داده"
    level: 2
    href: "#aggregating-data"
  - id: "count-all-rows"
    title: "شمارش همه ردیف‌ها"
    level: 3
    href: "#count-all-rows"
  - id: "count-distinct-values"
    title: "شمارش مقادیر یکتا"
    level: 3
    href: "#count-distinct-values"
  - id: "calculate-sum"
    title: "محاسبه مجموع"
    level: 3
    href: "#calculate-sum"
  - id: "calculate-average-value"
    title: "محاسبه مقدار میانگین"
    level: 3
    href: "#calculate-average-value"
  - id: "group-rows-by-a-column"
    title: "گروه‌بندی ردیف‌ها بر اساس یک ستون"
    level: 3
    href: "#group-rows-by-a-column"
  - id: "group-rows-and-calculate-sums"
    title: "گروه‌بندی ردیف‌ها و محاسبه مجموع‌ها"
    level: 3
    href: "#group-rows-and-calculate-sums"
  - id: "filter-grouped-results"
    title: "فیلتر نتایج گروه‌بندی شده"
    level: 3
    href: "#filter-grouped-results"
  - id: "use-case-for-conditional-logic"
    title: "استفاده از CASE برای منطق شرطی"
    level: 3
    href: "#use-case-for-conditional-logic"
  - id: "organizing-results"
    title: "سازماندهی نتایج"
    level: 2
    href: "#organizing-results"
  - id: "sort-rows-in-ascending-order"
    title: "مرتب‌سازی ردیف‌ها به ترتیب صعودی"
    level: 3
    href: "#sort-rows-in-ascending-order"
  - id: "sort-rows-in-descending-order"
    title: "مرتب‌سازی ردیف‌ها به ترتیب نزولی"
    level: 3
    href: "#sort-rows-in-descending-order"
  - id: "restrict-the-number-of-rows-returned"
    title: "محدود کردن تعداد ردیف‌های برگردانده شده"
    level: 3
    href: "#restrict-the-number-of-rows-returned"
  - id: "sort-and-return-only-the-top-results"
    title: "مرتب‌سازی و برگرداندن فقط نتایج برتر"
    level: 3
    href: "#sort-and-return-only-the-top-results"
  - id: "sort-rows-by-multiple-columns"
    title: "مرتب‌سازی ردیف‌ها بر اساس چند ستون"
    level: 3
    href: "#sort-rows-by-multiple-columns"
  - id: "skip-rows-with-offset"
    title: "رد شدن از ردیف‌ها با OFFSET"
    level: 3
    href: "#skip-rows-with-offset"
  - id: "more-sql-resources"
    title: "منابع بیشتر SQL"
    level: 2
    href: "#more-sql-resources"
breadcrumbs:
  - title: "خانه"
    href: "../index.html"
  - title: "برگه راهنمای SQL"
    href: "sql-cheat-sheet.html"
---

# برگه راهنمای SQL

برگه راهنمای SQL ما را برای مبتدیان با نحوه فیلتر و تجمیع داده، مثال‌ها، بهترین روش‌ها و بیشتر دریافت کنید.

![برگه راهنمای SQL](../images/cheat-sheets/sql-cheat-sheet.png)

[دانلود PDF](../../files/cheatsheets/sql-cheat-sheet.pdf)

## برگه راهنمای SQL برای مبتدیان

SQL را با این برگه راهنمای SQL دوست‌دار مبتدی یاد بگیرید. چه در حال کاوش داده در متابیس باشید، تمرین پرس‌وجوهای SQL، یا مرور اصول، این برگه راهنما همه دستورات ضروری SQL را به شما می‌دهد.

برای تیم داده، یک منبع عالی برای اشتراک‌گذاری با کاربران کسب‌وکار است تا متوجه شوند SQL فقط پرسیدن سؤال از پایگاه داده است و شروع به کشیدن داده خود بدون انتظار برای تیم شما کنند.

## داده نمونه

ما از دو جدول در سراسر این برگه راهنما استفاده خواهیم کرد.

**`customers`**

| customer_id | customer_name | country |
| --- | --- | --- |
| 1 | Alice | USA |
| 2 | Carlos | Mexico |
| 3 | Bob | Canada |
| 4 | Diana | France |

**`orders`**

| order_id | customer_id | amount | order_date |
| --- | --- | --- | --- |
| 101 | 1 | 250 | 2025-08-05 |
| 102 | 2 | 75 | 2025-08-06 |
| 103 | 3 | 120 | 2025-08-07 |
| 104 | 4 | 45 | 2025-08-08 |

## دریافت داده

از `SELECT` و `FROM` برای انتخاب داده از یک جدول استفاده کنید.

### دریافت همه ستون‌ها از یک جدول

```sql
SELECT *
FROM customers;
```

### دریافت ستون‌های خاص

```sql
SELECT customer_name
FROM orders;
```

### دریافت مقادیر یکتا از یک ستون

```sql
SELECT DISTINCT country
FROM customers;
```

## فیلتر کردن داده

از `WHERE` برای فیلتر ردیف‌ها بر اساس شرط‌ها استفاده کنید.

### فیلتر ردیف‌های بالاتر از مقدار مشخص

```sql
SELECT *
FROM orders
WHERE amount > 100;
```

### فیلتر ردیف‌های مطابق با چند شرط

```sql
SELECT *
FROM orders
WHERE order_date > '2025-08-06'
  AND amount > 100;
```

### فیلتر ردیف‌های مطابق با هر یک از شرط‌ها

```sql
SELECT *
FROM customers
WHERE country = 'USA'
   OR country = 'Canada';
```

### فیلتر ردیف‌ها بر اساس فهرست مقادیر

```sql
SELECT *
FROM customers
WHERE country IN ('USA', 'Canada');
```

### حذف ردیف‌ها با مقادیر خاص

```sql
SELECT *
FROM customers
WHERE country NOT IN ('USA', 'Canada');
```

### فیلتر ردیف‌ها در یک محدوده

```sql
SELECT *
FROM orders
WHERE amount BETWEEN 50 AND 200;
```

### فیلتر ردیف‌ها بر اساس الگوهای متنی

```sql
SELECT *
FROM customers
WHERE customer_name LIKE 'A%';
```

### فیلتر ردیف‌ها بر اساس تاریخ

```sql
SELECT *
FROM orders
WHERE order_date >= '2025-08-06';
```

## تجمیع داده

از `COUNT`، `SUM`، `AVG`، و `GROUP BY` برای خلاصه کردن داده استفاده کنید.

### شمارش همه ردیف‌ها

```sql
SELECT COUNT(*)
FROM orders;
```

### شمارش مقادیر یکتا

```sql
SELECT COUNT(DISTINCT customer_id)
FROM orders;
```

### محاسبه مجموع

```sql
SELECT SUM(amount)
FROM orders;
```

### محاسبه مقدار میانگین

```sql
SELECT AVG(amount)
FROM orders;
```

### گروه‌بندی ردیف‌ها بر اساس یک ستون

```sql
SELECT country, COUNT(*)
FROM customers
GROUP BY country;
```

### گروه‌بندی ردیف‌ها و محاسبه مجموع‌ها

```sql
SELECT customer_id, SUM(amount)
FROM orders
GROUP BY customer_id;
```

### فیلتر نتایج گروه‌بندی شده

```sql
SELECT customer_id, SUM(amount)
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 100;
```

### استفاده از CASE برای منطق شرطی

```sql
SELECT order_id, amount,
  CASE
    WHEN amount > 100 THEN 'High'
    ELSE 'Low'
  END AS order_size
FROM orders;
```

## سازماندهی نتایج

نتایج را با `ORDER BY` مرتب کنید، آن‌ها را با `LIMIT` محدود کنید.

### مرتب‌سازی ردیف‌ها به ترتیب صعودی

```sql
SELECT *
FROM orders
ORDER BY order_date;
```

### مرتب‌سازی ردیف‌ها به ترتیب نزولی

```sql
SELECT *
FROM orders
ORDER BY amount DESC;
```

### محدود کردن تعداد ردیف‌های برگردانده شده

```sql
SELECT *
FROM customers
LIMIT 3;
```

### مرتب‌سازی و برگرداندن فقط نتایج برتر

```sql
SELECT order_id, amount
FROM orders
ORDER BY amount DESC
LIMIT 3;
```

### مرتب‌سازی ردیف‌ها بر اساس چند ستون

```sql
SELECT customer_name, country
FROM customers
ORDER BY country ASC, customer_name ASC;
```

### رد شدن از ردیف‌ها با OFFSET

```sql
SELECT *
FROM orders
ORDER BY order_date
LIMIT 3 OFFSET 2;
```

## منابع بیشتر SQL

این برگه راهنما راهی عالی برای شروع SQL است، اما وقتی با اصول راحت شدید، ممکن است بخواهید تکنیک‌های پیشرفته‌تر را کاوش کنید و عمیق‌تر به تحلیل داده بپردازید. ما شما را در آنجا با مسیر یادگیری SQL خود پوشش داده‌ایم، که شامل مقالاتی مثل:

- [فیلتر SQL بر اساس متن](../sql/filtering/by-text.html)
- [فیلتر SQL بر اساس تاریخ](../sql/filtering/by-date.html)
- [ترکیب جداول با SQL UNION](../sql/combining-tables/sql-union.html)
- [بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL](../sql/working-with-sql/sql-best-practices.html)
- [اشکال‌زدایی خطاهای نحو SQL](../sql/debugging-sql/sql-syntax.html)
- و خیلی بیشتر: [یادگیری SQL](../sql/index.html)
