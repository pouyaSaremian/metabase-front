---
title: "آموزش: محیط‌های چندگانه"
description: "گزینه‌هایی برای spin up کردن محیط‌های dev، staging، یا test."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/multi-env
  - /learn/administration/multi-env
toc:
  - id: "tutorial-multiple-environments"
    title: "آموزش: محیط‌های چندگانه"
    level: 1
    href: "#tutorial-multiple-environments"
  - id: "one-instance-per-environment"
    title: "یک instance برای هر محیط"
    level: 2
    href: "#one-instance-per-environment"
  - id: "example-creating-a-self-hosted-staging-instance"
    title: "مثال: ایجاد یک instance staging self-hosted"
    level: 3
    href: "#example-creating-a-self-hosted-staging-instance"
  - id: "one-collection-per-environment"
    title: "یک مجموعه برای هر محیط"
    level: 2
    href: "#one-collection-per-environment"
  - id: "example-creating-prod-and-dev-collections"
    title: "مثال: ایجاد مجموعه‌های Prod و Dev"
    level: 3
    href: "#example-creating-prod-and-dev-collections"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مدیریت و عملیات"
    href: "index.html"
---

# آموزش: محیط‌های چندگانه

گزینه‌هایی برای spin up کردن محیط‌های dev، staging، یا test.

وقتی شروع به [اجرای متابیس در production](metabase-in-production.html) می‌کنید، احتمالاً می‌خواهید تست و توسعه خود را در محیط‌های جداگانه انجام دهید. برای بیشتر تیم‌ها، این به معنای ایجاد یک کپی از برخی (یا همه) نمودارها و داشبوردها در production، ایجاد تغییرات در آن کپی‌ها، و سپس به طور اختیاری push کردن آن تغییرات به production است.

برای تیم‌هایی که می‌خواهند تغییرات برنامه‌نویسی به بسیاری از آیتم‌ها یا تنظیمات متابیس به طور همزمان ایجاد کنند، بهتر است [یک instance برای هر محیط](#one-instance-per-environment) تنظیم کنید. همچنین می‌توانید محیط‌های dev و prod را برای [نگهداری داشبورد](../../../grow-your-data-skills/analytics/editing-dashboards.html) با ایجاد [یک مجموعه برای هر محیط](#one-collection-per-environment) تقلید کنید.

## یک instance برای هر محیط

برای تنظیم یک instance برای هر یک از محیط‌های خود، نیاز به یک **[طرح Pro یا Enterprise self-hosted](../../../../pricing/index.html)** دارید. چون طرح‌های Pro و Enterprise self-hosted به راحتی [به ازای هر حساب شارژ می‌کنند](../../../../docs/latest/cloud/how-billing-works.html#what-counts-as-a-user-account)، می‌توانید به تعداد دلخواه instanceهای متابیس را spin up کنید. فقط به خاطر داشته باشید که برای تعداد کل کاربران در همه متابیس‌های خود پرداخت می‌کنید، پس فقط حداقل تعداد کاربران مورد نیاز برای تنظیم instanceهای staging یا dev خود را اضافه کنید (مثلاً، یک کاربر تست واحد در یک گروه برای تست مجوزها تنظیم کنید، به جای افزودن همه کاربران از instance prod خود).

برای راه‌اندازی یک محیط جدید بر اساس متابیس production خود، از ویژگی [serialization](../../../../docs/latest/installation-and-operation/serialization.html) متابیس برای ایجاد یک export از نمودارها، داشبوردها، و تنظیمات خود استفاده خواهید کرد. همچنین می‌توانید فایل‌های YAML export را قبل از import کردن آن به یک instance staging جدید متابیس ویرایش کنید. به عنوان مثال، می‌توانید مجموعه‌ای از قالب‌های داشبورد با [برندینگ](../../../../docs/latest/configuring-metabase/appearance.html) ایجاد کنید که می‌تواند برای پر کردن هر محیط جدید استفاده شود.

وقتی زمان push کردن تغییرات از staging به prod می‌رسد، تیم شما از همان فرآیند serialization برای export از staging و import آن به prod استفاده خواهد کرد. همچنین می‌توانید تست‌های integration خود را تنظیم کنید تا از import کردن هر چیزی که ممکن است instance production شما را بشکند جلوگیری کنید.

### مثال: ایجاد یک instance staging self-hosted

بگویید instance production متابیس شما روی Docker یا مشابه آن اجرا می‌شود:

1. یک backup از پایگاه داده برنامه استفاده شده برای instance prod خود ایجاد کنید.
2. یک container جدید به نام **staging** ایجاد کنید.
  - با استفاده از [متغیرهای محیطی](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_db_host) مناسب به پایگاه داده برنامه prod خود متصل شوید.
  - کلید لایسنس خود را با استفاده از [`MB_PREMIUM_EMBEDDING_TOKEN`](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_premium_embedding_token) اضافه کنید.
  - برچسب نسخه (مثل `metabase/metabase-enterprise:v1.56.12`) که با instance prod شما match می‌کند را شامل کنید.
3. از container **staging**، یک متابیس تازه با تنظیمات زیر شروع کنید:
4. وقتی متابیس در container **staging** در حال اجرا است، دستور serialization [export](../../../../docs/latest/installation-and-operation/serialization.html) را اجرا کنید.
5. export را به هر object storage که می‌خواهید persist کنید.
6. اختیاری: فایل‌های YAML export را ویرایش کنید. به عنوان مثال، می‌توانید یک اسکریپت اجرا کنید تا `ID = 1` را با `ID = 2` جایگزین کند.
7. container **staging** را restart کنید.
8. از container **staging**، یک پایگاه داده برنامه تازه ایجاد کنید.
  - با استفاده از [متغیرهای محیطی](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_db_host) مناسب به پایگاه داده برنامه جدید متصل شوید.
  - کلید لایسنس خود را با استفاده از [`MB_PREMIUM_EMBEDDING_TOKEN`](../../../../docs/latest/configuring-metabase/environment-variables.html#mb_premium_embedding_token) اضافه کنید.
  - برچسب نسخه (مثل `metabase/metabase-enterprise:v1.56.12`) که با instance prod شما match می‌کند را شامل کنید.
9. متابیس را با دستور serialization [import](../../../../docs/latest/installation-and-operation/serialization.html) شروع کنید:

مراحل دقیق به deployment شما بستگی دارد. اگر گیر کردید، همیشه می‌توانید [از یکی از مهندسان موفقیت ما بپرسید](https://www.metabase.com/help-premium)!

## یک مجموعه برای هر محیط

برای مدیریت تغییرات به داشبوردهای متابیس بدون serialization، می‌توانید از [مجموعه‌ها](../../../../docs/latest/exploration-and-organization/collections.html)، [مجوزهای مجموعه](../../../../docs/latest/permissions/collections.html)، و [تاریخچه](../../../../docs/latest/exploration-and-organization/history.html) استفاده کنید.

### مثال: ایجاد مجموعه‌های Prod و Dev

در اینجا مثالی از نحوه تنظیم یک "محیط" برای هر مجموعه:

1. دو [مجموعه](../../../../docs/latest/exploration-and-organization/collections.html) به نام‌های **Prod** و **Dev** ایجاد کنید.
2. دو [گروه](../../../../docs/latest/people-and-groups/managing.html#creating-a-group) به نام‌های **End Users** و **Developers** ایجاد کنید.
  - **Developers** می‌توانند مجموعه‌های **Prod** و **Dev** را **Curate** کنند.
  - **End Users** می‌توانند مجموعه **Prod** را **View** کنند.
3. [مجوزهای مجموعه](../../../../docs/latest/permissions/collections.html) را برای هر گروه تنظیم کنید:
  - **Developers** دسترسی **Query builder and native** به جداول یا پایگاه‌های داده استفاده شده در مجموعه‌های **Dev** و **Prod** دریافت می‌کنند.
  - **End Users** **امنیت ردیف و ستون** برای جداول یا پایگاه‌های داده استفاده شده در مجموعه **Prod** تنظیم شده است.
4. اختیاری: [مجوزهای داده](../../../../docs/latest/permissions/data.html) را برای هر گروه تنظیم کنید. به عنوان مثال:

اعضای گروه Developers می‌توانند آیتم‌ها را بین مجموعه‌های **Prod** و **Dev** [کپی](../../../../docs/latest/dashboards/introduction.html#duplicating-a-dashboard) و [انتقال](../../../../docs/latest/exploration-and-organization/collections.html#moving-items-from-collection-to-collection) دهند تا تغییرات را بدون افشای کار در حال انجام ایجاد کنند. مردم همچنین می‌توانند تغییرات را با استفاده از [**تاریخچه**](../../../../docs/latest/exploration-and-organization/history.html) یک آیتم مشاهده و revert کنند.

## مطالعه بیشتر

- [Serialization: preload کردن داشبوردها در یک instance متابیس جدید](serialization.html)
- [کار با مجوزهای مجموعه](../permissions/collection-permissions.html)
- [متابیس در مقیاس](metabase-at-scale.html)

[
      
        
        

      
      
        
        

      
    ](same-page.html)
[
      
        
        

      
      
        
        

      
    ](serialization.html)
