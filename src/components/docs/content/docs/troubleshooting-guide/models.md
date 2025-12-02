---
title: عیب‌یابی مدل‌ها
---

# عیب‌یابی مدل‌ها

چه نوع مشکلی با [مدل][model-docs] خود دارید؟

## نمی‌توانم یک مدل ایجاد کنم

اگر [دکمه مدل][model-button-image] (سه مربع) را نمی‌بینید:

1. بررسی کنید که آیا از نسخه متابیس 0.42.0 یا بالاتر استفاده می‌کنید با رفتن به گوشهٔ بالا سمت راست صفحه و کلیک روی **آیکون gear** > **About Metabase**.
2. cache مرورگر خود را پاک کنید.
3. از ادمین متابیس خود بخواهید proxy cache را پاک کند (اگر از یکی استفاده می‌کنید).

## نمی‌توانم تغییرات یک مدل را ویرایش یا ذخیره کنم

اگر تغییرات شما به metadata یک مدل یا سؤال زیربنایی نمایش داده نمی‌شوند:

1. مرورگر خود را refresh کنید تا تأیید کنید که نتایج cache شده را مشاهده نمی‌کنید.
2. برای [مشکلات مدل شناخته شده][known-issues-models] با استفاده از label `Querying/Models` جستجو کنید. برای اطلاعات بیشتر، به [نحوهٔ پیدا کردن یک باگ یا محدودیت شناخته شده][known-issues] بروید.

## عملکرد مدل ضعیف است

1. از persistence مدل استفاده کنید.

   - متابیس می‌تواند [به data warehouse شما write back کند][model-persistence]. اگر persistence مدل را فعال کنید، متابیس یک نسخه pre-computed و materialized از مدل را مستقیماً از پایگاه داده به جای اجرای کوئری از ابتدا می‌خواند. لطفاً در نظر بگیرید که این گزینه فقط در برخی data warehouseهای پشتیبانی شده در دسترس است.

2. سؤال ذخیره‌شده زیربنایی یا کوئری SQL را بهینه کنید.

   - [داده کمتری درخواست کنید][limit-data-learn].
   - برای مدل‌هایی که از سؤال‌های SQL استفاده می‌کنند، [به دنبال گلوگاه‌ها با استفاده از SQL EXPLAIN][sql-explain-learn] بگردید.

3. schemaهای پایگاه داده خود را بهینه کنید.

   - [داده را از قبل با جداول خلاصه aggregate کنید][summary-tables-learn].
   - [ستون‌های کوئری شده مکرر را index کنید][indexes-learn].
   - [داده خود را denormalize کنید][denormalize-data-learn].
   - [viewها را materialize کنید][materialize-views-learn].
   - [داده را از JSON بیرون بکشید و کلیدهای آن را در ستون‌ها قرار دهید][flatten-json-learn].

4. data warehouse(ها) یا پایگاه‌داده(های) خود را بهینه کنید.

   - [پایگاه داده خود را replicate کنید][replicate-database-learn].
   - [یک پایگاه داده بهینه شده برای analytics را در نظر بگیرید][analytics-database-learn].

**توضیح**

مدل‌ها نوعی سؤال ذخیره‌شده هستند، بنابراین فقط به همان سرعت سؤال اصلی یا کوئری SQL عمل می‌کنند.

اگر می‌خواهید عملکرد یک مدل را بهبود بخشید، می‌توانید بهینه‌سازی‌ها را در سطح کوئری، schema، یا پایگاه داده انجام دهید (بسته به مجوزهای داده، تخصص فنی، و تمایل به دستکاری).

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس][discourse] جستجو کنید یا بپرسید.
- برای [مشکلات مدل شناخته شده][known-issues-models] با استفاده از label `Querying/Models` جستجو کنید. برای اطلاعات بیشتر، به [نحوهٔ پیدا کردن یک باگ یا محدودیت شناخته شده][known-issues] بروید.

[analytics-database-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#consider-a-database-optimized-for-analytics
[denormalize-data-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#denormalize-data
[discourse]: https://discourse.metabase.com/
[flatten-json-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#pull-data-out-of-json-and-slot-its-keys-into-columns
[indexes-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#index-frequently-queried-columns
[known-issues]: ./known-issues.md
[known-issues-models]: https://github.com/metabase/metabase/labels/Querying%2FModels
[limit-data-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#ask-for-less-data
[materialize-views-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#materialize-views-create-new-tables-to-store-query-results
[model-button-image]: https://www.metabase.com/learn/images/models/model-icon.png
[model-docs]: ../data-modeling/models.md
[replicate-database-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#replicate-your-database
[sql-explain-learn]: https://www.metabase.com/learn/sql/working-with-sql/sql-best-practices#explain
[summary-tables-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#aggregate-data-ahead-of-time-with-summary-tables
[model-persistence]: ../data-modeling/model-persistence.md
