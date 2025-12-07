---
title: "آموزش: مجوزهای سطح ستون در متابیس"
description: "نحوه استفاده از یک پرس‌وجوی SQL ذخیره شده برای نمایش ردیف‌ها و ستون‌های خاص به افراد مختلف را بیاموزید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/column-permissions
  - /learn/metabase-basics/administration/permissions/data-sandboxing-column-permissions
  - /learn/permissions/data-sandboxing-column-permissions
toc:
  - id: "tutorial-column-level-permissions-in-metabase"
    title: "آموزش: مجوزهای سطح ستون در متابیس"
    level: 1
    href: "#tutorial-column-level-permissions-in-metabase"
  - id: "the-plan"
    title: "برنامه"
    level: 2
    href: "#the-plan"
  - id: "create-a-collection-accessible-only-by-admins"
    title: "ایجاد یک مجموعه قابل دسترسی فقط توسط adminها"
    level: 2
    href: "#create-a-collection-accessible-only-by-admins"
  - id: "create-a-sql-query"
    title: "ایجاد یک پرس‌وجوی SQL"
    level: 3
    href: "#create-a-sql-query"
  - id: "restrict-the-view-of-the-products-table-using-our-saved-question"
    title: "محدود کردن view جدول Products با استفاده از سؤال ذخیره شده ما"
    level: 2
    href: "#restrict-the-view-of-the-products-table-using-our-saved-question"
  - id: "check-settings-as-the-restricted-user"
    title: "بررسی تنظیمات به عنوان کاربر محدود شده"
    level: 2
    href: "#check-settings-as-the-restricted-user"
  - id: "use-a-sql-question-to-create-a-custom-restricted-view-of-a-table"
    title: "استفاده از یک سؤال SQL برای ایجاد یک view محدود شده سفارشی از یک جدول"
    level: 2
    href: "#use-a-sql-question-to-create-a-custom-restricted-view-of-a-table"
  - id: "recap"
    title: "خلاصه"
    level: 2
    href: "#recap"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مجوزها"
    href: "index.html"
---

# آموزش: مجوزهای سطح ستون در متابیس

نحوه استفاده از یک پرس‌وجوی SQL ذخیره شده برای نمایش ردیف‌ها و ستون‌های خاص به افراد مختلف را بیاموزید.

> به دنبال مستندات درباره امنیت ستون هستید؟ [مستندات: امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html) را ببینید.

امنیت ردیف و ستون در [طرح‌های Pro و Enterprise](../../../../pricing/index.html) به عنوان راهی برای مشخص کردن چه داده‌ای مردم می‌توانند بر اساس اینکه چه کسی هستند دسترسی داشته باشند در دسترس است. مقاله ما درباره [مجوزهای سطح ردیف](row-permissions.html) نحوه محدود کردن ردیف‌ها بر اساس attribute کاربر یک شخص را پوشش داد. به عنوان مثال، یک کاربر، خانم Brown، ایجاد کردیم و به او دسترسی به ردیف‌ها در جداول `People` و `Orders` که با attribute `user_id` او match می‌کردند دادیم.

در این مقاله، نحوه محدود کردن ردیف‌ها *و ستون‌های* جدول Products که خانم Brown می‌تواند مشاهده کند را طی می‌کنیم. در این مورد، می‌خواهیم خانم Brown:

- فقط محصولاتی که برای آن‌ها سفارش داده است در جدول `Products` ببیند (امنیت سطح ردیف)
- فقط ستون‌های `Title`، `Category`، و `Price` را ببیند (و نه هیچ یک از ستون‌های دیگر).

> امنیت ردیف و ستون قبلاً data sandboxing نامیده می‌شد. همان ویژگی است، فقط اکنون نام توصیفی‌تری دارد.

## برنامه

ما می‌خواهیم:

1. یک مجموعه ایجاد کنیم که فقط adminها می‌توانند به آن دسترسی داشته باشند.
2. یک پرس‌وجوی SQL جدید ایجاد کنیم. جدول `Products` اطلاعاتی درباره کاربران شامل نمی‌شود. پس برای محدود کردن دسترسی خانم Brown به جدول `Products`، نیاز داریم بفهمیم خانم Brown کدام محصولات را سفارش داده است. یک پرس‌وجوی SQL می‌نویسیم که داده از جدول `Products` را با داده از جدول `Orders` ترکیب می‌کند. در ترکیب این جداول، یک نتیجه جدولی جدید ایجاد می‌کنیم که فقط ستون‌هایی که می‌خواهیم را شامل می‌شود.
3. view خانم Brown از جدول `Products` را با نمایش نتایج پرس‌وجوی ما به جای جدول اصلی محدود کنیم.
4. دسترسی خود را با تأیید اینکه خانم Brown چه داده‌ای می‌تواند ببیند تأیید کنیم.

## ایجاد یک مجموعه قابل دسترسی فقط توسط adminها

می‌خواهیم یک مجموعه برای ذخیره پرس‌وجوی SQL که برای محدود کردن view خانم Brown از جدول `Products` استفاده می‌کنیم ایجاد کنیم. بیایید آن را `Restricted view questions` بنامیم و مجوزها را روی این مجموعه تنظیم کنیم تا فقط adminها بتوانند سؤال‌های آن را curate کنند. به این ترتیب non-adminها قادر به تغییر سؤال و تغییر "ابعاد" view محدود شده نخواهند بود، مثلاً با شامل کردن ستون‌هایی که خانم Brown نباید بتواند ببیند. [مجوزهای مجموعه](collection-permissions.html) را برای یادگیری بیشتر درباره تنظیم مجوزها ببینید.

### ایجاد یک پرس‌وجوی SQL

از نوار بالا، روی **+ New** \> **SQL query** کلیک کنید تا [یک سؤال SQL بپرسید](../../../../docs/latest/questions/native-editor/writing-sql.html). [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس را انتخاب کنید.

در اینجا پرس‌وجویی که در ویرایشگر paste می‌کنیم:

```
SELECT DISTINCT PRODUCTS.TITLE,
                PRODUCTS.CATEGORY,
                PRODUCTS.PRICE
FROM PRODUCTS
     LEFT JOIN ORDERS ON ORDERS.PRODUCT_ID=PRODUCTS.ID
[[WHERE ORDERS.USER_ID IN ({{user_id}})]]

```

و در اینجا آنچه پرس‌وجو انجام می‌دهد:

- یک نتیجه با ستون‌هایی از جدول `Products` برمی‌گرداند: `Title`، `Category`، و `Price`.
- بررسی می‌کند محصولات distinct هستند، یعنی فقط یک ردیف برای هر محصول.
- به طور اختیاری این لیست را فیلتر می‌کند تا فقط محصولاتی که توسط کاربر با دسترسی محدود شده سفارش داده شده‌اند را نشان دهد.

براکت‌های مربع دوتایی `[[…]]` دور بند `WHERE` بند را اختیاری می‌کند. براکت‌های فرفری دوتایی `{{user_id}}` متغیر را تعریف می‌کنند. از این متغیر `{{user_id}}` هنگام استفاده از این سؤال برای محدود کردن دسترسی بر اساس کاربر استفاده می‌کنیم.

بیایید پرس‌وجو را اجرا کنیم، که این نتیجه را می‌دهد:

![پرس‌وجوی SQL برای ایجاد جدول جدید.](../../../images/column-permissions/sql-question.png)

حالا بیایید این سؤال را به عنوان `Products from Orders` ذخیره کنیم، آن را در مجموعه `Restricted view questions` که ایجاد کردیم ذخیره کنیم، و از افزودن سؤال به یک داشبورد opt out کنیم.

یک نکته برای تکرار در اینجا: ما فقط ستون‌هایی از جدول `Products` را انتخاب کردیم، چون پرس‌وجوی ما باید فقط ستون‌هایی از جدولی که می‌خواهیم محدود کنیم را برگرداند.

## محدود کردن view جدول Products با استفاده از سؤال ذخیره شده ما

حالا که سؤال `Products from Orders` خود را ایجاد کردیم، زمان محدود کردن جدول `Products` است. مجوزها را تنظیم می‌کنیم تا متابیس attribute `user_id` که به خانم Brown در مقاله درباره [مجوزهای ردیف](row-permissions.html) دادیم را در متغیر `{{user_id}}` در سؤال SQL ذخیره شده ما، `Products from Orders` insert کند.

روی **آیکون چرخ‌دنده** کلیک می‌کنیم، **Admin settings** را انتخاب می‌کنیم، و روی تب **Permissions** کلیک می‌کنیم. در سمت چپ، زیر **Databases**، روی `Sample Database` و `Products` کلیک می‌کنیم.

اگر از آموزش ما درباره [مجوزهای ردیف](row-permissions.html) عبور کرده‌اید، باید مجوزها برای گروه All users روی "View data: Blocked" و "Create queries: Query builder only" تنظیم شده باشد. اگر نه، نیاز دارید [آن editها را انجام دهید](row-permissions.html#revoke-access-from-all-users-group) قبل از تنظیم مجوزها برای گروه Customers.

از آنجایی که خانم Brown یک عضو گروه Customers است، و متابیس [مجوزهای داده را به گروه‌ها اعطا می‌کند](data-permissions.html)، نه افراد، دسترسی به جدول `Products` را برای گروه Customers محدود می‌کنیم. روی dropdown در ستون "View data" برای گروه "Customers" کلیک کنید و **Row and column security** را انتخاب کنید.

![تنظیم دسترسی به جدول Products برای گروه Customer.](../../../images/column-permissions/set-up-column-security.png)

وقتی متابیس می‌پرسد بخش **How do you want to filter this table?**، گزینه فیلتر دوم را انتخاب می‌کنیم: **Use a saved question to create a custom view for this table.**

به مجموعه admin-only `Restricted view questions` خود navigate می‌کنیم و سؤال خود، `Products from Orders` را انتخاب می‌کنیم. برای **PARAMETER OR VARIABLE**، متغیری که در پرس‌وجوی SQL خود شامل کردیم، `{{user_id}}` را انتخاب می‌کنیم. برای `USER ATTRIBUTE`، `user_id` را انتخاب می‌کنیم.

![پیکربندی امنیت ستون](../../../images/column-permissions/configure-row-column-security.png)

خلاصه ما اکنون می‌گوید:

- مردم در گروه Customers
- می‌توانند ردیف‌ها در سؤال `Products from Orders` را مشاهده کنند
- جایی که مقدار متغیر `user_id` برابر attribute `user_id` است.

بیایید روی **Save** در modal کلیک کنیم، سپس تغییرات خود را با کلیک روی **Save Changes** در نوار notice تأیید کنیم.

## بررسی تنظیمات به عنوان کاربر محدود شده

بیایید ببینیم جدول `Products` محدود شده ما از دیدگاه خانم Brown چگونه به نظر می‌رسد. یک پنجره مرورگر private باز کنید، به متابیس خود navigate کنید، و به عنوان خانم Brown وارد شوید.

وقتی جدول `Products` را با استفاده از [مرورگر داده](../../querying-and-dashboards/data-browser.html) باز می‌کنیم، می‌توانیم تأیید کنیم خانم Brown فقط می‌تواند لیستی از محصولاتی که سفارش داده است را ببیند، و فقط سه ستونی که در سؤال ذخیره شده `Products from Orders` خود شامل کردیم: `Title`، `Category`، و `Price`.

![جدول Products از صفحه اصلی متابیس فقط محصولاتی که خانم Brown سفارش داده است را نشان می‌دهد.](../../../images/column-permissions/products-table.png)

اگر خانم Brown سؤالی بپرسد که جدول `Products` را پرس‌وجو می‌کند، هنوز فقط نتایج بر اساس محصولاتی که سفارش داده است را خواهد دید. اگر دسترسی به سؤالی دارد که ستون‌هایی خارج از view سفارشی او شامل می‌شود، یک خطا خواهد دید.

## استفاده از یک سؤال SQL برای ایجاد یک view محدود شده سفارشی از یک جدول

در حالی که در تئوری *می‌توانید* از یک سؤال سازنده کوئری برای ایجاد یک view سفارشی از یک جدول استفاده کنید، باید همیشه از سؤال‌های SQL به جای آن استفاده کنید. در پشت صحنه، سؤال‌ها پرس‌وجوهای SQL بر اساس [فیلترها](../../../../docs/latest/questions/query-builder/filters.html)، [خلاصه‌ها](../../../../docs/latest/questions/query-builder/summarizing-and-grouping.html)، و [joinها](../../../../docs/latest/questions/query-builder/join.html) در سؤال ما ایجاد می‌کنند. وقتی یک view سفارشی بر اساس یک سؤال سازنده کوئری ایجاد می‌کنید، ممکن است متوجه محدوده کامل اطلاعاتی که به مردم دسترسی می‌دهید نشوید.

## خلاصه

هنگام محدود کردن دسترسی ردیف و ستون با سؤال‌ها:

- [از سؤال‌های SQL استفاده کنید](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table).
- مطمئن شوید سؤال SQL ذخیره شده شما فقط ستون‌هایی از جدولی که قصد محدود کردن آن را دارید برمی‌گرداند.
- سؤال‌هایی که برای ایجاد viewهای سفارشی استفاده می‌کنید را در یک مجموعه admin-only اختصاصی ذخیره کنید.

## مطالعه بیشتر

- [آموزش: مجوزهای سطح ردیف](row-permissions.html)
- [مستندات امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html)
- [نمای کلی مجوزها](../../../../docs/latest/permissions/introduction.html)
- [راهنمای مجوزهای داده](data-permissions.html)
- [کار با مجوزهای مجموعه](collection-permissions.html)
- [Single sign on با SAML](../../../../docs/latest/people-and-groups/authenticating-with-saml.html)
- [پیکربندی ظاهر متابیس](../../../../docs/latest/configuring-metabase/appearance.html)

[
      
        
        

      
      
        
        

      
    ](row-permissions.html)
[
      
        
        

      
      
        
        

      
    ](row-and-column-security-use-cases.html)
