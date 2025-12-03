---
title: Snowflake
redirect_from:
  - /docs/latest/administration-guide/databases/snowflake
---

# Snowflake

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

## Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

## Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

## Account یا hostname

می‌توانید از account name یا hostname استفاده کنید. hostname همان آدرس IP پایگاه‌داده یا نام دامنهٔ آن است (مثلاً `database.example.com`).

اگر URL شما شامل region پایگاه‌داده‌تان باشد، می‌توانید با account name متصل شوید، در غیر این صورت با hostname متصل شوید.

### AWS

اتصال با account name.

شناسهٔ حساب (Account identifier) را همراه با regionای که کلاستر Snowflake شما روی آن اجرا می‌شود وارد کنید، مثلاً `xxxxxxxxx.us-east-3.aws`. اگر Snowflake را روی AWS اجرا می‌کنید و URL حساب شما `https://az12345.ca-central-1.snowflakecomputing.com` است:

- `<account_identifier>`: مقدار `az12345.ca-central-1`
- `<cloud_platform>`: مقدار `aws`

باید در متابیس مقدار `az12345.ca-central-1.aws` را به‌عنوان account name وارد کنید.

همهٔ regionها به شناسهٔ پلتفرم ابری نیاز ندارند. اگر در `us-west-2` هستید، باید فقط `az12345` را به‌عنوان account name وارد کنید. برای نیازمندی‌های هر region، [مستندات رسمی Snowflake](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#non-vps-account-locator-formats-by-cloud-platform-and-region) را ببینید.

### app.snowflake.com

اتصال با host name.

می‌توانید با رفتن به Admin > Accounts، host name را به‌دست بیاورید. Account name زیر بخش Accounts نمایش داده می‌شود. روی حساب مورد نظر کلیک کنید و روی آیکون لینک کلیک کنید تا host URL کپی شود؛ همان host name شما است. در تصویر زیر، Metabot بخش‌های حساس را پوشانده است. لینک «Copy account URL» در سمت راست چیزی است که باید دنبال آن باشید:

![Snowflake copy account URL](../images/snowflake-copy-account-url.png)

برای اطلاعات بیشتر، [Account Identifiers in Snowflake](https://docs.snowflake.com/en/user-guide/admin-account-identifier) را ببینید.

## Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

در صفحهٔ app.snowflake.com، می‌توانید Users و roles را در مسیر Admin > Users & Roles پیدا کنید.

## Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

## کلید خصوصی RSA (فرمت PEM)

اجباری نیست. می‌توانید از **Local file path** یا **Uploaded file path** استفاده کنید. اگر روی Metabase Cloud هستید، باید **Uploaded file path** را انتخاب و گواهی خود را آپلود کنید.

## Warehouse

warehouse در Snowflake. اگر کاربر warehouse پیش‌فرض نداشته باشد، باید نام warehouse را برای اتصال وارد کنید.

در app.snowflake.com می‌توانید warehouseها را در مسیر Admin > Warehouses پیدا کنید.

## نام پایگاه‌داده (Database name - حساس به حروف)

نام پایگاه‌داده‌ای که می‌خواهید در Snowflake به آن متصل شوید. در app.snowflake.com، دیتابیس‌ها زیر Data > Databases فهرست می‌شوند.

## Schemas (اختیاری)

می‌توانید مشخص کنید کدام schemaها را می‌خواهید sync و scan کنید. اگر schemaای مشخص نکنید، همهٔ schemaهایی که برای آن user و role در دسترس هستند، به‌صورت پوشه در متابیس نمایش داده می‌شوند.

گزینه‌های schema:

- All  
- Only these...  
- All except...  

برای گزینه‌های **Only these** و **All except** می‌توانید یک فهرست جداشده با کاما وارد کنید تا به متابیس بگویید کدام schemaها را شامل (یا مستثنا) کند. مثلاً:

```text
FOO,BAR,BAZ
```

می‌توانید از wildcard `*` برای match کردن چند schema استفاده کنید.

فرض کنید سه schema دارید: `FOO`، `BAR` و `BAZ`:

- اگر **Only these...** را انتخاب کنید و رشتهٔ `B*` را وارد کنید، `BAR` و `BAZ` sync می‌شوند.
- اگر **All except...** را انتخاب کنید و رشتهٔ `B*` را وارد کنید، فقط `FOO` sync می‌شود.

توجه کنید که فقط wildcard `*` پشتیبانی می‌شود؛ نمی‌توانید از regex یا کاراکترهای ویژهٔ دیگر استفاده کنید.

## Role (اختیاری)

> **هشدار:** متابیس _مجموع تمام مجوزها_ را از _همهٔ role_هایی که به کاربر در Snowflake داده‌اید به ارث می‌برد. تنظیم «Role» در اینجا فقط آن role را به connection string اضافه می‌کند تا به Snowflake بگوید نقش پیش‌فرض چیست – این مقدار **به‌تنهایی دسترسی را محدود نمی‌کند**. پس **خیلی دقت کنید چه roleهایی به کاربر اتصال می‌دهید**؛ چون اگر بعداً نقش‌های گسترده‌تری به این کاربر بدهید، متابیس هم به‌طور خودکار آن مجوزها را دریافت می‌کند و ممکن است داده‌هایی را نشان دهد که قصدش را نداشته‌اید. اگر ترجیح می‌دهید متابیس قبل از اجرای هر پرس‌وجو، دستور `SET ROLE` صادر کند، [connection impersonation](../../permissions/impersonation.md) را ببینید.

می‌توانید یک role مشخص کنید تا جایگزین role پیش‌فرض کاربر پایگاه‌داده شود. برای مثال، اگر کاربر پایگاه‌داده `METABASE` نقش‌های زیر را داشته باشد:

- نقش پیش‌فرض `APPLICATION`
- نقش اضافهٔ `ANALYTICS`

می‌توانید در فیلد Role مقدار `ANALYTICS` را وارد کنید تا مطمئن شوید کاربر `METABASE` به‌طور پیش‌فرض با role `ANALYTICS` به Snowflake متصل می‌شود.

## استفاده از SSH tunnel

[راهنمای SSH tunneling](../ssh-tunnel.md) را ببینید.

## گزینه‌های اضافی JDBC connection string

برخی پایگاه‌داده‌ها اجازه می‌دهند گزینه‌های اضافی را به connection stringی که متابیس برای اتصال استفاده می‌کند اضافه کنید.

## اجرای دوبارهٔ پرس‌وجو برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

## انتخاب زمان sync و scan

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## امکانات مدل (Model features)

در حال حاضر هیچ قابلیت مدل خاصی برای Snowflake در دسترس نیست.

## مسیریابی پایگاه‌داده (Database routing)

با Database routing، یک ادمین می‌تواند یک‌بار با استفاده از یک پایگاه‌داده سؤال بسازد و آن سؤال، بسته به اینکه چه کسی آن را می‌بیند، روی پایگاه‌داده دیگری با همان schema اجرا شود.

[Database routing](../../permissions/database-routing.md) را ببینید.

## بخش خطر (Danger zone)

[Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)
