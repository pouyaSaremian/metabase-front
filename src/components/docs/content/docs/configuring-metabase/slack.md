---
title: تنظیم Slack
redirect_from:
  - /docs/latest/administration-guide/09-setting-up-slack
---

<!-- markdownlint-disable-next-line MD025 -->
# تنظیم Slack

اگر می‌خواهید [اشتراک‌های داشبورد](../dashboards/subscriptions.md) یا [هشدارها](../questions/alerts.md) به کانال‌ها (یا کاربران) در Slack ارسال شوند، یک مدیر باید ابتدا متابیس را با Slack یکپارچه کند.

هم مدیران و هم افرادی که [دسترسی به تنظیمات](../permissions/application.md#settings-access) دارند می‌توانند Slack را تنظیم کنند.

## ساخت Slack App

برای این‌که متابیس بتواند در کانال‌های Slack شما پیام بفرستد، باید یک Slack App بسازید و آن را در اختیار متابیس قرار دهید.

در هر صفحه‌ای از متابیس، به مسیر **Admin settings** > **Settings** > **Notification channels** > **Slack** بروید.

روی **Open Slack Apps** کلیک کنید. متابیس یک تب جدید در مرورگر باز می‌کند و شما را به وب‌سایت Slack برای ساخت اپ می‌برد.

در وب‌سایت Slack روی **Create an App** کلیک کنید.

### انتخاب ورک‌اسپیس برای توسعهٔ اپ

ورک‌اسپیس (Workspace) موردنظر برای ساخت اپ را انتخاب کنید.

### مانیفست اپ

وقتی روی **Open Slack App** کلیک می‌کنید، متابیس مانیفست اپ را به Slack می‌فرستد تا بر اساس آن اپ را تنظیم کند.

ممکن است هشداری با این متن ببینید:

**This app is created from a 3rd party manifest** Always verify URLs and permissions below.

این هشدار طبیعی است (متابیس همان شخص ثالث است). می‌توانید روی **Configure** کلیک کنید تا مانیفست اپ را که متابیس در URL ارسال کرده ببینید. مانیفست در قالب YAML به‌صورت زیر است:

```yml
_metadata:
  major_version: 1
  minor_version: 1
display_information:
  name: Metabase
  description: Bringing the power of Metabase to your Slack #channels!
  background_color: "#509EE3"
features:
  bot_user:
    display_name: Metabase
oauth_config:
  scopes:
    bot:
      - users:read
      - channels:read
      - channels:join
      - files:write
      - chat:write
      - chat:write.customize
      - chat:write.public
      - groups:read
```

این مانیفست فقط بخشی از تنظیمات اپ را انجام می‌دهد و فرآیند راه‌اندازی را سریع‌تر می‌کند.

روی دکمهٔ **Next** کلیک کنید و سپس با انتخاب **Create** اپ Slack خود را بسازید.

## نصب اپ در ورک‌اسپیس

در صفحهٔ اپ جدید در وب‌سایت Slack، از تب **Settings** > **Basic Information** و زیر بخش **Install your app** روی **Install to workspace** کلیک کنید. در صفحهٔ بعدی، با کلیک روی **Allow** به متابیس اجازهٔ دسترسی به ورک‌اسپیس Slack را بدهید.

## توکن Bot User OAuth

در صفحهٔ اپ Slack، از بخش **Features** در سایدبار روی **OAuth and Permissions** کلیک کنید و **Bot User OAuth Token** را کپی کنید. سپس به صفحهٔ تنظیمات Slack در متابیس برگردید و این توکن را در فیلدی با همین نام قرار دهید.

## ذخیرهٔ تغییرها در متابیس

در متابیس روی دکمهٔ **Save changes** کلیک کنید. متابیس به‌طور خودکار یک تست سریع اجرا می‌کند تا مطمئن شود توکن API درست کار می‌کند. اگر مشکلی باشد، پیام خطا نمایش داده می‌شود.

## ارسال هشدار و اشتراک به کانال‌های خصوصی Slack

برای ارسال هشدارها و اشتراک‌ها به کانال‌های خصوصی، ابتدا باید اپ متابیس را به آن کانال خصوصی اضافه کنید.

در Slack به کانال خصوصی بروید و اپ متابیس را منشن کنید؛ مثلاً اگر نام اپ Slack شما «Metabase» است، کافی است `@Metabase` را تایپ کنید. Slack از شما می‌پرسد آیا می‌خواهید اپ را به کانال دعوت کنید؛ این دعوت را تأیید کنید.

### کانال خصوصی شما در لیست متابیس نمایش داده نمی‌شود؟

مدتی طول می‌کشد تا متابیس بتواند همهٔ کانال‌هایی را که اپ به آن‌ها دعوت شده ببیند. ممکن است کانال‌های جدید تا ۱۰ دقیقه بعد از دعوت، در لیست‌ها نمایش داده نشوند.

برای این‌که متابیس کانال‌های خصوصی را ببیند، اپ باید scope مربوط به `groups:read` در OAuth را داشته باشد. هرچند این scope هنگام راه‌اندازی اپ از طریق متابیس باید اعطا شده باشد، نصب‌های قدیمی ممکن است این scope را نداشته باشند.

اگر فکر می‌کنید این‌طور است، به [تنظیمات اپ در Slack](https://api.slack.com/apps/) بروید:

- در لیست اپ‌ها روی اپ متابیس کلیک کنید.
- در سایدبار روی **OAuth & Permissions** کلیک کنید.
- زیر **Scopes**، مقدار `groups:read` را اضافه کنید.
- سپس اپ را با کلیک روی دکمهٔ **Reinstall** در بخش **OAuth Tokens** دوباره در ورک‌اسپیس نصب کنید.

## مطالعهٔ بیشتر

- [هشدارها](../questions/alerts.md)
- [اشتراک‌های داشبورد](../dashboards/subscriptions.md)
- [مجوزهای اعلان](../permissions/notifications.md)
- [تنظیم ایمیل](./email.md)
- [تحلیل استفاده](../usage-and-performance-tools/usage-analytics.md)
