---
title: SAML با Auth0
redirect_from:
  - /docs/latest/enterprise-guide/saml-auth0
---

# SAML با Auth0

{% include plans-blockquote.html feature="SAML authentication" %}

1. [پیکربندی SAML در Auth0](#working-in-the-auth0-console) (ارائه‌دهنده هویت).
2. [پیکربندی SAML در متابیس](./authenticating-with-saml.md#enabling-saml-authentication-in-metabase) (ارائه‌دهنده سرویس).

برای اطلاعات بیشتر، راهنمای ما برای [احراز هویت با SAML](./authenticating-with-saml.md) را بررسی کنید.

## کار در کنسول Auth0

### ایجاد یک اپلیکیشن

بعد از اینکه به حساب Auth0 خود وارد شدید، به **Applications** بروید و **Create Application** را انتخاب کنید.

![صفحه Applications Auth0](images/auth0createapp.png)

"Metabase" را به‌عنوان نام اپلیکیشن با نوع "Regular Web Applications" وارد کنید.

![انتخاب اپلیکیشن Auth0](images/auth0regularapp.png)

حالا به تب Settings درون اپلیکیشن Metabase Auth0 بروید و مقادیر زیر را پر کنید:

- Application Login URI: URL instance متابیس شما.
- Allowed Callback URLs: URL که زیر **Configure your identity provider (IdP)** در تنظیمات SAML درون متابیس است (به `/auth/sso` ختم می‌شود).

![صفحه تنظیمات SAML Auth0](images/auth0callbackurl.png)

به پایین صفحه اسکرول کنید و روی **Save Changes** کلیک کنید.

### فعال کردن SAML در Auth0

بعد، باید Addon SAML2 Web App را فعال کنیم. به بالای صفحه تنظیمات اسکرول کنید و **Addons** را از منوی ناوبری انتخاب کنید.

در بخش **Addons**، **SAML 2 Web App** را انتخاب کنید تا popup تنظیمات بارگذاری شود.

![Addons اپلیکیشن Auth0](images/auth0saml2addon.png)

### نگاشت فیلدها از کاربران در Auth0 به متابیس

در بالای بخش **Settings** در این صفحه، باید مقدار واردشده در **Allowed Callback URLs** را دوباره در فیلد به نام **Application Callback URL** وارد کنید. فایل JSON زیر را در جعبه تنظیمات کپی و paste کنید تا Auth0 بتواند نگاشت‌های صحیح را هنگام ورود یک کاربر به متابیس ارسال کند:

```
{
    "mappings": {
        "email":"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
        "given_name":"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname",
        "family_name":"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname",
        "groups":"http://schemas.xmlsoap.org/claims/Group"
    }
}
```

اگر نیاز به تنظیم ویژگی‌های کاربر اضافی دارید، همیشه می‌توانید به این مرحله برگردید تا فیلدهای اضافی را به object نگاشت‌ها اضافه کنید.

![نگاشت‌های SAML Auth0](images/auth0samlmappings.png)

## پیکربندی متابیس

بعد، در popup Addon Auth0: SAML2 Web App، روی تب **Usage** کلیک کنید و سپس در متابیس (ستون سمت چپ) مقادیری که این تب ارائه می‌دهد (ستون سمت راست) را پیکربندی کنید.

![استفاده از SAML Auth0](images/auth0samlusage.png)

| متابیس                           | Auth0                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------ |
| SAML Identity Provider URL         | Identity Provider Login URL                                                                |
| SAML Identity Provider Issuer      | Issuer                                                                                     |
| SAML Identity Provider Certificate | لینک Identity Provider Metadata را باز کنید و رشته زیر تگ X509Certificate را کپی کنید |

مقدار "SAML Application Name" می‌تواند به‌عنوان پیش‌فرض (Metabase) باقی بماند.

تنظیمات خود را ذخیره کنید، سپس [SAML را فعال کنید](authenticating-with-saml.md) در متابیس، و باید آماده باشید!

## عیب‌یابی مشکلات SAML

- [صفحه عیب‌یابی SAML](../troubleshooting-guide/saml.md).
