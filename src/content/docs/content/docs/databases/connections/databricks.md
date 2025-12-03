---
title: Databricks
---

# Databricks

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید و **Databricks** را انتخاب کنید.

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

## ویرایش جزئیات اتصال

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده یا نام دامنهٔ آن (مثلاً `xxxxxxxxxx.cloud.databricks.com` یا `adb-xxxxx.azuredatabricks.net`). این مقدار همان **Server Hostname** منبع محاسباتی (compute resource) در Databricks است.

[Compute settings for the Databricks JDBC Driver](https://docs.databricks.com/en/integrations/jdbc/compute.html) را ببینید.

### HTTP path

این مقدار همان **HTTP Path** منبع محاسباتی Databricks است. این مقدار معمولاً یک endpoint مربوط به SQL warehouse است، با فرمتی مثل `/sql/1.0/endpoints/abcdef1234567890`. ببینید: [Connect to a SQL warehouse](https://docs.databricks.com/en/compute/sql-warehouse/index.html).

همچنین [Compute settings for the Databricks JDBC Driver](https://docs.databricks.com/en/integrations/jdbc/compute.html) را ببینید.

### Authentication

دو روش برای احراز هویت در Databricks وجود دارد: استفاده از personal access token (PAT) یا service principal با OAuth (OAuth M2M).

درایور Databricks هر دو روش را پشتیبانی می‌کند. با استفاده از toggle می‌توانید روش احراز هویت مورد نظر خود را انتخاب کنید.

#### احراز هویت با personal access token

[Personal Access Token (PAT)](https://docs.databricks.com/en/dev-tools/auth/pat.html) را ببینید.

#### احراز هویت با service principal و OAuth (OAuth M2M)

[Authenticate access with a service principal using OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) را ببینید.

### فعال‌سازی multi-catalog

برای sync کردن چند catalog این گزینه را روشن کنید. اگر این گزینه را فعال کنید، می‌توانید [مشخص کنید کدام catalogها را sync کنید](#catalogs-and-schemas).

### Default catalog

الزامی است. باید یک catalog پیش‌فرض مشخص کنید (تا در پرس‌وجوهای native لازم نباشد همیشه نام catalog را بنویسید).

نمی‌توانید catalogهای legacy در Databricks (مثل `samples` یا `hive_metastore`) را sync کنید.

### Catalogها و schemaها

می‌توانید مشخص کنید کدام catalogها و schemaها را می‌خواهید sync و scan کنید. گزینه‌ها:

- All
- Only these...
- All except...

برای گزینه‌های **Only these** و **All except** می‌توانید یک لیست comma-separated وارد کنید تا به متابیس بگویید کدام catalogها و schemaها را شامل (یا مستثنا) کند. مثلاً:

```text
foo,bar,baz
```

می‌توانید از wildcard یعنی `*` برای match کردن چند schema استفاده کنید.

فرض کنید سه schema دارید: foo، bar و baz.

- اگر **Only these...** را انتخاب کرده‌اید و رشتهٔ `b*` را وارد کنید، bar و baz sync می‌شوند.
- اگر **All except...** را انتخاب کرده‌اید و رشتهٔ `b*` را وارد کنید، فقط foo sync می‌شود.

دقت کنید که فقط wildcard `*` پشتیبانی می‌شود؛ نمی‌توانید از سایر کاراکترهای خاص یا regex استفاده کنید.

### گزینه‌های اضافی JDBC connection string

می‌توانید گزینه‌های اضافی را به connection stringای که متابیس برای اتصال به پایگاه‌داده استفاده می‌کند اضافه کنید، مثلاً: `IgnoreTransactions=0`.

[Compute settings for the Databricks JDBC Driver](https://docs.databricks.com/en/integrations/jdbc/compute.html) را ببینید.

### اجرای دوبارهٔ پرس‌وجو برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر summarize یا فیلتر در query builder روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### انتخاب زمان sync و scan

[مستندات sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## قابلیت‌های مدل (Model features)

در حال حاضر، هیچ قابلیت خاصی برای مدل‌ها روی Databricks در دسترس نیست.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک پایگاه‌دادهٔ دیگر با همان schema اجرا کند.

وقتی **multi-catalog** غیرفعال است، می‌توانید بین catalogهای روی یک host route کنید. اگر multi-catalog فعال باشد، تنها می‌توانید بین پایگاه‌داده‌هایی روی hostهای جداگانه route کنید.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم سطوح دسترسی به داده](../../permissions/data.md)
