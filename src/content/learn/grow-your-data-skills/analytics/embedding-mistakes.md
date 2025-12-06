---
title: "پنج مرحله غم جاسازی"
description: "پس می‌خواهید داده را در مقابل مشتریان خود قرار دهید... اما با چه هزینه‌ای؟"
redirect_from:
  - /learn/grow-your-data-skills/analytics/embedding-mistakes
toc:
  - id: "the-five-stages-of-embedding-grief"
    title: "پنج مرحله غم جاسازی"
    level: 1
    href: "#the-five-stages-of-embedding-grief"
  - id: "sample-use-case"
    title: "مورد استفاده نمونه"
    level: 2
    href: "#sample-use-case"
  - id: "stage-1-denial"
    title: "مرحله 1: انکار"
    level: 3
    href: "#stage-1-denial"
  - id: "stage-2-anger"
    title: "مرحله 2: خشم"
    level: 3
    href: "#stage-2-anger"
  - id: "stage-3-bargaining"
    title: "مرحله 3: چانه‌زنی"
    level: 3
    href: "#stage-3-bargaining"
  - id: "stage-4-depression"
    title: "مرحله 4: افسردگی"
    level: 3
    href: "#stage-4-depression"
  - id: "stage-5-acceptance"
    title: "مرحله 5: پذیرش"
    level: 3
    href: "#stage-5-acceptance"
  - id: "a-mindset-shift-from-embedded-dashboards-to-embedded-data-models"
    title: "تغییر ذهنیت: از داشبوردهای جاسازی شده به مدل‌های داده جاسازی شده"
    level: 2
    href: "#a-mindset-shift-from-embedded-dashboards-to-embedded-data-models"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "استراتژی‌های تحلیل"
    href: "index.html"
---

# پنج مرحله غم جاسازی

پس می‌خواهید داده را در مقابل مشتریان خود قرار دهید... اما با چه هزینه‌ای؟

وقتی درباره [قرار دادن داده در مقابل مشتریان خود](../../metabase-basics/embedding.html) فکر می‌کنید، ممکن است نمودارهای سفارشی، معیارهای کدگذاری شده رنگی، و فراوانی فضای سفید را تصور کنید.

اگرچه داشبوردها قادر به ارائه [تحلیل خودخدمت](../../metabase-basics/embedding/multi-tenant-self-service-analytics.html) به مشتریان شما هستند، به ندرت بهترین ابزار برای کار هستند.

این مقاله به شما نشان می‌دهد چرا *شروع با* داشبوردهای جاسازی شده (یا هر view از پیش تعریف شده از داده شما) تمایل به ایجاد مشکلات با قابلیت نگهداری و مقیاس‌پذیری دارد.

اگر از قبل متقاعد شده‌اید، [رویکرد جاسازی که می‌توانید بگیرید](#a-mindset-shift-from-embedded-dashboards-to-embedded-data-models) را برای اجتناب از دادن غم به خود بررسی کنید.

## مورد استفاده نمونه

بگویید یک پلتفرم e-commerce اجرا می‌کنید. تحلیلگران شما یک داشبورد ساخته‌اند جایی که تیم شما می‌تواند موفقیت هر تاجر را بر اساس داده‌هایی مثل بازدیدها به ازای مشتری، حجم تراکنش در طول زمان، و رتبه متوسط مشتری بررسی کند.

قصد دارید داشبورد را در یک اپلیکیشن رو به تاجر جاسازی کنید تا تاجران شما بتوانند از آن معیارها و تجسم‌ها برای درک و رشد کسب‌وکار خود استفاده کنند.

### مرحله 1: انکار

مردم هر روز از داشبورد شما استفاده می‌کنند، پس احساس اعتماد به نفس می‌کنید که از قبل [نوار برای تحلیل خارجی با کیفیت بالا](../../metabase-basics/embedding/overview.html#the-bar-for-high-quality-external-analytics) را برآورده می‌کند.

پس از خواندن [استراتژی‌های ارائه تحلیل مشتری](../../metabase-basics/embedding/overview.html#strategies-for-delivering-customer-facing-analytics-with-metabase)، تصمیم می‌گیرید [single sign-on (SSO)](../../metabase-basics/embedding/multi-tenant-self-service-analytics.html#single-sign-on)، [امنیت ردیف و ستون](../../metabase-basics/embedding/multi-tenant-self-service-analytics.html#row-and-column-security)، و [white labeling](../../metabase-basics/embedding/multi-tenant-self-service-analytics.html#white-labeling-branding) را ترکیب کنید تا داشبورد موجود خود را مستقیماً در اپلیکیشن رو به تاجر جاسازی کنید.

### مرحله 2: خشم

چند هفته پس از rollout تکرار اول، می‌بینید که تاجران شما عاشق استفاده از داشبورد هستند، آنقدر که انبار داده شما کاملاً برای برآورده کردن اشتیاق آن‌ها مقیاس نمی‌کند.

تاجران شما شروع به ناامیدی از مدت زمان بارگذاری داشبورد می‌کنند. تصمیم می‌گیرید منابع داده داشبورد خود را به یک [انبار داده سریع‌تر](../../metabase-basics/administration/administration-and-operation/making-dashboards-faster.html#consider-a-database-optimized-for-analytics) کپی کنید، و [تعداد instanceها](../../metabase-basics/administration/administration-and-operation/metabase-at-scale.html) را برای اندازه خوب تنظیم می‌کنید.

### مرحله 3: چانه‌زنی

درخواست‌های ویژگی شروع به roll in برای داشبورد شما می‌کنند — به نظر می‌رسد هرچه تاجران شما بیشتر با داده کار می‌کنند، سؤال‌های بیشتری درباره فیلترها، pivotها، و محاسبات سفارشی دارند.

برخی از تاجران شما می‌خواهند از محاسبات خود برای درآمد استفاده کنند. دیگران به شدت درباره [نمودارهای خطی](../../metabase-basics/querying-and-dashboards/visualization/line-charts.html) در مقابل [نمودارهای میله‌ای](../../metabase-basics/querying-and-dashboards/visualization/bar-charts.html) نظر دارند. و یک جناح کوچک (اما پرحرف) حتی اصلاً به نمودارها اهمیت نمی‌دهند — همه آن‌ها می‌خواهند راهی برای دریافت داده مشتری de-anonymized برای اجرای کمپین‌های شخصی‌سازی شده است.

### مرحله 4: افسردگی

متوجه می‌شوید که جداول در پایگاه داده شما نیاز به جادوی SQL جدی برای پشتیبانی از افزودنی‌های آخر داشبورد که تاجران شما درخواست کرده‌اند دارند.

تیم شما زمان برای refactor کردن schemaها ندارد (آن‌ها مشغول [نگهداری viewهای موجود](../../sql/debugging-sql/sql-logic.html#common-reasons-for-unexpected-query-results) هستند)، پس شروع به نوشتن اسکریپت‌های SQL سفارشی برای برآورده کردن نیازهای مهم‌ترین تاجران خود می‌کنید. انبار داده شما با جداول دلخواه شلوغ می‌شود.

حتی اگر تیم محصول شما بهترین تلاش خود را برای پیگیری درخواست‌ها برای داده بیشتر *و* راه‌های بیشتر برای نگاه به آن داده انجام می‌دهد، داشبورد داخلی یک بار موفق شما به نظر می‌رسد به یک abomination صد tile جهش یافته است.

وقتی بالاخره زمان بررسی آمار استفاده از داشبورد تاجر خود را دارید، دل‌شکسته می‌شوید که یاد می‌گیرید تاجران شما فقط یک بار به آن tileها نگاه کرده‌اند، اگر اصلاً.

### مرحله 5: پذیرش

خوشحال می‌شوید که به یاد می‌آورید این سناریوی کامل فرضی است. همانطور که روی تروما شبیه‌سازی شده خود تأمل می‌کنید، می‌فهمید که:

- مردم با نگاه به داده به روش‌های مختلف به پاسخ می‌رسند.
- درخواست‌های داشبورد (آیا می‌توانم یک view خاص از داده را دریافت کنم؟) در واقع درخواست‌های داده خودخدمت (آیا می‌توانم به اندازه نیاز برای پاسخ به سؤال خود view دریافت کنم؟) هستند.
- نباید مجبور به ایجاد یا به‌روزرسانی جداول خود در پاسخ به درخواست‌های داشبورد باشید.

## تغییر ذهنیت: از داشبوردهای جاسازی شده به مدل‌های داده جاسازی شده

بهترین راه برای [شروع با جاسازی](../../../docs/latest/embedding/start.html) این است که مدل‌های داده خود را به عنوان محصول نهایی در نظر بگیرید (و با مدل‌های داده، منظورمان طراحی فیلدها، جداول، و روابطی است که در انبار داده شما زندگی می‌کنند).

اگر مدل‌های داده شما برای غیرمهندسان آسان برای [پیدا کردن](../../metabase-basics/getting-started/find-data.html#browse-databases-and-tables)، [درک](../../metabase-basics/querying-and-dashboards/data-browser.html#data-reference-pages)، [تغییر](../../metabase-basics/getting-started/models.html)، و [اعتبارسنجی](../../../blog/official-collections-and-verification.html) باشند، اعتماد به نفس و استقلال برای استفاده از داده به روشی که برای آن‌ها بیشتر منطقی است (و زمان خود را از چراندن درخواست‌های داشبورد ad-hoc پس بگیرید) به آن‌ها می‌دهید.

البته، هنوز می‌خواهید از ایجاد یک دسته کاملاً جدید از درخواست‌های *مدل داده* ad-hoc اجتناب کنید. ارزش وقت شما را دارد (حالا که مقداری پس گرفته‌اید) مدل‌های داده‌ای بسازید که نه فقط از دیدگاه مهندسی بهینه شده‌اند، بلکه از یک طراحی محصول نیز.

## مطالعه بیشتر

بیشتر درباره استراتژی، طراحی، و پیاده‌سازی مدل‌سازی داده یاد بگیرید:

- [مشکلات با دموکراتیک کردن تحلیل](../../metabase-basics/administration/administration-and-operation/same-page.html#the-problems-with-democratizing-analytics)
- [مدل داده چیست؟](../../../glossary/data-model.html)
- [اشتباهات رایج مدل داده انجام شده توسط استارتاپ‌ها](data-model-mistakes.html)

[
      
        

      
      
        
        

      
    ](analytics-mistakes.html)
[
      
        
        

      
      
        
        

      
    ](push-and-pull.html)
