---
title: "آموزش: جستجو در جداول"
description: "یاد بگیرید چگونه در سؤال‌های SQL و سؤال‌های ساده خود با استفاده از فیلترها و عبارات سفارشی جستجو کنید. پیدا کردن کلمات یا عبارات در جداول شما اکنون آسان‌تر از همیشه است."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/questions/searching-tables
  - /learn/questions/searching-tables
toc:
  - id: "tutorial-searching-in-tables"
    title: "آموزش: جستجو در جداول"
    level: 1
    href: "#tutorial-searching-in-tables"
  - id: "search-within-a-question"
    title: "جستجو در یک سؤال"
    level: 2
    href: "#search-within-a-question"
  - id: "update-your-search-filter"
    title: "به‌روزرسانی فیلتر جستجوی خود"
    level: 3
    href: "#update-your-search-filter"
  - id: "search-for-multiple-values"
    title: "جستجو برای چندین مقدار"
    level: 3
    href: "#search-for-multiple-values"
  - id: "advanced-search-with-custom-expressions"
    title: "جستجوی پیشرفته با عبارات سفارشی"
    level: 3
    href: "#advanced-search-with-custom-expressions"
  - id: "searching-on-foreign-keys"
    title: "جستجو روی foreign keyها"
    level: 2
    href: "#searching-on-foreign-keys"
  - id: "add-a-search-widget-to-your-sql-question"
    title: "افزودن یک widget جستجو به سؤال SQL خود"
    level: 2
    href: "#add-a-search-widget-to-your-sql-question"
  - id: "sql-question-breakdown"
    title: "تجزیه سؤال SQL"
    level: 3
    href: "#sql-question-breakdown"
  - id: "variables-sidebar"
    title: "Sidebar متغیرها"
    level: 3
    href: "#variables-sidebar"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "پرسیدن سؤال‌ها"
    href: "../questions.html"
---

# آموزش: جستجو در جداول

یاد بگیرید چگونه در سؤال‌های SQL و سؤال‌های ساده خود با استفاده از فیلترها و عبارات سفارشی جستجو کنید. پیدا کردن کلمات یا عبارات در جداول شما اکنون آسان‌تر از همیشه است.

افزودن فیلترها به سؤال‌های شما می‌تواند جستجوی متن در سؤال‌های شما را آسان کند. می‌توانید با مثال‌های این مقاله با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با هر نصب متابیس همراه باشید.

## جستجو در یک سؤال

با کلیک روی دکمه **Browse Data**، انتخاب `Sample Database`، و باز کردن جدول `Products` شروع می‌کنیم.

برای جستجو در سؤال‌ها، از یک فیلتر قابل سفارشی استفاده می‌کنیم. روی دکمه **Filter** کلیک می‌کنیم و ستونی که می‌خواهیم بر اساس آن فیلتر کنیم را در فهرست پیدا می‌کنیم.

بیایید از ستون `Title` استفاده کنیم. منوی dropdown کنار نام ستون وجود دارد که در حال حاضر می‌گوید `Is`. یک popup با **گزینه‌های فیلتر متنی** ظاهر می‌شود تا به ما ارائه دهد:

- `Is`
- `Is not`
- `Contains`
- `Does not contain`
- `Is empty`
- `Not empty`
- `Starts with`
- `Ends with`

`Starts with` را انتخاب می‌کنیم و "rustic" را در جعبه جستجو در **Sidebar Filter** تایپ می‌کنیم. روی **Apply Filter** کلیک می‌کنیم تا فیلتر را به سؤال خود اضافه کنیم.

![ایجاد یک widget جستجو با افزودن یک فیلتر به یک سؤال.](../../../images/searching-your-tables-and-questions/create-search-filter.png)

با فیلتر اعمال شده، سؤال ما فقط عنوان‌های محصولی که با "rustic" شروع می‌شوند را فهرست می‌کند.

### به‌روزرسانی فیلتر جستجوی خود

حالا که یک فیلتر اضافه کردیم، فیلتر جستجوی ما در بالای جدول ما است. می‌توانیم روی توضیحات فیلتر، که می‌گوید `Title starts with rustic` کلیک کنیم.

![تصویر نزدیک از فیلتر جستجوی سؤال.](../../../images/searching-your-tables-and-questions/search-widget.png)

در popup، می‌توانیم از جعبه متنی برای جایگزینی عبارت جستجوی فعلی، به عنوان مثال با "Marble" استفاده کنیم. همچنین می‌توانیم نحوه فیلتر کردن نتایج توسط widget را با کلیک روی منوی dropdown که در حال حاضر می‌گوید `Starts with`، به عنوان مثال با تغییر **گزینه‌های فیلتر متنی** خود به `contains` تغییر دهیم. widget جستجوی خود را از `Title starts with rustic` به `Title contains Marble` به‌روزرسانی می‌کنیم، و جستجو را case sensitive می‌کنیم.

![استفاده از widget جستجو برای تغییر آنچه ما](../../../images/searching-your-tables-and-questions/updating-search-widget.png)

### جستجو برای چندین مقدار

Widgetهای فیلتر در متابیس به شما اجازه جستجو برای چندین مقدار در همان زمان را می‌دهند. بگویید می‌خواهیم نتایج را بر اساس محصولاتی که شامل "Marble"، "Clock"، یا "Wallet" هستند فیلتر کنیم. می‌توانیم دوباره روی توضیحات فیلتر کلیک کنیم، "Clock" را تایپ کنیم، سپس کاما (این به متابیس می‌گوید "من تایپ کردن یک مقدار را تمام کردم و حالا مقدار دیگری وارد می‌کنم")، و سپس "Wallet":

![جستجو با یک widget فیلتر](../../../images/searching-your-tables-and-questions/updating-search-widget.png)

وقتی از چندین مقدار در فیلتر "Contains" استفاده می‌کنید (و "Starts with"، و "Ends with") متابیس برای رکوردهایی که شامل هر *یک* از آن مقادیر هستند (یک `Or` ضمنی، نه `And`) جستجو می‌کند. اگر به جای آن می‌خواهید رکوردهایی پیدا کنید که شامل *همه* آن مقادیر هستند (مثلاً رکوردهایی که شامل هم "Marble" *و* "Clock" هستند)، نیاز به افزودن یک فیلتر برای هر مقدار دارید. یا می‌توانید از یک عبارت سفارشی استفاده کنید.

### جستجوی پیشرفته با عبارات سفارشی

[عبارات سفارشی](../../../../glossary/custom-expression.html) راهی برای ساخت پرس‌وجوهای پیشرفته با اعداد یا متن هستند. بگویید می‌خواهیم نتایج را بر اساس محصولاتی که یا rustic هستند یا ساعت هستند فیلتر کنیم. پس می‌خواهیم رکوردهایی که عنوان آن‌ها با "Rustic" شروع می‌شود یا با "Clock" پایان می‌یابد.

بیایید یک عبارت سفارشی با کلیک روی فیلتر برای ویرایش آن دوباره، کلیک روی **<**، و انتخاب **Custom Expression** در پایین sidebar ایجاد کنیم.

اگر شروع به تایپ کنیم، پیشنهادهایی که می‌توانیم در عبارت سفارشی خود استفاده کنیم را می‌بینیم که pop up می‌شوند.

![Sidebar Custom Expression باز است و یک عبارت شروع شده با `contains()` قابل مشاهده است.](../../../images/searching-your-tables-and-questions/contains-cust-exp.png)

پرس‌وجوی پایه خود را مثل این می‌نویسیم: (`startsWith([Title] , "Rustic")`).

- `startsWith` نوع فیلتری است که می‌خواهیم
- `[Title]` ستونی است که باید فیلتر شود
- `"Rustic"` عبارتی است که باید برای آن فیلتر شود

یک فاصله اضافه می‌کنیم و `OR` را تایپ می‌کنیم، سپس یک تابع جستجوی متنی دیگر می‌نویسیم: `OR endsWith([Title] , "Clock")`، و روی **Done** کلیک می‌کنیم.

![ایجاد یک Custom Expression که از ستون Title جدول Products برای کلمات جستجو می‌کند](../../../images/searching-your-tables-and-questions/create-custom-expression.png)

## جستجو روی foreign keyها

می‌توانیم از [foreign keyها](../../../../glossary/foreign-key.html) برای جستجوی یک جدول بر اساس داده از یک جدول متصل استفاده کنیم. برای قادر بودن به جستجو روی foreign keyها با رشته‌ها و همچنین شماره‌های ID، adminها نیاز به [تغییر تنظیمات مدل داده](../../../../docs/latest/data-modeling/metadata-editing.html) دارند. از نوار ناوبری اصلی متابیس، روی **آیکون چرخ‌دنده** کلیک کنید تا **Admin Panel** باز شود، روی **تب Data Model** کلیک کنید، و `Sample Database` را انتخاب کنید. بعد، روی جدول `Reviews` کلیک کنید و روی **آیکون چرخ‌دنده** کنار فیلد `Product_ID` کلیک کنید.

در مثال ما، ستون `Product_ID` به عنوان یک foreign key، با تنظیمات فیلتر `search box`، و یک مقدار نمایش `Title` تنظیم شده است. به این ترتیب وقتی روی `Product_ID` فیلتر می‌کنیم می‌توانیم بر اساس عنوان به جای شماره ID فیلتر کنیم، و جدول عنوان هر محصول را به جای شماره ID آن نمایش می‌دهد.

![در مدل داده برای فیلد Product_ID در جدول Reviews، admin تنظیمات Filtering on this field را به عنوان Search box و Display values را به عنوان Title ذخیره کرده است.](../../../images/searching-your-tables-and-questions/data-model-info.png)

می‌توانید بیشتر درباره ویرایش متادیتا در [مستندات](../../../../docs/latest/data-modeling/metadata-editing.html) ما یاد بگیرید.

با متادیتای تنظیم شده ما، قادر به فیلتر کردن Reviews بر اساس عنوان محصول خواهیم بود:

1. روی دکمه **Browse > Databases** کلیک کنید، `Sample Database` را انتخاب کنید، و جدول `Reviews` را باز کنید.
2. روی دکمه **Filter** کلیک کنید. این ویرایشگر فیلتر را با همه ستون‌ها در جداول `Reviews` و `Products` باز می‌کند
3. جدول `Products` را در sidebar ویرایشگر **Filter** انتخاب کنید.
4. فیلد `Title` را پیدا کنید، "Practical" را تایپ کنید، و یکی از مقادیر در dropdown، مثل "Practical Bronze Computer" را انتخاب کنید.

![ایجاد یک widget جستجو برای جدول Reviews با استفاده از عنوان محصول به جای ID.](../../../images/searching-your-tables-and-questions/foreign-key-searching.png)

## افزودن یک widget جستجو به سؤال SQL خود

در یک پایگاه داده عادی، نیاز به ساخت یک پرس‌وجوی SQL جدید برای هر عبارت جستجو داریم، اما متابیس جستجو در پایگاه داده ما را آسان می‌کند، حتی هنگام استفاده از پرس‌وجوهای SQL. همه آنچه نیاز داریم وارد کردن یک [متغیر](../../../../glossary/variable.html) در بند `WHERE` یک پرس‌وجو است.

در بالا سمت راست نوار ناوبری اصلی، روی **آیکون مداد** کلیک می‌کنیم تا SQL بنویسیم.

```sql
SELECT *
FROM REVIEWS
[[WHERE UPPER(Body) LIKE UPPER(CONCAT('%', {{search_term}}, '%'))]]
```

به محض شروع تایپ در براکت‌های فرفری `{{}}`، نوار جستجو بالای ناحیه ورودی SQL ظاهر می‌شود متابیس sidebar متغیرها را kick out می‌کند.

![ویرایشگر SQL با پرس‌وجوی نمونه تایپ شده در ناحیه متنی SQL.](../../../images/searching-your-tables-and-questions/sql-q.png)

### تجزیه سؤال SQL

به زبان ساده، این پرس‌وجوی SQL می‌گوید، "Reviews را به من نشان بده که body review شامل عبارت جستجو است، چه هر دو به همان شکل capitalize شده باشند یا نه."

بیایید عناصر در خط سوم را تجزیه کنیم:

- `[[]]` براکت‌ها فیلتر را اختیاری می‌کنند. اگر هیچ عبارت جستجویی به متغیر ارائه نشود، پرس‌وجو ردیف‌های فیلتر نشده را برمی‌گرداند.
- `WHERE` نتایج را فیلتر می‌کند.
- `UPPER()` هم متن جستجو شده و هم عبارت جستجو را capitalize می‌کند، پس حتی اگر تفاوتی در case وجود داشته باشد match می‌شوند.
- `BODY` ستونی است که باید فیلتر شود.
- `LIKE` برای یک الگو جستجو می‌کند.
- `CONCAT()` (مخفف concatenate) رشته‌ها را ترکیب می‌کند.
- `'%'` یک نماد درصد یک wild card است. اگر قبل از عبارت جستجو قرار گیرد متن اضافی می‌تواند قبل از عبارت بیاید. wrap کردن عبارت جستجو با `%` برای عبارت جستجو می‌کند حتی اگر با متن احاطه شده باشد.
- `{{}}` براکت‌های فرفری دوتایی یک متغیر را wrap می‌کنند.
- `search_term` متغیری که widget فیلتر متن را برای جستجو به آن ارائه می‌دهد.

### Sidebar متغیرها

نوع متغیر `Text` را انتخاب کرده است، اما چندین گزینه دیگر نیز وجود دارد:

- Number
- Date
- Field filter

فیلترها می‌توانند هم پیچیده و هم به شدت مفید باشند؛ [widgetهای فیلتر](../../../../glossary/filter-widget.html) و [فیلترهای فیلد](../sql-in-metabase/field-filters.html) را برای دریافت حس از راه‌های زیادی که می‌توانند بینش‌های ارزشمند ارائه دهند بررسی کنید.

زیر `Variable type` `Filter widget label` است، که به طور خودکار متنی که بین براکت‌های فرفری تایپ می‌کنیم را به عنوان برچسب ما استفاده می‌کند.

برای مثال‌ها و توصیه‌های اضافی درباره تایپ پرس‌وجوهای SQL که از یک widget جستجو پشتیبانی می‌کنند، روی **تب Help** به سمت بالای sidebar کلیک کنید.

![گزینه‌های نوع متغیر، ایجاد یک placeholder جدید برای برچسب widget، و اسکرول از طریق](../../../images/searching-your-tables-and-questions/variables-sidebar.png)

[
      
        

      
      
        
        

      
    ](multi-aggregation.html)
[
      
        
        

      
      
        
        

      
    ](formatting.html)
