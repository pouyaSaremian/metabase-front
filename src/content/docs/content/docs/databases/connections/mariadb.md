---
title: MariaDB
---

# MariaDB

> این صفحه اتصال MariaDB به‌عنوان یک _انبار داده (data warehouse)_ را توضیح می‌دهد. برای استفاده از MariaDB به‌عنوان _پایگاه‌دادهٔ برنامهٔ متابیس (application database)_، بخش [پیکربندی پایگاه‌دادهٔ برنامهٔ متابیس](../../installation-and-operation/configuring-application-database.md) را ببینید.

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

MariaDB از همان درایور MySQL استفاده می‌کند، پس درایور **MySQL** را انتخاب کنید.

## نسخه‌های پشتیبانی‌شده

متابیس از قدیمی‌ترین نسخهٔ تحت پشتیبانی MariaDB تا آخرین نسخهٔ پایدار آن پشتیبانی می‌کند. لیست نسخه‌ها را در [MariaDB Server releases](https://mariadb.com/kb/en/mariadb-server-release-dates/) ببینید.

## ویرایش جزئیات اتصال

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده یا نام دامنهٔ آن (مثلاً: `esc.mydatabase.com`).

### Port

پورت پایگاه‌داده. مثلاً `3306`.

### Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

### Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

### استفاده از اتصال امن (SSL)

می‌توانید زنجیرهٔ گواهی (certificate chain) سرور خود را اینجا paste کنید.

### استفاده از SSH tunnel

[راهنمای SSH tunneling](../ssh-tunnel.md) را ببینید.

### Unfold JSON Columns

قابلیت JSON folding برای پایگاه‌داده‌های MariaDB پشتیبانی نمی‌شود.

### گزینه‌های اضافی JDBC connection string

می‌توانید گزینه‌های اضافی را به connection stringی که متابیس برای اتصال به پایگاه‌داده استفاده می‌کند اضافه کنید.

### اجرای دوبارهٔ پرس‌وجو برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [summarize](../../questions/query-builder/summarizing-and-grouping.md) یا [filter](../../questions/query-builder/filters.md) روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### انتخاب زمان sync و scan

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

#### Database syncing

اگر گزینهٔ **Choose when syncs and scans happen** را روی **ON** گذاشته باشید، می‌توانید این موارد را تنظیم کنید:

- بسامد (frequency) [sync](../sync-scan.md#how-database-syncs-work): ساعتی (پیش‌فرض) یا روزانه.
- زمان اجرای sync، بر اساس timezone سروری که برنامهٔ متابیس روی آن اجرا می‌شود.

#### اسکن مقادیر برای فیلترها

متابیس می‌تواند مقادیر موجود در هر فیلد در این پایگاه‌داده را اسکن کند تا امکان استفاده از فیلترهای checkbox در داشبوردها و سؤال‌ها را فراهم کند. این کار می‌تواند به‌خصوص روی پایگاه‌داده‌های بزرگ، هزینه‌بر (resource-intensive) باشد.

اگر گزینهٔ **Choose when syncs and scans happen** را روی **ON** گذاشته باشید، زیر بخش **Scanning for filter values** این گزینه‌ها را می‌بینید:

- **Regularly, on a schedule** این امکان را می‌دهد که [scan queryها](../sync-scan.md#how-database-scans-work) را با بسامدی متناسب با نرخ تغییر داده‌ها اجرا کنید. زمان اجرا بر اساس timezone سروری است که متابیس روی آن اجرا می‌شود. این گزینه برای پایگاه‌داده‌های کوچک، یا جدول‌هایی که مقادیر متمایز آن‌ها زیاد و به‌روز می‌شود، مناسب است.
- **Only when adding a new filter widget** گزینهٔ خوبی است اگر می‌خواهید scan فقط در لحظهٔ نیاز اجرا شود. روشن کردن این گزینه یعنی متابیس فقط زمانی مقادیر فیلد(ها) را اسکن و cache می‌کند که یک فیلتر جدید به یک داشبورد یا سؤال SQL اضافه شود.
- **Never, I'll do this manually if I need to** مناسب پایگاه‌داده‌هایی است که یا بیش از حد بزرگ‌اند، یا به‌ندرت مقادیر جدیدی در آن‌ها اضافه می‌شود. در این حالت می‌توانید از دکمهٔ [Re-scan field values](../sync-scan.md#manually-scanning-column-values) استفاده کنید تا هر زمان نیاز شد اسکن دستی انجام دهید و مقادیر فیلترها را به‌روز کنید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## Sync رکوردهایی که شامل JSON هستند

به دلیل تفاوت‌های پیاده‌سازی بین MySQL و MariaDB، استنتاج schema برای JSON در MariaDB کار نمی‌کند.

## رمزهای عبور با کاراکترهای خاص

اگر رمز عبور شما شامل کاراکترهایی است که UTF-8 نیستند، ممکن است لازم باشد یک متغیر اضافی به connection string اضافه کنید، مثلاً `passwordCharacterEncoding=<your_encoding_here>`. این کار مطمئن می‌شود MariaDB در هنگام احراز هویت (authentication)، کاراکترهای خاص موجود در رمز عبور را به‌درستی تفسیر کند.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک پایگاه‌دادهٔ دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [MySQL](./mysql.md)
- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم سطوح دسترسی به داده](../../permissions/data.md)
