---
title: SQLite
---

# SQLite

> SQLite روی [Metabase Cloud](https://www.metabase.com/cloud/) در دسترس نیست.

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

فیلدهای مربوط به این پایگاه‌داده را پر کنید و در انتها روی **Save changes** کلیک کنید.

## Settings

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Filename

مسیر پایگاه‌دادهٔ SQLite (مسیر مطلق).

### Re-run queries for simple explorations

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### Choose when Metabase syncs and scans

این گزینه را روی **ON** قرار دهید تا بتوانید پرس‌وجوهایی را که متابیس برای به‌روز ماندن با پایگاه‌داده اجرا می‌کند مدیریت کنید. برای اطلاعات بیشتر، [Syncing and scanning databases](../sync-scan.md) را ببینید.

#### Database syncing

اگر گزینهٔ **Choose when syncs and scans happen** را روی **ON** گذاشته باشید، می‌توانید این موارد را تنظیم کنید:

- بسامد (frequency) [sync](../sync-scan.md#how-database-syncs-work): ساعتی (پیش‌فرض) یا روزانه.
- زمان اجرای sync، بر اساس timezone سروری که برنامهٔ متابیس روی آن اجرا می‌شود.

### Scanning for filter values

متابیس می‌تواند مقادیر موجود در هر فیلد در این پایگاه‌داده را اسکن کند تا امکان استفاده از فیلترهای checkbox در داشبوردها و سؤال‌ها را فراهم کند. این کار می‌تواند به‌خصوص روی پایگاه‌داده‌های بزرگ، هزینه‌بر (resource-intensive) باشد.

اگر گزینهٔ **Choose when syncs and scans happen** را روی **ON** گذاشته باشید، زیر بخش **Scanning for filter values** این گزینه‌ها را می‌بینید:

- **Regularly, on a schedule** این امکان را می‌دهد که [scan queryها](../sync-scan.md#how-database-scans-work) را با بسامدی متناسب با نرخ تغییر داده‌ها اجرا کنید. زمان اجرا بر اساس timezone سروری است که متابیس روی آن اجرا می‌شود. این گزینه برای پایگاه‌داده‌های کوچک، یا جدول‌هایی که مقادیر متمایز آن‌ها زیاد و به‌روز می‌شود، مناسب است.
- **Only when adding a new filter widget** گزینهٔ خوبی است اگر می‌خواهید scan فقط در لحظهٔ نیاز اجرا شود. روشن کردن این گزینه یعنی متابیس فقط زمانی مقادیر فیلد(ها) را اسکن و cache می‌کند که یک فیلتر جدید به یک داشبورد یا سؤال SQL اضافه شود.
- **Never, I'll do this manually if I need to** مناسب پایگاه‌داده‌هایی است که یا بیش از حد بزرگ‌اند، یا به‌ندرت مقادیر جدیدی در آن‌ها اضافه می‌شود. در این حالت می‌توانید از دکمهٔ [Re-scan field values](../sync-scan.md#manually-scanning-column-values) استفاده کنید تا هر زمان نیاز شد اسکن دستی انجام دهید و مقادیر فیلترها را به‌روز کنید.

### Periodically refingerprint tables

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک پایگاه‌دادهٔ دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## Further reading

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم مجوزهای دسترسی به داده](../../permissions/data.md)
