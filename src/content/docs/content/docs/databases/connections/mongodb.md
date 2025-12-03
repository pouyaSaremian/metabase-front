---
title: MongoDB
redirect_from:
  - /docs/latest/administration-guide/databases/mongodb
---

# MongoDB

برای اضافه کردن یک اتصال پایگاه‌داده، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و به **Admin settings** > **Databases** > **Add a database** بروید.

## نسخه‌های پشتیبانی‌شده

متابیس از قدیمی‌ترین نسخهٔ تحت پشتیبانی MongoDB تا آخرین نسخهٔ پایدار آن پشتیبانی می‌کند. [MongoDB Software Lifecycle Schedules](https://www.mongodb.com/legal/support-policy/lifecycles) را ببینید.

## اتصال به MongoDB

دو راه برای اتصال به MongoDB وجود دارد:

1. استفاده از [فیلدهایی که متابیس برای وارد کردن جزئیات اتصال فراهم می‌کند](#استفاده-از-فیلدهای-metabase).
2. چسباندن [connection string](#استفاده-از-connection-string).

### استفاده از فیلدهای Metabase

روش پیش‌فرض برای اتصال به MongoDB این است که جزئیات اتصال را در فیلدهایی که متابیس فراهم کرده وارد کنید:

- Host
- Database name
- Port
- Username
- Password
- Authentication Database (اختیاری)
- Additional connection string options (اختیاری)

همچنین می‌توانید گزینهٔ **Use a secure connection (SSL)** را فعال کنید. SSL را روشن کنید و محتوای زنجیرهٔ گواهی SSL سرور را در کادر متنی paste کنید. این گزینه فقط در همین روش اتصال در دسترس است (یعنی وقتی از connection string استفاده می‌کنید، نمی‌توانید گواهی را داخل رشته قرار دهید).

### تنظیمات پیشرفته برای اتصال مستقیم

- **Use DNS SRV when connecting**: استفاده از این گزینه نیاز دارد که مقداری که برای host می‌دهید یک FQDN باشد. اگر به یک کلاستر Atlas وصل می‌شوید، ممکن است لازم باشد این گزینه را روشن کنید. اگر نمی‌دانید یعنی چه، این گزینه را غیرفعال بگذارید.

### استفاده از connection string

اگر ترجیح می‌دهید با استفاده از یک [connection string](https://docs.mongodb.com/manual/reference/connection-string/) به MongoDB وصل شوید، روی **Paste a connection string** کلیک کنید. رابط متابیس با یک فیلد برای paste کردن connection string به‌روزرسانی می‌شود.

در حال حاضر متابیس از پارامترهای زیر در connection string پشتیبانی **نمی‌کند**:

- `tlsCertificateKeyFile`
- `tlsCertificateKeyFilePassword`
- `tlsCAFile`

اگر باید از گواهی (certificate) استفاده کنید، از [روش پیش‌فرض](#استفاده-از-فیلدهای-metabase) استفاده کنید و **Use a secure connection (SSL)** را فعال کنید.

### تنظیمات مشترک بین هر دو روش اتصال

- **Use an SSH tunnel**: بعضی نصب‌های پایگاه‌داده فقط از طریق یک SSH bastion host قابل دسترسی هستند. این گزینه وقتی VPN دردسترس نیست، یک لایهٔ امنیتی اضافه فراهم می‌کند. فعال کردن این گزینه معمولاً کندتر از اتصال مستقیم است.
- **Rerun queries for simple exploration**: وقتی این گزینه روشن باشد، متابیس هنگام اکتشاف سادهٔ داده (استفاده از دکمه‌های Summarize و Filter در هنگام مشاهدهٔ جدول یا نمودار) به‌طور خودکار کوئری‌ها را اجرا می‌کند. اگر پرس‌وجو روی این پایگاه‌داده کند است، می‌توانید این گزینه را خاموش کنید. این تنظیم روی drill-throughها یا پرس‌وجوهای SQL تأثیر نمی‌گذارد.
- **Choose when syncs and scans happen**: [sync و scan](../sync-scan.md#choose-when-syncs-and-scans-happen) را ببینید.
- **Periodically refingerprint tables**: این تنظیم (که به‌طور پیش‌فرض غیرفعال است) باعث می‌شود متابیس هنگام sync مقادیر اضافی فیلدها را اسکن کند و هوشمندی بیشتری مثل auto-binning بهتر روی نمودارهای میله‌ای ارائه دهد.

## اتصال به کلاستر MongoDB Atlas

### قرار دادن IPها در whitelist

اگر از Metabase Cloud استفاده می‌کنید، باید [آدرس‌های IP متابیس‌کلود](../../cloud/ip-addresses-to-whitelist.md) را در کلاستر Atlas خود whitelist کنید. اگر متابیس را خودتان میزبانی کرده‌اید (self-hosted)، باید IP سروری را که متابیس روی آن اجرا می‌شود whitelist کنید.

1. وارد [کلاستر Atlas](https://cloud.mongodb.com) خود شوید.
2. به **Network Access** بروید.
3. آدرس‌های IPای که متابیس برای اتصال استفاده می‌کند را اضافه کنید.

### اتصال متابیس به کلاستر Atlas

> connection stringی که در رابط "Connect" در Atlas به شما نشان داده می‌شود، نام پایگاه‌داده را شامل نمی‌شود. متابیس برای اتصال نیاز دارد که نام پایگاه‌داده را مشخص کنید، بنابراین باید connection string را ویرایش کنید و نام دیتابیس را اضافه کنید.

1. وارد [حساب Atlas](https://cloud.mongodb.com) خود شوید.
2. کلاستری را که می‌خواهید به آن وصل شوید انتخاب کنید و روی **Connect** کلیک کنید.

   ![Your cluster screengrab](../images/atlas-connect.png)

3. **Drivers** را انتخاب کنید.
4. connection string را از بخش **Add your connection string into your application code** کپی کنید.

   ![Connect screengrab](../images/connection-string.png)

5. در متابیس به Admin -> Databases بروید و روی دکمهٔ **Add database** کلیک کنید.
6. از منوی کشویی، MongoDB را انتخاب کنید و یک **Display name** برای این پایگاه‌داده وارد کنید.
7. روی **"Paste the connection string"** کلیک کنید و connection string خود را paste کنید.
8. connection string را طوری ویرایش کنید که نام پایگاه‌داده بعد از `/` بیاید:

   ```
   mongodb+srv://metabot:metapass@my-test-cluster.a5ej7.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority&appName=my-test-cluster
   ```

اگر برای کلاستر Atlas خود به‌جای connection string از فیلدهای متابیس برای وارد کردن اطلاعات اتصال استفاده می‌کنید، ممکن است لازم باشد گزینهٔ **Use DNS SRV when connecting** را روشن کنید.

برای اطلاعات بیشتر، [گزینه‌های پیشرفته](#تنظیمات-مشترک-بین-هر-دو-روش-اتصال) را ببینید.

## پیکربندی SSL از طریق خط فرمان

می‌توانید یک گواهی self-signed را از طریق رابط متابیس وارد کنید (البته نه زمانی که از connection string استفاده می‌کنید)، یا می‌توانید از خط فرمان برای اضافه کردن گواهی self-signed استفاده کنید.

```bash
cp /usr/lib/jvm/default-jvm/jre/lib/security/cacerts ./cacerts.jks
keytool -import -alias cacert -storepass changeit -keystore cacerts.jks -file my-cert.pem
```

سپس متابیس را با استفاده از همین keystore راه‌اندازی کنید:

```bash
java -Djavax.net.ssl.trustStore=cacerts.jks -Djavax.net.ssl.trustStorePassword=changeit -jar metabase.jar
```

برای اطلاعات بیشتر، [مستندات پیکربندی SSL در MongoDB](https://mongodb.github.io/mongo-java-driver/3.0/driver/reference/connecting/ssl/) را ببینید.

## متابیس چطور داده‌ها را در MongoDB sync می‌کند

چون MongoDB دادهٔ غیرساخت‌یافته (unstructured) نگه می‌دارد، متابیس برای sync کردن متادیتای پایگاه‌دادهٔ شما رویکرد متفاوتی دارد. برای این‌که یک دید کلی از schema بگیرد، متابیس اولین و آخرین ۵۰۰ سند (document) را کوئری می‌زند (بیشتر محاسبات سمت MongoDB انجام می‌شود). این نمونه‌برداری کمک می‌کند متابیس بتواند مثلاً فیلدهای datetime را از string تشخیص دهد و فیلترهای آماده (pre-populated) در اختیار کاربر بگذارد. متابیس همچنین برای هر collection در MongoDB حداکثر ۱٬۰۰۰ فیلد leaf (فیلدهایی در عمیق‌ترین سطح تو در تویی) را sync می‌کند.

دلیل این‌که متابیس فقط یک نمونه از اسناد را اسکن می‌کند این است که اگر بخواهد در هر sync، همهٔ اسناد را در همهٔ collectionها اسکن کند، فشار بسیار زیادی روی پایگاه‌دادهٔ شما می‌آید. این نمونه‌برداری معمولاً عملکرد خوبی در به‌روز نگه داشتن متابیس دارد، اما می‌تواند باعث شود فیلدهای جدید گاهی از زیر رادار رد شوند، که در نتیجه باعث مشکلات visualization یا حتی دیده نشدن فیلد در نتایج می‌شود. برای جزئیات بیشتر، [راهنمای عیب‌یابی](../../troubleshooting-guide/db-connection.md) را ببینید.

## نکات عمومی اتصال

- **با استفاده از `DNS SRV` وصل شوید**؛ این روش برای کلاسترهای جدید Atlas پیشنهاد می‌شود.
- **لیست سفید (whitelist) آدرس‌های میزبان کلاستر را چک کرده‌اید؟** اگر اتصال را تست می‌کنید و با خطا مواجه می‌شوید، آیا IP whitelist را روی `0.0.0.0/0` گذاشته‌اید؟ این آدرس به معنی اجازهٔ اتصال از هر IP است. اگر IP یا بلوک CIDR کلاینت‌ها را می‌دانید، بهتر است همان را whitelist کنید.
- **به سرور secondary وصل شوید**. هنگام اتصال به یک کلاستر، همیشه پارامتر `?readPreference=secondary` را در connection string قرار دهید تا متابیس بتواند از سرور secondary بخواند و منابع سرور primary را مصرف نکند.

## فیلدهایی به پایگاه‌داده اضافه کرده‌ام اما در متابیس نمی‌بینم

ممکن است متابیس همهٔ فیلدهای شما را sync نکند. چون هر سند در یک collection MongoDB می‌تواند هر تعداد فیلد دلخواه داشته باشد، تنها راه برای پوشش ۱۰۰٪ فیلدها این است که هر سند را در هر collection در هر sync اسکن کنیم؛ و این کار فشار زیادی روی پایگاه‌داده وارد می‌کند، بنابراین متابیس این کار را نمی‌کند.

در عوض، متابیس با اسکن کردن نمونه‌ای از ۱٬۰۰۰ سند در هر collection (۵۰۰ سند اول و ۵۰۰ سند آخر در هر collection) یک نمونه از فیلدها را به‌دست می‌آورد.

اگر همهٔ فیلدها را برای یک collection در متابیس نمی‌بینید، یک workaround این است که همهٔ کلیدهای ممکن را در اولین سند collection قرار دهید و برای آن‌ها مقدار null بگذارید. به این شکل، متابیس می‌تواند schema درست برای کل collection را تشخیص دهد.

## Database routing

با قابلیت database routing، یک ادمین می‌تواند یک سؤال را یک‌بار با استفاده از یک پایگاه‌داده بسازد، و همان سؤال بسته به این‌که چه کسی آن را می‌بیند، پرس‌وجو را روی یک پایگاه‌دادهٔ دیگر با همان schema اجرا کند.

[مستندات Database routing](../../permissions/database-routing.md) را ببینید.

## Danger zone

[بخش Danger zone](../danger-zone.md) را ببینید.

## مطالعهٔ بیشتر

برای عیب‌یابی اتصال، [راهنمای عیب‌یابی اتصال پایگاه‌داده](../../troubleshooting-guide/db-connection.md) را ببینید.
