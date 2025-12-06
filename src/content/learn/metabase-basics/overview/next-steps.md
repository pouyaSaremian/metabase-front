---
title: "ویژگی‌های پیشرفته متابیس برای تحلیلگران داده"
description: "تنظیم هشدارها، حاشیه‌نویسی نمودارها با رویدادها، مدل‌سازی داده، قالب‌بندی پرس‌وجوهای SQL، سفارشی‌سازی رفتار کلیک، و بیشتر."
redirect_from:
  - /learn/metabase-basics/overview/next-steps
toc:
  - id: "advanced-metabase-features-for-data-analysts"
    title: "ویژگی‌های پیشرفته متابیس برای تحلیلگران داده"
    level: 1
    href: "#advanced-metabase-features-for-data-analysts"
  - id: "get-notified-when-results-cross-a-goal-line"
    title: "دریافت اطلاع وقتی نتایج از یک خط هدف عبور می‌کنند"
    level: 2
    href: "#get-notified-when-results-cross-a-goal-line"
  - id: "share-dashboard-results-via-email-and-slack"
    title: "اشتراک‌گذاری نتایج داشبورد از طریق ایمیل و Slack"
    level: 2
    href: "#share-dashboard-results-via-email-and-slack"
  - id: "make-data-easier-to-query-with-models"
    title: "آسان‌تر کردن پرس‌وجوی داده با مدل‌ها"
    level: 2
    href: "#make-data-easier-to-query-with-models"
  - id: "speed-up-loading-times-by-caching-results"
    title: "سریع‌تر کردن زمان بارگذاری با cache کردن نتایج"
    level: 2
    href: "#speed-up-loading-times-by-caching-results"
  - id: "customize-what-happens-when-people-click-on-dashboard-charts"
    title: "سفارشی‌سازی آنچه هنگام کلیک مردم روی نمودارهای داشبورد اتفاق می‌افتد"
    level: 2
    href: "#customize-what-happens-when-people-click-on-dashboard-charts"
  - id: "annotate-charts-with-events-and-timelines"
    title: "حاشیه‌نویسی نمودارها با رویدادها و timelineها"
    level: 2
    href: "#annotate-charts-with-events-and-timelines"
  - id: "sql-templates"
    title: "قالب‌های SQL"
    level: 2
    href: "#sql-templates"
  - id: "x-ray-models-tables-charts-and-more"
    title: "X-ray کردن مدل‌ها، جداول، نمودارها و بیشتر"
    level: 2
    href: "#x-ray-models-tables-charts-and-more"
  - id: "index-models-so-you-can-search-for-individual-records"
    title: "ایندکس کردن مدل‌ها تا بتوانید برای رکوردهای فردی جستجو کنید"
    level: 2
    href: "#index-models-so-you-can-search-for-individual-records"
  - id: "upload-csvs-or-connect-google-sheets-for-ad-hoc-exploration"
    title: "آپلود CSVها یا اتصال Google Sheets برای کاوش ad hoc"
    level: 2
    href: "#upload-csvs-or-connect-google-sheets-for-ad-hoc-exploration"
  - id: "export-results-and-dashboards"
    title: "صادر کردن نتایج و داشبوردها"
    level: 2
    href: "#export-results-and-dashboards"
  - id: "and-a-bunch-of-other-stuff"
    title: "و یک دسته چیزهای دیگر"
    level: 2
    href: "#and-a-bunch-of-other-stuff"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "نمای کلی متابیس"
    href: "index.html"
---

# ویژگی‌های پیشرفته متابیس برای تحلیلگران داده

تنظیم هشدارها، حاشیه‌نویسی نمودارها با رویدادها، مدل‌سازی داده، قالب‌بندی پرس‌وجوهای SQL، سفارشی‌سازی رفتار کلیک، و بیشتر.

## دریافت اطلاع وقتی نتایج از یک خط هدف عبور می‌کنند

می‌توانید یک [هشدار](../../../docs/latest/questions/alerts.html) روی یک سؤال تنظیم کنید تا متابیس وقتی سؤال نتایجی که از یک خط هدف عبور می‌کنند را برمی‌گرداند یک ایمیل یا پیام Slack برای شما ارسال کند. همچنین می‌توانید نتایج را به یک webhook ارسال کنید.

![تنظیم یک هشدار](../../images/next-steps/alerts.png)

## اشتراک‌گذاری نتایج داشبورد از طریق ایمیل و Slack

یک [اشتراک داشبورد](../../../docs/latest/dashboards/subscriptions.html) تنظیم کنید تا نتایج یک داشبورد را از طریق ایمیل یا Slack ارسال کند. در پلن‌های [Pro](../../../product/pro.html) و [Enterprise](../../../product/enterprise.html)، می‌توانید نتایج را برای [گروه‌های](../../../docs/latest/people-and-groups/managing.html) مختلف فیلتر کنید.

![اشتراک داشبورد](../../images/next-steps/dashboard-subscription.png)

## آسان‌تر کردن پرس‌وجوی داده با مدل‌ها

می‌توانید [مدل‌ها](../getting-started/models.html) ایجاد کنید تا داده خام به هم ریخته را تمیز کنید و پرسیدن سؤال را برای مردم آسان‌تر کنید.

## سریع‌تر کردن زمان بارگذاری با cache کردن نتایج

می‌توانید نتایج سؤال‌ها را ذخیره کنید تا متابیس بتواند آن‌ها را خیلی سریع‌تر برگرداند. بررسی کنید:

- [Cache کردن سؤال‌ها](../../../docs/latest/configuring-metabase/caching.html)
- [مداوم‌سازی مدل](../../../docs/latest/data-modeling/model-persistence.html)

## سفارشی‌سازی آنچه هنگام کلیک مردم روی نمودارهای داشبورد اتفاق می‌افتد

سؤال‌های ساخته شده با query builder منوی drill-through ساخته شده در نمودارهای آن‌ها را دریافت می‌کنند. اما می‌توانید آنچه هنگام کلیک مردم روی کارت‌های داشبورد اتفاق می‌افتد را تغییر دهید. سفارشی‌سازی رفتار کلیک به خصوص برای افزودن عملکرد به سؤال‌های نوشته شده در SQL مفید است. می‌توانید:

- مردم را به یک مقصد سفارشی ارسال کنید (مثل داشبورد دیگر، یا به یک URL خارجی).
- منوی drill-through را باز کنید.
- یک مقدار در یک فیلتر داشبورد را به‌روزرسانی کنید.

![گزینه‌های رفتار کلیک](../../images/next-steps/click-behavior.png)

[داشبوردهای تعاملی](../../../docs/latest/dashboards/interactive.html) را بررسی کنید.

## حاشیه‌نویسی نمودارها با رویدادها و timelineها

می‌توانید [رویدادها روی سری زمانی](../../../docs/latest/exploration-and-organization/events-and-timelines.html) اضافه کنید. می‌توانید از رویدادها برای علامت‌گذاری تاریخ‌هایی که چیزی اتفاق افتاده استفاده کنید: یک کمپین ایمیل یا قطعی یا مهمانی دفتر که از کنترل خارج شد. می‌توانید رویدادها را در timelineها گروه‌بندی کنید تا رویدادهای مرتبط را با هم نگه دارید. رویدادها برای توضیح spikeها در داده مفید هستند، پس نیاز به پاسخ برای بار چندم ندارید که چرا فروش در آوریل خیلی بالا رفت.

![رویداد روی نمودار متابیس](../../images/next-steps/event.png)

## قالب‌های SQL

[متغیرها را در SQL خود](../../../docs/latest/questions/native-editor/sql-parameters.html) وارد کنید و متابیس یک ویجت فیلتر برای شما ایجاد می‌کند. همچنین: [فیلترهای فیلد](../querying-and-dashboards/sql-in-metabase/field-filters.html) را بررسی کنید که فیلترهای "هوشمند" ایجاد می‌کنند، با فهرست‌های dropdown یا محدوده‌های تاریخ.

![قالب SQL](../../images/next-steps/sql-template.png)

همچنین می‌توانید بیت‌های SQL را برای استفاده مجدد در پرس‌وجوهای دیگر ذخیره کنید. [Snippetها](../querying-and-dashboards/sql-in-metabase/field-filters.html) را بررسی کنید.

## X-ray کردن مدل‌ها، جداول، نمودارها و بیشتر

از یک مدل یا جدول بازدید کنید، یک دکمه بزنید، نمودارها را دریافت کنید. می‌توانید این نمودارهای تولید شده خودکار را به عنوان یک داشبورد ذخیره کنید، یا فقط از هر یک از نمودارها به عنوان نقاط شروع برای پیدا کردن پاسخ‌هایی که به دنبال آن‌ها هستید استفاده کنید. [X-rayها](../../../docs/latest/exploration-and-organization/x-rays.html) را بررسی کنید.

![X-ray این جدول](../../images/next-steps/x-ray.png)

## ایندکس کردن مدل‌ها تا بتوانید برای رکوردهای فردی جستجو کنید

وقتی در حال ویرایش متادیتا برای یک ستون در یک مدل هستید، یک toggle به نام **Surface individual records in search by matching against this column** خواهید دید. اگر این toggle را روشن کنید، مردم قادر به جستجو در متابیس برای آن رکوردها خواهند بود. اگر، به عنوان مثال، فیلد شامل فهرستی از نام‌های مشتری است، می‌توانید آن ستون را ایندکس کنید تا مردم بتوانند فقط نام مشتری‌ها را در نوار جستجوی متابیس جستجو کنند. همچنین می‌توانید [X-ray](../../../docs/latest/exploration-and-organization/x-rays.html) کنید.

![رکوردهای ایندکس شده در جستجو ظاهر می‌شوند](../../images/next-steps/indexed-records.png)

مستندات برای [ایندکس کردن فیلدها روی یک مدل](../../../docs/latest/data-modeling/models.html#surface-individual-records-in-search-by-matching-against-this-column) را بررسی کنید.

## آپلود CSVها یا اتصال Google Sheets برای کاوش ad hoc

به جای دستکاری با یک صفحه‌گسترده، یک [CSV آپلود کنید](../../../docs/latest/databases/uploads.html) یا [Google Sheets را متصل کنید](../../../docs/latest/cloud/google-sheets.html) به متابیس و داده را با query builder، ویرایشگر SQL، یا حتی X-ray آن پرس‌وجو کنید.

![آپلود یک CSV به یک مجموعه در متابیس](../../images/next-steps/upload-to-collection.png)

## صادر کردن نتایج و داشبوردها

می‌توانید [نتایج یک سؤال را دانلود کنید](../../../docs/latest/questions/exporting-results.html) به عنوان فایل‌های .json، .csv، .png، یا .xlsx، یا یک داشبورد را به عنوان PDF صادر کنید.

## و یک دسته چیزهای دیگر

متابیس طراحی شده تا ساده و شهودی باشد، اما عمق زیادی دارد. در نظر بگیرید زمان زیادی را صرف خواندن [مستندات](../../../docs/latest/index.html) و مقالات [یادگیری](../../index.html) ما کنید.

[
      
        

      
      
        
        

      
    ](tour-of-metabase.html)
[
      
        
        

      
      
        
        

      
    ](beyond-bi.html)
