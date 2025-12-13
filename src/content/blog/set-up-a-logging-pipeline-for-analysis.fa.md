---
title: "راه‌اندازی یک خط لوله پایه برای تحلیل لاگ"
description: "می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد."
url: "https://www.metabase.com/blog/set-up-a-logging-pipeline-for-analysis"
canonical: "set-up-a-logging-pipeline-for-analysis.html"
image: "https://www.metabase.com/images/posts/best-practices-logging-pipeline.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "راه‌اندازی یک خط لوله پایه برای تحلیل لاگ"
ogDescription: "می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد."
ogImage: "https://www.metabase.com/images/posts/best-practices-logging-pipeline.jpg"
ogUrl: "https://www.metabase.com/blog/set-up-a-logging-pipeline-for-analysis"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "راه‌اندازی یک خط لوله پایه برای تحلیل لاگ"
twitterDescription: "می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد."
twitterImage: "https://www.metabase.com/images/posts/best-practices-logging-pipeline.jpg"
author: "The Metabase Team"
datePublished: "Mar 04, 2024"
category: "Using Metabase"
---

انتخاب ابزارها برای تمیز کردن، تجزیه و ساختاردهی داده لاگ می‌تواند طاقت‌فرسا (و گران) باشد. اما وقتی تازه شروع می‌کنید، می‌توانید با یک راه‌اندازی ساده برای تحلیل موردی با یک ابزار BI مانند Metabase از آن خلاص شوید. در اینجا چند روش بهترین برای راه‌اندازی یک خط لوله پایه برای تحلیل لاگ وجود دارد.

## استفاده از یک ابزار اتصال داده به عنوان میانبر برای ورود

ابزارهایی مانند [Airbyte](https://airbyte.com/) می‌توانند به سرعت به پایگاه داده شما متصل شوند و لاگ‌ها را برای شما ساختاردهی کنند. منبع لاگ خود را انتخاب کنید، مانند [AWS CloudTrail](https://aws.amazon.com/cloudtrail/)، و آن را به یک پایگاه داده، مانند [Snowflake](https://www.snowflake.com/en/) (یک راه‌حل نسبتاً آسان، مقیاس‌پذیر، با هزینه معقول)، یا [AWS Aurora Serverless Postgres](https://aws.amazon.com/rds/aurora/serverless/) (یک راه‌حل آسان، تا حدودی مقیاس‌پذیر، کم‌هزینه) متصل کنید.

ابزارهای ETL دیگر، مانند [Fivetran](https://www.fivetran.com/connectors) یا [Stitch](https://www.stitchdata.com/)، به روشی مشابه کار می‌کنند. آنها از یک اتصال‌دهنده برای انتقال داده لاگ از یک منبع، مانند CloudTrail، به پایگاه داده شما استفاده می‌کنند. همچنین می‌توانید [از یک ابزار ETL استفاده کنید و مدل‌سازی داده را به صورت همزمان انجام دهید](../learn/metabase-basics/getting-started/models.html) تا برخی از کارهای سنگین‌تر را برای شما انجام دهد.

## استفاده از یک ارائه‌دهنده ابری واحد برای نگه داشتن همه چیز تحت یک سقف

[Google Cloud Logging](https://cloud.google.com/logging?hl=en) با [BigQuery](https://cloud.google.com/logging/docs/export/bigquery) متصل می‌شود تا بتوانید به طور خودکار لاگ‌ها را مستقیماً به انبار داده خود وارد کنید. AWS گزینه‌های لاگ متعددی دارد، مانند CloudTrail یا [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html)، که می‌توانید به یکی از گزینه‌های پایگاه داده آنها، مانند [Postgres for RDS](https://aws.amazon.com/rds/) متصل کنید. [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview) نیز قابلیت‌های لاگ و ذخیره‌سازی دارد.

### مورد استفاده پیشرفته: تخلیه لاگ‌ها از چندین سرویس AWS به یک سطل S3 و پرس‌وجوی آنها با Athena

اگر کمی تجربه با سرویس‌های ابری، مانند AWS دارید، می‌توانید از یک مجموعه کامل از سرویس‌های ابری برای گرفتن لاگ‌ها از چندین سرویس مختلف و فشار دادن آنها به یک مکان مرکزی برای آماده‌سازی برای تحلیل استفاده کنید.

به عنوان مثال، لاگ‌های سرور وب یا برنامه را از نمونه‌های EC2 خود به یک سطل S3، همراه با لاگ‌های CloudTrail خود فشار دهید. سطل S3 خود را به یک ابزار پرس‌وجو، مانند [Athena](https://levelup.gitconnected.com/loading-data-from-s3-to-aws-athena-7c56c63efccc)، متصل کنید تا بتوانید [چند جدول ایجاد کنید](https://docs.aws.amazon.com/athena/latest/ug/creating-tables.html#creating-tables-how-to) برای استفاده در تحلیل. پس از داشتن جداول، می‌توانید به ابزار تحلیل خود متصل شوید و یک داشبورد عیب‌یابی ایجاد کنید، مانند یکی که رویدادهای EC2 را به حوادث CloudTrail برای تحلیل علت ریشه نقشه‌برداری می‌کند.

در اینجا برخی از گزینه‌های لاگ AWS دیگر وجود دارد که می‌توانید با S3 و Athena استفاده کنید:

- CloudWatch: ذخیره لاگ‌های برنامه، سیستم یا سفارشی
- RDS: ذخیره لاگ‌های خطا، پرس‌وجوی کند یا تراکنش
- Lambda: ذخیره لاگ‌های lambda که شامل جزئیات اجرا، پیام‌های خطا و عبارات لاگ سفارشی هستند
- Elastic Load Balancer (ELB): ذخیره لاگ‌های ELB که شامل آدرس IP مشتری، زمان درخواست و کد وضعیت پاسخ هستند

اگر می‌خواهید یک قدم جلوتر بروید، می‌توانید [Athena را به dbt متصل کنید](https://docs.getdbt.com/docs/core/connect-data-platform/athena-setup) و نحوه نوشتن تبدیل‌های داده خود در SQL را یاد بگیرید. dbt کنترل نسخه، استقرار و تست را بدون نیاز به اجرای ابزارهای فردی ساده می‌کند. با این حال، ما فقط این راه‌اندازی را توصیه می‌کنیم اگر با مدل‌سازی داده و ابزارهای توسعه‌دهنده آشنا هستید.

## بارگذاری دسته‌ای لاگ‌ها برای کارایی

باید لاگ‌های خود را به صورت دسته‌ای مستقیماً به انبار داده خود، یا یک گزینه ذخیره‌سازی مانند S3، بارگذاری کنید تا از تأخیر و مصرف منابع جلوگیری کنید. بیشتر سرویس‌های ابری یک [سرویس دسته‌ای](https://docs.aws.amazon.com/batch/latest/userguide/review-job-logs.html) ارائه می‌دهند جایی که می‌توانید کارها را برنامه‌ریزی و صف‌بندی کنید. *توجه داشته باشید اگر برای یک پایگاه داده یا ذخیره لاگ پول می‌پردازید، ابتدا قیمت بارگذاری دسته‌ای را دوباره بررسی کنید زیرا برخی سرویس‌های ابری به ازای هر بارگذاری دسته‌ای شارژ می‌کنند.*

## استفاده از یک کتابخانه کلاینت پایگاه داده یا اتصال‌دهنده برای ورود

نداشتن دسترسی به یک ابزار اتصال‌دهنده مشکل نیست، اما ممکن است کار توسعه بیشتری نیاز داشته باشد. استفاده از یک کتابخانه کلاینت پایگاه داده یا درایور موجود می‌تواند به شما کمک کند تا لاگ‌ها را مستقیماً در زمان لاگ به ذخیره‌سازی / انبار داده وارد کنید.

به عنوان مثال، [Postgres درایور دارد](https://wiki.postgresql.org/wiki/List_of_drivers)، و [MySQL اتصال‌دهنده دارد](https://www.mysql.com/products/connector/). از یکی از اینها برای اتصال به پایگاه داده خود بدون نیاز به اختراع مجدد چرخ استفاده کنید.

## مطمئن شوید که لاگ‌های شما شامل timestamp، منبع، پیام و سطح لاگ هستند

چهار منطقه وجود دارد که ما توصیه می‌کنیم به فایل‌های لاگ خود اضافه کنید تا تحلیل لاگ روان‌تر شود:

- Timestampها: ایجاد یک دنباله از رویدادها آسان‌تر خواهد شد. Timestampها به ویژه مهم هستند اگر از یک ابزار تحلیل برای ایجاد داشبورد برای نظارت بر عملکرد، یا حسابرسی و انطباق استفاده می‌کنید.
- منبع: مانند سرویسی که لاگ را ایجاد کرده است، اما همچنین کدام مکان/فایل/زیرسرویس لاگ‌ها از آن می‌آیند. می‌توانید از فیلد سرویس برای عیب‌یابی، یا فقط برای سنجش اینکه کدام منابع به هر سرویس اختصاص داده شده‌اند استفاده کنید.
- پیام لاگ: پیام‌ها را واضح و مختصر نگه دارید تا بتوانید هر رویداد را درک کنید. کلمات کلیدی را دوباره استفاده کنید تا فیلتر کردن و یافتن آنچه در طول تحلیل متنی نیاز دارید آسان‌تر شود.
- سطح لاگ: می‌توانید روی سطوحی مانند `ALERT` و `CRITICAL` فیلتر کنید تا به پایین آن برسید که کدام لاگ نیاز به بررسی و پاسخ فوری دارد.

## روش‌های بهترین و ایده‌های اضافی برای تحلیل لاگ

اگر هدف شما تحلیل لاگ در زمان واقعی، یا تحلیل پیشرفته یا مکرر لاگ است، ابزارهای خاص لاگ تمایل دارند که مناسب‌تر باشند. اگر تیم شما قبلاً از یک پشته ELK استفاده می‌کند، یک ابزار مانند [Grafana](https://grafana.com/) می‌تواند مناسب باشد.

در اینجا چند منبع اضافی وجود دارد که می‌توانید برای تصمیم‌گیری هنگام ساخت یک خط لوله لاگ در مقیاس کوچک استفاده کنید:

- [یادگیری درباره اعمال اصول علوم داده به لاگ](https://tersesystems.com/blog/2019/09/28/applying-data-science-to-logs-for-developer-observability/).
- [راهنمایی درباره کدام پایگاه داده و سرویس AWS استفاده کنید](https://aws.amazon.com/getting-started/decision-guides/databases-on-aws-how-to-choose/). [Google نیز مستندات دارد](https://cloud.google.com/blog/topics/developers-practitioners/your-google-cloud-database-options-explained).
- [یادگیری درباره استراتژی‌های ذخیره لاگ که می‌تواند به شما کمک کند هزینه را کاهش دهید و با گذشت زمان مقیاس دهید](https://www.kdnuggets.com/how-to-digest-15-billion-logs-per-day-and-keep-big-queries-within-1-second).

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد Metabase در Zendesk](embed-metabase-in-zendesk.html)

داده‌ها و بینش‌های مشتری مورد نیاز خود را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

---

<!-- blog-related-post-2 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد Metabase در Zendesk](embed-metabase-in-zendesk.html)

داده‌ها و بینش‌های مشتری مورد نیاز خود را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

---

<!-- blog-related-post-3 -->

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [نگه داشتن تب‌ها روی تحلیل‌های جاسازی‌شده](embedding-usage-analytics.html)

تحلیل استفاده Metabase می‌تواند به شما کمک کند یاد بگیرید که مشتریان شما که بیشتر درگیر هستند چه کسانی هستند و چه چیزی برای آنها مهم‌تر است.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

---

<!-- blog-related-post-4 -->

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [نگه داشتن تب‌ها روی تحلیل‌های جاسازی‌شده](embedding-usage-analytics.html)

تحلیل استفاده Metabase می‌تواند به شما کمک کند یاد بگیرید که مشتریان شما که بیشتر درگیر هستند چه کسانی هستند و چه چیزی برای آنها مهم‌تر است.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

<!-- /blog-related-posts -->
