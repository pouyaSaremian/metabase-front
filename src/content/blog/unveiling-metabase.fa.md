---
title: "رونمایی از Metabase"
description: "Metabase را کشف کنید، یک ابزار BI منبع باز طراحی شده برای سادگی، که به همه در شرکت شما امکان دسترسی آسان به داده را می‌دهد."
url: "https://www.metabase.com/blog/unveiling-metabase"
canonical: "unveiling-metabase.html"
image: "https://www.metabase.com/images/posts/unveiling-metabase.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "رونمایی از Metabase"
ogDescription: "Metabase را کشف کنید، یک ابزار BI منبع باز طراحی شده برای سادگی، که به همه در شرکت شما امکان دسترسی آسان به داده را می‌دهد."
ogImage: "https://www.metabase.com/images/posts/unveiling-metabase.jpg"
ogUrl: "https://www.metabase.com/blog/unveiling-metabase"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Sameer Al-Sakran"
twitterTitle: "رونمایی از Metabase"
twitterDescription: "Metabase را کشف کنید، یک ابزار BI منبع باز طراحی شده برای سادگی، که به همه در شرکت شما امکان دسترسی آسان به داده را می‌دهد."
twitterImage: "https://www.metabase.com/images/posts/unveiling-metabase.jpg"
author: "Sameer Al-Sakran"
datePublished: "Oct 21, 2015"
category: "News"
---

**خلاصه: هوش تجاری منبع باز. در ۵ دقیقه نصب می‌شود، قابل استفاده توسط همه در شرکت شما، [اینجا](../pricing/index.html) دانلود کنید.**

در برخی موارد، از بازنویسی همان سیستم در هر شغل خسته می‌شوید. می‌پرسید، و به نظر می‌رسد که همه دیگران هم یکی نوشته‌اند. هر یک از شرکت‌های فناوری برتر یکی (یا چند) از خود را نوشته‌اند—HiPal در Facebook، EasyData در LinkedIn، Sherpa در Google، AirPal در Airbnb، Avocado در Yammer و بیشتر. درخواست‌های اولیه متفاوت است—تمایل به پیگیری اینکه چند ویدیو هر هفته آپلود می‌شود، جستجوی یک کاربر و دیدن تمام تراکنش‌های آنها، نقل قول موجودی تبلیغات به خریداران احتمالی، یا کشیدن فهرستی از حساب‌های غیرفعال.

در قلب همه این سوالات تمایل همکاران غیرفنی برای توانایی کشیدن اطلاعات از پایگاه‌های داده شرکت به تنهایی است.

به جای اختراع مجدد چرخ فکر می‌کنید "بیایید ببینیم ۱۰۰۰ فروشنده در این فضا از آخرین باری که نگاه کردم چه کرده‌اند". به سرعت آشکار می‌شود که چشم‌انداز با محصولاتی که فقط در حالت demo برای C-Suite کار می‌کنند، آنقدر پیچیده هستند که آموزش و گواهینامه یک جریان درآمد است یا آنقدر بیش از حد تخصصی هستند که باید با ۱۰ ابزار دیگر مطابقت داده شوند تا کار یک روز انجام شود، پر شده است.

علیرغم این سیل قریب‌الوقوع فروشندگان، ابزارها، اصطلاحات، مخفف‌ها و استارتاپ‌های بیش از حد تبلیغ شده، اگر می‌خواهید اطلاعات در یک پایگاه داده را بگیرید و به همه در شرکت خود امکان دسترسی به آن را بدهید، تصمیم می‌گیرید که آیا می‌خواهید یک راه‌حل پیچیده غیرقابل استفاده که سالانه هزاران دلار برای شما هزینه دارد یا یک راه‌حل پیچیده غیرقابل استفاده که سالانه میلیون‌ها دلار برای شما هزینه دارد.

مانند دیگرانی که یا استارتاپ‌های فناوری را شروع کرده‌اند یا در آنها کار کرده‌اند، ما به استفاده از نرم‌افزار منبع باز زمانی که به یک سیستم عامل، نرم‌افزار وبلاگ، یک سرور وب یا یک زبان برنامه‌نویسی نیاز داریم عادت کرده‌ایم. علیرغم برخی نقاط روشن، گزینه‌های BI منبع باز به طور یکنواخت نصب دشوار، پیکربندی دشوار و هدف‌گذاری شده برای متخصصان هستند.

و بنابراین، یک سال پیش، خود را در حال نوشتن دوباره سیستم یافتیم. نیاز به امن، آسان برای نصب، بازی خوب با الگوهای استقرار مدرن و مهم‌تر از همه آسان برای استفاده توسط همکاران غیرفنی ما داشت. ما آن را با شرکت‌هایی که با آنها در پورتفولیو Expa کار کردیم و همچنین تعدادی انتخابی از شرکت‌های خارجی تست کرده‌ایم. با بیش از یک سال اجرای Metabase در تولید، ما چیزهای زیادی درباره نحوه دریافت اطلاعات به کسانی که در خطوط مقدم شرکت‌های در حال رشد هستند یاد گرفته‌ایم و آن را به محصول خود ریخته‌ایم.

امروز، ما Metabase را منبع باز می‌کنیم. ما قصد داریم آن را اولین قدم واضح برای هر شرکتی برای دریافت داده‌هایی که با زحمت جمع‌آوری شده‌اند به کسانی که بیشتر قادر به استفاده از آن هستند کنیم. آن را از [metabase.com/pricing](../pricing/index.html) دریافت کنید، در ۵ دقیقه نصب کنید، و همه در شرکت خود را باهوش‌تر کنید.

سال ۲۰۱۵ است، پرداخت برای BI پایه را متوقف کنید.

-تیم Metabase

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
