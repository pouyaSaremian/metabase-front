---
title: Google BigQuery
redirect_from:
  - /docs/latest/administration-guide/databases/bigquery
---

# Google BigQuery

برای افزودن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## پیش‌نیازها

نیاز دارید یک حساب [Google Cloud Platform](https://cloud.google.com/) با یک [پروژه](https://cloud.google.com/storage/docs/projects) داشته باشید که می‌خواهید در متابیس از آن استفاده کنید. برای نحوه [ایجاد و مدیریت پروژه](https://cloud.google.com/resource-manager/docs/creating-managing-projects) به مستندات Google Cloud Platform مراجعه کنید. این پروژه باید یک dataset در BigQuery داشته باشد که متابیس به آن متصل شود.

## Google Cloud Platform: ساخت service account و فایل JSON

ابتدا به یک فایل JSON [service account](https://cloud.google.com/iam/docs/service-account-overview) نیاز دارید که متابیس بتواند با استفاده از آن به dataset بیگ‌کوئری شما دسترسی پیدا کند. Service accountها برای کاربران غیرانسانی (مثل اپلیکیشن‌هایی مانند متابیس) در نظر گرفته شده‌اند تا تماس‌های API خود را احراز هویت (چه کسی هستم؟) و مجازسازی (چه کار می‌توانم بکنم؟) کنند.

برای ساخت فایل JSON service account، مستندات گوگل برای [راه‌اندازی service account](https://cloud.google.com/iam/docs/creating-managing-service-accounts) برای dataset بیگ‌کوئری خود را دنبال کنید. جریان کلی به این شکل است:

1. **ساخت service account**: در کنسول پروژه Google Cloud Platform خود، منوی اصلی سمت چپ را باز کنید، به بخش **IAM & Admin** بروید و **Service account** را انتخاب کنید. کنسول service accountهای موجود را (اگر باشند) فهرست می‌کند. در بالای صفحه روی **+ CREATE SERVICE ACCOUNT** کلیک کنید.
2. **پر کردن جزئیات service account**: نامی برای service account بگذارید و توضیحی اضافه کنید (به‌محض وارد کردن نام، Service account ID پر می‌شود). سپس روی دکمه **Create** کلیک کنید.
3. **دادن دسترسی به این پروژه**: باید برای service account **role** اضافه کنید تا متابیس اجازه دیدن و اجرای پرس‌وجو روی dataset شما را داشته باشد. مطمئن شوید roleهای زیر را به این service account اضافه می‌کنید:
   - BigQuery Data Viewer
   - BigQuery Metadata Viewer
   - BigQuery Job User (متفاوت از BigQuery User)
برای اطلاعات بیشتر درباره **role**ها در BigQuery، [مستندات Google Cloud Platform](https://cloud.google.com/bigquery/docs/access-control) را ببینید.
4. **ساخت key**: وقتی roleها را به service account اختصاص دادید، روی دکمه **Create Key** کلیک کنید و برای نوع key گزینه **JSON** را انتخاب کنید. فایل JSON روی کامپیوتر شما دانلود می‌شود.
> **کلید را فقط یک‌بار می‌توانید دانلود کنید**. اگر کلید را حذف کنید، باید یک service account دیگر با همان roleها بسازید.

## Connection و sync

بعد از اتصال به یک پایگاه‌داده، بخشی با عنوان «Connection and sync» می‌بینید که وضعیت فعلی اتصال و گزینه‌های مدیریت اتصال پایگاه‌داده را نشان می‌دهد.

در این بخش می‌توانید [schema پایگاه‌داده را sync کنید و مقادیر فیلدها را دوباره اسکن کنید](../sync-scan.md) و جزئیات اتصال را ویرایش کنید.

## ویرایش جزئیات اتصال

می‌توانید هر زمان این تنظیمات را ویرایش کنید. فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط متابیس.

### Project ID

هر dataset در BigQuery یک **Project ID** دارد. می‌توانید این شناسه را در [Google Cloud Console](https://console.cloud.google.com/) پیدا کنید. اگر مطمئن نیستید **Project ID** کجاست، مستندات گوگل درباره [گرفتن اطلاعات روی datasetها](https://cloud.google.com/bigquery/docs/dataset-metadata#getting_dataset_information) را ببینید.

> هنگام وارد کردن **Project ID**، پیشوند Project ID را نیاورید. مثلاً اگر شناسه شما `project_name:project_id` است، فقط `project_id` را وارد کنید.

### فایل JSON service account

فایل JSON شامل credentialهایی است که اپلیکیشن متابیس برای دسترسی به datasetهای BigQuery، مطابق **role**هایی که به service account داده‌اید، نیاز دارد. اگر لازم شد roleهای بیشتری اضافه کنید، باید یک service account جدید بسازید، فایل JSON را دانلود کنید و فایل را در متابیس آپلود کنید.

### Datasets

می‌توانید مشخص کنید کدام datasetهای BigQuery را می‌خواهید sync و scan کنید. گزینه‌ها:

- All
- Only these...
- All except...

> یک dataset در BigQuery شبیه به schema است. مطمئن شوید نام datasetها (مثل `marketing`) را وارد می‌کنید، نه نام جدول‌ها (`marketing.campaigns`).

فرض کنید سه dataset دارید: `foo`، `bar` و `baz`.

برای sync کردن هر سه dataset، **Only these...** را انتخاب و این مقدار را وارد کنید:

```text
foo,bar,baz
```

برای sync بر اساس match رشته، از wildcard `*` استفاده کنید:

- برای sync کردن `bar` و `baz`، **Only these...** را انتخاب کرده و رشته `b*` را وارد کنید.
- برای sync کردن فقط `foo`، **All except...** را انتخاب کرده و رشته `b*` را وارد کنید.

توجه: فقط wildcard `*` پشتیبانی می‌شود؛ نمی‌توانید از regex یا کاراکترهای ویژه دیگر استفاده کنید.

### استفاده از timezone ماشین مجازی جاوا (JVM)

پیشنهاد می‌کنیم این گزینه را خاموش بگذارید مگر اینکه در بسیاری از پرس‌وجوهای خود روی این داده‌ها [تبدیل timezone](../../configuring-metabase/timezones.md) را به‌صورت دستی انجام می‌دهید.

### افزودن User ID و query hash به پرس‌وجوها

این گزینه برای [ممیزی](../../usage-and-performance-tools/usage-analytics.md) و debug مفید است، اما مانع کش شدن نتایج در BigQuery می‌شود و ممکن است هزینه شما را افزایش دهد.

### Alternate hostname

اگر می‌خواهید با hostname دیگری به BigQuery متصل شوید، این مقدار را تنظیم کنید. قالب: `https://<hostname>:<port>`. اگر برای اتصال به BigQuery از یک سرویس proxy استفاده می‌کنید (مثلاً پروکسی حریم خصوصی که PII را ناشناس می‌کند)، باید این فیلد را روی hostname یا IP proxy تنظیم کنید. حتماً آدرس کامل شامل پروتکل و شماره پورت را بنویسید.

### اجرای دوباره پرس‌وجوها برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمه play) کلیک کنند، این گزینه را روی **OFF** بگذارید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینه گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) پرس‌وجو را اجرا می‌کند. اگر پایگاه‌داده شما کند است، شاید بخواهید اجرای خودکار را غیرفعال کنید تا با هر کلیک داده بارگذاری نشود.

### انتخاب زمان sync و scan

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌داده شما را افزایش می‌دهد.

این گزینه را روی **ON** بگذارید تا هر بار متابیس [sync](../sync-scan.md#how-database-syncs-work) انجام می‌دهد، یک نمونه از مقادیر را اسکن کند.

یک پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و از آن داده برای تخمین تعداد مقادیر یکتا در هر ستون، کمینه و بیشینه مقادیر ستون‌های عددی و زمانی و غیره استفاده می‌کند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار در زمان راه‌اندازی برای هر ستون fingerprint می‌سازد.

## اتصال متابیس به منبع‌های داده Google Drive

می‌توانید از طریق BigQuery متابیس را به منبع‌های داده در Google Drive وصل کنید. این کار کمی تنظیمات می‌خواهد، اما به‌طور خلاصه کاری که انجام می‌دهید این است که یک dataset در BigQuery می‌سازید و یک external table به آن dataset اضافه می‌کنید که به یک Google Sheet اشاره می‌کند. این روش برای آپلود CSV در Google Sheets و سپس تحلیل و مصورسازی داده با متابیس مفید است.

برای اتصال به منبع داده‌ای که در Google Drive ذخیره شده (مثل یک Google Sheet)، ابتدا مطمئن شوید مراحل بالا را کامل کرده‌اید، شامل:

- ساخت یک پروژه در Google Cloud Platform،
- افزودن یک dataset در BigQuery، و
- ساخت یک [service account](#google-cloud-platform-%D8%B3%D8%A7%D8%AE%D8%AA-service-account-%D9%88-%D9%81%D8%A7%DB%8C%D9%84-json).

### اشتراک‌گذاری منبع Google Drive با service account

وقتی فایل Drive خود (مثلاً یک Google Sheet که یک CSV در آن آپلود کرده‌اید) را باز کرده‌اید، روی دکمه **Share** در بالا سمت راست کلیک کنید. در کادر متنی **Add people or groups**, ایمیل service account خود را paste کنید که می‌توانید آن را در [صفحه Service Accounts](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts?supportedpurview=project) در Google Cloud Console پیدا کنید.

این ایمیل شبیه این خواهد بود:  
`service-account-name@your-project-name.iam.gserviceaccount.com`، با نام service account و نام پروژه شما.

از منوی کشویی، **Viewer** را انتخاب کنید، گزینه **Notify people** را غیرفعال کنید و روی **Share** کلیک کنید.

### ساخت یک external table در BigQuery که به منبع Google Drive اشاره می‌کند

اگر هنوز dataset در BigQuery ندارید، [یکی بسازید](https://cloud.google.com/bigquery/docs/datasets).

سپس با استفاده از Google Cloud Console، [یک external table](https://cloud.google.com/bigquery/external-data-drive?hl=en#creating_and_querying_a_permanent_external_table) درون dataset بیگ‌کوئری خود بسازید که به Google Sheet شما اشاره کند.

مطمئن شوید **Drive URI** و فرمت فایل را درست تنظیم کرده‌اید.

اگر هنوز این کار را نکرده‌اید، [متابیس خود را به BigQuery](#google-bigquery) وصل کنید.

پس از انجام این مراحل، می‌توانید با استفاده از منبع Google Drive در متابیس سؤال بپرسید و داشبورد بسازید.

## استفاده از Legacy SQL

از نسخه 0.30.0 به بعد، متابیس به BigQuery می‌گوید که پرس‌وجوهای SQL را به‌صورت [Standard SQL (GoogleSQL)](https://cloud.google.com/bigquery/docs/introduction-sql) تفسیر کند. اگر ترجیح می‌دهید از [Legacy SQL](https://cloud.google.com/bigquery/docs/reference/legacy-sql) استفاده کنید، می‌توانید با اضافه کردن دستور `#legacySQL` در ابتدای پرس‌وجو این کار را انجام دهید، مثلاً:

```sql
#legacySQL
SELECT *
FROM [my_dataset.my_table]
```

## عیب‌یابی

اگر در اتصال BigQuery مشکل دارید، می‌توانید این [راهنمای عیب‌یابی](../../troubleshooting-guide/bigquery-drive.md) را که مشکلات BigQuery را پوشش می‌دهد ببینید، یا این [راهنما](../../troubleshooting-guide/db-connection.md) درباره اتصال به انبار داده، یا به [انجمن بحث متابیس](https://discourse.metabase.com/search?q=bigquery) سر بزنید تا ببینید آیا کسی قبلاً با مشکل مشابهی روبه‌رو شده و آن را حل کرده است یا نه.

## امکانات مدل

فعلاً هیچ قابلیت مدل (Model features) برای BigQuery در دسترس نیست.

## مسیریابی پایگاه‌داده

با Database routing، یک ادمین می‌تواند یک‌بار با استفاده از یک پایگاه‌داده سؤال بسازد و آن سؤال، بسته به اینکه چه کسی آن را می‌بیند، روی پایگاه‌داده دیگری با همان schema اجرا شود.

مسیریابی پایگاه‌داده برای BigQuery بین **پروژه‌های BigQuery** با schemaهای یکسان کار می‌کند.

[Database routing](../../permissions/database-routing.md) را ببینید.

## بخش خطر (Danger zone)

[Danger zone](../danger-zone.md) را ببینید.

## مطالعه بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)


