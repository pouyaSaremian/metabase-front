---
title: سفارشی‌سازی وب‌سرور Jetty متابیس
redirect_from:
  - /docs/latest/operations-guide/customizing-jetty-webserver
---

# سفارشی‌سازی وب‌سرور Jetty متابیس

در اغلب سناریوها نیازی به دست‌کاری تنظیمات وب‌سرور داخلی Jetty که متابیس برای میزبانی اپلیکیشن از آن استفاده می‌کند ندارید؛ اما اگر بخواهید مستقیم روی خود سرور متابیس HTTPS راه بیندازید یا روی پورتی غیر از پورت پیش‌فرض اجرا کنید، همهٔ این موارد از طریق متغیرهای محیطی قابل پیکربندی است.

## اجرای متابیس روی پورتی دیگر

به‌صورت پیش‌فرض متابیس روی پورت ۳۰۰۰ بالا می‌آید، اما اگر ترجیح می‌دهید اپلیکیشن روی پورت دیگری اجرا شود، می‌توانید متغیر محیطی زیر را تنظیم کنید:

```sh
export MB_JETTY_PORT=12345
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

در این مثال، پس از راه‌اندازی، اپلیکیشن به‌جای پورت پیش‌فرض ۳۰۰۰ روی پورت `12345` در دسترس خواهد بود.

## گوش‌دادن روی اینترفیس شبکهٔ مشخص

به‌طور پیش‌فرض، متابیس فقط روی `localhost` گوش می‌دهد. در بعضی محیط‌های Production ممکن است بخواهید روی اینترفیس دیگری (مثلاً همهٔ اینترفیس‌ها) گوش بدهید؛ برای این کار می‌توانید از متغیر محیطی `MB_JETTY_HOST` استفاده کنید:

```sh
export MB_JETTY_HOST=0.0.0.0
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

## استفاده از HTTPS در متابیس

اگر گواهی SSL دارید و ترجیح می‌دهید خود وب‌سرور متابیس مستقیماً روی HTTPS اجرا شود، می‌توانید متغیرهای محیطی زیر را تنظیم کنید:

```sh
export MB_JETTY_SSL="true"
export MB_JETTY_SSL_PORT="8443"
export MB_JETTY_SSL_KEYSTORE="path/to/keystore.jks" # این مسیر را با مسیر keystore خودتان عوض کنید
export MB_JETTY_SSL_KEYSTORE_PASSWORD="storepass"   # این مقدار را با رمز عبور keystore خودتان عوض کنید
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

حتماً `path/to/keystore.jks` و `storepass` را با مسیر و رمز معتبر [Java KeyStore](https://www.digitalocean.com/community/tutorials/java-keytool-essentials-working-with-java-keystores) خودتان جایگزین کنید. با این تنظیمات، متابیس روی پورت ۸۴۴۳ و از طریق HTTPS با گواهی مشخص‌شده اجرا خواهد شد.

اگر با ساخت Java KeyStore آشنا نیستید، این موضوع کمی پیشرفته است؛ می‌توانید برای جزئیات فنی پیکربندی SSL در Jetty به [مستندات رسمی Jetty](https://jetty.org/docs/jetty/12/operations-guide/keystore/index.html) مراجعه کنید. در غیر این صورت، معمولاً ساده‌تر است که Terminate کردن SSL را خارج از متابیس (مثلاً پشت یک Reverse Proxy مثل Nginx) انجام دهید.
