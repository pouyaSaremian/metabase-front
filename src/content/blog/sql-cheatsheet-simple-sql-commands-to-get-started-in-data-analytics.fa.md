---
title: "راهنمای سریع SQL: پنج دستور ساده SQL برای شروع در تحلیل داده"
description: "راهنمای سریع SQL برای کاوش داده: پنج دستور و تابع پایه SQL را برای شروع با تحلیل داده کشف کنید."
url: "https://www.metabase.com/blog/sql-cheatsheet-simple-sql-commands-to-get-started-in-data-analytics"
canonical: "sql-cheatsheet-simple-sql-commands-to-get-started-in-data-analytics.html"
image: "https://www.metabase.com/images/posts/sql-cheatsheet_-five-simple-sql-commands-to-get-started-in-data-analytics.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "راهنمای سریع SQL: پنج دستور ساده SQL برای شروع در تحلیل داده"
ogDescription: "راهنمای سریع SQL برای کاوش داده: پنج دستور و تابع پایه SQL را برای شروع با تحلیل داده کشف کنید."
ogImage: "https://www.metabase.com/images/posts/sql-cheatsheet_-five-simple-sql-commands-to-get-started-in-data-analytics.jpg"
ogUrl: "https://www.metabase.com/blog/sql-cheatsheet-simple-sql-commands-to-get-started-in-data-analytics"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "The Metabase Team"
twitterTitle: "راهنمای سریع SQL: پنج دستور ساده SQL برای شروع در تحلیل داده"
twitterDescription: "راهنمای سریع SQL برای کاوش داده: پنج دستور و تابع پایه SQL را برای شروع با تحلیل داده کشف کنید."
twitterImage: "https://www.metabase.com/images/posts/sql-cheatsheet_-five-simple-sql-commands-to-get-started-in-data-analytics.jpg"
author: "The Metabase Team"
datePublished: "Nov 18, 2021"
category: "Analytics and BI"
---

ما Metabase را ساختیم تا بتوانید داده را کاوش کنید و از آن یاد بگیرید بدون نیاز به دانستن SQL. اما گاهی اوقات، وقتی با یک سوال بزرگ و پیچیده دست و پنجه نرم می‌کنید، کمی SQL می‌تواند راه زیادی را طی کند. بنابراین ما ۵ دستور و تابع SQL را برای راحتی کپی-چسباندن شما جمع‌آوری کرده‌ایم.

اگر قبلاً با SQL آشنا هستید، آزادانه مستقیماً به راهنمای سریع زیر بروید، اما اگر تازه شروع می‌کنید، توصیه می‌کنیم [راهنمای ما درباره بهترین روش‌های SQL](../learn/sql/working-with-sql/sql-best-practices.html) را بررسی کنید.

## ۱. دستور SQL: count(distinct)

### دستور SQL count(distinct) چیست

دستور SQL `count(distinct)` برای برگرداندن تعداد مقادیر منحصر به فرد در یک ستون یا عبارت استفاده می‌شود.

### نحوه استفاده از count(distinct)

از `count(distinct)` برای برگرداندن تعداد نقاط داده کاملاً منحصر به فرد مانند تعداد کارمندان، مکان‌ها، مشتریان و غیره استفاده کنید.

```
COUNT( DISTINCT <expression>)

```

به عنوان مثال، ممکن است بخواهید تعداد شهرهای مختلفی که مشتری در آن زندگی می‌کند را بشمارید. برای دنبال کردن در Metabase، می‌توانید [ویرایشگر SQL](../docs/latest/questions/native-editor/writing-sql.html) را باز کنید، [نمونه Dataset](../glossary/sample-database.html) را انتخاب کنید و این پرس‌وجو را اجرا کنید:

```
SELECT count(distinct city) as cities
FROM people

```

نتیجه شما شبیه این خواهد بود: ۱۹۶۶ (یک عدد).

برای دقیق بودن، یک ستون با یک مقدار واحد دریافت خواهید کرد:

```
| CITIES |
|--------|
| 1966   |

```

### مثال دنیای واقعی: count(distinct)

تحلیل‌گران از `count(distinct)` هنگام شمارش تعداد بازدیدکنندگان منحصر به فردی که رفتارهایی در یک وب‌سایت نشان می‌دهند استفاده می‌کنند. به عنوان مثال، فرض کنید یک جدول website_intents داریم که کوکی‌ها را با برخی رفتارها در وب‌سایت نقشه‌برداری می‌کند:

```
| COOKIE_ID | IS_VISIT_LANDING_PAGE | IS_VISIT_CHECKOUT | … |
|-----------|-----------------------|-------------------| … |
| abc000    | 1                     | 0                 | … |
| abc001    | 1                     | 1                 | … |
| abc002    | 1                     | 0                 | … |

```

این پرس‌وجو برای دریافت تعداد کوکی‌های منحصر به فرد از کاربرانی که به بالای قیف checkout رسیده‌اند:

```
SELECT count(distinct
                case
                    when is_visit_checkout = True then cookie_id
                    else null
                end) as visited_checkout
FROM website_intents

```

## ۲. دستور SQL: date_trunc()

### دستور SQL date_trunc() چیست

یک timestamp را به یک دانه‌بندی خاص کوتاه می‌کند (قطع می‌کند)، از میکروثانیه تا هزاره.

دستور SQL `date_trunc()` برای "قطع" یک بازه بر اساس ساعت، روز، هفته یا ماه استفاده می‌شود و یک بازه یا timestamp قابل اجرا و دقیق‌تر ارائه می‌دهد.

### نحوه استفاده از date_trunc()

از `date_trunc()` برای حذف اطلاعات غیرضروری از یک timestamp یا بازه زمانی استفاده کنید.

```
DATE_TRUNC(granularity, timestamp)

```

به عنوان مثال، ممکن است بخواهید یک timestamp را به ساعت قطع کنید:

```
SELECT date_trunc('hour', timestamp '2021-11-4 12:29:05')

```

نتیجه شما شبیه این خواهد بود: ۲۰۲۱-۱۱-۴ ۱۲:۰۰:۰۰.

### مثال دنیای واقعی: date_trunc()

تحلیل‌گران از `date_trunc()` برای مقایسه روندها در چندین ماه، هفته یا روز استفاده می‌کنند. با `date_trunc()` می‌توانید به راحتی به نرخ‌های رفتار در یک دوره زمانی خاص نگاه کنید، مانند دیدن اینکه چند مشتری ماه گذشته حساب ایجاد کرده‌اند، در مقایسه با ماه‌های قبلی. به عنوان مثال، فرض کنید می‌خواهیم همه سفارش‌های ایجاد شده در سال ۲۰۱۸ را از جدول Orders خود (از Sample Dataset) دریافت کنیم. پرس‌وجوی شما ممکن است شبیه این باشد:

```
SELECT count(distinct id) as total_order_2018
FROM ORDERS
WHERE DATE_TRUNC('year', created_at) = timestamp '2018-1-01 00:00:00'

```

نتیجه شما شبیه این خواهد بود:

```
| TOTAL_ORDER_2018 |
|------------------|
| 5834             |

```

می‌خواهید بیشتر بروید؟ منبع دیگر ما را برای کشف مثال‌ها و موارد استفاده عمیق‌تر از این دستور بررسی کنید: [تاریخ‌ها در SQL](../learn/sql/working-with-sql/dates-in-sql.html).

## ۳. دستور SQL: coalesce()

### دستور SQL coalesce() چیست

فهرست‌ها را برای یافتن مقادیر غیر null ارزیابی می‌کند؛ یعنی نقاط داده با مقادیر شناخته شده.

دستور SQL `coalesce()` عمدتاً در طول فرآیندهای تمیز کردن و تجمیع داده برای پر کردن مقادیر null و قابل‌فهم‌تر و آسان‌تر خواندن مجموعه داده‌ها استفاده می‌شود.

## نحوه استفاده از coalesce()

از `coalesce()` برای یافتن یا استاندارد کردن اطلاعات غیر null با تنظیم ۲ یا بیشتر پارامتر استفاده کنید.

```
COALESCE(<expression>, [<expression>, …])

```

مثال:

```
SELECT coalesce(null, value1, value2, value3, null)

```

نتیجه شما شبیه این خواهد بود: value1.

### مثال دنیای واقعی: coalesce()

تحلیل‌گران از `coalesce()` برای تمیز کردن و تجمیع مجموعه داده‌ها و قابل‌فهم‌تر کردن آنها برای کسب‌وکار استفاده می‌کنند. به عنوان مثال، شناسایی فیلدهای خالی و جایگزین کردن آنها با یک برچسب خالی مانند "none". فرض کنید یک جدول مشتریان با شماره تلفن‌های گم شده دارید، که با "null" علامت‌گذاری شده است.

```
| CUSTOMER_ID | PHONE_NUMBER | … |
|-------------|--------------| … |
| abc000      | 1111111      | … |
| abc001      | null         | … |
| abc002      | 2222222      | … |

```

با استفاده از `coalesce()`، این پرس‌وجو برای جایگزین کردن مقدار null با "none":

```
SELECT customer_id,
      COALESCE(phone_number, 'none') AS phone_number
FROM client

```

که نتیجه می‌دهد:

```
| CUSTOMER_ID | PHONE_NUMBER | … |
|-------------|--------------| … |
| abc000      | 1111111      | … |
| abc001      | none         | … |
| abc002      | 2222222      | … |

```

## ۴. دستور SQL: case

### دستور SQL case چیست

یک مقدار را زمانی که شرایط خاص توسط نقاط داده در یک مجموعه داده بزرگتر برآورده می‌شود برمی‌گرداند.

دستور SQL `case` برای سازماندهی داده بر اساس پارامترهای ملموس، تولید دسته‌بندی‌ها یا مرتب‌سازی نقاط داده به دسته‌ها، یا تولید اطلاعات قابل اجرا از داده‌های مختلف استفاده می‌شود.

### نحوه استفاده: case

از `case` برای تولید یک نتیجه قابل اجرا بر اساس یک پارامتر خاص استفاده کنید.

```
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END

```

به عنوان مثال، ممکن است بخواهید هر امتیاز را با یک پیام کوتاه دسته‌بندی کنید:

```
case
   when score > 9 then 'awesome'
   when score < 5 then 'bad'
   else 'ok'
end as message

```

اگر هیچ شرطی برآورده نشود، `case when` به `else` منجر می‌شود.

نتیجه شما شبیه این خواهد بود:

```
| SCORE | MESSAGE |
|-------|---------|
| 10    | awesome |
| 4     | bad     |
| 7     | ok      |

```

### مثال دنیای واقعی: case

دستور SQL `case` می‌تواند به ویژه در تحلیل قیف‌ها مفید باشد، به ویژه در نقشه‌برداری مراحل قیف و سازماندهی فهرست‌های مشتری بر اساس موقعیت آنها در یک قیف.

به عنوان مثال، آیا جدول website_intents را که در مثال "مثال دنیای واقعی: count(distinct)" نشان دادیم به خاطر دارید؟ فرض کنید یک جدول pageviews داریم که صفحات وب بازدید شده برای هر جلسه را ردیابی می‌کند:

```
| SESSION_ID | PAGE_URL_PATH | … |
|------------|---------------| … |
| abc000     | /landing-page | … |
| abc001     | /landing-page2| … |
| abc002     | /checkout     | … |

```

این پرس‌وجو برای دریافت آن نتیجه ممکن است شبیه این باشد:

```
SELECT id,
    case
        when(
           page_url_path = '/landing-page.html'
           or page_url_path = '/landing-page2.html'
           or page_url_path = '/landing-page3.html'
        ) then 1 else 0
    end as is_visit_landing_page,
    case
        when(
           page_url_path like '/checkout%'
           or page_url_path like '/checkout-new%'
           or page_url_path like '/checkout-enterprise%'
        ) then 1 else 0
    end as is_visit_checkout,
    ...
FROM pageviews

```

که نتیجه می‌دهد:

```
| SESSION_ID | PAGE_URL_PATH | IS_VISIT_LANDING_PAGE |  IS_VISIT_CHECKOUT | … |
|------------|---------------|-----------------------|--------------------| … |
| abc000     | /landing-page | 1                     | 0                  | … |
| abc001     | /landing-page2| 1                     | 0                  | … |
| abc002     | /checkout     | 0                     | 1                  | … |

```

## ۵. دستور SQL: row_number()

### دستور SQL row_number() چیست

ردیف‌ها را در یک پارتیشن با اختصاص دادن یک موقعیت دقیق به هر یک در دنباله مرتب می‌کند. از ۱ شروع می‌شود و ردیف‌ها را بر اساس بخش ORDER BY عبارت window شماره‌گذاری می‌کند.

دستور SQL `row_number()` برای سازماندهی سریع و دقیق اطلاعات در یک مجموعه داده بر اساس پارامترهایی که مشخص می‌کنید استفاده می‌شود.

*لطفاً توجه داشته باشید که `row_number()` توسط هر پایگاه داده پشتیبانی نمی‌شود.*

### نحوه استفاده: row_number()

از `row_number()` برای تغییر دنباله یک فهرست استفاده کنید.

```
ROW_NUMBER() OVER (
    [PARTITION BY partition_column, ... ]
    ORDER BY sort_column [ASC | DESC], ...
)

```

به عنوان مثال، ممکن است بخواهید یک فهرست حساب‌ها را بر اساس زمان ایجاد آنها دوباره مرتب کنید:

```
SELECT account_created_at,
       row_number() over(
           order by account_created_at
       ) as row
FROM accounts

```

نتیجه شما شبیه این خواهد بود:

```
| ROW | ACCOUNT_CREATED_AT |
|-----|--------------------|
| 1   | 2021-01-14         |
| 2   | 2021-05-09         |
| 3   | 2021-08-22         |

```

### مثال دنیای واقعی: "row_number()"

تحلیل‌گران از `row_number()` برای سازماندهی ترتیب اطلاعات در فهرست‌ها استفاده می‌کنند. به عنوان مثال، مرتب‌سازی یک فهرست اطلاعات مشتری برای رتبه‌بندی سفارش‌ها بر اساس زمان برای دیدن اینکه ارزش خرید چگونه با گذشت زمان تغییر کرده است. فرض کنید یک جدول اطلاعات مشتری دارید:

```
| PLAN | ACCOUNT_CREATED_AT | … |
|------|--------------------| … |
| free | 2021-01-14         | … |
| pro  | 2021-02-20         | … |
| free | 2021-05-09         | … |
| pro  | 2021-07-24         | … |
| free | 2021-08-22         | … |

```

با استفاده از `row_number()`، می‌توانیم اطلاعات مشتری را بر اساس زمان ایجاد برای هر اشتراک برنامه سازماندهی کنیم:

```
SELECT plan,
       account_created_at,
       row_number() over(
           partition by plan
           order by account_created_at
       ) as row
FROM accounts

```

نتیجه شما شبیه این خواهد بود:

```
| PLAN | ROW | ACCOUNT_CREATED_AT | … |
|------|-----|--------------------| … |
| free | 1   | 2021-01-14         | … |
| free | 2   | 2021-05-09         | … |
| free | 3   | 2021-08-22         | … |
| pro  | 1   | 2021-02-20         | … |
| pro  | 2   | 2021-07-24         | … |

```

## افکار نهایی: شروع با اصول SQL

با Metabase نیازی به SQL برای کاوش داده ندارید—اما اگر روی چیزی پیچیده کار می‌کنید، چند دستور ساده می‌تواند تحلیل شما را به سطح بعدی ببرد. امیدواریم این راهنمای سریع چند ایده از روش‌های جدید کاوش به شما بدهد. اگر می‌خواهید SQL بیشتری به مجموعه خود اضافه کنید، راهنمای ما به [بهترین روش‌های SQL](../learn/sql/working-with-sql/sql-best-practices.html) را بررسی کنید.

با تشکر،

تیم Metabase

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![How to build sales dashboards that sales teams actually use Image](../images/posts/sales-dashboards/sales-dashboard-og.jpg)

### [چگونه داشبوردهای فروش بسازیم که تیم‌های فروش واقعاً استفاده کنند](how-to-build-sales-dashboards.html)

یک داشبورد فروش بسازید که تیم شما واقعاً استفاده کند. ۱۰ متریک کلیدی، نکات و یک مثال زنده در متابیس را ببینید.

*Jul 09, 2025 • Analytics and BI • Margaret Rimek • 4 min read*

---

<!-- blog-related-post-2 -->

![How to build sales dashboards that sales teams actually use Image](../images/posts/sales-dashboards/sales-dashboard-og.jpg)

### [چگونه داشبوردهای فروش بسازیم که تیم‌های فروش واقعاً استفاده کنند](how-to-build-sales-dashboards.html)

یک داشبورد فروش بسازید که تیم شما واقعاً استفاده کند. ۱۰ متریک کلیدی، نکات و یک مثال زنده در متابیس را ببینید.

*Jul 09, 2025 • Analytics and BI • Margaret Rimek • 4 min read*

---

<!-- blog-related-post-3 -->

![What is embedded analytics? Image](../images/posts/what-is-embedded-analytics/what-is-embedded-analytics.png)

### [تحلیل‌های جاسازی‌شده چیست؟](what-is-embedded-analytics.html)

تحلیل‌های جاسازی‌شده به معنای دادن دسترسی به کاربران شما به نمودارها، متریک‌ها و گزارش‌ها مستقیماً در داخل محصول شما است، تا بتوانند داده‌های خود را کاوش کنند و بر اساس آن عمل کنند بدون اینکه نیاز به ترک برنامه شما داشته باشند یا برای پاسخ به شخص دیگری تکیه کنند.

*May 15, 2025 • Analytics and BI • Alex Yarosh • 13 min read*

---

<!-- blog-related-post-4 -->

![What is embedded analytics? Image](../images/posts/what-is-embedded-analytics/what-is-embedded-analytics.png)

### [تحلیل‌های جاسازی‌شده چیست؟](what-is-embedded-analytics.html)

تحلیل‌های جاسازی‌شده به معنای دادن دسترسی به کاربران شما به نمودارها، متریک‌ها و گزارش‌ها مستقیماً در داخل محصول شما است، تا بتوانند داده‌های خود را کاوش کنند و بر اساس آن عمل کنند بدون اینکه نیاز به ترک برنامه شما داشته باشند یا برای پاسخ به شخص دیگری تکیه کنند.

*May 15, 2025 • Analytics and BI • Alex Yarosh • 13 min read*

<!-- /blog-related-posts -->
