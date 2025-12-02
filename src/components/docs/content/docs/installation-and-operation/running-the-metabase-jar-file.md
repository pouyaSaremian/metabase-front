---
title: اجرای فایل JAR متابیس
redirect_from:
  - /docs/latest/operations-guide/running-the-metabase-jar-file
  - /docs/installation-and-operation/java-versions
---

# اجرای فایل JAR نسخهٔ متن‌باز متابیس (Metabase OSS JAR)

> توصیه می‌کنیم متابیس را روی [Metabase Cloud](https://www.metabase.com/cloud/) اجرا کنید. اگر نیاز به self‑hosting دارید، می‌توانید متابیس را به‌صورت یک فایل JAR مستقل اجرا کنید، هرچند [اجرای متابیس در Docker](./running-metabase-on-docker.md) گزینهٔ پیشنهادشده است.

برای اجرای نسخهٔ رایگان متن‌باز متابیس از طریق فایل JAR، باید Java Runtime Environment (JRE) روی سیستم شما نصب باشد.

اگر برای نسخه‌های [Pro یا Enterprise](https://www.metabase.com/pricing/) متابیس توکن دارید، به بخش [فعالسازی لایسنس تجاری متابیس](../installation-and-operation/activating-the-enterprise-edition.md) مراجعه کنید.

## راه‌اندازی سریع (Quick start)

> این راه‌اندازی سریع برای اجرای محلی متابیس است. برای اجرای متابیس در محیط تولید، بخش [Production installation](#production-installation) را ببینید.

اگر Java نصب است:

1. [فایل JAR نسخهٔ متن‌باز متابیس (Metabase OSS)](https://metabase.com/start/oss/jar) را دانلود کنید. اگر روی پلن [Pro](https://www.metabase.com/product/pro) یا [Enterprise](https://www.metabase.com/product/enterprise) هستید، [فایل JAR نسخهٔ Enterprise](https://downloads.metabase.com/enterprise/latest/metabase.jar) را دانلود کنید.
2. یک دایرکتوری جدید بسازید و فایل JAR متابیس را به آن منتقل کنید.
3. وارد این دایرکتوری شوید و فایل JAR را اجرا کنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

متابیس در حین راه‌اندازی، لاگ پیشرفت خود را در ترمینال چاپ می‌کند. صبر کنید تا پیام `"Metabase Initialization COMPLETE"` را ببینید و سپس به آدرس `http://localhost:3000/setup` بروید.

اگر از نسخهٔ Pro یا Enterprise استفاده می‌کنید، حتماً [لایسنس خود را فعال کنید](../installation-and-operation/activating-the-enterprise-edition.md).

## نصب محلی (Local installation)

اگر فقط می‌خواهید متابیس را امتحان کنید، با آن بازی کنید یا صرفاً روی ماشین محلی از آن استفاده کنید، متابیس همراه با یک پایگاه‌دادهٔ اپلیکیشن پیش‌فرض عرضه می‌شود که می‌توانید از آن استفاده کنید. **این تنظیم برای محیط تولید مناسب نیست**. اگر قرار است متابیس را در سازمان خود به‌صورت جدی در Production اجرا کنید، بخش [Production installation](#production-installation) را ببینید.

مراحل زیر همان مراحل Quick start هستند، فقط با توضیح بیشتر در هر گام.

### ۱. نصب Java JRE

ممکن است Java از قبل روی سیستم شما نصب باشد. برای بررسی نسخه، یک ترمینال باز کنید و دستور زیر را اجرا کنید:

```sh
java -version
```

اگر Java نصب نیست، قبل از اجرای متابیس باید آن را نصب کنید. توصیه ما نسخهٔ ۲۱ JRE از [Eclipse Temurin](https://adoptium.net/) با HotSpot JVM است. متابیس روی هر جایی که Java 21 کار کند اجرا می‌شود. نسخه‌های قدیمی‌تر Java پشتیبانی نمی‌شوند. معماری پردازنده در کل مهم نیست (هرچند متابیس را فقط روی x86 و ARM تست می‌کنیم).

### ۲. دانلود متابیس

فایل JAR را دانلود کنید:

- [نسخهٔ متن‌باز متابیس (Metabase OSS)](https://www.metabase.com/start/oss/jar)
- [نسخهٔ Enterprise/Pro](https://downloads.metabase.com/enterprise/latest/metabase.jar)

اگر می‌خواهید نسخه‌های [Pro یا Enterprise](https://www.metabase.com/pricing/) را نصب کنید، بخش [فعالسازی لایسنس تجاری متابیس](../installation-and-operation/activating-the-enterprise-edition.md) را ببینید.

### ۳. ساخت دایرکتوری جدید و انتقال فایل JAR

در هنگام اجرا، متابیس چند فایل جدید ایجاد می‌کند؛ بنابراین مهم است که قبل از اجرای متابیس، فایل JAR را در یک دایرکتوری مجزا قرار دهید (آن را از پوشهٔ دانلودها خارج و در یک دایرکتوری جدید قرار دهید).

در سیستم‌های شبه‌ یونیکس (POSIX)، دستورات چیزی شبیه به این خواهند بود. فرض کنیم فایل را در `/Users/person/Downloads` دانلود کرده‌اید:

```sh
mkdir ~/metabase
```

سپس:

```sh
mv /Users/person/Downloads/metabase.jar ~/metabase
```

### ۴. رفتن به دایرکتوری متابیس و اجرای JAR

به دایرکتوری‌ای که در گام قبل ساخته‌اید بروید:

```sh
cd ~/metabase
```

حالا که Java آماده است، می‌توانید از ترمینال فایل JAR را اجرا کنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

متابیس با تنظیمات پیش‌فرض شروع به کار می‌کند. در ترمینال لاگ‌هایی می‌بینید که نشان می‌دهند اپلیکیشن در حال راه‌اندازی است. وقتی متابیس به‌طور کامل بالا بیاید، پیامی شبیه زیر مشاهده می‌کنید:

```text
...
06-19 10:29:34 INFO metabase.task :: Initializing task CheckForNewVersions
06-19 10:29:34 INFO metabase.task :: Initializing task SendAnonymousUsageStats
06-19 10:29:34 INFO metabase.task :: Initializing task SendAbandomentEmails
06-19 10:29:34 INFO metabase.task :: Initializing task SendPulses
06-19 10:29:34 INFO metabase.task :: Initializing task SendFollowUpEmails
06-19 10:29:34 INFO metabase.task :: Initializing task TaskHistoryCleanup
06-19 10:29:34 INFO metabase.core :: Metabase Initialization COMPLETE
```

در این مرحله همه‌چیز آماده است. می‌توانید به سرور متابیس روی پورت ۳۰۰۰، معمولاً از طریق آدرس `http://localhost:3000` دسترسی داشته باشید.

اگر می‌خواهید از پورتی غیر از ۳۰۰۰ استفاده کنید، قبل از اجرای JAR، متغیر محیطی `MB_JETTY_PORT` را تنظیم کنید. (نگاه کنید به [environment variables](../configuring-metabase/environment-variables.md)).

اگر از نسخهٔ Pro یا Enterprise استفاده می‌کنید، حتماً [لایسنس خود را فعال کنید](../installation-and-operation/activating-the-enterprise-edition.md).

## نصب برای محیط تولید (Production installation)

مراحل نصب در محیط تولید شبیه مراحل بالا است، با دو تفاوت مهم. اگر می‌خواهید متابیس را در محیط Production اجرا کنید باید:

- از یک [پایگاه‌دادهٔ اپلیکیشن مناسب تولید](#production-application-database) برای ذخیرهٔ داده‌های متابیس استفاده کنید.
- [متابیس را به‌صورت سرویس](#running-the-metabase-jar-as-a-service) اجرا کنید.

اگر ترجیح می‌دهید از Docker استفاده کنید، راهنمای [اجرای متابیس روی Docker](running-metabase-on-docker.md) را ببینید.

### پایگاه‌دادهٔ اپلیکیشن مناسب تولید

فهرست پایگاه‌داده‌های پیشنهادی را می‌توانید در بخش [Supported databases](migrating-from-h2.md#supported-databases-for-storing-your-metabase-application-data) ببینید.

برای مثال، اگر می‌خواهید از [PostgreSQL](https://www.postgresql.org/) استفاده کنید، یک سرویس Postgres راه‌اندازی کرده و یک دیتابیس خالی بسازید:

```sh
createdb metabaseappdb
```

می‌توانید نام پایگاه‌دادهٔ اپلیکیشن را هر چه مایلید بگذارید. نیازی هم به ساخت جدول‌ها نیست؛ متابیس در هنگام راه‌اندازی آن‌ها را ایجاد می‌کند. تنها کافی است متغیرهای محیطی لازم را تنظیم کنید تا متابیس بداند چطور به این دیتابیس وصل شود.

دایرکتوری متابیس را مانند گام‌های [نصب محلی](#local-installation) می‌سازید، اما هنگام اجرای دستور `java --add-opens java.base/java.nio=ALL-UNNAMED -jar` برای راه‌اندازی JAR، آن را با چند متغیر محیطی که اطلاعات اتصال را مشخص می‌کنند ترکیب می‌کنید:

```sh
export MB_DB_TYPE=postgres
export MB_DB_DBNAME=metabaseappdb
export MB_DB_PORT=5432
export MB_DB_USER=username
export MB_DB_PASS=password
export MB_DB_HOST=localhost
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

این دستور متابیس را به دیتابیس Postgres با نام `metabaseappdb` روی `localhost:5432` و با نام کاربری `username` و رمز عبور `password` متصل می‌کند. اگر متابیس را به‌صورت سرویس اجرا می‌کنید، معمولاً این متغیرها را در یک فایل تنظیمات جداگانه قرار می‌دهید.

### اجرای فایل JAR به‌عنوان سرویس

اگر لازم است JAR را در محیط Production اجرا کنید، بهتر است متابیس را به‌صورت سرویس راه‌اندازی کنید. اجرای متابیس به‌عنوان سرویس:

- تضمین می‌کند متابیس خودکار راه‌اندازی شود و در حال اجرا بماند.
- امکان اجرای متابیس با یک کاربر کم‌اختیار را فراهم می‌کند (که برای امنیت بهتر است).

دستورالعمل دقیق راه‌اندازی سرویس بسته به سیستم‌عامل متفاوت است. برای نمونهٔ پیکربندی روی سیستم‌های مبتنی بر systemd، راهنمای [اجرای متابیس به‌عنوان سرویس systemd](./running-metabase-as-service.md) را ببینید.

### مهاجرت به نصب تولیدی

اگر تاکنون متابیس را با پایگاه‌دادهٔ پیش‌فرض H2 اجرا می‌کرده‌اید و تیم شما سؤال‌ها، داشبوردها، کالکشن‌ها و… ساخته است، بهتر است هرچه سریع‌تر این داده‌ها را به یک پایگاه‌دادهٔ اپلیکیشن مناسب تولید منتقل کنید. برای این کار به راهنمای [مهاجرت از پایگاه‌دادهٔ H2](migrating-from-h2.md) مراجعه کنید.

## عیب‌یابی

اگر حین نصب با مشکلی برخورد کردید، به [صفحهٔ عیب‌یابی اجرای متابیس](../troubleshooting-guide/running.md) سر بزنید.

## ارتقای متابیس

برای ارتقای نسخه، راهنمای [Upgrading Metabase](upgrading-metabase.md) را ببینید.

## راه‌اندازی متابیس

حالا که متابیس را نصب کرده‌اید، نوبت آن است که [آن را راه‌اندازی و به پایگاه‌دادهٔ خود متصل کنید](../configuring-metabase/setting-up-metabase.md).
