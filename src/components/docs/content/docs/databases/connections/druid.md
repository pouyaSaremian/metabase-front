---
title: Druid
---

# Druid

> بهتر است از اتصال Druid JDBC استفاده کنید.

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## ویرایش جزئیات اتصال

فیلدهای مربوط به این پایگاه‌داده را پر کنید و در انتها روی **Save changes** کلیک کنید. می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط متابیس.

### Host

آدرس IP پایگاه‌داده، یا نام دامنهٔ آن (مثلاً `esc.mydatabase.com`).

### Broker node port

پورت پایگاه‌داده (مثلاً `8082`).

### استفاده از SSH tunnel

[راهنمای SSH tunneling](../ssh-tunnel.md) را ببینید.

### اجازهٔ unfold کردن ستون‌های JSON

> فقط برای اتصال Druid JDBC در دسترس است.

این گزینه امکان unfold کردن ستون‌های JSON را به فیلدهای جزئی آن‌ها می‌دهد.

[JSON unfolding](../../data-modeling/json-unfolding.md) را ببینید.

### Authentication

> فقط برای اتصال Druid JDBC در دسترس است.

برای فعال کردن احراز هویت basic با نام کاربری و رمز عبور، این گزینه را روشن کنید.

### اجرای دوبارهٔ پرس‌وجو برای اکتشاف ساده

اگر می‌خواهید کاربران قبل از اعمال هر [Summarize](../../questions/query-builder/summarizing-and-grouping.md) یا فیلتر، روی **Run** (دکمهٔ play) کلیک کنند، این گزینه را روی **OFF** قرار دهید.

به‌طور پیش‌فرض، متابیس به محض انتخاب یک گزینهٔ گروه‌بندی از منوی **Summarize** یا یک شرط فیلتر از [منوی drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، پرس‌وجو را اجرا می‌کند. اگر پایگاه‌دادهٔ شما کند است، بهتر است اجرای خودکار را غیرفعال کنید تا با هر کلیک، کوئری جدید اجرا نشود.

### انتخاب زمان sync و scan

[مستندات sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.

### fingerprint دوره‌ای جدول‌ها

> fingerprint دوره‌ای بار روی پایگاه‌دادهٔ شما را افزایش می‌دهد.

این گزینه را روی **ON** قرار دهید تا هر بار متابیس یک [sync](../sync-scan.md#how-database-syncs-work) اجرا می‌کند، یک نمونه از مقادیر را اسکن کند.

پرس‌وجوی fingerprinting اولین ۱۰٬۰۰۰ ردیف هر ستون را بررسی می‌کند و بر اساس آن، تعداد مقادیر یکتا در هر ستون، و حداقل و حداکثر مقادیر ستون‌های عددی و زمانی و غیره را تخمین می‌زند. اگر این گزینه را روی **OFF** بگذارید، متابیس فقط یک‌بار و در زمان راه‌اندازی، برای ستون‌ها fingerprint می‌سازد.

## قابلیت‌های مدل (Model features)

در حال حاضر، هیچ قابلیت خاصی برای مدل‌ها روی Druid در دسترس نیست.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک پایگاه‌دادهٔ دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger Zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم سطوح دسترسی به داده](../../permissions/data.md)
