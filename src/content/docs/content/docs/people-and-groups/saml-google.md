---
title: SAML با Google
redirect_from:
  - /docs/latest/enterprise-guide/saml-google
---

# SAML با Google

{% include plans-blockquote.html feature="Google SAML authentication" %}

1. یک [اپلیکیشن SAML سفارشی](https://support.google.com/a/answer/6087519) در [کنسول ادمین Google](https://admin.google.com) تنظیم کنید.
2. همانطور که دستورالعمل‌های Google را دنبال می‌کنید، باید:

- [اطلاعات دربارهٔ Google را برای متابیس ذخیره کنید](#saving-google-idp-info-for-metabase).
- [اطلاعات Google را به متابیس ارائه دهید](#filling-out-the-metabase-saml-form).
- [اطلاعات متابیس را به Google ارائه دهید](#filling-out-service-provider-details).
- [نگاشت‌های ویژگی را در Google تنظیم کنید](#setting-up-attribute-mappings).

به [احراز هویت با SAML](./authenticating-with-saml.md) برای اطلاعات عمومی SAML مراجعه کنید.

## ذخیره اطلاعات IdP Google برای متابیس

در صفحه **Google Identity Provider details**:

1. **IdP metadata** را دانلود کنید.
2. **SSO URL** را کپی کنید.
3. **certificate** را دانلود کنید.

## پر کردن فرم SAML متابیس

1. از **IdP metadata** Google خود، **issuer** را پیدا کنید.
   - **issuer** شبیه این است: `https://accounts.google.com/o/saml2/`.
2. به فرم SAML متابیس خود بروید (**Admin settings** > **Authentication** > **SAML**).
3. **issuer** را در فیلد **SAML Identity Provider Issuer** متابیس قرار دهید.
4. **SSO URL** را در فیلد **SAML Identity Provider URL** متابیس قرار دهید.
5. **certificate** را در فیلد **SAML Identity Provider Certificate** متابیس paste کنید.

- مطمئن شوید که هر کامنت header و footer (مثل `---BEGIN CERTIFICATE---`) را شامل می‌شود.

## پر کردن جزئیات ارائه‌دهنده سرویس

در صفحه **Service provider details**:

1. **URL the IdP should redirect to** متابیس را در فیلد **ACS URL** Google قرار دهید.
2. **SAML Application Name** متابیس را در فیلد **Entity ID** Google قرار دهید.
   - **SAML Application Name** می‌تواند هر چیزی که دوست دارید باشد (مثلاً "yourcompany-metabase").
3. **Start URL** و **Signed response** فیلدهای اختیاری هستند.

## تنظیم نگاشت‌های ویژگی

در صفحه **Attribute mappings**، باید "First name"، "Last name"، و "Email" را به‌عنوان ویژگی‌ها اضافه کنید، تا Google بتواند آن‌ها را هنگام احراز هویت به متابیس ارسال کند.

به‌عنوان مثال، برای اضافه کردن ویژگی "First name":

1. روی **Add another mapping** کلیک کنید.
2. زیر **Google Directory attributes**، **Basic information** > **First name** را به‌عنوان نام فیلد ویژگی انتخاب کنید.
3. به فرم SAML متابیس خود بروید، و به دنبال **SAML attributes** > **User's first name attribute** بگردید.
   - ویژگی شبیه این است: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`.
4. **User's first name attribute** را زیر **App attributes** Google خود paste کنید.
5. مراحل 1-3 را برای ویژگی‌های "Last name" و "Email" تکرار کنید.

## تنظیم همگام‌سازی عضویت گروه

1. در Google Admin، می‌توانید یکی از این‌ها را انجام دهید:
   - یک [ویژگی کاربر سفارشی چند مقداری](https://support.google.com/a/answer/6208725?hl=en#zippy=%2Cadd-a-new-custom-attribute) برای کاربران خود تنظیم کنید. توصیه می‌شود اگر چندین مجوز اپلیکیشن SAML را در Google مدیریت می‌کنید یا اگر Google Groups موجودی که با گروه‌های متابیس مورد نظر شما هم‌راستا هستند ندارید.
   - [نگاشت به Google Groups موجود](https://support.google.com/a/answer/11143403?hl=en).
2. دستورالعمل‌های [پیکربندی schema گروه](./authenticating-with-saml.md#configuring-the-group-schema-in-metabase) را با استفاده از `App attribute` که در Google استفاده کردید به‌عنوان نام ویژگی گروه در متابیس دنبال کنید.

## عیب‌یابی مشکلات SAML

- [عیب‌یابی SAML](../troubleshooting-guide/saml.md).
