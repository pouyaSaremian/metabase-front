---
title: افزودن و مدیریت پایگاه‌های داده
redirect_from:
  - /docs/latest/administration-guide/01-managing-databases
  - /docs/latest/databases/connections/sql-server
  - /docs/latest/administration-guide/databases/h2
  - /docs/latest/databases/connections/h2
  - /docs/latest/databases/connections
---

<!-- markdownlint-disable-next-line MD025 -->
# افزودن و مدیریت پایگاه‌های داده

متابیس را به منبع‌های داده‌تان متصل کنید.

## افزودن اتصال پایگاه‌داده

برای افزودن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده (gear)** در گوشهٔ بالا-راست کلیک کنید و به مسیر **Admin settings** > **Databases** > **Add a database** بروید.

فیلدهای مربوط به آن پایگاه‌داده را پر کنید و در انتها روی **Save changes** کلیک کنید.

تنظیمات اتصال، بسته به نوع پایگاه‌داده متفاوت است. برای دیدن لیست تنظیمات اتصالِ قابل‌استفاده برای پایگاه‌دادهٔ خود، روی لینک همان پایگاه‌داده در فهرست زیر کلیک کنید.

## اتصال به پایگاه‌های داده پشتیبانی‌شده

پایگاه‌های دادهٔ زیر درایور رسمی دارند که توسط تیم متابیس نگه‌داری می‌شود. مشتریان پلن‌های [Pro و Enterprise](https://www.metabase.com/pricing/) پشتیبانی رسمی دریافت می‌کنند. برای هر پایگاه‌داده، متابیس از قدیمی‌ترین نسخهٔ پشتیبانی‌شده تا آخرین نسخهٔ پایدار را پشتیبانی می‌کند.

- [Athena](./connections/athena.md)
- [BigQuery](./connections/bigquery.md) (Google Cloud Platform)
- [ClickHouse](./connections/clickhouse.md)
- [Databricks](./connections/databricks.md)
- [Druid](./connections/druid.md)
- [MongoDB](./connections/mongodb.md)
- [MariaDB](./connections/mariadb.md)
- [MySQL](./connections/mysql.md)
- [Oracle](./connections/oracle.md)
- [PostgreSQL](./connections/postgresql.md)
- [Presto](./connections/presto.md)
- [Redshift (Amazon Web Services)](./connections/redshift.md)
- [Snowflake](./connections/snowflake.md)
- [SparkSQL](./connections/sparksql.md)
- [SQL Server](./connections/sql-server.md)
- [SQLite](./connections/sqlite.md)
- [Starburst](./connections/starburst.md)
- [Vertica](./connections/vertica.md)

اگر پایگاه‌دادهٔ شما در این فهرست نیست، به [درایورهای جامعه (Community drivers)](../developers-guide/community-drivers.md) مراجعه کنید.

از نسخهٔ 46.6.4 به بعد، متابیس [دیگر اتصال مستقیم H2 را پشتیبانی نمی‌کند](https://www.metabase.com/blog/vulnerability-post-mortem). با این حال، متابیس همچنان به‌همراه یک پایگاه‌دادهٔ H2 ارائه می‌شود تا هم Application database توکار داشته باشد و هم یک سری دادهٔ نمونه در اختیار شما بگذارد.

## اتصال به پایگاه‌های داده روی Cloud

برای جزئیات اتصال به فراهم‌کننده‌های مختلف (مثلاً اتصال به انبار دادهٔ PostgreSQL روی RDS):

- [سرویس Relational Database Service (RDS) آمازون](./connections/aws-rds.md)

## اعطای سطح دسترسی پایگاه‌داده

برای این‌که متابیس بتواند به پایگاه‌دادهٔ شما متصل شود، روی آن کوئری بزند یا در آن بنویسد، باید برای متابیس یک کاربر پایگاه‌داده با سطح دسترسی مناسب تعریف کنید. نگاه کنید به [کاربران، نقش‌ها و سطح دسترسی پایگاه‌داده](./users-roles-privileges.md).

## همگام‌سازی و اسکن پایگاه‌های داده

بخش [Syncing and scanning](./sync-scan.md) را ببینید.

## حذف پایگاه‌های داده

**هشدار: حذف یک پایگاه‌داده برگشت‌ناپذیر است! تمام سؤال‌های ذخیره‌شده و کارت‌های داشبوردی که بر اساس آن پایگاه‌داده ساخته شده‌اند هم حذف می‌شوند!**

به **Admin settings** > **Databases** بروید، پایگاه‌دادهٔ موردنظر را انتخاب کنید و روی **Remove this database** کلیک کنید.

## برگرداندن Sample Database

اگر [Sample Database](https://www.metabase.com/glossary/sample-database) متابیس را حذف کرده‌اید، به **Admin settings** > **Databases** بروید و روی **Bring the Sample Database back** کلیک کنید.

## عیب‌یابی

- [Troubleshooting database connections](../troubleshooting-guide/db-connection.md)
- [Troubleshooting syncs, scans, and fingerprinting](../troubleshooting-guide/sync-fingerprint-scan.md)
- جست‌وجو یا طرح سؤال در [انجمن متابیس](https://discourse.metabase.com/).
- جست‌وجو برای [باگ‌ها یا محدودیت‌های شناخته‌شده](../troubleshooting-guide/known-issues.md).

## مطالعهٔ بیشتر

- [ویرایش متادیتا](../data-modeling/metadata-editing.md).
- [تنظیم سطح دسترسی به داده](../permissions/data.md).
- [متابیس در مقیاس بزرگ](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale).
