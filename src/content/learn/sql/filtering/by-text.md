---
title: "فیلتر کردن متن با SQL"
description: "یادگیری فیلتر کردن متن با SQL: استفاده از WHERE، LIKE، IN، NOT IN، TRIM، UPPER، LOWER، regex و متغیرها برای یافتن و فیلتر کردن داده‌های رشته‌ای در جداول."
redirect_from:
  - /learn/sql/filtering/by-text
toc:
  - id: "sql-filtering-by-text"
    title: "فیلتر کردن متن با SQL"
    level: 1
    href: "#sql-filtering-by-text"
  - id: "what-we-ll-cover"
    title: "آنچه پوشش می‌دهیم"
    level: 2
    href: "#what-we-ll-cover"
  - id: "sql-to-filter-rows-by-exact-match"
    title: "SQL برای فیلتر کردن ردیف‌ها با تطابق دقیق"
    level: 2
    href: "#sql-to-filter-rows-by-exact-match"
  - id: "sql-to-handle-text-casing-with-upper-and-lower"
    title: "SQL برای مدیریت حروف بزرگ و کوچک با UPPER() و LOWER()"
    level: 2
    href: "#sql-to-handle-text-casing-with-upper-and-lower"
  - id: "sql-to-ignore-spaces-with-trim"
    title: "SQL برای نادیده گرفتن فاصله‌ها با TRIM()"
    level: 2
    href: "#sql-to-ignore-spaces-with-trim"
  - id: "sql-to-filter-rows-by-multiple-search-terms-with-in"
    title: "SQL برای فیلتر کردن ردیف‌ها با چند عبارت جستجو با IN"
    level: 2
    href: "#sql-to-filter-rows-by-multiple-search-terms-with-in"
  - id: "sql-to-exclude-rows-that-contain-exact-matches-with-not-in"
    title: "SQL برای حذف ردیف‌هایی که شامل تطابق‌های دقیق هستند با NOT IN"
    level: 2
    href: "#sql-to-exclude-rows-that-contain-exact-matches-with-not-in"
  - id: "sql-to-filter-rows-that-contain-part-of-some-text-with-like"
    title: "SQL برای فیلتر کردن ردیف‌هایی که شامل بخشی از متن هستند با LIKE"
    level: 2
    href: "#sql-to-filter-rows-that-contain-part-of-some-text-with-like"
  - id: "sql-to-filter-part-of-a-string-based-on-position"
    title: "SQL برای فیلتر کردن بخشی از رشته بر اساس موقعیت"
    level: 2
    href: "#sql-to-filter-part-of-a-string-based-on-position"
  - id: "sql-to-filter-rows-by-multiple-columns"
    title: "SQL برای فیلتر کردن ردیف‌ها با چند ستون"
    level: 2
    href: "#sql-to-filter-rows-by-multiple-columns"
  - id: "sql-to-filter-for-or-exclude-rows-with-missing-values"
    title: "SQL برای فیلتر کردن یا حذف ردیف‌هایی با مقادیر گم‌شده"
    level: 2
    href: "#sql-to-filter-for-or-exclude-rows-with-missing-values"
  - id: "sql-to-filter-text-with-regular-expressions"
    title: "SQL برای فیلتر کردن متن با عبارات منظم"
    level: 2
    href: "#sql-to-filter-text-with-regular-expressions"
  - id: "sql-to-handle-empty-strings-vs-null-values"
    title: "SQL برای مدیریت رشته‌های خالی در مقابل مقادیر NULL"
    level: 2
    href: "#sql-to-handle-empty-strings-vs-null-values"
  - id: "sql-filter-by-a-variable"
    title: "فیلتر SQL با متغیر"
    level: 2
    href: "#sql-filter-by-a-variable"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "فیلتر کردن با SQL"
    href: "index.html"
---

# فیلتر کردن متن با SQL

یادگیری فیلتر کردن متن با SQL: استفاده از WHERE، LIKE، IN، NOT IN، TRIM، UPPER، LOWER، regex و متغیرها برای یافتن و فیلتر کردن داده‌های رشته‌ای در جداول.

## آنچه پوشش می‌دهیم

- فیلتر کردن ردیف‌ها با تطابق دقیق متن با `=` (یا حذف با `!=`) [›](#sql-to-filter-rows-by-exact-match)
- نادیده گرفتن حروف بزرگ و کوچک و فاصله‌ها با `UPPER()`، `LOWER()` و `TRIM()` [›](#sql-to-handle-text-casing-with-upper-and-lower)
- شامل یا حذف ردیف‌ها با `IN` و `NOT IN` [›](#sql-to-filter-rows-by-multiple-search-terms-with-in)
- یافتن تطابق‌های جزئی با `LIKE` و کاراکترهای جایگزین [›](#sql-to-filter-rows-that-contain-part-of-some-text-with-like)
- تطابق بر اساس موقعیت با `SUBSTRING()` [›](#sql-to-filter-part-of-a-string-based-on-position)
- فیلتر کردن با چند ستون با `AND` و `OR` [›](#sql-to-filter-rows-by-multiple-columns)
- کار با مقادیر گم‌شده با استفاده از `IS NULL` و `IS NOT NULL` [›](#sql-to-filter-for-or-exclude-rows-with-missing-values)
- استفاده از عبارات منظم برای فیلتر کردن پیشرفته متن [›](#sql-to-filter-text-with-regular-expressions)
- مدیریت رشته‌های خالی در مقابل مقادیر NULL [›](#sql-to-handle-empty-strings-vs-null-values)
- پارامترسازی فیلترهایتان با متغیرها [›](#sql-filter-by-a-variable)

می‌توانید ردیف‌ها را با کلمه کلیدی `WHERE` در SQL فیلتر کنید. این راهنما روش‌های رایج برای فیلتر کردن جداول بر اساس ستون‌های متنی (ستون‌هایی با انواع داده رشته یا varchar) را پوشش می‌دهد.

> نیاز به یادآوری سریع قبل از ورود به SQL پیشرفته دارید؟ [برگه تقلب SQL](../../cheat-sheets/sql-cheat-sheet.html) ما را برای دستورات و نحو اصلی بررسی کنید. همچنین برای به اشتراک گذاشتن با همکارانی که تازه در تحلیل داده شروع کرده‌اند عالی است.

## SQL برای فیلتر کردن ردیف‌ها با تطابق دقیق

برای جستجوی یک تطابق دقیق و حساس به حروف بزرگ و کوچک، از بند `WHERE` با عملگر `=` استفاده کنید. عبارت باید در کوتیشن تکی باشد.

```
SELECT
  *
FROM
  products
WHERE
  title = 'Lightweight Wool Computer' -- توجه: کوتیشن تکی

```

اگر می‌خواهید همه چیز را به جز محصولاتی که عنوان آن‌ها "Lightweight wool computer" است حذف کنید، از `!=` استفاده کنید:

```
SELECT
  *
FROM
  products
WHERE
  -- دریافت همه ردیف‌هایی که با این عبارت تطابق ندارند
  title != 'Lightweight Wool Computer'

```

## SQL برای مدیریت حروف بزرگ و کوچک با UPPER() و LOWER()

اگر می‌خواهید حروف بزرگ و کوچک را نادیده بگیرید، می‌توانید هر دو طرف مقایسه را به یک حالت تبدیل کنید. در اینجا نحوه یافتن همه محصولاتی که عنوان آن‌ها تطابق دارد، بدون توجه به حروف بزرگ و کوچک:

```
SELECT
  *
FROM
  products
WHERE
  LOWER(title) = LOWER('LIGHTWEIGHT WOOL COMPUTER')

```

## SQL برای نادیده گرفتن فاصله‌ها با TRIM()

اگر رشته‌هایتان می‌توانند شامل فاصله اضافی باشند، می‌توانید فاصله‌های ابتدا یا انتها را در ستون‌های متنی با `TRIM()` نادیده بگیرید:

```
SELECT
  *
FROM
  products
WHERE
  -- حذف کاراکترهای فاصله ابتدا و انتها
  TRIM(title) = 'Lightweight Wool Computer';

```

## SQL برای فیلتر کردن ردیف‌ها با چند عبارت جستجو با IN

برای جستجوی چند عبارت، می‌توانید از `=` و `OR` استفاده کنید، مثل این:

```
SELECT
  *
FROM
  products
WHERE
  -- عملگر برابر حساس به حروف بزرگ و کوچک است
  title = 'Lightweight Wool Computer'
  OR title = 'Intelligent Paper Hat'

```

اما بهتر است از `IN` استفاده کنید (خواندن آن آسان‌تر است)، مثل این:

```
SELECT
  *
FROM
  products
WHERE
-- فهرست عبارات دقیق برای تطابق، محصور شده در پرانتز
  title IN (
    'Lightweight Wool Computer', -- عبارات جدا شده با کاما
    'Intelligent Paper Hat' -- بدون کاما در انتهای فهرست
  );

```

## SQL برای حذف ردیف‌هایی که شامل تطابق‌های دقیق هستند با NOT IN

همچنین می‌توانید همه ردیف‌هایی که عبارت‌های جستجو نیستند را با `NOT IN` دریافت کنید:

```
SELECT
  *
FROM
  products
WHERE
  -- فهرست عبارات دقیقی که می‌خواهید حذف کنید، محصور شده در پرانتز
  title NOT IN (
    'Lightweight Wool Computer', -- عبارات جدا شده با کاما
    'Intelligent Paper Hat'
  );

```

## SQL برای فیلتر کردن ردیف‌هایی که شامل بخشی از متن هستند با LIKE

برای فیلتر کردن ردیف‌ها بر اساس اینکه آیا یک ستون شامل بخشی از یک متن/رشته است یا نه، از کلمه کلیدی `LIKE` استفاده کنید. به عنوان مثال، اگر می‌خواهیم همه محصولات Lightweight را جستجو کنیم (حساس به حروف بزرگ و کوچک):

```txt
| Title                      | Category |
|----------------------------|----------|
| Lightweight Paper Bottle   | Gadget   |
| Lightweight Wool Bag       | Gadget   |
| Lightweight Leather Gloves | Gadget   |

```

می‌توانید از `LIKE` استفاده کنید، مثل این:

```
SELECT
  title,
  category
FROM
  products
WHERE
  -- عبارت حساس به حروف بزرگ و کوچک است
  title LIKE 'Lightweight%'

```

`LIKE` معمولاً از دو کاراکتر جایگزین پشتیبانی می‌کند:

- `%` یک عملگر جایگزین برای تطابق با صفر یا بیشتر کاراکتر است.
- `_` با یک کاراکتر تطابق می‌دهد.

اگر عبارت جستجوی شما شامل یک کاراکتر تحت‌اللفظی `%` یا `_` است، می‌توانید به موتور پایگاه داده بگویید که آن را به عنوان یک کاراکتر عادی با `ESCAPE` در نظر بگیرد. این کد برای فیلتر کردن عنوان‌هایی مثل `Wool %` است:

```
SELECT
  *
FROM
  products
WHERE
  title LIKE 'Wool \%' ESCAPE '\';

```

`\` یک کاراکتر escape کلاسیک است. اما اگر `\` معنای خاصی در داده‌هایتان دارد، می‌توانید کاراکترهای مختلفی به تابع `ESCAPE` ارائه دهید، مثلاً `ESCAPE !`.

همچنین می‌توانید از ترفند تبدیل حروف بزرگ و کوچک با `LIKE` برای تطابق‌های جزئی استفاده کنید:

```
SELECT
  *
FROM
  products
WHERE
  -- استفاده از UPPER (یا LOWER) برای اطمینان از اینکه حروف بزرگ و کوچک مهم نیست
  UPPER(title) LIKE 'LIGHTWEIGHT%';

```

> **عملگرهای جایگزین ابتدایی باعث اسکن کامل جدول می‌شوند**. یعنی موتور پایگاه داده باید هر ردیف را بررسی کند؛ نمی‌تواند از هیچ ایندکسی که روی ستون تنظیم شده استفاده کند. پس با عملگرهای جایگزین ابتدایی (مثل `%wool`) مراقب باشید. [بهترین روش‌های پرس‌وجوی SQL](../working-with-sql/sql-best-practices.html#avoid-bookending-wildcards-in-where-statements) را ببینید.

## SQL برای فیلتر کردن بخشی از رشته بر اساس موقعیت

برای فیلتر کردن بر اساس بخشی از یک رشته بر اساس موقعیت، از `SUBSTRING()` استفاده کنید. به عنوان مثال، برای یافتن محصولاتی که عنوان آن‌ها با "Small" شروع می‌شود.

```txt
| Title                   | Category   |
|-------------------------|------------|
| Small Marble Shoes      | Doohickey  |
| Small Marble Hat        | Doohickey  |
| Small Plastic Computer  | Doohickey  |
| ...                     | ...        |

```

می‌توانید از `SUBSTRING` استفاده کنید:

```
SELECT
  title,
  category
FROM
  products
WHERE
  -- فیلتر برای پنج حرف اول در رشته
  -- FROM نقطه شروع را تعیین می‌کند (ایندکس از 1 شروع می‌شود)
  -- FOR تعداد کاراکترها از نقطه شروع را تعیین می‌کند
  -- حساس به حروف بزرگ و کوچک
  SUBSTRING(title FROM 1 FOR 5) = 'Small';

```

## SQL برای فیلتر کردن ردیف‌ها با چند ستون

می‌توانید با `AND` و `OR` در یک بند `WHERE` واحد با چند ستون فیلتر کنید.

برای دریافت نتایجی که باید هم "Lightweight" باشند و هم در دسته Gizmo:

```txt
| Title                        | Category |
|------------------------------|----------|
| Lightweight Linen Coat       | Gizmo    |
| Lightweight Linen Bottle     | Gizmo    |
| Lightweight Steel Knife      | Gizmo    |
| Lightweight Leather Bench    | Gizmo    |

```

از یک بند `WHERE` با `AND` استفاده می‌کنید:

```
SELECT
  title,
  category
FROM
  products
WHERE
-- AND ردیف‌هایی را برمی‌گرداند که هر دو معیار را برآورده می‌کنند
  title LIKE 'Lightweight%'
  AND category = 'Gizmo';

```

اگر می‌خواهید ردیف‌هایی که یا محصول lightweight است یا در دسته Gizmo است، مثل این:

```txt
| Title                     | Category |
|---------------------------|----------|
| Rustic Paper Wallet       | Gizmo    |
| Mediocre Wooden Table     | Gizmo    |
| Sleek Paper Toucan        | Gizmo    |
| Synergistic Steel Chair   | Gizmo    |
| Lightweight Paper Bottle  | Gadget   |
| ...                       | ...      |

```

از `OR` استفاده کنید:

```
SELECT
  title,
  category
FROM
  products
WHERE
-- OR ردیف‌هایی را برمی‌گرداند که هر یک از معیارها را برآورده می‌کنند
  title LIKE 'Lightweight%'
  OR category = 'Gizmo';

```

با پرانتز، می‌توانید با شرطی‌ها خلاق باشید. در اینجا نحوه جستجوی محصولات lightweight در دسته‌های `Gizmo` یا `Widget`:

```
SELECT
  title,
  category
FROM
  products
WHERE
  title LIKE 'Lightweight%'
  -- محدود کردن شرطی OR با پرانتز
  AND (
    category = 'Gizmo'
    OR category = 'Widget'
  )
;

```

پرانتزها در اینجا الزامی هستند، در غیر این صورت ردیف‌هایی را برمی‌گردانید که محصول wool در دسته Gizmo است، به علاوه همه محصولات Widget، بدون توجه به اینکه آیا گوسفند دخیل بوده یا نه.

## SQL برای فیلتر کردن یا حذف ردیف‌هایی با مقادیر گم‌شده

گاهی اوقات می‌خواهید ردیف‌هایی را پیدا کنید که یک ستون متنی خالی است (null). می‌توانید این کار را با `IS NULL` انجام دهید:

```
SELECT
  *
FROM
  products
WHERE
  title IS NULL;

```

آن پرس‌وجو همه محصولاتی که عنوان آن‌ها گم شده است را به شما می‌دهد. اگر می‌خواهید برعکس—ردیف‌هایی که عنوان آن‌ها موجود است—از `IS NOT NULL` استفاده کنید:

```
SELECT
  *
FROM
  products
WHERE
  title IS NOT NULL;

```

## SQL برای فیلتر کردن متن با عبارات منظم

برای جستجوهای دقیق جراحی‌گونه، برخی پایگاه‌های داده به شما امکان استفاده از عبارات منظم برای جستجوی داده‌هایتان را می‌دهند.

بیایید بگوییم (به دلایلی) می‌خواهیم همه محصولاتی را جستجو کنیم که آخرین کلمه عنوان محصول دقیقاً پنج حرف دارد، مثل این:

```txt
| Title                        | Category   |
|------------------------------|------------|
| Small Marble Shoes           | Doohickey  |
| Synergistic Granite Chair    | Doohickey  |
| Enormous Aluminum Shirt     | Doohickey  |
| Enormous Steel Watch         | Doohickey  |
| Mediocre Wooden Table        | Gizmo      |
| ...                          | ...        |

```

می‌توانیم از یک عبارت منظم برای فیلتر کردن ردیف‌ها استفاده کنیم:

```
SELECT
  title,
  category
FROM
  products
WHERE
  -- ممکن است نیاز به استفاده از نام تابع regex متفاوتی داشته باشید؛
  -- بررسی کنید که پایگاه داده شما از کدام نام تابع پشتیبانی می‌کند
  REGEXP_LIKE (title, '\b[a-zA-Z]{5}\W*$', 'i');

```

`\b[a-zA-Z]{5}\W*$` به معنای "آخرین کلمه در رشته که دقیقاً 5 کاراکتر دارد" است. موفق باشید در یادگیری عبارات منظم؛ بیشتر مردم فقط نحوه انجام regexهای خاص را در صورت نیاز جستجو می‌کنند. مدل‌های تولیدی در regexها خوب می‌شوند. فقط برای زمینه، این نمادها به چه معنا هستند:

- `\b`: مرز کلمه، پس شما کل کلمه را تطابق می‌دهید، نه بخشی از کلمه دیگر.
- `[a-zA-Z]`: با هر حرف بزرگ یا کوچک (ASCII) تطابق می‌دهد.
- `{5}`: "دقیقاً پنج" از آن حروف.
- `\W*`: با صفر یا بیشتر کاراکترهای غیرکلمه (هر چیزی که حرف، عدد یا زیرخط نیست) تطابق می‌دهد، در صورتی که هر نشانه‌گذاری در انتها وجود داشته باشد که می‌تواند شمارش ما را خراب کند.
- `$`: موقعیت در انتهای رشته.

`i` در موقعیت سوم فراخوانی تابع به معنای `insensitive` است، یعنی بدون حساسیت به حروف بزرگ و کوچک. پایگاه‌های داده در اینکه آیا می‌توانید از regex استفاده کنید و چه توابعی در دسترس است متفاوت هستند، پس باید بررسی کنید که پایگاه داده شما چگونه این کار را انجام می‌دهد. در اینجا چند مثال آورده شده:

- PostgreSQL: `~`، `~*`
- MySQL: `REGEXP`، `RLIKE`، یا `REGEXP_LIKE()`

به طور کلی، فقط زمانی از regex استفاده کنید که نمی‌توانید ردیف‌ها را با روش‌های بالا فیلتر کنید. regexها فقط برای موجودات تله‌پاتی خوانا هستند، و پایگاه‌های داده نمی‌توانند از ایندکس‌ها برای سرعت بخشیدن به زمان پرس‌وجو استفاده کنند.

## SQL برای مدیریت رشته‌های خالی در مقابل مقادیر NULL

رشته‌های خالی (`''`) و مقادیر `NULL` در SQL متفاوت هستند، اما مردم اغلب آن‌ها را اشتباه می‌گیرند:

- یک رشته خالی یک مقدار واقعی است که شامل صفر کاراکتر است
- `NULL` نشان‌دهنده عدم وجود هر مقدار است (پس، حتی یک رشته خالی نیست)

برای یافتن ردیف‌هایی که یک ستون متنی موجود است اما خالی است (یک رشته خالی `''`):

```
SELECT
  title
FROM
  products
WHERE
  title = '';

```

برای یافتن ردیف‌هایی که یک ستون یا `NULL` است یا خالی:

```
SELECT
  title
FROM
  products
WHERE
  title IS NULL OR description = '';

```

این تمایز زمانی مهم است که می‌خواهید داده‌های واقعاً "گم‌شده" را در مقابل فیلدهایی که عمداً خالی گذاشته شده‌اند پیدا کنید. برخی سیستم‌های پایگاه داده رشته‌های خالی را به عنوان `NULL` در نظر می‌گیرند، اما بهتر است صریح باشید که دنبال چه چیزی هستید.

## فیلتر SQL با متغیر

در متابیس (این فقط در متابیس کار می‌کند)، می‌توانید پرس‌وجوهای SQL را پارامترسازی کنید تا مردم بتوانند مقادیر را در بند `WHERE` وارد کنند. در اینجا یک متغیر `title` ایجاد می‌کنیم (محصور شده در بریس‌های دوتایی) و از `CONCAT` برای اضافه کردن عملگرهای جایگزین `%` به متغیر استفاده می‌کنیم:

```

SELECT
  title,
  category,
  vendor
FROM
  products
WHERE
  -- نیاز به CONCAT برای ساخت رشته با مقدار درون‌یابی شده دارید
  -- این نحو متغیر فقط در متابیس کار می‌کند
  title LIKE CONCAT ({{title}}, '%');

```

به این ترتیب مردم `Lightweight` را در ویجت فیلتر یک داشبورد وارد می‌کنند و پرس‌وجو فقط محصولات lightweight را برمی‌گرداند.

[پارامترهای SQL](../../../docs/latest/questions/native-editor/sql-parameters.html) را بررسی کنید

## مطالعه بیشتر

- [پرس‌وجوی SQL](../getting-started/querying-tables.html)
- [فیلتر کردن تاریخ با SQL](by-date.html)
- [بهترین روش‌های SQL](../working-with-sql/sql-best-practices.html)

[
      
        
        

      
    ](by-date.html)
