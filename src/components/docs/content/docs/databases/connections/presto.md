---
title: Presto
---

# Presto

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

فیلدهای مربوط به این پایگاه‌داده را پر کنید و در انتها روی **Save changes** کلیک کنید.

## ویرایش جزئیات اتصال

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده یا نام دامنهٔ آن (مثلاً `esc.mydatabase.com`).

### Port

پورت پایگاه‌داده؛ مثلاً `8080`.

### Catalog

catalogهای Presto شامل schemaها هستند و از طریق یک connector به منبع‌های داده اشاره می‌کنند.

### Schema (optional)

فقط جدول‌هایی را که از یک schema مشخص می‌آیند به متابیس اضافه می‌کند.

### Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

### Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

### Use a secure connection (SSL)

متابیس به‌صورت خودکار ابتدا تلاش می‌کند با SSL به پایگاه‌داده متصل شود و اگر موفق نشد، بدون SSL تلاش می‌کند. اگر اتصال با SSL امکان‌پذیر باشد، متابیس آن را به‌عنوان پیش‌فرض برای این پایگاه‌داده تنظیم می‌کند. اگر ترجیح می‌دهید بدون این لایه امنیتی متصل شوید، بعداً می‌توانید این تنظیم را تغییر دهید، اما برای امنیت داده‌ها پیشنهاد می‌کنیم SSL روشن بماند.

### Use SSL certificate?

متابیس از keystore و truststore هر دو پشتیبانی می‌کند.

#### Keystore

می‌توانید مسیر یک فایل محلی را مشخص کنید یا یک keystore آپلود کنید. همچنین باید رمز keystore را وارد کنید.

#### Truststore

می‌توانید مسیر یک فایل محلی را مشخص کنید یا یک truststore آپلود کنید. همچنین باید رمز truststore را وارد کنید.

### Authenticate with Kerberos

تنظیمات Kerberos شامل موارد زیر است:

- Kerberos principal (مثلاً `service/instance@REALM`)
- سرویس coordinator در Kerberos (مثلاً `presto`)
- امکان استفاده از canonical hostname
- فایل cache اعتبارنامهٔ Kerberos (مثلاً `/tmp/kerbo-credential-cache`)
- فایل keytab مربوط به Kerberos (مثلاً `/path/to/kerberos.keytab`)
- فایل پیکربندی Kerberos (مثلاً `/etc/krb5.conf`)
- الگوی service principal برای Presto coordinator در Kerberos (مثلاً `${SERVICE}@${HOST}.${SERVICE}`)

### Additional JDBC connection string options

می‌توانید گزینه‌های اضافی را به connection stringی که متابیس برای اتصال به پایگاه‌داده استفاده می‌کند اضافه کنید.

### Re-run queries for simple explorations

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### انتخاب زمان sync و scan

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده (data catalog) بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک data catalog دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## Further reading

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)
