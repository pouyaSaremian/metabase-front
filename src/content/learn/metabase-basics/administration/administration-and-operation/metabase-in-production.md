---
title: "نحوه اجرای متابیس در production"
description: "اگر متابیس را self-host می‌کنید، در اینجا برخی benchmarkها و بهترین روش‌ها هستند."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/metabase-in-production
  - /learn/administration/metabase-in-production
toc:
  - id: "how-to-run-metabase-in-production"
    title: "نحوه اجرای متابیس در production"
    level: 1
    href: "#how-to-run-metabase-in-production"
  - id: "what-s-in-the-metabase-jar"
    title: "چه چیزی در JAR متابیس است"
    level: 2
    href: "#what-s-in-the-metabase-jar"
  - id: "a-jar-and-a-database-are-all-you-need"
    title: "یک JAR و یک پایگاه داده تمام چیزی است که نیاز دارید"
    level: 2
    href: "#a-jar-and-a-database-are-all-you-need"
  - id: "why-you-need-to-use-a-separate-application-database"
    title: "چرا باید از یک پایگاه داده برنامه جداگانه استفاده کنید"
    level: 2
    href: "#why-you-need-to-use-a-separate-application-database"
  - id: "if-you-ve-already-started-using-the-default-h2-database"
    title: "اگر قبلاً از پایگاه داده پیش‌فرض H2 استفاده کرده‌اید"
    level: 2
    href: "#if-you-ve-already-started-using-the-default-h2-database"
  - id: "metabase-application-and-database-servers-and-their-sizing"
    title: "سرورهای برنامه و پایگاه داده متابیس و اندازه‌بندی آن‌ها"
    level: 2
    href: "#metabase-application-and-database-servers-and-their-sizing"
  - id: "metabase-application-server-size"
    title: "اندازه سرور برنامه متابیس"
    level: 3
    href: "#metabase-application-server-size"
  - id: "metabase-application-database-server-size"
    title: "اندازه سرور پایگاه داده برنامه متابیس"
    level: 3
    href: "#metabase-application-database-server-size"
  - id: "each-metabase-environment-must-have-its-own-dedicated-application-database"
    title: "هر محیط متابیس باید پایگاه داده برنامه اختصاصی خود را داشته باشد"
    level: 2
    href: "#each-metabase-environment-must-have-its-own-dedicated-application-database"
  - id: "maintenance"
    title: "نگهداری"
    level: 2
    href: "#maintenance"
  - id: "metabase-server-maintenance"
    title: "نگهداری سرور متابیس"
    level: 3
    href: "#metabase-server-maintenance"
  - id: "metabase-application-database-maintenance"
    title: "نگهداری پایگاه داده برنامه متابیس"
    level: 3
    href: "#metabase-application-database-maintenance"
  - id: "data-warehouse-server-maintenance"
    title: "نگهداری سرور انبار داده"
    level: 3
    href: "#data-warehouse-server-maintenance"
  - id: "example-load-test"
    title: "مثال تست بار"
    level: 2
    href: "#example-load-test"
  - id: "async-processes"
    title: "فرآیندهای ناهمزمان"
    level: 2
    href: "#async-processes"
  - id: "observability-and-some-metrics-to-monitor"
    title: "قابلیت مشاهده و برخی معیارهای نظارت"
    level: 2
    href: "#observability-and-some-metrics-to-monitor"
  - id: "metabase-application"
    title: "برنامه متابیس"
    level: 3
    href: "#metabase-application"
  - id: "metabase-application-database"
    title: "پایگاه داده برنامه متابیس"
    level: 3
    href: "#metabase-application-database"
  - id: "when-to-increase-the-connection-pool-size"
    title: "چه زمانی اندازه pool اتصال را افزایش دهیم"
    level: 3
    href: "#when-to-increase-the-connection-pool-size"
  - id: "using-a-load-balancer"
    title: "استفاده از load balancer"
    level: 2
    href: "#using-a-load-balancer"
  - id: "logs"
    title: "لاگ‌ها"
    level: 2
    href: "#logs"
  - id: "metabase-over-https"
    title: "متابیس از طریق HTTPS"
    level: 2
    href: "#metabase-over-https"
  - id: "pitfalls-to-avoid"
    title: "دام‌هایی که باید از آن‌ها اجتناب کرد"
    level: 2
    href: "#pitfalls-to-avoid"
  - id: "we-recommend-that-you-avoid-services-that-claim-to-scale-automagically"
    title: "توصیه می‌کنیم از سرویس‌هایی که ادعا می‌کنند به طور خودکار مقیاس‌پذیر هستند، اجتناب کنید"
    level: 3
    href: "#we-recommend-that-you-avoid-services-that-claim-to-scale-automagically"
  - id: "avoid-services-that-shut-down-servers-when-they-re-not-in-use"
    title: "از سرویس‌هایی که سرورها را در صورت عدم استفاده خاموش می‌کنند، اجتناب کنید"
    level: 3
    href: "#avoid-services-that-shut-down-servers-when-they-re-not-in-use"
  - id: "issues-with-running-on-other-cloud-providers"
    title: "مشکلات اجرای روی سایر ارائه‌دهندگان ابری"
    level: 3
    href: "#issues-with-running-on-other-cloud-providers"
  - id: "upgrading-to-a-new-major-version-of-metabase"
    title: "ارتقا به یک نسخه اصلی جدید متابیس"
    level: 2
    href: "#upgrading-to-a-new-major-version-of-metabase"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مدیریت و عملیات"
    href: "index.html"
---

# نحوه اجرای متابیس در production

اگر متابیس را self-host می‌کنید، در اینجا برخی benchmarkها و بهترین روش‌ها هستند.

این مقاله آنچه یک راه‌اندازی production-ready متابیس به نظر می‌رسد را توصیف می‌کند، از جمله اندازه‌بندی سرور، بهترین روش‌ها، و دام‌هایی که باید از آن‌ها اجتناب کرد. این مقاله برای افرادی است که علاقه‌مند به self-hosting متابیس هستند. اگر می‌خواهید ما متابیس را برای شما اجرا کنیم، فقط [برای یک آزمایش رایگان ثبت‌نام کنید](../../../../pricing/index.html).

## چه چیزی در JAR متابیس است

برای context، متابیس یک برنامه وب است. بک‌اند آن در Clojure نوشته شده است، و frontend آن در JavaScript، TypeScript، و ClojureScript با استفاده از فریم‌ورک React نوشته شده است.

به طور پیش‌فرض، کل برنامه self-contained است: بک‌اند و وب سروری که frontend را سرو می‌کند در همان bundle ship می‌شوند. bundle یک فایل JAR است، که می‌تواند در هر جایی که یک محیط runtime Java نصب شده است اجرا شود.

متابیس همچنین یک image container که JRE و JAR متابیس را package می‌کند ship می‌کند (که همچنین می‌توانید با Podman اجرا کنید).

## یک JAR و یک پایگاه داده تمام چیزی است که نیاز دارید

![JAR متابیس در حال اجرا در یک container، ذخیره داده برنامه خود در یک پایگاه داده Postgres.](../../../images/metabase-in-production/metabase-and-app-db.png)

برای اجرای متابیس در production، به دو چیز نیاز دارید:

1. یا یک JAR متابیس یا image container.
2. یک پایگاه داده PostgreSQL اختصاصی برای ذخیره پایگاه داده برنامه متابیس

همچنین می‌توانید از MySQL/MariaDB برای ذخیره پایگاه داده برنامه متابیس استفاده کنید، اما به شدت Postgres را توصیه می‌کنیم.

## چرا باید از یک پایگاه داده برنامه جداگانه استفاده کنید

متابیس همه entityهای خود (داشبوردها، سؤال‌ها، حساب‌ها، پیکربندی‌ها) را در پایگاه داده برنامه خود ذخیره می‌کند.

> اگر با پایگاه داده برنامه پیش‌فرض مبتنی بر فایل بمانید، پایگاه داده شما در نهایت به طور غیرقابل برگشت corrupted می‌شود، و باید از ابتدا شروع کنید (بعد از از دست دادن همه کار خود: همه سؤال‌ها، داشبوردها، و غیره)**.

پس یک چیز که می‌خواهید از انجام آن اجتناب کنید استفاده از پایگاه داده برنامه پیش‌فرض است که با JAR متابیس ship می‌شود. آن پایگاه داده embedded فقط برای استفاده محلی در نظر گرفته شده است. آن پایگاه داده embedded را به عنوان نوعی party favor برای افرادی که فقط می‌خواهند متابیس را روی ماشین خود امتحان کنند شامل می‌کنیم. آن پایگاه داده H2 embedded همچنین برخی داده نمونه را house می‌کند که مردم می‌توانند با آن بازی کنند. برای production در نظر گرفته نشده است.

به طور مشابه، اگر متابیس را در یک container اجرا می‌کنید، همه کار خود را هر بار که container شما با یک نسخه جدید جایگزین می‌شود از دست می‌دهید. containerها ephemeral هستند، پس داده خود را در آن‌ها نگه ندارید.

می‌توانید از همه این مشکلات با استفاده از یک [پایگاه داده برنامه PostgreSQL اختصاصی](../../../../docs/latest/installation-and-operation/configuring-application-database.html) اجتناب کنید.

## اگر قبلاً از پایگاه داده پیش‌فرض H2 استفاده کرده‌اید

مشکلی نیست. اما باید [به یک پایگاه داده production migrate کنید](../../../../docs/latest/installation-and-operation/migrating-from-h2.html) در اسرع وقت.

## سرورهای برنامه و پایگاه داده متابیس و اندازه‌بندی آن‌ها

توصیه می‌کنیم حداقل دو instance (ایده‌آل روی همان شبکه) اجرا کنید:

- [یک یا چند instance برای برنامه متابیس](#metabase-application-server-size).
- [یک instance پایگاه داده برای پایگاه داده برنامه Postgres یا MySQL متابیس](#metabase-application-database-server-size) جایی که متابیس داده برنامه خود را ذخیره می‌کند. توصیه می‌کنیم instance پایگاه داده برای هیچ هدف دیگری جز پایگاه داده برنامه متابیس استفاده نشود.

دلیل اینکه می‌خواهید این instanceها را روی همان شبکه اجرا کنید کاهش زمان لازم برای متابیس (برنامه) برای دریافت پاسخ از پایگاه داده ذخیره‌کننده داده برنامه آن است. اکثریت قریب به اتفاق عملیات متابیس نیاز به فراخوانی API متابیس دارد، که از پایگاه داده برنامه برای retrieve کردن اطلاعات درباره سؤال‌ها، داشبورد، فراداده جدول، و غیره استفاده می‌کند.

### اندازه سرور برنامه متابیس

متابیس حداقل به 1 هسته و 1GB RAM به عنوان baseline نیاز دارد. علاوه بر آن، برای هر 20 نفر همزمان استفاده‌کننده از متابیس شما، متابیس به 1 CPU و 2GB RAM نیاز دارد. این توصیه‌های سیستم اعمال می‌شوند چه متابیس را به عنوان JAR یا به عنوان image container اجرا می‌کنید. به عنوان مثال، اگر 40 کاربر همزمان دارید، در مجموع به 3 هسته CPU و 5GB RAM نیاز دارید.

توجه: قبل از v52 فقط 1GB حافظه برای هر 20 کاربر همزمان توصیه می‌کردیم، اما این نیاز را در نسخه‌های جدیدتر برای اطمینان افزایش دادیم.

### اندازه سرور پایگاه داده برنامه متابیس

پایگاه داده برنامه احتمالاً مهم‌ترین کامپوننت کل معماری است: نقطه شکست واحد است، و هر چه سریع‌تر app db بتواند پرس‌وجوها را به سرور برنامه متابیس برگرداند، بهتر است.
به عنوان نقطه شروع، 1 هسته CPU و 2GB RAM را به سرور در حال اجرای پایگاه داده برنامه خود اختصاص دهید. به عنوان یک قانون کلی، برای هر 40 نفر همزمان استفاده‌کننده از متابیس شما، یک پایگاه داده برنامه PostgreSQL به 1 هسته CPU و 1 GB RAM نیاز دارد.

## هر محیط متابیس باید پایگاه داده برنامه اختصاصی خود را داشته باشد

با محیط، منظورمان یک یا چند jar متابیس (یا imageهای container)، و یک پایگاه داده برنامه است. اگر چندین محیط اجرا می‌کنید، می‌توانید چندین پایگاه داده برنامه، یکی برای هر محیط، روی همان سرور پایگاه داده برنامه اجرا کنید، اما هر محیط باید پایگاه داده برنامه اختصاصی خود را داشته باشد.

## نگهداری

نگه داشتن همه چیز در حال اجرای روان.

- [نگهداری سرور متابیس](#metabase-server-maintenance)
- [نگهداری پایگاه داده برنامه متابیس](#metabase-application-database-maintenance)
- [نگهداری سرور انبار داده](#data-warehouse-server-maintenance)

### نگهداری سرور متابیس

نیازی به انجام کاری ندارید. باید فقط کار کند.

### نگهداری پایگاه داده برنامه متابیس

همه پایگاه‌های داده نیاز به نگهداری برای عملکرد بهینه دارند، و PostgreSQL و MySQL استثنا نیستند. بهترین روش‌های PostgreSQL را برای نگهداری(https://www.postgresql.org/docs/current/maintenance.html) (به خصوص backupها) دنبال کنید:

- [Postgres](https://www.postgresql.org/docs/current/backup.html)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/backup-and-recovery.html)

این پایگاه داده برنامه باید:

- به صورت روزانه backup شود.
- به صورت هفتگی vacuum و analyze شود.

علاوه بر این، cardها و داشبوردهایی که دیگر نیاز نیستند باید به طور دوره‌ای archive و delete شوند.

### نگهداری سرور انبار داده

نگهداری data warehouse شما به اینکه از کدام data warehouse استفاده می‌کنید بستگی دارد. مستندات پایگاه داده را برای راهنمایی ببینید.

## مثال تست بار

در این [تست بار](https://github.com/paoliniluis/metabase-load-test-k6) ساده، API متابیس معیارهای زیر را روی K6 clock کرد.

- قرمز: عملکرد ضعیف
- سبز: عملکرد خوب

| معیارها / سیستم‌ها | 2 هسته / 2GB RAM | 3 هسته / 3GB RAM | 4 هسته / 4GB RAM | 8 هسته / 8GB RAM | 16 هسته / 16GB RAM |
| --- | --- | --- | --- | --- | --- |
| Total Requests Processedتعداد کل درخواست‌های وب موفق handle شده | 278,303 | 303,420 | 311,740 | 311,350 | 313,625 |
| Requests Per Secondچند درخواست سیستم می‌تواند هر ثانیه پردازش کند (بالاتر بهتر است) | 121.3 req/s | 132.0 req/s | 136.2 req/s | 135.8 req/s | 136.1 req/s |
| Avg Response Timeچقدر طول می‌کشد، به طور متوسط، برای دریافت پاسخ (پایین‌تر بهتر است) | 78.59ms | 38.89ms | 26.82ms | 27.45ms | 24.46ms |
| Slowest 10% (p90)کندترین 10% درخواست‌ها حداقل این مدت طول کشید | 204.97ms | 88.58ms | 66.00ms | 66.73ms | 65.78ms |
| Slowest 5% (p95)کندترین 5% درخواست‌ها حتی بیشتر از این طول کشید | 389.85ms | 118.88ms | 81.79ms | 83.01ms | 76.72ms |
| Time to Receive Dataزمان دریافت داده بعد از ارسال درخواست | 6.16ms | 2.54ms | 1.56ms | 1.52ms | 1.62ms |
| Time to Send Dataزمان صرف شده برای ارسال درخواست به سرور (معمولاً بسیار سریع) | 16.74µs | 17.46µs | 15.07µs | 16.04µs | 17.79µs |
| Time Waiting for Responseتأخیر بین ارسال درخواست و دریافت پاسخ | 72.41ms | 36.32ms | 25.24ms | 25.90ms | 22.82ms |
| Test Duration per Iterationزمان کل برای یک iteration تست برای کامل شدن | 30.92s | 28.36s | 27.57s | 27.62s | 27.42s |
| Total Iterationsتعداد دفعاتی که تست به طور کامل تکمیل شد | 4,273 | 4,666 | 4,796 | 4,790 | 4,825 |
| Total Data Receivedچقدر داده در طول تست دانلود شد | 16GB | 17GB | 17GB | 17GB | 17GB |
| Total Data Sentچقدر داده در طول تست آپلود شد | 103MB | 112MB | 115MB | 115MB | 116MB |

برخی context درباره تست بار:

- این تست بار با متابیس v53.5 روی یک لپ‌تاپ با (Ryzen 7840HS) با تغییر هسته‌های CPU و RAM اختصاص داده شده به container متابیس و تنظیم بالاترین پروفایل power اجرا شد.
- برای باقی گذاشتن مقداری فضا برای حافظه non-heap، متابیس را با متغیر محیطی `JAVA_TOOL_OPTIONS: -Xmx<80% of total RAM>m` پیکربندی کردیم.
- پایگاه داده برنامه Postgres نسخه 17 با 2 هسته و 8GB RAM بود.
- بدون HTTPS.
- این تست بار خاص را با منابع کمتر از آنچه توصیه می‌کنیم انجام دادیم (برای 100 کاربر همزمان، 6 هسته و 11GB RAM را توصیه می‌کنیم). عمداً از منابع کمتر استفاده کردیم تا نشان دهیم برنامه می‌تواند spikeهای ترافیک را بدون تخریب قابل توجه عملکرد handle کند وقتی هسته‌ها و حافظه کافی در دسترس دارد.
- اگرچه این تست بار چندین endpoint API را بررسی کرد، *برای* عملیات CPU/حافظه فشرده مثل X-Rays، یا عملیات ناهمزمان مثل اشتراک‌ها، هشدارها، syncهای پایگاه داده یا scan/fingerprinting پایگاه داده تست نکرد.

تست‌های بار، با این حال، نمی‌توانند استفاده واقعی را تقلید کنند. فعالیت مردم در متابیس شما الگوهای مختلف فراخوانی API را ایجاد می‌کند. همچنین فرآیندهای ناهمزمان در پس‌زمینه در حال اجرا خواهید داشت. اگر متابیس منابع CPU کافی نداشته باشد، عملیات را queue می‌کند و شروع به مصرف حافظه بیشتر می‌کند. اگر queue overflow شود، متابیس ممکن است crash کند در تلاش برای deal کردن با همه درخواست‌ها. در آن صورت، نیاز دارید هسته‌ها و حافظه بیشتری اختصاص دهید.

## فرآیندهای ناهمزمان

متابیس فرآیندهای ناهمزمان را به طور دوره‌ای اجرا می‌کند که CPU و RAM را بسته به تعداد جداول و تعداد ستون‌ها روی جداول شما استفاده می‌کنند.

این فرآیندها:

- sync
- scan
- fingerprinting
- field values
- model caching
- question metadata

اگر می‌بینید متابیس CPU زیادی در یک دوره زمانی خاص استفاده می‌کند، logها را بررسی کنید تا ببینید آیا متابیس هر یک از این فرآیندها را اجرا می‌کند. اگر چنین است، می‌توانید این کارها را schedule کنید تا هر زمان که مردم از متابیس شما استفاده نمی‌کنند اجرا شوند.

متابیس هر یک از این کارها را به یک هسته واحد اختصاص می‌دهد. اگر سرور شما چهار هسته دارد، حداکثر تعداد فرآیندهای async که متابیس اجرا می‌کند سه است، چون یک هسته باید برای سرو کردن درخواست‌های مردم در دسترس باشد (یک هسته باید بتواند درخواست‌ها را به ~10 نفر استفاده‌کننده از متابیس به طور همزمان سرو کند).

## قابلیت مشاهده و برخی معیارهای نظارت

متابیس یک [endpoint معیار که می‌تواند توسط Prometheus scrape شود](../../../../docs/latest/installation-and-operation/observability-with-prometheus.html) را expose می‌کند. ایده‌آل این است که برخی alarmها تنظیم کنید تا بتوانید اقدام کنید اگر هر یک از این اعداد از یکی از این آستانه‌ها عبور کند.

### برنامه متابیس

- زمان پاسخ API
- CPU: حداکثر 80%-90%
- RAM: حداکثر 80%

### پایگاه داده برنامه متابیس

- CPU: حداکثر 90%
- RAM: حداکثر 80%
- استفاده دیسک: حداکثر 80%.
- IOPS دیسک: پشتیبانی IOPS دیسک خود را بررسی کنید. اگر دیسکی که برای اجرای app db استفاده می‌کنید از IOPS که دیسک ادعا می‌کند پشتیبانی می‌کند تجاوز کند، سپس دیسک شما عملیات را queue می‌کند، که بر عملکرد تأثیر می‌گذارد.

### چه زمانی اندازه pool اتصال را افزایش دهیم

به طور پیش‌فرض، اندازه pool اتصال متابیس به 15 اتصال محدود شده است. متابیس یک pool برای هر پایگاه داده متصل مدیریت می‌کند، از جمله یک pool برای پایگاه داده برنامه، با هر pool محدود به 15 اتصال.

برای handle کردن مردم بیشتر استفاده‌کننده از متابیس به طور همزمان، می‌توانید محدودیت اتصال به پایگاه داده برنامه را با متغیر محیطی `MB_APPLICATION_DB_MAX_CONNECTION_POOL_SIZE` override کنید. اگر این محدودیت را افزایش دهید، ممکن است نیاز داشته باشید RAM بیشتری به پایگاه داده برنامه خود بدهید، پس باید استفاده RAM از app db خود را نظارت کنید. اگر پایگاه داده RAM آزاد نداشته باشد، پایگاه داده اتصال‌ها را queue می‌کند، که به معنای این است که برخی مردم متابیس را unresponsive می‌یابند در حالی که منتظر آزاد شدن RAM است.

متابیس فقط از اتصال‌هایی که در هر زمان معین نیاز دارد استفاده می‌کند. اما برخی درخواست‌ها می‌توانند بسیاری از این اتصال‌ها را tie up کنند. به عنوان مثال، اگر کسی یک داشبورد با 20 card روی آن load کند، متابیس از 15 اتصال در دسترس خود برای retrieve کردن نتایج استفاده می‌کند، و پنج card باقی‌مانده را همانطور که اتصال‌ها در دسترس می‌شوند load می‌کند.

## استفاده از load balancer

![یک راه‌اندازی متابیس با یک load balancer.](../../../images/metabase-in-production/metabase-with-load-balancer.png)

یک روش معماری خوب استفاده از یک load balancer روی متابیس است، حتی اگر فقط یک سرور در حال اجرا دارید، و هیچ scale کردن افقی انجام نمی‌دهید. استقرار یک load balancer بعداً می‌تواند پیاده‌سازی trickier باشد، و load balancer همچنین می‌تواند TLS termination (a.k.a. encrypting و decrypting ترافیک HTTP)، WAF (web application firewall)، redirectها، و سایر کارهای رایج را انجام دهد.

[Load balancing ساده](metabase-at-scale.html#straightforward-load-balancing) را ببینید.

## لاگ‌ها

متابیس logهای برنامه تولید می‌کند که باید نگه دارید. این logها برای debugging و auditing مفید هستند. مستندات ما درباره [پیکربندی log](../../../../docs/latest/configuring-metabase/log-configuration.html) را بررسی کنید.

اگر همچنین یک load balancer، یا reverse proxy، روی متابیس استقرار داده‌اید، توصیه می‌کنیم آن logها را به یک log aggregator ذخیره کنید. این logها به شما کمک می‌کنند الگوها را شناسایی کنید و در صورت نیاز تحقیقات انجام دهید.

## متابیس از طریق HTTPS

می‌توانید [متابیس را از طریق HTTPS سرو کنید](../../../../docs/latest/configuring-metabase/customizing-jetty-webserver.html#using-https-with-metabase) بدون استفاده از load balancer یا reverse proxy.

فقط توجه کنید که اگر از همان سرور برای اجرای هم متابیس و هم TLS termination (a.k.a. HTTPS) استفاده می‌کنید، متابیس منابع CPU ارزشمندی را که صرف encrypting/decrypting ترافیک می‌شود از دست می‌دهد. پس ممکن است بخواهید [از یک load balancer استفاده کنید](#using-a-load-balancer).

## دام‌هایی که باید از آن‌ها اجتناب کرد

از آزمایش‌های دیگران یاد بگیرید.

### توصیه می‌کنیم از سرویس‌هایی که ادعا می‌کنند به طور خودکار مقیاس‌پذیر هستند، اجتناب کنید

بر اساس تجربه ما، بسیاری از سرویس‌هایی که ادعا می‌کنند به طور خودکار scale می‌شوند، خوب، جادویی نیستند. به جای آن توصیه می‌کنیم برخی معیارهای observability را در جای خود قرار دهید، آن‌ها را نظارت کنید، و تغییرات scaling مورد نیاز را بر اساس آن مشاهدات انجام دهید، چون استفاده متابیس شما همانطور که شرکت شما رشد می‌کند رشد خواهد کرد.

### از سرویس‌هایی که سرورها را در صورت عدم استفاده خاموش می‌کنند، اجتناب کنید

اگر باید با یک سرویس auto-scaling بروید، از هر سرویسی که به طور دوره‌ای سرورها را وقتی استفاده نمی‌شوند خاموش می‌کند اجتناب کنید.

دلیل دوگانه است:

1. **فرآیندهای async**. متابیس برخی فرآیندهای async اجرا می‌کند، مثلاً برای دریافت فراداده برای جداول شما، یا refresh کردن مدل‌ها، یا دریافت مقادیر فیلتر. اگر این فرآیندها نتوانند اجرا شوند، مردم بسیاری از ویژگی‌هایی که متابیس ارائه می‌دهد را نمی‌بینند.
2. **زمان startup** اولین افرادی که به برنامه شما وارد می‌شوند بعدی جریمه عملکرد عظیمی را متحمل می‌شوند، چون سرور باید از یک cold start کامل spin up شود.

### مشکلات اجرای روی سایر ارائه‌دهندگان ابری

فقط چیزی برای آگاهی: بسیاری از ارائه‌دهندگان سرویس کلود شما را روی زیرساخت مشترک میزبانی می‌کنند. در این مورد، مستأجران دسترسی به CPUها را share می‌کنند. سرورهای multi-tenant می‌توانند برای اجاره ارزان‌تر باشند، و می‌توانند عملکرد مناسبی ارائه دهند، به شرط اینکه استفاده CPU شما زیر 100% بماند. اگر سرور متابیس شما 100% CPU را برای مدت معینی استفاده کند، ارائه‌دهنده ممکن است عملکرد CPUهای اختصاص داده شده شما را throttle کند، و عملکرد شما به طور قابل توجهی تخریب می‌شود. همان throttling می‌تواند با IOPS دیسک در زیرساخت مشترک اتفاق بیفتد.

## ارتقا به یک نسخه اصلی جدید متابیس

به طور معمول، هیچ تغییری به schema پایگاه داده برنامه در نسخه‌های minor (مثلاً، 1.51.1 به 1.51.2) ایجاد نمی‌کنیم، پس می‌توانید بین نسخه‌های minor بدون مشکل upgrade و downgrade کنید.

وقتی به یک نسخه اصلی upgrade می‌کنید، (مثلاً، 1.50.9 به 1.51.3)، باید انتظار مقداری downtime داشته باشید، چون متابیس ممکن است نیاز به handle کردن تغییرات schema به پایگاه داده برنامه داشته باشد. چقدر طول می‌کشد تغییرات schema بستگی به اندازه پایگاه داده برنامه شما دارد.

[
      
        
      
        

      
      
        
        
      
    ](metabase-and-your-db.html)
[
      
        
      
        
        
      
      
        

      
    ](managing-people.html)
