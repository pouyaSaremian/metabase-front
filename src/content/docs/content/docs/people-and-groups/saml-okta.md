---
title: SAML با Okta
---

# SAML با Okta

{% include plans-blockquote.html feature="Okta SAML authentication" %}

1. [روشن کردن SSO مبتنی بر SAML در متابیس](#turn-on-saml-based-sso-in-metabase)
2. [تنظیم SAML در Okta](#set-up-saml-in-okta).
3. [تنظیم SAML در متابیس](#set-up-saml-in-metabase).

همچنین می‌توانید به‌صورت اختیاری [نگاشت‌های گروه را پیکربندی کنید](#configure-group-mappings) تا به‌طور خودکار کاربران Okta را به گروه‌های متابیس اختصاص دهید.

به [احراز هویت با SAML](./authenticating-with-saml.md) برای اطلاعات عمومی SAML مراجعه کنید.

## روشن کردن SSO مبتنی بر SAML در متابیس

در بخش **Admin**>**Settings** از ناحیه Admin، به تب **Authentication** بروید و روی **Set up** زیر **SAML** کلیک کنید.

یک فرم پیکربندی SAML مثل این می‌بینید:

![فرم SAML](images/saml-form.png)

باید از اطلاعات در این فرم برای تنظیم SAML در Okta استفاده کنید.

## تنظیم SAML در Okta

قبل از پیکربندی احراز هویت SAML در متابیس، باید یک ادغام اپلیکیشن SAML جدید در Okta ایجاد کنید.

### ایجاد یک ادغام اپلیکیشن در Okta

از کنسول **Admin** Okta، [یک ادغام اپلیکیشن SAML جدید ایجاد کنید][okta-saml-docs] برای استفاده با متابیس.

### پیکربندی تنظیمات SAML Okta

برای پیکربندی ادغام اپلیکیشن Okta با متابیس، باید از اطلاعات یافت‌شده در متابیس در بخش **Admin panel** > **Authentication** > **SAML** استفاده کنید.

#### تنظیمات عمومی

| SAML Okta                       | SAML متابیس                                                                                                                               |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single sign-on URL**          | **URL the IdP should redirect to**. این [Site URL][site-url] متابیس شما است -- باید با `https://` شروع شود و به `/auth/sso` ختم شود. |
| **Audience URI (SP Entity ID)** | **SAML Application Name** ("Metabase" به‌طور پیش‌فرض)                                                                                           |

#### statementهای ویژگی

در بخش **Attribute statements (optional)** از تنظیم SAML اپلیکیشن Okta، statementهای ویژگی زیر را ایجاد کنید:

- آدرس ایمیل
- نام (given name)
- نام خانوادگی (surname)

حتی اگر Okta می‌گوید این‌ها اختیاری هستند، متابیس آن‌ها را الزامی می‌کند. Okta این ویژگی‌ها را هنگام احراز هویت به متابیس ارسال می‌کند تا به‌طور خودکار افراد را به متابیس وارد کند.

| نام                                                                 | مقدار          |
| -------------------------------------------------------------------- | -------------- |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` | user.email     |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`    | user.firstName |
| `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname`      | user.lastName  |

نام‌های statement ویژگی در Okta باید با نام‌های ویژگی در متابیس تطبیق داشته باشند (نام‌ها به حروف بزرگ و کوچک حساس هستند). اگر می‌خواهید از نام‌های ویژگی غیرپیش‌فرض در پیکربندی اپلیکیشن Okta خود استفاده کنید، همچنین باید نام‌های فیلدهای ویژگی را در متابیس در **Admin panel** > **Authentication** > **SAML** تغییر دهید.

> **مطمئن شوید که افراد [نمی‌توانند ویژگی آدرس ایمیل خود را ویرایش کنند](https://help.okta.com/oie/en-us/content/topics/users-groups-profiles/usgp-user-edit-attributes.htm)**. برای وارد کردن افراد به متابیس شما (یا ایجاد یک حساب متابیس در اولین ورود)، IdP شما ویژگی آدرس ایمیل را به متابیس ارسال می‌کند. اگر یک شخص بتواند ویژگی آدرس ایمیل را تغییر دهد، به‌طور بالقوه قادر خواهد بود به حساب‌های متابیس غیر از خودش دسترسی پیدا کند.

### مثال یک assertion Okta

می‌توانید روی **Preview SAML assertion** کلیک کنید تا فایل XML تولید شده توسط Okta را مشاهده کنید. باید چیزی شبیه این باشد:

```
<saml2:Assertion
    xmlns:saml2="urn:oasis:names:tc:SAML:2.0:assertion" ID="id4170618837332381492734749" IssueInstant="2019-03-27T17:56:11.067Z" Version="2.0">
    <saml2:Issuer Format="urn:oasis:names:tc:SAML:2.0:nameid-format:entity">http://www.okta.com/Issuer</saml2:Issuer>
    <saml2:Subject>
        <saml2:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">userName</saml2:NameID>
        <saml2:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
            <saml2:SubjectConfirmationData NotOnOrAfter="2019-03-27T18:01:11.246Z" Recipient="https://metabase.mycompany.com/auth/sso"/>
        </saml2:SubjectConfirmation>
    </saml2:Subject>
    <saml2:Conditions NotBefore="2019-03-27T17:51:11.246Z" NotOnOrAfter="2019-03-27T18:01:11.246Z">
        <saml2:AudienceRestriction>
            <saml2:Audience>my-metabase-app</saml2:Audience>
        </saml2:AudienceRestriction>
    </saml2:Conditions>
    <saml2:AuthnStatement AuthnInstant="2019-03-27T17:56:11.067Z">
        <saml2:AuthnContext>
            <saml2:AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport</saml2:AuthnContextClassRef>
        </saml2:AuthnContext>
    </saml2:AuthnStatement>
    <saml2:AttributeStatement>
        <saml2:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
            <saml2:AttributeValue xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">
              Cam
            </saml2:AttributeValue>
        </saml2:Attribute>
        <saml2:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
            <saml2:AttributeValue xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">
              Saul
            </saml2:AttributeValue>
        </saml2:Attribute>
        <saml2:Attribute Name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
            <saml2:AttributeValue xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">
              cam@metabase.com
            </saml2:AttributeValue>
        </saml2:Attribute>
    </saml2:AttributeStatement>
</saml2:Assertion>
```

## تنظیم SAML در متابیس

بعد از اینکه اپلیکیشن SAML خود را در Okta تنظیم کردید، باید SAML را در متابیس پیکربندی کنید. به برخی اطلاعات از Okta نیاز دارید:

1. در Okta، به صفحه ادغام اپلیکیشن Metabase خود بروید.
2. به تب **Sign On** بروید.
3. روی **View SAML setup instructions** کلیک کنید.

از اطلاعات از دستورالعمل‌های SAML Okta برای پر کردن فرم SAML متابیس در **Admin panel** > **Authentication** > **SAML** استفاده کنید:

| SAML متابیس                      | SAML Okta                            |
| ---------------------------------- | ------------------------------------ |
| SAML Identity Provider URL         | Identity Provider Single Sign-On URL |
| SAML Identity Provider Certificate | X.509 Certificate\*                  |
| SAML Identity Provider Issuer      | Identity Provider Issuer             |

\*مطمئن شوید که هر کامنت header و footer، مثل `---BEGIN CERTIFICATE---` و `---END CERTIFICATE---` را شامل می‌شود.

## پیکربندی نگاشت‌های گروه

می‌توانید متابیس را پیکربندی کنید تا به‌طور خودکار افراد را به گروه‌های متابیس هنگام ورود اختصاص دهد. باید یک statement ویژگی SAML ایجاد کنید که اطلاعات گروه را به متابیس ارسال کند، و سپس متابیس را پیکربندی کنید تا این ویژگی را بخواند و محتوای آن را به گروه‌های متابیس نگاشت کند.

می‌توانید از یکی از این‌ها استفاده کنید:

- [یک ویژگی پروفایل کاربر سفارشی](#use-a-user-profile-attribute-to-assign-groups) که شامل گروه‌های متابیس کاربر است.
- [Okta User Groups](#map-okta-user-groups-to-metabase-groups).

### استفاده از یک ویژگی پروفایل کاربر برای اختصاص گروه‌ها

می‌توانید یک ویژگی پروفایل کاربر سفارشی ایجاد کنید و آن را با گروه‌های متابیس برای هر کاربر پر کنید.

1. در **Profile Editor** Okta، [یک ویژگی User Profile جدید ایجاد کنید](https://help.okta.com/en-us/content/topics/users-groups-profiles/usgp-add-custom-user-attributes.htm) به نام `metabaseGroups`، که می‌تواند یک `string` یا یک `string array` باشد.
   ![ویژگی User Profile جدید](images/okta-new-attribute.png)
2. برای هر کاربر در Okta، ویژگی `metabaseGroups` را با گروه(های) متابیس آن‌ها پر کنید.

   ![ویژگی گروه‌های متابیس](images/okta-adding-groups.png)

   توصیه می‌کنیم که از همان نام‌ها برای گروه‌ها در Okta استفاده کنید که در متابیس استفاده می‌کنید.

   گروه‌های متابیس نیازی به مطابقت با Okta User Groups ندارند. اگر می‌خواهید از Okta User Groups برای تنظیم Metabase Groups استفاده کنید، به [نگاشت Okta User Groups به گروه‌های متابیس](#map-okta-user-groups-to-metabase-groups) مراجعه کنید.

   > حساب Okta شما باید `SAML_SUPPORT_ARRAY_ATTRIBUTES` فعال داشته باشد، چون متابیس انتظار دارد Okta ویژگی‌ها را به‌عنوان یک آرایه ارسال کند. اگر حساب Okta شما قدیمی است، ممکن است نیاز داشته باشید با پشتیبانی Okta تماس بگیرید تا `SAML_SUPPORT_ARRAY_ATTRIBUTES` را فعال کند.

3. در **تنظیمات SAML Okta** برای ادغام اپلیکیشن Metabase، یک statement ویژگی جدید `MetabaseGroupName` با مقدار `user.metabaseGroups` (ویژگی پروفایلی که تازه ایجاد کردید) اضافه کنید

   ![statement ویژگی جدید که به ویژگی ارجاع می‌دهد](images/okta-new-attribute-custom.png)

4. در **تنظیمات SAML متابیس**:

- **Synchronize Group Memberships** را روشن کنید.
- برای هر یک از گروه‌هایی که به کاربران Okta اضافه کردید، یک نگاشت جدید به یک گروه متابیس تنظیم کنید.
- در **Group attribute name**، `MetabaseGroupName` را وارد کنید (نام statement ویژگی SAML).

  ![نگاشت گروه متابیس](images/saml-okta-groups.png)

### نگاشت Okta User Groups به گروه‌های متابیس

1. Okta User Groups متناظر با گروه‌های متابیس ایجاد کنید و آن‌ها را به کاربران Okta اختصاص دهید.
2. در **SAML Settings** Okta برای ادغام اپلیکیشن Metabase، یک statement ویژگی جدید `MetabaseGroupName` اضافه کنید، نوع را به "Basic" تنظیم کنید، و مقدار را به:

   ```
   Arrays.flatten(getFilteredGroups({"groupID1", "groupID2"}, "group.name", 100))
   ```

   جایی که Group IDها در `{"groupId1", "groupId2"}` گروه‌هایی هستند که می‌خواهید به گروه‌های متابیس نگاشت کنید. می‌توانید Okta Group ID را در URL صفحه گروه پیدا کنید: `https://your-okta-url.okta.com/admin/group/GROUP_ID`.

   این expression نام‌های Okta User Groups که یک کاربر بخشی از آن است را بازیابی می‌کند و آن‌ها را به‌عنوان یک آرایه برمی‌گرداند.

   ![statement ویژگی جدید برای گروه‌ها](images/okta-group-attribute.png)

   > حساب Okta شما باید `SAML_SUPPORT_ARRAY_ATTRIBUTES` فعال داشته باشد، چون متابیس انتظار دارد Okta ویژگی‌ها را به‌عنوان یک آرایه ارسال کند. اگر حساب Okta شما قدیمی است، ممکن است نیاز داشته باشید با پشتیبانی Okta تماس بگیرید تا `SAML_SUPPORT_ARRAY_ATTRIBUTES` را فعال کند.

   بعد، باید به متابیس بگویید چگونه Okta groups را به گروه‌های متابیس نگاشت کند.

3. در **تنظیمات SAML متابیس**:

- **Synchronize Group Memberships** را روشن کنید.
- برای هر یک از گروه‌هایی که به کاربران Okta اضافه کردید، یک نگاشت جدید به یک گروه متابیس تنظیم کنید.
- در **Group attribute name**، `MetabaseGroupName` را وارد کنید (نام statement ویژگی SAML).

  ![نگاشت گروه متابیس](images/saml-okta-groups.png)

## عیب‌یابی مشکلات SAML

برای مشکلات رایج، به [عیب‌یابی SAML][troubleshooting-saml] بروید.

[enabling-saml-in-metabase]: ./authenticating-with-saml.md#enabling-saml-authentication-in-metabase
[okta-saml-docs]: https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm
[okta-create-attribute-statement]: https://support.okta.com/help/s/article/How-to-define-and-configure-a-custom-SAML-attribute-statement
[saml-doc]: ./authenticating-with-saml.md
[site-url]: ../configuring-metabase/settings.md#site-url
[troubleshooting-saml]: ../troubleshooting-guide/saml.md

## مطالعهٔ بیشتر

- [Provisioning کاربر](./user-provisioning.md)
