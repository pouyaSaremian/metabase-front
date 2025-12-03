---
title: پیکربندی پایگاه‌دادهٔ برنامهٔ متابیس
redirect_from:
  - /docs/latest/operations-guide/configuring-application-database
---

<!-- markdownlint-disable-next-line MD025 -->
# پیکربندی پایگاه‌دادهٔ برنامهٔ متابیس

پایگاه‌دادهٔ برنامه جایی است که متابیس اطلاعات حساب‌های کاربری، پرسش‌ها، داشبوردها و سایر داده‌های موردنیاز برای اجرای برنامه را در آن ذخیره می‌کند. این پایگاه‌داده با پایگاه‌داده‌ای که داده‌های کسب‌وکار خود را در آن نگه می‌دارید (انبار داده) متفاوت است. برای اتصال به انبار داده، به صفحهٔ [اتصال به پایگاه‌های‌دادهٔ پشتیبانی‌شده](../databases/connecting.md) مراجعه کنید.

برای محیط تولید، استفاده از PostgreSQL را به‌عنوان پایگاه‌دادهٔ برنامهٔ متابیس توصیه می‌کنیم.

<!-- markdownlint-disable-next-line MD051 -->
- [PostgreSQL](#postgresql) (پیشنهادی برای تولید)
<!-- markdownlint-disable-next-line MD051 -->
- [MySQL یا MariaDB](#mysql-یا-mariadb) (قابل‌استفاده در تولید)
<!-- markdownlint-disable-next-line MD051 -->
- [H2](#پایگاه‌دادهٔ-h2) (پیش‌فرض برای دموهای محلی – در تولید از آن پرهیز کنید)

متابیس زمان راه‌اندازی، تنظیمات اتصال به پایگاه‌داده را می‌خواند. در حین اجرای برنامه نمی‌توانید پایگاه‌دادهٔ برنامه را تغییر دهید.

## PostgreSQL

برای پایگاه‌دادهٔ برنامهٔ متابیس، استفاده از [PostgreSQL](https://www.postgresql.org/) را پیشنهاد می‌کنیم. متابیس از قدیمی‌ترین نسخهٔ پشتیبانی‌شدهٔ PostgreSQL تا آخرین نسخهٔ پایدار پشتیبانی می‌کند. به صفحهٔ [نسخه‌های PostgreSQL](https://www.postgresql.org/support/versioning/) مراجعه کنید.

می‌توانید با استفاده از [متغیرهای محیطی](../configuring-metabase/environment-variables.md)، یک پایگاه‌دادهٔ Postgres را به‌عنوان پایگاه‌دادهٔ برنامه متابیس تنظیم کنید. برای مثال:

```bash
export MB_DB_TYPE=postgres
export MB_DB_DBNAME=metabase
export MB_DB_PORT=5432
export MB_DB_USER=<username>
export MB_DB_PASS=<password>
export MB_DB_HOST=localhost
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

متابیس پایگاه‌دادهٔ Postgres را برای شما ایجاد نمی‌کند. فرمان نمونه برای ساخت پایگاه‌داده:

```bash
createdb --encoding=UTF8 -e metabase
```

اگر به پارامترهای بیشتری نیاز دارید، می‌توانید از رشتهٔ اتصال کامل JDBC استفاده کنید:

```bash
export MB_DB_CONNECTION_URI="jdbc:postgresql://localhost:5432/metabase?user=<username>&password=<password>"
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

اگر می‌خواهید URI اتصال، نام کاربری و گذرواژه را جدا از رشتهٔ JDBC ارسال کنید (مثلاً وقتی گذرواژه حاوی کاراکترهای خاص است)، می‌توانید از متغیر `MB_DB_CONNECTION_URI` در ترکیب با متغیرهای `MB_DB_USER` و `MB_DB_PASS` استفاده کنید:

```bash
export MB_DB_CONNECTION_URI="jdbc:postgresql://localhost:5432/metabase"
export MB_DB_USER=<username>
export MB_DB_PASS=<password>
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

## MySQL یا MariaDB

اگرچه [PostgreSQL](#postgresql) را پیشنهاد می‌کنیم، اما می‌توانید از [MySQL](https://www.mysql.com/) یا [MariaDB](https://www.mariadb.org/) هم استفاده کنید.

حداقل نسخه‌های پیشنهادی: MySQL 8.0.17 یا MariaDB 10.2.2 و استفاده از مجموعه‌کاراکتری `utf8mb4` الزامی است.

از ApsaraDB MySQL پشتیبانی نمی‌کنیم؛ در عوض می‌توانید از ApsaraDB PostgreSQL استفاده کنید.

برای استفاده از MySQL به‌عنوان پایگاه‌دادهٔ برنامه، می‌توانید متغیرهای محیطی را به شکل زیر تنظیم کنید:

```bash
export MB_DB_TYPE=mysql
export MB_DB_DBNAME=metabase
export MB_DB_PORT=3306
export MB_DB_USER=<username>
export MB_DB_PASS=<password>
export MB_DB_HOST=localhost
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

متابیس این پایگاه‌داده را برای شما ایجاد نمی‌کند. جملهٔ SQL نمونه برای ساخت پایگاه‌داده:

```bash
CREATE DATABASE metabase CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

فرمان زیر به متابیس می‌گوید که با استفاده از اطلاعات اتصال MySQL، پایگاه‌دادهٔ برنامه را پیدا کند. در صورت نیاز می‌توانید از رشتهٔ کامل JDBC نیز استفاده کنید:

```bash
export MB_DB_CONNECTION_URI="jdbc:mysql://localhost:3306/metabase?user=<username>&password=<password>"
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

همانند Postgres، می‌توانید `MB_DB_CONNECTION_URI` را همراه با `MB_DB_USER` و/یا `MB_DB_PASS` استفاده کنید تا بخشی از اطلاعات را جداگانه ارسال کنید:

```bash
export MB_DB_CONNECTION_URI="jdbc:mysql://localhost:5432/metabase"
export MB_DB_USER=<username>
export MB_DB_PASS=<password>
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

## پایگاه‌دادهٔ H2

> **برای نصب متابیس در محیط تولید، توصیه می‌کنیم [پایگاه‌دادهٔ پیش‌فرض H2 را با PostgreSQL جایگزین کنید](./migrating-from-h2.md)**؛ Postgres عملکرد و پایداری بهتری ارائه می‌دهد.

به‌طور پیش‌فرض، متابیس با یک [پایگاه‌دادهٔ H2](https://www.h2database.com/) عرضه می‌شود تا بتوانید متابیس را به‌آسانی روی سیستم محلی دمو کنید. **در محیط تولید از این پایگاه‌دادهٔ پیش‌فرض استفاده نکنید.**

اگر هنگام راه‌اندازی متابیس، متغیرهای محیطی لازم برای اتصال به پایگاه‌دادهٔ تولید را تنظیم نکنید، متابیس تلاش می‌کند یک پایگاه‌دادهٔ H2 جدید در همان پوشه‌ای که فایل JAR قرار دارد ایجاد کند.

H2 یک پایگاه‌دادهٔ فایل‌محور است و می‌توانید فایل‌های آن را در ترمینال ببینید:

```bash
ls metabase.*
```

باید فایل‌های زیر را ببینید:

```bash
metabase.db.h2.db  # Or metabase.db.mv.db depending on when you first started using Metabase.
metabase.db.trace.db
```

اگر می‌خواهید فایل H2 را در مسیر مشخصی نگه دارید، از متغیرهای محیطی `MB_DB_TYPE` و `MB_DB_FILE` استفاده کنید:

```bash
export MB_DB_TYPE=h2
export MB_DB_FILE=/the/path/to/my/h2.db
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

توجه کنید که H2 به‌صورت خودکار پسوند `.mv.db` یا `.h2.db` را به مسیری که مشخص می‌کنید اضافه می‌کند؛ بنابراین این پسوندها را در مقدار `MB_DB_FILE` ننویسید. یعنی `MB_DB_FILE` باید چیزی مثل `/path/to/metabase.db` باشد، نه `/path/to/metabase.db.mv.db` (هرچند فایل نهایی همین نام دوم را خواهد داشت).

## مهاجرت از H2

اگر با پایگاه‌دادهٔ پیش‌فرض H2 شروع کرده‌اید اما می‌خواهید محتوای فعلی را حفظ کنید و به پایگاه‌دادهٔ تولیدی مهاجرت کنید، متابیس امکان محدودی برای [مهاجرت از H2 به PostgreSQL](./migrating-from-h2.md) فراهم کرده است.

## ارتقا از نسخه‌های قبل از 0.38 متابیس

اگر از نسخه‌های قدیمی‌تر متابیس ارتقا می‌دهید، توجه داشته باشید که در نسخهٔ 0.38 استفاده از `NonValidatingFactory` در PostgreSQL برای اعتبارسنجی SSL حذف شده است. بنابراین ممکن است در راه‌اندازی (اگر از PostgreSQL به‌عنوان پایگاه‌دادهٔ برنامه استفاده می‌کنید) یا هنگام کوئری‌گرفتن از انبار دادهٔ PostgreSQL با خطا مواجه شوید.

دو راه برای رفع این خطا وجود دارد:

1. پیکربندی اتصال PostgreSQL برای استفاده از اعتبارسنجی گواهی SSL.
2. فعال‌سازی دستی `NonValidatingFactory`. هشدار: این روش ناامن است و فقط برای عیب‌یابی یا شرایطی که امنیت اولویت ندارد توصیه می‌شود.

روش پیکربندی به این بستگی دارد که Postgres را به‌عنوان پایگاه‌دادهٔ برنامه استفاده می‌کنید یا انبار دادهٔ متصل به متابیس:

### اعتبارسنجی گواهی SSL برای پایگاه‌داده‌های _برنامه‌ای_ Postgres

برای استفاده از اعتبارسنجی گواهی SSL، باید از متغیر محیطی `MB_DB_CONNECTION_URI` برای پیکربندی اتصال استفاده کنید. مثال:

```bash
export MB_DB_CONNECTION_URI="postgres://localhost:5432/metabase?user=<username>&password=<password>&sslmode=verify-ca&sslrootcert=<path to CA root or intermediate root certificate>"
```

اگر امکان فعال‌سازی اعتبارسنجی گواهی را ندارید، می‌توانید برای پایگاه‌دادهٔ برنامه، `NonValidatingFactory` را فعال کنید:

```bash
export MB_DB_CONNECTION_URI="postgres://localhost:5432/metabase?user=<username>&password=<password>&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory"
```

### اعتبارسنجی گواهی SSL برای پایگاه‌داده‌های _انبار داده_ Postgres

مقادیر زیر را به انتهای رشتهٔ اتصال JDBC پایگاه‌دادهٔ خود اضافه کنید:

```bash
&sslmode=verify-ca&sslrootcert=<path to CA root or intermediate root certificate>
```

اگر باز هم مشکل داشتید، می‌توانید با افزودن مقادیر زیر به انتهای URI اتصال پایگاه‌داده، `NonValidatingFactory` را فعال کنید:

```bash
&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory
```

برای گزینه‌های بیشتر در زمینه تنظیم پارامترهای SSL، به [مستندات SSL سمت‌کلاینت PostgreSQL](https://jdbc.postgresql.org/documentation/ssl/#configuring-the-client) مراجعه کنید.

## مطالعهٔ بیشتر

- [متغیرهای محیطی](../configuring-metabase/environment-variables.md)
