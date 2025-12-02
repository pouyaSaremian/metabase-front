---
title: "نمای کلی افراد"
redirect_from:
  - /docs/latest/administration-guide/sso
  - /docs/latest/people-and-groups
---

# نمای کلی افراد

حساب‌های کاربری، گروه‌ها، و احراز هویت. برای مجوزها، به [نمای کلی مجوزها](../permissions/start.md) مراجعه کنید.

## [ویرایش تنظیمات حساب شما](./account-settings.md)

پروفایل و رمز عبور خود را ویرایش کنید، و تاریخچه ورود خود را مشاهده کنید.

## [مدیریت افراد و گروه‌ها](./managing.md)

کنترل‌های ادمین برای تنظیم حساب‌های کاربری و سازمان‌دهی آن‌ها در گروه‌ها.

## [تغییر پیچیدگی رمز عبور](./changing-password-complexity.md)

افراد را مجبور کنید از رمزهای عبور طولانی‌تر و پیچیده‌تر استفاده کنند.

## [تغییر انقضای نشست](./changing-session-expiration.md)

به متابیس بگویید چقدر باید صبر کند قبل از اینکه از افراد بخواهد دوباره وارد شوند.

## احراز هویت

متابیس چندین گزینه برای احراز هویت ارائه می‌دهد.

> اگر نیاز به تنظیم احراز هویت 2 مرحله‌ای یا چند عاملی (2FA یا MFA) برای متابیس خود دارید، در نظر بگیرید از یکی از گزینه‌های SSO زیر استفاده کنید.

### SSO برای پلن‌های Metabase Open Source و Starter

- [ورود با Google](./google-sign-in.md)
- [LDAP](./ldap.md)

### SSO برای پلن‌های Metabase Pro و Enterprise

با [پلن‌های Pro و Enterprise](https://www.metabase.com/pricing/)، گزینه‌های بیشتری برای کمک به هماهنگی افراد و گروه‌های زیاد دارید.

- [JWT][jwt]
- ویژگی‌های پیشرفته LDAP
  - [فیلتر عضویت گروه](./ldap.md#ldap-group-membership-filter)
  - [همگام‌سازی ویژگی‌های کاربر](./ldap.md#syncing-user-attributes-with-ldap)
- [SAML][saml]
  - [Auth0][saml-auth0]
  - [Microsoft Entra ID][azure-ad]
  - [Google][saml-google]
  - [Keycloak][saml-keycloak]
  - [Okta][saml-okta]

## [کلیدهای API](./api-keys.md)

کلیدها ایجاد کنید تا درخواست‌های API را احراز هویت کنید.

## [Provisioning کاربر](./user-provisioning.md)

متابیس از provisioning کاربر از طریق پروتکل SCIM پشتیبانی می‌کند.

[azure-ad]: ./saml-azure.md
[google-sign-in]: ./google-and-ldap.md#enabling-google-sign-in
[jwt]: ./authenticating-with-jwt.md
[ldap]: ./google-and-ldap.md#enabling-ldap-authentication
[ldap-group-membership-filter]: ./google-and-ldap.md#ldap-group-membership-filter
[ldap-user-attributes]: ./google-and-ldap.md#syncing-user-attributes-with-ldap
[saml-okta]: ./saml-okta.md
[saml]: ./authenticating-with-saml.md
[saml-auth0]: ./saml-auth0.md
[saml-google]: ./saml-google.md
[saml-keycloak]: ./saml-keycloak.md
[sso-def]: https://www.metabase.com/glossary/sso
