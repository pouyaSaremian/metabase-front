---
title: اجرای متابیس روی Podman
redirect_from:
  - /docs/latest/operations-guide/running-metabase-on-podman
---

# اجرای متابیس روی Podman

ایمیج رسمی Docker متابیس با هر سیستمی که [Podman](https://podman.io) روی آن نصب است سازگار است.

## راه‌اندازی سریع نسخهٔ متن‌باز

با فرض این‌که [Podman](https://podman.io) را نصب و اجرا کرده‌اید، آخرین ایمیج کانتینر را دریافت کنید:

```sh
podman pull docker.io/metabase/metabase:latest
```

سپس کانتینر متابیس را اجرا کنید:

```sh
podman run -d -p 3000:3000 --name=metabase docker.io/metabase/metabase:latest
```

این دستور به‌صورت پیش‌فرض یک سرور متابیس را روی پورت ۳۰۰۰ راه‌اندازی می‌کند.

اختیاری: برای دیدن لاگ‌های راه‌اندازی نسخهٔ متن‌باز متابیس، این دستور را اجرا کنید:

```sh
podman logs -f metabase
```

بعد از اتمام راه‌اندازی، می‌توانید نسخهٔ متن‌باز متابیس را در آدرس `http://localhost:3000` ببینید.

برای اجرای متابیس متن‌باز روی پورتی دیگر، مثلاً پورت ۱۲۳۴۵:

```sh
podman run -d -p 12345:3000 --name=metabase docker.io/metabase/metabase:latest
```

## راه‌اندازی سریع نسخهٔ Pro یا Enterprise

اگر برای یکی از نسخه‌های [Pro یا Enterprise](https://www.metabase.com/pricing/) متابیس یک [توکن لایسنس](../installation-and-operation/activating-the-enterprise-edition.md) دارید و می‌خواهید متابیس را به‌صورت محلی روی Podman اجرا کنید، از این راه‌اندازی سریع استفاده کنید.

با فرض این‌که [Podman](https://podman.io) را نصب و اجرا کرده‌اید، آخرین ایمیج نسخهٔ Enterprise را دریافت کنید:

```sh
podman pull docker.io/metabase/metabase-enterprise:latest
```

سپس کانتینر متابیس را اجرا کنید:

```sh
podman run -d -p 3000:3000 --name=metabase docker.io/metabase/metabase-enterprise:latest
```

این دستور یک سرور متابیس را به‌صورت پیش‌فرض روی پورت ۳۰۰۰ راه‌اندازی می‌کند.

اختیاری: برای دیدن لاگ‌ها در حین راه‌اندازی متابیس، این دستور را اجرا کنید:

```sh
podman logs -f metabase
```

پس از اتمام راه‌اندازی، می‌توانید نسخهٔ Pro یا Enterprise متابیس را در آدرس `http://localhost:3000` ببینید.

برای اجرای متابیس Pro یا Enterprise روی پورتی دیگر، مثلاً پورت ۱۲۳۴۵:

```sh
podman run -d -p 12345:3000 --name=metabase docker.io/metabase/metabase-enterprise:latest
```

## نصب برای محیط تولید

متابیس به‌صورت پیش‌فرض همراه با یک پایگاه‌دادهٔ داخلی H2 عرضه می‌شود که داده‌های اپلیکیشن را روی فایل‌سیستم ذخیره می‌کند. یعنی اگر کانتینر را حذف کنید، داده‌های اپلیکیشن متابیس (سؤال‌ها، داشبوردها، کالکشن‌ها و غیره) را از دست خواهید داد.

اگر می‌خواهید متابیس را در محیط Production اجرا کنید، باید داده‌های اپلیکیشن را در یک [پایگاه‌دادهٔ مناسب محیط تولید](./migrating-from-h2.md#supported-databases-for-storing-your-metabase-application-data) ذخیره کنید.

بعد از این‌که دیتابیسی مثل Postgres را برای ذخیرهٔ داده‌های متابیس آماده کردید، کافی است اطلاعات اتصال و اعتبارسنجی را از طریق متغیرهای محیطی به متابیس بدهید.

### اجرای Podman در محیط تولید

فرض کنیم با دستور زیر یک پایگاه‌دادهٔ Postgres ایجاد کرده‌اید:

```sh
createdb metabaseappdb
```

نیازی به ساخت جدول‌ها نیست؛ متابیس در هنگام راه‌اندازی آن‌ها را ایجاد می‌کند. و فرض کنیم این پایگاه‌داده از طریق `my-database-host:5432` با نام کاربری `name` و رمز عبور `password` در دسترس است.

در این صورت، یک مثال از دستور Podman که متابیس را به این دیتابیس متصل می‌کند به شکل زیر است:

```sh
podman run -d -p 3000:3000 \
  -e "MB_DB_TYPE=postgres" \
  -e "MB_DB_DBNAME=metabaseappdb" \
  -e "MB_DB_PORT=5432" \
  -e "MB_DB_USER=name" \
  -e "MB_DB_PASS=password" \
  -e "MB_DB_HOST=my-database-host" \
   --name metabase metabase/metabase
```

به یاد داشته باشید متابیس از **داخل** کانتینر Podman به پایگاه‌داده متصل می‌شود؛ بنابراین مطمئن شوید یا از hostname کامل (FQDN) استفاده می‌کنید، یا این‌که یک ورودی مناسب در فایل `/etc/hosts` کانتینر قرار داده‌اید.

## نگه‌داری و پیکربندی تکمیلی Podman

- [اجرای متابیس به‌عنوان سرویس](#running-metabase-as-a-service)
- [سفارشی‌سازی سرور Jetty متابیس](#customizing-the-metabase-jetty-server)
- [تنظیم منطقهٔ زمانی جاوا](#setting-the-java-timezone)
- [عیب‌یابی](#troubleshooting)
- [ادامهٔ راه‌اندازی](#continue-to-setup)

### اجرای متابیس به‌عنوان سرویس

می‌توانیم از سرویس init مبتنی بر [systemd](https://systemd.io/) برای ثبت یک سرویس متابیس استفاده کنیم که به‌صورت خودکار start و stop شود. پیش از انجام این فرایند، مطمئن شوید کانتینر متابیس در حال اجرا است. سپس از قابلیت داخلی Podman برای تولید فایل سرویس استفاده کنید:

```sh
sudo podman generate systemd --new --name metabase > metabase.service
```

قبل از اجرای سرویس، محتوای فایل `metabase.service` را بررسی کنید تا مطمئن شوید تنظیمات درست هستند. سپس فایل سرویس را به مسیر مناسب منتقل کنید:

```sh
sudo mv metabase.service /etc/systemd/system
```

برای فعال‌سازی آغاز خودکار سرویس متابیس هنگام بوت سیستم، دستور زیر را اجرا کنید:

```sh
sudo systemctl enable metabase
```

برای اطمینان از صحت عملکرد، سیستم را ریبوت کنید. پس از بالا آمدن سیستم، کانتینر متابیس باید طبق انتظار در حال اجرا باشد.

### سفارشی‌سازی سرور Jetty متابیس

می‌توانید هر یک از تنظیمات سفارشی [سرور وب Jetty متابیس](../configuring-metabase/customizing-jetty-webserver.md) را با تنظیم متغیرهای محیطی در دستور `podman run` اعمال کنید.

### تنظیم منطقهٔ زمانی جاوا

بهتر است منطقهٔ زمانی Java را مطابق منطقهٔ زمانی دلخواه برای گزارش‌ها تنظیم کنید. این کار را می‌توانید با متغیر محیطی `JAVA_TIMEZONE` انجام دهید که توسط اسکریپت راه‌اندازی متابیس خوانده می‌شود. برای مثال:

```sh
podman run -d -p 3000:3000 \
  -e "JAVA_TIMEZONE=US/Pacific" \
  --name metabase metabase/metabase
```

## عیب‌یابی

برای نکات بیشتر، به بخش Running Metabase در [راهنمای عیب‌یابی](../troubleshooting-guide/running.md) مراجعه کنید.

## ادامهٔ راه‌اندازی

حالا که متابیس را روی Podman نصب کرده‌اید، نوبت آن است که [آن را راه‌اندازی و به پایگاه‌دادهٔ خود متصل کنید](../configuring-metabase/setting-up-metabase.md).
