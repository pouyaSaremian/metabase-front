---
title: "ترکیب جداول با SQL UNION"
description: "نحوه ترکیب ردیف‌ها از دو جدول با استفاده از SQL UNION."
redirect_from:
  - /learn/sql/combining-tables/sql-union
toc:
  - id: "combining-tables-with-sql-union"
    title: "ترکیب جداول با SQL UNION"
    level: 1
    href: "#combining-tables-with-sql-union"
  - id: "what-is-sql-union"
    title: "SQL UNION چیست"
    level: 2
    href: "#what-is-sql-union"
  - id: "unions-vs-joins-vs-intersections-when-to-use-each-one"
    title: "UNION در مقابل JOIN در مقابل INTERSECT: چه زمانی از هر کدام استفاده کنیم"
    level: 2
    href: "#unions-vs-joins-vs-intersections-when-to-use-each-one"
  - id: "combine-query-results-with-sql-union"
    title: "ترکیب نتایج پرس‌وجو با SQL UNION"
    level: 2
    href: "#combine-query-results-with-sql-union"
  - id: "union-all-takes-all-the-rows-union-tries-to-deduplicate-rows"
    title: "UNION ALL همه ردیف‌ها را می‌گیرد، UNION سعی می‌کند ردیف‌ها را تک‌تک کند"
    level: 2
    href: "#union-all-takes-all-the-rows-union-tries-to-deduplicate-rows"
  - id: "why-in-general-you-should-prefer-union-all-to-union"
    title: "چرا (به طور کلی) باید UNION ALL را به UNION ترجیح دهید"
    level: 2
    href: "#why-in-general-you-should-prefer-union-all-to-union"
  - id: "sql-union-of-complete-tables"
    title: "SQL UNION جداول کامل"
    level: 2
    href: "#sql-union-of-complete-tables"
  - id: "union-all-example-building-a-sales-funnel-in-sql"
    title: "مثال UNION ALL: ساخت قیف فروش در SQL"
    level: 2
    href: "#union-all-example-building-a-sales-funnel-in-sql"
  - id: "union-all-example-tracking-user-flow-in-sql"
    title: "مثال UNION ALL: ردیابی جریان کاربر در SQL"
    level: 2
    href: "#union-all-example-tracking-user-flow-in-sql"
  - id: "union-all-example-combine-data-from-historical-tables"
    title: "مثال UNION ALL: ترکیب داده از جداول تاریخی"
    level: 2
    href: "#union-all-example-combine-data-from-historical-tables"
  - id: "union-all-example-add-a-summary-row"
    title: "مثال UNION ALL: افزودن یک ردیف خلاصه"
    level: 2
    href: "#union-all-example-add-a-summary-row"
  - id: "how-sql-union-works"
    title: "SQL UNION چگونه کار می‌کند"
    level: 2
    href: "#how-sql-union-works"
  - id: "sql-union-takes-columns-from-the-first-query"
    title: "SQL UNION ستون‌ها را از اولین پرس‌وجو می‌گیرد"
    level: 3
    href: "#sql-union-takes-columns-from-the-first-query"
  - id: "sql-union-columns-must-be-in-the-same-order"
    title: "ستون‌های SQL UNION باید به همان ترتیب باشند"
    level: 3
    href: "#sql-union-columns-must-be-in-the-same-order"
  - id: "unioned-tables-must-have-the-same-number-of-columns"
    title: "جداول union شده باید تعداد ستون‌های یکسانی داشته باشند"
    level: 3
    href: "#unioned-tables-must-have-the-same-number-of-columns"
  - id: "column-data-types-must-match-in-sql-unions"
    title: "انواع داده ستون‌ها باید در SQL UNIONها مطابقت داشته باشند"
    level: 3
    href: "#column-data-types-must-match-in-sql-unions"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "ترکیب جداول با SQL"
    href: "index.html"
---

# ترکیب جداول با SQL UNION

نحوه ترکیب ردیف‌ها از دو جدول با استفاده از SQL UNION.

## SQL UNION چیست

بیایید بگوییم می‌خواهید تعداد افرادی را که در هر مرحله از قیف فروش دارید ببینید، اما یک مشکل وجود دارد: لیدها و prospects در یک جدول زندگی می‌کنند (اگرچه با فیلترهای مختلف)، داده‌های trial در جدول دیگری هستند، و داده‌های مشتری در جدول دیگری. باید همه آن‌ها را بشمارید و آن اطلاعات را در یک جدول ترکیب کنید، اما همه آن‌ها منطق متفاوتی دارند و از منابع مختلف استفاده می‌کنند. SQL یک عملگر خاص `UNION` دارد که به شما امکان می‌دهد نتایج پرس‌وجو از جداول مختلف را ترکیب کنید.

دو عملگر `UNION` در SQL وجود دارد - `UNION` و `UNION ALL`. بیشتر این مقاله برای هر دو `UNION` و `UNION ALL` اعمال می‌شود.

> نیاز به یادآوری سریع قبل از ورود به SQL پیشرفته دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما را برای دستورات و نحو اصلی بررسی کنید. همچنین برای به اشتراک گذاشتن با همکارانی که تازه در تحلیل داده شروع کرده‌اند عالی است.

## UNION در مقابل JOIN در مقابل INTERSECT: چه زمانی از هر کدام استفاده کنیم

حداقل سه راه برای ترکیب نتایج پرس‌وجوها در SQL وجود دارد: `JOIN`، `UNION` و `INTERSECT`. آن‌ها اهداف مختلفی دارند:

- از `UNION` استفاده کنید وقتی می‌خواهید *ردیف‌های* بیشتری به نتایج خود اضافه کنید.
- از `JOIN` برای افزودن *ستون‌های* بیشتر به نتایج خود استفاده کنید.
- از `INTERSECT` استفاده کنید وقتی می‌خواهید مجموعه مشترک ردیف‌ها بین جداول را پیدا کنید.

![Union](../../images/sql-union/union.png)

## ترکیب نتایج پرس‌وجو با SQL UNION

برای دیدن اینکه `UNION` چه می‌کند، بیایید پرس‌وجوی SQL زیر را اجرا کنیم (مثلاً می‌توانید آن را [در متابیس](../../../docs/latest/questions/native-editor/writing-sql.html) اجرا کنید):

```
SELECT "Kitten" as pet_type, 0.5 as pet_age

UNION ALL

SELECT "Puppy", 2

UNION ALL

SELECT "Bird", 17;

```

نتیجه این است:

```txt
| pet_type | pet_age |
| -------- | ------- |
| Kitten   | 0.5     |
| Puppy    | 2       |
| Bird     | 17      |

```

چه اتفاقی می‌افتد:

1. SQL هر پرس‌وجوی `SELECT` بین بندهای `UNION` را اجرا می‌کند.
2. ردیف‌های نتایج را روی هم می‌چیند.
3. از نام‌های مستعار (`AS "Kitten"`) از اولین پرس‌وجو به عنوان عنوان‌های ستون استفاده می‌کند.

پرس‌وجوهایی که union می‌شوند (آیا این یک کلمه است؟..) نیازی به برگرداندن یک خط واحد ندارند - پرس‌وجوها می‌توانند شامل فیلترها، گروه‌بندی، CTE و غیره باشند. به عنوان مثال، بیایید بگوییم دو پرس‌وجو دارید:

**اولین پرس‌وجو**

```
SELECT
    breed,
    count(*)
FROM kittens
GROUP BY breed;

```

و اولین پرس‌وجو برمی‌گرداند:

```txt
| BREED              | COUNT(*)  |
| ------------------ | --------- |
| Domestic shorthair | 23        |
| Domestic longhair  | 10        |
| Siamese            | 3         |

```

**دومین پرس‌وجو**

```
SELECT
    breed,
    count(*)
FROM puppies
GROUP BY breed;

```

و دومین پرس‌وجو برمی‌گرداند:

```txt
| BREED         | COUNT(*)  |
| ------------- | --------- |
| Beagle        | 3         |
| Borzoi        | 1         |
| Corgi         | 5         |
| Very good boy | 37        |

```

سپس union این پرس‌وجوها:

```
-- First query
SELECT
    breed,
    count(*)
FROM kittens
GROUP BY color

UNION ALL

-- Second query
SELECT
    breed,
    count(*)
FROM puppies
GROUP BY color

```

و نتیجه پرس‌وجوی `UNION ALL`:

```txt
| BREED              | COUNT(*)  |
| ------------------ | --------- |
| Domestic shorthair | 23        |
| Domestic longhair  | 10        |
| Siamese            | 3         |
| Beagle             | 3         |
| Borzoi             | 1         |
| Corgi              | 5         |
| Very good boy      | 37        |

```

پس `UNION ALL` فقط پرس‌وجوها را یکی یکی اجرا می‌کند و نتایج را روی هم می‌چیند. برخی تفاوت‌های ظریف در نحوه مدیریت `UNION (ALL)` برای [نام ستون‌ها](#sql-union-takes-columns-from-the-first-query)، [ترتیب ستون](#sql-union-columns-must-be-in-the-same-order) و [انواع ستون](#column-data-types-must-match-in-sql-unions) وجود دارد، اما در پایه‌ترین سطح، فقط ردیف‌ها را روی هم می‌چیند.

## UNION ALL همه ردیف‌ها را می‌گیرد، UNION سعی می‌کند ردیف‌ها را تک‌تک کند

- `UNION ALL` نتایج پرس‌وجو را می‌گیرد و آن‌ها را روی هم می‌چیند.
- `UNION` (بدون `ALL`) همان کار را انجام می‌دهد، اما همچنین سعی می‌کند **ردیف‌ها را تک‌تک کند**.

پس به عنوان مثال، بیایید بگوییم دو پرس‌وجو دارید:

**اولین پرس‌وجو**

```
SELECT
    color,
    count(*)
FROM kittens
GROUP BY color;

```

```txt
| COLOR  | COUNT(*)  |
| ------ | --------- |
| Orange | 18        |
| Black  | 10        |
| White  | 8         |

```

**دومین پرس‌وجو**

```
SELECT
    color,
    count(*)
FROM puppies
GROUP BY color;

```

```txt
| COLOR | COUNT(*)  |
| ----- | --------- |
| Black | 10        |
| Brown | 23        |
| White | 15        |

```

سپس نتیجه `UNION ALL`:

```txt
| COLOR  | COUNT(*)  |
| ------ | --------- |
| Orange | 18        |
| Black  | 10        |
| White  | 8         |
| Black  | 10        |
| Brown  | 23        |
| White  | 15        |

```

برخی رنگ‌ها ("Black" و "White") چندین ردیف دارند.
`UNION` سعی می‌کند آن ردیف‌های تکراری را تک‌تک کند:

```txt
| COLOR  | COUNT(*)  |
| ------ | --------- |
| Orange | 18        |
| Black  | 10        |
| White  | 8         |
| Brown  | 23        |
| White  | 15        |

```

ردیف `| Black | 10 |` در نتایج هر دو پرس‌وجو ظاهر می‌شود، پس `UNION` یکی از ردیف‌ها را حذف می‌کند. در مورد ردیف‌های `White`: حتی اگر رنگ `White` دو بار ظاهر شود، این ردیف‌ها *تکراری نیستند*. یک ردیف `| White | 8 |` است و دیگری `| White | 10 |` است، پس `UNION` هر دو را نگه می‌دارد.

SQL `UNION` تک‌تک کردن را پس از بازیابی نتایج پرس‌وجو انجام می‌دهد، پس اگر هر بند `LIMIT` یا `ORDER` در پرس‌وجوهای فردی دارید، نتیجه یک `UNION` ممکن است آن‌ها را رعایت نکند.

## چرا (به طور کلی) باید UNION ALL را به UNION ترجیح دهید

وقتی از `UNION` به جای `UNION ALL` استفاده می‌کنید، SQL سعی می‌کند نتایج را تک‌تک کند - *حتی اگر تکراری وجود نداشته باشد*. تک‌تک کردن می‌تواند زمان زیادی ببرد چون SQL باید از تمام رکوردها در هر پرس‌وجو عبور کند.

فقط از `UNION` استفاده کنید اگر واقعاً نیاز به حذف ردیف‌های تکراری دارید.

## SQL UNION جداول کامل

نمی‌توانید جداول ساده را `UNION ALL` کنید. فقط می‌توانید نتایج پرس‌وجو را union کنید: این کار نمی‌کند:

```
--this won't work:
SELECT * FROM (
    kittens
    UNION ALL
    puppies
);

```

اگر می‌خواهید چند جدول را روی هم بچینید، باید همه رکوردها را از هر جدول انتخاب کنید:

```
-- UNION of two full tables
SELECT * FROM kittens
UNION ALL
SELECT * FROM puppies;

```

(اگرچه به طور کلی باید از استفاده از `SELECT *` با `UNION` اجتناب کنید و به جای آن ستون‌ها را به صراحت مشخص کنید، [جداول union شده باید تعداد ستون‌های یکسانی داشته باشند](#unioned-tables-must-have-the-same-number-of-columns) را ببینید).

## مثال UNION ALL: ساخت قیف فروش در SQL

بیایید بگوییم اطلاعات قیف فروش خود را در سه جدول ذخیره می‌کنید:

- جدول `leads` با اطلاعات درباره لیدهای فروش
- جدول `prospects` با داده‌های prospects
- جدول `customers` با (حدس زدید) اطلاعات درباره مشتریان

می‌توانید `COUNT(*)` را روی هر یک از آن جداول اجرا کنید تا تعداد لیدها، prospects و مشتریان را به طور مستقل پیدا کنید، اما مفیدتر است که آن اعداد را با هم در یک جدول ببینید (مثلاً اگر می‌خواهید اعداد تبدیل را درک کنید). اینجاست که `UNION ALL` می‌تواند مفید باشد:

```
SELECT COUNT(*) from leads
UNION ALL
SELECT COUNT(*) from prospects
UNION ALL
SELECT COUNT(*) from customers;

```

این پرس‌وجو چیزی مثل این برمی‌گرداند:

```txt
| COUNT(*)  |
| --------- |
| 1749      |
| 832       |
| 562       |

```

پس می‌توانید کاهش در هر مرحله از پرس‌وجو را ببینید - به عنوان مثال، حدود 48% از لیدها به prospects تبدیل می‌شوند.

ما از `UNION ALL` در اینجا برای سرعت بخشیدن به پرس‌وجو استفاده می‌کنیم، اما همچنین مطمئن می‌شویم که تکراری‌ها **حذف نمی‌شوند**: به عنوان مثال، اگر یک اپلیکیشن عالی با نرخ تبدیل 100% دارید و اعداد prospects شما همان اعداد مشتریان است، استفاده از `UNION` به جای `UNION ALL` به این معنی است که آن اعداد مشتری تکراری حذف می‌شوند.

دو مشکل با این نتایج وجود دارد: اول، نام ستون `COUNT(*)` مفید نیست، و دوم، اعداد زمینه زیادی ندارند: کدام یک مربوط به کدام مرحله است؟ پس بیایید نام ستون‌ها و یک فیلد اضافی ذخیره‌کننده نام مرحله را اضافه کنیم:

```
SELECT 'Leads' as stage, COUNT(*) as ct from leads
UNION ALL
SELECT 'Prospects', COUNT(*) from prospects
UNION ALL
SELECT 'Customers', COUNT(*) from customers;

```

```txt
| stage     | ct   |
| --------- | ---- |
| Leads     | 1749 |
| Prospects | 832  |
| Customers | 562  |

```

توجه داشته باشید که فقط نیاز به افزودن نام ستون‌ها به اولین پرس‌وجو در `UNION` داشتیم - این به این دلیل است که [SQL UNION نام ستون‌ها را فقط از اولین پرس‌وجو می‌گیرد](#sql-union-takes-columns-from-the-first-query).

## مثال UNION ALL: ردیابی جریان کاربر در SQL

برای یک مثال پیچیده‌تر، بیایید بگوییم یک وب‌سایت تجارت الکترونیک اجرا می‌کنید و می‌خواهید تعداد افرادی را که از جریان زیر عبور می‌کنند ردیابی کنید:

1. **بازدید کاتالوگ**: نگاه به کاتالوگ محصول.
2. **بازدید محصول**: رفتن به صفحه محصول خاص.
3. **افزودن به سبد خرید**: آن‌ها تقریباً به شما پول داده‌اند.
4. **سفارش**. آن‌ها واقعاً به شما پول داده‌اند.

داده‌های شما در چندین جدول است:

- بازدیدهای صفحات در وب‌سایت (مثل صفحه کاتالوگ یا صفحه محصول) در جدول `page_views` هستند.
- رویدادهایی مثل کلیک دکمه به طور جداگانه در جدول `events` ردیابی می‌شوند.
- سفارش‌های واقعی مشتری در جدول `orders` هستند.

می‌توانید تعداد کل بازدیدهای صفحه با فهرست محصولات را بشمارید، مثل این:

```
-- Count all views to the catalog page
SELECT
   COUNT(*)
FROM page_views
WHERE
    page_url = 'https://www.whskr.co/catalog'

```

بعد، می‌خواهید بازدیدهای صفحه یک محصول خاص را بشمارید - اما نه *همه* بازدیدها، فقط بازدیدهای ناشی از صفحه کاتالوگ (برخلاف، مثلاً، جستجو یا لینک‌های مستقیم). این از همان جدول `page_views` استفاده می‌کند اما با یک فیلتر متفاوت:

```
-- Count views to the product page coming from the catalog page
SELECT
    COUNT(*)
FROM page_views
WHERE
    page_url = 'https://www.whskr.co/product/smart-mouse-1234567'
    AND referer_url = 'https://www.whskr.co/catalog'

```

بعد، می‌خواهید افرادی را که محصول را به سبد خرید اضافه می‌کنند بشمارید، پس همه رویدادهای تعامل را فیلتر می‌کنید. می‌تواند چیزی مثل این باشد:

```
-- Clicks on "Add to cart" button on the product page
SELECT
    COUNT(*)
FROM events
WHERE
    event_type = 'button_clicked'
    AND event_subtype = 'add-to-cart'
    AND source_page = 'https://www.whskr.co/product/smart-mouse-1234567'

```

در نهایت، می‌خواهید تعداد کل دفعاتی که مردم این محصول را سفارش داده‌اند را بدانید:

```
-- Number of orders for the product
SELECT COUNT(*)
FROM orders
WHERE product_id = 1234567

```

(در اینجا فرض می‌کنیم تنها راه ثبت سفارش از صفحه محصول است.)

حالا، می‌خواهید همه این شمارش‌ها را در یک جدول قرار دهید تا بتوانید تعداد افرادی که از هر مرحله عبور می‌کنند را مقایسه کنید. همچنین می‌خواهید یک ستون شناسایی هر مرحله را اضافه کنید. اینجاست که `UNION (ALL)` وارد می‌شود:

```
-- Count all views to the catalog page
SELECT
   'Catalog visits' as stage,
   COUNT(*)
FROM page_views
WHERE
    page_url = 'https://www.whskr.co/catalog'

UNION ALL

-- Count views to the product page coming from the catalog page
SELECT
    'Product visits',
    COUNT(*)
FROM page_views
WHERE
    page_url = 'https://www.whskr.co/product/smart-mouse-1234567'
    AND referer_url = 'https://www.whskr.co/catalog'

UNION ALL

-- Clicks on "Add to cart" button on the product page
SELECT
    'Add to cart',
    COUNT(*)
FROM interaction_events
WHERE
    event_type = 'button_clicked'
    AND event_subtype = 'cart'
    AND source_page = 'https://www.whskr.co/product/smart-mouse-1234567'

UNION ALL

-- Number of orders for the product
SELECT
    'Orders',
     COUNT(*)
FROM orders
WHERE product_id = 1234567

```

در اینجا دو پرس‌وجو روی جدول `page_views` با دو فیلتر متفاوت، یک پرس‌وجو روی جدول `events` و یک پرس‌وجو روی جدول `orders` را ترکیب می‌کنیم. از `UNION ALL` استفاده می‌کنیم چون این موقعیتی نیست که نیاز به تک‌تک کردن داده داشته باشیم.

نتیجه چیزی مثل این خواهد بود:

```txt
| stage          | COUNT(*)  |
| -------------- | --------- |
| Catalog visits | 5842      |
| Product visits | 851       |
| Add to cart    | 592       |
| Orders         | 346       |

```

## مثال UNION ALL: ترکیب داده از جداول تاریخی

گاهی اوقات وقتی جداول بزرگ هستند و زمان زیادی برای پرس‌وجو می‌برند، مردم یک جدول بزرگ را به چند جدول بر اساس تاریخ تقسیم می‌کنند. به عنوان مثال، می‌توانید یک جدول جداگانه با داده برای هر سال داشته باشید، مثل جدولی با داده برای 2023، 2024، 2025... ایده این است که در 2025، احتمالاً دائماً داده از، مثلاً، 1998 را پرس‌وجو نمی‌کنید، پس نیازی نیست پایگاه داده را مجبور کنید از آن داده عبور کند مگر اینکه کاملاً ضروری باشد.

اما گاهی اوقات در تنظیمات مثل این *نیاز* دارید داده از همه سال‌های قبلی را بازیابی کنید، و اینجاست که `UNION (ALL)` می‌تواند مفید باشد. به عنوان مثال، اگر می‌خواستید همه idهای سفارش، تاریخ‌ها، مجموع‌ها را در تمام سال‌ها دریافت کنید، می‌توانستید یک پرس‌وجو مثل این بنویسید (فرض می‌کنیم جهان در 2023 شروع شد):

```sql
SELECT id, created_at, total FROM orders_2023
UNION ALL
SELECT id, created_at, total FROM orders_2024
UNION ALL
SELECT id, created_at, total FROM orders_2023

```

## مثال UNION ALL: افزودن یک ردیف خلاصه

بیایید بگوییم تعداد محصولات را بر اساس دسته با استفاده از پرس‌وجوی زیر می‌شمارید:

```
SELECT
  category,
  COUNT(*) as ct
FROM products
GROUP BY category;

```

با نتیجه زیر:

```txt
| CATEGORY  | ct  |
| --------- | --- |
| Doohickey | 42  |
| Gadget    | 53  |
| Gizmo     | 51  |
| Widget    | 54  |

```

می‌توانید از `UNION ALL` برای افزودن یک ردیف با تعداد کل رکوردها استفاده کنید:

```
-- Query results
SELECT
  category,
  COUNT(*) as ct
FROM products
GROUP BY category
ORDER BY ct

UNION ALL

-- Total row
SELECT
'Total',
COUNT(*)
FROM products;

```

نتیجه چیزی مثل این خواهد بود:

```txt
| CATEGORY  | ct  |
| --------- | --- |
| Doohickey | 42  |
| Gadget    | 53  |
| Gizmo     | 51  |
| Widget    | 54  |
| Total     | 200 |

```

می‌توانید از همان ایده برای افزودن انواع دیگر خلاصه استفاده کنید. به عنوان مثال، می‌توانید یک ردیف برای میانگین تعداد در دسته‌ها اضافه کنید:

```

WITH ct_by_category AS (
  SELECT
    category,
    COUNT(*) as ct
  FROM products
  GROUP BY category
)

SELECT category, ct FROM ct_by_category
UNION ALL
SELECT 'Average', AVG(ct) FROM ct_by_category;

```

در اینجا شمارش را در یک [CTE](../working-with-sql/sql-cte.html) قرار دادیم تا پرس‌وجو تمیزتر شود.

## SQL UNION چگونه کار می‌کند

SQL `UNION (ALL)` فرض می‌کند که می‌دانید چه می‌کنید و راه شما را نمی‌بندد - اما همچنین سعی نمی‌کند باهوش باشد و به شما کمک کند. SQL `UNION (ALL)` فقط پرس‌وجوهایی که union می‌کنید (بله، حالا این یک کلمه است) را اجرا می‌کند و سعی می‌کند ردیف‌های نتیجه را روی هم بچیند. اگر چیزی اشتباه شود - مثل اینکه تعداد ستون‌ها متفاوت است یا انواع ستون مطابقت ندارد - `UNION (ALL)` فقط تسلیم می‌شود.

در اینجا برخی چیزهایی که باید به خاطر بسپارید:

- [SQL `UNION` ستون‌ها را از اولین پرس‌وجو می‌گیرد](#sql-union-takes-columns-from-the-first-query).
- [ستون‌های `UNION` باید به همان ترتیب باشند](#sql-union-columns-must-be-in-the-same-order).
- [جداول union شده باید تعداد ستون‌های یکسانی داشته باشند](#unioned-tables-must-have-the-same-number-of-columns).
- [انواع داده ستون‌ها باید در SQL `UNION`ها مطابقت داشته باشند](#column-data-types-must-match-in-sql-unions).

### SQL UNION ستون‌ها را از اولین پرس‌وجو می‌گیرد

`UNION (ALL)` نام ستون‌ها را از اولین پرس‌وجو می‌گیرد و هر نام ستون در پرس‌وجوهای بعدی را نادیده می‌گیرد.

پس بیایید بگوییم یک پرس‌وجو مثل این دارید:

```
SELECT 'Kitten' as pet_type, 0.5 as pet_age
UNION ALL
SELECT 'Bird' as category, 17 as age_in_years;

```

نتیجه:

```txt
| pet_type | pet_age |
| -------- | ------- |
| Kitten   | 0.5     |
| Bird     | 17      |

```

SQL `UNION (ALL)` ستون‌های جدید ایجاد نمی‌کند. پس تا زمانی که تعداد ستون‌ها و انواع داده مطابقت دارند، SQL `UNION (ALL)` فقط ردیف‌ها را روی هم می‌چیند. این ممکن است آنچه انتظار دارید نباشد!

به عنوان مثال، پرس‌وجوی زیر را در نظر بگیرید:

```
SELECT 'Kitten' as pet_type, 0.5 as pet_age
UNION ALL
SELECT 'Senior Software Engineer' as job_title, 32768 as favorite_number;

```

آنچه ممکن است بخواهید:

```txt
| pet_type | pet_age | job_title                | favorite_number |
| -------- | ------- | ------------------------ | --------------- |
| Kitten   | 0.5     |                          |                 |
|          |         | Senior Software Engineer | 32768           |

```

اما آنچه پرس‌وجو واقعاً برمی‌گرداند:

```txt
| pet_type                 | pet_age |
| ------------------------ | ------- |
| Kitten                   | 0.5     |
| Senior Software Engineer | 32768   |

```

اگر می‌خواهید ستون‌های مختلف را نگه دارید و nullها را در سلول‌هایی که داده متناظر ندارند اضافه کنید، می‌توانید به جای آن [full outer join](../working-with-sql/sql-join-types.html) را امتحان کنید.

### ستون‌های SQL UNION باید به همان ترتیب باشند

اگر ستون‌هایی دارید که می‌خواهید SQL `UNION (ALL)` آن‌ها را با هم "تطابق" دهد، باید آن‌ها را به همان ترتیب در هر پرس‌وجو قرار دهید. SQL `UNION (ALL)` فقط سعی می‌کند همه مقادیر در ستون اول برای همه پرس‌وجوها را با هم، همه مقادیر در همه ستون‌های دوم را با هم و غیره قرار دهد و سعی نمی‌کند ستون‌ها را بر اساس نام، نوع یا هر ویژگی دیگری تطابق دهد.

به عنوان مثال، در اینجا سازنده پرس‌وجو ممکن است قصد داشته باشد دو ستون `pet_type` و `pet_age` داشته باشد، اما ترتیب ستون در دو پرس‌وجو متفاوت است:

```
-- This will cause an error in most databases:
SELECT 'Kitten' as pet_type, 0.5 as pet_age
UNION ALL
SELECT 17 as pet_age, 'Bird' as pet_type;

```

آنچه ممکن است انتظار داشته باشید:

```txt
-- Expected, but not actual the result of the query above

| pet_type | pet_age |
| -------- | ------- |
| Kitten   | 0.5     |
| Bird     | 17      |

```

اما نتیجه واقعی بستگی به پایگاه داده دارد. بیشتر پایگاه‌های داده یک خطا می‌دهند، چیزی مثل:

```txt
ERROR: Data conversion error converting "Kitten";

```

این پیام خطایی است که در پایگاه داده نمونه متابیس دریافت می‌کنید - پایگاه‌های داده دیگر ممکن است پیام خطای متفاوتی بدهند.

برخی پایگاه‌های داده دیگر (مثل MySQL) می‌دهند:

```txt
| pet_type | pet_age |
| -------- | ------- |
| Kitten   | 0.5     |
| 17       | Bird    |

```

اما نتیجه *هرگز* این نخواهد بود:

```txt
-- Can't get this result with query above

| pet_type | pet_age |
| -------- | ------- |
| Kitten   | 0.5     |
| Bird     | 17      |

```

چه اتفاقی می‌افتد؟

- اول از همه، SQL `UNION` به نام ستون‌ها در پرس‌وجوی دوم اهمیت نمی‌دهد، پس آن‌ها را نادیده می‌گیرد و سعی می‌کند `'Kitten'` و `17` را با هم در یک ستون و `0.5` و `'Bird'` را در ستون دیگر قرار دهد.
- سپس، چون انواع مطابقت ندارند - `'Kitten'` یک رشته است و `17` یک عدد است - بیشتر پایگاه‌های داده فقط عملیات را رد می‌کنند. MySQL کمی سخاوتمندتر است و `17` را به رشته `'17'` تبدیل می‌کند.

این رفتار می‌تواند به خصوص گیج‌کننده باشد وقتی انواع *مطابقت ندارند* و پس خطایی وجود ندارد. به عنوان مثال، SQL با خوشحالی پرس‌وجوی زیر را بدون خطا اجرا می‌کند، چون همه ستون‌ها رشته هستند:

```
-- This query will not error out but will produce unexpected results
SELECT 'Kitten' as pet_type, 'Mittens' as pet_name
UNION ALL
SELECT 'Professor Beakman' as pet_name, 'Bird' as pet_type;

```

و برمی‌گرداند

```txt
| pet_type          | pet_name |
| ----------------- | -------- |
| Kitten            | Mittens  |
| Professor Beakman | Bird     |

```

که احتمالاً آنچه می‌خواستید نیست.

### جداول union شده باید تعداد ستون‌های یکسانی داشته باشند

اگر نتایج پرس‌وجوها تعداد ستون‌های متفاوتی دارند، `UNION (ALL)` کار نمی‌کند - حتی اگر همپوشانی بین ستون‌ها وجود داشته باشد. به عنوان مثال، پرس‌وجوی زیر کار نمی‌کند بدون توجه به اینکه چه چیزی در `...` می‌آید.

```
--- This query won't work

SELECT category, week_num, COUNT(*) FROM ...

UNION ALL

SELECT category, COUNT(*) FROM ...

```

اولین پرس‌وجو سه ستون برمی‌گرداند و دومین پرس‌وجو دو ستون برمی‌گرداند، پس `UNION ALL` نمی‌تواند آن نتایج را روی هم بچیند. یک ستون اضافی با مقدار null برای ستون گم‌شده ایجاد نمی‌کند. در عوض، پایگاه داده شما یک خطا برمی‌گرداند، چیزی مثل:

```txt
ERROR: each UNION query must have the same number of columns

```

این می‌تواند خطاهای غیرمنتظره ایجاد کند وقتی از `SELECT *` به جای مشخص کردن صریح ستون‌ها استفاده می‌کنید، به خصوص اگر آنچه از `FROM` انتخاب می‌کنید می‌تواند تغییر کند. بیایید بگوییم جداول جداگانه‌ای برای ذخیره اطلاعات سفارش برای هر سال دارید: `orders_2024`، `orders_2025` و غیره. برای دریافت همه سفارش‌ها در طول سال‌ها، ممکن است اجرا کنید:

```
SELECT * FROM orders_2023
UNION ALL
SELECT * FROM orders_2024
UNION ALL
SELECT * FROM orders_2025;

```

اما این پرس‌وجو شروع به شکست می‌کند اگر کسی یک ستون جدید به `orders_2025` اضافه کند.

پس وقتی از `UNION (ALL)` استفاده می‌کنید، همیشه دقیقاً مشخص کنید که کدام ستون‌ها را انتخاب می‌کنید (این یک روش خوب هنگام نوشتن هر `SELECT` به طور کلی است، `UNION` یا نه):

```
SELECT id, created_at, amount FROM orders_2023
UNION ALL
SELECT id, created_at, amount FROM orders_2024
UNION ALL
SELECT id, created_at, amount FROM orders_2025;

```

### انواع داده ستون‌ها باید در SQL UNIONها مطابقت داشته باشند

انواع ستون‌ها در نتایج پرس‌وجوها باید مطابقت داشته باشند. پس به عنوان مثال، ستون اول در هر پرس‌وجو در `UNION ALL` یک عدد خواهد بود، هر ستون دوم متن خواهد بود و غیره. اگر انواع مطابقت ندارند - به عنوان مثال، یکی از پرس‌وجوها یک ستون متن به عنوان اولین ستون SELECT شده دارد و پرس‌وجوی دیگر یک ستون عدد به عنوان اولین - پس پرس‌وجوی `UNION` ممکن است کار نکند. اینکه کار می‌کند یا نه بستگی به پایگاه داده و انواع داده دارد. بیشتر پایگاه‌های داده اگر انواع دقیقاً مطابقت نداشته باشند خطا نشان می‌دهند. برخی پایگاه‌های داده مثل MySQL سعی می‌کنند تبدیل نوع انجام دهند (مثلاً عدد به رشته) اما اگر تبدیل ممکن نباشد خطا نشان می‌دهند. تبدیل نوع ضمنی همچنین می‌تواند به نتایج غیرمنتظره منجر شود.

به عنوان مثال، پرس‌وجوی زیر را در نظر بگیرید:

```
SELECT true

UNION ALL

SELECT DATE '2025-04-19'

```

در اینجا سعی می‌کنیم یک مقدار boolean و یک تاریخ را روی هم بچینیم. بیشتر پایگاه‌های داده (مثلاً Postgres) فقط یک خطا می‌دهند.

MySQL به جای آن برمی‌گرداند

```txt
| TRUE       |
| ---------- |
| 1          |
| 2025-04-19 |

```

در اینجا MySQL `TRUE` را عنوان ستون می‌سازد چون گزینه دیگری ارائه نکردیم. اگر نوع داده ستون برگشتی را بررسی کنید، می‌بینید که حالا یک ستون `VARCHAR` است. پس MySQL هم `true` و هم `2025-04-19` را به رشته تبدیل کرد، و `true` به مقدار رشته `1` تبدیل شد چون MySQL در واقع انواع داده boolean ندارد و به جای آن مقادیر boolean به عنوان اعداد صحیح `1` یا `0` ذخیره می‌شوند، که در این پرس‌وجو MySQL همچنین به رشته تبدیل می‌کند. پس می‌بینید چقدر این می‌تواند گیج‌کننده باشد! مطمئن شوید که انواع داده ستون‌ها در `UNION` مطابقت دارند تا از نتایج غیرمنتظره مثل این اجتناب کنید.

## مطالعه بیشتر

- [ترکیب جداول با SQL join](../working-with-sql/sql-joins.html)
- [مرجع نحو SQL](../working-with-sql/syntax-reference.html)

[](../working-with-sql/sql-join-types.html)
