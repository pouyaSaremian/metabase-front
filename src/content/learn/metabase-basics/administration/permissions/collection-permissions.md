---
title: "آموزش: کار با مجوزهای مجموعه در متابیس"
description: "مجموعه‌ها را با مجوزها تنظیم کنید تا به مردم کمک کنید کار مرتبط با آن‌ها را سازماندهی و به اشتراک بگذارند."
redirect_from:
  - /learn/metabase-basics/administration/permissions/collection-permissions
  - /learn/permissions/collection-permissions
toc:
  - id: "tutorial-working-with-collection-permissions-in-metabase"
    title: "آموزش: کار با مجوزهای مجموعه در متابیس"
    level: 1
    href: "#tutorial-working-with-collection-permissions-in-metabase"
  - id: "reviewing-the-default-collection-permissions"
    title: "بررسی مجوزهای مجموعه پیش‌فرض"
    level: 2
    href: "#reviewing-the-default-collection-permissions"
  - id: "configuring-permissions-to-our-analytics"
    title: "پیکربندی مجوزها به \"Our analytics\""
    level: 2
    href: "#configuring-permissions-to-our-analytics"
  - id: "creating-new-groups-and-collections"
    title: "ایجاد گروه‌ها و مجموعه‌های جدید"
    level: 2
    href: "#creating-new-groups-and-collections"
  - id: "setting-collection-permissions"
    title: "تنظیم مجوزهای مجموعه"
    level: 2
    href: "#setting-collection-permissions"
  - id: "how-collection-permissions-interact-with-data-permissions"
    title: "نحوه تعامل مجوزهای مجموعه با مجوزهای داده"
    level: 2
    href: "#how-collection-permissions-interact-with-data-permissions"
  - id: "how-permissions-apply-to-dashboards-with-questions-from-different-collections"
    title: "نحوه اعمال مجوزها به داشبوردها با سؤال‌ها از مجموعه‌های مختلف"
    level: 2
    href: "#how-permissions-apply-to-dashboards-with-questions-from-different-collections"
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

# آموزش: کار با مجوزهای مجموعه در متابیس

مجموعه‌ها را با مجوزها تنظیم کنید تا به مردم کمک کنید کار مرتبط با آن‌ها را سازماندهی و به اشتراک بگذارند.

> به دنبال مستندات درباره مجوزهای مجموعه هستید؟ [مستندات: مجوزهای مجموعه](../../../../docs/latest/permissions/collections.html) را ببینید.

مجموعه‌ها سؤال‌ها، داشبوردها، و مدل‌ها را منظم و آسان برای پیدا کردن نگه می‌دارند. مفید است مجموعه‌ها را به عنوان پوشه‌هایی که کار ما را ذخیره می‌کنند فکر کنیم. مجوزهای مجموعه به [گروه‌های مردم](strategy.html#how-to-approach-permissions) دسترسی به:

- مشاهده یا edit کردن سؤال‌ها، داشبوردها، یا مدل‌های ذخیره شده در یک مجموعه.
- Edit کردن جزئیات مجموعه، مثل نام یک مجموعه، یا جایی که ذخیره شده است.

در این آموزش، مجموعه‌هایی برای یک شرکت با تیم‌های Canoes و Sailboats ایجاد می‌کنیم، و مجوزهای مجموعه را تنظیم می‌کنیم تا:

- همه در شرکت می‌توانند مشاهده کنند، اما edit نکنند، کار ذخیره شده در مجموعه سطح بالا برای شرکت (در متابیس، **Our analytics** نامیده می‌شود — ممکن است این را به عنوان یک دایرکتوری root یا یک پوشه parent فکر کنید).
- مردم در تیم Canoes قادر به ذخیره، مشاهده، و edit کردن کاری که بین اعضای تیم در مجموعه Canoes به اشتراک گذاشته شده است خواهند بود. مردم در تیم Sailboats به مجموعه Sailboats خود دسترسی خواهند داشت.
- تیم Canoes دسترسی view-only به کار ذخیره شده در مجموعه Sailboats دریافت می‌کند. تیم Sailboats دسترسی view-only به مجموعه Canoes دریافت می‌کند.

## بررسی مجوزهای مجموعه پیش‌فرض

در یک متابیس تازه، brand new:

1. روی **آیکون چرخ‌دنده** کلیک کنید و **Admin settings** \> **Permissions** \> **Collections** را انتخاب کنید.
2. روی **Our analytics** کلیک کنید تا به صفحه مجوزهای مجموعه برای مجموعه root بروید.

از صفحه **Permissions for Our analytics**، می‌یابید که **Collection access** روی **Curate** برای گروه‌های پیش‌فرض Administrators و All Users تنظیم شده است.

All Users شامل همه کسانی است که به متابیس شما اضافه شده‌اند، و مجوز **Curate** به یک گروه اجازه می‌دهد یک مجموعه را مشاهده و edit کند. پس، مجوزهای مجموعه پیش‌فرض متابیس به همه در Boats اجازه می‌دهد کار ذخیره شده در **Our analytics** را مشاهده و edit کنند.

## پیکربندی مجوزها به "Our analytics"

ما می‌خواهیم دسترسی به **Our analytics** را revoke کنیم، چون متابیس *permissiveترین* سطح دسترسی را در همه گروه‌هایی که کسی به آن‌ها تعلق دارد اعطا می‌کند.

نمی‌توانید مردم را از گروه All Users حذف کنید، پس اگر به All Users مجوزهای **Curate** به **Our analytics** بدهید، آن همیشه permissiveترین تنظیمات برای همه کسانی که از متابیس شما استفاده می‌کنند خواهد بود، صرف نظر از هر گروه دیگری که مردم را در آن قرار می‌دهید.

1. به **Admin settings** \> **Permissions** \> **Collections** \> **Our analytics** بروید.
2. روی منوی dropdown در ردیف **All Users** و ستون **Collection access** کلیک کنید..
3. **No access** را انتخاب کنید. **Also change sub-collections** را toggle کنید تا این مجوزها به همه زیرمجموعه‌های nested زیر **Our analytics** اعمال شوند.

![Revoke کردن دسترسی All Users به مجموعه Our analytics و زیرمجموعه‌های آن.](../../../images/guide-to-collection-permissions/no-access-our-analytics.png)

## ایجاد گروه‌ها و مجموعه‌های جدید

بعد، گروه‌هایی برای match کردن تیم‌های Canoes و Sailboats ایجاد می‌کنیم. به **Admin settings** \> **People** \> **Groups** \> [Create a group](../../../../docs/latest/people-and-groups/managing.html#groups) بروید، و گروه را "Canoes" بنامید.

برای ایجاد یک مجموعه جدید، به صفحه اصلی متابیس می‌رویم و روی **+ New** \> **Collection** کلیک می‌کنیم. دو مجموعه به نام [گروه‌های جدید ما](strategy.html#org-chart-based-permissions) ایجاد می‌کنیم، و هر یک از آن مجموعه‌ها را درون **Our analytics** ذخیره می‌کنیم.

## تنظیم مجوزهای مجموعه

ابتدا مجوزهای مجموعه را برای مجموعه Canoes تنظیم می‌کنیم، تا:

- گروه Canoes بتواند سؤال‌ها، داشبوردها، و مدل‌های ذخیره شده در مجموعه Canoes را مشاهده و edit کند.
- گروه Canoes بتواند مجموعه Canoes را move، re-name، یا archive کند.
- گروه Sailboats فقط بتواند کار ذخیره شده در مجموعه Canoes را مشاهده کند.

می‌توانید به **Admin settings** برگردید و به صفحه مجوزهای مجموعه برای هر مجموعه بروید، یا می‌توانید مجوزها را مستقیماً از صفحه اصلی متابیس تنظیم کنید.

1. روی مجموعه Canoes در sidebar کلیک کنید.
2. روی **آیکون قفل** کلیک کنید تا یک modal مجوزهای مجموعه باز شود.
3. **Curate** را از منوی dropdown برای ردیف **Canoes** و ستون **Collection access** انتخاب کنید.
4. **View** را از منوی dropdown برای ردیف **Sailboats** و ستون **Collection access** انتخاب کنید.
5. روی **Save** کلیک کنید.

![اعطای مجوزهای مختلف به مجموعه Canoes.](../../../images/guide-to-collection-permissions/collection-permissions-modal.png)

برای تنظیم مجوزها برای مجموعه **Sailboats** تا گروه Sailboats دسترسی **Curate** داشته باشد، اما گروه Canoes دسترسی view-only داشته باشد:

1. روی مجموعه **Sailboats** در sidebar کلیک کنید.
2. روی **آیکون قفل** کلیک کنید تا یک modal مجوزهای مجموعه باز شود.
3. **Curate** را از منوی dropdown برای ردیف **Sailboats** و ستون **Collection access** انتخاب کنید.
4. **View** را از منوی dropdown برای ردیف **Canoes** و ستون **Collection access** انتخاب کنید.
5. روی **Save** کلیک کنید.

## نحوه تعامل مجوزهای مجموعه با مجوزهای داده

| مجوزهای مجموعه | مجوزهای داده |
| --- | --- |
| مشاهده نتایج یک سؤال، داشبورد، یا مدل ذخیره شده در یک مجموعه معین. | مشاهده و پرس‌وجو جداول زیربنایی استفاده شده توسط یک سؤال، داشبورد، یا مدل. |

بیایید بگوییم گروه Canoes ما دو مجموعه مجوز دارد:

- مجوزهای مجموعه **Curate** به مجموعه Canoes؛
- مجوزهای داده **Can view** روی جدول `Orders`؛

اگر مجموعه Canoes شامل یک سؤال ایجاد شده با استفاده از جدول `Orders` باشد، در اینجا آنچه می‌توانید انتظار داشته باشید هر مجوز به گروه Canoes اجازه انجام دهد:

| Curate مجموعه Canoes | مجوزهای Can view به Orders |
| --- | --- |
| Edit کردن عنوان یا توضیحات سؤال. | مشاهده visualization (نتیجه) سؤال. |
| Move یا copy کردن سؤال به مجموعه دیگری. | تغییر نوع visualization نتیجه موجود برگردانده شده توسط سؤال. |

اساساً، گروه Canoes توانایی تعامل با سؤالی که در مجموعه آن‌ها ذخیره شده است را خواهد داشت، اما قادر به پرس‌وجو هر داده اضافی از جدول `Orders` نخواهند بود (چه از طریق سؤال یا مرورگر داده).

![مشاهده یک سؤال ذخیره شده در یک مجموعه قابل دسترسی با No self-service مجوزها به سؤال](../../../images/guide-to-collection-permissions/no-data-access.png)

برای اجازه دادن به مردم برای ایجاد و edit کردن سؤال‌ها، می‌توانید مجوزهای **Create query** گروه Canoes را روی **Query builder only** برای جدول `Orders` تنظیم کنید. سپس Canoes قادر خواهد بود:

- از سازنده کوئری برای تغییر پرس‌وجوی استفاده شده توسط سؤال استفاده کند.
- داده از جدول `Orders` را فیلتر یا خلاصه کند تا نتیجه برگردانده شده توسط سؤال را به‌روزرسانی کند.
- جدول `Orders` را از لینک زیر نام سؤال مشاهده کند.

![مشاهده یک سؤال ذخیره شده در یک مجموعه قابل دسترسی با Unrestricted مجوزها به سؤال](../../../images/guide-to-collection-permissions/full-data-access.png)

## نحوه اعمال مجوزها به داشبوردها با سؤال‌ها از مجموعه‌های مختلف

بیایید بگوییم گروه Canoes یک مجموعه به‌روزرسانی شده مجوز دارد:

- مجوزهای مجموعه **Curate** به مجموعه Canoes.
- مجوزهای مجموعه **No access** به مجموعه Sailboats.
- مجوزهای داده **Can view** به جدول `Orders`.

اگر همه سؤال‌های روی یک داشبورد همچنین در مجموعه Canoes ذخیره شده‌اند، گروه Canoes همه cardها را خواهد دید:

![مشاهده یک داشبورد با سؤال‌های ذخیره شده در یک مجموعه قابل دسترسی.](../../../images/guide-to-collection-permissions/full-dash-card-access.png)

اگر یکی از سؤال‌های روی یک داشبورد در مجموعه Sailboats ذخیره شده است (حتی اگر آن سؤال از جدول `Orders` استفاده می‌کند)، گروه Canoes یک card "قفل شده" خواهد دید:

![مشاهده یک داشبورد با یک card قفل شده ناشی از یک سؤال ذخیره شده در یک مجموعه غیرقابل دسترسی.](../../../images/guide-to-collection-permissions/partial-dash-card-access.png)

از آنجایی که non-adminها از گروه‌ها یا مجوزها آگاه نیستند، cardهای "قفل شده" می‌توانند زمانی اتفاق بیفتند که مردم با مجوزهای broader سعی می‌کنند کار خود را با مردم با مجوزهای restrictedتر به اشتراک بگذارند.

به عنوان مثال، بیایید بگوییم گروه Pirate Ships مجوزهایی برای help کردن خود از هر دو مجموعه Canoes و Sailboats دارد. اگر گروه Pirate Ships یک داشبورد می‌سازد و آن را با یک عضو گروه Canoes به اشتراک می‌گذارد، عضو گروه Canoes cardهای قفل شده برای هر سؤالی که هنوز در مجموعه Sailboats ذخیره شده است را خواهد دید.

برای اجتناب از cardهای قفل شده، توصیه می‌کنیم سؤال‌ها را در مجموعه‌ای که قصد دارید داشبورد خود را در آن ذخیره کنید duplicate کنید.

## مطالعه بیشتر

- [مستندات مجوزهای مجموعه](../../../../docs/latest/permissions/collections.html)
- [آموزش مجوزهای داده](data-permissions.html)
- [مستندات مجوزهای داده](../../../../docs/latest/permissions/data.html)
- [عیب‌یابی مجوزها](../../../../docs/latest/troubleshooting-guide/permissions.html)
- [منظم نگه داشتن تحلیل شما](../administration-and-operation/same-page.html)

[
      
        
        

      
      
        
        

      
    ](data-permissions.html)
[
      
        
        

      
      
        
        

      
    ](row-permissions.html)
