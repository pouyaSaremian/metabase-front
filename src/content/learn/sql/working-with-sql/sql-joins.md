---
title: "ترکیب جداول با join"
description: "نحوه ترکیب اطلاعات از دو جدول با یک join."
redirect_from:
  - /learn/sql/working-with-sql/sql-joins
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/sql-joins
toc:
  - id: "combining-tables-with-joins"
    title: "ترکیب جداول با join"
    level: 1
    href: "#combining-tables-with-joins"
  - id: "example-join-using-the-sample-database"
    title: "مثال join با استفاده از پایگاه داده نمونه"
    level: 2
    href: "#example-join-using-the-sample-database"
  - id: "the-query"
    title: "پرس‌وجو"
    level: 3
    href: "#the-query"
  - id: "joining-multiple-tables"
    title: "Join کردن چندین جدول"
    level: 2
    href: "#joining-multiple-tables"
  - id: "joins-on-multiple-conditions"
    title: "Joinها با چندین شرط"
    level: 2
    href: "#joins-on-multiple-conditions"
  - id: "different-types-of-joins"
    title: "انواع مختلف join"
    level: 2
    href: "#different-types-of-joins"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "ترکیب جداول با SQL"
    href: "../combining-tables/index.html"
---

# ترکیب جداول با join

نحوه ترکیب اطلاعات از دو جدول با یک join.

داده‌هایی در یک جدول دارید که می‌خواهید با داده از جدول دیگر ترکیب کنید. برای انجام این کار، باید از `JOIN` استفاده کنید تا به پایگاه داده خود بگویید چگونه ردیف‌ها از یک جدول به ردیف‌ها در جدول دیگر مربوط می‌شوند. (توجه داشته باشید که joinها فقط با پایگاه‌های داده رابطه‌ای کار می‌کنند، و فقط می‌توانید [جداولی را join کنید که در همان پایگاه داده زندگی می‌کنند](../../metabase-basics/querying-and-dashboards/questions/cross-db-joins.html).)

برای پس‌زمینه درباره joinها، [Joinها در متابیس](../../metabase-basics/querying-and-dashboards/questions/joins-in-metabase.html) را بررسی کنید، که نحوه ایجاد joinها با استفاده از query builder را توضیح می‌دهد—بدون نیاز به کد. توجه داشته باشید که اصطلاح "join" تا حدی گمراه‌کننده است، چون جداول را متصل نمی‌کنید. شما ردیف‌ها را از دو (یا بیشتر) جدول مختلف می‌گیرید و یک مجموعه *جدید* از ردیف‌ها را که ستون‌ها را در هر دو جدول ترکیب می‌کند برمی‌گردانید.

> این مقاله نحوه ایجاد joinها با استفاده از SQL با استفاده از پایگاه داده نمونه را نشان می‌دهد، و می‌توانید در متابیس با کلیک روی **+ New**، انتخاب **SQL Query**، و انتخاب **Raw data** > **Sample database** دنبال کنید. همچنین می‌توانید داده تمرینی خود را با استفاده از [تولیدکننده مجموعه داده AI](../../../ai-data-generator.html) تولید کنید.

## مثال join با استفاده از پایگاه داده نمونه

بیایید بگوییم می‌خواهیم یک سؤال بپرسیم که ردیف‌ها را با ستون‌ها از چندین جدول برمی‌گرداند. به عنوان مثال، می‌خواهیم تاریخ سفارش، ID و total را بدانیم، اما همچنین برخی اطلاعات درباره محصول سفارش داده شده را شامل کنیم. در اینجا جدولی که می‌خواهیم تولید کنیم:

```
| Order date | Order ID | Product Title       | Product Category | Product Rating | Order total |
|------------|----------|---------------------|------------------|----------------|-------------|
| 12/25/2016 | 448      | Rustic Paper Wallet | Gizmo            | 4.6            | 30.86326113 |
| ...        | ...      | ...                 | ...              | ...            | ...         |

```

حالا بیایید به جداول در پایگاه داده نمونه خود نگاه کنیم. خواهیم دید که می‌توانیم ستون‌های لازم را از دو جدول دریافت کنیم، جدول `orders`:

```
| ID  | Person | Product ID | Subtotal    | Tax  | Total       | Discount | Created At | Quantity | Person       | Product ID             |
|-----|--------|------------|-------------|------|-------------|----------|------------|----------|--------------|------------------------|
| 1   | 1      | 14         | 37.64814539 | 2.07 | 39.71814539 |          | 2/11/2019  | 2        | Hudson Borer | Awesome Concrete Shoes |
| ... | ...    | ...        | ...         | ...  | ...         | ...      | ...        | ...      | ...          | ...                    |

```

و جدول `Products`:

```
| ID  | Ean           | Title               | Category | Vendor                       | Price       | Rating | Created At |
|-----|---------------|---------------------|----------|------------------------------|-------------|--------|------------|
| 1   | 1018947080336 | Rustic Paper Wallet | Gizmo    | Swaniawski, Casper and Hilll | 29.46326113 | 4.6    | 7/19/2017  |
| ... | ...           | ...                 | ...      | ...                          | ...         | ...    | ...        |

```

توجه داشته باشید که در **SQL Editor**، می‌توانید اطلاعات درباره جداول و فیلدها در پایگاه داده خود را با کلیک روی **آیکون کتاب** برای باز کردن نوار کناری مرجع داده مشاهده کنید. بخش زیادی از کار یادگیری نحوه join کردن جداول شناخت جداولی است که با آن‌ها کار می‌کنید و نحوه ارتباط آن‌ها با یکدیگر.

![The Data Reference sidebar in the SQL editor shows info about tables and fields in your database.](../../images/sql-joins/data-reference.png)

باید ستون‌ها را از هر دو این جداول بگیریم تا نتایج هدف خود را تولید کنیم، و این کار را با استفاده از یک join انجام می‌دهیم.

### پرس‌وجو

در اینجا پاسخ از ابتدا:

```
SELECT
  o.created_at AS "order date",
  o.id AS "order id",
  p.title AS "product title",
  p.category AS "product category",
  p.rating AS "product rating",
  o.total AS "order total"
FROM
-- joining orders to products
  orders AS o
  JOIN products AS p ON o.product_id = p.id

```

توجه داشته باشید که کامنت (خطی که با `--` شروع می‌شود) ضروری نیست. فقط برای اشاره به بخش کلیدی کد است: عبارت join.

این پرس‌وجو به پایگاه داده می‌گوید که ردیف‌ها در جدول `Orders` می‌توانند با ردیف‌ها در جدول `Products` با "هم‌تراز کردن" کلیدهای خارجی در جدول `Orders` با کلیدهای موجودیت (که کلیدهای اصلی نیز نامیده می‌شوند) جدول `Products` ترکیب شوند. همچنین هر جدول را نام مستعار داده‌ایم (`orders AS o` و `products AS p`)، پس می‌توانید در عبارت `SELECT` بگویید هر فیلد از کدام جدول می‌آید (`o.created_at` از جدول `orders` می‌آید، و غیره).

با کلید موجودیت، منظورمان ستونی در یک جدول است که شامل شناسه منحصر به فرد هر ردیف است. در جدول `Orders`، هر ردیف یک سفارش با یک ID است. همین در مورد محصولات در جدول `Products` صادق است: هر ردیف یک محصول با یک ID است. با کلید خارجی، منظورمان ستونی است که به کلید موجودیت در جدول دیگر ارجاع می‌دهد. در این مورد، جدول `Orders` شامل یک `product_id` است که به یک ردیف خاص در جدول `Products` اشاره می‌کند. اگر جدول `Products` را در **نوار کناری مرجع داده** بررسی کنیم، خواهیم دید که دو اتصال دارد، یکی به جدول `Orders` و یکی به جدول `reviews`.

![The Products table has connections to the Orders and Reviews tables.](../../images/sql-joins/table-connections.png)

می‌توانستیم همان نتایج را با ترکیب هر ردیف در `Products` با هر ردیف در `Orders` و سپس فیلتر کردن با یک بند `WHERE` مثل این دریافت کنیم:

```
SELECT
  o.created_at as "order date",
  o.id as "order id",
  p.title as "product title",
  p.category as "product category",
  p.rating as "product rating",
  o.total as "order total"

-- a join using a WHERE clause to "line up" the entity and foreign keys
FROM
  orders AS o,
  products AS p
WHERE
  o.product_id = p.id

```

این پرس‌وجو می‌گوید: هر ردیف از جدول `Orders` را با هر ردیف از جدول `Products` ترکیب کنید، سپس نتایج را فیلتر کنید تا فقط ردیف‌هایی را شامل شود که `product_id` در جدول `Orders` با `id` در جدول `Products` مطابقت دارد. ما توصیه می‌کنیم از فرم اول (با `ON`) برای جلوگیری از سردرگمی استفاده کنید: `ON` *همیشه* شرط برای یک join را معرفی می‌کند، در حالی که `WHERE` برای انواع فیلتر کردن استفاده می‌شود. برای بیشتر، [بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL](sql-best-practices.html) را بررسی کنید.

بیایید روی آن عبارت join تمرکز کنیم:

```
FROM
-- joining orders to products
  orders AS o
  JOIN products AS p ON o.product_id = p.id

```

وقتی جداول را join می‌کنید، از کلمه کلیدی `ON` برای مشخص کردن کدام فیلد در جدول A (`Orders`) با جدول B (`Products`) مطابقت دارد استفاده می‌کنید، تا پایگاه داده بفهمد چگونه داده را "هم‌تراز کند". `o.product_id = p.id` یک عبارت است که به true یا false حل می‌شود؛ پایگاه داده فقط ردیف‌هایی را برمی‌گرداند که عبارت true است.

## Join کردن چندین جدول

می‌توانید چندین join را با فهرست کردن هر نوع join و شرط آن زنجیره کنید. در اینجا یک join که شامل فیلدها از جدول `people` است:

```
SELECT
  *
FROM
  orders AS o
  JOIN products AS p ON o.product_id = p.id
  JOIN people AS u ON o.user_id = u.id

```

نیاز به اسکرول افقی زیادی در اینجا دارید، چون این پرس‌وجو ستون‌های زیادی برمی‌گرداند (در واقع همه ستون‌ها از هر جدول). و اطلاعات تکراری ردیف به ردیف خواهید دید. به عنوان مثال، نتایج آدرس مشتری را برای هر سفارشی که مشتری ثبت کرده تکرار می‌کند.

```
| ID  | USER_ID | PRODUCT_ID | SUBTOTAL    | TAX | TOTAL       | DISCOUNT | CREATED_AT       | QUANTITY | ID  | EAN           | TITLE               | CATEGORY | VENDOR                       | PRICE       | RATING | CREATED_AT      | ID  | ADDRESS                 | EMAIL                  | PASSWORD                             | NAME         | CITY    | LONGITUDE  | STATE | SOURCE | BIRTH_DATE | ZIP   | LATITUDE | CREATED_AT    |
|-----|---------|------------|-------------|-----|-------------|----------|------------------|----------|-----|---------------|---------------------|----------|------------------------------|-------------|--------|-----------------|-----|-------------------------|------------------------|--------------------------------------|--------------|---------|------------|-------|--------|------------|-------|----------|---------------|
| 448 | 61      | 1          | 29.46326113 | 1.4 | 30.86326113 |          | 12/25/2016 22:19 | 2        | 1   | 1018947080336 | Rustic Paper Wallet | Gizmo    | Swaniawski, Casper and Hilll | 29.46326113 | 4.6    | 7/19/2017 19:44 | 61  | 7100 Hudson Chapel Road | labadie.lina@gmail.com | 2da78e08-2bf7-41b8-a737-1acd815fb99c | Lina Labadie | Catawba | -81.017265 | NC    | Google | 3/28/1984  | 28609 | 35.69917 | 6/5/2016 4:03 |
| ... | ...     | ...        | ...         | ... | ...         | ...      | ...              | ...      | ... | ...           | ...                 | ...      | ...                          | ...         | ...    | ...             | ... | ...                     | ...                    | ...                                  | ...          | ...     | ...        | ...   | ...    | ...        | ...   | ...      | ...           |

```

در پرس‌وجوی بالا، می‌توانید تعداد ستون‌های برگشتی را با جایگزین کردن `*` در عبارت `SELECT` برای مشخص کردن فقط ستون‌هایی که نیاز دارید کاهش دهید.

## Joinها با چندین شرط

می‌توانید چندین عبارت true/false را در عبارت `ON` برای محدود کردن نتایج شامل کنید. این عبارات true/false به عنوان **predicate** شناخته می‌شوند. ما قبلاً از predicateها برای join کردن جداول بالا استفاده کرده‌ایم، مثل `o.user_id = u.id`.

بیایید بگوییم می‌خواهیم بدانیم:

- میانگین قیمت برای سفارش‌ها،
- بر اساس دسته محصول،
- که با قیمت کامل فروخته شده‌اند.

باید قیمت واحد را با استفاده از داده از جدول `Orders` محاسبه کنیم، و دسته محصول و قیمت فهرست شده را از جدول `Products` بگیریم. در اینجا پرس‌وجوی ما:

```
SELECT
  p.category AS "Product category",
  AVG(p.price) AS "Average price",
  COUNT(*) AS "Count of full price orders"
FROM
  orders AS o
  -- first predicate
  JOIN products AS p ON o.product_id = p.id
  -- second predicate: calculate the unit price
  -- and see if it corresponds to the product's listed price.
  AND o.subtotal / o.quantity = p.price
WHERE
  -- guard against divide-by-zero scenarios
  o.quantity > 0
GROUP BY
  p.category
ORDER BY
  COUNT(*) DESC

```

که به ما می‌دهد:

```
|Product category|Average price|Count of full price orders|
|----------------|-------------|--------------------------|
|Widget          |54.96699655  |168                       |
|Gizmo           |51.49700878  |137                       |
|Gadget          |54.87034242  |136                       |
|Doohickey       |51.69197973  |123                       |

```

## انواع مختلف join

نوع خاص join که در طول این مقاله استفاده کرده‌ایم به عنوان یک **inner join** شناخته می‌شود. راه‌های دیگری برای join کردن جداول وجود دارد؛ مقاله ما درباره [انواع join در SQL](sql-join-types.html) را ببینید.

[](sql-join-types.html)
