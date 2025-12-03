---
title: عیب‌یابی متابیس روی Docker
---

# عیب‌یابی متابیس روی Docker

Docker بسیاری از جنبه‌های اجرای متابیس را ساده می‌کند، اما برخی مشکلات وجود دارد که باید در نظر داشته باشید. اگر با متابیس تحت Docker مشکل دارید، سعی کنید فرآیند عیب‌یابی زیر را انجام دهید، سپس برای جزئیات دربارهٔ مشکل خاصی که پیدا کرده‌اید به زیر نگاه کنید.

1. آیا container در حال اجرا است؟
2. آیا سرور درون container در حال اجرا است؟
3. آیا متابیس از پایگاه داده اپلیکیشن صحیح استفاده می‌کند؟
4. آیا می‌توانید به Docker host روی port متابیس متصل شوید؟
5. آیا می‌توانید از Docker host به container متصل شوید؟
6. آیا می‌توانید از درون container به سرور متصل شوید؟

ممکن است این دستورات در طول مسیر مفید باشند. برای رسیدن به shell در container متابیس:

```
docker exec -ti CONTAINER_NAME bash
```

و برای دریافت لاگ‌ها برای container متابیس:

```
docker logs -f CONTAINER_NAME
```

## Container متابیس بدون راه‌اندازی سرور خارج می‌شود

**نحوهٔ تشخیص این:** `docker ps` را اجرا کنید تا ببینید آیا container متابیس در حال حاضر در حال اجرا است. اگر هست، به مرحله بعد بروید.

اگر `docker ps` container در حال اجرا را نشان نمی‌دهد، سپس containerهای متوقف شده را با اجرای این فهرست کنید:

```
docker ps -a | grep metabase/metabase
```

به دنبال containerی که اخیراً خارج شده است بگردید و ID container را یادداشت کنید. لاگ‌های آن container را با این ببینید:

```
Docker logs CONTAINER_ID
```

## Container متابیس در حال اجرا است اما سرور نیست

**نحوهٔ تشخیص این:** `docker ps` را اجرا کنید تا مطمئن شوید container در حال اجرا است. سرور باید به لاگ‌های Docker container لاگ می‌کند. این را با اجرای این بررسی کنید:

```
docker logs CONTAINER_NAME
```

باید یک خط مثل این در ابتدا ببینید:

```
05-10 18:11:32 INFO metabase.util :: Loading Metabase...
```

پایین‌تر، باید در نهایت یک خط مثل این ببینید:

```
05-10 18:12:30 INFO metabase.core :: Metabase Initialization COMPLETE
```

اگر خطوط زیر را می‌بینید:

```
05-15 19:07:11 INFO metabase.core :: Metabase Shutting Down ...
05-15 19:07:11 INFO metabase.core :: Metabase Shutdown COMPLETE
```

پس متابیس خودش را خاموش کرده است.

**نحوهٔ رفع این:** لاگ‌های Docker container را برای خطاهای مربوط به اتصال به پایگاه داده اپلیکیشن بررسی کنید. لاگ‌ها را تماشا کنید تا ببینید آیا متابیس هنوز در حال راه‌اندازی است؛ دستور:

```
Docker logs -f CONTAINER_ID
```

به شما امکان می‌دهد لاگ‌ها را همانطور که چاپ می‌شوند ببینید.

اگر container قبل از اینکه راه‌اندازی تمام شود خاتمه می‌یابد، مشکل می‌تواند یک health check timeout در سرویس orchestration استفاده‌شده برای راه‌اندازی container باشد، مثل Docker Cloud.

اگر container از خارج خاتمه نمی‌یابد، اما به هر حال راه‌اندازی نمی‌شود، این مشکل احتمالاً خاص Docker نیست. اگر از یک image ارائه‌شده توسط متابیس استفاده می‌کنید، لطفاً [یک issue GitHub باز کنید](https://github.com/metabase/metabase/issues/new/choose).

## عدم اتصال به یک پایگاه داده اپلیکیشن remote

**نحوهٔ تشخیص این:** اگر این یک instance متابیس جدید است، پس پایگاه داده‌ای که از طریق متغیرهای محیطی مشخص کرده‌اید خالی خواهد بود. اگر این یک instance متابیس موجود با پارامترهای محیطی اشتباه است، سرور یک پایگاه داده H2 embedded جدید برای استفاده برای داده اپلیکیشن ایجاد می‌کند و خطوط مشابه این‌ها را در لاگ می‌بینید:

```
05-10 18:11:40 INFO metabase.core :: Setting up and migrating Metabase DB. Please sit tight, this may take a minute...
05-10 18:11:40 INFO metabase.db :: Verifying h2 Database Connection ...

05-10 18:11:40 INFO metabase.db :: Verify Database Connection ...  ✅
```

**نحوهٔ رفع این:** بررسی کنید که environmentها را به Docker به‌درستی ارسال می‌کنید. می‌توانید متغیرهای محیطی برای یک container را با این دستور فهرست کنید:

```
docker inspect some-postgres -f '{% raw %}{{ .Config.Env }}{% endraw %}'
```

## سرور متابیس نمی‌تواند به یک پایگاه داده MySQL یا PostgreSQL متصل شود

**نحوهٔ تشخیص این:** لاگ‌ها برای Docker container یک پیام خطا بعد از خط "Verifying Database Connection" برمی‌گردانند.

**نحوهٔ رفع این:** سعی کنید با استفاده از دستور `mysql` یا `psql` با پارامترهای connection string که [از طریق متغیرهای محیطی][configuring-application-database] ارسال می‌کنید متصل شوید. اگر نمی‌توانید به پایگاه داده متصل شوید، مشکل به دلیل اعتبارنامه‌ها یا connectivity است. برای تأیید اینکه اعتبارنامه‌ها صحیح هستند، با آن اعتبارنامه‌ها از یک ماشین دیگر وارد شوید و سپس سعی کنید همان اتصال را از host اجراکننده Docker container برقرار کنید.

یک راه آسان برای اجرای این استفاده از Docker برای راه‌اندازی یک container است که کلاینت مناسب برای پایگاه داده شما را دارد. برای Postgres این شبیه این خواهد بود:

```
docker run --name postgres-client --rm -ti --entrypoint /bin/bash postgres
```

از درون آن container، سعی کنید با استفاده از دستور کلاینت در container مثل `psql` به database host متصل شوید. اگر می‌توانید از container دیگری روی همان host متصل شوید، سپس سعی کنید آن اتصال را از درون container Docker متابیس خود برقرار کنید:

```
docker exec -ti container-name bash
```

همچنین می‌توانید سعی کنید با استفاده از دستور `nc` به database host متصل شوید و بررسی کنید که آیا اتصال می‌تواند باز شود:

```
nc -v your-db-host 5432
```

این مراحل به شما کمک می‌کند تعیین کنید که آیا مشکل با شبکه یا احراز هویت است.

## پایگاه داده اپلیکیشن متابیس persist نمی‌شود

**نحوهٔ تشخیص این:** این اتفاق می‌افتد اگر هر بار که اپلیکیشن را راه‌اندازی می‌کنید صفحه Setup را دریافت می‌کنید. رایج‌ترین علت این است که به Docker container یک mount filesystem پایدار برای قرار دادن پایگاه داده اپلیکیشن نمی‌دهید.

**نحوهٔ رفع این:** مطمئن شوید که به container یک [volume پایدار][persistent-volume] می‌دهید.

## port داخلی به‌درستی remap نمی‌شود

**نحوهٔ تشخیص این:** `docker ps` را اجرا کنید و به port mapping نگاه کنید، سپس `curl http://localhost:port-number-here/api/health` را اجرا کنید. این باید یک پاسخ JSON که شبیه این است برگرداند:

```
{"status":"ok"}
```

**نحوهٔ رفع این:** مطمئن شوید که `-p 3000:3000` یا port remapping مشابه را در دستور `docker run` که برای راه‌اندازی container image متابیس استفاده می‌کنید شامل کنید.

## متابیس نمی‌تواند به/از یک فایل یا دایرکتوری بنویسد یا بخواند

**نحوهٔ تشخیص این:** یک پیام در لاگ‌ها به‌وضوح یک IOError یا "Permission denied" از Java، یا خطاها از SQLite شامل `org.sqlite.core.NativeDB._open_utf8` را نشان می‌دهد.

**نحوهٔ رفع این:** اطمینان حاصل کنید که کاربری که متابیس را اجرا می‌کند مجوز خواندن و نوشتن به فایل یا دایرکتوری را دارد:

- اگر متابیس را به‌عنوان یک فایل JAR در ماشین یا سرور محلی خود اجرا می‌کنید، کاربری که فرآیند Java را اجرا می‌کند را بررسی کنید.
- اگر متابیس را از container Docker اجرا می‌کنید، مطمئن شوید که از دایرکتوری `/metabase.db` استفاده می‌کنید.

اگر متابیس را از JAR در هر سیستم عامل Unix-like اجرا می‌کنید، می‌توانید ببینید کدام کاربر متابیس را اجرا می‌کند با باز کردن یک terminal و تایپ کردن `ps -uA | grep metabase`.

[configuring-application-database]: ../installation-and-operation/configuring-application-database.md
[persistent-volume]: ../installation-and-operation/running-metabase-on-docker.md#mounting-a-mapped-file-storage-volume
