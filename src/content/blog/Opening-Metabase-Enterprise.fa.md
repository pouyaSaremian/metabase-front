---
title: "یک شروع سازمانی"
description: "ما مخازن OSS و Enterprise خود را یکپارچه می‌کنیم و codebase Enterprise را به صورت عمومی در دسترس قرار می‌دهیم"
url: "https://www.metabase.com/blog/Opening-Metabase-Enterprise"
canonical: "Opening-Metabase-Enterprise.html"
image: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "یک شروع سازمانی"
ogDescription: "ما مخازن OSS و Enterprise خود را یکپارچه می‌کنیم و codebase Enterprise را به صورت عمومی در دسترس قرار می‌دهیم"
ogImage: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
ogUrl: "https://www.metabase.com/blog/Opening-Metabase-Enterprise"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "یک شروع سازمانی"
twitterDescription: "ما مخازن OSS و Enterprise خود را یکپارچه می‌کنیم و codebase Enterprise را به صورت عمومی در دسترس قرار می‌دهیم"
twitterImage: "https://www.metabase.com/images/posts/an-enterprising-opening.jpg"
author: "The Metabase Team"
datePublished: "Oct 23, 2020"
category: "News"
---

ما منبع نسخه Enterprise Metabase را در دسترس قرار می‌دهیم.

اکنون کمی بیش از یک سال از اعلام نسخه تجاری [Metabase](they-grow-up-so-fast.html) گذشته است. در طول سال گذشته، ما چیزهای زیادی درباره نحوه اجرای یک کسب‌وکار OpenCore، و همچنین نحوه مدیریت ارائه دو نسخه Metabase یاد گرفته‌ایم.

نسخه تجاری Metabase Source Available است، و ما به مشتریان گزینه دسترسی به codebase از طریق GitHub داده‌ایم. کد از مخزن OSS fork شده بود و در طول سال گذشته ما تعدادی ویژگی فقط Enterprise اضافه کرده‌ایم. ما در ابتدا نسخه Enterprise را در یک مخزن GitHub خصوصی توسعه دادیم تا توسعه EE را از سر راه کاربران پایه OSS دور نگه داریم. ما همچنین می‌خواستیم خطوط بین دو نسخه خود و اینکه کدام مجوز برای هر codebase اعمال می‌شود را کاملاً واضح نگه داریم.

خیلی زود، ما با برخی مشکلات مواجه شدیم. مشابه [تجربه GitLab](https://about.gitlab.com/blog/2019/08/23/a-single-codebase-for-gitlab-community-and-enterprise-edition/)، ما دریافتیم که داشتن دو مخزن جداگانه کار اضافی زیادی ایجاد می‌کند.

به طور خاص، merge و release بیش از دو برابر کار شد. تبدیل به یک رویداد منظم شد که conflictهای merge عظیمی داشته باشیم که ساعات طول می‌کشید تا باز شوند. فرآیند merge مستعد خطا بود، و ما به طور منظم باگ معرفی می‌کردیم به دلیل تغییرات در codebase OSS که فرضیات در codebase EE را می‌شکست. در حالی که ما اغلب این خطاها را قبل از release به مشتریان Enterprise خود می‌گرفتیم، ما به طور ناخواسته تعدادی باگ خجالت‌آور ارسال کرده‌ایم.

ما در ابتدا همه اینها را به عنوان کار ضروری برای پشتیبانی از مشتریان پرداخت‌کننده خود در نظر گرفتیم. اما به طور فزاینده‌ای واضح شد که کار شلوغی مستعد خطا است. با گذشت زمان، مزایای نظری نگه داشتن ویژگی‌های OSS و Enterprise جدا تحت تأثیر معایب دنیای واقعی کاربران ما که با باگ مواجه می‌شوند، و تیم ما که وقت را تلف می‌کند که می‌توانست صرف بهبود فعال زندگی کاربران ما شود، قرار گرفت.

علاوه بر این، اعطای دسترسی فردی به مشتریان پرداخت‌کننده به کد منبع Enterprise زمان‌بر و بی‌معنی بود — چرا کد منبع Enterprise خود را پنهان کنیم وقتی ریشه موفقیت ما طبیعت منبع باز ما است؟

مانند [بسیاری](https://github.com/elastic/elasticsearch)[دیگران](https://github.com/timescale/timescaledb) قبل از ما، ما به این نتیجه رسیده‌ایم که در نهایت به نفع کاربران ما است که ما وقت خود را صرف کار روی چیزهایی کنیم که مستقیماً محصول Metabase را بهبود می‌بخشد به جای کارهای خانه‌داری طولانی و بی‌تشکر.

## چه اتفاقی می‌افتد؟

- ما کد منبع Metabase Enterprise را منتشر می‌کنیم
- مخزن [github.com/metabase/metabase](https://github.com/metabase/metabase) شامل کد OSS و Metabase Enterprise خواهد بود
- issue tracker یکپارچه می‌شود
- هر issue در مخزن منبع باز که برای ویژگی‌های Enterprise درخواست می‌کند بسته می‌شود

## چرا؟

به چند دلیل – به مشتریان و کسانی که در آزمایش‌ها هستند دسترسی آسان به codebase Enterprise می‌دهد، و زمان تلف شده توسط تیم ما در حل conflictهای merge را کاهش می‌دهد. ما این زمان بازیابی شده را صرف بهتر کردن محصول می‌کنیم.

## این برای آینده چه معنایی دارد؟

ما هر دو نسخه OSS و Enterprise را به صورت باز توسعه خواهیم داد. مشتریان نسخه Enterprise، مشتریان احتمالی در آزمایش، و هر کسی که فقط کنجکاو است آزاد خواهد بود که کد منبع Enterprise را بررسی کند.

## سوالات متداول

### آیا این به این معنی است که من به codebase اختصاصی شما به صورت رایگان کمک می‌کنم؟

مگر اینکه واقعاً، واقعاً به دلایلی بخواهید. خوش آمدید که به آن نگاه کنید، آن را مطالعه کنید، از آن استفاده کنید تا تصمیم بگیرید که آیا به عنوان مشتری به نسخه Enterprise علاقه‌مند هستید.

### چگونه می‌توانم مطمئن شوم که کمک‌های من به codebase اختصاصی نمی‌رود؟

همه عملکرد Enterprise ما در پوشه "enterprise" در root است. تا زمانی که Pull Request ارسالی شما شامل هیچ فایلی که در این دایرکتوری می‌رود نباشد، بخشی از محصول منبع باز ما خواهد بود.

### آیا این به این معنی است که می‌توانم Metabase Enterprise را به صورت رایگان استفاده کنم؟

خیر. فقط به این دلیل که منبع به صورت عمومی در دسترس است به این معنی نیست که می‌توانید آن را به صورت رایگان اجرا کنید. Metabase Enterprise هنوز نیاز به مجوز برای استفاده دارد.

### آیا کد نسخه Enterprise اکنون که عمومی است منبع باز است؟

خیر، منبع باز نیست. Source Available است، که به این معنی است که می‌توانید آن را بررسی کنید، تغییر دهید و تغییرات را توزیع کنید، مشروط به محدودیت‌های مجوز شما، در صورت وجود.

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![Metabase Community Data Stack Report 2025 Image](../images/og-data-stack-report-2025.jpg)

### [گزارش پشته داده جامعه Metabase 2025](metabase-community-data-stack-report-2025-key-analysis.html)

ما از ۳۳۰+ تیم پرسیدیم که چگونه پشته داده خود را می‌سازند و استفاده می‌کنند - از انتخاب ابزار تا پذیرش AI. این چیزی است که یاد گرفتیم.

*Sep 03, 2025 • News • Alex Yarosh • 7 min read*

---

<!-- blog-related-post-2 -->

![Metabase Community Data Stack Report 2025 Image](../images/og-data-stack-report-2025.jpg)

### [گزارش پشته داده جامعه Metabase 2025](metabase-community-data-stack-report-2025-key-analysis.html)

ما از ۳۳۰+ تیم پرسیدیم که چگونه پشته داده خود را می‌سازند و استفاده می‌کنند - از انتخاب ابزار تا پذیرش AI. این چیزی است که یاد گرفتیم.

*Sep 03, 2025 • News • Alex Yarosh • 7 min read*

---

<!-- blog-related-post-3 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [نظرسنجی پشته داده جامعه Metabase: توسط تیم‌های داده، برای تیم‌های داده](metabase-community-data-stack-survey-2025.html)

نحوه تکامل پشته داده مدرن: خود را به اشتراک بگذارید و ببینید چگونه مقایسه می‌شود

*May 11, 2025 • News • Margaret Rimek • 2 min read*

---

<!-- blog-related-post-4 -->

![The Metabase Community Data Stack Survey: by data teams, for data teams Image](../images/posts/metabase-data-stack-survey-2025-blog.jpg)

### [نظرسنجی پشته داده جامعه Metabase: توسط تیم‌های داده، برای تیم‌های داده](metabase-community-data-stack-survey-2025.html)

نحوه تکامل پشته داده مدرن: خود را به اشتراک بگذارید و ببینید چگونه مقایسه می‌شود

*May 11, 2025 • News • Margaret Rimek • 2 min read*

<!-- /blog-related-posts -->
