---
title: "آموزش: افزودن فیلترها به داشبوردها با سؤال‌های SQL"
description: "نحوه افزودن widgetهای فیلتر به داشبوردها و اتصال آن‌ها به متغیرهای فیلتر فیلد در یک سؤال SQL."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/filters
  - /learn/dashboards/filters
toc:
  - id: "tutorial-adding-filters-to-dashboards-with-sql-questions"
    title: "آموزش: افزودن فیلترها به داشبوردها با سؤال‌های SQL"
    level: 1
    href: "#tutorial-adding-filters-to-dashboards-with-sql-questions"
  - id: "adding-a-field-filter-variable-to-a-sql-question"
    title: "افزودن یک متغیر فیلتر فیلد به یک سؤال SQL"
    level: 2
    href: "#adding-a-field-filter-variable-to-a-sql-question"
  - id: "a-detour-on-data-types"
    title: "یک انحراف در انواع داده"
    level: 2
    href: "#a-detour-on-data-types"
  - id: "connecting-a-dashboard-filter-widget-to-a-field-filter-variable"
    title: "اتصال یک widget فیلتر داشبورد به یک متغیر فیلتر فیلد"
    level: 2
    href: "#connecting-a-dashboard-filter-widget-to-a-field-filter-variable"
  - id: "connecting-a-sql-question-to-a-dropdown-filter-widget-on-a-dashboard"
    title: "اتصال یک سؤال SQL به یک widget فیلتر dropdown در یک داشبورد"
    level: 2
    href: "#connecting-a-sql-question-to-a-dropdown-filter-widget-on-a-dashboard"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "SQL در متابیس"
    href: "index.html"
---

# آموزش: افزودن فیلترها به داشبوردها با سؤال‌های SQL

نحوه افزودن widgetهای فیلتر به داشبوردها و اتصال آن‌ها به متغیرهای فیلتر فیلد در یک سؤال SQL.

این مقاله نحوه ایجاد widgetهای داشبورد برای فیلتر کردن داده در [پرس‌وجوهای بومی](../../../../glossary/native-query.html) را پوشش می‌دهد. انتخاب یک مقدار در فیلتر داشبورد نتایج را در سؤال SQL به‌روزرسانی می‌کند.

![یک داشبورد با یک سؤال SQL متصل به یک فیلتر.](../../../images/adding-filters-to-dashboards-with-sql-questions/dashboard-with-filter-widget.png)

هدف در اینجا درک نحوه اتصال widgetهای فیلتر داشبورد به یک نوع متغیر خاص، به نام فیلتر فیلد، است که در کد SQL سؤال‌های خود insert می‌کنیم.

دو مثال را پوشش می‌دهیم: یک فیلتر تاریخ (بعدی)، و یک [فیلتر متنی با لیست dropdown](#connecting-a-sql-question-to-a-dropdown-filter-widget-on-a-dashboard).

## افزودن یک متغیر فیلتر فیلد به یک سؤال SQL

بیایید با یک سؤال نوشته شده در SQL شروع کنیم که سفارش‌ها در هر ماه را از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس نشان می‌دهد. از هر صفحه متابیس، در بالا سمت راست در نوار ناوبری، روی **+ جدید** کلیک کنید و **پرس‌وجوی SQL** (یا **پرس‌وجوی بومی**) را انتخاب کنید.

![یک سؤال نوشته شده در SQL که سفارش‌ها در هر ماه را نشان می‌دهد، به عنوان یک نمودار خطی بصری شده است.](../../../images/adding-filters-to-dashboards-with-sql-questions/question-without-variable.png)

در اینجا کد SQL:

```
SELECT DATE_TRUNC('Month', CREATED_AT) AS "Created",
       COUNT(*) AS "Number of orders"
FROM orders
GROUP BY "Created"
ORDER BY "Created" ASC

```

حالا، ما درباره فیلتر کردن داده صحبت می‌کنیم، و خوانندگان تیزبین ممکن است از قبل تشخیص دهند که ما یک statement فیلتر در کد SQL خود نداریم. هیچ بند `WHERE` وجود ندارد. یعنی: حتی اگر این سؤال را به یک داشبورد اضافه کنیم، و یک widget فیلتر به آن داشبورد اضافه کنیم، آن فیلتر هیچ تأثیری روی سؤال SQL ما نخواهد داشت، چون هیچ جای تعیین شده‌ای در کد ما برای widget برای insert کردن مقدار خود وجود نخواهد داشت.

بیایید آن را با افزودن یک متغیر خاص به سؤال SQL خود به نام **فیلتر فیلد** اصلاح کنیم. فیلترهای فیلد نوع خاصی از متغیر هستند که متغیر را به یک [فیلد](../../../grow-your-data-skills/data-fundamentals/database-basics.html#columns-vs-fields) (یا ستون) در یک جدول map می‌کنند.

در اینجا کد SQL که اضافه خواهیم کرد:

```

WHERE {{created_at}}

```

ممکن است متوجه شوید کمبود یک عملگر `=` در بند `WHERE`. این syntax مختصر وجود دارد چون فیلترهای فیلد مقداری کد SQL را برای شما در پشت صحنه مدیریت می‌کنند. برای بیشتر درباره آنچه اینجا اتفاق می‌افتد، [فیلترهای فیلد](field-filters.html) را بررسی کنید.

با بند `WHERE` در جای خود، کد ما اینگونه به نظر می‌رسد:

```

SELECT DATE_TRUNC('Month', CREATED_AT) AS "Created",
       COUNT(*) AS "Number of orders"
FROM orders
WHERE {{created_at}}
GROUP BY "Created"
ORDER BY "Created" ASC

```

حالا که متغیر خود را در کد SQL داریم، باید به متابیس بگوییم چگونه از متغیر استفاده کند. وقتی یک متغیر را به کد خود اضافه می‌کنیم، متابیس **sidebar متغیرها** را slide out می‌کند. `نوع متغیر` را به `فیلتر فیلد` تنظیم می‌کنیم، سپس آن متغیر را به یک فیلد در پایگاه داده خود map می‌کنیم تا متابیس بتواند بداند چه نوع widget فیلتری باید به سؤال اضافه کند. در این مورد، متغیر را به فیلد `created_at` جدول `orders` map می‌کنیم.

![تنظیم نوع متغیر برای متغیر SQL created_at ما به فیلتر فیلد، سپس تنظیم گزینه فیلد برای map کردن به فیلد created_at (ستون) جدول orders.](../../../images/adding-filters-to-dashboards-with-sql-questions/field-filter-created-at.png)

توجه کنید که می‌توانیم متغیر SQL را هر چیزی که می‌خواهیم بنامیم، اما برای اینکه فیلتر داشبورد کار کند، باید متغیر را به فیلد مناسب map کنیم.

فعلاً، برچسب widget فیلتر را به عنوان `Created at` می‌گذاریم، و toggle **الزامی؟** را تنها می‌گذاریم. اگر widget فیلتر متغیر فاقد مقدار باشد، متابیس سؤال را به گونه‌ای اجرا می‌کند که گویی بند `WHERE` وجود نداشت.

همچنین می‌توانیم یک نوع widget فیلتر انتخاب کنیم، اگرچه این widget فقط به سؤال ما اعمال می‌شود. بیایید نوع `فیلتر تاریخ` را انتخاب کنیم.

بیایید سؤال خود را **ذخیره** کنیم. آن را `تعداد سفارش‌ها در هر ماه - SQL` می‌نامیم.

قبل از افزودن سؤال خود به یک داشبورد، بیایید یک انحراف سریع انجام دهیم.

## یک انحراف در انواع داده

وقتی فیلد `created_at` را انتخاب می‌کنیم، متابیس می‌داند که نوع فیلد یک `مهر زمانی ایجاد` است (توجه کنید **آیکون تقویم**). می‌توانید درباره انواع فیلدها (ستون‌ها) که هر جدول دارد با مرور داده خود بیاموزید.

![مشاهده اطلاعات درباره داده خود با کلیک روی مرور داده از نوار ناوبری بالا، انتخاب پایگاه داده خود—در این مورد، پایگاه داده نمونه—کلیک روی آیکون اطلاعات کنار یک جدول، و کلیک روی آیکون کتاب برای یادگیری درباره این جدول.](../../../images/adding-filters-to-dashboards-with-sql-questions/learn-about-this-table.png)

![مشاهده اطلاعات روی فیلدها در جدول Orders از پایگاه داده نمونه.](../../../images/adding-filters-to-dashboards-with-sql-questions/data-browser.png)

مدیران می‌توانند نوع فیلد، و همچنین سایر تنظیمات [فراداده](../../../../glossary/metadata.html)، را در **تب مدل داده** از **پنل ادمین** ویرایش کنند. برای یادگیری بیشتر، مستندات ما درباره [ویرایش فراداده](../../../../docs/latest/data-modeling/metadata-editing.html) را بررسی کنید.

## اتصال یک widget فیلتر داشبورد به یک متغیر فیلتر فیلد

پس ما سؤال SQL خود را با یک متغیر فیلتر فیلد در یک بند `WHERE` داریم، و زمان افزودن آن سؤال به یک داشبورد است.

بعد، نیاز خواهیم داشت:

- ایجاد یک داشبورد.
- افزودن سؤال خود به یک داشبورد.
- افزودن یک widget فیلتر به آن داشبورد.
- اتصال آن widget فیلتر داشبورد به متغیر فیلتر فیلد در سؤال SQL خود.

بیایید [یک داشبورد ایجاد کنیم](../../../../docs/latest/dashboards/introduction.html#how-to-create-a-dashboard) (داشبورد خود را نام کاملاً غیرخلاقانه `داشبورد با widgetهای فیلتر` می‌دهیم).

سپس [سؤال SQL خود را به داشبورد اضافه می‌کنیم](../../../../docs/latest/dashboards/introduction.html#adding-or-saving-questions-to-a-dashboard).

بعد، می‌خواهیم [یک widget فیلتر به داشبورد خود اضافه کنیم](../../../../docs/latest/dashboards/filters.html). روی آیکون **مداد** کلیک کنید تا وارد حالت ویرایش داشبورد شوید، سپس:

- روی **آیکون فیلتر** کلیک کنید تا یک widget فیلتر به داشبورد اضافه شود.
- زیر `چه چیزی را می‌خواهیم فیلتر کنیم`، `زمان` را انتخاب می‌کنیم.
- برای `چه نوع فیلتری؟`، `فیلتر تاریخ` را انتخاب می‌کنیم.
- بعد، نیاز داریم widget خود را به متغیر فیلتر فیلد در سؤال خود متصل کنیم. روی منوی dropdown در مرکز سؤال خود کلیک کنید، و متغیر فیلتر فیلد `Created At` خود را انتخاب کنید.
- روی دکمه **انجام شد** در بالای صفحه کلیک کنید.
- سپس داشبورد را **ذخیره** کنید.

![افزودن یک فیلتر تاریخ (زمان → همه گزینه‌ها) به یک داشبورد، و اتصال widget فیلتر به متغیر فیلتر فیلد، Created at در سؤال SQL ما.](../../../images/adding-filters-to-dashboards-with-sql-questions/column-to-filter-on.png)

حالا همه چیز متصل است، و آماده تست فیلتر تاریخ جدید خود هستیم. این نوع widget خاص گزینه‌های فراوانی به ما می‌دهد. بیایید سفارش‌ها را برای شش ماه گذشته ببینیم.

![استفاده از یک فیلتر داشبورد برای فیلتر کردن سفارش‌ها برای شش ماه گذشته.](../../../images/adding-filters-to-dashboards-with-sql-questions/orders-last-six-months.png)

## اتصال یک سؤال SQL به یک widget فیلتر dropdown در یک داشبورد

بگویید می‌خواهیم یک widget فیلتر داشبورد برای فیلتر کردن محصولات بر اساس دسته داشته باشیم، و می‌خواهیم مردم بتوانند دسته‌های در دسترس را از یک لیست dropdown انتخاب کنند. برای تنظیم این، یک متغیر فیلتر فیلد را در پرس‌وجوی SQL خود قرار می‌دهیم، و آن را به فیلد `category` در جدول `products` map می‌کنیم. سپس فیلتر داشبورد را به آن متغیر map می‌کنیم. بیایید آن را طی کنیم.

![یک داشبورد با یک فیلتر dropdown متصل به یک کارت سؤال SQL.](../../../images/adding-filters-to-dashboards-with-sql-questions/dropdown-example.png)

ابتدا، یک داشبورد ایجاد کنید. بیایید آن را "داشبورد با سؤال SQL و فیلتر dropdown" بنامیم (تا مأموریت ما واضح باشد). داشبورد را ذخیره کنید.

بعد، یک سؤال بومی/SQL جدید بپرسید تا همه فیلدها را از جدول `products` دریافت کند. برای فیلتر کردن محصولات بر اساس دسته، یک متغیر را در براکت‌ها شامل می‌کنیم که آن را `category` می‌نامیم:

```

SELECT
  *
FROM
  products
WHERE {{category}}

```

در منوی کناری متغیر که متابیس بیرون می‌کشد، این متغیر را اینگونه پیکربندی می‌کنیم:

- **نوع متغیر**: فیلتر فیلد.
- **فیلد برای map کردن:** فیلد Category در جدول Products.
- **نوع widget فیلتر**: رشته.
- **برچسب widget فیلتر**: Category (یا هر چیزی که می‌خواهید).
- **کاربران چگونه باید روی این متغیر فیلتر کنند**: لیست dropdown.
- **الزامی**: خیر.
- **مقدار فیلتر پیش‌فرض**: خالی بگذارید (تا هیچ دسته محصولی به طور پیش‌فرض فیلتر نشود).

![ایجاد یک سؤال SQL که شامل یک فیلتر فیلد map شده به فیلد products.category است. متغیر فیلتر فیلد سپس به یک widget فیلتر متصل می‌شود که](../../../images/adding-filters-to-dashboards-with-sql-questions/dropdown-field-filter.png)

سؤال را ذخیره کنید و آن را به داشبورد خود اضافه کنید. داشبورد خود را ویرایش کنید، و یک فیلتر متنی یا دسته اضافه کنید.

![افزودن یک widget فیلتر متنی یا دسته به یک داشبورد.](../../../images/adding-filters-to-dashboards-with-sql-questions/add-a-dashboard-filter-text-or-category.png)

**برابر است** را انتخاب کنید تا مردم یک یا چند مقدار را از یک لیست یا جعبه جستجو انتخاب کنند.

![تنظیم یک فیلتر dropdown داشبورد متصل به یک متغیر فیلتر فیلد در یک سؤال SQL.](../../../images/adding-filters-to-dashboards-with-sql-questions/dashboard-dropdown-filter.png)

widget فیلتر داشبورد را به متغیر Category روی کارت سؤال map کنید. مطمئن شوید گزینه **کاربران چگونه باید روی این ستون فیلتر کنند** روی "لیست dropdown" تنظیم شده است.

روی **انجام شد** در پایین sidebar کلیک کنید، سپس داشبورد خود را ذخیره کنید. باید آماده باشید.

## مطالعه بیشتر

- [ایجاد widgetهای فیلتر برای نمودارها با استفاده از متغیرهای SQL](sql-variables.html)
- [فیلترهای فیلد: ایجاد widgetهای فیلتر هوشمند برای سؤال‌های SQL](field-filters.html)
- [پارامترهای SQL](../../../../docs/latest/users-guide/13-sql-parameters.html)
- [داشبوردها](../../../../docs/latest/dashboards/introduction.html)
- [فیلترهای داشبورد](../../../../docs/latest/dashboards/filters.html)
- [صفحه مدل داده: ویرایش فراداده](../../../../docs/latest/data-modeling/metadata-editing.html)

[
      
        
        

      
      
        
        

      
    ](organizing-sql.html)
