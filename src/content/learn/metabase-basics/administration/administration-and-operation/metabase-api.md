---
title: "کار با API متابیس"
description: "مقدمه‌ای بر API متابیس."
redirect_from:
  - /learn/metabase-basics/administration/administration-and-operation/metabase-api
  - /learn/administration/metabase-api
toc:
  - id: "working-with-the-metabase-api"
    title: "کار با API متابیس"
    level: 1
    href: "#working-with-the-metabase-api"
  - id: "api-reference"
    title: "مرجع API"
    level: 2
    href: "#api-reference"
  - id: "warning-the-metabase-api-can-change"
    title: "هشدار: API متابیس می‌تواند تغییر کند"
    level: 2
    href: "#warning-the-metabase-api-can-change"
  - id: "getting-started-with-the-metabase-api"
    title: "شروع کار با API متابیس"
    level: 2
    href: "#getting-started-with-the-metabase-api"
  - id: "create-an-api-key"
    title: "ایجاد یک کلید API"
    level: 2
    href: "#create-an-api-key"
  - id: "example-get-request"
    title: "مثال درخواست GET"
    level: 2
    href: "#example-get-request"
  - id: "example-post-request"
    title: "مثال درخواست POST"
    level: 2
    href: "#example-post-request"
  - id: "see-metabase-s-requests-and-responses"
    title: "دیدن درخواست‌ها و پاسخ‌های متابیس"
    level: 2
    href: "#see-metabase-s-requests-and-responses"
  - id: "experiment-in-live-api-docs"
    title: "آزمایش در مستندات API زنده"
    level: 3
    href: "#experiment-in-live-api-docs"
  - id: "use-developer-tools"
    title: "استفاده از ابزارهای توسعه‌دهنده"
    level: 3
    href: "#use-developer-tools"
  - id: "a-few-things-you-can-do-with-the-metabase-api"
    title: "چند کاری که می‌توانید با API متابیس انجام دهید"
    level: 2
    href: "#a-few-things-you-can-do-with-the-metabase-api"
  - id: "provision-a-metabase-instance"
    title: "Provision کردن یک instance متابیس"
    level: 3
    href: "#provision-a-metabase-instance"
  - id: "add-a-data-source"
    title: "افزودن یک منبع داده"
    level: 3
    href: "#add-a-data-source"
  - id: "set-up-users-groups-and-permissions"
    title: "تنظیم کاربران، گروه‌ها، و مجوزها"
    level: 3
    href: "#set-up-users-groups-and-permissions"
  - id: "generate-reports"
    title: "تولید گزارش‌ها"
    level: 3
    href: "#generate-reports"
  - id: "useful-endpoints"
    title: "endpointهای مفید"
    level: 2
    href: "#useful-endpoints"
  - id: "running-custom-queries"
    title: "اجرای پرس‌وجوهای سفارشی"
    level: 2
    href: "#running-custom-queries"
  - id: "examples-in-python-r-and-javascript"
    title: "مثال‌ها در Python، R، و JavaScript"
    level: 2
    href: "#examples-in-python-r-and-javascript"
  - id: "python"
    title: "Python"
    level: 3
    href: "#python"
  - id: "r-with-the-tidyverse"
    title: "R با Tidyverse"
    level: 3
    href: "#r-with-the-tidyverse"
  - id: "javascript-on-node-js"
    title: "JavaScript روی Node.js"
    level: 3
    href: "#javascript-on-node-js"
  - id: "authenticate-your-requests-with-a-session-token"
    title: "احراز هویت درخواست‌های خود با یک token session"
    level: 2
    href: "#authenticate-your-requests-with-a-session-token"
  - id: "have-fun"
    title: "لذت ببرید"
    level: 2
    href: "#have-fun"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مدیریت و عملیات"
    href: "index.html"
---

# کار با API متابیس

مقدمه‌ای بر API متابیس.

این مقاله نحوه خودکار کردن کارها با استفاده از [API متابیس](../../../../docs/latest/api.html) را توضیح می‌دهد. ما خودمان از آن API برای اتصال front end و back end استفاده می‌کنیم، پس می‌توانید تقریباً همه چیز را که متابیس می‌تواند انجام دهد script کنید.

## مرجع API

می‌توانید مرجع API متابیس را [در مستندات ما](../../../../docs/latest/api.html) پیدا کنید. همچنین می‌توانید مستندات OpenAPI زنده را در متابیس در حال اجرای خود در `/api/docs` مشاهده کنید. پس اگر متابیس شما در `https://www.your-metabase.com` است می‌توانید به آن‌ها در `https://www.your-metabase.com/api/docs` دسترسی داشته باشید.

## هشدار: API متابیس می‌تواند تغییر کند

- **API ممکن است تغییر کند**. ما به ندرت endpointهای API را تغییر می‌دهیم، و تقریباً هرگز آن‌ها را حذف نمی‌کنیم، اما اگر کدی بنویسید که به API تکیه دارد، احتمال دارد در آینده نیاز به به‌روزرسانی کد خود داشته باشید.
- **API versioned نیست**. پس انتظار نداشته باشید روی یک نسخه خاص متابیس بمانید تا از یک API "پایدار" استفاده کنید.

برای تغییرات API، [changelog API](../../../../docs/latest/developers-guide/api-changelog.html) راهنمای توسعه‌دهنده را بررسی کنید.

## شروع کار با API متابیس

برای ساده نگه داشتن، از ابزار خط فرمان venerable [curl](https://curl.haxx.se/docs/) برای مثال‌های فراخوانی API استفاده می‌کنیم؛ همچنین می‌توانید یک ابزار اختصاصی برای توسعه درخواست‌های API (مثل [Postman](https://www.postman.com/)) را در نظر بگیرید. برای دنبال کردن، می‌توانید [یک متابیس تازه روی localhost راه‌اندازی کنید](../../../../start/oss/jar.html) و بازی کنید.

## ایجاد یک کلید API

برای استفاده از API، یک [کلید API](../../../../docs/latest/people-and-groups/api-keys.html) ایجاد کنید.

## مثال درخواست GET

در اینجا یک مثال درخواست API که endpoint [`/api/permissions/group`](../../../../docs/latest/api.html#tag/apipermissions) را hit می‌کند، که گروه‌های مجوزی که در متابیس خود تنظیم کرده‌اید را برمی‌گرداند. `YOUR_API_KEY` را با کلید API خود جایگزین کنید:

```
curl \
-H 'x-api-key: YOUR_API_KEY' \
-X GET 'http://localhost:3000/api/permissions/group'

```

درخواست بالا یک آرایه از اشیاء JSON برای گروه‌ها در متابیس شما برمی‌گرداند (فرمت شده برای خوانایی):

```
[
  {
    "id": 2,
    "name": "Administrators",
    "member_count": 2
  },
  {
    "id": 1,
    "name": "All Users",
    "member_count": 3
  }
]

```

## مثال درخواست POST

همچنین می‌توانید از یک فایل برای ذخیره payload JSON برای یک درخواست POST استفاده کنید. این داشتن مجموعه از پیش تعریف شده درخواست‌هایی که می‌خواهید به API بدهید را آسان می‌کند.

```
curl -H @header_file.txt -d @payload.json http://localhost/api/card

```

در اینجا `header_file.text` در دستور بالا:

```txt
x-api-key: YOUR_API_KEY

```

در اینجا یک مثال از یک فایل JSON (`@payload.json` در دستور بالا) که یک سؤال ایجاد می‌کند:

```
{
  "visualization_settings": {
    "table.pivot_column": "QUANTITY",
    "table.cell_column": "SUBTOTAL"
  },
  "description value": "A card generated by the API",
  "collection_position": null,
  "result_metadata": null,
  "metadata_checksum": null,
  "collection_id": null,
  "name": "API-generated question",
  "dataset_query": {
    "database": 1,
    "query": {
      "source-table": 2
    },
    "type": "query"
  },
  "display": "table"
}

```

آن درخواست سؤال را ایجاد کرد:

![یک سؤال در متابیس ایجاد شده توسط API: لیستی از جدول Orders در پایگاه داده نمونه](../../../images/metabase-api/api-generated-question.png)

## دیدن درخواست‌ها و پاسخ‌های متابیس

### آزمایش در مستندات API زنده

می‌توانید مستندات OpenAPI زنده، سرو شده از طریق [RapiDoc](https://rapidocweb.com/)، از متابیس در حال اجرای خود در `/api/docs` مشاهده کنید. پس اگر متابیس شما در `https://www.your-metabase.com` است می‌توانید به آن‌ها در `https://www.your-metabase.com/api/docs` دسترسی داشته باشید.

در مستندات زنده، می‌توانید با ارسال درخواست‌ها آزمایش کنید و پاسخ‌های نمونه ببینید:

![مثال یک پاسخ API در مستندات زنده](../../../images/metabase-api/live-docs.png)

### استفاده از ابزارهای توسعه‌دهنده

اگر مستندات API auto-generated واضح نیستند، می‌توانید از ابزارهای توسعه‌دهنده که با مرورگرهایی مثل Firefox، Chrome، و Edge ship می‌شوند برای مشاهده درخواست‌ها و پاسخ‌های متابیس استفاده کنید.

![استفاده از Firefox](../../../images/metabase-api/firefox-network-json.png)

در برنامه متابیس، عملی که می‌خواهید script کنید را انجام دهید، مثل افزودن یک کاربر یا ایجاد یک داشبورد. سپس از ابزارهای توسعه‌دهنده در مرورگر خود برای مشاهده درخواستی که متابیس به سرور داد وقتی آن عمل را انجام دادید استفاده کنید.

## چند کاری که می‌توانید با API متابیس انجام دهید

### Provision کردن یک instance متابیس

علاوه بر استفاده از [متغیرهای محیطی](../../../../docs/latest/configuring-metabase/environment-variables.html)، می‌توانید از API متابیس برای راه‌اندازی یک instance متابیس استفاده کنید. وقتی متابیس را با [روش ترجیحی](../../../../pricing/index.html) خود نصب کردید، و سرور متابیس راه‌اندازی و در حال اجرا است، می‌توانید اولین کاربر (به عنوان Admin) را با posting به یک endpoint خاص، [/api/setup](../../../../docs/latest/api.html#tag/apisetup) ایجاد کنید. این endpoint `/api/setup`:

- اولین کاربر را به عنوان Admin (superuser) ایجاد می‌کند.
- آن‌ها را وارد می‌کند.
- یک session ID برمی‌گرداند.

سپس می‌توانید تنظیمات را با endpoint [`/api/settings`](../../../../docs/latest/api.html#tag/apisetting) پیکربندی کنید، ایمیل را با endpoint [`/api/email`](../../../../docs/latest/api.html#tag/apiemail) تنظیم کنید، و از endpoint [`/api/setup/admin_checklist`](../../../../docs/latest/api.html#tag/apisetup) برای تأیید پیشرفت راه‌اندازی خود استفاده کنید.

![چک‌لیست Admin برای راه‌اندازی متابیس برای بهره‌برداری حداکثری از برنامه خود.](../../../images/metabase-api/admin-checklist.png)

### افزودن یک منبع داده

می‌توانید یک پایگاه داده جدید با استفاده از endpoint [`POST /api/database/`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/) اضافه کنید، و جزئیات اتصال آن پایگاه داده را با استفاده از endpoint [`/api/database/validate/`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/validate) validate کنید. وقتی پایگاه داده را به instance متابیس خود متصل کردید، می‌توانید پایگاه داده را rescan کنید و فراداده schema را به‌روزرسانی کنید. حتی می‌توانید [پایگاه داده نمونه](../../../../glossary/sample-database.html) قابل اعتماد ما را به عنوان یک پایگاه داده جدید به instance خود با [`POST /api/database/sample_database`](../../../../docs/latest/api.html#tag/apidatabase/post/api/database/sample_database) اضافه کنید.

در اینجا یک مثال فراخوانی ایجاد پایگاه داده برای یک پایگاه داده [Redshift](https://aws.amazon.com/redshift/).

```
curl -s -X POST \
    -H "Content-type: application/json" \
    -H 'x-api-key: YOUR_API_KEY' \
    http://localhost:3000/api/database \
    -d '{
        "engine": "redshift",
        "name": "Redshift",
        "details": {
            "host": "redshift.aws.com",
            "port": "5432",
            "db": "dev",
            "user": "root",
            "password": "password"
        }
    }'

```

### تنظیم کاربران، گروه‌ها، و مجوزها

می‌توانید از endpointهای [`/api/user`](../../../../docs/latest/api.html#tag/apiuser) برای ایجاد، به‌روزرسانی، و غیرفعال کردن کاربران، یا endpointهای [`/api/permissions`](../../../../docs/latest/api.html#tag/apipermissions) برای تنظیم گروه‌ها یا [افزودن کاربران به آن‌ها](../../../../docs/latest/api.html#tag/apipermissions) استفاده کنید. در اینجا یک مثال دستور curl برای ایجاد یک کاربر:

```
curl -s "http://localhost:3000/api/user" \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: YOUR_API_KEY' \
    -d '{
    "first_name":"Basic",
    "last_name":"Person",
    "email":"basic@somewhere.com",
    "password":"Sup3rS3cure_:}"
}'

```

### تولید گزارش‌ها

در متابیس، "گزارش‌ها" به عنوان [داشبوردها](../../../../docs/latest/dashboards/introduction.html) نامیده می‌شوند. می‌توانید با داشبوردها با استفاده از endpoint [`/api/dashboard`](../../../../docs/latest/api.html#tag/apidashboard) تعامل کنید. می‌توانید [یک داشبورد جدید ایجاد کنید](../../../../docs/latest/dashboards/introduction.html#how-to-create-a-dashboard) با [`POST /api/dashboard/`](../../../../docs/latest/api.html#tag/apidashboard)، و [یک سؤال ذخیره شده را به یک داشبورد اضافه کنید](../../../../docs/latest/dashboards/introduction.html#adding-or-saving-questions-to-a-dashboard) با \[`POST/api/dashboard/:id/cards`\].

## endpointهای مفید

لینک‌ها در ستون Endpoint زیر شما را به اولین action در دسترس برای آن endpoint می‌برند، که به ترتیب حروف الفبا معمولاً action DELETE است. می‌توانید در مستندات API پایین بروید تا لیست کامل actions و URLها برای آن endpoint را ببینید، و توضیحات هر کدام را مشاهده کنید.

| دامنه | توضیحات | Endpoint |
| --- | --- | --- |
| Collections | مجموعه‌ها راهی عالی برای سازماندهی داشبوردها، سؤال‌های ذخیره شده، و pulseهای شما هستند. | /api/collection |
| Dashboards | داشبوردها گزارش‌هایی هستند که شامل مجموعه‌ای از سؤال‌ها و کارت‌های متنی هستند. | /api/dashboard |
| Databases | پایگاه‌های داده، فیلدها، schemaها، کلیدهای اولیه (entity)، لیست جداول، و بیشتر را fetch کنید. | /api/database |
| Email | تنظیمات ایمیل را به‌روزرسانی کنید و ایمیل‌های تست ارسال کنید. | /api/email |
| Embedding | از JWTs امضا شده برای fetch کردن اطلاعات روی کارت‌ها و داشبوردهای جاسازی شده استفاده کنید. | /api/embed |
| Permissions | متابیس مجوزها به پایگاه‌های داده و مجموعه‌ها را با گروه‌ها مدیریت می‌کند. گروه‌های مجوز ایجاد کنید، کاربران را به گروه‌ها اضافه و حذف کنید، یک graph از همه گروه‌های مجوز را retrieve کنید، و بیشتر. | /api/permissions |
| Search | کارت‌ها (سؤال‌ها)، داشبوردها، مجموعه‌ها و pulseها را برای یک substring جستجو کنید. | /api/search |
| Segments | بخش‌ها مجموعه‌های نام‌گذاری شده از فیلترها هستند (مثل "کاربران فعال"). بخش‌ها ایجاد و به‌روزرسانی کنید، به نسخه‌های قبلی revert کنید، و بیشتر. | /api/segment |
| Sessions | رمزهای عبور را با tokenها reset کنید، با Google Auth وارد شوید، ایمیل‌های reset رمز عبور ارسال کنید، و بیشتر. | /api/sessions |
| Settings | تنظیمات برنامه global ایجاد/به‌روزرسانی کنید. | /api/setting |
| Queries | از API برای اجرای پرس‌وجوها و برگرداندن نتایج آن‌ها در یک فرمت مشخص استفاده کنید. | /api/dataset |
| Questions | سؤال‌ها (معروف به cardها در API) پرس‌وجوها و نتایج visualized آن‌ها هستند. | /api/card |

endpointهای جالب دیگری برای بررسی وجود دارند، مثل [`api/database/:virtual-db/metadata`](../../../../docs/latest/api.html#tag/apidatabase)، که برای "فریب دادن" frontend استفاده می‌شود تا بتواند سؤال‌های ذخیره شده را گویی که جداول در یک پایگاه داده مجازی بودند treat کند. این نحوه‌ای است که متابیس به شما اجازه می‌دهد از سؤال‌های ذخیره شده گویی که منابع داده بودند استفاده کنید.

مستندات شامل [لیست کامل endpointهای API](../../../../docs/latest/api.html) به همراه مستندات برای هر endpoint است، پس کاوش کنید و ببینید چه endpointهای جالب دیگری می‌توانید پیدا کنید.

مرجع endpoint به طور دوره‌ای با نسخه‌های جدید متابیس به‌روزرسانی می‌شود. همچنین می‌توانید مرجع را با اجرای:

```
java -jar metabase.jar api

```

تولید کنید.

## اجرای پرس‌وجوهای سفارشی

پرس‌وجوهای نوشته شده با [سازنده کوئری](../../../../docs/latest/questions/introduction.html) در زبان پرس‌وجوی سفارشی مبتنی بر JSON ما، MBQL ذخیره می‌شوند.

برای آشنا شدن با MBQL، توصیه می‌کنیم از برنامه متابیس برای ایجاد یک سؤال با استفاده از [سازنده کوئری](../../../../docs/latest/questions/introduction.html)\) استفاده کنید، سپس از ابزارهای توسعه‌دهنده مرورگر خود برای دیدن نحوه فرمت کردن request body با پرس‌وجو توسط متابیس استفاده کنید.

## مثال‌ها در Python، R، و JavaScript

Curl یک ابزار مفید برای کاوش APIها است، اما اگر متابیس را در یک اکوسیستم داده بزرگ یکپارچه می‌کنید، احتمالاً از چیز دیگری استفاده خواهید کرد. برای نشان دادن نحوه دسترسی به API با Python، R، و Node.js، بیایید دو سؤال ایجاد کنیم. اولی میانگین ارزش pre-tax سفارشات بالای 100 دلار گروه‌بندی شده بر اساس دسته را پیدا می‌کند. به صورت عمومی به اشتراک گذاشته شده است—[این آموزش](../../embedding/charts-and-dashboards.html) نحوه انجام آن را توضیح می‌دهد.

![نوت‌بوک یک سؤال عمومی که میانگین ارزش سفارشات بالای 100 دلار بر اساس دسته محصول محاسبه می‌کند.](../../../images/metabase-api/public-question.png)

سؤال دوم تعداد مردم در پایگاه داده را می‌شمارد. *به اشتراک گذاشته نشده* است: آن را شامل کردیم تا نشان دهیم چگونه سؤال‌های به اشتراک گذاشته شده را از به اشتراک گذاشته نشده متمایز کنیم.

![نوت‌بوک یک سؤال غیرعمومی که تعداد مردم در پایگاه داده را محاسبه می‌کند.](../../../images/metabase-api/non-public-question.png)

### Python

اولین مثال ما در Python نوشته شده است. مثل بیشتر برنامه‌های علم داده از کتابخانه [requests](https://pypi.org/project/requests/) برای ارسال درخواست‌های HTTP و [Pandas](https://pandas.pydata.org/) برای مدیریت داده جدولی استفاده می‌کند، پس با import کردن آن کتابخانه‌ها شروع می‌کنیم.

بیایید از متابیس بپرسیم کدام سؤال‌ها ID عمومی دارند، یعنی کدام‌ها به اشتراک گذاشته شده‌اند تا بتوانیم آن‌ها را از راه دور invoke کنیم. وقتی برای همه cardها می‌پرسیم، لیستی با برخی اطلاعات درباره همه سؤال‌ها دریافت می‌کنیم؛ فقط آن‌هایی که فیلد `public_uuid` دارند قابل فراخوانی هستند:

```
import requests
import pandas as pd
# Avoid committing your API KEY to the repository
headers = {'x-api-key': YOUR_API_KEY}
response = requests.get('http://localhost:3000/api/card',
                         headers=headers).json()
questions = [q for q in response if q['public_uuid']]
print(f'{len(questions)} public of {len(response)} questions')

```

در مورد ما، خروجی به ما می‌گوید که دو سؤال وجود دارد، اما فقط یکی عمومی است:

```
1 public of 2 questions

```

بیایید اطلاعاتی درباره آن سؤال عمومی دریافت کنیم و عنوان آن را چاپ کنیم:

```
uuid = questions[0]['public_uuid']
response = requests.get(f'http://localhost:3000/api/public/card/{uuid}',
                        headers=headers)
print(f'First title: {response.json()["name"]}')

```

```
First title: Average value of orders over $100 grouped by category

```

در نهایت، می‌توانیم داده را از اولین سؤال در لیست pull down کنیم. کلید `'data'` در پاسخ JSON اطلاعات زیادی دارد؛ آنچه بیشتر به آن علاقه‌مندیم مقادیر زیر کلید فرعی `'rows'` است، که جدول نتیجه را در فرم معمول list-of-lists ذخیره می‌کند. بیایید آن را به یک dataframe Pandas تبدیل کنیم و چاپ کنیم:

```
response = requests.get(f'http://localhost:3000/api/public/card/{uuid}/query',
                        headers=headers)
rows = response.json()['data']['rows']
data = pd.DataFrame(rows, columns=['Category', 'Average'])
print('First data')
print(data)

```

```
First data
    Category     Average
0  Doohickey  114.679742
1     Gadget  123.530916
2      Gizmo  120.897286
3     Widget  122.078721

```

### R با Tidyverse

نسخه R مثال ما همان ساختار نسخه Python را دارد. مثل بیشتر دانشمندان داده از خانواده کتابخانه‌های [tidyverse](https://www.tidyverse.org/) استفاده می‌کنیم، پس بیایید آن‌ها را به همراه [`httr`](https://cran.r-project.org/web/packages/httr/) برای مدیریت درخواست‌های HTTP، [`jsonlite`](https://cran.r-project.org/web/packages/jsonlite/) برای parse کردن JSON، و [`glue`](https://cran.r-project.org/web/packages/glue/) برای فرمت کردن رشته load کنیم:

```
library(tidyverse)
library(httr)
library(jsonlite)
library(glue)

```

کلید API خود را در headerها قرار می‌دهیم.

```
headers <- add_headers('x-api-key' = YOUR_API_KEY)

```

سپس اطلاعات درباره همه سؤال‌ها را دریافت می‌کنیم و می‌پرسیم کدام‌ها عمومی هستند:

```
data <- GET('http://localhost:3000/api/card', headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
num_questions <- data %>%
  nrow()
num_public <- data %>%
  pull(public_uuid) %>%
  discard(is.na) %>%
  length()
glue('{num_public} public of {num_questions} questions')

```

```
1 public of 2 questions

```

نمایش عنوان اولین card عمومی همان نتیجه Python را می‌دهد، که اطمینان‌بخش است:

```
uuid <- data %>%
  pull(public_uuid) %>%
  discard(is.na) %>%
  first()
data <- glue('http://localhost:3000/api/public/card/{uuid}') %>%
  GET(headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
glue('First title: {data$name}')

```

```
First title: Average value of orders over $100 grouped by category

```

و داده مرتبط با آن card نیز همان است وقتی آن را به یک tibble تبدیل می‌کنیم، اگرچه نمایش پیش‌فرض R به ما مکان‌های اعشاری زیادی نمی‌دهد:

```
data <- glue('http://localhost:3000/api/public/card/{uuid}/query') %>%
  GET(headers) %>%
  content(as = 'text', encoding = 'UTF-8') %>%
  fromJSON()
rows <- data$data$rows
colnames(rows) <- c('Category', 'Average')
rows <- rows %>% as_tibble()
rows$Average <- as.numeric(rows$Average)
glue('First data')
rows

```

```
First data
# A tibble: 4 x 2
  Category  Average
  <chr>       <dbl>
1 Doohickey    115.
2 Gadget       124.
3 Gizmo        121.
4 Widget       122.

```

### JavaScript روی Node.js

JavaScript یک زبان به طور فزاینده محبوب برای script نویسی سمت سرور است، اما برخلاف Python و R، JavaScript فاقد یک کتابخانه غالب واحد برای جداول داده است. برای پروژه‌های بزرگ ما از [`data-forge`](https://www.data-forge-js.com/) خوشمان می‌آید، اما برای مثال‌های کوچک به [Dataframe-js](https://gmousse.gitbooks.io/dataframe-js/) می‌چسبیم. همچنین از [`got`](https://www.npmjs.com/package/got) برای درخواست‌های HTTP به جای بسته قدیمی‌تر [`request`](https://www.npmjs.com/package/request) استفاده می‌کنیم، چون دومی اکنون deprecated شده است. در نهایت، چون syntax `async`/`await` را خیلی آسان‌تر از promiseها یا callbackها برای خواندن می‌یابیم، همه کد خود را در یک تابع `async` قرار می‌دهیم که سپس فوراً فراخوانی می‌کنیم:

```
const got = require("got");
const DataFrame = require("dataframe-js").DataFrame;

const main = async () => {
  // ...program goes here...
};

main();

```

دوباره با احراز هویت خود شروع می‌کنیم:

```
headers = { "x-api-key": YOUR_API_KEY };

```

سپس برای لیست کامل سؤال‌ها می‌پرسیم و آن‌ها را فیلتر می‌کنیم تا عمومی‌ها را انتخاب کنیم:

```
response = await got.get("http://localhost:3000/api/card", {
  responseType: "json",
  headers: headers,
});
// filter for public questions
questions = response.body.filter((q) => q.public_uuid);
console.log(`${questions.length} public of ${response.body.length} questions`);

```

```
1 public of 2 questions

```

اولین card عمومی هنوز عنوانی که قبلاً دیده‌ایم را دارد:

```
const uuid = questions[0].public_uuid;
response = await got.get(`http://localhost:3000/api/public/card/${uuid}`, {
  responseType: "json",
  headers: headers,
});
console.log(`First title: ${response.body.name}`);

```

```
First title: Average value of orders over $100 grouped by category

```

وقتی داده آن را pull down می‌کنیم همان مقادیر را دریافت می‌کنیم، اگرچه اعداد به روشی دیگر کمی متفاوت نمایش داده می‌شوند:

```
response = await got.get(
  `http://localhost:3000/api/public/card/${uuid}/query`,
  {
    responseType: "json",
    headers: headers,
  },
);
const rows = response.body.data.rows;
const df = new DataFrame(rows, ["Category", "Average"]);
df.show();

```

```
| Category  | Average   |
------------------------
| Doohickey | 114.67... |
| Gadget    | 123.53... |
| Gizmo     | 120.89... |
| Widget    | 122.07... |

```

## احراز هویت درخواست‌های خود با یک token session

> باید به جای آن از [کلید API](../../../../docs/latest/people-and-groups/api-keys.html) استفاده کنید. شامل کردن اطلاعات زیر فقط در صورتی که به هر دلیلی نیاز به استفاده از token session دارید.

همچنین می‌توانید از یک token session برای احراز هویت درخواست‌های خود استفاده کنید. برای دریافت token session، یک درخواست به endpoint [`/api/session`](../../../../docs/latest/api.html#tag/apisession) با نام کاربری و رمز عبور خود submit کنید:

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "person@metabase.com", "password": "fakepassword"}' \
  http://localhost:3000/api/session

```

اگر با یک سرور remote کار می‌کنید، نیاز دارید `localhost:3000` را با آدرس سرور خود جایگزین کنید. این درخواست یک شیء JSON با یک کلید به نام `id` و token به عنوان مقدار کلید برمی‌گرداند، مثلاً:

```
{ "id": "38f4939c-ad7f-4cbe-ae54-30946daf8593" }

```

سپس می‌توانید آن token session را در headerهای درخواست‌های بعدی خود مثل این شامل کنید:

```
"X-Metabase-Session": "38f4939c-ad7f-4cbe-ae54-30946daf8593"

```

چیزهایی که باید درباره sessionها توجه کنید:

- *به طور پیش‌فرض، sessionها برای 14 روز معتبر هستند*. می‌توانید این مدت session را با تنظیم متغیر محیطی [`MB_SESSION_AGE`](../../../../docs/latest/configuring-metabase/environment-variables.html#max_session_age) (مقدار به دقیقه است) پیکربندی کنید.
- *باید اعتبارنامه‌ها را cache کنید* تا آن‌ها را تا انقضا reuse کنید، چون ورودها برای امنیت rate-limited هستند.
- *Tokenهای session نامعتبر و منقضی شده کد وضعیت 401 (Unauthorized) برمی‌گردانند.*
- *کدهای وضعیت 401 را gracefully handle کنید*. توصیه می‌کنیم کد خود را برای fetch کردن یک token session جدید و retry خودکار یک درخواست وقتی API یک [کد وضعیت 401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) برمی‌گرداند بنویسید.
- *برخی endpointها نیاز دارند کاربر یک admin باشد، همچنین به عنوان superuser شناخته می‌شود*. endpointهایی که نیاز به وضعیت admin یا superuser دارند (admin = superuser) به طور کلی در مستندات خود می‌گویند. آن‌ها یک [کد وضعیت 403 (Forbidden)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) برمی‌گردانند اگر کاربر فعلی admin نباشد.

به طور خلاصه: به جای آن از [کلید API](../../../../docs/latest/people-and-groups/api-keys.html) استفاده کنید.

## لذت ببرید

اگر این آموزش را جالب یافتید، می‌توانید [یک instance محلی متابیس راه‌اندازی کنید](../../../../docs/latest/installation-and-operation/running-metabase-on-docker.html)، با API آزمایش کنید، و لذت ببرید! اگر گیر کردید، [انجمن ما را بررسی کنید](https://discourse.metabase.com/) تا ببینید آیا کسی با مسئله مشابهی مواجه شده است، یا یک سؤال جدید ارسال کنید.

[
      
        
        

      
      
        
        

      
    ](data-engineering.html)
