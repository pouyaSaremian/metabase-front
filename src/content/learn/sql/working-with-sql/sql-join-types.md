---
title: "انواع join در SQL"
description: "یادگیری همه چیز درباره استفاده از انواع مختلف join در SQL."
redirect_from:
  - /learn/sql/working-with-sql/sql-join-types
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/sql-join-types
  - /learn/sql-questions/sql-join-types
toc:
  - id: "sql-join-types"
    title: "انواع join در SQL"
    level: 1
    href: "#sql-join-types"
  - id: "quick-review-of-sql-join-types"
    title: "مرور سریع انواع join در SQL"
    level: 2
    href: "#quick-review-of-sql-join-types"
  - id: "the-problem-with-sql-joins-explained"
    title: "مشکل joinهای SQL توضیح داده شده"
    level: 2
    href: "#the-problem-with-sql-joins-explained"
  - id: "outer-sql-join-types-to-the-rescue"
    title: "انواع join خارجی SQL به کمک می‌آیند"
    level: 2
    href: "#outer-sql-join-types-to-the-rescue"
  - id: "what-about-right-outer-sql-join-and-full-outer-join"
    title: "join خارجی راست SQL و full outer join چطور؟"
    level: 2
    href: "#what-about-right-outer-sql-join-and-full-outer-join"
  - id: "which-sql-join-type-to-use"
    title: "کدام نوع join SQL استفاده کنیم؟"
    level: 2
    href: "#which-sql-join-type-to-use"
  - id: "common-problems-with-sql-joins"
    title: "مشکلات رایج با joinهای SQL"
    level: 2
    href: "#common-problems-with-sql-joins"
  - id: "doing-an-inner-sql-join-instead-of-an-outer-join"
    title: "انجام یک inner join SQL به جای outer join"
    level: 3
    href: "#doing-an-inner-sql-join-instead-of-an-outer-join"
  - id: "using-sql-joins-on-matches-that-aren-t-meaningful"
    title: "استفاده از joinهای SQL روی تطابق‌هایی که معنادار نیستند"
    level: 3
    href: "#using-sql-joins-on-matches-that-aren-t-meaningful"
  - id: "confusing-nulls-in-data-with-nulls-from-mis-matches"
    title: "اشتباه گرفتن NULLها در داده با NULLها از عدم تطابق"
    level: 3
    href: "#confusing-nulls-in-data-with-nulls-from-mis-matches"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "ترکیب جداول با SQL"
    href: "../combining-tables/index.html"
---

# انواع join در SQL

یادگیری همه چیز درباره استفاده از انواع مختلف join در SQL.

این مقاله به انواع مختلف join در SQL می‌پردازد. اگر تازه‌وارد این موضوع هستید، ممکن است بخواهید [مقاله joinهای SQL](../../grow-your-data-skills/learn-sql/working-with-sql/sql-joins.html) را نیز بررسی کنید. لطفاً توجه داشته باشید که joinها فقط با پایگاه‌های داده رابطه‌ای کار می‌کنند.

## مرور سریع انواع join در SQL

یک join SQL به پایگاه داده می‌گوید ستون‌ها را از جداول مختلف ترکیب کند. معمولاً جداول را با تطابق [کلیدهای خارجی](../../../glossary/foreign-key.html) در یک جدول با [کلیدهای اصلی](../../../glossary/primary-key.html) در جدول دیگر join می‌کنیم. به عنوان مثال، هر رکورد در جدول `products` یک ID منحصر به فرد در فیلد `products.id` دارد: این کلید اصلی است. برای تطابق کلید، هر رکورد در `orders` یک product ID در فیلد `orders.product_id` دارد: این یک کلید خارجی است. اگر می‌خواهیم اطلاعات یک سفارش را با اطلاعات محصولی که سفارش داده شده ترکیب کنیم، می‌توانیم یک inner join انجام دهیم:

```
SELECT
  orders.total as total,
  products.title as title
FROM
  orders INNER JOIN products
ON
  orders.product_id = products.id

```

خیلی مهم است که از `Orders.product_id` و نه `Orders.id` در join استفاده کنیم: هر دو فیلد فقط اعداد هستند، پس برخی order IDها با برخی product IDها تطابق خواهند داشت، اما آن تطابق‌ها بی‌معنا خواهند بود.

## مشکل joinهای SQL توضیح داده شده

حتی اگر از فیلدهای صحیح استفاده کنیم، یک تله برای بی‌احتیاطی وجود دارد. بررسی اینکه هر رکورد در `Orders` شامل یک product ID است آسان است—شمارش تعداد مقادیر null در `Orders.product_id` 0 را برمی‌گرداند:

```
SELECT
  count(*)
FROM
  orders
WHERE
  orders.product_id IS NULL

```

```
| count(*) |
| -------- |
| 0        |

```

اما اگر چیزها *همیشه* تطابق نداشته باشند چه؟ به عنوان مثال، فرض کنید می‌خواهیم بفهمیم کدام محصولات فاقد بررسی هستند. اگر به جدول `reviews` نگاه کنیم، 1112 ورودی دارد:

```
SELECT
  count(*)
FROM
  reviews

```

```
| count(*) |
| -------- |
| 1112     |

```

هر بررسی به یک محصول اشاره می‌کند:

```
SELECT
  count(*)
FROM
  reviews
WHERE
  reviews.product_id IS NULL

```

```
| count(*) |
| -------- |
| 0        |

```

اما آیا هر محصول بررسی دارد؟ برای فهمیدن، بیایید تعداد محصولات را بشماریم:

```
SELECT
  count(*)
FROM
  products

```

```
| count(*) |
| -------- |
| 200      |

```

سپس می‌توانیم جداول `products` و `reviews` را ترکیب کنیم و تعداد محصولات متمایز در نتیجه را بشماریم. (در زندگی واقعی احتمالاً از `SELECT COUNT(DISTINCT product_id) FROM reviews` برای دریافت این عدد استفاده می‌کردیم، اما استفاده از `INNER JOIN` به ما کمک می‌کند ایده را نشان دهیم.)

```
SELECT
  count(distinct products.id)
FROM
  products INNER JOIN reviews
ON
  products.id = reviews.product_id

```

```
| count(*) |
| -------- |
| 176      |

```

فقط 176 از 200 محصول بررسی دارند. در نتیجه، اگر تعداد بررسی‌ها را برای هر محصول بشماریم، فقط شمارش‌هایی را دریافت می‌کنیم که برخی بررسی وجود داشت—پرس‌وجوی ما چیزی درباره محصولاتی که فاقد بررسی هستند به ما نمی‌گوید چون inner join هنگام ترکیب جداول هیچ تطابقی پیدا نمی‌کند. این پرس‌وجو مشکل را نشان می‌دهد:

```
SELECT
  products.title as title, count(*) as number_of_reviews
FROM
  products INNER JOIN reviews
ON
  products.id = reviews.product_id
GROUP BY
  products.id
ORDER BY
  number_of_reviews ASC

```

```
| products.title            | number_of_reviews |
| ------------------------- | ----------------- |
| Rustic Copper Hat         |                 1 |
| Incredible Concrete Watch |                 1 |
| Practical Aluminum Coat   |                 1 |
| Awesome Aluminum Table    |                 1 |
| ...                       |               ... |

```

نتیجه را به ترتیب صعودی بر اساس شمارش مرتب کرده‌ایم؛ همانطور که این نشان می‌دهد، کمترین شمارش 1 است، در حالی که باید 0 باشد.

## انواع join خارجی SQL به کمک می‌آیند

خوب: می‌دانیم چند محصول بررسی ندارند، اما کدام‌ها هستند؟ یک راه برای پاسخ به آن سؤال استفاده از نوع join SQL معروف به left outer join است که "left join" نیز نامیده می‌شود. این نوع join همیشه حداقل یک رکورد از اولین جدولی که ذکر می‌کنیم (یعنی آن که در سمت چپ است) را برمی‌گرداند. برای دیدن نحوه کار، تصور کنید دو جدول کوچک به نام‌های `paint` و `fabric` داریم. جدول `paint` شامل سه ردیف است:

```
| brand     | color |
| --------- | ----- |
| Premiere  | red   |
| Premiere  | blue  |
| Special   | blue  |

```

در حالی که جدول `fabric` فقط دو ردیف دارد:

```
| kind   | shade |
| ------ | ----- |
| nylon  | green |
| cotton | blue  |

```

اگر یک inner join روی این دو جدول انجام دهیم، تطابق `paint.color` با `fabric.shade`، فقط رکوردهای `blue` تطابق دارند:

```
SELECT
  *
FROM
  paint INNER JOIN fabric
ON
  paint.color = fabric.shade

```

```
| paint.brand | paint.color | fabric.kind | fabric.shade |
| ----------- | ----------- | ----------- | ------------ |
| Premiere    | blue        | cotton      | blue         |
| Special     | blue        | cotton      | blue         |

```

هیچ چیزی در جدول `fabric` قرمز نیست، پس اولین رکورد از `paint` در نتیجه شامل نمی‌شود. به طور مشابه، هیچ چیزی از `paint` سبز نیست، پس ماده نایلون از `fabric` نیز دور ریخته می‌شود.

اگر یک left outer join انجام دهیم، پایگاه داده هر رکورد از جدول چپ که فاقد تطابق است را نگه می‌دارد. از آنجایی که مقادیر تطابقی از جدول راست وجود ندارند، SQL آن ستون‌ها را با `NULL` پر می‌کند:

```
SELECT
  *
FROM
  paint LEFT JOIN fabric
ON
  paint.color = fabric.shade

```

```
| paint.brand | paint.color | fabric.kind | fabric.shade |
| ----------- | ----------- | ----------- | ------------ |
| Premiere    | red         | NULL        | NULL         |
| Premiere    | blue        | cotton      | blue         |
| Special     | blue        | cotton      | blue         |

```

نگه داشتن همه رکوردها از جدول چپ در بسیاری از موقعیت‌های مختلف مفید است. به عنوان مثال، اگر می‌خواهیم ببینیم کدام رنگ‌ها فاقد پارچه تطابقی هستند، می‌توانیم یک left outer join SQL انجام دهیم:

```
SELECT
  *
FROM
  paint LEFT OUTER JOIN fabric
ON
  paint.color = fabric.shade

```

```
|  paint.brand | paint.color | fabric.kind  | fabric.shade |
| ------------ | ----------- | ------------ | ------------ |
| Premiere     | red         | NULL         | NULL         |
| Premiere     | blue        | cotton       | blue         |
| Special      | blue        | cotton       | blue         |

```

این اگر فقط ردیف‌هایی را انتخاب کنیم که مقادیر از جدول سمت راست `NULL` هستند راحت‌تر خوانده می‌شود:

```
SELECT
  *
FROM
  paint LEFT OUTER JOIN fabric
ON
  paint.color = fabric.shade
WHERE
  fabric.shade IS NULL

```

```
|  paint.brand | paint.color | fabric.kind  | fabric.shade |
| ------------ | ----------- | ------------ | ------------ |
| Premiere     | red         | NULL         | NULL         |

```

می‌توانیم از این تکنیک برای دریافت فهرستی از محصولاتی که هیچ بررسی ندارند با انجام یک left outer join و نگه داشتن فقط ردیف‌هایی که `reviews.product_id` با `NULL` پر شده است استفاده کنیم:

```
SELECT
  products.title
FROM
  products LEFT OUTER JOIN reviews
ON
  products.id = reviews.product_id
WHERE
  reviews.product_id IS NULL

```

```
| products.title          |
| ----------------------- |
| Small Marble Shoes      |
| Ergonomic Silk Coat     |
| Synergistic Steel Chair |
| ...                     |

```

## join خارجی راست SQL و full outer join چطور؟

استاندارد SQL دو نوع دیگر join برای outer join تعریف می‌کند، اما خیلی کمتر استفاده می‌شوند—آنقدر کمتر که برخی پایگاه‌های داده حتی آن‌ها را پیاده‌سازی نمی‌کنند. یک **right outer join** دقیقاً مثل یک left outer join کار می‌کند، به جز اینکه همیشه ردیف‌ها را از جدول راست نگه می‌دارد و ستون‌ها را از جدول چپ با `NULL` پر می‌کند وقتی تطابقی وجود ندارد. خیلی آسان است که ببینید همیشه می‌توانید از یک left outer join به جای right استفاده کنید با جابجا کردن جداول؛ دلیل خاصی برای ترجیح یکی بر دیگری وجود ندارد، اما تقریباً همه از فرم سمت چپ استفاده می‌کنند، پس ما هم پیشنهاد می‌کنیم شما هم همین کار را بکنید.

یک **full outer join** همه اطلاعات را از هر دو جدول نگه می‌دارد. اگر یک رکورد در سمت چپ فاقد تطابق در سمت راست باشد، پایگاه داده مقادیر سمت راست گم‌شده را با `NULL` پر می‌کند، و اگر یک رکورد در سمت راست فاقد تطابق در سمت چپ باشد، مقادیر سمت چپ گم‌شده را پر می‌کند. به عنوان مثال، اگر یک full outer join روی `paints` و `fabrics` انجام دهیم:

```
|  paint.brand | paint.color | fabric.kind  | fabric.shade |
| ------------ | ----------- | ------------ | ------------ |
| Premiere     | red         | NULL         | NULL         |
| Premiere     | blue        | cotton       | blue         |
| NULL         | NULL        | nylon        | green        |
| Special      | blue        | cotton       | blue         |

```

Full outer joinها گاهی اوقات برای یافتن همپوشانی بین دو جدول مفید هستند، اما در بیست سال نوشتن SQL، من فقط در درس‌هایی مثل این از آن‌ها استفاده کرده‌ام.

## کدام نوع join SQL استفاده کنیم؟

برای مرور، چهار نوع اصلی join وجود دارد. Inner joinها فقط رکوردهایی که تطابق دارند را نگه می‌دارند، و سه نوع دیگر مقادیر گم‌شده را با `NULL` پر می‌کنند. برخی مردم جدول چپ را به عنوان جدول اصلی یا اولیه در نظر می‌گیرند؛ نوع joinی که استفاده می‌کنید تعیین می‌کند چند رکورد از آن جدول اولیه برمی‌گردانید، و همچنین هر رکورد اضافی که بر اساس ستون‌هایی که از جدول دیگر می‌خواهید برمی‌گردانید. ما قبلاً استثناهایی برای این در اینجا دیده‌ایم (مثلاً چندین بررسی برای هر محصول وجود داشت)، اما این نشانه خوبی است که یک جدول اصلی خوب برای شروع دارید.

![Four types of joins: left, right, inner, and outer.](../../images/sql-join-types/join-types.png)

به طور کلی، فقط واقعاً نیاز به استفاده از inner joinها و left outer joinها دارید. کدام نوع join استفاده می‌کنید بستگی به این دارد که آیا می‌خواهید ردیف‌های غیرمطابق را در نتایج خود شامل کنید:

- اگر به ردیف‌های غیرمطابق در جدول اصلی نیاز دارید، از یک left outer join استفاده کنید.
- اگر به ردیف‌های غیرمطابق نیاز ندارید، از یک inner join استفاده کنید.

برای زاویه دیگری از joinها که SQL را انتزاع می‌کند، [مقاله ما درباره joinها با استفاده از query builder متابیس](../../metabase-basics/querying-and-dashboards/questions/custom-expressions.html) را بررسی کنید.

## مشکلات رایج با joinهای SQL

### انجام یک inner join SQL به جای outer join

این احتمالاً رایج‌ترین خطا است. داده‌های واقعی اغلب شکاف دارند، و inner joinها رکوردها را بدون هشدار دادن به شما دور می‌ریزند هر زمان که کلیدها هم‌تراز نباشند. شمارش تعداد ردیف‌ها از یک جدول که *تطابقی* در جدول دیگر ندارند یک بررسی ایمنی خوب است؛ اگر هر کدام وجود دارد، باید به استفاده از یک outer join به جای inner فکر کنید.

### استفاده از joinهای SQL روی "تطابق‌هایی" که معنادار نیستند

وزن یک نفر به کیلوگرم و ارزش آخرین خرید آن‌ها به دلار هر دو عدد هستند، پس ممکن است یک join با تطابق آن‌ها انجام دهیم، اما نتیجه (احتمالاً) بی‌معنا خواهد بود. یک مثال کمتر بی‌اهمیت زمانی پیش می‌آید که یک جدول شامل چندین کلید خارجی است که به جداول مختلف اشاره می‌کنند، که می‌تواند منجر به join کردن داده‌های بیمار با ثبت‌نام وسایل نقلیه به جای تاریخ‌های قرار ملاقات شود. اعلام کلیدهای خارجی در جداول می‌تواند به جلوگیری از این کمک کند.

### اشتباه گرفتن NULLها در داده با NULLها از عدم تطابق

اگر یکی از جداول در یک outer join شامل `NULL`ها باشد، ممکن است به یک ستون با مقادیری که گم شده‌اند برسیم چون در داده اصلی نبودند و به دلیل عدم تطابق. بسته به مشکلی که می‌خواهیم حل کنیم، این "طعم‌های" مختلف `NULL` ممکن است مهم باشند.

[](sql-joins.html)
[](../combining-tables/sql-union.html)
