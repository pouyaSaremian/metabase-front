---
title: "آموزش: Joinها در متابیس"
description: "نحوه join کردن جداول در متابیس با استفاده از ویرایشگر notebook در سؤال‌های ساده و سفارشی."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/questions/joins-in-metabase
  - /learn/questions/joins-in-metabase
toc:
  - id: "tutorial-joins-in-metabase"
    title: "آموزش: Joinها در متابیس"
    level: 1
    href: "#tutorial-joins-in-metabase"
  - id: "automatic-joins"
    title: "Joinهای خودکار"
    level: 2
    href: "#automatic-joins"
  - id: "example-explicit-join"
    title: "مثال join صریح"
    level: 2
    href: "#example-explicit-join"
  - id: "relational-databases"
    title: "پایگاه‌های داده رابطه‌ای"
    level: 2
    href: "#relational-databases"
  - id: "the-keys-to-joins"
    title: "کلیدهای join"
    level: 2
    href: "#the-keys-to-joins"
  - id: "multiple-joins"
    title: "Joinهای چندگانه"
    level: 2
    href: "#multiple-joins"
  - id: "joins-with-multiple-conditions"
    title: "Joinها با چندین شرط"
    level: 3
    href: "#joins-with-multiple-conditions"
  - id: "column-selection"
    title: "انتخاب ستون"
    level: 2
    href: "#column-selection"
  - id: "related-reading"
    title: "مطالعه مرتبط"
    level: 2
    href: "#related-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "پرسیدن سؤال‌ها"
    href: "../questions.html"
---

# آموزش: Joinها در متابیس

نحوه join کردن جداول در متابیس با استفاده از ویرایشگر notebook در سؤال‌های ساده و سفارشی.

Joinها یک واقعیت زندگی وقتی نوبت به تحلیل داده می‌رسد هستند، و با متابیس سعی می‌کنیم دریافت پاسخ‌ها به سؤال‌های شما را تا حد ممکن آسان کنیم—حتی اگر نیاز به تاکتیک‌های پیچیده‌تر داشته باشد. در این مقاله، نحوه join کردن جداول در متابیس با استفاده از query builder را پوشش می‌دهیم، و مقداری زمینه درباره پایگاه‌های داده رابطه‌ای، جداول، و کلیدها ارائه می‌دهیم، تا درک بهتری از نحوه کار joinها به شما بدهیم.

## Joinهای خودکار

Joinها به شما اجازه ترکیب داده از چندین جدول را می‌دهند. جایی که ممکن است، متابیس آن اتصال‌ها را برای شما انجام می‌دهد، که کار با داده در چندین جدول را برای مردم آسان می‌کند. باید روابط [foreign key](../../../../glossary/foreign-key.html) در [مدل داده](../../../../glossary/data-model.html) خود تعریف شده باشند تا متابیس بتواند آن روابط را تشخیص دهد و آن جداول را در مدل داده متصل کند. اگر آن foreign keyها پیکربندی نشده باشند، adminها همیشه می‌توانند از بخش [Data Model](../../../../docs/latest/data-modeling/metadata-editing.html) برای مشخص کردن آن روابط استفاده کنند.

در زیر به عمق کلیدها می‌پردازیم، اما برای حالا، بیایید یک join ضمنی را در عمل ببینیم. از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس به عنوان داده خود استفاده می‌کنیم تا بتوانید خودتان امتحان کنید.

- از نوار ناوبری بالا، **+ New** را انتخاب کنید.
- **Question** را انتخاب کنید.
- **Raw data** > **Sample Database** را به عنوان منبع داده خود انتخاب کنید.
- سپس جدول `Orders` را انتخاب کنید.
- **Visualize** را انتخاب کنید، و متابیس فهرستی از سفارش‌ها از جدول `Orders` را نمایش می‌دهد.
- روی **دکمه Settings** در پایین سمت چپ صفحه کلیک کنید. متابیس یک sidebar از **گزینه‌های Table** را slide می‌کند و فهرستی از ستون‌ها برای انتخاب به شما ارائه می‌دهد.

![جدول Orders با sidebar Settings باز به بخش Table options. می‌توانید ستون‌ها را اضافه، حذف، و ویرایش کنید، شامل ستون‌های بیشتر از جداولی که متابیس می‌تواند به طور خودکار به جدول Orders join کند.](../../../images/joins-in-metabase/add-column-join-table.png)

**ستون‌های Visible** ستون‌های فعلی در پرس‌وجوی سؤال هستند، که در این مورد شامل همه ستون‌ها از جدول `Orders` است. می‌توانید ستون‌ها را اضافه و حذف کنید، و تنظیمات ستون را تغییر دهید (که بسته به نوع فیلد ستون متفاوت است).

علاوه بر **ستون‌های Visible** بخشی به نام **More columns** را می‌بینید. این بخش شامل ستون‌ها از دو جدول دیگر خواهد بود: `Products` و `People`. (بعداً در مقاله به اینکه چرا جدول `Reviews` به طور برجسته غایب است می‌پردازیم).

متابیس از قبل جدول `Orders` را به جداول `Products` و `People` "join" کرده است، که به شما اجازه افزودن ستون‌ها از این جداول را می‌دهد.

به عنوان مثال، از این **Sidebar Settings**، پایین اسکرول کنید تا جدول `Products` را پیدا کنید، و روی `+` کنار ستون `CATEGORY` کلیک کنید تا آن را به **ستون‌های Visible** اضافه کنید. یک ستون جدید، `Products → Category`، در ستون‌های visible، با پیشوند `PRODUCT →` که نشان می‌دهد ستون native به جدول `Orders` نیست، می‌بینید.

با کلیک روی یک مقدار در یک ستون ID و انتخاب **View details**، می‌توانید بررسی کنید کدام جداول به آن داده متصل هستند. به عنوان مثال، از جدول `Orders`، می‌توانید جزئیات یک ورودی در ستون `Product ID` را مشاهده کنید. متابیس به ما می‌گوید که محصول، "Lightweight Wool Computer" (ID: 146)، به جدول `Orders` و جدول `Reviews` متصل است.

![کلیک روی یک مقدار در یک ستون ID و انتخاب View details به شما، در میان سایر داده، نشان می‌دهد کدام جداول رکورد به آن‌ها متصل است.](../../../images/joins-in-metabase/lightweight-wool-computer.png)

توجه کنید که مقدار واقعی product ID 146 است، نه "Lightweight Wool Computer." متابیس به adminها اجازه [تغییر نحوه نمایش مقادیر ستون](../../../../docs/latest/data-modeling/metadata-editing.html#display-values) را می‌دهد.

![تنظیمات فیلد برای فیلد PRODUCT_ID در جدول Orders. Adminها می‌توانند از تنظیم Display values برای نمایش یک عنوان قابل خواندن انسان به جای ID استفاده کنند.](../../../images/joins-in-metabase/display-values.png)

وقتی جدول `Orders` را مشاهده می‌کنید، foreign key، `PRODUCT_ID`، مقدار از ستون `TITLE` جدول `Products` را نمایش می‌دهد.

[در زیر به کلیدها می‌پردازیم](#the-keys-to-joins)، اما ابتدا بیایید یک join صریح را ببینیم.

## مثال join صریح

بیایید یک join ساده امتحان کنیم. یک سؤال جدید با کلیک روی **+ New** > **Question** > **Raw Data** > **Sample Database** ایجاد می‌کنیم. جدول `Orders` را انتخاب می‌کنیم. در بخش **Data**، روی **آیکون join** کلیک می‌کنیم تا جدول دیگری اضافه کنیم.

![برای افزودن جداول به سؤال خود، روی آیکون join (نمودار Venn) کلیک کنید.](../../../images/joins-in-metabase/join-icon.png)

اگر جدول `Products` را اضافه کنیم، متابیس به طور خودکار رابطه foreign key را پر می‌کند، چون می‌داند که فیلد، `PRODUCT_ID`، شامل foreign keyهایی است که به مقادیر در ستون `ID` ( [entity key](../../../../glossary/entity-key.html)) جدول `Products` ارجاع می‌دهند.

![Join کردن جدول Orders به جدول Products با لینک کردن foreign key (PRODUCT_ID) در جدول Orders به entity key (ID) در جدول Products.](../../../images/joins-in-metabase/orders-and-products.png)

برای هر ردیف در جدول `Orders`، از مقدار در ستون `PRODUCT_ID` برای پیدا کردن ردیف(های) متناظر با همان مقدار در ستون `ID` جدول `Products` استفاده کنید، و یک ردیف جدید با مقادیر از ستون‌ها در هر دو جدول `Orders` و `Products` برگردانید.

اگر علاقه‌مند هستید، در اینجا SQL پایه در کار زیر hood:

```sql
SELECT
  *
FROM
  Orders
  LEFT JOIN Products ON Orders.PRODUCT_ID = Products.ID
```

(توجه کنید که اگر سؤال را به SQL تبدیل کنید، یک پرس‌وجوی SQL بسیار پیچیده‌تر دریافت می‌کنید، اما هر دو پرس‌وجو همان داده را برمی‌گردانند.)

ممکن است در حالت سؤال بالا متوجه شده باشید که نمی‌توانستید ستون‌ها از یکی از جداول در پایگاه داده نمونه، جدول `Reviews` را اضافه کنید. برای فهمیدن چرا، نیاز به مقداری پس‌زمینه درباره پایگاه‌های داده رابطه‌ای داریم.

## پایگاه‌های داده رابطه‌ای

*پایگاه‌های داده رابطه‌ای* (مثل PostgreSQL و MySQL) داده را در جداول (روابط) ذخیره می‌کنند که به طور کلی یک entity از نوعی را نشان می‌دهند، مثل سفارش‌ها یا محصولات. این جداول شامل ستون‌ها (attributeهای entity) و ردیف‌ها (گاهی رکوردها نامیده می‌شوند) هستند. اگر قبلاً با نرم‌افزار spreadsheet کار کرده‌اید، یک جدول شبیه یک sheet با ستون‌ها و ردیف‌ها است.

| Term | Description | Examples |
| --- | --- | --- |
| Table | Entity | Person, Order, Product |
| Column | Attribute of that entity | Address, Description, ID |
| Row | Instance of that attribute | CA, 7, "Lightweight Wool Computer" |

برخی از این ستون‌ها شامل attributeهای خاص، به نام کلیدها هستند.

## کلیدهای join

هر جدول یک ستون خاص دارد که شامل کلیدهای متمایز، به نام *entity keyها* یا *primary keyها*، است که هر ردیف در جدول را به طور یکتا شناسایی می‌کند. این ستون‌ها به طور معمول شامل شماره‌های ID هستند، و می‌توانند به طور خودکار توسط پایگاه داده، یا توسط یک اپلیکیشن (مثلاً، یک employee ID) تولید شوند.

نوع دوم کلید، به نام *foreign key*، یک ارجاع به entity key یک ردیف در جدول دیگر ذخیره می‌کند. برای join کردن جداول، از foreign keyها و entity keyها برای گفتن به پایگاه داده نحوه ترکیب داده از چندین جدول استفاده می‌کنید.

بیایید از **Data Browser** متابیس برای نگاه کردن به برخی کلیدها با یک جدول نمونه در پایگاه داده نمونه استفاده کنیم. از نوار ناوبری بالا در متابیس، به **Browse Data** بروید، و روی پایگاه داده نمونه کلیک کنید. کارت‌هایی برای هر جدول می‌بینید. روی یک کارت hover کنید تا گزینه‌های اضافی را ببینید، و روی **آیکون کتاب** که کنار **Learn about this table** ظاهر می‌شود کلیک کنید.

![به Browse Data از نوار ناوبری بالا بروید، پایگاه داده نمونه را انتخاب کنید، و روی آیکون کتاب کلیک کنید تا درباره این جدول یاد بگیرید.](../../../images/joins-in-metabase/learn-about-this-table.png)

این صفحه مرجع جدول شامل چندین تب است:

- Details
- Fields in this table
- Questions about this table
- X-ray this table

تب **Fields in this table** را انتخاب کنید تا نام فیلد، نوع فیلد، و نوع داده برای هر فیلد در جدول را مشاهده کنید.

![تب Fields in this table را انتخاب کنید تا نام فیلد، نوع فیلد، و نوع داده را مشاهده کنید. جدول Orders شامل یک entity key (ID) و دو foreign key، USER_ID و PRODUCT_ID است.](../../../images/joins-in-metabase/fields-in-this-table.png)

جدول `Orders` شامل یک entity key (a.k.a. primary key)، `ID`، و دو foreign key: `USER_ID` و `PRODUCT_ID` است:

- Foreign key `USER_ID` با entity key `ID` جدول `People` مرتبط است.
- Foreign key `PRODUCT_ID` با entity key `ID` جدول `Products` مرتبط است.

می‌توانیم داده از `Orders`، `People`، `Products` را با join کردن روی این کلیدها ترکیب کنیم. Join کردن به سادگی متابیس را هدایت می‌کند تا رکوردها از یک جدول را line up کند، و از مقادیر foreign key در هر ردیف برای ترکیب داده از جدول دیگر با پیدا کردن ردیف (یا ردیف‌های) متناظر با مقدار entity key matching استفاده کند.

متابیس به طور پیش‌فرض به [left joinها](../../../sql/working-with-sql/sql-join-types.html#which-sql-join-type-to-use) می‌رود.

## Joinهای چندگانه

با آن زمینه درباره جداول، کلیدها، و joinها، بیایید ببینیم آیا می‌توانیم جدول `Orders` را به جدول `Reviews` لینک کنیم. به طور کلی بیان شده: اگر جدول شروع ما (جدول چپ) شامل یک foreign key که به جدولی که می‌خواهیم join کنیم ارجاع می‌دهد نیست، چگونه به join کردن آن‌ها می‌پردازیم؟

اگر سعی کنیم جدول `Orders` را به جداول `Reviews` join کنیم، متابیس نمی‌داند چه کند.

![اگر هیچ رابطه foreign key وجود نداشته باشد، متابیس نمی‌داند](../../../images/joins-in-metabase/orders-and-reviews.png)

جدول `Orders` فاقد یک foreign key برای جدول `Reviews` است، که دلیل اینکه متابیس به طور خودکار دو جدول را متصل نکرد است.

بیایید به data browser برگردیم تا بفهمیم جدول `Reviews` کدام foreign keyها را شامل می‌شود.

![تنها foreign key در جدول Reviews PRODUCT_ID است.](../../../images/joins-in-metabase/fields-in-reviews.png)

پس، در اینجا وضعیت ما:

- جدول `Orders` foreign keyهایی به جداول `Products` و `People` دارد.
- جدول `Reviews` یک foreign key به جدول `Products` دارد.

برای اتصال جدول `Orders` به جدول `Reviews`، نیاز به join کردن آن‌ها از طریق جدول `Products` داریم. از یک سؤال query builder برای مشخص کردن joinها استفاده می‌کنیم. در اینجا سؤال ما:

![Join کردن جدول Orders به جدول Reviews از طریق جدول Products.](../../../images/joins-in-metabase/orders-products-reviews.png)

توجه کنید که متابیس "Previous results" را به عنوان جدول چپ برای join نشان می‌دهد تا زمانی که کلیدها را مشخص کنید. وقتی به متابیس می‌گویید previous results را روی `Products.ID = Reviews.Product_ID` join کند، متابیس جدول Products را left-joined به جدول reviews در بخش Join data نشان می‌دهد.

اگر نتایج را تجسم کنید، جدولی از همه ستون‌ها از هر سه جدول می‌بینید: `Orders`، `Products`، و `Reviews`. توجه کنید که چون یک محصول واحد می‌تواند چندین review داشته باشد، چندین ردیف برای همان محصول و سفارش می‌بینیم، یکی برای هر review.

### Joinها با چندین شرط

حالا بیایید افزودن چندین شرط به یک join را امتحان کنیم. این می‌تواند مفید باشد اگر می‌خواهید ردیف‌های تکراری را کاهش دهید یا چیزهایی درباره داده خود بیان کنید که یک join شرط واحد نمی‌تواند. بگویید می‌خواستیم همه سفارش‌ها برای محصولاتی که در همان ماهی که آن محصول را به موجودی خود اضافه کردیم قرار داده شدند را ببینیم.

با استفاده از همان مثال بالا به عنوان نقطه شروع، روی دکمه **+** آبی کنار اولین شرط خود کلیک کنید تا دیگری در همان join اضافه کنید. می‌خواهید از یک [inner join](../../../sql/working-with-sql/sql-join-types.html#which-sql-join-type-to-use) اینجا استفاده کنید، چون فقط مقادیری که در هر دو جدول match می‌کنند را برمی‌گرداند.

همانطور که در زیر می‌بینید، جداول `Orders` و `Products` را روی دو ستون، Product ID و تاریخ ایجاد، join کردیم، پس حالا می‌توانیم همه سفارش‌های قرار داده شده در همان ماهی که محصول سفارش داده شده به موجودی ما اضافه شد را ببینیم.

توجه کنید که در حالی که فیلدهای `CREATED_AT` شامل اطلاعات کامل تاریخ و زمان هستند، این نتایج نشان می‌دهند جایی که *ماه‌ها* match می‌کنند، نه timestamp دقیق.

![Join کردن جدول Orders به جدول Products با لینک کردن foreign key (PRODUCT_ID) در جدول Orders به entity key (ID) در جدول Products <em>و</em> بر اساس تاریخ ایجاد.](../../../images/joins-in-metabase/multiple-join-conditions.png)

## انتخاب ستون

علاوه بر join کردن جداول ما، می‌توانیم انتخابی درباره اینکه کدام ستون‌ها در نتایج سؤال ما visible هستند باشیم. در **Query Builder**، می‌توانید ستون‌هایی که متابیس نمایش می‌دهد را انتخاب کنید.

![انتخاب ستون‌ها در Query Builder.](../../../images/joins-in-metabase/select-columns-notebook-editor.png)

وقتی سؤال خود را ذخیره کردید، همچنین می‌توانید ستون‌های visible را از **Sidebar Settings** همانطور که در بالا انجام دادیم انتخاب کنید.

![روی دکمه Settings کلیک کنید تا ستون‌ها را به سؤال خود اضافه یا حذف کنید.](../../../images/joins-in-metabase/column-options.png)

متوجه می‌شوید که متابیس مفیدانه ستون‌ها از جدول `People` را نیز برای افزودن در دسترس می‌کند، پس حالا کل پایگاه داده نمونه در اختیار شماست.

از join کردن جداول در مجموعه داده خود لذت ببرید، و یادتان باشد: اگر گیر کردید، مطمئن شوید data browser را برای یادگیری اینکه کدام جداول foreign keyهایی که نیاز دارید برای join کردن آن‌ها دارید مشورت کنید.

## مطالعه مرتبط

- [مستندات: پرسیدن سؤال](../../../../docs/latest/questions/introduction.html)
- [مستندات: Query builder](../../../../docs/latest/questions/introduction.html#query-builder)
- [آموزش: عبارات سفارشی](custom-expressions.html)
- [مستندات: ویرایش متادیتا](../../../../docs/latest/data-modeling/metadata-editing.html)

[
      
        

      
      
        
        

      
    ](custom-expressions.html)
[
      
        
        

      
      
        
        

      
    ](cross-db-joins.html)
