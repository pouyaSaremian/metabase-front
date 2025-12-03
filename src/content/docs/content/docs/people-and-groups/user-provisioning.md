---
title: Provisioning کاربر با SCIM
---

# Provisioning کاربر با SCIM

{% include plans-blockquote.html feature="User provisioning with SCIM" %}

متابیس از provisioning کاربر از طریق پروتکل System for Cross-domain Identity Management (SCIM) پشتیبانی می‌کند. علاوه بر Single Sign-on (SSO)، می‌توانید provisioning کاربر را در متابیس با SCIM تنظیم کنید تا:

- **احراز هویت را از provisioning جدا کنید**. حتی اگر هر کسی می‌توانست با SSO احراز هویت کند، ممکن است فقط بخواهید برخی افراد بتوانند یک حساب در متابیس ایجاد کنند.
- **از deprovisioning حساب‌های کاربری پشتیبانی کنید**. اگر کسی را از SSO خود غیرفعال کنید، SCIM می‌تواند به متابیس اطلاع دهد که حساب متابیس آن‌ها را نیز غیرفعال کند.

> فعلاً، متابیس به‌طور رسمی از SCIM برای [Okta](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_scim.htm?cshid=ext_Apps_App_Integration_Wizard-scim) و [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/configure-automatic-user-provisioning-portal) پشتیبانی می‌کند. ارائه‌دهندگان SCIM دیگر ممکن است کار کنند، اما آن‌ها را تست نکرده‌ایم. اگر با ارائه‌دهنده هویت دیگری مشکل دارید، لطفاً [با ما تماس بگیرید](https://www.metabase.com/help-premium).

## تنظیم provisioning کاربر

![تنظیم provisioning کاربر با SCIM در متابیس](./images/user-provisioning.png)

برای تنظیم provisioning کاربر. روی **آیکون Gear** تنظیمات در گوشهٔ بالا سمت راست کلیک کنید و به **Admin settings** > **Settings**> **Authentication** بروید.

روی تب **User provisioning** کلیک کنید.

## Provisioning کاربر از طریق SCIM

برای تنظیم provisioning کاربر با SCIM، toggle را بزنید تا آن را فعال کنید. متابیس URL endpoint SCIM و token SCIM را برای به‌اشتراک‌گذاری با ارائه‌دهنده هویت شما به شما می‌گوید.

> Provisioning کاربر SAML همیشه وقتی SCIM فعال است غیرفعال می‌شود.

## URL endpoint SCIM

endpoint SCIM `/api/ee/scim/v2` است. بنابراین URL شما چیزی شبیه این خواهد بود:

```
https://metabase.example.com/api/ee/scim/v2
```

با جایگزین کردن hostname با hostname متابیس خود.

این URL endpoint را با ارائه‌دهنده هویت خود به‌اشتراک بگذارید.

## Token SCIM

token را کپی کنید و token را در جایی امن ذخیره کنید. برای امنیت، متابیس نمی‌تواند token را دوباره به شما نشان دهد. با این حال، می‌توانید token را دوباره تولید کنید، اما باید به ارائه‌دهنده هویت خود دربارهٔ token جدید اطلاع دهید.

## SCIM با Okta

بعد از اینکه SCIM را در متابیس فعال کردید و URL endpoint SCIM و token SCIM خود را دریافت کردید، مستندات [تنظیم SCIM در Okta](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_scim.htm?cshid=ext_Apps_App_Integration_Wizard-scim) را دنبال کنید.

با Okta، متابیس از provisioning کاربر و گروه پشتیبانی می‌کند؛ گروه‌ها در متابیس ایجاد و پر می‌شوند.

نکته: حالت احراز هویتی که باید تنظیم کنید "HTTP Header" است

## SCIM با Microsoft Entra ID

بعد از اینکه SCIM را در متابیس فعال کردید و URL endpoint SCIM و token SCIM خود را دریافت کردید، مستندات [تنظیم SCIM در Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/configure-automatic-user-provisioning-portal) را دنبال کنید.

با Microsoft Entra ID، متابیس فقط از provisioning کاربر پشتیبانی می‌کند (گروه‌ها ایجاد یا پر نمی‌شوند).

## مطالعهٔ بیشتر

- [احراز هویت با SAML](./authenticating-with-saml.md)
- [SAML با Okta](./saml-okta.md)
- [SAML با Microsoft Entra ID](./saml-azure.md)
