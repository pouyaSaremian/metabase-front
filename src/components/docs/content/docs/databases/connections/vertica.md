---
title: Working with Vertica in Metabase
redirect_from:
  - /docs/latest/administration-guide/databases/vertica
---

# کار با Vertica در متابیس

از نسخهٔ v0.20.0 به بعد، متابیس یک درایور برای اتصال به پایگاه‌داده‌های Vertica فراهم می‌کند. در پس‌زمینه، متابیس از درایور JDBC خود Vertica استفاده می‌کند؛
به‌دلیل محدودیت‌های مجوز (licensing)، نمی‌توانیم این درایور را به‌صورت پیش‌فرض همراه متابیس ارائه کنیم. خوشبختانه دانلود کردن این درایور و در دسترس قرار دادن آن برای متابیس
بسیار ساده است و فقط چند دقیقه زمان می‌برد.

## دانلود JAR درایور Vertica JDBC

می‌توانید درایور JDBC را از [صفحهٔ دانلود درایور JDBC ورتیکا](https://my.vertica.com/download/vertica/client-drivers/) دریافت کنید.
به این صفحه بروید، وارد حساب کاربری خود شوید، توافق‌نامهٔ مجوز را بپذیرید و فایل `vertica-jdbc-8.0.0-0.jar` (برای Vertica نسخهٔ 8.0)
یا هر نسخه‌ای که بیشترین تطبیق را با نسخهٔ Vertica شما دارد دانلود کنید.

مهم است مطمئن شوید نسخهٔ درست درایور JDBC را استفاده می‌کنید؛ نسخهٔ
8.0 این درایور با Vertica نسخهٔ 7.2 کار نمی‌کند؛ نسخهٔ 7.2 درایور هم با Vertica نسخهٔ 7.1 کار نمی‌کند و به همین شکل در سایر نسخه‌ها. اگر مطمئن نیستید،
مستندات Vertica را ببینید تا نسخهٔ صحیح درایور JDBC متناسب با نسخهٔ Vertica خود را پیدا کنید.

## افزودن JAR درایور Vertica JDBC به پوشهٔ Plugins متابیس

اگر متابیس هنگام راه‌اندازی، فایل JAR درایور Vertica JDBC را در پوشهٔ plugins پیدا کند، به‌صورت خودکار درایور Vertica را فعال می‌کند.
کافی است این پوشه را ایجاد کنید، فایل JARی که همین الان دانلود کرده‌اید را در آن قرار دهید و متابیس را ری‌استارت کنید.

### زمانی که متابیس را از روی JAR اجرا می‌کنید

به‌طور پیش‌فرض، پوشهٔ plugins با نام `plugins` و در همان مسیری که فایل JAR متابیس قرار دارد ساخته می‌شود.

برای مثال، اگر متابیس را از دایرکتوری `/app/` اجرا می‌کنید، باید فایل JAR درایور Vertica را به `/app/plugins/` منتقل کنید:

```txt
# example directory structure for running Metabase with Vertica support
/app/metabase.jar
/app/plugins/vertica-jdbc-8.0.0-0.jar
```

### زمانی که متابیس را با Docker اجرا می‌کنید

فرآیند افزودن پلاگین‌ها در حالت Docker هم مشابه است، با این تفاوت که باید پوشهٔ `plugins` را mount کنید. برای جزئیات بیشتر، [راهنما](../../installation-and-operation/running-metabase-on-docker.md#adding-external-dependencies-or-plugins) را ببینید.

## امکانات مدل (Model features)

در حال حاضر هیچ قابلیت مدل خاصی برای Vertica در دسترس نیست.

## بخش خطر (Danger zone)

[Danger zone](../danger-zone.md) را ببینید.
