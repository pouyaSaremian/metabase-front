---
title: "اتصال به سرویس پایگاه‌داده رابطه‌ای AWS (RDS)"
redirect_from:
  - /docs/latest/administration-guide/databases/aws-rds
---

# اتصال به سرویس پایگاه‌داده رابطه‌ای AWS (RDS)

RDS چند نوع پایگاه‌داده ارائه می‌کند که متابیس به‌صورت رسمی از آن‌ها پشتیبانی می‌کند، از جمله PostgreSQL، MySQL، MariaDB، Oracle و SQL Server.

در اینجا می‌بینید چطور اطلاعات اتصال برای پایگاه‌داده‌های روی Amazon RDS را به دست بیاورید:

1. به AWS Management Console خود بروید.  
   - برای پیدا کردنش کمک می‌خواهید؟ به آدرس `https://**My_AWS_Account_ID**.signin.aws.amazon.com/console` بروید. فقط حواستان باشد که **AWS Account ID خودتان** را جایگزین کنید!
2. به مسیر **Database** > **RDS** > **Instances** بروید.
3. نمونهٔ پایگاه‌داده‌ای را که می‌خواهید به متابیس وصل کنید انتخاب کنید.
4. اطلاعات لازم برای اتصال متابیس به RDS را بردارید:
   - **Hostname**: این مقدار به‌عنوان پارامتر Endpoint درج شده است.
   - **Port**: پارامتر port را زیر بخش Security and Network پیدا کنید.
   - **Username**: این مقدار زیر Configuration Details قرار دارد.
   - **Database Name**: این هم در بخش Configuration Details قرار دارد.
   - **Password**: رمز عبور را از مدیر پایگاه‌داده خود بگیرید.

## مسیریابی پایگاه‌داده

[Database routing](../../permissions/database-routing.md) را ببینید.

