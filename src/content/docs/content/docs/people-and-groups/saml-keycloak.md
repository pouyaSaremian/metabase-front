---
title: SAML با Keycloak
redirect_from:
  - /docs/latest/enterprise-guide/saml-keycloak
---

# SAML با Keycloak

Keycloak یک پلتفرم open source است که می‌تواند به‌عنوان یک دایرکتوری کاربر برای ذخیره داده‌های کاربر استفاده شود در حالی که به‌عنوان IdP برای single sign-on عمل می‌کند.

1. [تنظیم SAML در Keycloak](#working-in-the-keycloak-console) (ارائه‌دهنده هویت).
2. [تنظیم SAML در متابیس](./authenticating-with-saml.md#enabling-saml-authentication-in-metabase) (ارائه‌دهنده سرویس).

برای اطلاعات بیشتر، راهنمای ما برای [احراز هویت با SAML](./authenticating-with-saml.md) را بررسی کنید.

## کار در کنسول Keycloak

1. به کنسول ادمین Keycloak بروید و به‌عنوان یک ادمین وارد شوید.
2. یک کاربر از **Manage** > **Users** ایجاد کنید. باید فیلدها را با یک ایمیل، نام، و نام خانوادگی پر کنید.
3. بعد از اینکه حداقل یک کاربر ایجاد کردید، تب‌های ناوبری در بالای صفحه **Users** ظاهر می‌شوند. به **Credentials** بروید تا رمز عبور کاربر خود را تنظیم کنید.
   - toggle **Temporary** را خاموش کنید.
   - روی **Set Password** کلیک کنید تا تغییرات خود را ذخیره کنید.
4. یک کلاینت SSO جدید از **Manage** > **Clients** > **Create** ایجاد کنید

   - **Client ID**: `metabase` را با حروف کوچک وارد کنید.
   - **Client type**: `SAML` را از منوی dropdown انتخاب کنید.
   - روی **Next** کلیک کنید.
   - **Valid Redirect URIs**: URL جایی که instance متابیس خود را میزبانی می‌کنید به دنبال یک اسلش (/) و یک ستاره (_). به‌عنوان مثال، اگر متابیس را به صورت محلی در `http://localhost:3000` میزبانی می‌کنید، URL `http://localhost:3000/_` خواهد بود.
   - **Home URL**: در متابیس خود، به **Admin settings** > **Authentication** > **SAML** بروید. Home URL خود را در فیلد **URL the IdP should redirect back to** پیدا می‌کنید.
   - روی **Save** کلیک کنید.

5. (اختیاری، اما توصیه می‌شود در محیط‌های تست) امضای کلید را برای کلاینت SSO غیرفعال کنید. به [تنظیمات برای امضای درخواست‌های SSO](./authenticating-with-saml.md#settings-for-signing-sso-requests-optional) مراجعه کنید.

   - روی تب **Keys** کلیک کنید.
   - **Client signature required:** خاموش.

6. ویژگی‌های کاربر را از متابیس به کلاینت SSO نگاشت کنید.
   - روی تب **Client scopes** کلیک کنید.
   - روی `metabase-dedicated` کلیک کنید.
   - روی **Add predefined mappers** کلیک کنید.
   - [ویژگی‌ها را از کاربران در Keycloak به متابیس نگاشت کنید](#mapping-attributes-from-users-in-keycloak-to-metabase).
7. ارائه‌دهنده سرویس (متابیس) را از **Configure** > **Realm Settings** پیکربندی کنید.
   - از **Endpoints**، "SAML 2.0 Identity Provider Metadata" را انتخاب کنید.
   - یک فایل XML در یک تب جدید باز می‌شود.
   - این را برای مرجع نگه دارید، در بخش بعدی برای پیکربندی متابیس از آن استفاده می‌کنیم.

## نگاشت فیلدها از Keycloak به متابیس

1. به **Admin settings** > **Authentication** > **SAML** متابیس خود بروید.
2. از فایل XML از مرحله 7 بالا:
   - **SAML Identity Provider URL**: URL که بلافاصله بعد از رشته زیر ظاهر می‌شود را وارد کنید: `Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location=`
   - **SAML Identity Provider Issuer**: URL که بلافاصله بعد از `entityID=` ظاهر می‌شود را وارد کنید.
   - **SAML Identity Provider Certificate**: رشته طولانی که بعد از تگ `<X509Certificate>` ظاهر می‌شود را وارد کنید. هنگام وارد کردن این رشته دقت کنید: اگر هر حرف یا کاراکتر خاصی اضافه یا حذف شود، تنظیم کار نمی‌کند.
   - **SAML Application Name**: `metabase`
3. روی **Save Changes** کلیک کنید.
4. بررسی کنید که **SAML Authentication** در بالای صفحه toggle **ON** است.

## نگاشت ویژگی‌ها از کاربران در Keycloak به متابیس

Keycloak می‌تواند به‌طور پیش‌فرض چهار ویژگی کاربر را import کند: name، surname، email و role.

بیایید بگوییم می‌خواهیم email، name، و surname بین کلاینت (متابیس) و سرور احراز هویت (Keycloak) ارسال شوند.

1. "X500 email"، "X500 givenName" و "X500 surname" را از checkboxهایی که در سمت راست کنسول هستند انتخاب کنید.
2. روی **Add Selected** کلیک کنید.
3. روی **Edit** کنار هر ویژگی کلیک کنید و تغییرات زیر را انجام دهید:
   - **SAML Attribute Name**: نامی که متابیس انتظار دارد دریافت کند.
   - **SAML Attribute NameFormat**: "Basic" را از منوی dropdown انتخاب کنید.

می‌توانید مقادیر ویژگی را از **Admin settings** > **Authentication** > **SAML** > **Attributes** متابیس خود ویرایش کنید.

## پیکربندی نگاشت‌های گروه بین Keycloak و متابیس

می‌توانید متابیس را پیکربندی کنید تا به‌طور خودکار افراد را بر اساس گروه‌های Keycloak آن‌ها به گروه‌های متابیس اختصاص دهد.

### تنظیم نگاشت گروه در Keycloak

در کلاینت Keycloak خود:

1. روی تب **Client Scopes** کلیک کنید
2. روی client scope **metabase-dedicated** که از قبل ایجاد شده است کلیک کنید.
3. روی **Add Mapper > "By Configuration** کلیک کنید.
4. **Group list** را انتخاب کنید.
5. نام ویژگی را به `member_of` تغییر دهید.
6. گزینه استفاده از "Full group path" را deselect کنید (تا بعداً در متابیس راحت‌تر پیکربندی شود).
7. روی **Save** کلیک کنید.

### تنظیم نگاشت گروه در متابیس

1. در تنظیمات Admin، به **Authentication > SAML** بروید.
2. در تنظیمات SAML، **Synchronize Group Memberships** را toggle کنید
3. برای هر یک از گروه‌های Keycloak، یک نگاشت جدید به یک گروه متابیس تنظیم کنید.

   در حال حاضر، گروه‌های Keycloak در متابیس با کاراکتر اسلش ("/") قبل از نام گروه نمایش داده می‌شوند. بنابراین، به‌عنوان مثال، یک گروه به نام `sales` در Keycloak در متابیس به‌عنوان `/sales` نمایش داده می‌شود.

4. در **Group attribute name**، `member_of` را وارد کنید (نام ویژگی با لیست گروه در پیکربندی Keycloack شما).

## عیب‌یابی مشکلات SAML

برای مشکلات رایج، به [عیب‌یابی SAML](../troubleshooting-guide/saml.md) بروید.
