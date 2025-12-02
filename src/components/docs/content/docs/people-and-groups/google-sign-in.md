---
title: ورود با Google
redirect_from:
  - /docs/latest/administration-guide/10-single-sign-on
  - /docs/latest/people-and-groups/google-and-ldap
---

# ورود با Google

فعال کردن [ورود با Google](https://developers.google.com/identity/sign-in/web/sign-in) برای single sign-on (SSO) به تیم شما امکان می‌دهد با یک کلیک وارد شوند به جای استفاده از ایمیل و رمز عبور. SSO همچنین می‌تواند برای اجازه دادن به افراد برای ایجاد حساب‌های متابیس بدون درخواست از یک ادمین برای اضافه کردن هر شخص به صورت دستی استفاده شود. می‌توانید گزینه‌های SSO را در **Settings** > **Admin settings** > **Authentication** پیدا کنید.

اگر می‌خواهید افراد با [SAML][saml-docs] یا [JWT][jwt-docs] احراز هویت کنند، [Pro و Enterprise](https://www.metabase.com/pricing/) متابیس به شما امکان می‌دهد این کار را انجام دهید.

## فعال کردن ورود با Google

ورود با Google یک گزینه خوب برای SSO است اگر:

- تیم شما از قبل از Google Workspace استفاده می‌کند، یا
- می‌خواهید از احراز هویت 2 مرحله‌ای یا چند عاملی Google (2FA یا MFA) برای امن کردن متابیس خود استفاده کنید.

## دریافت Client ID خود از کنسول توسعه‌دهنده Google

برای اینکه تیم شما شروع به ورود با Google کند، ابتدا باید یک اپلیکیشن از طریق [کنسول توسعه‌دهنده](https://console.developers.google.com/projectselector2/apis/library) Google ایجاد کنید.

بعد، باید اعتبارنامه‌های مجوز ایجاد کنید و [یک Google API Client ID دریافت کنید](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid):

- در بخش `Authorized JavaScript origins`، URI instance متابیس خود را مشخص کنید.
- بخش `Authorized Redirect URIs` را خالی بگذارید.
- Client ID خود را کپی کنید، که هنگام تنظیم ورود با Google در متابیس paste می‌کنید.

## تنظیم ورود با Google در متابیس

بعد از اینکه Google API `Client ID` خود را (که به `.apps.googleusercontent.com` ختم می‌شود) دریافت کردید، به متابیس خود بروید و:

1. روی **آیکون Gear** تنظیمات در گوشهٔ بالا سمت راست کلیک کنید.
2. **Admin settings** را انتخاب کنید.
3. در تب **Settings**، روی **Authentication** کلیک کنید.
4. روی کارت **Sign in with Google**، روی **Set up** کلیک کنید.
5. در فیلد **Client ID**، Google API Client ID خود را paste کنید.

## ایجاد حساب‌های متابیس با ورود با Google

> در [پلن‌های پولی](https://www.metabase.com/pricing/)، [برای هر حساب فعال شارژ می‌شوید](../cloud/how-billing-works.md#what-counts-as-a-user-account).

اگر آدرس‌های ایمیل حساب Google افراد از یک دامنه خاص است، و می‌خواهید به آن‌ها اجازه دهید خودشان ثبت‌نام کنند، می‌توانید آن دامنه را در فیلد **Domain** وارد کنید.

بعد از تنظیم، کاربران متابیس موجود که به یک حساب Google وارد شده‌اند که با ایمیل استفاده‌شده برای تنظیم حساب متابیس آن‌ها تطبیق دارد قادر خواهند بود فقط با یک کلیک وارد شوند.

توجه داشته باشید که حساب‌های متابیس _ایجادشده_ با ورود با Google رمز عبور نخواهند داشت؛ باید از Google برای ورود به متابیس استفاده کنند.

## چندین دامنه برای ورود با Google

{% include plans-blockquote.html feature="Multiple domains for Google Sign-in" %}

اگر در یک پلن [pro](https://www.metabase.com/product/pro) یا [Enterprise](https://www.metabase.com/product/enterprise) هستید، می‌توانید چندین دامنه از همان Google Workspace را در فیلد **Domain** مشخص کنید، جدا شده با کاما. به‌عنوان مثال، `mycompany.com,example.com.br,otherdomain.co.uk`.

## همگام‌سازی ویژگی‌های کاربر با Google

ویژگی‌های کاربر نمی‌توانند با ورود با Google معمولی همگام‌سازی شوند. برای همگام‌سازی ویژگی‌های کاربر، باید [Google SAML][google-saml-docs] یا [JWT][jwt-docs] را به جای آن تنظیم کنید.

[google-saml-docs]: ./saml-google.md
[jwt-docs]: ./authenticating-with-jwt.md
[saml-docs]: ./authenticating-with-saml.md
[user-attributes-docs]: ../permissions/row-and-column-security.md#choosing-user-attributes-for-row-and-column-security
[user-attributes-def]: https://www.metabase.com/glossary/attribute#user-attributes-in-metabase
