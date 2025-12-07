---
title: "نحوه نگه داشتن tabs روی داده خود"
description: "هشدارها را روی تحلیل‌های استفاده تنظیم کنید تا درباره زمان تغییر تنظیمات توسط مردم، دانلود داده، یا عمومی کردن داده مطلع شوید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/keep-tabs-on-your-data
toc:
  - id: "how-to-keep-tabs-on-your-data"
    title: "نحوه نگه داشتن tabs روی داده خود"
    level: 1
    href: "#how-to-keep-tabs-on-your-data"
  - id: "some-things-you-can-keep-tabs-on-with-usage-analytics"
    title: "برخی چیزهایی که می‌توانید با تحلیل‌های استفاده tabs نگه دارید"
    level: 2
    href: "#some-things-you-can-keep-tabs-on-with-usage-analytics"
  - id: "new-people-in-town"
    title: "مردم جدید در شهر"
    level: 3
    href: "#new-people-in-town"
  - id: "logins-and-content-views"
    title: "ورودها و مشاهده محتوا"
    level: 3
    href: "#logins-and-content-views"
  - id: "content-that-people-have-made-public"
    title: "محتوایی که مردم عمومی کرده‌اند"
    level: 3
    href: "#content-that-people-have-made-public"
  - id: "check-for-data-downloads"
    title: "بررسی برای دانلود داده"
    level: 3
    href: "#check-for-data-downloads"
  - id: "changes-to-settings"
    title: "تغییرات به تنظیمات"
    level: 3
    href: "#changes-to-settings"
  - id: "how-to-keep-an-eye-on-your-metabase"
    title: "نحوه نگه داشتن چشم روی متابیس خود"
    level: 2
    href: "#how-to-keep-an-eye-on-your-metabase"
  - id: "set-up-alerts"
    title: "تنظیم هشدارها"
    level: 3
    href: "#set-up-alerts"
  - id: "delegate-responsibility"
    title: "واگذاری مسئولیت"
    level: 3
    href: "#delegate-responsibility"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مجوزها"
    href: "index.html"
---

# نحوه نگه داشتن tabs روی داده خود

هشدارها را روی تحلیل‌های استفاده تنظیم کنید تا درباره زمان تغییر تنظیمات توسط مردم، دانلود داده، یا عمومی کردن داده مطلع شوید.

یک راه‌اندازی *self-service* مناسب analytics راه‌اندازی analytics ایده‌آل است. اگر گروه‌ها و مجوزهای خود را به درستی پیکربندی کنید ("درست" طبق هر نیازمندی که دارید)، یک ماشین analytics در حال اجرای روان خواهید داشت. اما انسان‌ها یک نبوغ عجیب برای خطاها دارند — حتی adminهایی که این سیستم‌ها را تنظیم می‌کنند.

پس این مقاله درباره نحوه تنظیم tripwireها در اطراف تحلیل‌های شما برای pick up کردن رفتارهای ناخواسته (یا shady) است: کسی در گروهی است که نباید باشد؛ چیزی را دیده یا دانلود کرده که نباید؛ مقدار زیادی داده دانلود کرده، یا فعالیت "جالب" دیگری که احتمالاً باید روی آن نظارت داشته باشید.

موارد زیر قصد ندارد بهترین توصیه امنیتی باشد. بیشتر یک منوی à la carte از چیزهایی است که adminها می‌توانند انجام دهند تا مطمئن شوند داده شما برای شما کار می‌کند، نه علیه شما.

## برخی چیزهایی که می‌توانید با تحلیل‌های استفاده tabs نگه دارید

[طرح‌های Pro](../../../../product/pro.html) و [Enterprise](../../../../product/enterprise.html) با تحلیل‌های استفاده built-in ship می‌شوند. مجموعه [Usage Analytics](../../../../docs/latest/usage-and-performance-tools/usage-analytics.html) انواع استفاده در متابیس شما را track می‌کند: فعالیت کاربر، logهای همه پرس‌وجوها، زمان اجرای پرس‌وجو، فعالیت داشبورد، و بیشتر.

![برخی مدل‌ها با تحلیل‌های استفاده در مجموعه Usage Analytics](../../../images/keep-tabs-on-your-data/usage-analytics-models.png)

در اینجا برخی راه‌هایی برای استفاده از این داده استفاده.

### مردم جدید در شهر

برای دیدن زمان پیوستن یا به‌روزرسانی حساب کسی:

1. به مجموعه **Usage Analytics** بروید.
2. **Activity log** را بررسی کنید.
  - `user-invited` برای دیدن کسی که به متابیس شما دعوت شده است، و
  - `user-joined` برای دیدن زمان اولین ورود مردم به متابیس شما.
  - `user-update` برای دیدن زمان تغییر یک حساب.
  - `user-deactivated` برای دیدن زمان غیرفعال شدن یک حساب.
3. می‌توانید فیلتر کنید بر اساس:

برای یادگیری بیشتر درباره شخص، می‌توانید `User ID` را در داشبورد **Person overview** plug کنید.

اگر می‌خواهید همه topicها را در Activity log ببینید:

1. فیلد `Topic` را کلیک کنید
2. **Distribution** را انتخاب کنید.
3. روی view جدول کلیک کنید تا لیست خوانا‌تر topicها را ببینید.

### ورودها و مشاهده محتوا

بدانید چه کسی به متابیس شما وارد می‌شود و چه زمانی. به عنوان مثال، برای دیدن ورودها بر اساس روز هفته:

1. به مجموعه **Usage Analytics** بروید.
2. به **View log** بروید
3. بر اساس تعداد ردیف‌ها خلاصه کنید.
4. بر اساس timestamp گروه‌بندی کنید.

![مشاهده‌ها بر اساس روز هفته](../../../images/keep-tabs-on-your-data/view-log-day-of-week.png)

اگر فقط می‌خواهید شنبه و یکشنبه را ببینید، می‌توانید روزهای هفته را با کلیک روی **Filter** \> **Exclude…** \> **Days of the week**، سپس انتخاب روزهایی که می‌خواهید فیلتر کنید.

### محتوایی که مردم عمومی کرده‌اند

می‌توانید ببینید چه چیزی به اشتراک گذاشته شده است تا مطمئن شوید به طور تصادفی چیزهایی مثل لیست حساب‌های خود یا داده مالی را به اشتراک نمی‌گذارید.

برای دیدن چه محتوایی عمومی شده است، و توسط چه کسی:

1. به مجموعه **Usage Analytics** بروید.
2. مدل **Content** را بررسی کنید.
3. ستون `Made public by user` را برای `Not empty` فیلتر کنید.

ستون `User ID` شخصی که مورد را عمومی کرده است را نشان می‌دهد.

### بررسی برای دانلود داده

![فیلتر بر اساس منبع پرس‌وجو دانلودها](../../../images/keep-tabs-on-your-data/query-source-downloads.png)

می‌توانید بررسی کنید ببینید آیا کسی یک لیست حساب‌ها یا جزئیات تماس را export می‌کند، یا یک جدول عظیم را دانلود می‌کند.

1. به مجموعه **Usage Analytics** بروید.
2. به مدل **Query log** بروید.
3. روی `Query source` فیلتر کنید.
  - `csv-download`
  - `json-download`
  - `xlsx-download`
4. همه انواع دانلود را انتخاب کنید:

همچنین می‌توانید بر اساس تعداد ردیف‌های export شده فیلتر کنید.

### تغییرات به تنظیمات

همچنین می‌توانید بررسی کنید ببینید آیا کسی تغییراتی به تنظیمات متابیس شما ایجاد کرده است:

1. به مجموعه **Usage Analytics** بروید.
2. به مدل `Activity log` بروید.
3. `Topic` را برای `settings-update` فیلتر کنید.
4. سپس می‌توانید روی ستون `Details` فیلتر کنید تا تغییر تنظیماتی که به دنبال آن هستید را target کنید.

## نحوه نگه داشتن چشم روی متابیس خود

چند نکته درباره نحوه lazy بودن در نظارت بر فعالیت.

### تنظیم هشدارها

هشدارها (و اشتراک‌های داشبورد) در قرار دادن داده در مقابل مردم بدون وادار کردن آن‌ها به رفتن به متابیس عالی هستند — حتی اگر خارج از org شما باشند.

می‌توانید هشدارها را تنظیم کنید تا متابیس [وقتی چیزی اتفاق می‌افتد به شما اطلاع دهد](../../../../docs/latest/questions/alerts.html#results-alerts)، یا اگر مقادیر از یک آستانه خاص عبور کنند.

به عنوان یک مثال trivial، بگویید می‌خواهید هر زمان کسی یک حساب در متابیس شما بدون استفاده از SSO تنظیم می‌کند مطلع شوید.

1. به مجموعه **Usage Analytics** بروید.
2. به مدل `People` بروید.
3. `Is Active` true، `Sso source` روی `is empty` تنظیم شده، و `Date joined` برای `today` فیلتر کنید.
4. سؤال را ذخیره کنید (می‌توانید آن را در زیرمجموعه custom reports Usage Analytics ذخیره کنید، مثلاً.)

![آیا یک شخص admin است؟](../../../images/keep-tabs-on-your-data/email-and-password-sign-ups.png)

با سؤال ذخیره شده، سپس می‌توانید یک [هشدار](../../../../docs/latest/questions/alerts.html) تنظیم کنید تا هر زمان این سؤال نتایجی برمی‌گرداند (یعنی، هر زمان کسی یک حساب با استفاده از ایمیل و رمز عبور ایجاد می‌کند) به شما ایمیل بزند.

### واگذاری مسئولیت

با شرکت‌های بزرگتر، bureaucratizedتر، شما، admin، ممکن است ندانید چه کسی باید در کدام گروه باشد و چرا. اما گروه‌های مختلف می‌توانند چیزهای خود را مدیریت کنند.

برای واگذاری مسئولیت، می‌توانید مردم را [مدیران گروه](../../../../docs/latest/people-and-groups/managing.html#group-managers) کنید، تا بتوانند گروه‌های مربوطه خود را مدیریت کنند، و می‌توانید به آن‌ها مجوز مشاهده مجموعه Usage Analytics بدهید تا بتوانند tabs روی گروه‌های خود نگه دارند.

[
      
        
        

      
      
        
        

      
    ](row-and-column-security-use-cases.html)
[
      
        
        

      
      
        
        

      
    ](ldap-auth-access-control.html)
