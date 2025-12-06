---
title: "بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL"
description: "بهترین روش‌های SQL: راهنمای مختصری برای نوشتن پرس‌وجوهای SQL بهتر."
redirect_from:
  - /learn/sql/working-with-sql/sql-best-practices
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/sql-best-practices
  - /learn/sql-questions/sql-best-practices
toc:
  - id: "best-practices-for-writing-sql-queries"
    title: "بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL"
    level: 1
    href: "#best-practices-for-writing-sql-queries"
  - id: "correctness-readability-then-optimization-in-that-order"
    title: "درستی، خوانایی، سپس بهینه‌سازی: به این ترتیب"
    level: 2
    href: "#correctness-readability-then-optimization-in-that-order"
  - id: "make-your-haystacks-as-small-as-possible-before-searching-for-your-needles"
    title: "کپه‌های کاه خود را تا حد امکان کوچک کنید قبل از جستجوی سوزن‌هایتان"
    level: 2
    href: "#make-your-haystacks-as-small-as-possible-before-searching-for-your-needles"
  - id: "first-get-to-know-your-data"
    title: "اول، با داده‌های خود آشنا شوید"
    level: 2
    href: "#first-get-to-know-your-data"
  - id: "developing-your-query"
    title: "توسعه پرس‌وجوی شما"
    level: 2
    href: "#developing-your-query"
  - id: "the-general-order-of-query-execution"
    title: "ترتیب کلی اجرای پرس‌وجو"
    level: 2
    href: "#the-general-order-of-query-execution"
  - id: "some-query-guidelines-not-rules"
    title: "برخی دستورالعمل‌های پرس‌وجو (نه قوانین)"
    level: 2
    href: "#some-query-guidelines-not-rules"
  - id: "comment-your-code-especially-the-why"
    title: "کد خود را کامنت کنید، به خصوص چرا"
    level: 3
    href: "#comment-your-code-especially-the-why"
  - id: "sql-best-practices-for-from"
    title: "بهترین روش‌های SQL برای FROM"
    level: 3
    href: "#sql-best-practices-for-from"
  - id: "join-tables-using-the-on-keyword"
    title: "Join کردن جداول با استفاده از کلمه کلیدی ON"
    level: 4
    href: "#join-tables-using-the-on-keyword"
  - id: "alias-multiple-tables"
    title: "نام مستعار دادن به چندین جدول"
    level: 4
    href: "#alias-multiple-tables"
  - id: "sql-best-practices-for-where"
    title: "بهترین روش‌های SQL برای WHERE"
    level: 3
    href: "#sql-best-practices-for-where"
  - id: "filter-with-where-before-having"
    title: "فیلتر کردن با WHERE قبل از HAVING"
    level: 4
    href: "#filter-with-where-before-having"
  - id: "avoid-functions-on-columns-in-where-clauses"
    title: "اجتناب از توابع روی ستون‌ها در بندهای WHERE"
    level: 4
    href: "#avoid-functions-on-columns-in-where-clauses"
  - id: "prefer-to-like"
    title: "ترجیح = به LIKE"
    level: 4
    href: "#prefer-to-like"
  - id: "avoid-bookending-wildcards-in-where-statements"
    title: "اجتناب از wildcardهای ابتدا و انتها در عبارات WHERE"
    level: 4
    href: "#avoid-bookending-wildcards-in-where-statements"
  - id: "prefer-exists-to-in"
    title: "ترجیح EXISTS به IN"
    level: 4
    href: "#prefer-exists-to-in"
  - id: "sql-best-practices-for-group-by"
    title: "بهترین روش‌های SQL برای GROUP BY"
    level: 3
    href: "#sql-best-practices-for-group-by"
  - id: "order-multiple-groupings-by-descending-cardinality"
    title: "مرتب‌سازی چندین گروه‌بندی بر اساس cardinality نزولی"
    level: 4
    href: "#order-multiple-groupings-by-descending-cardinality"
  - id: "sql-best-practices-for-having"
    title: "بهترین روش‌های SQL برای HAVING"
    level: 3
    href: "#sql-best-practices-for-having"
  - id: "only-use-having-for-filtering-aggregates"
    title: "فقط از HAVING برای فیلتر کردن تجمیع‌ها استفاده کنید"
    level: 4
    href: "#only-use-having-for-filtering-aggregates"
  - id: "sql-best-practices-for-select"
    title: "بهترین روش‌های SQL برای SELECT"
    level: 3
    href: "#sql-best-practices-for-select"
  - id: "select-columns-not-stars"
    title: "SELECT ستون‌ها، نه ستاره‌ها"
    level: 4
    href: "#select-columns-not-stars"
  - id: "sql-best-practices-for-union"
    title: "بهترین روش‌های SQL برای UNION"
    level: 3
    href: "#sql-best-practices-for-union"
  - id: "prefer-union-all-to-union"
    title: "ترجیح UNION ALL به UNION"
    level: 4
    href: "#prefer-union-all-to-union"
  - id: "sql-best-practices-for-order-by"
    title: "بهترین روش‌های SQL برای ORDER BY"
    level: 3
    href: "#sql-best-practices-for-order-by"
  - id: "avoid-sorting-where-possible-especially-in-subqueries"
    title: "اجتناب از مرتب‌سازی در صورت امکان، به خصوص در زیرپرس‌وجوها"
    level: 4
    href: "#avoid-sorting-where-possible-especially-in-subqueries"
  - id: "sql-best-practices-for-index"
    title: "بهترین روش‌های SQL برای INDEX"
    level: 2
    href: "#sql-best-practices-for-index"
  - id: "adding-indexes"
    title: "افزودن ایندکس‌ها"
    level: 3
    href: "#adding-indexes"
  - id: "use-partial-indexes"
    title: "استفاده از ایندکس‌های جزئی"
    level: 3
    href: "#use-partial-indexes"
  - id: "use-composite-indexes"
    title: "استفاده از ایندکس‌های ترکیبی"
    level: 3
    href: "#use-composite-indexes"
  - id: "explain"
    title: "EXPLAIN"
    level: 2
    href: "#explain"
  - id: "look-for-bottlenecks"
    title: "جستجوی گلوگاه‌ها"
    level: 3
    href: "#look-for-bottlenecks"
  - id: "with"
    title: "WITH"
    level: 2
    href: "#with"
  - id: "organize-your-queries-with-common-table-expressions-cte"
    title: "سازماندهی پرس‌وجوهای خود با عبارات جدول مشترک (CTE)"
    level: 3
    href: "#organize-your-queries-with-common-table-expressions-cte"
  - id: "with-metabase-you-don-t-even-have-to-use-sql"
    title: "با متابیس، حتی نیازی به استفاده از SQL ندارید"
    level: 2
    href: "#with-metabase-you-don-t-even-have-to-use-sql"
  - id: "glaring-errors-or-omissions"
    title: "خطاها یا حذف‌های واضح؟"
    level: 2
    href: "#glaring-errors-or-omissions"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "یادگیری SQL"
    href: "../index.html"
  - title: "کار با SQL"
    href: "index.html"
---

# بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL

بهترین روش‌های SQL: راهنمای مختصری برای نوشتن پرس‌وجوهای SQL بهتر.

این مقاله برخی بهترین روش‌ها برای نوشتن پرس‌وجوهای SQL برای تحلیل‌گران داده و دانشمندان داده را پوشش می‌دهد. بیشتر بحث ما مربوط به SQL به طور کلی خواهد بود، اما برخی یادداشت‌ها درباره ویژگی‌های خاص متابیس که نوشتن SQL را آسان می‌کند شامل می‌کنیم.

## درستی، خوانایی، سپس بهینه‌سازی: به این ترتیب

هشدار استاندارد علیه بهینه‌سازی زودهنگام در اینجا اعمال می‌شود. از تنظیم پرس‌وجوی SQL خود تا زمانی که می‌دانید پرس‌وجو داده‌هایی که دنبال آن هستید را برمی‌گرداند اجتناب کنید. و حتی پس از آن، فقط در صورت اجرای مکرر پرس‌وجو (مثل تأمین انرژی یک [داشبورد محبوب](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html))، یا اگر پرس‌وجو تعداد زیادی ردیف را پیمایش می‌کند، بهینه‌سازی پرس‌وجوی خود را اولویت دهید. به طور کلی، دقت (آیا پرس‌وجو نتایج مورد نظر را تولید می‌کند) و خوانایی (آیا دیگران می‌توانند به راحتی کد را درک و تغییر دهند) را قبل از نگرانی درباره عملکرد اولویت دهید.

## کپه‌های کاه خود را تا حد امکان کوچک کنید قبل از جستجوی سوزن‌هایتان

به طور قابل بحث، ما در حال ورود به بهینه‌سازی هستیم، اما هدف باید این باشد که به پایگاه داده بگوییم حداقل تعداد مقادیر لازم برای بازیابی نتایج شما را اسکن کند.

بخشی از زیبایی SQL ماهیت اعلانی آن است. به جای گفتن به پایگاه داده که چگونه رکوردها را بازیابی کند، فقط باید به پایگاه داده بگویید کدام رکوردها را نیاز دارید، و پایگاه داده باید کارآمدترین راه برای دریافت آن اطلاعات را پیدا کند. در نتیجه، بخش زیادی از توصیه درباره بهبود کارایی پرس‌وجوها به سادگی نشان دادن نحوه استفاده از ابزارها در SQL برای بیان نیازهای خود با دقت بیشتر است.

ترتیب کلی اجرای پرس‌وجو را مرور می‌کنیم و نکات در طول راه برای کاهش فضای جستجوی شما شامل می‌کنیم. سپس درباره سه ابزار ضروری برای افزودن به کمربند ابزار شما صحبت می‌کنیم: [INDEX](#sql-best-practices-for-index)، [EXPLAIN](#explain)، و [WITH](#with).

## اول، با داده‌های خود آشنا شوید

قبل از نوشتن یک خط کد، با مطالعه متادیتا با داده‌های خود آشنا شوید تا مطمئن شوید که یک ستون واقعاً شامل داده‌هایی است که انتظار دارید. [ویرایشگر SQL](../../../docs/latest/questions/native-editor/writing-sql.html) در متابیس دارای یک تب مرجع داده مفید (قابل دسترسی از طریق **آیکون کتاب**) است، جایی که می‌توانید از طریق جداول در پایگاه داده خود مرور کنید و ستون‌ها و اتصالات آن‌ها را مشاهده کنید:

![Use the Data Reference sidebar to view a table](../../images/best-practices-for-writing-sql-queries/view-columns.png)

همچنین می‌توانید مقادیر نمونه برای ستون‌های خاص را مشاهده کنید:

![Use the Data Reference sidebar to view sample data.](../../images/best-practices-for-writing-sql-queries/sample-data.png)

متابیس راه‌های مختلف زیادی برای کاوش داده‌های شما به شما می‌دهد: می‌توانید جداول را [X-ray](../../../docs/latest/exploration-and-organization/x-rays.html) کنید، [سؤال‌ها را بسازید](../../../docs/latest/questions/introduction.html) با استفاده از query builder، یک سؤال ذخیره شده را به کد SQL تبدیل کنید، یا از یک پرس‌وجوی SQL موجود بسازید. ما این را در مقالات دیگر پوشش می‌دهیم؛ برای حالا، بیایید از طریق گردش کار کلی یک پرس‌وجو برویم.

## توسعه پرس‌وجوی شما

روش هر کس متفاوت خواهد بود، اما در اینجا یک گردش کار نمونه برای دنبال کردن هنگام توسعه یک پرس‌وجو است.

- همانطور که در بالا، متادیتای ستون و جدول را مطالعه کنید. اگر از ویرایشگر بومی (SQL) متابیس استفاده می‌کنید، همچنین می‌توانید برای [Snippetها](../../metabase-basics/querying-and-dashboards/sql-in-metabase/snippets.html) که شامل کد SQL برای جدول و ستون‌هایی که با آن‌ها کار می‌کنید جستجو کنید. Snippetها به شما امکان می‌دهند ببینید تحلیل‌گران دیگر چگونه داده را پرس‌وجو کرده‌اند. یا می‌توانید [یک پرس‌وجو را از یک سؤال SQL موجود شروع کنید](../../../docs/latest/questions/native-editor/referencing-saved-questions-in-queries.html).
- برای احساس کردن مقادیر یک جدول، SELECT * از جداولی که با آن‌ها کار می‌کنید و نتایج را LIMIT کنید. LIMIT را در حالی که ستون‌های خود را اصلاح می‌کنید (یا ستون‌های بیشتری از طریق join اضافه می‌کنید) اعمال نگه دارید.
- ستون‌ها را به حداقل مجموعه لازم برای پاسخ به سؤال خود محدود کنید.
- هر فیلتری را روی آن ستون‌ها اعمال کنید.
- اگر نیاز به تجمیع داده دارید، تعداد کمی ردیف را تجمیع کنید و تأیید کنید که تجمیع‌ها همانطور که انتظار دارید هستند.
- پس از اینکه یک پرس‌وجو دارید که نتایج مورد نیاز شما را برمی‌گرداند، به دنبال بخش‌هایی از پرس‌وجو برای ذخیره به عنوان یک عبارت جدول مشترک (CTE) برای کپسوله کردن آن منطق باشید.
- با متابیس، همچنین می‌توانید کد را به عنوان یک [Snippet](../../metabase-basics/querying-and-dashboards/sql-in-metabase/snippets.html) ذخیره کنید تا در پرس‌وجوهای دیگر به اشتراک بگذارید و استفاده مجدد کنید.

## ترتیب کلی اجرای پرس‌وجو

قبل از ورود به نکات فردی درباره نوشتن کد SQL، مهم است که درکی از نحوه اجرای پرس‌وجوی شما توسط پایگاه‌های داده داشته باشید. این با ترتیب خواندن (چپ به راست، بالا به پایین) که برای نوشتن پرس‌وجوی خود استفاده می‌کنید متفاوت است. بهینه‌کننده‌های پرس‌وجو می‌توانند ترتیب فهرست زیر را تغییر دهند، اما این چرخه حیات کلی یک پرس‌وجوی SQL خوب است که هنگام نوشتن SQL به خاطر بسپارید. از ترتیب اجرا برای گروه‌بندی نکات درباره نوشتن SQL خوب که در ادامه می‌آید استفاده می‌کنیم.

قاعده سرانگشتی در اینجا این است: هر چه زودتر در این فهرست بتوانید داده را حذف کنید، بهتر است.

1. [FROM](#sql-best-practices-for-from) (و JOIN) جدول(ها) ارجاع داده شده در پرس‌وجو را می‌گیرد. این جداول حداکثر فضای جستجوی مشخص شده توسط پرس‌وجوی شما را نشان می‌دهند. در صورت امکان، این فضای جستجو را قبل از ادامه محدود کنید.
2. [WHERE](#sql-best-practices-for-where) داده را فیلتر می‌کند.
3. [GROUP BY](#sql-best-practices-for-group-by) داده را تجمیع می‌کند.
4. [HAVING](#sql-best-practices-for-having) داده تجمیع شده‌ای که معیارها را برآورده نمی‌کند را فیلتر می‌کند.
5. [SELECT](#sql-best-practices-for-select) ستون‌ها را می‌گیرد (سپس ردیف‌ها را در صورت فراخوانی DISTINCT تک‌تک می‌کند).
6. [UNION](#sql-best-practices-for-union) داده انتخاب شده را در یک مجموعه نتیجه ادغام می‌کند.
7. [ORDER BY](#sql-best-practices-for-order-by) نتایج را مرتب می‌کند.

و البته، همیشه مواقعی وجود خواهد داشت که بهینه‌کننده پرس‌وجو برای پایگاه داده خاص شما یک برنامه پرس‌وجوی متفاوت طراحی می‌کند، پس روی این ترتیب گیر نکنید.

## برخی دستورالعمل‌های پرس‌وجو (نه قوانین)

نکات زیر دستورالعمل هستند، نه قوانین، که برای دور نگه داشتن شما از مشکل در نظر گرفته شده‌اند. هر پایگاه داده SQL را متفاوت مدیریت می‌کند، مجموعه کمی متفاوتی از توابع دارد، و رویکردهای متفاوتی برای بهینه‌سازی پرس‌وجوها می‌گیرد. و این قبل از اینکه حتی به مقایسه پایگاه‌های داده تراکنشی سنتی با پایگاه‌های داده تحلیلی که از فرمت‌های ذخیره‌سازی ستونی استفاده می‌کنند برسیم، که ویژگی‌های عملکردی بسیار متفاوتی دارند.

### کد خود را کامنت کنید، به خصوص چرا

با افزودن کامنت‌هایی که بخش‌های مختلف کد را توضیح می‌دهند به مردم کمک کنید (از جمله خودتان سه ماه بعد). مهم‌ترین چیزی که باید در اینجا ثبت کنید "چرا" است. به عنوان مثال، واضح است که کد زیر سفارش‌ها با `ID` بیشتر از 10 را فیلتر می‌کند، اما دلیل انجام این کار این است که 10 سفارش اول برای تست استفاده می‌شوند.

```
SELECT
  id,
  product
FROM
  orders
-- filter out test orders
WHERE
  order.id > 10

```

نکته اینجا این است که شما یک سربار نگهداری کوچک معرفی می‌کنید: اگر کد را تغییر دهید، باید مطمئن شوید که کامنت هنوز مرتبط و به‌روز است. اما این قیمت کوچکی برای کد خوانا است.

### بهترین روش‌های SQL برای FROM

#### Join کردن جداول با استفاده از کلمه کلیدی ON

اگرچه ممکن است دو جدول را با استفاده از یک بند `WHERE` "join" کنید (یعنی یک join ضمنی انجام دهید، مثل `SELECT * FROM a,b WHERE a.foo = b.bar`)، باید به جای آن یک [JOIN صریح](../../metabase-basics/querying-and-dashboards/questions/joins-in-metabase.html) را ترجیح دهید:

```
SELECT
  o.id,
  o.total,
  p.vendor
FROM
  orders AS o
  JOIN products AS p ON o.product_id = p.id

```

بیشتر برای خوانایی، چون نحو `JOIN` + `ON` joinها را از بندهای `WHERE` که برای فیلتر کردن نتایج در نظر گرفته شده‌اند متمایز می‌کند.

#### نام مستعار دادن به چندین جدول

هنگام پرس‌وجو از چندین جدول، از نام‌های مستعار استفاده کنید و آن نام‌های مستعار را در عبارت select خود به کار ببرید، تا پایگاه داده (و خواننده شما) نیازی به تجزیه اینکه کدام ستون متعلق به کدام جدول است نداشته باشد. توجه داشته باشید که اگر ستون‌هایی با همان نام در چندین جدول دارید، باید آن‌ها را به صراحت با نام جدول یا نام مستعار ارجاع دهید.

**اجتناب کنید**

```
SELECT
  title,
  last_name,
  first_name
FROM fiction_books
  LEFT JOIN fiction_authors
  ON fiction_books.author_id = fiction_authors.id

```

**ترجیح دهید**

```
SELECT
  books.title,
  authors.last_name,
  authors.first_name
FROM fiction_books AS books
  LEFT JOIN fiction_authors AS authors
  ON books.author_id = authors.id

```

این یک مثال پیش‌پاافتاده است، اما وقتی تعداد جداول و ستون‌ها در پرس‌وجوی شما افزایش می‌یابد، خوانندگان شما مجبور نخواهند بود که کدام ستون در کدام جدول است را ردیابی کنند. و پرس‌وجوهای شما ممکن است اگر یک جدول با نام ستون مبهم join کنید (مثلاً هر دو جدول شامل یک فیلد به نام `Created_At` هستند) خراب شوند.

توجه داشته باشید که فیلترهای فیلد با نام‌های مستعار جدول ناسازگار هستند، پس باید نام‌های مستعار را هنگام اتصال ویجت‌های فیلتر به فیلترهای فیلد خود حذف کنید.

### بهترین روش‌های SQL برای WHERE

#### فیلتر کردن با WHERE قبل از HAVING

از یک بند `WHERE` برای فیلتر کردن ردیف‌های اضافی استفاده کنید، تا مجبور نباشید آن مقادیر را در وهله اول محاسبه کنید. فقط پس از حذف ردیف‌های نامربوط، و پس از تجمیع آن ردیف‌ها و گروه‌بندی آن‌ها، باید یک بند `HAVING` برای فیلتر کردن تجمیع‌ها شامل کنید.

#### اجتناب از توابع روی ستون‌ها در بندهای WHERE

استفاده از یک تابع روی یک ستون در یک بند `WHERE` می‌تواند واقعاً پرس‌وجوی شما را کند کند، چون تابع پرس‌وجو را [غیر sargable](https://en.wikipedia.org/wiki/Sargable) می‌کند (یعنی از استفاده پایگاه داده از یک ایندکس برای سرعت بخشیدن به پرس‌وجو جلوگیری می‌کند). به جای استفاده از ایندکس برای پرش به ردیف‌های مرتبط، تابع روی ستون پایگاه داده را مجبور می‌کند تابع را روی هر ردیف جدول اجرا کند.

و به خاطر داشته باشید، عملگر الحاق `||` نیز یک تابع است، پس سعی نکنید رشته‌ها را برای فیلتر کردن چندین ستون الحاق کنید. به جای آن چندین شرط را ترجیح دهید:

**اجتناب کنید**

```
SELECT hero, sidekick
FROM superheros
WHERE hero || sidekick = 'BatmanRobin'

```

**ترجیح دهید**

```
SELECT hero, sidekick
FROM superheros
WHERE
  hero = 'Batman'
  AND
  sidekick = 'Robin'

```

#### ترجیح = به LIKE

این همیشه مورد نیست. خوب است بدانید که `LIKE` کاراکترها را مقایسه می‌کند و می‌تواند با عملگرهای wildcard مثل `%` جفت شود، در حالی که عملگر `=` رشته‌ها و اعداد را برای تطابق دقیق مقایسه می‌کند. `=` می‌تواند از ستون‌های [ایندکس شده](#sql-best-practices-for-index) استفاده کند. این مورد با همه پایگاه‌های داده نیست، چون `LIKE` می‌تواند از ایندکس‌ها استفاده کند (اگر برای فیلد وجود داشته باشند) تا زمانی که از پیشوند دادن wildcard operator، `%` به عبارت جستجو اجتناب کنید. که ما را به نکته بعدی می‌رساند:

#### اجتناب از wildcardهای ابتدا و انتها در عبارات WHERE

استفاده از wildcard برای جستجو می‌تواند گران باشد. افزودن wildcard به انتهای رشته‌ها را ترجیح دهید. پیشوند دادن یک رشته با wildcard می‌تواند منجر به اسکن کامل جدول شود.

**اجتناب کنید**

```
SELECT column FROM table WHERE col LIKE "%wizar%"

```

**ترجیح دهید**

```
SELECT column FROM table WHERE col LIKE "wizar%"

```

#### ترجیح EXISTS به IN

اگر فقط نیاز به تأیید وجود یک مقدار در یک جدول دارید، `EXISTS` را به `IN` ترجیح دهید، چون فرآیند `EXISTS` به محض یافتن مقدار جستجو خارج می‌شود، در حالی که `IN` کل جدول را اسکن می‌کند. `IN` باید برای یافتن مقادیر در فهرست‌ها استفاده شود.

به طور مشابه، `NOT EXISTS` را به `NOT IN` ترجیح دهید.

### بهترین روش‌های SQL برای GROUP BY

#### مرتب‌سازی چندین گروه‌بندی بر اساس cardinality نزولی

در صورت امکان، ستون‌ها را در `GROUP BY` به ترتیب cardinality نزولی گروه‌بندی کنید. یعنی، ابتدا بر اساس ستون‌هایی با مقادیر منحصر به فرد بیشتر (مثل IDها یا شماره تلفن‌ها) گروه‌بندی کنید قبل از گروه‌بندی بر اساس ستون‌هایی با مقادیر متمایز کمتر (مثل ایالت یا جنسیت).

### بهترین روش‌های SQL برای HAVING

#### فقط از HAVING برای فیلتر کردن تجمیع‌ها استفاده کنید

و قبل از `HAVING`، مقادیر را با استفاده از یک بند `WHERE` قبل از تجمیع و گروه‌بندی آن مقادیر فیلتر کنید.

### بهترین روش‌های SQL برای SELECT

#### SELECT ستون‌ها، نه ستاره‌ها

ستون‌هایی که می‌خواهید در نتایج شامل شوند را مشخص کنید (اگرچه استفاده از `*` هنگام اولین کاوش جداول خوب است — فقط به خاطر داشته باشید نتایج را `LIMIT` کنید).

### بهترین روش‌های SQL برای UNION

#### ترجیح UNION ALL به UNION

اگر تکراری‌ها مشکل نیستند، `UNION ALL` آن‌ها را دور نمی‌ریزد، و از آنجایی که `UNION ALL` وظیفه حذف تکراری‌ها را ندارد، پرس‌وجو کارآمدتر خواهد بود.

### بهترین روش‌های SQL برای ORDER BY

#### اجتناب از مرتب‌سازی در صورت امکان، به خصوص در زیرپرس‌وجوها

مرتب‌سازی گران است. اگر باید مرتب کنید، مطمئن شوید زیرپرس‌وجوهای شما به طور غیرضروری داده را مرتب نمی‌کنند.

## بهترین روش‌های SQL برای INDEX

این بخش برای مدیران پایگاه داده در جمع است (و موضوعی که برای قرار گرفتن در این مقاله خیلی بزرگ است). یکی از رایج‌ترین چیزهایی که مردم هنگام تجربه مشکلات عملکرد در پرس‌وجوهای پایگاه داده با آن مواجه می‌شوند عدم ایندکس‌گذاری کافی است.

کدام ستون‌ها را باید ایندکس کنید معمولاً بستگی به ستون‌هایی دارد که بر اساس آن‌ها فیلتر می‌کنید (یعنی کدام ستون‌ها معمولاً در بندهای `WHERE` شما قرار می‌گیرند). اگر متوجه شدید که همیشه بر اساس یک مجموعه رایج از ستون‌ها فیلتر می‌کنید، باید ایندکس کردن آن ستون‌ها را در نظر بگیرید.

### افزودن ایندکس‌ها

ایندکس کردن ستون‌های کلید خارجی و ستون‌های مکرراً پرس‌وجو شده می‌تواند زمان پرس‌وجو را به طور قابل توجهی کاهش دهد. در اینجا یک عبارت نمونه برای ایجاد یک ایندکس:

```
CREATE INDEX product_title_index ON products (title)

```

انواع مختلف ایندکس در دسترس هستند، رایج‌ترین نوع ایندکس از یک [B-tree](https://en.wikipedia.org/wiki/B-tree) برای سرعت بخشیدن به بازیابی استفاده می‌کند. مقاله ما درباره [سریع‌تر کردن داشبوردها](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html) را بررسی کنید، و مستندات پایگاه داده خود را درباره نحوه ایجاد یک ایندکس مشورت کنید.

### استفاده از ایندکس‌های جزئی

برای مجموعه داده‌های به خصوص بزرگ، یا مجموعه داده‌های نامتعادل، جایی که محدوده‌های مقدار خاص بیشتر ظاهر می‌شوند، ایجاد یک ایندکس با یک بند `WHERE` برای محدود کردن تعداد ردیف‌های ایندکس شده را در نظر بگیرید. ایندکس‌های جزئی همچنین می‌توانند برای محدوده‌های تاریخ نیز مفید باشند، به عنوان مثال اگر می‌خواهید فقط داده هفته گذشته را ایندکس کنید.

### استفاده از ایندکس‌های ترکیبی

برای ستون‌هایی که معمولاً در پرس‌وجوها با هم می‌آیند (مثل last_name، first_name)، ایجاد یک ایندکس ترکیبی را در نظر بگیرید. نحو مشابه ایجاد یک ایندکس واحد است. به عنوان مثال:

```
CREATE INDEX full_name_index ON customers (last_name, first_name)

```

## EXPLAIN

### جستجوی گلوگاه‌ها

برخی پایگاه‌های داده، مثل PostgreSQL، بینش به برنامه پرس‌وجو بر اساس کد SQL شما ارائه می‌دهند. به سادگی کد خود را با کلمات کلیدی `EXPLAIN ANALYZE` پیشوند کنید. می‌توانید از این دستورات برای بررسی برنامه‌های پرس‌وجوی خود و جستجوی گلوگاه‌ها استفاده کنید، یا برای مقایسه برنامه‌ها از یک نسخه پرس‌وجوی خود با نسخه دیگر برای دیدن کدام نسخه کارآمدتر است.

در اینجا یک پرس‌وجوی نمونه با استفاده از پایگاه داده نمونه `dvdrental` در دسترس برای PostgreSQL.

```
EXPLAIN ANALYZE SELECT title, release_year
FROM film
WHERE release_year > 2000;

```

و خروجی:

```
 Seq Scan on film  (cost=0.00..66.50 rows=1000 width=19) (actual time=0.008..0.311 rows=1000 loops=1)
   Filter: ((release_year)::integer > 2000)
 Planning Time: 0.062 ms
 Execution Time: 0.416 ms

```

می‌بینید که میلی‌ثانیه‌های لازم برای زمان برنامه‌ریزی، زمان اجرا، و همچنین هزینه، ردیف‌ها، عرض، زمان‌ها، حلقه‌ها، استفاده از حافظه و بیشتر. خواندن این تحلیل‌ها تا حدی یک هنر است، اما می‌توانید از آن‌ها برای شناسایی مناطق مشکل در پرس‌وجوهای خود (مثل حلقه‌های تودرتو، یا ستون‌هایی که می‌توانند از ایندکس‌گذاری بهره‌مند شوند) استفاده کنید، همانطور که آن‌ها را اصلاح می‌کنید.

در اینجا مستندات PostreSQL درباره [استفاده از EXPLAIN](https://www.postgresql.org/docs/12/using-explain) است.

## WITH

### سازماندهی پرس‌وجوهای خود با عبارات جدول مشترک (CTE)

از بند `WITH` برای کپسوله کردن منطق در یک [عبارت جدول مشترک (CTE)](sql-cte.html) استفاده کنید. در اینجا یک مثال از یک پرس‌وجو که به دنبال محصولاتی با بالاترین میانگین درآمد به ازای واحد فروخته شده در 2019، و همچنین مقادیر حداکثر و حداقل است:

```
WITH product_orders AS (
  SELECT o.created_at AS order_date,
          p.title AS product_title,
          (o.subtotal / o.quantity) AS revenue_per_unit
   FROM orders AS o
   LEFT JOIN products AS p ON o.product_id = p.id
   -- Filter out orders placed by customer service for charging customers
   WHERE o.quantity > 0
)
SELECT product_title AS product,
       AVG(revenue_per_unit) AS avg_revenue_per_unit,
       MAX(revenue_per_unit) AS max_revenue_per_unit,
       MIN(revenue_per_unit) AS min_revenue_per_unit
FROM product_orders
WHERE order_date BETWEEN '2019-01-01' AND '2019-12-31'
GROUP BY product
ORDER BY avg_revenue_per_unit DESC

```

بند `WITH` کد را خوانا می‌کند، چون پرس‌وجوی اصلی (آنچه واقعاً به دنبال آن هستید) با یک زیرپرس‌وجوی طولانی قطع نمی‌شود.

همچنین می‌توانید از CTEها برای خوانا‌تر کردن SQL خود استفاده کنید اگر، به عنوان مثال، پایگاه داده شما فیلدهایی دارد که به طور ناجور نام‌گذاری شده‌اند، یا که نیاز به کمی دستکاری داده برای دریافت داده مفید دارند. به عنوان مثال، CTEها می‌توانند هنگام کار با فیلدهای JSON مفید باشند. در اینجا یک مثال از استخراج و تبدیل فیلدها از یک blob JSON رویدادهای کاربر.

```
WITH source_data AS (
  SELECT events->'data'->>'name'  AS event_name,
    CAST(events->'data'->>'ts' AS timestamp) AS event_timestamp
    CAST(events->'data'->>'cust_id' AS int) AS customer_id
  FROM user_activity
)
SELECT event_name,
       event_timestamp,
       customer_id
FROM source_data

```

به طور جایگزین، می‌توانید یک زیرپرس‌وجو را به عنوان یک [Snippet](../../metabase-basics/querying-and-dashboards/sql-in-metabase/snippets.html) ذخیره کنید:

![Storing a subquery in a snippet and using it in a FROM clause.](../../images/best-practices-for-writing-sql-queries/snippet-example.png)

و بله، همانطور که ممکن است انتظار داشته باشید، Aerodynamic Leather Toucan بالاترین میانگین درآمد به ازای واحد فروخته شده را می‌گیرد.

## با متابیس، حتی نیازی به استفاده از SQL ندارید

SQL شگفت‌انگیز است. اما [Query Builder](../../../docs/latest/questions/introduction.html) متابیس نیز همینطور است. می‌توانید پرس‌وجوها را با استفاده از رابط گرافیکی متابیس برای [join کردن جداول](../../metabase-basics/querying-and-dashboards/questions/joins-in-metabase.html)، فیلتر و خلاصه کردن داده، ایجاد [ستون‌های سفارشی](../../../glossary/custom-column.html) و بیشتر بسازید. و با [عبارات سفارشی](../../../docs/latest/questions/query-builder/expressions.html)، می‌توانید اکثریت قریب به اتفاق موارد استفاده تحلیلی را بدون نیاز به رسیدن به SQL مدیریت کنید. سؤال‌های ساخته شده با استفاده از **Query Builder** همچنین از [drill-through](../../metabase-basics/querying-and-dashboards/questions/drill-through.html) خودکار بهره‌مند می‌شوند، که به بینندگان نمودارهای شما امکان کلیک و کاوش داده را می‌دهد، ویژگی‌ای که برای سؤال‌های نوشته شده در SQL در دسترس نیست.

## خطاها یا حذف‌های واضح؟

کتابخانه‌هایی از کتاب‌ها درباره SQL وجود دارد، پس ما فقط سطح را خراش می‌دهیم. می‌توانید رازهای جادوی SQL خود را با کاربران دیگر متابیس [در انجمن ما](https://discourse.metabase.com/) به اشتراک بگذارید.

[](sql-cte.html)
