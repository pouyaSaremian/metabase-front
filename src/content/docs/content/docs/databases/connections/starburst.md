---
title: Starburst
description: Learn how to connect Metabase to your Starburst or Trino database, including connection settings, SSL configuration, and database sync options.
---

# Starburst

> این درایور برای اتصال به پایگاه‌داده‌های Trino هم کار می‌کند.

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

## Connection و Sync

بعد از اتصال به پایگاه‌داده، بخشی با عنوان «Connection and sync» می‌بینید که وضعیت فعلی اتصال و گزینه‌های مدیریت اتصال پایگاه‌داده را نمایش می‌دهد.

در این بخش می‌توانید [schema پایگاه‌داده را sync کنید و مقادیر فیلدها را دوباره اسکن کنید](../sync-scan.md) و جزئیات اتصال را ویرایش کنید.

## ویرایش جزئیات اتصال

برای دیدن یا تغییر تنظیمات اتصال پایگاه‌داده، روی دکمهٔ **Edit connection details** کلیک کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده (مثلاً `98.137.149.56`) یا نام دامنهٔ آن (مثلاً `name.database.com`).

### Port

پورت پایگاه‌داده (مثلاً `8080`).

### Catalog

catalogهای Starburst شامل schemaها هستند و از طریق یک connector به منبع‌های داده اشاره می‌کنند.

### Schema (optional)

فقط جدول‌هایی را که از یک schema مشخص می‌آیند به متابیس اضافه می‌کند.

### Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

### Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

### Use a secure connection (SSL)

[SSL certificates](../ssl-certificates.md) را ببینید.

### Role (optional)

می‌توانید یک role مشخص کنید تا جایگزین role پیش‌فرض کاربر پایگاه‌داده شود.

### Optimize prepared statements

نیازمند Starburst Galaxy، Starburst Enterprise (نسخهٔ 420-e یا بالاتر) یا Trino (نسخهٔ 418 یا بالاتر) است.

### Additional JDBC connection string options

می‌توانید گزینه‌های اضافی را به JDBC connection string اضافه کنید. گزینه‌ها را با `&` از هم جدا کنید، مثلاً:

```
connection_timeout=1000&socket_timeout=300000
```

### Re-run queries for simple explorations

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### Choose when syncs and scans happen

[sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### Periodically refingerprint tables

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## Model features

در حال حاضر هیچ قابلیت مدل خاصی برای Starburst در دسترس نیست.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده (data catalog) بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک data catalog دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.
