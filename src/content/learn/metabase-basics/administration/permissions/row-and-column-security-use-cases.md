---
title: "موارد استفاده برای امنیت ردیف و ستون"
description: "امنیت ردیف و ستون را با attributeهای کاربر جفت کنید تا داده را برای تقریباً هر موقعیتی سفارشی کنید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/row-and-column-security-use-cases
toc:
  - id: "use-cases-for-row-and-column-security"
    title: "موارد استفاده برای امنیت ردیف و ستون"
    level: 1
    href: "#use-cases-for-row-and-column-security"
  - id: "managing-permissions-in-a-multi-tenant-environment"
    title: "مدیریت مجوزها در یک محیط multi-tenant"
    level: 2
    href: "#managing-permissions-in-a-multi-tenant-environment"
  - id: "restricting-the-email-recipient-list-in-a-dashboard-subscription"
    title: "محدود کردن لیست گیرنده ایمیل در یک اشتراک داشبورد"
    level: 2
    href: "#restricting-the-email-recipient-list-in-a-dashboard-subscription"
  - id: "selectively-granting-access-to-sensitive-data"
    title: "اعطای دسترسی انتخابی به داده حساس"
    level: 2
    href: "#selectively-granting-access-to-sensitive-data"
  - id: "displaying-custom-data-formats-to-different-groups"
    title: "نمایش فرمت‌های داده سفارشی به گروه‌های مختلف"
    level: 2
    href: "#displaying-custom-data-formats-to-different-groups"
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

# موارد استفاده برای امنیت ردیف و ستون

امنیت ردیف و ستون را با attributeهای کاربر جفت کنید تا داده را برای تقریباً هر موقعیتی سفارشی کنید.

> امنیت ردیف و ستون قبلاً data sandboxing نامیده می‌شد. همان ویژگی است، فقط اکنون نام توصیفی‌تری دارد.

## مدیریت مجوزها در یک محیط multi-tenant

اگر [متابیس را embed می‌کنید](../../../../docs/latest/embedding/introduction.html) برای [تحلیل‌های self-service multi-tenant](../../embedding/multi-tenant-self-service-analytics.html)، می‌توانید از امنیت ردیف و ستون استفاده کنید تا مطمئن شوید tenant A قادر به دیدن داده tenant B نخواهد بود، و برعکس.

policyهای امنیت ردیف و ستون در مدیریت مجوزها برای ساختارهای org پیچیده عالی هستند، حتی اگر فقط یک مشتری داشته باشید. به عنوان مثال، اگر مشتری شما یک دانشگاه است، آن دانشگاه می‌تواند نیاز به مجوزهای مختلف برای گروه‌های مختلف داشته باشد:

- **Adminها** باید قادر به دیدن داده از همه دانشجویان باشند.
- **دانشجویان** باید فقط داده خود را ببینند، اما نه داده دانشجویان دیگر.
- **استادان** باید داده از چندین دانشجو (آن‌هایی که تدریس می‌کنند) را ببینند، اما نه همه دانشجویان.

در این سناریو، [گروه‌های](../../../../docs/latest/people-and-groups/managing.html#groups) جداگانه برای Adminها، دانشجویان، و استادان خود ایجاد می‌کنید، و سپس policyهای امنیت ردیف و ستون را برای آن گروه‌ها پیکربندی می‌کنید تا به طور خودکار مجموعه متفاوتی از ردیف‌ها یا ستون‌ها را به هر گروه نمایش دهند.

راه‌اندازی شما بسته به اینکه داده tenant شما در یک schema commingled شده است یا نه کمی متفاوت به نظر می‌رسد — می‌توانید گزینه‌ها را با استفاده از مقاله [مجوزهای Multi-tenant](multi-tenant-permissions.html) ما مقایسه کنید.

اگر آماده هستید خودتان با امنیت ردیف و ستون tinker کنید، [مثال‌ها](../../../../docs/latest/permissions/row-and-column-security-examples.html) را امتحان کنید، یا در [مستندات](../../../../docs/latest/permissions/row-and-column-security.html) نگاهی بیندازید.

## محدود کردن لیست گیرنده ایمیل در یک اشتراک داشبورد

برخی اعضای جامعه ما از امنیت ردیف و ستون برای قفل کردن آدرس‌های ایمیل در متابیس استفاده می‌کنند. هنگام ایجاد یک [اشتراک داشبورد](../../../../docs/latest/dashboards/subscriptions.html)، یک شخص در یک گروه با امنیت ردیف و ستون پیکربندی شده فقط آدرس ایمیل خود را در لیست گیرندگان خواهد دید.

بگویید یک گروه **استادان** دارید که نیاز به ارسال ایمیل‌های اشتراک داشبورد به **دانشجویان** مربوطه خود دارند. اگر امنیت ردیف و ستون را برای گروه **دانشجویان** پیکربندی کنید، به طور خودکار از دانشجویان جلوگیری می‌کنید:

- ارسال ایمیل‌های اشتراک به **استادان** خود.
- دیدن آدرس‌های ایمیل دانشجویان دیگر.

اگر فقط می‌خواهید لیست‌های ایمیل را بدون لزوماً پنهان کردن هر ردیف یا ستونی از یک گروه محدود کنید، از یک [پیکربندی امنیت با یک view سفارشی](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table) استفاده کنید و view را روی `SELECT * FROM table` تنظیم کنید.

## اعطای دسترسی انتخابی به داده حساس

اگر با اطلاعات حساس کار می‌کنید، مثل داده مالی یا پزشکی، می‌توانید از امنیت ردیف و ستون استفاده کنید تا:

- به تیم‌های خاص اجازه دهید داده حساس را بر اساس need-to-know ببینند.
- آن داده حساس را از همه دیگران پنهان کنید.

به عنوان مثال، بگویید در telemedicine کار می‌کنید، و یک جدول **Patient Chat** دارید که تعاملات بین یک پرستار و یک بیمار telemedicine را در یک schema مثل این ثبت می‌کند:

| Nurse ID | Start Time | End Time | Transcript |
| --- | --- | --- | --- |
| … | … | … | … |

برای اطمینان از اینکه پرستاران می‌توانند رکوردهای کامل (شامل ستون **Transcript**) برای chatهای خود را ببینند، اما نه chatهای پرستاران دیگر:

- یک گروه **Nurse** با یک attribute کاربر برای "Nurse ID" ایجاد کنید، و پرستاران خود را به گروه اضافه کنید.
- [امنیت سطح ردیف](../../../../docs/latest/permissions/row-and-column-security.html#row-level-security-filter-by-a-column-in-the-table) را برای گروه **Nurse** و جدول **Patient Chat** تنظیم کنید تا پرستاران فقط ردیف‌هایی که با Nurse ID آن‌ها match می‌کنند را ببینند.

سپس، برای محدود کردن ستون‌های جدول chat، تا همه دیگران در شرکت بتوانند **Nurse ID**، **Start Time**، و **End Time** یک chat را ببینند، اما نه **Transcript** حساس:

- یک گروه **Non-Nurse** ایجاد کنید و کارمندان non-nurse را به گروه اضافه کنید.
- [امنیت سطح ستون](../../../../docs/latest/permissions/row-and-column-security.html#setting-up-column-security) را برای گروه **Non-Nurse** و جدول **Patient Chat** تنظیم کنید که ستون حساس **Transcript** را پنهان می‌کند.

## نمایش فرمت‌های داده سفارشی به گروه‌های مختلف

یک مورد استفاده کمتر شناخته شده برای امنیت ردیف و ستون این است که می‌توانید از آن‌ها برای فرمت کردن داده برای گروه‌های مختلف استفاده کنید.

به عنوان مثال، می‌توانید ارز یک جدول را در:

- پوند (£) برای مردم در یک گروه **United Kingdom** نمایش دهید.
- ین (¥) برای مردم در یک گروه **Japan** نمایش دهید.

یا شاید می‌خواهید یک ستون از datetimeها را در:

- فرمت 24 ساعته برای مردم در یک گروه **Military** نمایش دهید.
- فرمت 12 ساعته برای مردم در یک گروه **Non-Military** نمایش دهید.

می‌توانید فرمت‌بندی سفارشی خود را در یک سؤال SQL انجام دهید، سپس از این سؤال برای ایجاد [view سفارشی](../../../../docs/latest/permissions/row-and-column-security.html#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table) از داده برای مردم در گروه‌های مختلف استفاده کنید.

## مطالعه بیشتر

- [مدیریت مردم در متابیس](../../../../docs/latest/people-and-groups/managing.html)
- [استراتژی‌ها برای تحویل تحلیل‌های customer-facing](../../embedding/overview.html)
- [تحلیل‌های self-service multi-tenant](../../embedding/multi-tenant-self-service-analytics.html)

[
      
        
        

      
      
        
        

      
    ](column-permissions.html)
[
      
        
        

      
      
        
        

      
    ](keep-tabs-on-your-data.html)
