---
title: رمزنگاری اتصال پایگاه‌داده
redirect_from:
  - /docs/latest/operations-guide/encrypting-database-details-at-rest
---

# رمزنگاری اتصال پایگاه‌داده

متابیس اطلاعات اتصال به پایگاه‌داده‌هایی را که اضافه می‌کنید، در [پایگاه‌دادهٔ اپلیکیشن متابیس](https://www.metabase.com/glossary/application-database) ذخیره می‌کند. برای این‌که اگر شخصی به این پایگاه‌داده دسترسی پیدا کرد نتواند به‌سادگی جزئیات اتصال را بخواند، متابیس می‌تواند این اطلاعات را هنگام ذخیره‌شدن به‌طور خودکار با الگوریتم AES256 + SHA512 رمزنگاری کند و هر زمان لازم شد، در لحظه (on-the-fly) آن‌ها را رمزگشایی کند.

## ساخت کلید رمزنگاری

1. یک کلید محرمانه (Secret key) بسازید که حداقل ۱۶ کاراکتر داشته باشد (هرچه طولانی‌تر، امن‌تر). پیشنهاد می‌کنیم از یک مولّد امن تصادفی مثل `openssl` استفاده کنید.
   > بدون این کلید، امکان رمزگشایی جزئیات اتصال وجود ندارد. اگر این کلید را گم کنید (یا عوض کنید)، باید تمام جزئیات اتصالی را که با این کلید رمز شده‌اند در بخش ادمین دوباره تنظیم کنید.
2. این کلید را به‌صورت متغیر محیطی `MB_ENCRYPTION_SECRET_KEY` تنظیم کنید. در پلن‌های self-hosted [Pro و Enterprise](https://www.metabase.com/pricing/) می‌توانید این مقدار را از طریق [فایل تنظیمات](../configuring-metabase/config-file.md) هم تنظیم کنید.

### نمونه دستورات برای ساخت و افزودن کلید

1. می‌توانید با `openssl` یک کلید ۳۲ کاراکتری تصادفی و رمزنگاری‌شده تولید کنید:

```sh
openssl rand -base64 32
```

2. کلید تولیدشده را کپی کنید؛ خروجی چیزی شبیه این خواهد بود:

```txt
IYqrSi5QDthvFWe4/WdAxhnra5DZC3RKx3ZSrOJDKsM=
```

3. کلید را به‌صورت متغیر محیطی تنظیم کنید و متابیس را مثل همیشه اجرا کنید:

```sh
MB_ENCRYPTION_SECRET_KEY="IYqrSi5QDthvFWe4/WdAxhnra5DZC3RKx3ZSrOJDKsM=" \
  java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

به‌محض این‌که مقدار `MB_ENCRYPTION_SECRET_KEY` را تنظیم کنید، متابیس جزئیات اتصال هر پایگاه‌دادهٔ جدیدی را که اضافه می‌کنید به‌طور خودکار رمزنگاری و ذخیره می‌کند. برای رمزنگاری اتصال‌های موجود، بخش بعدی را ببینید.

## رمزنگاری اتصال‌های موجود

اگر قبل از تنظیم `MB_ENCRYPTION_SECRET_KEY` پایگاه‌داده‌هایی را به متابیس اضافه کرده‌اید، می‌توانید با رفتن به صفحهٔ هر پایگاه‌داده در **Admin settings > Databases** و کلیک روی دکمهٔ **Save** جزئیات اتصال آن را رمزنگاری کنید. پایگاه‌داده‌هایی که هنوز جزئیات اتصال‌شان رمز نشده، همچنان به‌طور عادی کار خواهند کرد.

## چرخش (Rotation) کلید رمزنگاری

1. توصیه می‌کنیم قبل از چرخش کلید، از داده‌های خود [بک‌آپ](../installation-and-operation/backing-up-metabase-application-data.md) بگیرید.
2. اجرای متابیس را متوقف کنید.
3. دستور CLI `rotate-encryption-key` را اجرا کنید:
   - کلید فعلی را به‌صورت متغیر محیطی `MB_ENCRYPTION_SECRET_KEY` تنظیم کنید.
   - کلید جدید را به‌عنوان پارامتر دستور قرار دهید.

### نمونه دستور برای چرخش کلید

```sh
MB_ENCRYPTION_SECRET_KEY=your-current-key \
  java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar \
  rotate-encryption-key new-key
```

## غیرفعال‌کردن رمزنگاری (حذف کلید)

برای غیرفعال‌کردن کلید رمزنگاری، مراحل [چرخش کلید](#rotating-an-encryption-key) را تکرار کنید، اما این‌بار به‌جای کلید جدید، یک رشتهٔ خالی (`""`) وارد کنید.

### نمونه دستور برای غیرفعال‌کردن کلید

```sh
MB_ENCRYPTION_SECRET_KEY="your-current-key" \
  java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar \
  rotate-encryption-key ""
```
