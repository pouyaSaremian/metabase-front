---
title: اجرای متابیس روی Docker
redirect_from:
  - /docs/latest/operations-guide/running-metabase-on-docker
---

# اجرای متابیس روی Docker

> اگر به‌دنبال استقراری سریع، قابل‌اعتماد و امن هستید، بدون زحمت‌ها و هزینه‌های پنهان self‑hosting، به [Metabase Cloud](https://www.metabase.com/cloud/) سر بزنید.

متابیس یک ایمیج رسمی Docker در Docker Hub منتشر می‌کند که می‌توانید از آن روی هر سیستمی که Docker روی آن نصب است برای استقرار استفاده کنید.

اگر قصد ارتقای نسخهٔ متابیس در Docker را دارید، به این [راهنمای ارتقا](upgrading-metabase.md) مراجعه کنید.

## راه‌اندازی سریع نسخهٔ متن‌باز (Open Source quick start)

از این راه‌اندازی سریع برای اجرای نسخهٔ متن‌باز متابیس به‌صورت محلی استفاده کنید. برای اجرای متابیس در محیط تولید، بخش [Production installation](#production-installation) را در ادامه ببینید.

با فرض این‌که [Docker](https://www.docker.com/) را نصب و اجرا کرده‌اید، آخرین ایمیج Docker را دریافت کنید:

```sh
docker pull metabase/metabase:latest
```

سپس کانتینر متابیس را اجرا کنید:

```sh
docker run -d -p 3000:3000 --name metabase metabase/metabase
```

این دستور یک سرور متابیس را به‌صورت پیش‌فرض روی پورت ۳۰۰۰ راه‌اندازی می‌کند.

اختیاری: برای دیدن لاگ‌ها در حین راه‌اندازی نسخهٔ متن‌باز متابیس، این دستور را اجرا کنید:

```sh
docker logs -f metabase
```

بعد از اتمام راه‌اندازی، می‌توانید از طریق آدرس `http://localhost:3000` به متابیس متن‌باز خود دسترسی داشته باشید.

برای اجرای متابیس متن‌باز روی پورتی دیگر، مثلاً پورت ۱۲۳۴۵:

```sh
docker run -d -p 12345:3000 --name metabase metabase/metabase
```

## راه‌اندازی سریع نسخهٔ Pro یا Enterprise

اگر برای یکی از نسخه‌های [Pro یا Enterprise](https://www.metabase.com/pricing/) متابیس یک [توکن لایسنس](../installation-and-operation/activating-the-enterprise-edition.md) دارید و می‌خواهید متابیس را به‌صورت محلی اجرا کنید، از این راه‌اندازی سریع استفاده کنید. برای اجرای متابیس در محیط تولید، بخش [Production installation](#production-installation) را ببینید.

با فرض این‌که [Docker](https://www.docker.com/) را نصب و اجرا کرده‌اید، آخرین ایمیج Docker نسخهٔ Enterprise را دریافت کنید:

```sh
docker pull metabase/metabase-enterprise:latest
```

سپس کانتینر متابیس را اجرا کنید:

```sh
docker run -d -p 3000:3000 --name metabase metabase/metabase-enterprise
```

این دستور یک سرور متابیس را به‌صورت پیش‌فرض روی پورت ۳۰۰۰ راه‌اندازی می‌کند.

اختیاری: برای دیدن لاگ‌ها در حین راه‌اندازی متابیس، این دستور را اجرا کنید:

```sh
docker logs -f metabase
```

بعد از اتمام راه‌اندازی، می‌توانید از طریق آدرس `http://localhost:3000` به متابیس Pro یا Enterprise خود دسترسی داشته باشید.

برای اجرای متابیس Pro یا Enterprise روی پورتی دیگر، مثلاً پورت ۱۲۳۴۵:

```sh
docker run -d -p 12345:3000 --name metabase metabase/metabase-enterprise
```

## نصب برای محیط تولید (Production installation)

متابیس به‌صورت پیش‌فرض همراه با یک پایگاه‌دادهٔ داخلی H2 عرضه می‌شود که داده‌های اپلیکیشن را روی فایل‌سیستم ذخیره می‌کند. یعنی اگر کانتینر را حذف کنید، همهٔ داده‌های اپلیکیشن متابیس (سؤال‌ها، داشبوردها، کالکشن‌ها و غیره) را از دست خواهید داد.

اگر می‌خواهید متابیس را در محیط تولید اجرا کنید، باید داده‌های اپلیکیشن را در یک [پایگاه‌دادهٔ مناسب محیط تولید](./migrating-from-h2.md#supported-databases-for-storing-your-metabase-application-data) ذخیره کنید.

بعد از این‌که پایگاه‌داده‌ای مثل Postgres را برای ذخیرهٔ داده‌های متابیس آماده کردید، کافی است اطلاعات اتصال و اعتبارسنجی را از طریق متغیرهای محیطی در اختیار متابیس قرار دهید تا بتواند به آن متصل شود.

### اجرای Docker در محیط تولید

فرض کنیم با دستور زیر یک پایگاه‌دادهٔ Postgres ایجاد کرده‌اید:

```sh
createdb metabaseappdb
```

نیازی نیست هیچ جدولی بسازید؛ متابیس هنگام راه‌اندازی جداول را می‌سازد. و فرض کنیم این پایگاه‌داده از طریق `my-database-host:5432` با نام کاربری `name` و رمز عبور `password` در دسترس است.

در این صورت، یک مثال از دستور Docker که به متابیس می‌گوید از این پایگاه‌داده استفاده کند به شکل زیر است:

```sh
docker run -d -p 3000:3000 \
  -e "MB_DB_TYPE=postgres" \
  -e "MB_DB_DBNAME=metabaseappdb" \
  -e "MB_DB_PORT=5432" \
  -e "MB_DB_USER=name" \
  -e "MB_DB_PASS=password" \
  -e "MB_DB_HOST=my-database-host" \
   --name metabase metabase/metabase
```

به یاد داشته باشید که متابیس از **داخل** کانتینر به پایگاه‌داده متصل می‌شود، بنابراین مطمئن شوید یا از یک hostname کامل (FQDN) استفاده می‌کنید، یا این‌که یک ورودی مناسب در فایل `/etc/hosts` کانتینر قرار داده‌اید.

## مهاجرت به نصب تولیدی

اگر پیش از این متابیس را با پایگاه‌دادهٔ اپلیکیشن پیش‌فرض (H2) اجرا می‌کرده‌اید و حالا می‌خواهید بدون از دست‌دادن داده‌ها (سؤال‌ها، داشبوردها و غیره) به یک پایگاه‌دادهٔ مناسب محیط تولید مهاجرت کنید، راهنمای [Migrating from H2 to a production database](migrating-from-h2.md) را ببینید.

## نمونهٔ فایل Docker Compose

در این‌جا یک نمونهٔ فایل `docker-compose.yml` برای اجرای متابیس با یک پایگاه‌دادهٔ PostgreSQL به نام `metabaseappdb` می‌بینید:

> این فقط یک مثال است و برای محیط تولید مناسب نیست. برای راهنمای کامل، به مستند [How to run Metabase in production](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-in-production) مراجعه کنید.

```yml
services:
  metabase:
    image: metabase/metabase:latest
    container_name: metabase
    hostname: metabase
    volumes:
      - /dev/urandom:/dev/random:ro
    ports:
      - 3000:3000
    environment:
      MB_DB_TYPE: postgres
      MB_DB_DBNAME: metabaseappdb
      MB_DB_PORT: 5432
      MB_DB_USER: metabase
      MB_DB_PASS: mysecretpassword
      MB_DB_HOST: postgres
    networks:
      - metanet1
    healthcheck:
      test: curl --fail -I http://localhost:3000/api/health || exit 1
      interval: 15s
      timeout: 5s
      retries: 5
  postgres:
    image: postgres:latest
    container_name: postgres
    hostname: postgres
    environment:
      POSTGRES_USER: metabase
      POSTGRES_DB: metabaseappdb
      POSTGRES_PASSWORD: mysecretpassword
    networks:
      - metanet1
networks:
  metanet1:
    driver: bridge
```

## نگه‌داری و پیکربندی تکمیلی Docker

- [سفارشی‌سازی سرور Jetty متابیس](#customizing-the-metabase-jetty-server)
- [متغیرهای محیطی مخصوص Docker](#docker-specific-environment-variables)
- [تنظیم منطقهٔ زمانی جاوا](#setting-the-java-timezone)
- [کپی‌کردن پایگاه‌دادهٔ اپلیکیشن](#copying-the-application-database)
- [مانت‌کردن حجم ذخیره‌سازی (volume) نگاشت‌شده](#mounting-a-mapped-file-storage-volume)
- [برگرداندن تنظیمات در صورت توقف کانتینر](#getting-your-config-back-if-you-stopped-your-container)
- [افزودن وابستگی‌ها یا پلاگین‌های خارجی](#adding-external-dependencies-or-plugins)
- [استفاده از Docker Secrets برای پنهان‌کردن پارامترهای حساس](#use-docker-secrets-to-hide-sensitive-parameters)
- [عیب‌یابی](#troubleshooting)
- [ادامهٔ راه‌اندازی متابیس](#continue-to-setup)

### سفارشی‌سازی سرور Jetty متابیس

می‌توانید هر یک از تنظیمات سفارشی [Customizing the Metabase Jetty Webserver](../configuring-metabase/customizing-jetty-webserver.md) را با تنظیم متغیرهای محیطی در دستور `docker run` اعمال کنید.

### متغیرهای محیطی مخصوص Docker

علاوه بر تنظیمات استاندارد، دو متغیر محیطی مخصوص Docker با نام‌های `MUID` و `MGID` وجود دارد که برای تعیین شناسهٔ کاربر و گروهی استفاده می‌شوند که متابیس در داخل کانتینر با آن‌ها اجرا می‌شود. این تنظیمات کمک می‌کنند مجوزهای فایل‌ها (مثلاً پایگاه‌دادهٔ اپلیکیشن) هنگام اشتراک بین هاست و کانتینر هماهنگ شوند.

در این‌جا نمونه‌ای از استفاده از فایل پایگاه‌داده‌ای که متعلق به حساب کاربری شماست و در دایرکتوری خانگی‌تان ذخیره شده می‌بینید:

```sh
docker run -d -v ~/my-metabase-db:/metabase.db --name metabase -e MB_DB_FILE=/metabase.db -e MUID=$UID -e MGID=$GID -p 3000:3000 metabase/metabase
```

### تنظیم منطقهٔ زمانی جاوا (Java Timezone)

بهتر است منطقهٔ زمانی Java را مطابق منطقهٔ زمانی‌ای تنظیم کنید که می‌خواهید همهٔ گزارش‌ها بر اساس آن نمایش داده شوند. این کار را می‌توانید با تنظیم متغیر محیطی `JAVA_TIMEZONE` انجام دهید که توسط اسکریپت راه‌اندازی متابیس خوانده می‌شود. برای مثال:

```sh
docker run -d -p 3000:3000 \
  -e "JAVA_TIMEZONE=US/Pacific" \
  --name metabase metabase/metabase
```

### کپی‌کردن پایگاه‌دادهٔ اپلیکیشن

محل پیش‌فرض پایگاه‌دادهٔ اپلیکیشن در کانتینر مسیر `/metabase.db/metabase.db.mv.db` است. می‌توانید با دستور زیر این دایرکتوری را از کانتینر کپی کنید (به‌جای `CONTAINER_ID` شناسه یا نام کانتینر — مثلاً `metabase` — را قرار دهید):

```sh
docker cp CONTAINER_ID:/metabase.db ./
```

محتوای پایگاه‌داده در دایرکتوری‌ای به نام `metabase.db` ذخیره خواهد شد.

### مانت‌کردن یک حجم ذخیره‌سازی نگاشت‌شده

برای این‌که داده‌های شما خارج از کانتینر ماندگار شوند و بین اجرای مجدد کانتینرها در دسترس باقی بمانند، می‌توانید یک مسیر محلی روی هاست را داخل کانتینر مانت کنید:

```sh
docker run -d -p 3000:3000 \
  -v ~/metabase-data:/metabase-data \
  -e "MB_DB_FILE=/metabase-data/metabase.db" \
  --name metabase metabase/metabase
```

در این حالت، هنگام راه‌اندازی کانتینر، متابیس به‌جای محل پیش‌فرض، از فایل پایگاه‌داده‌ای که در `MB_DB_FILE` (در این‌جا `~/metabase-data/metabase.db`) مشخص کرده‌اید استفاده می‌کند و آن پوشه از فایل‌سیستم محلی شما به کانتینر مانت می‌شود.

### بازگردانی تنظیمات اگر کانتینر را متوقف کرده‌اید

اگر متابیس را قبلاً با پایگاه‌دادهٔ محلی اجرا و پیکربندی کرده‌اید و سپس کانتینر را متوقف کرده‌اید، داده‌های شما تا زمانی که با دستور `docker rm` کانتینر را حذف نکرده باشید، همچنان وجود دارد. برای بازیابی تنظیمات قبلی:

#### ۱. با فرمان `docker ps -a` کانتینر متوقف‌شده را پیدا کنید. خروجی ممکن است شبیه نمونهٔ زیر باشد:

```sh
docker ps -a | grep metabase
    ca072cd44a49        metabase/metabase        "/app/run_metabase.sh"   About an hour ago   Up About an hour          0.0.0.0:3000->3000/tcp   metabase
    02e4dff057d2        262aa3d0f714             "/app/run_metabase.sh"   23 hours ago        Exited (0) 23 hours ago                            pedantic_hypatia
    0d2170d4aa4a        262aa3d0f714             "/app/run_metabase.sh"   23 hours ago        Exited (0) 23 hours ago                            stoic_lumiere
```

بعد از این‌که کانتینر متوقف‌شدهٔ حاوی تنظیمات خود را پیدا کردید، شناسهٔ کانتینر (ستون اول) را برای مرحلهٔ بعد یادداشت کنید.

#### ۲. با استفاده از `docker commit` از کانتینر متوقف‌شده یک ایمیج Docker سفارشی بسازید که تنظیمات شما را در خود دارد.

```sh
docker commit ca072cd44a49 mycompany/metabase-custom
sha256:9ff56186de4dd0b9bb2a37c977c3a4c9358647cde60a16f11f4c05bded1fe77a
```

#### ۳. برای اجرای مجدد متابیس از ایمیج جدید با `docker run` استفاده کنید:

```sh
docker run -d -p 3000:3000 --name metabase mycompany/metabase-custom
430bb02a37bb2471176e54ca323d0940c4e0ee210c3ab04262cb6576fe4ded6d
```

به این ترتیب باید نصب متابیسِ پیکربندی‌شدهٔ خود را بازگردانده باشید. اگر نتیجه همان چیزی نیست که انتظار داشتید، یک کانتینر متوقف‌شدهٔ دیگر را امتحان کنید و مراحل را تکرار کنید.

### افزودن وابستگی‌ها یا پلاگین‌های خارجی

برای افزودن فایل‌های JAR وابستگی خارجی — مانند درایورهای JDBC برای Oracle یا Vertica، یا درایورهای شخص ثالث متابیس — باید:

- یک دایرکتوری `plugins` روی هاست خود بسازید، و
- آن دایرکتوری را طوری bind کنید که در داخل کانتینر به‌صورت مسیر `/plugins` در دسترس متابیس باشد (با استفاده از `--mount` یا `-v`/`--volume`).

برای مثال، اگر روی هاست خود دایرکتوری `/path/to/plugins` دارید، می‌توانید محتوای آن را با گزینهٔ `--mount` به این صورت در اختیار متابیس بگذارید:

```sh
docker run -d -p 3000:3000 \
  --mount type=bind,source=/path/to/plugins,destination=/plugins \
  --name metabase metabase/metabase
```

توجه داشته باشید متابیس از این دایرکتوری برای استخراج پلاگین‌های bundledشده با توزیع پیش‌فرض (مثلاً درایورهای پایگاه‌داده‌هایی مثل SQLite) نیز استفاده می‌کند، بنابراین این مسیر باید برای Docker قابل‌خواندن و نوشتن باشد.

### استفاده از Docker Secrets برای مخفی‌کردن پارامترهای حساس

برای این‌که پارامترهای اتصال (مانند نام کاربری و رمز عبور پایگاه‌داده) به‌صورت واضح و قابل‌مشاهده در فایل‌ها و محیط کانتینر قرار نگیرند، می‌توانید از Docker Secrets استفاده کنید تا این پارامترها در فایل‌هایی امن ذخیره و هنگام راه‌اندازی کانتینر در حافظه بارگذاری شوند.

در این‌جا نمونه‌ای از فایل `docker-compose.yml` را می‌بینید که با استفاده از secrets یک کانتینر متابیس را برای اتصال به پایگاه‌دادهٔ PostgreSQL راه‌اندازی می‌کند.

علاوه بر این فایل YML، باید دو فایل دیگر بسازید:

- `db_user.txt`
- `db_password.txt`

این فایل‌ها باید در همان دایرکتوری `docker-compose.yml` قرار بگیرند. مقدار `db_user` را در فایل `db_user.txt` و مقدار `db_password` را در فایل `db_password.txt` قرار دهید.

به پسوند `\_FILE` در نام متغیرهای محیطی‌ای که حاوی secret هستند توجه کنید:

```yml
services:
  metabase:
    image: metabase/metabase:latest
    container_name: metabase
    hostname: metabase
    volumes:
      - /dev/urandom:/dev/random:ro
    ports:
      - 3000:3000
    environment:
      MB_DB_TYPE: postgres
      MB_DB_DBNAME: metabase
      MB_DB_PORT: 5432
      MB_DB_USER_FILE: /run/secrets/db_user
      MB_DB_PASS_FILE: /run/secrets/db_password
      MB_DB_HOST: postgres
    networks:
      - metanet1
    secrets:
      - db_password
      - db_user
    healthcheck:
      test: curl --fail -I http://localhost:3000/api/health || exit 1
      interval: 15s
      timeout: 5s
      retries: 5
  postgres:
    image: postgres:latest
    container_name: postgres
    hostname: postgres
    environment:
      POSTGRES_USER_FILE: /run/secrets/db_user
      POSTGRES_DB: metabase
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    networks:
      - metanet1
    secrets:
      - db_password
      - db_user
networks:
  metanet1:
    driver: bridge
secrets:
  db_password:
    file: db_password.txt
  db_user:
    file: db_user.txt
```

در حال حاضر می‌توانید متغیرهای محیطی زیر را به‌صورت secret استفاده کنید (برای جزئیات بیش‌تر، مستند [environment variables](../configuring-metabase/environment-variables.md) را ببینید):

- `MB_DB_USER`
- `MB_DB_PASS`
- `MB_DB_CONNECTION_URI`
- `MB_EMAIL_SMTP_PASSWORD`
- `MB_EMAIL_SMTP_USERNAME`
- `MB_LDAP_PASSWORD`
- `MB_LDAP_BIND_DN`

برای این‌که کانتینر متابیس فایل‌ها را خوانده و محتوای آن‌ها را به‌عنوان secret استفاده کند، نام متغیر محیطی باید همان‌طور که در بالا نشان داده شده با پسوند `_FILE` تنظیم شود.

> این هم یک مثال دیگر است و برای محیط تولید در نظر گرفته نشده. برای راهنمای به‌روز دربارهٔ استقرار در محیط تولید، به مستند [How to run Metabase in production](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-in-production) مراجعه کنید.

## عیب‌یابی

برای نکات بیشتر، بخش Running Metabase در [راهنمای عیب‌یابی](../troubleshooting-guide/running.md) را ببینید.

## ادامهٔ راه‌اندازی

حالا که متابیس را نصب کرده‌اید، نوبت آن است که [آن را تنظیم و به پایگاه‌دادهٔ خود متصل کنید](../configuring-metabase/setting-up-metabase.md).
