---
title: "آموزشها: استفاده از SQL Snippetها برای استفاده مجدد و اشتراک کد"
description: "همه آنچه نیاز دارید درباره استفاده از snippetها در کد بومی بدانید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/snippets
  - /learn/building-analytics/sql-templates/sql-snippets
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-snippets
  - /learn/sql-questions/sql-snippets
toc:
  - id: "tutorials-use-sql-snippets-to-reuse-and-share-code"
    title: "آموزشها: استفاده از SQL Snippetها برای استفاده مجدد و اشتراک کد"
    level: 1
    href: "#tutorials-use-sql-snippets-to-reuse-and-share-code"
  - id: "first-a-simple-snippet-example"
    title: "ابتدا، یک مثال Snippet ساده"
    level: 2
    href: "#first-a-simple-snippet-example"
  - id: "why-use-snippets"
    title: "چرا از Snippetها استفاده کنیم؟"
    level: 2
    href: "#why-use-snippets"
  - id: "using-snippets"
    title: "استفاده از Snippetها"
    level: 2
    href: "#using-snippets"
  - id: "snippet-sidebar"
    title: "Sidebar Snippet"
    level: 3
    href: "#snippet-sidebar"
  - id: "editing-snippets"
    title: "ویرایش Snippetها"
    level: 3
    href: "#editing-snippets"
  - id: "snippets-and-aliases"
    title: "Snippetها و aliasها"
    level: 3
    href: "#snippets-and-aliases"
  - id: "archiving-snippets"
    title: "بایگانی کردن Snippetها"
    level: 3
    href: "#archiving-snippets"
  - id: "snippet-folders"
    title: "پوشه‌های Snippet"
    level: 2
    href: "#snippet-folders"
  - id: "when-to-use-snippets-vs-a-saved-question"
    title: "چه زمانی از snippetها در مقابل یک سؤال ذخیره شده استفاده کنیم"
    level: 2
    href: "#when-to-use-snippets-vs-a-saved-question"
  - id: "more-info-on-using-snippets"
    title: "اطلاعات بیشتر درباره استفاده از Snippetها"
    level: 2
    href: "#more-info-on-using-snippets"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "SQL در متابیس"
    href: "index.html"
---

# آموزشها: استفاده از SQL Snippetها برای استفاده مجدد و اشتراک کد

همه آنچه نیاز دارید درباره استفاده از snippetها در کد بومی بدانید.

Snippetها به شما اجازه ذخیره کد SQL به عنوان snippet را می‌دهند، و سپس شما یا نویسندگان SQL دیگر می‌توانند به آن snippet در پرس‌وجوهای SQL مختلف ارجاع دهند. اگر هرگز نیاز به به‌روزرسانی آن کد دارید، می‌توانید snippet را ویرایش کنید، و آن تغییرات به همه سؤال‌ها) که از آن snippet استفاده می‌کنند propagate می‌شوند. هر کسی با مجوزهای ویرایشگر SQL برای حداقل یک پایگاه داده می‌تواند از snippetها استفاده کند، ایجاد کند، و ویرایش کند.

![کد SQL را highlight کنید و به عنوان snippet ذخیره کنید.](../../../images/sql-snippets-reuse-and-share-sql-code/highlight-and-save-as-snippet.gif)

Snippetها یک ویژگی ساده اما قدرتمند هستند، پس بیایید آن‌ها را unpack کنیم. همچنین یک ویژگی انحصاری به [طرح‌های Pro و Enterprise](../../../../pricing/index.html) در متابیس را پوشش می‌دهیم: پوشه‌های Snippet. این پوشه‌ها و مجوزهای آن‌ها به شما کمک می‌کنند snippetهای خود را سازماندهی کنید، مثلاً بر اساس پایگاه داده یا نوع snippet، و به شما اجازه grant یا deny کردن دسترسی به پوشه‌ها یا زیرپوشه‌های خاص را می‌دهند.

## ابتدا، یک مثال Snippet ساده

این statement join کوتاه را بگیرید:

```sql
orders AS o
LEFT JOIN products AS p
ON o.product_id = p.id
```

می‌توانید آن کد را highlight کنید، snippet را `Orders and products` نامگذاری کنید، یک توضیح مفید اضافه کنید، و آن snippet را در هر پرس‌وجوی SQL با استفاده از تگ `snippet:` فراخوانی کنید، مثل این:

```sql
SELECT
    *
FROM
    {{snippet: Orders and products}}
```

همچنین می‌توانید از snippetها برای معیارهای رایج مثل میانگین کل سفارش که quirks پایگاه داده را در نظر می‌گیرد استفاده کنید. به عنوان یک مثال trivial، بگویید می‌دانیم حساب با ID = 1 یک حساب تست است، و نمی‌خواهیم آن داده میانگین ما را skew کند. می‌توانیم آن exception را در یک snippet که آن را `average order total` می‌نامیم encapsulate کنیم.

```sql
(SELECT
    AVG(total)
    FROM
    orders
    WHERE
    id > 1)
```

سپس می‌توانیم از آن snippet در یک پرس‌وجوی متفاوت که به دنبال محصولات در سفارش‌ها با total کمتر از میانگین کل سفارش هستیم استفاده کنیم:

```sql
SELECT
    product_id
FROM
    orders
WHERE
    total < {{snippet: average order total}}
```

این همه آن چیزی است که برای ایجاد و استفاده از یک snippet نیاز است. حالا بیایید به عمق بپردازیم که چرا آن‌ها بسیار مفید هستند.

## چرا از Snippetها استفاده کنیم؟

سه مورد استفاده اصلی برای Snippetها وجود دارد:

- Standardization: سازمان شما چگونه یک محصول محبوب را تعریف می‌کند؟ بر اساس تعداد واحدهای فروخته شده؟ یا بر اساس reviewهایی با رتبه‌بندی میانگین بیشتر از 4؟ می‌توانید آن qualifications را برای یک محصول محبوب تعریف کنید و آن‌ها را در یک Snippet، `{{snippet: popular products}}`، codify کنید، و آن کد در هر سؤالی که از آن snippet استفاده می‌کند populate شود. اگر در خط پایین این تعریف نیاز به تغییر دارد، به سادگی SQL snippet را به‌روزرسانی کنید، و تغییر به همه سؤال‌هایی که از آن snippet استفاده می‌کنند propagate می‌شود. مشابه نحوه [بخش‌ها](../../../../docs/latest/data-modeling/segments.html#creating-a-segment) (یک فیلتر نامگذاری شده یا مجموعه‌ای از فیلترها) و [معیارها](../../../../docs/latest/data-modeling/metrics.html#creating-a-metric) (یک محاسبه نامگذاری شده) می‌توانند analytics را در سازمان شما standardize کنند، Snippetها راه دیگری برای اطمینان از صحت و سازگاری در تیم‌ها ارائه می‌دهند.
- Efficiency: آیا خود را اغلب در حال copy و paste کردن کد SQL می‌بینید؟ نمی‌خواهید به یاد داشته باشید کدام foreign keyها به کدام جداول map می‌شوند؟ آن join پیچیده را یک بار بنویسید، به عنوان snippet ذخیره کنید، و snippet را در صورت نیاز فراخوانی کنید.
- Education: snippetها می‌توانند افرادی که تازه به SQL وارد شده‌اند (یا حتی تحلیل‌گران با تجربه) را با exposing کردن آن‌ها به "SQL canonical" سازمان شما، یا به پرس‌وجوهای کارآمدتر یا پیچیده‌تر level up کنند. خواندن، کپی کردن، و build کردن روی کد با کیفیت یکی از بهترین راه‌ها برای توسعه مهارت‌ها است. همچنین می‌تواند زمان سازمان شما را صرفه‌جویی کند: مردم می‌توانند کد یک snippet را کپی کنند، آن را برای دریافت نتایج مختلف تغییر دهند، و آن کد را به عنوان snippet جدید برای دیگران برای استفاده ذخیره کنند.

## استفاده از Snippetها

### Sidebar Snippet

**ویرایشگر SQL** متابیس یک **sidebar snippet** برای مشاهده، ایجاد، و ویرایش snippetها دارد، که می‌توانید با mouse over کردن به سمت راست ویرایشگر و کلیک روی **آیکون snippet** (سه خط افقی ناهموار) به آن دسترسی داشته باشید.

![دسترسی به Sidebar Snippets با کلیک روی آیکون snippet در سمت راست ویرایشگر SQL.](../../../images/sql-snippets-reuse-and-share-sql-code/snippet-sidebar.gif)

وقتی snippetها را ایجاد کردید، می‌توانید آن‌ها را در ویرایشگر با استفاده از تگ snippet `{{snippet: Orders and products}}`، یا با انتخاب آن‌ها از sidebar snippet insert کنید:

![پیش‌نمایش و insert کردن یک snippet از Sidebar Snippets.](../../../images/sql-snippets-reuse-and-share-sql-code/insert-snippet-from-sidebar.gif)

کلیک روی نام یک snippet در **sidebar snippet** آن را در موقعیت فعلی cursor شما در پرس‌وجو insert می‌کند.

### ویرایش Snippetها

به‌روزرسانی کد SQL یک snippet هر پرس‌وجویی که از آن snippet استفاده می‌کند را به‌روزرسانی می‌کند، پس مطمئن شوید کد خود را قبل از ذخیره کردن تست کنید تا از breaking کردن سؤال‌های مردم جلوگیری کنید. البته، اگر اشتباه کردید و chaos ایجاد کردید، می‌توانید به سادگی کد را اصلاح کنید، snippet را دوباره ذخیره کنید، و order را به universe restore کنید.

### Snippetها و aliasها

توجه کنید که اگر از aliasها *در* snippet خود استفاده می‌کنید (مثلاً، `orders AS o`)، نیاز به استفاده از آن aliasها *خارج* از snippet برای ارجاع به آن داده در پرس‌وجوی خود دارید. توصیه می‌کنیم تیم شما یک policy برای aliasها داشته باشد: یا همه باید از aliasهای جدول در کد خود استفاده کنند، یا همه از نام‌های کامل جدول استفاده می‌کنند. وقتی در شک هستید، فقط از نام‌های کامل جدول استفاده کنید.

### بایگانی کردن Snippetها

![می‌توانید یک snippet را از طریق modal ویرایش Snippet بایگانی کنید.](../../../images/sql-snippets-reuse-and-share-sql-code/archiving-a-snippet.gif)

Snippetها indestructible هستند: نمی‌توانید آن‌ها را حذف کنید، اما می‌توانید آن‌ها را بایگانی (و unarchive) کنید. بایگانی کردن یک snippet **sidebar snippet** شما را tidy نگه می‌دارد، چون snippetهای بایگانی شده sidebar را populate نمی‌کنند. همچنین از ظاهر شدن snippet بایگانی شده در نتایج typeahead در **ویرایشگر SQL** جلوگیری می‌کند، یعنی snippet بایگانی شده به عنوان گزینه autocomplete ظاهر نمی‌شود وقتی `{{snippet:` تایپ می‌کنید. بایگانی کردن یک snippet سؤال‌هایی که از آن snippet استفاده می‌کنند را تحت تأثیر قرار نمی‌دهد، پس می‌توانید با خیال راحت یک snippet را بدون breaking کردن سؤال‌های هر کسی بایگانی کنید.

## پوشه‌های Snippet

> کنترل Snippet فقط در
      [Pro](../../../../product/pro.html) و
      [Enterprise](../../../../product/enterprise.html)
      plans (هم self-hosted و هم در Metabase Cloud) در دسترس است.

[طرح‌های Pro و Enterprise](../../../../pricing/index.html) در متابیس شامل پوشه‌های snippet و مجوزها برای کمک به سازماندهی تعداد زیادی snippet هستند. Adminها می‌توانند snippetها را به پوشه‌ها اضافه کنند و پوشه‌ها را در داخل پوشه‌ها قرار دهند. همه snippetها در **sidebar snippet** ظاهر می‌شوند، شامل آن‌هایی برای پایگاه‌های داده دیگر (چون ممکن است یک string را snippetize کنید که می‌تواند در چندین پایگاه داده استفاده شود). می‌توانید snippetهای مفید برای هر پایگاه داده را در پوشه خود جمع‌آوری کنید، و علاوه بر آن پوشه‌هایی برای ذخیره snippetهای مرتبط با تیم‌ها یا پروژه‌های مختلف ایجاد کنید.

![ذخیره یک snippet در یک پوشه.](../../../images/sql-snippets-reuse-and-share-sql-code/save-snippet-to-folder.gif)

علاوه بر این، adminها می‌توانند مجوزها را به آن پوشه‌ها اضافه کنند، که کنترل می‌کند چه کسی می‌تواند snippetهای واقع در آنجا را مشاهده یا ویرایش کند:

![تغییر یک پوشه](../../../images/sql-snippets-reuse-and-share-sql-code/change-folder-permissions.gif)

مجوزها به [گروه‌ها](../../../../docs/latest/people-and-groups/managing.html#groups) برای هر پوشه اعطا می‌شوند، با سه سطح مجوز:

- دسترسی Edit: مشاهده، ویرایش، بایگانی/unarchive کردن snippetها.
- دسترسی View: مشاهده و اجرای snippetها.
- بدون دسترسی: نمی‌تواند snippetها را در sidebar و منوهای autocomplete مشاهده کند. مردم بدون دسترسی، با این حال، می‌توانند پرس‌وجوهایی که شامل این snippetها هستند را اجرا کنند.

بایگانی و unarchive کردن snippetها تأثیری روی مجوزها ندارد، اگرچه نیاز به دسترسی edit به پوشه برای بایگانی و unarchive کردن snippetهای آن دارید.

از پوشه‌ها برای نگه داشتن snippetها سازماندهی شده و standardized در بین و بین تیم‌ها استفاده کنید، و همچنین برای نگه داشتن snippetهای حساس visible فقط برای گروه‌های مناسب.

## چه زمانی از snippetها در مقابل یک سؤال ذخیره شده استفاده کنیم

یک snippet چقدر می‌تواند بزرگ باشد؟ به طور کلی، اگر یک snippet می‌تواند به طور مستقل اجرا شود (یعنی، می‌توانستید آن را به عنوان یک پرس‌وجو به خودی خود اجرا کنید) در نظر بگیرید آن پرس‌وجوی SQL را به عنوان یک سؤال ذخیره شده ذخیره کنید. snippetها را برای قطعات کد *وابسته* رزرو کنید. Snippetها همچنین برای ذخیره stringهایی که معمولاً در پرس‌وجوها استفاده می‌شوند مفید هستند. برای بیشتر درباره زمانی که باید از snippetها استفاده کنید، [Snippetها در مقابل سؤال‌های ذخیره شده در مقابل Viewها](organizing-sql.html) را بررسی کنید.

## اطلاعات بیشتر درباره استفاده از Snippetها

برای یادگیری بیشتر درباره Snippetها، مستندات دقیق ما را بررسی کنید:

- [استفاده از Snippetها](../../../../docs/latest/questions/native-editor/snippets.html)
- [سازماندهی و امن کردن snippetها در پوشه‌ها](../../../../docs/latest/permissions/snippets.html)

[
      
        
        

      
      
        
        

      
    ](field-filters.html)
[
      
        
        

      
      
        
        

      
    ](organizing-sql.html)
