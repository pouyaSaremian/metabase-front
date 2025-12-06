---
title: "پرس‌وجو از جداول با SQL"
description: "یادگیری نحوه استفاده از SELECT، FROM، LIMIT، ORDER BY و AS در SQL برای پرس‌وجو و مرتب‌سازی جداول."
redirect_from:
  - /learn/sql/getting-started/querying-tables
toc:
  - id: "sql-querying-tables"
    title: "پرس‌وجو از جداول با SQL"
    level: 1
    href: "#sql-querying-tables"
  - id: "what-we-ll-cover"
    title: "آنچه پوشش می‌دهیم"
    level: 2
    href: "#what-we-ll-cover"
  - id: "sql-to-get-all-the-rows-from-a-table"
    title: "SQL برای دریافت همه ردیف‌ها از یک جدول"
    level: 2
    href: "#sql-to-get-all-the-rows-from-a-table"
  - id: "sql-to-add-comments-to-your-code"
    title: "SQL برای افزودن کامنت به کد شما"
    level: 2
    href: "#sql-to-add-comments-to-your-code"
  - id: "sql-to-only-get-some-rows-from-the-table"
    title: "SQL برای دریافت فقط برخی ردیف‌ها از جدول"
    level: 2
    href: "#sql-to-only-get-some-rows-from-the-table"
  - id: "sql-to-only-get-some-columns"
    title: "SQL برای دریافت فقط برخی ستون‌ها"
    level: 2
    href: "#sql-to-only-get-some-columns"
  - id: "sql-to-sort-results"
    title: "SQL برای مرتب‌سازی نتایج"
    level: 2
    href: "#sql-to-sort-results"
  - id: "sql-to-change-the-names-of-the-columns"
    title: "SQL برای تغییر نام ستون‌ها"
    level: 2
    href: "#sql-to-change-the-names-of-the-columns"
  - id: "sql-casing-usually-doesn-t-matter-except-for-aliases"
    title: "حروف بزرگ و کوچک SQL معمولاً مهم نیست، به جز نام‌های مستعار"
    level: 2
    href: "#sql-casing-usually-doesn-t-matter-except-for-aliases"
  - id: "sql-to-get-a-sampling-of-rows"
    title: "SQL برای دریافت نمونه‌ای از ردیف‌ها"
    level: 2
    href: "#sql-to-get-a-sampling-of-rows"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "شروع با SQL"
    href: "index.html"
---

# پرس‌وجو از جداول با SQL

یادگیری نحوه استفاده از SELECT، FROM، LIMIT، ORDER BY و AS در SQL برای پرس‌وجو و مرتب‌سازی جداول.

## آنچه پوشش می‌دهیم

- استفاده از `SELECT` برای مشخص کردن ستون‌هایی که می‌خواهید دریافت کنید [›](#sql-to-get-all-the-rows-from-a-table)
- `*` همه ستون‌ها را انتخاب می‌کند [›](#sql-to-get-all-the-rows-from-a-table)
- استفاده از `FROM` برای مشخص کردن جدول یا زیرپرس‌وجویی که می‌خواهید پرس‌وجو کنید [›](#sql-to-get-all-the-rows-from-a-table)
- وقتی جداول خود را تجمیع نمی‌کنید، هنگام توسعه پرس‌وجوهایتان ردیف‌ها را `LIMIT` کنید (تا پایگاه داده خود را منفجر نکنید) [›](#sql-to-only-get-some-rows-from-the-table)
- افزودن کامنت با `--`؛ آن‌ها نتایج را تحت تأثیر قرار نمی‌دهند، اما به مردم کمک می‌کنند کد شما را درک کنند [›](#sql-to-add-comments-to-your-code)
- پایان دادن به هر پرس‌وجو با `;` [›](#sql-to-get-all-the-rows-from-a-table)
- تغییر نام ستون‌ها با `AS` [›](#sql-to-change-the-names-of-the-columns)
- مرتب‌سازی نتایج با `ORDER BY`، یا `ASC` برای صعودی یا `DESC` برای نزولی [›](#sql-to-sort-results)
- انتخاب ستون‌های خاص با استفاده از فهرست جدا شده با کاما [›](#sql-to-only-get-some-columns)
- درک قراردادهای حروف بزرگ و کوچک SQL و زمانی که حروف بزرگ و کوچک مهم است [›](#sql-casing-usually-doesnt-matter-except-for-aliases)
- نمونه‌گیری داده از جداول با استفاده از تابع `MOD` [›](#sql-to-get-a-sampling-of-rows)

> نیاز به یادآوری سریع قبل از ورود دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما را برای دستورات و نحو اصلی بررسی کنید. همچنین برای به اشتراک گذاشتن با همکارانی که تازه در تحلیل داده شروع کرده‌اند عالی است.

## SQL برای دریافت همه ردیف‌ها از یک جدول

اگر می‌خواهید کل جدول و همه ردیف‌های آن را دریافت کنید، مثل این جدول `products`:

```txt
| id  | ean           | title                     | category  | vendor                       | price | rating | created_at                  |
| --- | ------------- | ------------------------- | --------- | ---------------------------- | ----- | ------ | --------------------------- |
| 1   | 1018947080336 | Rustic Paper Wallet       | Gizmo     | Swaniawski, Casper and Hilll | 29.46 | 4.6    | July 19, 2017, 7:44 PM      |
| 2   | 7663515285824 | Small Marble Shoes        | Doohickey | Balistreri-Ankunding         | 70.08 | 0      | April 11, 2019, 8:49 AM     |
| 3   | 4966277046676 | Synergistic Granite Chair | Doohickey | Murray, Watsica and Wunsch   | 35.39 | 4      | September 8, 2018, 10:03 PM |

```

ستون‌ها را `SELECT` می‌کنید `FROM` جدول، مثل این:

```
SELECT
  *
FROM
  products;

```

- `SELECT` یک کلمه رزرو شده SQL است که ستون‌های برگشتی را مشخص می‌کند. کلمات رزرو شده کلمات کلیدی در SQL هستند که معانی خاصی برای موتورهای پایگاه داده که پرس‌وجوها را پردازش می‌کنند دارند.
- `*` عملگر جایگزین است که به پایگاه داده می‌گوید همه ستون‌ها را از یک جدول برگرداند. به طور کلی، باید فقط ستون‌های دقیقی که می‌خواهید در نتایج را شامل کنید. این را با جداول واقعاً بزرگ بدون [محدود کردن نتایج](#sql-to-only-get-some-rows-from-the-table) امتحان نکنید، مگر اینکه بخواهید روز همه را بدتر کنید.
- `FROM` یک کلمه رزرو شده SQL است که به پایگاه داده می‌گوید کدام جدول (یا جداول) را برای ستون‌ها جستجو کند. نام جدول‌ها باید دقیق باشند (اما حروف بزرگ و کوچک مهم نیست).
- توجه داشته باشید `;` در انتهای پرس‌وجو. متابیس در مورد اینکه آیا نقطه‌ویرگول را شامل می‌کنید یا نه بسیار بخشنده است، اما ویرایشگرها/پایگاه‌های داده دیگر ممکن است نباشند. آن‌ها به دنبال نقطه‌ویرگول می‌گردند تا بدانند پرس‌وجو کامل است.

[ترتیب عملیات موتور پایگاه داده شما](../working-with-sql/sql-best-practices.html#the-general-order-of-query-execution) هنگام پردازش پرس‌وجوی شما با ترتیب عملیات هنگام خواندن کد یکسان نیست. به طور کلی، نیازی به فکر کردن به این ندارید، چون مردم ساعت‌های باورنکردنی برای بهینه‌سازی این موتورهای پرس‌وجو صرف کرده‌اند.

## SQL برای افزودن کامنت به کد شما

می‌توانید (و باید) کامنت به یک پرس‌وجو با `--` اضافه کنید. در اینجا همان پرس‌وجو، با کامنت‌های توضیحی:

```
-- Our first query
SELECT
  * -- The star means to get all columns
FROM
  products; -- The table to query

```

پردازنده پرس‌وجوی پایگاه داده می‌داند که هر چیزی در یک خط بعد از `--` را نادیده بگیرد. در واقع، می‌توانید یک قایق بادبانی کامل در پرس‌وجوی خود قرار دهید و نتایج تغییر نمی‌کند:

```
SELECT
  *
FROM
-- An entire sailboat
  products;

```

## SQL برای دریافت فقط برخی ردیف‌ها از جدول

می‌توانید نتایج را `LIMIT` کنید، مثل این:

```
SELECT
  *
FROM
  products
LIMIT -- SQL reserved word
  3; -- Only get the first 3 rows

```

که همه ستون‌ها (`*`) را برمی‌گرداند، اما فقط `3` ردیف. در صورت امکان، هنگام توسعه پرس‌وجوها ردیف‌ها را محدود کنید تا زمان بارگذاری را سرعت بخشید. خوشبختانه، متابیس به طور خودکار نتایج را به 2000 ردیف اول محدود می‌کند تا مردم پایگاه داده خود را منفجر نکنند. اما هنوز یک روش خوب است.

Limit فقط تعداد ردیف‌های *برگشتی* را تحت تأثیر قرار می‌دهد. اگر داده را تجمیع می‌کنید، مثل شمارش ردیف‌ها و گروه‌بندی ردیف‌ها (که بعداً پوشش خواهیم داد)، پایگاه داده همچنان همه ردیف‌ها را می‌شمارد و گروه‌بندی می‌کند، اما فقط تعداد ردیف‌های نتیجه تعیین شده توسط `LIMIT` را برمی‌گرداند.

## SQL برای دریافت فقط برخی ستون‌ها

برای برگرداندن ستون‌های خاص، مثل فقط ستون‌های `title` و `category`:

```txt
| title                     | category  |
| ------------------------- | --------- |
| Rustic Paper Wallet       | Gizmo     |
| Small Marble Shoes        | Doohickey |
| Synergistic Granite Chair | Doohickey |

```

هر ستون را `SELECT` کنید، به ترتیبی که می‌خواهید ستون‌ها در نتایج نمایش داده شوند. ستون‌ها را با کاما جدا کنید (اما کاما را در انتهای فهرست اضافه نکنید)، مثل این:

```
SELECT
  title, -- Names of each column must be exact
  category -- No comma at the end of list
FROM
  products;

```

در واقع، آنقدر مردم با خطای کامای گم‌شده سوخته‌اند که برخی مردم SQL خود را مثل این فرمت می‌کنند فقط تا کاماها راحت‌تر دیده شوند (اما بیشتر برای اینکه ستون‌ها راحت‌تر در صورت نیاز کامنت شوند):

```
SELECT
  title
  ,category -- Comma precedes each column except the first column
  ,vendor -- No comma at the end of list
FROM
  products;

```

## SQL برای مرتب‌سازی نتایج

می‌توانید ردیف‌های نتایج را با `ORDER BY` مرتب کنید. به عنوان مثال، برای مرتب‌سازی محصولات بر اساس قیمت از کم به زیاد:

```
SELECT
  title,
  price
FROM
  products
ORDER BY     -- Sorts results
  price ASC; -- By the price column in ascending order

```

که برمی‌گرداند:

```txt
| Title                    | Price |
| ------------------------ | ----- |
| Mediocre Paper Car       | 15.69 |
| Rustic Paper Car         | 19.87 |
| Heavy-Duty Copper Gloves | 20.41 |
| Enormous Marble Shoes    | 21.42 |

```

کلمه کلیدی `ASC` گاهی اوقات اختیاری است (بسته به موتور پایگاه داده)، اما شامل کردن `ASC` در بند `ORDER BY` کد را خوانا‌تر می‌کند و همیشه کار می‌کند.

برای مرتب‌سازی به ترتیب نزولی (زیاد به کم)، کلمه کلیدی `DESC` را اضافه کنید:

```
SELECT
  title,
  price
FROM
  products
ORDER BY
  price DESC; -- Sorts in descending order

```

برای مرتب‌سازی با چند ستون، به عنوان مثال، اول بر اساس `category` (الفبایی)، سپس بر اساس `price` درون هر دسته (زیاد به کم):

```
SELECT
  title,
  category,
  price
FROM
  products
ORDER BY
  category ASC, -- Sorts categories alphabetically (note the comma)
  price DESC; -- Then sorts prices highest to lowest within each category

```

ممکن است گاهی اوقات ببینید مردم با اعداد مرتب می‌کنند، مثل این:

```
SELECT
  title,
  category,
  price
FROM
  products
ORDER BY
  2 ASC, -- Sorts categories alphabetically (note the comma)
  3 DESC; -- Then sorts prices highest to lowest within each category

```

در اینجا اعداد با موقعیت ترتیبی ستون در عبارت `SELECT` مطابقت دارند. با برخی پایگاه‌های داده، مرتب‌سازی بر اساس موقعیت تنها راه مرتب‌سازی با ستون‌های مستعار است. اما در صورت امکان، بهتر است نام ستون‌ها یا نام‌های مستعار را شامل کنید تا مردم مجبور نباشند هنگام خواندن کد بین بخش‌های `SELECT` و `ORDER BY` رفت و برگشت کنند.

## SQL برای تغییر نام ستون‌ها

بگویید جدول شما نام ستون‌هایی مثل `title` و `category` دارد، اما می‌خواهید هر عنوان ستون با "Product" شروع شود، مثل این:

```txt
| Product title             | Product category |
| ------------------------- | ---------------- |
| Rustic Paper Wallet       | Gizmo            |
| Small Marble Shoes        | Doohickey        |
| Synergistic Granite Chair | Doohickey        |

```

برای تغییر نام یک ستون (در نتایج، *نه* خود جدول)، از `AS` برای ایجاد یک *نام مستعار* برای ستون استفاده کنید، مثل این:

```
SELECT
  title AS "Product title", -- Note the double quotes, single quotes won't work
  category AS "Product category"
FROM
  products;

```

نام‌های مستعار SQL نام‌های موقت برای مقادیر در یک پرس‌وجو هستند. نام‌های مستعار هیچ تأثیری روی پایگاه داده زیرین ندارند؛ نام‌های مستعار فقط در خود پرس‌وجو وجود دارند. معمولاً از نام‌های مستعار برای:

- بهبود خوانایی استفاده می‌کنید.
- نام‌گذاری عبارات ستون (مثلاً `CONCAT(first_name, ' ', last_name) AS "Full name"`).
- نام‌گذاری عبارات جدول مشترک ([CTE](../working-with-sql/sql-cte.html) را ببینید).
- خود join کردن جداول.

## حروف بزرگ و کوچک SQL معمولاً مهم نیست، به جز نام‌های مستعار

استفاده از حروف بزرگ برای کلمات رزرو شده SQL یک قرارداد است که قبل از برجسته‌سازی نحو وجود داشته، اما حروف بزرگ و کوچک برای کلمات رزرو شده یا نام ستون‌ها مهم نیست. این پرس‌وجو هم کار می‌کند:

```
SeLeCt
  *
FrOM
  PROdUCTS;

```

اما، می‌دانید: نکنید. پرس‌وجوهایی بنویسید که مردم (از جمله خودتان شش ماه بعد) بتوانند بخوانند. پس، همه حروف بزرگ یا نه (`SELECT` یا `select`)، سازگار باشید.

حروف بزرگ و کوچک *برای* نام‌های مستعار اعمال می‌شود، پس مطمئن شوید نام‌های مستعار حرف به حرف مطابقت دارند (با نام‌های مستعار، `"Example"` همان `"example"` نیست).

## SQL برای دریافت نمونه‌ای از ردیف‌ها

این فقط کار می‌کند اگر جدول شما یک ردیف ID با توزیع تصادفی داشته باشد. می‌توانید از تابع `MOD` (مخفف modulo) برای نمونه‌گیری داده بر اساس IDها استفاده کنید:

```
SELECT
  id,
  title,
  category
FROM
  products
WHERE
  -- For this to work, the table's ids must be sequential integers
  MOD(id, 10) = 3;

```

که برمی‌گرداند:

```txt
| id  | title                         | category   |
|-----|-------------------------------|------------|
| 3   | Synergistic Granite Chair     | Doohickey  |
| 13  | Synergistic Steel Chair       | Gizmo      |
| 23  | Fantastic Aluminum Bottle     | Widget     |

```

و ردیف‌های بیشتر، با هر ردیف دهم که ID آن به 3 ختم می‌شود. این چگونه کار می‌کند: اگر ID 23 بود، مثلاً، `MOD(23, 10)` 3 را برمی‌گرداند، چون 23 تقسیم بر 10 باقیمانده 3 می‌دهد، پس ردیف 23 در نتایج شامل می‌شود. این فقط تقسیم نتایج بر 10 است، پس اگر جدول ردیف‌های زیادی دارد، می‌خواهید بزرگی مقسوم‌علیه را افزایش دهید: 100، 1000 و غیره.

این نکته بیشتر از نوع چیزهایی است که اشتها را برای آنچه در SQL ممکن است تحریک می‌کند. بعداً توابع SQL (مثل `MOD`) را به عمق پوشش خواهیم داد.

[](introduction.html)
