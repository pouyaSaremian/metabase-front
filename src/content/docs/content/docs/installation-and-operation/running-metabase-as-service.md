---
title: اجرای متابیس به‌عنوان سرویس systemd
redirect_from:
  - /docs/latest/operations-guide/running-metabase-on-debian
  - /docs/installation-and-operation/running-metabase-on-debian
---

# اجرای متابیس به‌عنوان سرویس systemd

اگر در زیرساخت خود نمی‌خواهید (یا نمی‌توانید) از Docker استفاده کنید، می‌توانید متابیس را به‌صورت یک سرویس [systemd](https://wiki.debian.org/systemd) ثبت کنید تا بتوانید آن را مانند سایر سرویس‌ها راه‌اندازی، متوقف یا مدیریت کنید.

در این راهنما از Debian به‌عنوان مثال استفاده می‌کنیم، اما مراحل کلی برای اکثر توزیع‌های لینوکسی که از systemd استفاده می‌کنند مشابه است. این متن یک دستورالعمل حداقلی است تا شما را راه بیندازد؛ از این‌جا به بعد می‌توانید براساس بهترین رویه‌های امنیتی و عملیاتی سازمان خود آن را سخت‌گیرانه‌تر کنید.

## پیش‌فرض‌ها (فرضیات)

پیش‌فرض‌های اصلی در این راهنما:

- روی سرور، یک [Java Runtime Environment (JRE)](./running-the-metabase-jar-file.md#1-install-java-jre) نصب کرده‌اید.
- متابیس را با استفاده از فایل `metabase.jar` اجرا می‌کنید.
- روی سرور شما Nginx از قبل در حال اجرا است.
- برای پیکربندی متابیس از متغیرهای محیطی استفاده می‌کنید.
- روی سرور دسترسی `root` دارید.

در استقرارهای تولیدی، باید یک [پایگاه‌دادهٔ اپلیکیشن PostgreSQL یا MySQL/MariaDB](./configuring-application-database.md) برای متابیس تنظیم کنید.

## ایجاد کاربر کم‌اختیار برای اجرای متابیس

به دلایل امنیتی بهتر است متابیس را با یک کاربر کم‌اختیار (unprivileged) اجرا کنیم. اگر چنین کاربری ندارید، یک کاربر با نام `metabase` ایجاد کنید:

```sh
# Create a "metabase" group
sudo groupadd -r metabase

# Create a "metabase" user, with a home directory at /home/metabase
sudo useradd -m -r -s /bin/false -g metabase metabase
```

## دانلود فایل JAR متابیس

فایل JAR متابیس می‌تواند در هر مسیری قرار بگیرد که کاربر `metabase` مجوز خواندن از آن را دارد. یکی از محل‌های مناسب، دایرکتوری خانگی این کاربر در مسیر `/home/metabase` است.

اگر ترجیح می‌دهید از مسیر دیگری برای فایل JAR استفاده کنید، مطمئن شوید در همهٔ مراحل بعدی، هرجا که از `/home/metabase/metabase.jar` استفاده شده، آن مسیر را به‌درستی به‌روزرسانی کرده‌اید.

```sh
# Download the Metabase OSS JAR file into /home/metabase:
sudo -u metabase wget -O /home/metabase/metabase.jar https://downloads.metabase.com/latest/metabase.jar

# Or, if you're using Metabase Pro/Enterprise:
sudo -u metabase wget -O /home/metabase/metabase.jar https://downloads.metabase.com/enterprise/latest/metabase.jar

```

## متغیرهای محیطی برای متابیس

[متغیرهای محیطی](../configuring-metabase/environment-variables.md) به شما امکان می‌دهند نمونهٔ متابیس خود را پیکربندی و سفارشی‌سازی کنید.

در این بخش، فایلی برای نگه‌داری متغیرهای محیطی می‌سازیم که هنگام تعریف سرویس systemd متابیس از آن استفاده خواهد شد.

دستور زیر یک فایل متغیر محیطی در مسیر `/home/metabase/.env` ایجاد می‌کند که باید آن را برای اشاره به [پایگاه‌دادهٔ اپلیکیشن PostgreSQL](./configuring-application-database.md) خود به‌روزرسانی کنید:

```bash
sudo -u metabase cat << EOF > /home/metabase/.env
MB_JETTY_HOST=127.0.0.1
MB_JETTY_PORT=3000

# Uncomment and update the variables below to connect to your Postgres application database
# If not set, Metabase will use a built-in database (not suitable for production)
# MB_DB_TYPE=postgres
# MB_DB_HOST=your_metabase_db_hostname
# MB_DB_PORT=5432
# MB_DB_DBNAME=your_metabase_db_name
# MB_DB_USER=your_metabase_db_user
# MB_DB_PASS=your_metabase_db_password
EOF
```

## ایجاد سرویس متابیس

هر سرویس در systemd به فایلی نیاز دارد که توضیح بدهد systemd چطور آن سرویس را مدیریت کند و چه قابلیت‌هایی پشتیبانی می‌شوند. سرویس‌های سراسری معمولاً در مسیر `/etc/systemd/system/<servicename>` ثبت می‌شوند؛ بنابراین سرویس متابیس را در مسیر `/etc/systemd/system/metabase.service` قرار می‌دهیم.

### فایل سرویس متابیس

فرمان زیر یک فایل در `/etc/systemd/system/metabase.service` می‌سازد که شامل یک سرویس سادهٔ systemd برای اجرای متابیس است:

```sh
sudo cat << EOF > /etc/systemd/system/metabase.service
[Unit]
Description=Metabase server
After=network.target

[Service]
WorkingDirectory=~
ExecStart=/usr/bin/java --add-opens java.base/java.nio=ALL-UNNAMED -jar /home/metabase/metabase.jar
EnvironmentFile=/home/metabase/.env
User=metabase
Type=simple
SuccessExitStatus=143
TimeoutStopSec=120
Restart=always

[Install]
WantedBy=multi-user.target
EOF
```

مزیت اصلی اجرای متابیس به‌عنوان سرویس systemd این است که هم‌زمان با هر بار بوت‌شدن سیستم به‌طور خودکار بالا می‌آید و در صورت کرش‌کردن دوباره راه‌اندازی می‌شود. تنها چند گام کوتاه دیگر تا ثبت نهایی سرویس و آماده‌شدن متابیس باقی مانده است.

## اطمینان از آماده‌بودن پایگاه‌داده

اگر از PostgreSQL به‌عنوان پایگاه‌دادهٔ اپلیکیشن استفاده می‌کنید، مطمئن شوید دیتابیسی مخصوص متابیس و کاربری که به آن دیتابیس دسترسی دارد ایجاد کرده‌اید. این مقادیر باید با مقادیری که در متغیرهای محیطی `MB_DB_TYPE`، `MB_DB_DBNAME`، `MB_DB_USER` و `MB_DB_PASS` تنظیم کرده‌اید هم‌خوان باشند. اگر پایگاه‌داده به‌درستی پیکربندی نشده باشد، متابیس قادر به راه‌اندازی نخواهد بود.

## اطمینان از این‌که Nginx درخواست‌ها را به متابیس پروکسی می‌کند

پیکربندی کامل Nginx خارج از محدودهٔ این راهنماست، اما در ادامه یک فایل نمونهٔ `nginx.conf` ارائه می‌کنیم که متابیس را به‌سادگی در دسترس قرار می‌دهد.

**توجه:** فایل `nginx.conf` زیر فرض می‌کند ترافیک ورودی روی پورت ۸۰ دریافت می‌شود و می‌خواهید این درخواست‌ها را به متابیس پروکسی کنید، و این‌که متابیس روی `localhost` و پورت ۳۰۰۰ اجرا می‌شود. برای گزینه‌ها و دستورهای بیشتر، به [مستندات رسمی Nginx](https://nginx.org/en/docs/) مراجعه کنید.

```nginx
# sample nginx.conf
# proxy requests to Metabase instance
server {
  listen 80;
  listen [::]:80;
  server_name yourdomain.example.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}
```

## ثبت سرویس متابیس در systemd

حالا وقت ثبت سرویس متابیس در systemd است تا هنگام بوت سیستم به‌طور خودکار راه‌اندازی شود:

```sh
sudo systemctl daemon-reload
sudo systemctl start metabase.service
sudo systemctl status metabase.service
```

برای مشاهدهٔ زندهٔ لاگ‌های سرویس متابیس، می‌توانید دستور زیر را اجرا کنید:

```sh
journalctl -fxeu metabase.service
```

وقتی مطمئن شدید همه‌چیز درست کار می‌کند، سرویس را طوری فعال کنید که در هر بوت به‌طور خودکار شروع شود:

```sh
sudo systemctl enable metabase.service
```

## راه‌اندازی، توقف یا راه‌اندازی مجدد متابیس

از این پس هر زمان لازم بود متابیس را راه‌اندازی مجدد، متوقف یا شروع کنید، کافی است از دستورات زیر استفاده کنید:

```sh
sudo systemctl restart metabase.service
sudo systemctl stop metabase.service
sudo systemctl start metabase.service
```
