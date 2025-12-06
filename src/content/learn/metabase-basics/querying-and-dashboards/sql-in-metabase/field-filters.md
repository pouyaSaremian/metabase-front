---
title: "آموزش: فیلترهای فیلد برای سؤال‌های SQL"
description: "یاد بگیرید چگونه از فیلترهای فیلد متابیس در پرس‌وجوهای SQL برای ساخت widgetهای فیلتر هوشمندتر استفاده کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/sql-in-metabase/field-filters
  - /learn/building-analytics/sql-templates/field-filters
  - /learn/sql-questions/field-filters
toc:
  - id: "tutorial-field-filters-for-sql-questions"
    title: "آموزش: فیلترهای فیلد برای سؤال‌های SQL"
    level: 1
    href: "#tutorial-field-filters-for-sql-questions"
  - id: "introduction-to-field-filters"
    title: "مقدمه‌ای بر فیلترهای فیلد"
    level: 2
    href: "#introduction-to-field-filters"
  - id: "distinguishing-field-filters-from-simple-text-number-and-date-variables"
    title: "تمایز فیلترهای فیلد از متغیرهای ساده Text، Number، و Date"
    level: 2
    href: "#distinguishing-field-filters-from-simple-text-number-and-date-variables"
  - id: "creating-a-sql-filter-widget-with-a-dropdown-menu"
    title: "ایجاد یک widget فیلتر SQL با منوی dropdown"
    level: 2
    href: "#creating-a-sql-filter-widget-with-a-dropdown-menu"
  - id: "creating-sophisticated-sql-filter-widgets-for-date-fields"
    title: "ایجاد widgetهای فیلتر SQL پیشرفته برای فیلدهای تاریخ"
    level: 2
    href: "#creating-sophisticated-sql-filter-widgets-for-date-fields"
  - id: "field-filter-gotchas"
    title: "نکات مهم فیلتر فیلد"
    level: 2
    href: "#field-filter-gotchas"
  - id: "omit-the-direct-assignment-in-the-where-clause"
    title: "حذف انتساب مستقیم در بند WHERE"
    level: 3
    href: "#omit-the-direct-assignment-in-the-where-clause"
  - id: "learn-more-about-sql-filters-and-variables"
    title: "یادگیری بیشتر درباره فیلترها و متغیرهای SQL"
    level: 2
    href: "#learn-more-about-sql-filters-and-variables"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "SQL در متابیس"
    href: "index.html"
---

# آموزش: فیلترهای فیلد برای سؤال‌های SQL

یاد بگیرید چگونه از فیلترهای فیلد متابیس در پرس‌وجوهای SQL برای ساخت widgetهای فیلتر هوشمندتر استفاده کنید.

> به دنبال مستندات درباره فیلترهای فیلد هستید؟ [مستندات: فیلترهای فیلد](../../../../docs/latest/questions/native-editor/field-filters.html) را ببینید.

این مقاله نشان می‌دهد چگونه widgetهای فیلتر SQL هوشمند را به پرس‌وجوهای SQL خود در متابیس با استفاده از نوع خاصی از متغیر به نام **فیلتر فیلد** اضافه کنید.

## مقدمه‌ای بر فیلترهای فیلد

![یک فیلتر فیلد نوع خاصی از متغیر است که می‌تواند یک متغیر در کد SQL شما را به یک فیلد (ستون) در یک جدول متصل کند، که به آن امکان ایجاد یک](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/example-field-filter-powering-filter-widget.gif)

برای سؤال‌های متابیس نوشته شده در SQL، می‌توانیم از [انواع متغیر پایه](sql-variables.html)—Text، Number، و Date—برای ایجاد widgetهای فیلتر SQL ساده استفاده کنیم. برای ایجاد widgetهای فیلتر "هوشمندتر" که می‌توانند گزینه‌های خاص به داده‌های ستون‌های فیلتر شده را نمایش دهند، مثل ایجاد یک منوی dropdown از مقادیر، می‌توانیم از نوع متغیر خاصی به نام [فیلتر فیلد](../../../../docs/latest/questions/native-editor/field-filters.html) استفاده کنیم.

![برای ایجاد یک فیلتر فیلد، یک متغیر را به کد SQL خود با enclose کردن متغیر در براکت‌های دوتایی (سبک Mustache) اضافه کنید، و فیلتر فیلد را به عنوان نوع متغیر از sidebar متغیرها انتخاب کنید.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/field-filter-selection.png)

فیلترهای فیلد می‌توانند در ابتدا برخی افراد را گیج کنند، چون مردم انتظار دارند مانند متغیرهای ورودی پایه رفتار کنند (که نمی‌کنند). با این حال، فیلترهای فیلد ارزش یادگیری دارند، چون می‌توانید از آن‌ها برای ایجاد widgetهای فیلتر بسیار پیشرفته‌تر استفاده کنید. این مقاله فیلترهای فیلد را به عمق پوشش می‌دهد، اما ابتدا بیایید تفاوت‌های اصلی بین متغیرهای فیلتر فیلد و متغیرهای Text، Number، و Date ساده را بحث کنیم.

## تمایز فیلترهای فیلد از متغیرهای ساده Text، Number، و Date

1. *فیلترهای فیلد به طور پیش‌فرض اختیاری هستند.* اگر هیچ مقداری داده نشود، پرس‌وجوی SQL به گونه‌ای اجرا می‌شود که گویی فیلتر فیلد وجود نداشت. با این حال، شما گزینه الزامی کردن یک مقدار را دارید.
2. *فیلترهای فیلد از syntax خاصی استفاده می‌کنند تا بتوانند کد SQL را در پشت صحنه مدیریت کنند.* شما به سادگی یک فیلتر فیلد را به یک بند `WHERE` (بدون ستون یا عملگر) می‌دهید و فیلتر فیلد کد SQL را برای شما مدیریت می‌کند. این به کد اجازه می‌دهد تا انتخاب‌های چندگانه‌ای که مردم در widget فیلتر انجام می‌دهند را در نظر بگیرد.

نکته دوم می‌تواند به خصوص گیج‌کننده باشد، پس بیایید آن را با یک مثال باز کنیم.

## ایجاد یک widget فیلتر SQL با منوی dropdown

ما از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس برای افزودن یک widget فیلتر با منوی dropdown به یک سؤال نوشته شده در SQL استفاده خواهیم کرد. بگویید می‌خواهیم یک سؤال SQL ایجاد کنیم که همه سفارش‌ها را از جدول `Orders` می‌گیرد، اما می‌خواهیم به مردم گزینه فیلتر کردن نتایج بر اساس دسته در جدول `Products` را بدهیم. ما *می‌توانستیم* یک فیلتر `Products.category` با یک متغیر ورودی پایه ایجاد کنیم، مثل این:

```
SELECT *
FROM Orders
LEFT JOIN Products
ON Orders.product_id = Products.id
[[WHERE Products.category = {{category}}]];

```

در این مورد، بند `WHERE` را در براکت‌های دوتایی enclose می‌کنیم تا ورودی اختیاری شود، و از **sidebar متغیرها** برای تنظیم نوع متغیر به `Text` و برچسب widget فیلتر به `Category` استفاده می‌کنیم. این رویکرد کار می‌کند، اما ایده‌آل نیست:

- برای فیلتر کردن داده، مردم باید بدانند کدام دسته‌ها وجود دارند (و آن‌ها را به درستی هنگام ورود هجی کنند).
- علاوه بر این، آن‌ها نمی‌توانند چندین دسته را همزمان انتخاب کنند، چون متغیر `{{category}}` فقط یک مقدار واحد می‌پذیرد.

در مقابل، یک فیلتر فیلد متغیر را به داده‌های ستون واقعی map می‌کند. widget فیلتر متصل به متغیر سپس "می‌داند" کدام دسته‌ها در دسترس هستند، و می‌تواند یک منوی dropdown از آن دسته‌ها ارائه دهد، مثل این:

![یک widget فیلتر ایجاد شده توسط یک فیلتر فیلد که](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/field-filter-dropdown.png)

یک کلمه درباره widget: منوی dropdown فقط یکی از گزینه‌های در دسترس است. در مورد فیلدهای نوع `Category`، مثل فیلد `category` ما در جدول `Products`، می‌توانستیم widget فیلتر را به عنوان یک جعبه جستجو یا یک جعبه ورودی ساده تنظیم کنیم. مدیران می‌توانند تنظیمات فیلد را در **تب مدل داده** از **پنل ادمین** پیکربندی کنند.

![در تب مدل داده از پنل ادمین، مدیران می‌توانند تنظیمات فیلد را ویرایش کنند. برای فیلدهای نوع Category، مدیران می‌توانند سه گزینه برای widgetهای فیلد انتخاب کنند: جعبه جستجو، لیستی از همه مقادیر (dropdown)، یا جعبه ورودی ساده.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/data-model-field-settings.png)

توجه کنید که متابیس به طور خودکار از یک جعبه جستجو استفاده می‌کند اگر تعداد مقادیر متمایز در ستون بیشتر از 300 باشد، حتی اگر گزینه dropdown را انتخاب کنید. درباره [ویرایش فراداده](../../../../docs/latest/data-modeling/metadata-editing.html) در مستندات ما بیشتر بیاموزید.

حالا، بیایید به سؤال خود برگردیم. در اینجا syntax برای فیلتر فیلد `Products.category` است. توجه کنید حذف ستون و عملگر قبل از متغیر در بند `WHERE`—ما در زیر بیشتر درباره syntax فیلتر فیلد صحبت خواهیم کرد:

```
SELECT *
FROM orders
LEFT JOIN products
ON orders.product_id = products.id
WHERE {{category}};

```

با متغیر ما در جای خود در بند `WHERE`، می‌توانیم از **sidebar متغیرها** برای wire up کردن متغیر خود به عنوان یک فیلتر فیلد استفاده کنیم. تنظیم می‌کنیم:

- `نوع متغیر` را به `فیلتر فیلد` .
- `فیلد برای map کردن` را به `Products → Category` . این تنظیم به متابیس می‌گوید متغیر در کد SQL ما را به ستون `category` جدول `Products` متصل کند.
- `نوع widget فیلد` را به `category` .
- `برچسب widget فیلد` را به `category` .

![تنظیم یک متغیر](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/product-category-field-filter.gif)

متغیر را الزامی نمی‌کنیم، پس هیچ مقدار پیش‌فرضی لازم نیست. اگر پرس‌وجو بدون مقدار مشخص شده در widget فیلتر اجرا شود، پرس‌وجو رکوردها از همه دسته‌ها را برمی‌گرداند.

توجه کنید که بند `WHERE` مشخص نمی‌کند متغیر باید برابر با کدام ستون باشد. این syntax ضمنی (کد SQL پنهان) به فیلتر فیلد اجازه می‌دهد کد SQL را در پشت صحنه برای تطبیق با انتخاب‌های چندگانه مدیریت کند.

## ایجاد widgetهای فیلتر SQL پیشرفته برای فیلدهای تاریخ

می‌توانیم یک متغیر ورودی پایه از نوع Date ایجاد کنیم، که یک widget فیلتر SQL با یک فیلتر تاریخ ساده اضافه می‌کند. اگر، به جای آن، از یک متغیر فیلتر فیلد استفاده کنیم، می‌توانیم آن متغیر را به یک فیلد (ستون) که شامل تاریخ‌ها است متصل کنیم، که گزینه‌های بسیار بیشتری برای پیکربندی widget فیلتر ما باز می‌کند. در اینجا SQL:

```
SELECT *
FROM ORDERS
WHERE {{created_at}}

```

![تنظیم گزینه فیلد برای map کردن به یک فیلد حاوی تاریخ‌ها، طیف وسیعی از انواع widget فیلتر را باز می‌کند: ماه و سال، سه‌ماهه و سال، تاریخ واحد، محدوده تاریخ، تاریخ نسبی، و فیلتر تاریخ.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/filter-widget-type.png)

در اینجا انواع مختلف widget برای فیلترهای فیلد map شده به فیلدهای تاریخ:

- ماه و سال
- سه‌ماهه و سال
- تاریخ واحد
- محدوده تاریخ
- تاریخ نسبی
- فیلتر تاریخ

هر نوع widget راه‌های مختلفی برای مردم برای فیلتر کردن نتایج ارائه می‌دهد. در اینجا سه مثال فیلتر فیلد SQL:

![نوع widget ماه و سال.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/month-and-year.png)

![نوع widget تاریخ نسبی.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/relative-date.png)

![نوع widget فیلتر تاریخ.](../../../images/field-filters-create-smart-filter-widgets-for-sql-questions/date-filter.gif)

نوع widget فیلتر تاریخ بیشترین انعطاف‌پذیری را ارائه می‌دهد، اجازه فیلتر کردن بر اساس تاریخ‌های نسبی و محدوده‌ها را می‌دهد.

## نکات مهم فیلتر فیلد

چند جا وجود دارد که مردم معمولاً هنگام تلاش برای پیاده‌سازی فیلترهای فیلد گیر می‌کنند.

### حذف انتساب مستقیم در بند WHERE

همانطور که در بالا گفته شد، کد SQL اطراف فیلترهای فیلد دقیقاً street legal نیست. ممکن است وسوسه شوید بنویسید:

```
-- این کار را نکنید
WHERE category = {{ category }}

```

چون این syntax صحیح برای یک بند `WHERE` در SQL استاندارد است. اما آن syntax برای فیلترهای فیلد کار نمی‌کند. syntax صحیح برای فیلترهای فیلد عملگر `=` را حذف می‌کند:

```
WHERE {{ category }}

```

دلیل این shorthand این است که متابیس می‌تواند، در پشت صحنه، کد SQL را برای موقعیت‌هایی مثل انتخاب‌های چندگانه insert کند، مثلاً وقتی یک کاربر چندین دسته را از یک dropdown انتخاب می‌کند.

## یادگیری بیشتر درباره فیلترها و متغیرهای SQL

راهنمای ما به [متغیرهای ورودی SQL پایه - Text، Number، و Date](sql-variables.html) را بررسی کنید.

همچنین می‌توانید مستندات ما را درباره بخوانید:

- [متغیرهای ورودی پایه](../../../../docs/latest/questions/native-editor/sql-parameters.html)
- [فیلترهای فیلد](../../../../docs/latest/questions/native-editor/field-filters.html)

[
      
        
        

      
      
        
        

      
    ](sql-variables.html)
[
      
        
        

      
      
        
        

      
    ](snippets.html)
