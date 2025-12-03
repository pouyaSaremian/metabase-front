---
title: اجرای متابیس روی AWS Elastic Beanstalk
redirect_from:
  - /docs/latest/operations-guide/running-metabase-on-elastic-beanstalk
  - /docs/latest/installation-and-operation/advanced-topics-for-running-Metabase-in-AWS-ElasticBeanstalk
  - /docs/latest/operations-guide/advanced-topics-for-running-Metabase-in-AWS-ElasticBeanstalk
---

# اجرای متابیس روی AWS Elastic Beanstalk

> به‌دلیل مشکلات این پلتفرم، دیگر توصیه نمی‌کنیم در محیط Production متابیس را روی Elastic Beanstalk اجرا کنید.

اگر در حال حاضر متابیس را روی Elastic Beanstalk اجرا می‌کنید، پیشنهاد ما این است که به معماری دیگری مهاجرت کنید.

## جایگزین‌های Elastic Beanstalk

### Metabase Cloud

به‌طور طبیعی، گزینهٔ پیشنهادی ما [Metabase Cloud](https://www.metabase.com/pricing/) است.

### استقرارهای self‑hosted

می‌توانید متابیس را با استفاده از PostgreSQL یا MySQL به‌عنوان پایگاه‌دادهٔ اپلیکیشن راه‌اندازی کنید و آن را روی سروری که خودتان پایش (monitor) می‌کنید — چه روی سخت‌افزار خودتان و چه روی یک ارائه‌دهندهٔ ابری — اجرا کنید.

حداقل کاری که باید انجام دهید این است که از پایگاه‌دادهٔ اپلیکیشن به‌طور منظم (و همیشه قبل از ارتقا) بک‌آپ بگیرید و مطابق سیاست‌های سازمان برای امنیت، مانیتورینگ و دسترس‌پذیری عمل کنید.

### خدمات حرفه‌ای

اگر برای راه‌اندازی متابیس (یا به‌طور کلی ساختن data stack) به کمک نیاز دارید، می‌توانید به [خدمات حرفه‌ای متابیس](https://www.metabase.com/product/professional-services) نگاهی بیندازید.

## جدا کردن دیتابیس RDS از استقرار Elastic Beanstalk

اگر برای ذخیرهٔ داده‌های اپلیکیشن متابیس از سرویس Relational Database Service (RDS) آمازون استفاده می‌کنید، می‌توانید همچنان از همان دیتابیس استفاده کنید (حتی اگر متابیس را از Elastic Beanstalk به جای دیگری منتقل کنید). کافی است با استفاده از [متغیرهای محیطی](../configuring-metabase/environment-variables.md) متابیس را طوری تنظیم کنید که از محل جدیدش به این RDS متصل شود.

### اطلاع‌رسانی دربارهٔ زمان قطعی

این فرایند باعث ایجاد Downtime می‌شود، پس حتماً به کاربران اطلاع دهید که متابیس برای مدتی در دسترس نخواهد بود تا محیط جدید را با دیتابیس جداگانه بازسازی کنید.

### گرفتن Snapshot از پایگاه‌دادهٔ اپلیکیشن

> برای این کار به نام کاربری و رمز عبور master دیتابیس که هنگام ساخت نمونهٔ Elastic Beanstalk استفاده کرده‌اید نیاز دارید.

ابتدا Endpoint مربوط به RDS که توسط Elastic Beanstalk استفاده می‌شود را پیدا کنید؛ برای این کار به تنظیمات Environment بروید و مقدار Endpoint را در بخش Database پیدا کنید.

![RDS endpooint](images/EBDatabaseEndpoint.png)

- If Retention is "Create snapshot", you're good to go. You can delete the whole Elastic Beanstalk environment, because AWS will take a snapshot (backup) of the database before deleting the environment.
- If Retention has a different value, visit your RDS instance and take a snapshot of the database used by the Elastic Beanstalk application.

  ![RDS snapshot](images/RDSTakeSnapshot.png)

### خاتمه‌دادن به محیط Elastic Beanstalk همراه با Snapshot

به اپلیکیشن Elastic Beanstalk متابیس بروید، محیط در حال اجرا را انتخاب کنید و آن را Terminate کنید. مطمئن شوید که هنگام حذف محیط، دیتابیس همراه با **Snapshot** نگه داشته می‌شود.

![Terminate environment](images/EBTerminateEnvironment.png)

حذف محیط ممکن است حدود ۲۰ دقیقه طول بکشد. اگر حذف با خطا مواجه شد، باید از طریق CloudFormation تشخیص دهید کدام منابع حذف نشده‌اند و آن‌ها را به‌صورت دستی حذف کنید.

### بازیابی Snapshot

به کنسول RDS برگردید و از منوی سمت چپ، گزینهٔ **Snapshots** را انتخاب کنید. در این‌جا باید Snapshotی را که گرفته‌اید ببینید.

![RDS Snapshots](images/RDSSnapshotsMenu.png)

Snapshot را انتخاب کنید و روی **Actions > Restore Snapshot** کلیک کنید.

از این مرحله به بعد می‌توانید مطابق راهنمای [پیکربندی RDS برای متابیس](./creating-RDS-database-on-AWS.md) عمل کنید.

## ارتقای استقرار Elastic Beanstalk

اگر همچنان می‌خواهید روی Elastic Beanstalk بمانید، می‌توانید با مراحل زیر متابیس را به نسخه‌های جدید ارتقا دهید:

1. [آخرین فایل Artifact منتشرشده برای Beanstalk](https://downloads.metabase.com/v0.47.2/metabase-aws-eb.zip) را دانلود کنید.
2. فایل را از حالت فشرده خارج کنید.
3. فایل `Dockerrun.aws.json` را ویرایش کرده و Tag ایمیج را به آخرین نسخهٔ موجود تغییر دهید. از استفاده از `:latest` خودداری کنید و یک نسخهٔ مشخص (شماره نسخه) قرار دهید.
4. دوباره محتوا را فشرده کنید.
5. فایل ZIP را به‌عنوان یک نسخهٔ جدید Beanstalk در AWS آپلود کنید.
6. محیط خود را به این نسخهٔ جدید ارتقا دهید.

به‌خاطر داشته باشید اگر از نسخهٔ Pro یا Enterprise متابیس استفاده می‌کنید، باید از مخزن `metabase/metabase-enterprise` به‌جای `metabase/metabase` استفاده کنید.
