---
title: راه‌اندازی بارگذاری داده (Uploads)
---

# راه‌اندازی بارگذاری داده (Uploads)

این صفحه توضیح می‌دهد ادمین‌ها چگونه می‌توانند قابلیت بارگذاری داده را فعال کنند تا کاربران بتوانند فایل‌های CSV را در متابیس آپلود کنند. برای یادگیری نحوهٔ بارگذاری داده پس از راه‌اندازی این قابلیت، بخش [بارگذاری داده](../exploration-and-organization/uploads.md) را ببینید.

![Upload CSV data to a collection in Metabase](./images/upload-to-collection.png)

بارگذاری CSV بیشتر برای تحلیل‌های مقطعی (Ad hoc) روی داده‌های صفحه‌گسترده مناسب است. اگر حجم دادهٔ زیادی دارید یا نیاز دارید داده را به‌طور منظم به‌روزرسانی/افزایش دهید، توصیه می‌کنیم فرآیندی برای بارگذاری مستقیم داده در یک پایگاه‌داده تدارک ببینید و سپس متابیس را به آن پایگاه‌داده متصل کنید.

## مدیریت تنظیمات Upload

برای مدیریت تنظیمات Upload، ادمین‌ها می‌توانند با فشردن cmd/ctrl + K عبارت «Settings - Uploads» را جست‌وجو کنند، یا روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنند و از مسیر **Admin settings > Settings > Uploads** وارد تنظیمات شوند.

## پایگاه‌داده‌های پشتیبانی‌کنندهٔ Upload

- [PostgreSQL](../databases/connections/postgresql.md)
- [MySQL](../databases/connections/mysql.md)
- [Redshift](../databases/connections/redshift.md)
- [ClickHouse](../databases/connections/clickhouse.md) (فقط روی ClickHouse Cloud پشتیبانی می‌شود)

## راه‌اندازی Uploadها

برای پشتیبانی از Upload فایل‌های CSV، ادمین‌ها باید چند کار انجام دهند:

- [اتصال به پایگاه‌داده با کاربری که مجوز نوشتن دارد](#connect-to-a-database-using-a-database-user-account-with-write-access) تا متابیس بتواند داده‌های آپلودشده را در جایی ذخیره کند.
- [انتخاب پایگاه‌داده و Schema مقصد برای ذخیرهٔ داده‌های آپلودشده](#select-the-database-and-schema-that-you-want-to-store-the-data-in).
- [(اختیاری) تعریف یک پیشوند برای نام جدول‌های Upload](#specify-a-prefix-for-metabase-to-prepend-to-the-uploaded-tables).
- [افزودن کاربران به گروهی که به Schema مقصد، دسترسی مشاهدهٔ داده و ساخت Query دارد](#add-people-to-a-group-with-data-access-to-the-upload-schema).

## اتصال به پایگاه‌داده با کاربری دارای مجوز نوشتن

برای این‌که کاربران بتوانند داده را در متابیس آپلود کنند، ادمین باید متابیس را با استفاده از یک حساب کاربری پایگاه‌داده که مجوز نوشتن روی آن پایگاه‌داده دارد، به دیتابیسی که Upload را پشتیبانی می‌کند متصل کند.

همچنین می‌توانید داده را در Sample Database همراه متابیس (یک پایگاه‌دادهٔ H2) آپلود کنید، اما برای داده‌ای که می‌خواهید در بلندمدت نگه دارید این کار توصیه نمی‌شود.

برای اطلاعات بیشتر:

- [افزودن و مدیریت پایگاه‌داده‌ها](./connecting.md)
- [کاربران، نقش‌ها و مجوزهای پایگاه‌داده](./users-roles-privileges.md#privileges-to-enable-uploads)

## انتخاب پایگاه‌داده و Schema مقصد برای ذخیرهٔ داده‌ها

اگر متابیس با کاربری که مجوز نوشتن دارد به پایگاه‌داده متصل شده باشد، ادمین‌ها می‌توانند با مراحل زیر Uploadها را فعال کنند:

- روی آیکون **چرخ‌دنده** در بالا سمت راست صفحهٔ اصلی کلیک کنید و به **Admin settings > Settings > Uploads** بروید.
- پایگاه‌داده‌ای را که متابیس باید برای ذخیرهٔ داده‌های آپلودشده استفاده کند انتخاب کنید.

وقتی کاربران یک CSV را در یک کالکشن آپلود می‌کنند، متابیس:

- یک جدول برای ذخیرهٔ داده‌ها در پایگاه‌داده و Schema انتخاب‌شده برای Upload می‌سازد.
- یک [مدل](../data-modeling/models.md) می‌سازد که روی آن جدول آپلودشده قرار می‌گیرد و این مدل را در همان کالکشنی ذخیره می‌کند که کاربر CSV را در آن Upload کرده است.

## تعیین پیشوند برای نام جدول‌های Upload

ادمین‌ها می‌توانند به‌صورت اختیاری رشته‌ای را به‌عنوان Prefix مشخص کنند تا متابیس هنگام ساخت جدول‌های مرتبط با Upload، آن را به ابتدای نام جدول اضافه کند.

## افزودن کاربران به گروهی با دسترسی مناسب به Schema Upload

برای این‌که کاربری بتواند CSV آپلود کند، باید عضو گروهی باشد که روی Schema مقصد Upload، تنظیمات زیر را داشته باشد:

- **View data** روی «Can view»
- **Create queries** روی دست‌کم Query builder access (یا بالاتر)

برای جزئیات بیشتر، به [گروه‌ها](../people-and-groups/managing.md) و [مجوزهای داده](../permissions/data.md) مراجعه کنید.

## نکته‌ای دربارهٔ Upload داده به پایگاه‌دادهٔ MySQL

برای سریع‌تر شدن بارگذاری CSV روی پایگاه‌دادهٔ MySQL، توصیه می‌کنیم مقدار `local_infile` را روی `ON` قرار دهید. این مقدار باید در خود MySQL تنظیم شود، نه در متابیس. شکل پارامتر در خط فرمان MySQL چیزی شبیه `--local-infile=ON` است.

اگر `local_infile` غیرفعال باشد (روی `OFF` تنظیم شده باشد)، متابیس به‌طور خودکار به یک روش بسیار کندتر برای Upload CSV برمی‌گردد.

برای اطلاعات بیشتر:

- [Non-LOCAL Versus LOCAL Operation](https://dev.mysql.com/doc/refman/8.0/en/load-data.html#load-data-local)
- [مستندات متغیر `local_infile`](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_local_infile)
- [ملاحظات امنیتی برای LOAD LOCAL DATA](https://dev.mysql.com/doc/refman/8.0/en/load-data-local-security.html)
