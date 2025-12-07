---
title: "آموزش: تنظیم مجوزهای داده در متابیس"
description: "درباره نحوه handle کردن مجوزهای داده توسط متابیس با تنظیم مجوزها روی پایگاه داده نمونه شامل شده با متابیس بیاموزید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/data-permissions
  - /learn/organization/organization/data-permissions
  - /learn/permissions/data-permissions
toc:
  - id: "tutorial-setting-up-data-permissions-in-metabase"
    title: "آموزش: تنظیم مجوزهای داده در متابیس"
    level: 1
    href: "#tutorial-setting-up-data-permissions-in-metabase"
  - id: "introducing-data-permissions"
    title: "معرفی مجوزهای داده"
    level: 2
    href: "#introducing-data-permissions"
  - id: "configuring-query-permissions-for-the-all-users-group"
    title: "پیکربندی مجوزهای پرس‌وجو برای گروه All Users"
    level: 2
    href: "#configuring-query-permissions-for-the-all-users-group"
  - id: "configuring-view-data-permissions-for-the-all-users-group"
    title: "پیکربندی مجوزهای مشاهده داده برای گروه All Users"
    level: 2
    href: "#configuring-view-data-permissions-for-the-all-users-group"
  - id: "creating-user-groups"
    title: "ایجاد گروه‌های کاربر"
    level: 2
    href: "#creating-user-groups"
  - id: "reviewing-default-data-permissions"
    title: "بررسی مجوزهای داده پیش‌فرض"
    level: 2
    href: "#reviewing-default-data-permissions"
  - id: "configuring-query-permissions-for-user-groups"
    title: "پیکربندی مجوزهای پرس‌وجو برای گروه‌های کاربر"
    level: 2
    href: "#configuring-query-permissions-for-user-groups"
  - id: "configuring-permissions-for-a-user-in-multiple-groups"
    title: "پیکربندی مجوزها برای یک کاربر در چندین گروه"
    level: 2
    href: "#configuring-permissions-for-a-user-in-multiple-groups"
  - id: "more-data-permission-options"
    title: "گزینه‌های مجوز داده بیشتر"
    level: 2
    href: "#more-data-permission-options"
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

# آموزش: تنظیم مجوزهای داده در متابیس

درباره نحوه handle کردن مجوزهای داده توسط متابیس با تنظیم مجوزها روی پایگاه داده نمونه شامل شده با متابیس بیاموزید.

> به دنبال مستندات درباره مجوزهای داده هستید؟ [مستندات: مجوزهای داده](../../../../docs/latest/permissions/data.html) را ببینید.

مجوزهای داده مشخص می‌کنند چگونه [گروه‌های مختلف مردم](../../../../docs/latest/people-and-groups/managing.html#groups) می‌توانند با جداول و پایگاه‌های داده تعامل کنند.

برای هر پایگاه داده، schema، و جدول می‌توانید مشخص کنید:

- چه کسی می‌تواند نتایج سؤال‌ها را ببیند؛
- چه کسی می‌تواند سؤال‌های جدید ایجاد کند (و چگونه)؛
- چه کسی می‌تواند نتایج را دانلود کند؛
- چه کسی می‌تواند فراداده را edit کند.

در این مقاله، یک مثال از نحوه اعطای مجوز به مردم برای مشاهده نتایج سؤال‌ها و ایجاد سؤال‌های جدید بر اساس جداول از [پایگاه داده نمونه](../../../../glossary/sample-database.html) را طی می‌کنیم.

## معرفی مجوزهای داده

بیایید با navigate کردن به **Admin** \> **Permissions**، و انتخاب **Databases** \> **Sample Database** شروع کنیم. این ما را به صفحه مجوزهای داده در سطح پایگاه داده می‌برد. اگر می‌خواهید مجوزها را برای هر *جدول* در پایگاه داده نمونه پیکربندی کنید، می‌توانید روی نام جدول در سمت چپ کلیک کنید.

![صفحه مجوزهای داده برای پایگاه داده نمونه قبل از هر تغییری.](../../../images/guide-to-data-permissions/automatic-data-settings.png)

[مجوزهای داده باید برای گروه‌ها پیکربندی شوند](strategy.html#how-to-approach-permissions). متابیس با دو گروه پیش‌فرض ship می‌شود: Administrators و All Users. دو گروه نمونه جدید به نام Canoes و Sailboats ایجاد می‌کنیم، و مجوزهای داده را تنظیم می‌کنیم تا:

- تنظیمات مجوز پیش‌فرض برای All Users را تنظیم کنیم: به طور پیش‌فرض همه کاربران قادر به ایجاد سؤال‌های جدید نخواهند بود
- به گروه Canoes مجوز ایجاد سؤال در سازنده کوئری بر اساس جدول `Orders` فقط بدهیم.
- به گروه Sailboats مجوز ایجاد سؤال در سازنده کوئری بر اساس جداول `People` و `Products` فقط بدهیم.

## پیکربندی مجوزهای پرس‌وجو برای گروه All Users

ابتدا، تأیید می‌کنیم که مجوزهای **Create queries** به پایگاه داده برای All Users، چون متابیس *permissiveترین* سطح دسترسی را در همه گروه‌هایی که کسی به آن‌ها تعلق دارد اعطا می‌کند.

نمی‌توانید هیچ کسی را از گروه All Users حذف کنید، پس اگر به All Users مجوزهای **Query builder and native** به پایگاه داده نمونه بدهید، آن همیشه permissiveترین تنظیمات برای همه کسانی که از متابیس شما استفاده می‌کنند خواهد بود، صرف نظر از هر گروه دیگری که مردم را در آن قرار می‌دهید.

1. به **Admin** \> **Permissions** \> **Database** \> **Sample Database** بروید.
2. روی منوی dropdown در ردیف **All Users** و ستون **Create queries** کلیک کنید.
3. تأیید کنید روی **No** تنظیم شده است (یا آن را روی "No" تنظیم کنید).
4. روی **Save changes** در banner که در بالا ظاهر می‌شود کلیک کنید.

![انتخاب مجوزهای پرس‌وجو No برای گروه All Users به پایگاه داده نمونه.](../../../images/guide-to-data-permissions/revoke-db-access.png)

انتخاب **No** برای All Users به پایگاه داده نمونه:

- از دیدن هر داده از پایگاه داده نمونه توسط All Users در [مرورگر داده](../../querying-and-dashboards/data-browser.html) جلوگیری می‌کند.
- از ایجاد سؤال توسط All Users (هم با استفاده از سازنده کوئری و هم SQL) از داده پایگاه داده نمونه جلوگیری می‌کند.

## پیکربندی مجوزهای مشاهده داده برای گروه All Users

گروه All Users **View data** را روی "Can view" برای پایگاه داده نمونه تنظیم شده دارد. "Can view" به معنای این است که All Users قادر به *مشاهده نتایج* برای سؤال‌ها و داشبورد در مجموعه‌هایی که با [مجوزهای مجموعه](collection-permissions.html) برای گروه All Users شما match می‌کنند خواهند بود. اگر مجوزهای پرس‌وجو را revoke کردید، All Users قادر به دیدن داده زیربنایی نخواهند بود.

این مجوزها را همانطور که هستند نگه می‌داریم.

## ایجاد گروه‌های کاربر

بیایید دو گروه جدید ایجاد کنیم، و آن‌ها را Canoes و Sailboats بنامیم.

1. به **Admin** \> **People** بروید.
2. تب **Groups** را انتخاب کنید.
3. روی **Create a group** کلیک کنید و آن را "Canoes" نام‌گذاری کنید.

تکرار کنید تا یک گروه "Sailboats" ایجاد کنید.
برای جزئیات بیشتر، [ایجاد گروه‌ها](../../../../docs/latest/people-and-groups/managing.html#groups) را ببینید.

## بررسی مجوزهای داده پیش‌فرض

به **Admin** \> **Permissions** \> **Databases** بروید و **Sample Database** را انتخاب کنید تا گروه‌های جدید ما را ببینید:

![صفحه مجوزهای داده با گروه‌های Canoes و Sailboats تازه اضافه شده ما.](../../../images/guide-to-data-permissions/data-perm-with-groups.png)

گروه‌های جدید به طور پیش‌فرض **No** مجوز برای ایجاد پرس‌وجو دارند چون All Users **No** مجوز دارند. این به ما اجازه می‌دهد به طور انتخابی مجوزها را به هر گروه اضافه کنیم.

برای گروه‌های Canoes و Sailboats، می‌خواهیم:

- از مشاهده هر جدول پایگاه داده نمونه توسط مردم در Canoes و Sailboats در [مرورگر داده](../../getting-started/find-data.html#browse-databases-and-tables) جلوگیری کنیم.
- از استفاده از سازنده کوئری برای ایجاد سؤال روی جداول پایگاه داده نمونه توسط مردم در Canoes و Sailboats جلوگیری کنیم.
- ادامه دهیم به اجازه دادن به مردم در Canoes و Sailboats برای مشاهده نتایج سؤال‌هایی که روی جداول از پایگاه داده نمونه ساخته شده‌اند، تا زمانی که این سؤال‌ها در مجموعه‌هایی ذخیره شده‌اند که با [مجوزهای مجموعه](collection-permissions.html) یک گروه معین match می‌کنند.

## پیکربندی مجوزهای پرس‌وجو برای گروه‌های کاربر

برای اعطای مجوز به گروه Canoes برای ایجاد سؤال در سازنده کوئری بر اساس جدول `Orders` فقط:

1. به **Admin** \> **Permissions** \> **Groups** بروید.
2. گروه **Canoes** را انتخاب کنید.
3. روی **Sample Database** کلیک کنید.
4. در ردیف **Orders** در ستون **Create queries**، **Query builder only** را از منوی dropdown انتخاب کنید.
5. روی **Save Changes** کلیک کنید.
6. در modal که ظاهر می‌شود، اثرات تغییرات مجوز خود را بررسی کنید: گروه Canoes مجوزهای ایجاد پرس‌وجوی granular برای پایگاه داده نمونه خواهد داشت. روی **Change** کلیک کنید تا تأیید کنید.

![اعطای مجوز به گروه Canoes برای دسترسی به جدول Orders.](../../../images/guide-to-data-permissions/grant-table-access.png)

متوجه می‌شوید که فقط می‌توانید مجوزهای **Query builder only** را روی یک جدول انتخاب کنید، اما نه **Query builder and native**. اگر می‌خواهید به مردم اجازه دهید پرس‌وجوهای native ایجاد کنند (مثلاً، در SQL)، نیاز دارید آن را در سطح پایگاه داده مشخص کنید، نه در سطح جدول. متابیس SQL شما را parse نمی‌کند پس نمی‌داند کدام جداول در یک پرس‌وجو استفاده می‌شوند، و بنابراین نمی‌تواند دسترسی به جداول خاص را محدود کند.

اگر به مجوزهای پایگاه داده نمونه برای گروه Canoes برگردید، به صفحه مجوزهای داده در سطح گروه برده می‌شوید. از آنجا، می‌بینید که متابیس به طور خودکار مجوز زرد **Granular** را زیر ستون **Create queries** برای پایگاه داده نمونه populate می‌کند. مجوز **Granular** نشان می‌دهد که گروه Canoes اکنون به برخی، اما نه همه جداول در پایگاه داده نمونه دسترسی دارد.

![گروه Canoes اکنون دسترسی granular به پایگاه داده نمونه دارد.](../../../images/guide-to-data-permissions/canoes-granular-access.png)

بیایید مجموعه دیگری از مجوزهای داده را برای گروه‌های Sailboats پیکربندی کنیم تا به Sailboats مجوزهای **Query builder only** به جداول `People` و `Products` در پایگاه داده نمونه بدهیم:

![صفحه مجوزهای داده بعد از اعطای دسترسی به جداول People و Products به گروه Sailboats.](../../../images/guide-to-data-permissions/two-table-access.png)

در اینجا آنچه مجوزهای داده فعلی ما انجام می‌دهند:

**View data** برای یک جدول:

| Group \ Table | All Users | Canoes | Sailboats |
| --- | --- | --- | --- |
| Orders |  |  |  |
| People |  |  |  |
| Product |  |  |  |

**Create queries** در سازنده کوئری بر اساس یک جدول:

| Table \ Group | All Users | Canoes | Sailboats |
| --- | --- | --- | --- |
| Orders |  |  |  |
| People |  |  |  |
| Product |  |  |  |

## پیکربندی مجوزها برای یک کاربر در چندین گروه

فرض کنید آقای Captain به هر دو گروه Canoes و Sailboats تعلق دارد.

او سه مجموعه مجوز **Create queries** دارد که از سه گروه مختلف اعمال می‌شوند:

- مجوزهای پرس‌وجو **No** به پایگاه داده نمونه از گروه All Users.
- مجوزهای **Query builder only** به جدول `Orders` از گروه Canoes.
- مجوزهای **Query builder only** به جداول `People` و `Products` از گروه Sailboats.

از آنجایی که متابیس permissiveترین تنظیمات را در همه گروه‌ها اعمال می‌کند، آقای Captain مجوزهای "Create queries: Query builder only" به جداول `Orders`، `People`، و `Products` خواهد داشت. مجوزهای "Query builder only" به این سه جدول به معنای این است که آقای Captain قادر خواهد بود:

- جداول `Orders`، `People`، و `Products` را در **مرورگر داده** ببیند
- سؤال‌ها را در سازنده کوئری با استفاده از هر ترکیبی از `Orders`، `People`، یا `Products` ایجاد کند.
- drill down کند و سؤال‌های سازنده کوئری دیگران که از `Orders`، `People`، یا `Products` استفاده می‌کنند را manipulate کند، تا زمانی که آن سؤال‌ها در مجموعه‌هایی ذخیره شده‌اند که با [مجوزهای مجموعه](collection-permissions.html) او match می‌کنند.

آقای Captain به هیچ گروهی با مجوزهای Create queries به جدول `Reviews` یا پایگاه داده نمونه تعلق ندارد، که:

- از ایجاد سؤال با استفاده از جدول `Reviews` توسط او جلوگیری می‌کند.
- از تعامل با ویرایشگر پرس‌وجوی native به طور کامل توسط او جلوگیری می‌کند (مثلاً، مشاهده، editing، یا نوشتن پرس‌وجوهای SQL).

از آنجایی که آقای Captain همچنین بخشی از گروه All Users با مجوزهای **Can view** به پایگاه داده نمونه است، هنوز قادر به مشاهده نتایج سؤال‌هایی که با استفاده از جدول `Reviews` یا ویرایشگر پرس‌وجوی native ساخته شده‌اند خواهد بود، تا زمانی که مجوزهای مجموعه درست را داشته باشد.

## گزینه‌های مجوز داده بیشتر

- [دانلود نتایج](../../../../docs/latest/permissions/data.html#download-results-permissions) \*.
- [Block](../../../../docs/latest/permissions/data.html#blocked-view-data-permission) \*.
- مدیریت مدل داده\*. [Editing metadata](../../../../docs/latest/data-modeling/metadata-editing.html) را ببینید.
- مدیریت پایگاه داده\*. [مدیریت پایگاه‌های داده](../../../../docs/latest/databases/connecting.html) را ببینید (اگرچه فقط adminها می‌توانند پایگاه‌های داده را حذف کنند).

*\* فقط در [طرح‌های Pro و Enterprise](../../../../pricing/index.html) در دسترس است.*

## مطالعه بیشتر

- [مستندات مجوزهای داده](../../../../docs/latest/permissions/data.html)
- [آموزش مجوزهای مجموعه](collection-permissions.html)
- [مستندات مجوزهای مجموعه](../../../../docs/latest/permissions/collections.html)
- [عیب‌یابی مجوزها](../../../../docs/latest/troubleshooting-guide/permissions.html)
- [امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html)

[
      
        
        

      
      
        
        

      
    ](strategy.html)
[
      
        
        

      
      
        
        

      
    ](collection-permissions.html)
