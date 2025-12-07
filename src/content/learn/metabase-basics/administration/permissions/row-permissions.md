---
title: "آموزش: مجوزهای سطح ردیف در متابیس"
description: "نحوه تنظیم مجوزهای سطح ردیف بر اساس attributeهای کاربر مردم را بیاموزید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/row-permissions
  - /learn/metabase-basics/administration/permissions/data-sandboxing-row-permissions
  - /learn/permissions/data-sandboxing-row-permissions
toc:
  - id: "tutorial-row-level-permissions-in-metabase"
    title: "آموزش: مجوزهای سطح ردیف در متابیس"
    level: 1
    href: "#tutorial-row-level-permissions-in-metabase"
  - id: "before-you-set-up-row-security"
    title: "قبل از تنظیم امنیت ردیف"
    level: 2
    href: "#before-you-set-up-row-security"
  - id: "our-scenario"
    title: "سناریوی ما"
    level: 2
    href: "#our-scenario"
  - id: "creating-a-customer-group"
    title: "ایجاد یک گروه مشتری"
    level: 2
    href: "#creating-a-customer-group"
  - id: "creating-an-account-and-adding-an-attribute"
    title: "ایجاد یک حساب و افزودن یک attribute"
    level: 2
    href: "#creating-an-account-and-adding-an-attribute"
  - id: "restricting-row-access-for-a-group"
    title: "محدود کردن دسترسی ردیف برای یک گروه"
    level: 2
    href: "#restricting-row-access-for-a-group"
  - id: "revoke-access-from-all-users-group"
    title: "Revoke کردن دسترسی از گروه All Users"
    level: 2
    href: "#revoke-access-from-all-users-group"
  - id: "check-settings-as-ms-brown-sees-the-world"
    title: "بررسی تنظیمات همانطور که خانم Brown دنیا را می‌بیند"
    level: 2
    href: "#check-settings-as-ms-brown-sees-the-world"
  - id: "limitations-of-row-level-security-with-user-attributes"
    title: "محدودیت‌های امنیت سطح ردیف با attributeهای کاربر"
    level: 2
    href: "#limitations-of-row-level-security-with-user-attributes"
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

# آموزش: مجوزهای سطح ردیف در متابیس

نحوه تنظیم مجوزهای سطح ردیف بر اساس attributeهای کاربر مردم را بیاموزید.

> به دنبال مستندات درباره امنیت سطح ردیف هستید؟ [مستندات: امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html) را ببینید.

[طرح‌های Pro و Enterprise](../../../../pricing/index.html) متابیس شامل [امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html) است که کنترل granular روی ردیف‌ها و ستون‌هایی که مردم می‌توانند در سؤال‌ها ببینند و استفاده کنند به شما می‌دهد.

در این مقاله، یک مثال از تنظیم [امنیت سطح ردیف](../../../../docs/latest/permissions/row-and-column-security.html#row-level-security-filter-by-a-column-in-the-table) با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس را طی می‌کنیم. برای مجوزهای سطح ستون، [امنیت سطح ستون](column-permissions.html) را ببینید.

> امنیت ردیف و ستون قبلاً data sandboxing نامیده می‌شد. همان ویژگی است، فقط اکنون نام توصیفی‌تری دارد.

## قبل از تنظیم امنیت ردیف

باید [داده برنامه متابیس خود](../../../../docs/latest/installation-and-operation/backing-up-metabase-application-data.html) را backup کنید. علاوه بر این، ممکن است بخواهید [راهنمای مجوزهای داده](data-permissions.html)، [راهنمای مجوزهای مجموعه](collection-permissions.html)، و [نمای کلی مجوزهای ما](../../../../docs/latest/permissions/introduction.html) را بررسی کنید تا درک بهتری از نحوه fit شدن امنیت ردیف و ستون با سیستم مجوزهای متابیس داشته باشید.

## سناریوی ما

هدف ما اطمینان از این است که یک مشتری، خانم Brown، فقط قادر به دیدن ردیف‌های جدول مرتبط با حساب او باشد.

## ایجاد یک گروه مشتری

متابیس از گروه‌ها برای سازماندهی مجوزها استفاده می‌کند، پس ابتدا نیاز به [ایجاد یک گروه](../../../../docs/latest/people-and-groups/managing.html#groups) داریم، که آن را Customers می‌نامیم. برای انجام این کار، روی **آیکون چرخ‌دنده** در navigation sidebar کلیک کنید و \> **Admin settings** \> **People** \> **Groups** را انتخاب کنید. سپس **Create a Group** را انتخاب کنید.

![صفحه Groups بعد از ایجاد گروه Customers ما.](../../../images/row-permissions/customer-group.png)

## ایجاد یک حساب و افزودن یک attribute

قبل از اینکه بتوانیم امنیت سطح ردیف را برای گروه Customers تنظیم کنیم، نیاز به [ایجاد یک حساب](../../../../docs/latest/people-and-groups/managing.html#creating-an-account) برای خانم Brown داریم، و یک attribute به حساب او اضافه کنیم. از **Admin settings** \> تب **People**، روی **Invite Someone** کلیک می‌کنیم، فیلدهای نام و ایمیل را پر می‌کنیم، و او را به گروه Customers اضافه می‌کنیم.

و در اینجا بخش مهم است: یک attribute به شخص جدید ما، خانم Brown، با یک کلید `user_id` و یک مقدار `20` اضافه می‌کنیم.

![افزودن خانم Brown به گروه Customers، و دادن یک attribute به او: user_id: 20.](../../../images/row-permissions/add-someone-with-attribute.png)

هیچ چیز جادویی درباره کلید `user_id` وجود ندارد: فقط یک متغیر است. می‌توانیم attributeها را با هر جفت key-value که انتخاب می‌کنیم اضافه کنیم. آنچه می‌خواهیم استفاده از یک کلید است که با یک ستون مطابقت دارد، و یک مقدار که با مقادیر ردیف مطابقت دارد، برای جدول مرتبط که می‌خواهیم محدود کنیم. ایده این است که این attribute را به یک ستون در یک جدول link می‌کنیم تا تعیین کنیم خانم Brown کدام ردیف‌ها را می‌تواند مشاهده کند.

ما این attribute را به صورت دستی برای این walkthrough تنظیم می‌کنیم، اما می‌توانیم از سرویس‌های single sign-on (SSO)، مثل [SAML](../../../../docs/latest/people-and-groups/authenticating-with-saml.html) برای assign و همگام‌سازی programmatic attributeها به کاربران استفاده کنیم.

## محدود کردن دسترسی ردیف برای یک گروه

حالا که گروه خود را داریم، و حداقل یک عضو از آن گروه با یک attribute (خانم Brown)، آماده هستیم به [صفحه مجوزهای داده](data-permissions.html) برویم تا امنیت سطح ردیف را برای پایگاه داده نمونه تنظیم کنیم.

در sidebar سمت چپ، روی **Databases** و **Sample Database** کلیک می‌کنیم. برای محدود کردن دسترسی View data به جدول `Orders` برای گروه Customer، همه کاری که باید انجام دهیم کلیک روی جدول `Orders`، navigate به ردیف Customers و در ستون **View data**، **Row and column security** را از منوی dropdown انتخاب کنیم.

![محدود کردن دسترسی ردیف برای گروه Customer برای جدول Orders.](../../../images/row-permissions/restrict-row-access.png)

اگر مجوزها را برای گروه **All Users** edit نکردید، یک پیام هشدار می‌بینید که گروه All Users دسترسی بیشتر دارد.

![محدود کردن دسترسی ردیف برای گروه Customer برای جدول Orders.](../../../images/row-permissions/all-users-warning.png)

این به چه معناست: اگر یک شخص در چندین گروه کاربر باشد، متابیس **permissiveترین** دسترسی را برای آن‌ها انتخاب می‌کند. چون همه مردم استفاده‌کننده از متابیس شما همیشه در گروه All Users هستند، این به معنای این است که اگر گروه All Users دسترسی permissiveتر داشته باشد (مثلاً دسترسی unrestricted به ردیف‌ها)، این امنیت سطح ردیفی که می‌خواهیم تنظیم کنیم را override می‌کند. پس بعد از اینکه تنظیم امنیت سطح ردیف را تمام کردیم، نیاز به تغییر مجوزها برای گروه All Users داریم. برای حالا، روی **Revoke access** در هشدار کلیک کنید. این دسترسی جدول را فقط برای گروه در حال حاضر انتخاب شده revoke می‌کند.

بعد، متابیس می‌پرسد آیا می‌خواهید مجوزهای دسترسی برای این **پایگاه داده** را تغییر دهید.

![alt text](../../../images/row-permissions/change-access-for-db.png)

به یاد داشته باشید که ما فقط می‌خواهیم امنیت سطح ردیف را فقط برای جدول Orders تنظیم کنیم. دلیل اینکه متابیس درباره کل پایگاه داده می‌پرسد این است که گروه Customers ما در حال حاضر مجوز نوشتن پرس‌وجوهای native (SQL) دارد. اما متابیس SQL که مردم می‌نویسند را parse نمی‌کند، پس نمی‌داند کدام جداول پرس‌وجو می‌شوند — و بنابراین نمی‌داند آیا یک شخص با دسترسی ردیف محدود شده سعی می‌کند جدول محدود شده را پرس‌وجو کند. این به معنای این است که یک شخص با محدودیت‌های سطح ردیف روی هر جدولی نمی‌تواند اجازه نوشتن پرس‌وجوهای SQL داشته باشد، پس متابیس به شما هشدار می‌دهد که مجوزهای پرس‌وجوی SQL را حذف می‌کند. روی **Change** کلیک کنید تا مجوزهای پرس‌وجوی native را برای پایگاه داده نمونه از گروه Customers حذف کنید.

در نهایت، متابیس از شما می‌پرسد "چگونه می‌خواهید این جدول را برای کاربران در این گروه فیلتر کنید؟" و دو گزینه ارائه می‌دهد:

- فیلتر بر اساس یک ستون در جدول.
- استفاده از یک سؤال ذخیره شده برای ایجاد یک view سفارشی برای این جدول.

برای حالا، تنظیمات را به عنوان **Filter by a column in the table**—استفاده از یک سؤال ذخیره شده یک ویژگی پیشرفته‌تر است، و [اینجا](data-permissions.html) درباره آن بحث می‌کنیم.

![Configure RLS.](../../../images/row-permissions/configure-rls.png)

برای ستون، ستون `User ID` جدول `Orders` را انتخاب می‌کنیم، و آن را به attribute `user_id` از منوی dropdown attributeهایی که به مردم assign کرده‌ایم متصل می‌کنیم.

متابیس یک خلاصه از تغییراتی که انجام داده‌ایم ارائه می‌دهد: "کاربران در Customers می‌توانند ردیف‌ها در جدول `Orders` را مشاهده کنند جایی که فیلد `User ID` برابر `user_id` است." بیایید تغییرات خود را ذخیره کنیم و فرآیند را برای جدول `People` تکرار کنیم.

- مجوزهای "Row and column security" را برای گروه Customers برای جدول `People` انتخاب کنید.
- گزینه **Filter by a column** را انتخاب کنید.
- ستون `ID` جدول `People` را انتخاب کنید و آن را به attribute `user_id` متصل کنید.
- خلاصه را بررسی کنید و save را کلیک کنید.

در نهایت، نیاز داریم روی دکمه **Save Changes** کلیک کنیم تا تغییرات خود را تأیید کنیم.

## Revoke کردن دسترسی از گروه All Users

وقتی امنیت سطح ردیف را تنظیم می‌کردیم، متابیس به ما هشدار داد که گروه All Users سطح دسترسی بالاتری دارد، که قوانینی که برای Customers تنظیم کردیم را override می‌کند. پس نیاز داریم دسترسی را از گروه All Users revoke کنیم.

به خاطر داشته باشید که این به معنای این است که همه کسانی که در گروه‌های Customers یا Admin *نیستند* دسترسی به جداول را از دست می‌دهند، پس اگر مردم بیشتری در متابیس خود دارید، باید گروه‌ها و مجوزها را برای آن‌ها قبل از revoke کردن دسترسی از All Users تنظیم کنید.

به تنظیمات مجوز برای پایگاه داده نمونه بروید (درست مثل کاری که برای Customers انجام دادید) و مجوزهای **View data** را روی **Blocked** تنظیم کنید. توجه کنید که این همچنین هر مجوز پرس‌وجویی را از گروه حذف می‌کند.

## بررسی تنظیمات همانطور که خانم Brown دنیا را می‌بیند

حالا بیایید تنظیمات خود را تست کنیم تا تأیید کنیم مشتری ما، خانم Brown، فقط می‌تواند سفارشات متصل به user ID او را ببیند. instance متابیس خود را در یک پنجره مرورگر incognito باز می‌کنیم و به عنوان خانم Brown وارد می‌شویم. وقتی به جدول `Orders` navigate می‌کنیم، خانم Brown فقط سفارشاتی که گذاشته است (User ID 20) را خواهد دید.

![خانم Brown فقط سفارشات مرتبط با ID او را خواهد دید: 20.](../../../images/row-permissions/orders-user-20.png)

با امنیت سطح ردیف، می‌توانیم یک سؤال یا داشبورد واحد ایجاد کنیم، و مطمئن باشیم که مردم با دسترسی ردیف محدود شده به آن داده فقط قادر به دیدن داده مرتبط با حساب خود خواهند بود.

اگر امنیت سطح ردیف را با [embedding](../../../../docs/latest/embedding/embedded-analytics-js.html) ترکیب کنیم، می‌توانیم این داشبوردها را در برنامه خود embed کنیم، و از SSO برای pass کردن attributeها به instance متابیس embedded استفاده کنیم، که به ما اجازه می‌دهد کدام داده مردم در سؤال‌ها و داشبوردهای embedded در برنامه ما می‌بینند را محدود کنیم. برای یادگیری بیشتر، [نحوه embed کردن متابیس در برنامه خود برای تحویل تحلیل‌های multi-tenant، self-service](../../embedding/multi-tenant-self-service-analytics.html) را ببینید.

## محدودیت‌های امنیت سطح ردیف با attributeهای کاربر

- یک کاربر فقط می‌تواند یک پیکربندی امنیت ردیف و ستون برای هر جدول در هر جدول داشته باشد، پس فقط کاربران را به یک گروه واحد که دسترسی ردیف یا ستون محدود شده دارد اضافه کنید.
- اگر یک گروه دسترسی پرس‌وجوی SQL به یک پایگاه داده دارد، policy امنیت سطح ردیف نمی‌تواند از مشاهده داده در آن جداول توسط مردم در آن گروه جلوگیری کند.
- به طور گسترش، اگر مردم در آن گروه دسترسی به سؤال‌های نوشته شده در SQL دارند، آن سؤال‌ها از policyهای امنیت سطح ردیف آگاه نیستند، و همه نتایج را به مردم در آن گروه نشان می‌دهند، نه فقط نتایج محدود شده توسط policyهای امنیت سطح ردیف.

درباره [محدودیت‌های امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html#limitations) بیشتر بیاموزید.

## مطالعه بیشتر

- [مرجع امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html).
- [امنیت سطح ستون](column-permissions.html).

[
      
        
        

      
      
        
        

      
    ](collection-permissions.html)
[
      
        
        

      
      
        
        

      
    ](column-permissions.html)
