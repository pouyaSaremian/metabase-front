---
title: Oracle
redirect_from:
  - /docs/latest/administration-guide/databases/oracle
---

# Oracle

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## نسخه‌های پشتیبانی‌شده

متابیس از قدیمی‌ترین نسخهٔ تحت پشتیبانی تا آخرین نسخهٔ پایدار پشتیبانی می‌کند. [Oracle's Release Schedule of Current Database Releases](https://support.oracle.com/knowledge/Oracle%20Database%20Products/742060_1.html) را ببینید.

## ویرایش جزئیات اتصال

می‌توانید هر زمان این تنظیمات را ویرایش کنید؛ فقط یادتان باشد تغییرات را ذخیره کنید.

### Connection string

می‌توانید یک connection string اینجا paste کنید تا فیلدهای باقی‌مانده به‌طور خودکار پر شوند.

### Display name

نام نمایشی پایگاه‌داده در رابط کاربری متابیس.

### Host

آدرس IP پایگاه‌داده یا نام دامنهٔ آن (مثلاً `esc.mydatabase.com`).

### Port

پورت پایگاه‌داده؛ مثلاً `1521`.

### Oracle system ID (SID)

معمولاً چیزی شبیه `ORCL` یا `XE`. اگر از service name استفاده می‌کنید، این مقدار اختیاری است.

### Oracle service name

یک alias اختیاری TNS.

### Username

نام کاربری پایگاه‌داده برای اکانتی که می‌خواهید با آن به دیتابیس وصل شوید. می‌توانید چند اتصال مختلف به همان پایگاه‌داده بسازید که هرکدام از یک کاربر متفاوت با مجموعهٔ متفاوتی از [سطوح دسترسی (privileges)](../users-roles-privileges.md) استفاده می‌کنند.

### Password

رمز عبوری که برای نام کاربری اتصال به پایگاه‌داده استفاده می‌کنید.

### استفاده از اتصال امن (SSL)

می‌توانید هم احراز هویت سمت کلاینت و هم سمت سرور (mutual authentication) را فعال کنید.

### اتصال به Oracle Cloud Autonomous Database

اگر پایگاه‌دادهٔ خود را طوری پیکربندی کرده‌اید که به mutual TLS (mTLS) نیاز داشته باشد، به یک [wallet](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/connect-download-wallet.html#GUID-DED75E69-C303-409D-9128-5E10ADD47A35) احتیاج دارید. برای دانلود wallet:

1. به Oracle Autonomous Database خود بروید.
2. وارد صفحهٔ جزئیات پایگاه‌داده شوید.
3. روی **DB connection** کلیک کنید.
4. wallet را دانلود کنید.
5. برای keyfile یک رمز عبور بسازید.
6. فایل `keystore.jks` را به جایی که تنظیمات متابیس را نگه می‌دارید کپی کنید.
7. با استفاده از `JAVA_OPTS` محل و رمز keystore را به متابیس معرفی کنید (برای اطلاعات بیشتر دربارهٔ keystoreها بخش بعدی را ببینید).
8. در متابیس و در صفحهٔ اتصال داده، مقادیر `host`، `port` و `service_name` را وارد کنید. این مقادیر را می‌توانید در فایل `tsnnames.ora` پیدا کنید.

#### احراز هویت کلاینت با keystore

برای این‌که سرور (سرور Oracle) بتواند هویت کلاینت (متابیس) را احراز کند، باید یک فایل keystore پیکربندی کنید که کلید خصوصی کلاینت داخل آن باشد.

شما کلید خصوصی کلاینت را در keystore وارد می‌کنید (به‌جای این‌که یک روت CA را در truststore ایمپورت کنید). گزینه‌های JVM زیر را برای متابیس تنظیم کنید:

```text
-Djavax.net.ssl.keyStore=/path/to/keystore.jks
-Djavax.net.ssl.keyStoreType=JKS \
-Djavax.net.ssl.keyStorePassword=<keyStorePassword>
```

می‌توانید این گزینه‌ها را با متغیر محیطی `JAVA_OPTS` تنظیم کنید، مثلاً:

```sh
JAVA_OPTS: "-Djavax.net.ssl.keyStore=/scripts/keystore.jks -Djavax.net.ssl.keyStoreType=JKS -Djavax.net.ssl.keyStorePassword=<keyStorePassword>"
```

بعد از انجام این تنظیمات، سرور Oracle هنگام اتصال متابیس از طریق SSL، هویت متابیس را با استفاده از کلید خصوصی احراز می‌کند.

#### احراز هویت سرور با truststore

برای این‌که کلاینت (متابیس) بتواند هویت سرور (سرور Oracle) را احراز کند، ممکن است لازم باشد یک فایل truststore پیکربندی کنید که روت‌سرتیفیکیت سرور داخل آن باشد تا JVMای که متابیس روی آن اجرا می‌شود به زنجیرهٔ گواهی آن اعتماد کند. برای مدیریت فایل‌های key و truststore، ایمپورت گواهی‌ها و غیره، به [مستندات Oracle دربارهٔ `keytool`](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html) مراجعه کنید.

برای اطلاعات بیشتر دربارهٔ راه‌اندازی truststore برای نمونه‌های Oracle روی AWS RDS، [راهنمای آمازون](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.Options.SSL.html#Appendix.Oracle.Options.SSL.JDBC) را ببینید.

اگر لازم است با پایگاه‌داده‌های دیگری هم از طریق SSL متصل شوید، به‌جای ساختن یک truststore جدید، احتمالاً بهتر است گواهی CA مربوط به RDS را به truststore موجود خود (که معمولاً نامش `cacerts` است) اضافه کنید.

## نسخه‌های پشتیبانی‌شدهٔ پایگاه‌دادهٔ Oracle و درایور Oracle

- **نسخهٔ درایور**: حداقل نسخهٔ درایور Oracle باید 19c باشد، فارغ از این‌که از چه نسخه‌ای از Java یا Oracle Database استفاده می‌کنید.
- **نسخهٔ پایگاه‌داده**: حداقل نسخهٔ پایگاه‌داده باید 19c باشد، چون Oracle [نسخه‌های قبل از 19 را دیگر پشتیبانی نمی‌کند](https://endoflife.date/oracle-database).

## دانلود JAR درایور Oracle JDBC

می‌توانید درایور JDBC را از [صفحهٔ دانلود درایور JDBC اوراکل](https://www.oracle.com/technetwork/database/application-development/jdbc/downloads/index.html) دریافت کنید.

پیشنهاد می‌کنیم از فایل `ojdbc8.jar` استفاده کنید.

## افزودن JAR درایور Oracle JDBC به پوشهٔ plugins متابیس

در دایرکتوری متابیس (دایرکتوری‌ای که فایل `metabase.jar` را در آن نگه می‌دارید و اجرا می‌کنید)، یک پوشه با نام `plugins` بسازید (اگر از قبل وجود ندارد).

فایل JARی که دانلود کرده‌اید (`ojdbc8.jar`) را به پوشهٔ `plugins` منتقل کنید و متابیس را ری‌استارت کنید. متابیس هنگام راه‌اندازی بعدی، به‌صورت خودکار درایور Oracle را شناسایی و فعال می‌کند.

### زمانی که متابیس را از روی JAR اجرا می‌کنید

به‌طور پیش‌فرض، پوشهٔ plugins با نام `plugins` و در همان مسیری که فایل JAR متابیس قرار دارد ساخته می‌شود.

برای مثال، اگر متابیس را از دایرکتوری `/app/` اجرا می‌کنید، باید فایل JAR درایور Oracle را به `/app/plugins/` منتقل کنید:

```txt
# example directory structure for running Metabase with Oracle support
/app/metabase.jar
/app/plugins/ojdbc8.jar
```

### زمانی که متابیس را با Docker اجرا می‌کنید

فرآیند افزودن پلاگین‌ها در حالت Docker هم مشابه است، با این تفاوت که باید پوشهٔ `plugins` را mount کنید. برای جزئیات بیشتر، [راهنما](../../installation-and-operation/running-metabase-on-docker.md#adding-external-dependencies-or-plugins) را ببینید.

## بخش خطر (Danger zone)

[Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

- [مدیریت پایگاه‌داده‌ها](../../databases/connecting.md)
- [ویرایش متادیتا](../../data-modeling/metadata-editing.md)
- [مدل‌ها](../../data-modeling/models.md)
- [تنظیم سطوح دسترسی به داده](../../permissions/data.md)
