---
title: Amazon Redshift
description: Connect Metabase to Amazon Redshift data warehouses to run queries and create dashboards.
redirect_from:
  - /docs/latest/administration-guide/databases/redshift
---

# Amazon Redshift

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## اتصال و همگام‌سازی (Connection and sync)

بعد از اتصال به پایگاه‌داده، بخشی با عنوان «Connection and sync» می‌بینید که وضعیت فعلی اتصال و گزینه‌های مدیریت اتصال پایگاه‌داده را نمایش می‌دهد.

در این بخش می‌توانید [schema پایگاه‌داده را sync کنید و مقادیر فیلدها را دوباره اسکن کنید](../sync-scan.md) و جزئیات اتصال را ویرایش کنید.

## ویرایش جزئیات اتصال

برای دیدن یا تغییر تنظیمات اتصال پایگاه‌داده، روی دکمهٔ **Edit connection details** کلیک کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده یا نام دامنهٔ آن (مثلاً `esc.mydatabase.com`).

### Port

پورت پایگاه‌داده؛ مثلاً `3306`.

### Database name

نام پایگاه‌داده‌ای که می‌خواهید به آن متصل شوید.

### Schemas

می‌توانید مشخص کنید کدام schemaها را می‌خواهید sync و scan کنید. گزینه‌ها:

- All  
- Only these...  
- All except...  

برای گزینه‌های **Only these** و **All except** می‌توانید یک فهرست جداشده با کاما وارد کنید تا به متابیس بگویید کدام schemaها را شامل (یا مستثنا) کند. مثلاً:

```
foo,bar,baz
```

می‌توانید از wildcard `*` برای match کردن چند schema استفاده کنید.

فرض کنید سه schema دارید: `foo`، `bar` و `baz`.

- اگر **Only these...** را انتخاب کنید و رشتهٔ `b*` را وارد کنید، `bar` و `baz` sync می‌شوند.
- اگر **All except...** را انتخاب کنید و رشتهٔ `b*` را وارد کنید، فقط `foo` sync می‌شود.

توجه کنید که فقط wildcard `*` پشتیبانی می‌شود؛ نمی‌توانید از regex یا کاراکترهای ویژهٔ دیگر استفاده کنید.

### Username

> برای این‌که sync و scan کار کنند، مطمئن شوید این کاربر پایگاه‌داده به `information_schema` دسترسی دارد.

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

### Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

### Use an SSH tunnel

[راهنمای SSH tunneling](../ssh-tunnel.md) را ببینید.

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

## Model features

می‌توانید انتخاب کنید امکانات مرتبط با مدل‌های متابیس را فعال کنید یا نه. این امکانات معمولاً نیاز به اتصال با دسترسی نوشتن دارند.

### Model persistence

می‌توانید قابلیت model persistence را فعال کنید تا متابیس جداولی با داده‌های مدل بسازد و آن‌ها را طبق یک زمان‌بندی تازه‌سازی کند. برای این کار، اتصال باید روی یک schema مشخص مجوز نوشتن داشته باشد.

[مستندات Model persistence](../../data-modeling/model-persistence.md) را ببینید.

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
