---
title: کاربران، نقش‌ها و سطح دسترسی پایگاه‌داده
---

<!-- markdownlint-disable-next-line MD025 -->
# کاربران، نقش‌ها و سطح دسترسی پایگاه‌داده

توصیه می‌کنیم یک کاربر پایگاه‌داده با نام `metabase` بسازید و نقش‌های زیر را به آن بدهید:

-- Role [`analytics` برای دسترسی خواندن](#حداقل-سطح-دسترسی-پایگاه‌داده) به هر Schema یا جدولی که برای تحلیل استفاده می‌شود.
- به‌صورت اختیاری Role [`metabase_actions` برای دسترسی نوشتن](#سطح-دسترسی-لازم-برای-actions-و-ویرایش-دادهٔ-جدول) روی جدول‌هایی که در متابیس به‌عنوان Action استفاده می‌شوند.
- به‌صورت اختیاری Role [`metabase_model_persistence` برای دسترسی نوشتن](#سطح-دسترسی-لازم-برای-model-persistence) روی Schemaای که برای Model persistence متابیس استفاده می‌کنید.

گروه‌بندی سطح دسترسی‌ها در قالب Roleها و بر اساس سناریوهای استفاده، مدیریت دسترسی در آینده را ساده‌تر می‌کند (به‌خصوص در [سناریوهای چندمستاجری (multi-tenant)](#سطح-دسترسی-در-حالت-چندمستاجری-multi-tenant-permissions)). مثلاً می‌توانید:

- از همان Role `analytics` برای سایر ابزارهای BI در [پشتهٔ داده‌تان](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-landscape) که فقط به دسترسی خواندن روی جداول تحلیلی نیاز دارند استفاده کنید.
- دسترسی نوشتن `metabase_model_persistence` را بدون این‌که روی دسترسی نوشتن `metabase_actions` اثری بگذارید لغو کنید.

## حداقل سطح دسترسی پایگاه‌داده

برای این‌که بتوانید جداول‌تان را در متابیس ببینید و روی آن‌ها کوئری بزنید، باید برای کاربر پایگاه‌دادهٔ متابیس موارد زیر را فراهم کنید:

- مجوز `CONNECT` روی پایگاه‌داده.
- مجوز `SELECT` روی هر Schema یا جدولی که می‌خواهید در متابیس استفاده کنید.

برای سازمان‌دهی این سطح دسترسی‌ها (و ساده‌تر شدن نگه‌داری در آینده):

- یک Role پایگاه‌داده با نام `analytics` بسازید.
- یک کاربر پایگاه‌داده با نام `metabase` بسازید.
- کاربر `metabase` را به Role `analytics` اضافه کنید.
- سطح دسترسی‌ها را به Role `analytics` بدهید.

مثلاً اگر از PostgreSQL استفاده می‌کنید، به‌عنوان ادمین وارد می‌شوید و این دستورات SQL را اجرا می‌کنید:

```sql
-- ساخت Role با نام "analytics".
CREATE ROLE analytics WITH LOGIN;

-- دادن مجوز CONNECT به Role.
GRANT CONNECT ON DATABASE "your_database" TO analytics;

-- ساخت کاربر پایگاه‌داده با نام "metabase".
CREATE USER metabase WITH PASSWORD "your_password";

-- نسبت‌دادن Role به کاربر metabase.
GRANT analytics TO metabase;

-- افزودن سطح دسترسی کوئری (گزینه‌های ۱ تا ۴):

-- گزینه ۱: اجازه دهید کاربران دارای Role analytics به همهٔ داده‌ها دسترسی خواندن داشته باشند
-- (در PostgreSQL 14 یا بالاتر. نگاه کنید به Predefined Roles).
-- GRANT pg_read_all_data TO analytics;

-- گزینه ۲: اجازه دهید کاربران دارای Role analytics به هر چیزی در یک DATABASE مشخص دسترسی داشته باشند.
-- GRANT USAGE ON DATABASE "your_schema" TO analytics;
-- GRANT SELECT ON DATABASE "your_schema"  TO analytics;

-- گزینه ۳: اجازه دهید کاربران دارای Role analytics به هر چیزی در یک SCHEMA مشخص دسترسی داشته باشند.
-- GRANT USAGE ON SCHEMA "your_schema" TO analytics;
-- GRANT SELECT ON ALL TABLES IN SCHEMA "your_schema" TO analytics;

-- گزینه ۴: اجازه دهید کاربران دارای Role analytics فقط به یک TABLE مشخص دسترسی داشته باشند.
-- GRANT USAGE ON SCHEMA "your_schema" TO analytics;
-- GRANT SELECT ON "your_table" IN SCHEMA "your_schema" TO analytics;
```

بسته به این‌که چطور از متابیس استفاده می‌کنید، می‌توانید به‌صورت اضافه، این مجوزها را هم بدهید:

- مجوز `TEMPORARY` برای ساخت جدول‌های موقت (temp tables).
- مجوز `EXECUTE` برای اجرای Stored procedureها یا توابع تعریف‌شدهٔ کاربر.

به‌خاطر داشته باشید که وقتی سطح دسترسی‌ای را به یک Role می‌دهید، تمام کاربرانی که آن Role را دارند همان سطح دسترسی را می‌گیرند.

## اعطای تمام سطح دسترسی پایگاه‌داده

اگر فعلاً نمی‌خواهید ساختار سطح دسترسی پایگاه‌داده‌تان را ریز تعریف کنید:

- یک کاربر پایگاه‌داده با نام `metabase` بسازید.
- همهٔ سطح دسترسی‌ها را روی پایگاه‌داده به `metabase` بدهید.

```sql
-- ساخت کاربر پایگاه‌داده با نام "metabase".
CREATE USER metabase WITH PASSWORD "your_password";

-- دادن سطح دسترسی خواندن و نوشتن روی همه‌چیز در پایگاه‌داده.
GRANT ALL PRIVILEGES ON "database" TO metabase;
```

این گزینه برای زمانی خوب است که دارید به یک پایگاه‌دادهٔ محلی برای توسعه یا تست متصل می‌شوید.

## سطح دسترسی لازم برای Actions و ویرایش دادهٔ جدول

هم [Actions](../actions/introduction.md) و هم قابلیت [Editable table data](../data-modeling/editable-tables.md) این امکان را می‌دهند که متابیس روی برخی جدول‌های شما بنویسد.

علاوه‌بر [حداقل سطح دسترسی پایگاه‌داده](#حداقل-سطح-دسترسی-پایگاه‌داده)، باید برای جدول‌هایی که می‌خواهید روی آن‌ها بنویسید، مجوز نوشتن هم بدهید:

- یک Role جدید با نام `metabase_writer` بسازید.
- مجوزهای `INSERT`، `UPDATE` و `DELETE` را روی جدول‌های مربوطه به این Role بدهید.
- Role `metabase_writer` را به کاربر `metabase` بدهید.

```sql
-- ساخت Role برای تجمیع سطح دسترسی‌های نوشتن متابیس روی پایگاه‌داده.
CREATE ROLE metabase_writer WITH LOGIN;

-- دادن مجوز نوشتن روی TABLE
GRANT INSERT, UPDATE, DELETE ON "your_table" IN SCHEMA "your_schema" TO metabase_writer;

-- دادن Role به کاربر metabase.
GRANT metabase_writer TO metabase;
```

## سطح دسترسی لازم برای Model persistence

[Model persistence](../data-modeling/model-persistence.md) این امکان را می‌دهد که متابیس نتایج کوئری‌ها را در یک Schema مشخص در پایگاه‌داده ذخیره کند. کاربر پایگاه‌دادهٔ متابیس باید مجوز `CREATE` برای ساخت Schema اختصاصی Model persistence و هم‌چنین مجوز نوشتن (`INSERT`، `UPDATE`، `DELETE`) روی آن Schema داشته باشد.

علاوه‌بر [حداقل سطح دسترسی پایگاه‌داده](#حداقل-سطح-دسترسی-پایگاه‌داده):

- یک Role جدید با نام `metabase_model_persistence` بسازید.
- مجوز `CREATE` روی پایگاه‌داده را به این Role بدهید.
- مجوزهای `INSERT`، `UPDATE` و `DELETE` را روی Schema مربوط به Model persistence به این Role بدهید.
- Role `metabase_model_persistence` را به کاربر `metabase` بدهید.

```sql
-- ساخت Role برای تجمیع سطح دسترسی‌های مربوط به Model persistence متابیس.
CREATE ROLE metabase_model_persistence WITH LOGIN;

-- اگر نمی‌خواهید مجوز CREATE روی کل پایگاه‌داده بدهید،
-- Schema را قبل از فعال‌کردن Model persistence به‌صورت دستی بسازید.
GRANT CREATE ON "database" TO metabase_model_persistence;

-- دادن مجوز نوشتن روی SCHEMA مربوط به Model persistence.
GRANT USAGE ON "your_schema" TO metabase_model_persistence;
GRANT INSERT, UPDATE, DELETE ON "your_model's_table" IN SCHEMA "your_schema" TO metabase_model_persistence;

-- دادن Role به کاربر metabase.
GRANT metabase_model_persistence TO metabase;
```

## سطح دسترسی لازم برای Uploadها

می‌توانید فایل‌های CSV را روی پایگاه‌داده‌های پشتیبانی‌شده [Upload](../databases/uploads.md) کنید. کاربر پایگاه‌دادهٔ متابیس باید روی Schemaای که می‌خواهید Uploadها را در آن ذخیره کنید، سطح دسترسی نوشتن (`INSERT`، `UPDATE`، `DELETE`) داشته باشد.

ابتدا باید یک Schema برای ذخیرهٔ Uploadها بسازید (یا از Schema موجود استفاده کنید) و به متابیس بگویید که می‌خواهید [از آن Schema برای ذخیرهٔ Uploadها استفاده کنید](./uploads.md#select-the-database-and-schema-that-you-want-to-store-the-data-in).

علاوه‌بر [حداقل سطح دسترسی پایگاه‌داده](#حداقل-سطح-دسترسی-پایگاه‌داده):

- یک Role جدید با نام `metabase_uploads` بسازید.
- مجوزهای `INSERT`، `UPDATE` و `DELETE` را به Schemaای که می‌خواهید Uploadها را در آن ذخیره کنید بدهید.
- Role `metabase_uploads` را به کاربر `metabase` بدهید.

```sql
-- ساخت Role برای تجمیع سطح دسترسی‌های مربوط به Uploadها.
CREATE ROLE metabase_uploads WITH LOGIN;

-- دادن مجوز نوشتن روی SCHEMA مربوط به Uploadها.
GRANT USAGE ON "your_schema" TO metabase_uploads;
GRANT INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA "your_schema" TO metabase_uploads;

-- دادن Role به کاربر metabase.
GRANT metabase_uploads TO metabase;
```

## سطح دسترسی در حالت چندمستاجری (Multi-tenant permissions)

اگر در حال راه‌اندازی سطح دسترسی چندمستاجری برای مشتریانی هستید که به SQL نیاز دارند، می‌توانید [برای هر مشتری یک اتصال پایگاه‌داده جدا تعریف کنید](../permissions/embedding.md) در این صورت، هر مشتری با کاربر پایگاه‌دادهٔ مخصوص خودش به پایگاه‌داده متصل می‌شود.

فرض کنید دو مشتری با نام‌های Tangerine و Lemon دارید:

- برای هرکدام از مشتری‌ها کاربران پایگاه‌دادهٔ جدید `metabase_tangerine` و `metabase_lemon` بسازید.
- یک Role با نام `customer_facing_analytics` بسازید که مجوز `CONNECT` داشته باشد.
- Roleهایی بسازید که سطح دسترسی‌های مخصوص هر مشتری را تجمیع کنند. برای مثال:
  - Role `tangerine_queries` برای تجمیع سطح دسترسی خواندن افرادی که می‌خواهند روی Schema مربوط به Tangerine کوئری بزنند یا Stored procedure بسازند.
  - Role `lemon_queries` برای تجمیع سطح دسترسی خواندن روی جداول Schema مربوط به Lemon.
  - Role `lemon_actions` برای تجمیع سطح دسترسی نوشتنی که برای ساخت [Actions](#سطح-دسترسی-لازم-برای-actions-و-ویرایش-داده-جدول) روی جدول Lemonade در Schema مربوط به Lemon نیاز است.
- هر کاربر را به Roleهای مربوط به خودش اضافه کنید.

```sql
-- برای هر مشتری یک کاربر پایگاه‌داده بسازید.
CREATE USER metabase_tangerine WITH PASSWORD "orange";
CREATE USER metabase_lemon WITH PASSWORD "yellow";

-- ساخت Role مشترک برای همهٔ مشتری‌ها.
CREATE ROLE customer_facing_analytics;
GRANT CONNECT ON DATABASE "citrus" TO customer_facing_analytics;
GRANT customer_facing_analytics TO metabase_tangerine, metabase_lemon;

-- ساخت Role برای تجمیع دسترسی خواندن تحلیلی مشتری Tangerine.
CREATE ROLE tangerine_queries;
GRANT USAGE ON SCHEMA "tangerine" TO tangerine_queries;
GRANT SELECT, EXECUTE ON ALL TABLES IN SCHEMA "tangerine" TO tangerine_queries;
GRANT tangerine_queries TO metabase_tangerine;

-- ساخت Role برای تجمیع دسترسی خواندن تحلیلی مشتری Lemon.
CREATE ROLE lemon_queries;
GRANT USAGE ON SCHEMA "lemon" TO lemon_queries;
GRANT SELECT ON ALL TABLES IN SCHEMA "lemon" TO lemon_queries;
GRANT lemon_queries TO metabase_lemon;

-- ساخت Role برای تجمیع سطح دسترسی Actions برای مشتری Lemon.
CREATE ROLE lemon_actions;
GRANT INSERT, UPDATE, DELETE ON TABLE "lemonade" IN SCHEMA "lemon" TO lemon_actions;
GRANT lemon_actions TO metabase_lemon;
```

توصیه می‌کنیم سطح دسترسی‌ها را بر اساس سناریو (Use case) هر مشتری در قالب Roleها تجمیع کنید. این کار کمک می‌کند سطح دسترسی‌های مشترک را بین مشتریان مختلف دوباره استفاده کنید، و در عین حال بتوانید سطح دسترسی‌های جزئی را برای هر مشتری به‌صورت جداگانه اعطا یا لغو کنید. برای مثال:

- اگر مشتری Tangerine بخواهد از ابزار تحلیلی دیگری برای کوئری‌زدن روی Schema خودش استفاده کند، می‌توانید هنگام راه‌اندازی آن ابزار از Role `tangerine_queries` استفاده کنید.
- اگر مشتری Lemon تصمیم بگیرد دیگر از Actions متابیس استفاده نکند (اما همچنان بخواهد سؤال بپرسد)، کافی است Role `lemon_actions` را لغو (revoke) یا حذف (drop) کنید.

## مطالعهٔ بیشتر

- [استراتژی‌های سطح دسترسی](https://www.metabase.com/learn/metabase-basics/administration/permissions/strategy)
- [مقدمه‌ای بر سطح دسترسی](../permissions/introduction.md)
- [نمای کلی کاربران و گروه‌ها](../people-and-groups/start.md)
