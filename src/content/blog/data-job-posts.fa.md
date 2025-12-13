---
title: "#jobs #jobs #jobs | کاوش روندها در آگهی‌های شغل داده"
description: "ساخت یک داشبورد با استفاده از داده از Slack dbt برای تحلیل اینکه چگونه مشاغل داده در طول زمان تغییر کرده‌اند."
url: "https://www.metabase.com/blog/data-job-posts"
canonical: "data-job-posts.html"
image: "https://www.metabase.com/images/posts/data-job-posts/dashboard.png"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "#jobs #jobs #jobs | کاوش روندها در آگهی‌های شغل داده"
ogDescription: "ساخت یک داشبورد با استفاده از داده از Slack dbt برای تحلیل اینکه چگونه مشاغل داده در طول زمان تغییر کرده‌اند."
ogImage: "https://www.metabase.com/images/posts/data-job-posts/dashboard.png"
ogUrl: "https://www.metabase.com/blog/data-job-posts"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "#jobs #jobs #jobs | کاوش روندها در آگهی‌های شغل داده"
twitterDescription: "ساخت یک داشبورد با استفاده از داده از Slack dbt برای تحلیل اینکه چگونه مشاغل داده در طول زمان تغییر کرده‌اند."
twitterImage: "https://www.metabase.com/images/posts/data-job-posts/dashboard.png"
author: "The Metabase Team"
datePublished: "Aug 10, 2022"
category: "Data explorations"
---

ما علاقه‌مند بودیم که چگونه روندها در مشاغل داده در طول زمان تکامل یافته‌اند، بنابراین به آگهی‌های شغل در یکی از جوامع مورد علاقه ما، [Slack dbt](https://www.getdbt.com/community/) نگاهی انداختیم.

کانال #jobs آنها از سال ۲۰۲۱ بیش از ۱۰۰+ آگهی شغل در ماه داشته است، بنابراین داده را به متابیس کشیدیم تا ببینیم آیا می‌توانیم الگوهایی پیدا کنیم.

![داشبورد مشاغل داده](../images/posts/data-job-posts/dash.png)

می‌توانید [داشبورد کامل](https://metabase-public.metabaseapp.com/public/dashboard/fcd7238a-43c2-4377-b400-7114d03a5155) را کاوش کنید، یا برای مشاهدات ما و راهنمای نحوه ساخت آن ادامه دهید.

## مشاهدات

تعداد آگهی‌های شغل به نظر می‌رسد دست در دست با [پایه کاربری dbt و جامعه Slack آنها](https://www.getdbt.com/blog/next-layer-of-the-modern-data-stack/) رشد کرده است.

بیش از [۴۰٪ از آگهی‌های شغل](https://metabase-public.metabaseapp.com/public/question/82f93815-d97b-4c39-a8e8-e9ad00f07054) امکان یک ترتیب کار از راه دور را ذکر می‌کنند.

[از سال ۲۰۲۱ به بعد](https://metabase-public.metabaseapp.com/dashboard/3-dbt-slack-jobs-channel?date=2021-01-01~)، بیش از نیمی از آگهی‌های شغل برای کار از راه دور است، از [۲۰٪ برای دوره‌های قبل از ۲۰۲۱](https://metabase-public.metabaseapp.com/public/dashboard/fcd7238a-43c2-4377-b400-7114d03a5155?date=~2021-01-01) افزایش یافته است.

نقش‌های مهندسی تحلیل سریع‌ترین شغل در حال رشد در فضای داده هستند، از ۶٪ در سال ۲۰۱۹ به ۳۲٪ در سال ۲۰۲۲. ([لینک به نمودار](https://metabase-public.metabaseapp.com/public/question/96ae9cca-593e-4a7f-b0f6-5b8f16f2ef06))

## چگونه داده را به دست آوردیم

### دریافت داده به متابیس

۱. ما از [Phantombuster](https://phantombuster.com/) برای کشیدن پیام‌های خام از کانال #jobs dbt به یک فایل CSV استفاده کردیم.
۲. فایل CSV را به یک Google Sheet آپلود کردیم و از [fivetran](https://www.fivetran.com/) برای بارگذاری داده .csv به یک جدول در یک پایگاه داده Postgres استفاده کردیم.
۳. سپس متابیس خود را به پایگاه داده postgres متصل کردیم. (می‌توانید این مرحله را رد کنید اگر پایگاه داده شما از قبل متصل است).
۴. سپس داده را تبدیل کردیم و آن را به یک [مدل](https://metabase-public.metabaseapp.com/public/question/822b6ee8-6131-4740-af00-dc24e5ddca20) در متابیس تبدیل کردیم. اگر می‌خواهید، می‌توانید داده مدل را به صورت CSV، JSON یا XLSX دانلود کنید.

### کار با داده در متابیس

به دلیل ماهیت بدون ساختار متن، ما یک سوال SQL را انتخاب کردیم (به جای استفاده از سازنده پرس‌وجوی گرافیکی)

برخی مشاغل در کانال‌ها ارسال شدند، برخی دیگر در موضوعات در آن کانال. ما آنها را ترکیب کردیم و پاسخ‌ها و نظرات به آگهی شغل را فیلتر کردیم. ما از بیانیه‌های ساده `CASE` و `LIKE` برای استخراج اطلاعات مانند:

- نقش،
- آیا نقش از راه دور است،
- هر ابزار تجسم ذکر شده.

در اینجا SQL که برای ایجاد مدل استفاده کردیم آمده است:

```
WITH raw_messages
     AS (SELECT CASE
                  WHEN message_url LIKE '%thread_ts=%' THEN
                  Substring(message_url, '.*thread_ts=(.*)')
                  ELSE Substring(message_url,
                       'https://getdbt.slack.com/archives/C7A7BARGT/(.*)'
                       )
                END AS thread_id,
                message_url,
                created_at,
                text,
                username
         FROM   random_datasets.dbt_jobs_scrape_20220802_messages),
     raw_messages_with_order
     AS (SELECT m.*,
                Row_number()
                  OVER(
                    partition BY thread_id
                    ORDER BY created_at ASC) AS post_order
         FROM   raw_messages m),
     combined_messages
     AS (SELECT m1.thread_id,
                m1.message_url,
                m1.created_at,
                m1.username,
                String_agg (m2.text, ' ') AS combined_text
         FROM   raw_messages_with_order m1
                LEFT JOIN raw_messages_with_order m2
                       ON m1.thread_id = m2.thread_id
                          AND m1.username = m2.username
         -- take message from original poster only
         WHERE  m1.post_order = 1
         GROUP  BY m1.thread_id,
                   m1.message_url,
                   m1.created_at,
                   m1.username)
SELECT *,
       -- location
       CASE
         WHEN Lower(Replace(combined_text, 'Is this role remote?', '')) LIKE
              '%remote%'
       THEN true
         WHEN Lower(combined_text) LIKE '%is this role remote? yes%' THEN true
         ELSE false
       END AS is_remote,
       -- BI stack
       CASE
         WHEN Lower(combined_text) LIKE '%metabase%' THEN true
         ELSE false
       END AS stack_includes_metabase,
       CASE
         WHEN Lower(combined_text) LIKE '%looker%' THEN true
         ELSE false
       END AS stack_includes_looker,
       CASE
         WHEN Lower(combined_text) LIKE '%tableau%' THEN true
         ELSE false
       END AS stack_includes_tableau,
       CASE
         WHEN Lower(combined_text) LIKE '%power bi%' THEN true
         ELSE false
       END AS stack_includes_powerbi,
       CASE
         WHEN Lower(combined_text) LIKE '%hex%' THEN true
         ELSE false
       END AS stack_includes_hex,
       CASE
         WHEN Lower(combined_text) LIKE '%qlik%' THEN true
         ELSE false
       END AS stack_includes_qlik,
       -- role
       CASE
         WHEN Lower(combined_text) LIKE '%analyst%' THEN true
         ELSE false
       END AS role_analyst,
       CASE
         WHEN Lower(combined_text) LIKE '%analytics engineer%' THEN true
         ELSE false
       END AS role_analytics_engineer,
       CASE
         WHEN Lower(combined_text) LIKE '%data scien%' THEN true
         ELSE false
       END AS role_data_scientist,
       CASE
         WHEN Lower(combined_text) LIKE '%data engineer%' THEN true
         ELSE false
       END AS role_data_engineer
FROM   combined_messages
WHERE  combined_text IS NOT NULL

```

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [داستان پشت تولیدکننده مجموعه داده AI ما](story-behind-ai-dataset-generator.html)

انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده مجموعه داده AI منبع باز ما را کاوش کنید.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-2 -->

![The story behind our AI Dataset Generator Image](../images/posts/ai-dataset-generator.png)

### [داستان پشت تولیدکننده مجموعه داده AI ما](story-behind-ai-dataset-generator.html)

انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده مجموعه داده AI منبع باز ما را کاوش کنید.

*Jul 15, 2025 • Data explorations • Matthew Hefferon • 3 min read*

---

<!-- blog-related-post-3 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک لیست ناقص از هزینه‌های کمتر آشکار مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-4 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک لیست ناقص از هزینه‌های کمتر آشکار مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

<!-- /blog-related-posts -->
