---
title: "جاسازی یک داشبورد متابیس در Zendesk"
description: "داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید."
url: "https://www.metabase.com/blog/embed-metabase-in-zendesk"
canonical: "embed-metabase-in-zendesk.html"
image: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "جاسازی یک داشبورد متابیس در Zendesk"
ogDescription: "داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید."
ogImage: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
ogUrl: "https://www.metabase.com/blog/embed-metabase-in-zendesk"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Ignacio Beines Furcada and Sarina Bloodgood"
twitterTitle: "جاسازی یک داشبورد متابیس در Zendesk"
twitterDescription: "داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید."
twitterImage: "https://www.metabase.com/images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg"
author: "Ignacio Beines Furcada and Sarina Bloodgood"
datePublished: "Feb 26, 2024"
category: "Using Metabase"
---

یک چیز جالب در مورد متابیس این است که می‌توانید یک داشبورد را در برنامه‌هایی که هر روز استفاده می‌کنید جاسازی کنید.

ما اخیراً داشبورد مشتری خود را مستقیماً در Zendesk جاسازی کردیم. داشتن این داشبورد در کنار تیکت‌های پشتیبانی به ما امکان می‌دهد اطلاعات مشتری را بدون نیاز به جابجایی بین متابیس و Zendesk ببینیم. ما حتی چند پارامتر فیلتر را برای فیلتر کردن خودکار روی مشتری و سازمان در داشبورد منتقل کردیم، که به طور قابل توجهی سرعت عیب‌یابی مسائل را افزایش داد.

داشبورد شامل موارد زیر است:

- **اطلاعات حساب**: نام مشتری، زمانی که حساب آنها ایجاد شد، اگر لغو شد و چه زمانی، وضعیت اشتراک، نام پلن
- **اطلاعات سطح پشتیبانی**: سطح پشتیبانی، آیا حساب آنها فعال است
- **اطلاعات استقرار و نسخه متابیس**: نوع استقرار، ارائه‌دهنده ابری، شماره نسخه متابیس و آخرین باری که به‌روزرسانی کردند
- **جزئیات حساب**: ارزش سالانه، LTV، تعداد کاربران، کشور
- **جزئیات ابری**: چند سوال و داشبورد مشتری دارد، و لینک به لاگ نمونه آنها
- **اطلاعات تماس**: ایمیل، نام، سطح دانش فنی
- **خوشحالی یا احساس مشتری**: پاسخ‌های نظرسنجی، پاسخ‌های CSAT و غیره
- **لیست مسائل و تیکت‌های مرتبط GitHub**

از نظر فنی، می‌توانید یک داشبورد متابیس را در هر برنامه‌ای که اجازه جاسازی iframe را می‌دهد یا اجازه برنامه‌های شخص ثالث که از استفاده از URL جاسازی پشتیبانی می‌کنند را می‌دهد جاسازی کنید. چند پلتفرم دیگر که می‌توانید این را با آنها تست کنید [Salesforce](https://appexchange.salesforce.com/)، [Jira](https://marketplace.atlassian.com/)، [Stripe](https://stripe.com/apps)، و [Shopify](https://apps.shopify.com/) هستند.

در اینجا یک راهنمای سریع از نحوه جاسازی داشبورد مشتری خود در Zendesk آمده است.

## راه‌اندازی ما: یک داشبورد تعاملی جاسازی شده در یک iframe با استفاده از یک برنامه شخص ثالث

۱. ما از [جاسازی تعاملی](../docs/latest/embedding/interactive-embedding.html) در این مثال استفاده کردیم. شما *می‌توانید* از [جاسازی عمومی](../docs/latest/embedding/public-links.html) برای جاسازی یک داشبورد استفاده کنید، اما برای این نمونه، ما نیاز به محافظت از داده مشتری داشتیم زیرا جاسازی عمومی لینک‌های عمومی را فعال می‌کند. اگر در موقعیت مشابهی هستید بهتر است با جاسازی تعاملی بمانید.
۲. ما تصمیم گرفتیم از یک برنامه iFrame به جای ساخت برنامه خود استفاده کنیم. با رفتن به یک برنامه شخص ثالث، منابع مهندسی را صرفه‌جویی کردیم و به یک پیاده‌سازی کار سریع‌تر رسیدیم. یک عیب: لوگوی برنامه‌ای که با آن رفتیم، Customer360، همیشه قابل مشاهده است. ایده‌آل نیست، اما واقعاً مشکلی برای استفاده داخلی ما نیست.

## برنامه‌های iframe که در نظر گرفتیم

برای شروع، برنامه‌ها را محدود کردیم و لیستی از مزایا و معایب آنها ساختیم:

- [Iframe Plus](https://www.zendesk.com/marketplace/apps/support/149904/iframe-plus/?queryID=aae992ecfc8aafcb2af785124981ac34): ۷ دلار برای هر نمونه، بنابراین قیمت پایین است، اما عیب این است که هیچ پشتیبانی وجود ندارد.
- [Zendesk Iframe](https://www.zendesk.com/marketplace/apps/support/1/iframe/?queryID=0585c97cb38c4b1ec6b166679feb59ea): رایگان، اما گزینه نوار کناری تیکت وجود نداشت، که جایی است که می‌خواستیم داشبورد در آن زندگی کند. به عنوان مثال، داشبورد فقط در نمای سازمان ظاهر می‌شود، نه نمای تیکت.
- [Customer360](https://www.zendesk.com/marketplace/apps/chat/213783/customer-360/): ۴ دلار برای هر عامل، بنابراین قیمت پایین است و رابط کاربری آسان استفاده است. **این برنامه‌ای است که با آن رفتیم**.

## فعال کردن جاسازی تعاملی

بعد، ما [جاسازی تعاملی](../docs/latest/embedding/interactive-embedding.html) را با رفتن به **Settings > Admin settings > Embedding** فعال کردیم. روی **Enable** کلیک کنید، و روی **Interactive embedding** کلیک کنید.

سپس URL داشبورد خود را از متابیس گرفتیم و آن را به درستی فرمت کردیم تا در برنامه Customer360 استفاده کنیم.

شما باید ویژگی source را به [URL سایت خود](../docs/latest/embedding/interactive-embedding.html#pointing-an-iframe-to-a-metabase-url) تنظیم کنید. به عنوان مثال، `https://metabase.yourcompany.com/dashboard/1`.

## مجاز کردن URL‌های Zendesk و Customer 360 در متابیس

ما همچنین نیاز به مجاز کردن URL‌های Zendesk زیر در متابیس داشتیم. برای انجام این کار، به **Admin Settings > Settings > Embedding > Interactive > Authorized Origins** رفتیم و URL‌های زیر را اضافه کردیم:

URL‌های Zendesk

- `https://*.zdusercontent.com`
- `https://*.zndsk.com`
- `https://*.zendesk.com`

URL Customer 360

- `https://*.myplaylist.io`

## نصب برنامه Customer 360 و افزودن URL داشبورد خود

بعد، ما [برنامه Customer 360 را نصب کردیم](https://www.zendesk.com/marketplace/apps/sell/562618/customer-360/?queryID=702f1711116f7af8c09eb4ee3484d563) و URL داشبورد خود را (با ویژگی source تنظیم شده به نمونه متابیس ما) وارد کردیم.

## فقط داده مشتری که نیاز دارید را با انتقال پارامترها در URL به فیلترها در داشبورد خود نشان دهید

می‌توانید مقادیر را به فیلترهای داشبورد خود از طریق URL‌های پارامتری منتقل کنید. به عنوان مثال، ما هم اطلاعات سازمان و هم درخواست‌کننده تیکت را منتقل می‌کنیم، بنابراین اکنون داشبورد ما به طور خودکار فیلتر می‌شود تا فقط اطلاعاتی که در مورد مشتری و سازمان آنها نیاز داریم را نشان دهد.

برنامه Customer 360 به شما امکان استفاده از پارامترهای زیر را می‌دهد:

- `{{ticket.requester.email}}`
- `{{ticket.requester.emails}}` (لیست جدا شده با کاما از ایمیل‌های درخواست‌کننده)
- `{{ticket.requester.external_id}}`
- `{{ticket.requester.id}}`
- `{{ticket.requester.custom_fields.<field_key>}}`
- `{{ticket.organization.id}}`
- `{{ticket.organization.external_id}}`
- `{{ticket.organization.custom_fields.<field_key>}}`
- `{{ticket.ticket_field_<field ID number>}}`

[مستندات تنظیم یک متغیر SQL](../docs/latest/questions/native-editor/sql-parameters.html) را ببینید.

![تنظیمات برنامه Customer 360 در Zendesk](../images/posts/embed-metabase-in-zendesk/customer-360-setup.png)

### یک نکته کوچک در مورد SSO

متابیس از شما می‌خواهد دوباره وارد شوید اگر صفحه تیکت Zendesk را رفرش کنید یا یک تیکت جدید اضافه کنید. همچنین، شما نیاز به یک جلسه فعال در متابیس خود دارید تا هر بار که وارد نوار کناری تیکت می‌شوید اخراج نشوید. ما این را با تنظیم `MB_SESSION_COOKIE_SAMESITE` محیط خود به `none` حل کردیم، همانطور که در [مستندات راه‌اندازی جاسازی تعاملی](../docs/latest/embedding/interactive-embedding.html) و [مستندات متغیرهای محیط](../docs/latest/configuring-metabase/environment-variables.html#mb_session_cookie_samesite) ذکر شده است.

## تمیز کردن نمای داشبورد خود در Zendesk

حالا، وقتی روی یک تیکت در Zendesk کلیک می‌کنیم و نوار کناری تیکت ظاهر می‌شود، داشبورد مشتری ما ظاهر می‌شود و به مشتری و سازمان آنها فیلتر می‌شود!

![یک داشبورد متابیس جاسازی شده در نوار کناری تیکت Zendesk](../images/posts/embed-metabase-in-zendesk/metabase-embedded-dashboard-in-zendesk.png)

ما چند جزء رابط کاربری متابیس، مانند هدرها یا breadcrumb‌ها را با تنظیم `header` به `false` در URL جاسازی پنهان کردیم. ما این کار را برای تمیز کردن نحوه ظاهر داشبورد خود در برنامه انجام دادیم.

لیستی از مثال‌هایی از کارهای دیگری که می‌توانید انجام دهید در [مستندات نمایش یا پنهان کردن اجزای رابط کاربری متابیس](../docs/latest/embedding/interactive-embedding.html#showing-or-hiding-metabase-ui-components) وجود دارد. توجه داشته باشید که برخی از این ویژگی‌ها ممکن است برای داشبوردهای خاص کار نکنند زیرا به اجزای موجود در داشبورد بستگی دارد.

## پروژه‌های جاسازی دیگر را بررسی کنید

اگر به الهام نیاز دارید، پروژه‌ها و بازخوردها را در [ردیاب GitHub](https://github.com/metabase/metabase/issues?q=is%3Aopen+is%3Aissue+label%3AEmbedding%2FInteractive+) ما بررسی کنید. اگر در آینده به صورت دستی به مخزن وارد شوید، فقط با `label:Embedding/Interactive` فیلتر کنید تا لیست کاملی از مسائل مرتبط با جاسازی فعلی دریافت کنید (روی بسته شده کلیک کنید تا مسائل حل شده را ببینید.)

## منابع بیشتر تحلیل‌های جاسازی شده

- [تحلیل‌های جاسازی شده چیست](what-is-embedded-analytics.html)
- [استراتژی‌ها برای ارائه تحلیل‌های روبروی مشتری](../learn/metabase-basics/embedding/overview.html)
- [پنج مرحله غم جاسازی](../learn/grow-your-data-skills/analytics/embedding-mistakes.html)
- [یک راز متابیس](../learn/metabase-basics/embedding/external-sharing.html)

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

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [نظارت بر تحلیل‌های جاسازی شده](embedding-usage-analytics.html)

تحلیل‌های استفاده متابیس می‌تواند به شما کمک کند یاد بگیرید که مشتریان درگیرترین شما چه کسانی هستند و چه چیزی برای آنها مهم‌تر است.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

---

<!-- blog-related-post-4 -->

![Keeping tabs on embedded analytics Image](../images/posts/embedding-usage-analytics/keeping-tabs-on-embedded-analytics.jpg)

### [نظارت بر تحلیل‌های جاسازی شده](embedding-usage-analytics.html)

تحلیل‌های استفاده متابیس می‌تواند به شما کمک کند یاد بگیرید که مشتریان درگیرترین شما چه کسانی هستند و چه چیزی برای آنها مهم‌تر است.

*Feb 19, 2024 • Using Metabase • The Metabase Team • 3 min read*

<!-- /blog-related-posts -->
