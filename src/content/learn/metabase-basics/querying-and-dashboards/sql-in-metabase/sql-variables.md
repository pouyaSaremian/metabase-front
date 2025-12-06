---
title: "آموزش: ایجاد فیلترها با استفاده از متغیرهای SQL"
description: "نحوه ایجاد widgetهای فیلتر در پرس‌وجوهای SQL بومی با استفاده از متغیرهای ورودی پایه برای متن، اعداد، و تاریخ‌ها."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-variables
  - /learn/grow-your-data-skills/learn-sql/working-with-sql/sql-variables
  - /learn/sql-questions/sql-variables
toc:
  - id: "tutorial-create-filters-using-sql-variables"
    title: "آموزش: ایجاد فیلترها با استفاده از متغیرهای SQL"
    level: 1
    href: "#tutorial-create-filters-using-sql-variables"
  - id: "introduction-to-sql-variables-and-filter-widgets"
    title: "مقدمه‌ای بر متغیرهای SQL و widgetهای فیلتر"
    level: 2
    href: "#introduction-to-sql-variables-and-filter-widgets"
  - id: "sql-questions-versus-query-builder-questions"
    title: "سؤال‌های SQL در مقابل سؤال‌های query builder"
    level: 2
    href: "#sql-questions-versus-query-builder-questions"
  - id: "the-different-types-of-variables-available-for-native-sql-queries"
    title: "انواع مختلف متغیرهای در دسترس برای پرس‌وجوهای SQL بومی"
    level: 2
    href: "#the-different-types-of-variables-available-for-native-sql-queries"
  - id: "field-filters-or-basic-input-variables"
    title: "فیلترهای فیلد یا متغیرهای ورودی پایه؟"
    level: 2
    href: "#field-filters-or-basic-input-variables"
  - id: "when-to-use-basic-input-variables"
    title: "چه زمانی از متغیرهای ورودی پایه استفاده کنیم"
    level: 3
    href: "#when-to-use-basic-input-variables"
  - id: "when-to-use-field-filters"
    title: "چه زمانی از فیلترهای فیلد استفاده کنیم"
    level: 3
    href: "#when-to-use-field-filters"
  - id: "basic-input-variables"
    title: "متغیرهای ورودی پایه"
    level: 2
    href: "#basic-input-variables"
  - id: "basic-input-variable-number"
    title: "متغیر ورودی پایه: Number"
    level: 3
    href: "#basic-input-variable-number"
  - id: "making-a-basic-input-variable-optional"
    title: "اختیاری کردن یک متغیر ورودی پایه"
    level: 3
    href: "#making-a-basic-input-variable-optional"
  - id: "adding-multiple-filters"
    title: "افزودن چندین فیلتر"
    level: 3
    href: "#adding-multiple-filters"
  - id: "basic-input-variable-text"
    title: "متغیر ورودی پایه: Text"
    level: 3
    href: "#basic-input-variable-text"
  - id: "basic-input-variable-date"
    title: "متغیر ورودی پایه: Date"
    level: 3
    href: "#basic-input-variable-date"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "SQL در متابیس"
    href: "index.html"
---

# آموزش: ایجاد فیلترها با استفاده از متغیرهای SQL

نحوه ایجاد widgetهای فیلتر در پرس‌وجوهای SQL بومی با استفاده از متغیرهای ورودی پایه برای متن، اعداد، و تاریخ‌ها.

> به دنبال مستندات درباره پارامترهای SQL هستید؟ [مستندات: پارامترهای SQL](../../../../docs/latest/questions/native-editor/sql-parameters.html) را ببینید.

این مقاله نحوه ایجاد سؤال‌ها در متابیس با استفاده از پرس‌وجوهای SQL بومی را مرور می‌کند تا بینندگان سؤال‌های ما بتوانند مقادیر را plug in کنند و نتایج را فیلتر کنند. در حالی که متابیس خلاصه و تجسم داده را بدون SQL آسان می‌کند، تحلیل‌گران داده گاهی نیاز به dig کردن به پرس‌وجوهای پیچیده دارند، که می‌توانند با استفاده از [ویرایشگر SQL](../../../../docs/latest/questions/native-editor/writing-sql.html) متابیس بنویسند.

## مقدمه‌ای بر متغیرهای SQL و widgetهای فیلتر

به عنوان مثال، با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس، ممکن است یک سؤال در SQL بنویسیم که اطلاعات محصول درباره سفارش‌های ما را می‌کشد، اما می‌خواهیم بینندگان آن سؤال دسته محصولاتی که می‌خواهند مشاهده کنند را مشخص کنند. برای دادن گزینه به مردم برای ورود مقادیر روی سؤال‌های SQL ذخیره شده، می‌توانیم پرس‌وجوهای SQL با متغیرها بنویسیم، و متابیس به طور خودکار widgetهای فیلتر ایجاد می‌کند که مردم می‌توانند برای ورود مقادیر استفاده کنند.

![یک سؤال نمونه، نوشته شده در SQL، که از یک متغیر متنی پایه برای power کردن یک widget فیلتر استفاده می‌کند. Widget به مردم اجازه ورود متن برای فیلتر کردن رکوردها برای عنوان‌های محصول حاوی آن متن را می‌دهد.](../../../images/create-filter-widgets-for-charts-using-sql-variables/basic-text-filter.png)

برای حالا، فقط روی فیلترهای اعمال شده به سؤال‌های نوشته شده در SQL تمرکز می‌کنیم. برای فیلترها روی داشبوردها، [افزودن فیلترها به داشبوردها با سؤال‌های SQL](filters.html) را بررسی کنید.

اما ابتدا: می‌خواهید سؤال خود را با استفاده از SQL بنویسید، یا query builder بهتر با مورد استفاده شما match می‌کند؟

## سؤال‌های SQL در مقابل سؤال‌های query builder

قبل از dig کردن به افزودن widgetهای فیلتر، ارزش دارد در نظر بگیریم مردم چگونه از سؤال ما استفاده خواهند کرد. اگر فقط می‌خواهیم به مردم گزینه plug in کردن مقادیر به widgetهای فیلتر ساده روی داشبوردها را بدهیم، نوشتن یک سؤال در **Query Builder** و افزودن متغیرها به کد SQL ما منطقی است.

اگر، به جای آن، یک سؤال با استفاده از **Query Builder** compose کنیم، widgetهای فیلتر غیرضروری هستند، چون بینندگان سؤال ما مجموعه کامل primitiveهای query building را برای slice و dice کردن داده به هر روشی که دوست دارند با [join کردن](../../../../docs/latest/questions/query-builder/join.html)، [فیلتر کردن](../../../../docs/latest/questions/query-builder/filters.html)، و [خلاصه کردن](../../../../docs/latest/questions/query-builder/summarizing-and-grouping.html) داده در دسترس خواهند داشت. برای سؤال‌های پیچیده‌تر، همچنین [عبارات سفارشی](../../../../docs/latest/questions/query-builder/expressions.html) در اختیار آن‌ها خواهد بود، و همچنین توانایی [drill-through داده](../questions/drill-through.html) برای zoom in روی سفارش‌ها، یا کلیک روی مقادیر برای مشاهده رکوردهای فردی – عملکردی که به سؤال‌های نوشته شده در SQL اعمال نمی‌شود.

![رابط query builder برای compose کردن سؤال‌ها. می‌توانید join، filter، summarize، sort، از عبارات سفارشی استفاده کنید، و بیشتر.](../../../images/create-filter-widgets-for-charts-using-sql-variables/notebook-editor.png)

اگر می‌توانید سؤال خود را با استفاده از عملکرد در query builder پاسخ دهید، توصیه می‌کنیم از آن‌ها استفاده کنید. اگر، با این حال، نیاز به دستورات یا توابع SQL سفارشی دارید، و می‌خواهید کاربران شما قادر به فیلتر کردن نتایج آن سؤال‌ها باشند، ادامه دهید.

## انواع مختلف متغیرهای در دسترس برای پرس‌وجوهای SQL بومی

![یک سؤال SQL با یک متغیر ورودی پایه از نوع Date. منوی dropdown نوع متغیر چهار نوع متغیری که می‌توانید در پرس‌وجوهای خود شامل کنید را نشان می‌دهد: Text، Number، و Date، و همچنین یک نوع متغیر خاص به نام Field Filter.](../../../images/create-filter-widgets-for-charts-using-sql-variables/variable-types.png)

برای سؤال‌های composed شده با استفاده از [ویرایشگر پرس‌وجوی SQL بومی](../../../../docs/latest/questions/native-editor/writing-sql.html) متابیس، چهار نوع متغیر وجود دارد که می‌توانید انتخاب کنید:

- Text
- Number
- Date
- Field filter

یکی از این انواع، **field filterها**، برخلاف بقیه است. در واقع، بهتر است فکر کنیم انواع متغیرها به دو دسته اصلی می‌افتند: متغیرهای ورودی پایه و فیلترهای فیلد.

- *متغیرهای ورودی پایه* widgetهای فیلتر ساده ایجاد می‌کنند جایی که مردم می‌توانند مقادیر را plug in کنند تا نتایج سؤال را فیلتر کنند. متغیرهای ورودی پایه شامل:
  - [Number](#basic-input-variable-number)
  - [Text](#basic-input-variable-text)
  - [Date](#basic-input-variable-date)
- *متغیرهای فیلتر فیلد* متغیرهای ورودی خاص هستند. آن‌ها پیچیده‌تر از متغیرهای ورودی پایه هستند، و متفاوت رفتار می‌کنند. فیلترهای فیلد به ستون‌ها "wire up" می‌شوند، و می‌توانند منوهای dropdown برای مردم برای انتخاب یک یا چند مقدار ارائه دهند.

سه متغیر ورودی پایه—Text، Number، و Date—را در زیر پوشش می‌دهیم، و فیلترهای فیلد را در [مقاله دیگر](field-filters.html). اما ابتدا بیایید حس کنیم چه زمانی باید به یک نوع متغیر به جای دیگری برسیم.

## فیلترهای فیلد یا متغیرهای ورودی پایه؟

### چه زمانی از متغیرهای ورودی پایه استفاده کنیم

- برای فیلتر کردن ساده متن، عدد، و تاریخ. برای فیلتر کردن تاریخ انعطاف‌پذیرتر، از یک فیلتر فیلد استفاده کنید.
- به طور کلی، برای مقادیر بی‌شمار که منطقی نیست در یک dropdown شامل شوند (که نیاز به فیلتر فیلد دارد).
- برای مواردی که ممکن است نیاز به انجام مقداری data wrangling/munging روی متغیر ورودی در SQL خود داشته باشید.

### چه زمانی از فیلترهای فیلد استفاده کنیم

- برای ارائه یک منوی dropdown برای مردم برای انتخاب از مقادیر تعریف شده.
- برای دادن چندین راه برای فیلتر کردن بر اساس تاریخ.
- برای hook up کردن یک متغیر به یک widget فیلتر روی یک داشبورد.

## متغیرهای ورودی پایه

متغیرهای ورودی پایه ورودی مثل متن، عدد، یا تاریخ می‌گیرند. متغیرهای ورودی پایه برای زمانی که مقادیر از قبل تعریف نشده‌اند، یا به طور گسترده range می‌کنند، مثل subtotalهای سفارش خوب هستند. تاریخ‌ها یک مورد خاص هستند: متابیس widgetهایی ارائه می‌دهد که به مردم اجازه انتخاب تاریخ و زمان به جای تایپ کردن مقادیر را می‌دهد.

### متغیر ورودی پایه: Number

بیایید از یک متغیر ورودی پایه از نوع Number استفاده کنیم. بگویید می‌خواهیم یک سؤال ایجاد کنیم که همه رکوردها از جدول `Orders` را برمی‌گرداند، اما می‌خواهیم به مردم گزینه فیلتر کردن سفارش‌ها بر اساس `subtotal` سفارش را بدهیم.

بیایید آن را ساده نگه داریم و فقط به مردم گزینه ورود یک عدد بدهیم تا سؤال رکوردهایی برای سفارش‌ها با subtotal *بزرگتر از* آن عدد برگرداند.

برای شامل کردن یک متغیر در پرس‌وجوی خود، به سادگی نام متغیر را در براکت‌های دوتایی wrap کنید، مثل این: `{{ variable }}`. در این مثال، متغیر خود را، `{{subtotal_var}}` می‌نامیم. در اینجا SQL:

```sql
SELECT *
FROM orders
WHERE subtotal > {{subtotal_var}}
```

وقتی یک متغیر به یک پرس‌وجوی SQL اضافه می‌کنیم، متابیس یک widget فیلتر در بالای سؤال اضافه می‌کند، و یک sidebar را slide می‌کند تا گزینه‌هایی برای متغیر ارائه دهد.

![یک سؤال با استفاده از یک متغیر پایه از نوع Number، subtotal_var، که یک widget فیلتر اضافه می‌کند، اجازه فیلتر کردن سفارش‌ها بزرگتر از مقداری که plug in می‌کنند را می‌دهد.](../../../images/create-filter-widgets-for-charts-using-sql-variables/subtotal-var.png)

در اینجا گزینه‌ها در **Sidebar Variables**:

- *نوع متغیر:* انواع می‌توانند `Text`، `Number`، `Date`، یا `Field filter` باشند. نوع متغیر رابط ورودی برای widget متغیر را تعیین می‌کند (مثلاً، برای `Date`، widget یک date picker ارائه می‌دهد).
- *برچسب widget فیلتر:* نام متغیر شما همانطور که در widget ارائه می‌شود، که به طور پیش‌فرض به نام متغیر در پرس‌وجوی SQL می‌رود.
- *الزامی؟* وقتی یک متغیر را الزامی می‌کنید، متابیس از شما یک مقدار widget فیلتر پیش‌فرض برای plug in کردن به متغیر وقتی سؤال برای اولین بار load می‌شود می‌خواهد. اگر *نمی‌دهید* یک پیش‌فرض، متابیس پرس‌وجو را تا زمانی که یک مقدار ارائه شود اجرا نمی‌کند.

در مورد `subtotal_var`، می‌خواهیم:

- `نوع متغیر` را `Number` تنظیم کنیم (چون با subtotalها سروکار داریم).
- `برچسب widget فیلتر` را از `subtotal_var` به `Subtotal` تغییر دهیم (فقط برای خوانا‌تر کردن).
- `الزامی؟` را true toggle کنیم.
- `مقدار widget فیلتر پیش‌فرض` را `0` تنظیم کنیم. به این ترتیب، وقتی یک سؤال اجرا می‌شود، به طور خودکار همه نتایج را برمی‌گرداند؛ مردم می‌توانند یک subtotal بالاتر وارد کنند اگر می‌خواهند نتایج را فیلتر کنند.

حالا آماده plug in کردن مقادیر به widget Subtotal خود هستیم، و فیلتر کردن سفارش‌ها با Subtotal بزرگتر از آن مقدار:

![Minimize کردن ویرایشگر SQL، و وارد کردن 100 به widget فیلتر Subtotal برای فیلتر کردن سفارش‌ها با Subtotal بزرگتر از 100.](../../../images/create-filter-widgets-for-charts-using-sql-variables/subtotal-greater-than-100.gif)

### اختیاری کردن یک متغیر ورودی پایه

اگر می‌خواهیم widget فیلتر را اختیاری کنیم، می‌توانیم بند `WHERE` را در براکت‌های دوتایی enclose کنیم:

```sql
SELECT *
FROM orders
[[WHERE subtotal > {{subtotal_var}}]]
```

با بند `WHERE` در براکت‌ها، اگر بیننده subtotal وارد نکند، و هیچ پیش‌فرضی تنظیم نشود، پرس‌وجو به سادگی همه رکوردها از جدول `Orders` را برمی‌گرداند (یعنی، متابیس فقط `SELECT * FROM orders` را اجرا می‌کند).

### افزودن چندین فیلتر

همچنین می‌توانیم از چندین فیلتر استفاده کنیم. اگر، به عنوان مثال، ترجیح می‌دهیم مردم نتایج را با وارد کردن یک محدوده مقادیر subtotal فیلتر کنند، می‌توانیم دو متغیر برای حد پایین و بالا اضافه کنیم:

```sql
SELECT *
FROM orders
WHERE subtotal BETWEEN {{subtotal_min}} AND {{subtotal_max}}
```

در این مورد، دو widget ظاهر می‌شوند، یکی برای هر متغیر.

![سؤال با چندین widget: یکی برای Subtotal Min، و یکی برای Subtotal Max. هر دو مقدار به عنوان الزامی toggle شده‌اند، با مقدار widget فیلتر پیش‌فرض تنظیم شده به 0.](../../../images/create-filter-widgets-for-charts-using-sql-variables/multiple-widgets.png)

### متغیر ورودی پایه: Text

بیایید مثالی با استفاده از یک متغیر ورودی متنی ساده امتحان کنیم. در این مورد، می‌خواهیم یک سؤال با یک widget فیلتر ایجاد کنیم که به مردم اجازه جستجوی عنوان‌های محصول حاوی متنی که در widget وارد می‌کنند را می‌دهد.

در اینجا کد:

```sql
SELECT *
FROM products
[[WHERE UPPER(title) LIKE UPPER(CONCAT('%', {{search_term}},'%'))]]
```

بند `WHERE` را در براکت‌ها enclose می‌کنیم تا ورودی widget اختیاری شود. متغیر را با کاراکتر wildcard `%` bookend می‌کنیم تا نشان دهیم عبارت می‌تواند صفر یا بیشتر کاراکتر در سمت چپ یا راست متغیر داشته باشد. علاوه بر این، با استفاده از تابع `UPPER` روی هر دو ستون `title` و `{{search_term}}` در برابر case sensitivity guard می‌کنیم.

و در اینجا فیلتر ما:

![یک widget فیلتر متنی پایه، فیلتر کردن برای عنوان‌هایی که شامل کلمه](../../../images/create-filter-widgets-for-charts-using-sql-variables/text-filter-widget.png)

### متغیر ورودی پایه: Date

وقتی نوع متغیر Date را انتخاب می‌کنید، widget فیلتر یک date picker ساده ارائه می‌دهد. در اینجا یک سؤال با دو متغیر تاریخ پایه تا کاربران بتوانند یک تاریخ شروع و پایان وارد کنند تا سفارش‌های قرار داده شده بین آن تاریخ‌ها برگردانده شوند.

```sql
SELECT *
FROM orders
[[WHERE created_at BETWEEN {{start_date}} AND {{end_date}}]]
```

![Widgetهای تاریخ پایه، با date pickerهای ساده متصل به متغیرهای start_date و end_date در بند WHERE اختیاری.](../../../images/create-filter-widgets-for-charts-using-sql-variables/basic-date-picker.png)

توجه کنید که مردم نیاز به انتخاب تاریخ برای *هر دو* widget دارند تا فیلتر فعال شود، که می‌تواند به رفتار غیرمنتظره منجر شود. به عنوان مثال، کسی ممکن است تاریخ پایان را خالی بگذارد و انتظار داشته باشد سفارش‌ها از تاریخ شروع تا امروز فیلتر شوند، وقتی در واقع هیچ فیلتری اعمال نمی‌شود.

برای تاریخ‌ها، در عوض استفاده از یک [فیلتر فیلد](field-filters.html) را در نظر بگیرید، که انعطاف‌پذیری بسیار بیشتری ارائه می‌دهد.

[
      
        
        

      
      
        
        

      
    ](field-filters.html)
