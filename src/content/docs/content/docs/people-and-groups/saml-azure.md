---
title: SAML با Microsoft Entra ID

redirect_from:
  - /docs/latest/enterprise-guide/authenticating-with-saml-azure-ad
---

# SAML با Microsoft Entra ID

{% include plans-blockquote.html feature="SAML authentication" %}

## فعال کردن SAML در متابیس

ابتدا، راهنمای ما برای [فعال کردن احراز هویت SAML](authenticating-with-saml.md) را دنبال کنید.

## اضافه کردن یک Enterprise Application در Microsoft Entra ID

به مرکز ادمین Microsoft Entra بروید و روی **Enterprise Applications** زیر Applications از نوار کناری کلیک کنید. وقتی آنجا بودید، روی **+ New Application** در نوار بالای صفحه کلیک کنید.

![اپلیکیشن Enterprise Azure](images/saml-azure-ad-enterprise-app.png)

در صفحه جدید روی **+ Create your own application** کلیک کنید و یک نوار در سمت راست صفحه باز می‌شود. "Metabase" را به‌عنوان نام اپلیکیشن وارد کنید، `Integrate any other application you don't find in the gallery (Non-gallery)` را به‌عنوان گزینه انتخاب کنید و روی دکمه **Create** در پایین نوار کلیک کنید.

![ایجاد اپلیکیشن Metabase Azure](images/saml-azure-ad-create.png)

در صفحه اپلیکیشن، زیر **Manage**، **Single Sign-on** را انتخاب کنید، سپس روی دکمه "SAML" کلیک کنید.

![SAML اپلیکیشن Azure](images/saml-azure-app-saml.png)

وقتی صفحه "Set up Single Sign-On with SAML" ظاهر می‌شود، یک گزینه برای "Basic SAML configuration" می‌بینید. روی دکمه **Edit** کلیک کنید تا اطلاعات الزامی را وارد کنید.

![مرحله 1 Azure](images/saml-azure-step-1.png)

فیلدهای زیر را به شرح زیر پر کنید و روی "Save" کلیک کنید:

- **Identifier (Entity ID)**: `Metabase`
- **Reply URL (Assertion Consumer Service URL)**: به instance متابیس خود در Settings -> Admin-> Authentication -> SAML بروید و مقداری که instance متابیس شما در جعبه "Configure your identity provider (IdP)" گزارش می‌دهد را وارد کنید.

روی "Save" کلیک کنید و سپس دو مورد زیر را در مرحله 4 یادداشت کنید:

- "Login URL": این مقداری است که باید در "SAML identity provider URL" در متابیس در مرحله بعد وارد کنید
- "Microsoft Entra Identifier": این مقداری است که باید در "SAML identity provider issuer" در متابیس در مرحله بعد وارد کنید

فایل "Federation Metadata XML" را دانلود کنید، که گواهی مورد نیاز در مرحله بعد را خواهد داشت.

برای تکمیل سمت Microsoft Entra پیکربندی، روی دکمه **Users and groups** در تب Manage کلیک کنید و کاربران یا گروه‌هایی که باید به متابیس دسترسی داشته باشند را اضافه کنید.

## پیکربندی Enterprise Application با اطلاعات SSO متابیس

به‌عنوان یک ادمین به متابیس وارد شوید و به **Admin** -> **Settings** -> **Authentication** -> **SAML** بروید.

زیر "Tell Metabase about your identity provider"، موارد زیر را وارد کنید:

- **SAML Identity Provider URL**: "Login URL" که در مرحله 4 در پیکربندی SAML SSO Microsoft Entra ID دریافت کردید
- **SAML Identity Provider Certificate**: فایل "Federation Metadata XML" را با یک ویرایشگر متن باز کنید، رشته بسیار طولانی زیر تگ `<X509Certificate>` در "App Federation Metadata Url" را کپی و paste کنید. مطمئن شوید که کل رشته را کپی و paste می‌کنید؛ اگر هر کاراکتری را از دست بدهید، ادغام کار نمی‌کند
- **SAML Application Name**: "Metabase"
- **SAML Identity Provider Issuer**: URL "Microsoft Entra Identifier" که از پیکربندی SAML SSO Microsoft Entra ID دریافت کردید.

روی **Save and Enable** در زیر کلیک کنید، و حالا باید بتوانید از طریق Microsoft Entra ID وارد شوید.

## ارسال عضویت گروه به متابیس برای نگاشت گروه

اگر می‌خواهید عضویت گروه کاربر را به متابیس ارسال کنید، باید یک claim گروه در مرحله 2، "Set up Single Sign-On with SAML" در Azure اضافه کنید:

1. در سمت راست "Attributes & Claims"، روی "Edit" کلیک کنید.
2. روی "Add a group claim" کلیک کنید.
   3 در منویی که برای "Which groups associated with the user should be returned in the claim?" ظاهر می‌شود، "All groups" را انتخاب کنید.
3. روی Save کلیک کنید.
4. سپس نگاشت گروه را در پیکربندی SAML متابیس اضافه کنید.

## مطالعهٔ بیشتر

- [Provisioning کاربر](./user-provisioning.md)
