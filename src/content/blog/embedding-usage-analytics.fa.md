---
title: "نظارت بر تحلیل‌های جاسازی شده"
description: "تحلیل‌های استفاده متابیس می‌تواند به شما کمک کند یاد بگیرید که مشتریان درگیرترین شما چه کسانی هستند و چه چیزی برای آنها مهم‌تر است."
url: "https://www.metabase.com/blog/embedding-usage-analytics"
canonical: "embedding-usage-analytics.html"
image: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "نظارت بر تحلیل‌های جاسازی شده"
ogDescription: "تحلیل‌های استفاده متابیس می‌تواند به شما کمک کند یاد بگیرید که مشتریان درگیرترین شما چه کسانی هستند و چه چیزی برای آنها مهم‌تر است."
ogImage: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
ogUrl: "https://www.metabase.com/blog/embedding-usage-analytics"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "نظارت بر تحلیل‌های جاسازی شده"
twitterDescription: "تحلیل‌های استفاده متابیس می‌تواند به شما کمک کند یاد بگیرید که مشتریان درگیرترین شما چه کسانی هستند و چه چیزی برای آنها مهم‌تر است."
twitterImage: "https://www.metabase.com/images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg"
author: "The Metabase Team"
datePublished: "Feb 19, 2024"
category: "Using Metabase"
---

متابیس چند نوع مختلف جاسازی ارائه می‌دهد: [تعاملی](../docs/latest/embedding/interactive-embedding.html)، [ایستا](../docs/latest/embedding/static-embedding.html)، و [جاسازی عمومی](../docs/latest/embedding/public-links.html#public-embeds). با [تحلیل‌های استفاده](../docs/latest/usage-and-performance-tools/usage-analytics.html)، می‌توانید نحوه تعامل مشتریان شما با تحلیل‌های روبروی مشتری خود را ردیابی کنید.

سطح جزئیات موجود در تحلیل‌های استفاده به نوع جاسازی بستگی دارد. به عنوان مثال، جاسازی تعاملی یک قابلیت اضافی برای ردیابی استفاده مرتبط با ورود به سیستم به شما می‌دهد، در حالی که آمار استفاده، مانند بازدیدها و دانلودها، با جاسازی ایستا و عمومی ناشناس است.

با این حال، این راهنما می‌تواند یک ایده تقریبی از نحوه شروع ردیابی تحلیل‌های استفاده برای تحلیل‌های جاسازی شده به شما بدهد.

## ببینید چقدر مردم از تحلیل‌های روبروی مشتری شما استفاده می‌کنند

سرمایه‌گذاری خود در جاسازی را با ردیابی اینکه چقدر از آن استفاده می‌شود توجیه کنید. [داشبورد متریک متابیس](../docs/latest/usage-and-performance-tools/usage-analytics.html#metabase-metrics-dashboard) ردیابی می‌کند که چند کاربر فعال دارید، چند سوال مردم در هفته مشاهده و ایجاد می‌کنند، و روندها در طول زمان با تغییر استفاده هفته به هفته.

![داشبورد متریک متابیس](../images/posts/embedding-usage-analytics/metabase-metrics.png)

## درک کنید مشتریان شما بیشتر به چه چیزی علاقه‌مند هستند

در همان داشبورد متریک متابیس، لیستی از کسانی که بیشترین مصرف‌کنندگان داده درگیر شما هستند را پیدا خواهید کرد. ببینید چه چیزی را نگاه می‌کنند تا بتوانید محتوای مرتبط‌تر که به سمت علایق آنها هدایت شده است ایجاد کنید. دانستن اینکه مشتریان شما واقعاً به چه چیزی اهمیت می‌دهند همچنین می‌تواند منجر به گفتگوهای معنادارتر در مورد نحوه پشتیبانی از آنها شود.

همچنین می‌توانید یاد بگیرید که مشتریان چه زمانی شروع به از دست دادن علاقه می‌کنند. به عنوان مثال، برای جاسازی تعاملی، می‌توانید تشخیص دهید که آیا یک مشتری به خصوص فعال ناگهان بازدید از تحلیل‌های شما را متوقف می‌کند. این می‌تواند نشانه‌ای برای تماس و دیدن اینکه آیا به پشتیبانی شما نیاز دارند باشد.

برای جاسازی ایستا و عمومی، می‌توانید استفاده را به صورت تجمعی با فیلتر کردن روی ناشناس برای پیدا کردن اینکه مشتریان شما بیشتر به چه چیزی علاقه‌مند هستند نگاه کنید.

## سوالات و داشبوردها را سریع نگه دارید و اصطکاک را به حداقل برسانید تا مشتریان شما بتوانند آنچه نیاز دارند را خودخدمت کنند

دو داشبورد مختلف وجود دارد که می‌توانید برای فهمیدن اینکه کدام داشبوردها و سوالات کندترین اجرا را دارند یا بیشترین منابع را مصرف می‌کنند استفاده کنید.

![داشبوردهای مجموعه تحلیل متابیس موجود در متابیس](../images/posts/embedding-usage-analytics/dashboard-options.png)

۱. از [داشبورد نمای کلی عملکرد](../docs/latest/usage-and-performance-tools/usage-analytics.html#performance-overview-dashboard) استفاده کنید تا بفهمید کندترین داشبوردها و سوالات شما چیست، و آنها را بازسازی، [کش](../docs/latest/configuring-metabase/caching.html)، یا [بایگانی](../docs/latest/exploration-and-organization/delete-and-restore.html) کنید.
۲. در [داشبورد محتوای با تار عنکبوت](../docs/latest/usage-and-performance-tools/usage-analytics.html#content-with-cobwebs-dashboard) نگاه کنید تا ببینید چه چیزی مشاهده نمی‌شود. ممکن است زمان بایگانی باشد، یا اگر فکر می‌کنید مردم واقعاً از دست می‌دهند، این محتوا را در جایی برجسته‌تر قرار دهید.

## داده خود را با تحلیل‌های جاسازی شده چند مستأجره امن نگه دارید

تحلیل‌های استفاده یک لاگ جامع برای اهداف حسابرسی و امنیت به شما می‌دهد.

می‌توانید لاگ‌های افراد یا فعالیت را برای ناهنجاری‌ها، مانند ورودهای مشکوک یا تنظیمات تغییر یافته، نظارت کنید، و اشتراک‌ها و هشدارها را روی سوالات ایجاد شده از این لاگ‌ها تنظیم کنید تا نظارت ثابت بر آنچه در نمونه شما اتفاق می‌افتد داشته باشید.

![لاگ فعالیت فیلتر شده بر اساس تنظیمات تغییر یافته](../images/posts/embedding-usage-analytics/security-monitoring.png)

می‌توانید از این لاگ‌ها در ترکیب با سایر ویژگی‌های امنیتی، مانند [SSO](../docs/latest/people-and-groups/start.html#authentication)، [sandboxing](../docs/latest/permissions/data-sandboxes.html)، و بیشتر، برای تحلیل‌های چند مستأجره امن استفاده کنید.

## منابع تحلیل‌های استفاده متابیس

تحلیل‌های استفاده فراتر از فقط ردیابی تحلیل‌های جاسازی شده است. همچنین می‌توانید از تحلیل‌های استفاده برای چیزهای داخلی، مانند تمیز کردن متابیس خود، دادن ایده به تیم داده خود از اینکه چقدر از داده شما استفاده می‌شود، و بیشتر استفاده کنید. چند روش دیگر که می‌توانید از مجموعه تحلیل متابیس استفاده کنید را بررسی کنید:

- [مستندات تحلیل‌های استفاده](../docs/latest/usage-and-performance-tools/usage-analytics.html)
- [نگهداری خانه متابیس با تحلیل‌های استفاده](metabase-housekeeping-with-usage-analytics.html)
- [درک نحوه استفاده تیم شما از متابیس](how-to-use-metabase-usage-analytics.html)
- [ویدیو: تحلیل‌های استفاده متابیس — چه اتفاقی در نمونه شما می‌افتد](../events/metabase-usage-analytics.html)

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [راه‌اندازی یک خط لوله اساسی برای تحلیل لاگ](set-up-a-logging-pipeline-for-analysis.html)

می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-2 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [راه‌اندازی یک خط لوله اساسی برای تحلیل لاگ](set-up-a-logging-pipeline-for-analysis.html)

می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-3 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد متابیس در Zendesk](embed-metabase-in-zendesk.html)

داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

---

<!-- blog-related-post-4 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد متابیس در Zendesk](embed-metabase-in-zendesk.html)

داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

<!-- /blog-related-posts -->
