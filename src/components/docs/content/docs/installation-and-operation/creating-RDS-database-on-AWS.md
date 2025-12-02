---
title: "ساخت پایگاه‌داده RDS روی AWS"
redirect_from:
  - /docs/latest/operations-guide/creating-RDS-database-on-AWS
---

# ساخت پایگاه‌داده RDS روی AWS

اگر می‌خواهید از استفادهٔ آزمایشی از متابیس فراتر بروید و آن را در محیط جدی‌تری برای تولید (Production) به کار بگیرید، بهترین کار این است که برای پایگاه‌دادهٔ اپلیکیشن متابیس از PostgreSQL استفاده کنید. در تصویر زیر، معماری کلی استقرار متابیس با یک پایگاه‌دادهٔ اپلیکیشن اختصاصی را می‌بینید:

![high level architecture diagram](images/Metabase-AWS-SI.png)

## ایجاد پایگاه‌داده

در AWS، در نوار جستجو عبارت RDS را وارد کنید یا از منوی کشویی بالا سمت چپ صفحه، سرویس **RDS** را انتخاب کنید. پس از ورود به RDS، روی دکمهٔ **Create database** کلیک کنید.

نوع موتور پایگاه‌داده را روی PostgreSQL قرار دهید. در این راهنما، از آخرین نسخهٔ موجود در AWS در زمان نگارش (۱۲.۴-R1) استفاده می‌کنیم.

**Templates**: می‌توانید گزینهٔ **Production** را روی مقدار پیش‌فرض نگه دارید یا الگوی دیگری را که با نیازهای شما بهتر سازگار است انتخاب کنید.

**Settings**: یک **DB instance identifier** (شناسهٔ نمونهٔ پایگاه‌داده) منحصربه‌فرد برای پایگاه‌دادهٔ خود وارد کنید. همچنین نام کاربری و رمز عبور اصلی (master password) را یادداشت کنید، چون برای تنظیم متغیرهای محیطی در متابیس به آن‌ها نیاز خواهید داشت.

![RDS Templates Section](images/RDSPostgresSettings.png)

**Instance size**: اندازهٔ نمونهٔ RDS بستگی به تعداد نمونه‌های متابیس متصل به این پایگاه‌داده، تعداد کاربران هم‌زمان متابیس و تعداد سؤال‌ها، داشبوردها و تنظیمات ذخیره‌شده دارد. برای شروع، سایز `t3.small` انتخاب مناسبی است.

![RDS Instance size](images/RDSInstanceSize.png)

**Availability & Durability**: در استقرارهای تولیدی، **به‌شدت توصیه می‌شود** از یک کلاستر Multi‑AZ (چند منطقهٔ دسترس‌پذیری) استفاده کنید تا اگر در یکی از Availability Zoneها مشکلی پیش آمد، پایگاه‌داده همچنان در دسترس بماند.

![RDS MultiAZ](images/RDSMultiAZ.png)

**Connectivity**:

- مطمئن شوید که پایگاه‌داده را در همان VPCای مستقر می‌کنید که نمونه یا نمونه‌های متابیس را در آن مستقر کرده‌اید؛ در غیر این صورت این دو نمی‌توانند یکدیگر را ببینند.
- یک **VPC security group** ایجاد کنید، چون باید دسترسی از نمونه‌های متابیس به پایگاه‌داده را روی پورتی که به اتصالات گوش می‌دهد، در این security group مجاز کنید.
  ![RDS VPC Security Groups](images/RDSVPCSecurityGroup.png)

**Additional configuration**:

- مقدار **Initial database name** را روی `metabase` قرار دهید. متابیس از این پایگاه‌داده برای ذخیرهٔ همهٔ تنظیمات و متادیتای خود استفاده می‌کند.
- می‌توانید بازهٔ زمانی تهیهٔ بک‌آپ (backup window) را نیز تنظیم کنید تا در صورت نیاز در آینده بتوانید نسخه‌های پشتیبان را بازیابی کنید.

![RDS Initial Database](images/RDSInitialDatabase.png)

پس از تکمیل همهٔ این تنظیمات، روی دکمهٔ **Create database** در پایین سمت راست صفحه کلیک کنید و منتظر بمانید تا پایگاه‌داده ایجاد شود (این فرآیند ممکن است چند دقیقه طول بکشد).

## تنظیم امنیت

وقتی وضعیت پایگاه‌داده روی `Available` قرار گرفت، روی شناسهٔ پایگاه‌داده (DB identifier) کلیک کنید:

![RDS DB Identifier](images/RDSDBIdentifier.png)

در صفحه‌ای که پس از کلیک روی شناسهٔ پایگاه‌داده نمایش داده می‌شود، بخش **Connectivity & Security** را در وسط صفحه می‌بینید. در این بخش می‌توانید **Endpoint** موردنیاز متابیس را برای اتصال به پایگاه‌دادهٔ اپلیکیشن که همین حالا ساختید، پیدا کنید.

![RDS Connection Data](images/RDSConnectionData.png)

در بخش **Security group rules**، Security Group ایجادشده را مشاهده می‌کنید، اما این گروه به‌صورت پیش‌فرض فقط به یک آدرس IP اجازهٔ دسترسی به پایگاه‌داده را می‌دهد.

![RDS Security Group Rules](images/RDSSecurityGroupRules.png)

برای پیکربندی قانون دسترسی پایگاه‌داده، قانون **CIDR/IP - Inbound** را انتخاب کنید، سپس روی زبانهٔ **Inbound rules** در پایین صفحه کلیک کنید.

![RDS Security Group Rules](images/RDSInboundRule.png)

پس از ورود به بخش Inbound Rules، روی دکمهٔ **Edit Inbound Rules** در سمت راست این بخش کلیک کنید.

![RDS Edit Inbound Rule](images/RDSEditInboundRule.png)

در صفحهٔ ویرایش قوانین، آدرس IP پیش‌فرض را حذف کنید و به‌جای آن Security Group مربوط به سروری را که متابیس روی آن اجرا می‌شود اضافه کنید (نام این Security Group معمولاً شامل عبارت `AWSEBSecurityGroup` است). پس از اضافه‌کردن این Security Group، روی دکمهٔ **Save rules** کلیک کنید.

![RDS Edit Inbound Rule](images/RDSEditInboundRuleSG.png)

## افزودن نمونهٔ RDS به‌عنوان پایگاه‌دادهٔ اپلیکیشن با استفاده از متغیرهای محیطی

پس از اتمام همهٔ مراحل بالا، به استقرار متابیس خود بروید و نمونهٔ RDS را با استفاده از [متغیرهای محیطی](../configuring-metabase/environment-variables.md) به‌عنوان Application Database متابیس پیکربندی کنید.
