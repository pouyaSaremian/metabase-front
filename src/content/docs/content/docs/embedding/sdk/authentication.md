---
title: SDK تجزیه و تحلیل تعبیه‌شده - احراز هویت
---

# SDK تجزیه و تحلیل تعبیه‌شده - احراز هویت

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

برای استفاده از SDK در تولید، نیاز دارید احراز هویت با SSO را راه‌اندازی کنید.

اگر به صورت محلی در حال توسعه هستید، همچنین می‌توانید احراز هویت با [کلیدهای API](#authenticating-locally-with-api-keys) را راه‌اندازی کنید.

## راه‌اندازی JWT SSO

برای راه‌اندازی JWT SSO، نیاز دارید [یک مجوز متابیس Pro یا Enterprise](https://www.metabase.com/pricing/) (اگر مجوز ندارید، [این شروع سریع](./quickstart.md) را بررسی کنید که راه‌اندازی JWT SSO پولی ندارد)

در اینجا یک نمای کلی سطح بالا آمده است:

۱. [فعال کردن JWT SSO در متابیس](#1-enable-jwt-sso-in-your-metabase)
۲. [افزودن یک endpoint جدید به backend برای مدیریت احراز هویت](#2-add-a-new-endpoint-to-your-backend-to-handle-authentication)
۳. [متصل کردن SDK در frontend به endpoint جدید](#3-wire-the-sdk-in-your-frontend-to-your-new-endpoint)

### ۱. فعال کردن JWT SSO در متابیس

۱. JWT را با رفتن به **Admin Settings** > **Settings** > **Authentication** و کلیک روی **Setup** پیکربندی کنید
۲. JWT Identity Provider URI را وارد کنید، مثلاً `http://localhost:9090/sso/metabase`. این یک endpoint جدید است که در backend خود برای مدیریت احراز هویت اضافه خواهید کرد.
۳. یک کلید تولید کنید و آن را در clipboard خود کپی کنید.

### ۲. افزودن یک endpoint جدید به backend برای مدیریت احراز هویت

نیاز دارید یک کتابخانه به backend خود اضافه کنید تا JSON Web Tokenهای خود را امضا کنید.

برای Node.js، jsonwebtoken را توصیه می‌کنیم:

```
npm install jsonwebtoken --save
```

بعد، یک endpoint در backend خود راه‌اندازی کنید (مثلاً، `/sso/metabase`) که از secret مشترک JWT متابیس شما برای تولید یک JWT برای کاربر احراز هویت شده استفاده می‌کند. **این endpoint باید یک شی JSON با ویژگی `jwt` حاوی JWT امضا شده را برگرداند.** به عنوان مثال: `{ "jwt": "your-signed-jwt" }`.

این کد نمونه برای Node.js یک endpoint با استفاده از Express راه‌اندازی می‌کند:

```js
{% include_file "{{ dirname }}/snippets/authentication/express-server.ts" %}
```

مثال با استفاده از Next.js App Router:

```typescript
{% include_file "{{ dirname }}/snippets/next-js/app-router-authentication-api-route.ts" %}
```

مثال با استفاده از Next.js Pages Router:

```typescript
{% include_file "{{ dirname }}/snippets/next-js/pages-router-authentication-api-route.ts" %}
```

#### مدیریت جاسازی‌های تعاملی و SDK با همان endpoint

اگر یک endpoint backend موجود پیکربندی شده برای جاسازی تعاملی دارید و می‌خواهید از همان endpoint برای جاسازی SDK استفاده کنید، می‌توانید بین درخواست‌ها با بررسی پارامتر query `response=json` که SDK به درخواست‌های خود اضافه می‌کند تفاوت قائل شوید.

- برای درخواست‌های SDK، باید یک شی JSON با JWT (`{ jwt: string }`) برگردانید.
- برای درخواست‌های جاسازی تعاملی، با redirect ادامه می‌دهید.

در اینجا یک مثال از یک endpoint Express.js که هر دو را مدیریت می‌کند آمده است:

```typescript
{% include_file "{{ dirname }}/snippets/authentication/express-server-interactive-and-sdk.ts" %}
```

### ۳. متصل کردن SDK در frontend به endpoint جدید

پیکربندی SDK را در کد frontend خود برای اشاره به endpoint احراز هویت backend به‌روزرسانی کنید.

```js
{% include_file "{{ dirname }}/snippets/authentication/auth-config-base.tsx" snippet="example" %}
```

(اختیاری) اگر از headerها به جای کوکی‌ها برای احراز هویت تماس‌ها از frontend به backend استفاده می‌کنید، نیاز دارید از [یک تابع fetch سفارشی](#customizing-jwt-authentication) استفاده کنید.

## اگر frontend و backend شما دامنه مشترک ندارند، باید CORS را فعال کنید

می‌توانید برخی middleware در backend خود برای مدیریت درخواست‌های cross-domain اضافه کنید.

```js
{% include_file "{{ dirname }}/snippets/authentication/express-server-cors.ts" snippet="example" %}
```

## سفارشی کردن احراز هویت JWT

می‌توانید نحوه دریافت توکن درخواست توسط SDK را با مشخص کردن تابع `fetchRequestToken` با تابع `defineMetabaseAuthConfig` سفارشی کنید:

```typescript
{% include_file "{{ dirname }}/snippets/authentication/auth-config-jwt.tsx" snippet="example" %}
```

پاسخ باید در فرم `{ jwt: "{JWT_TOKEN}" }` باشد

## احراز هویت با SAML SSO

{% include plans-blockquote.html feature="SAML authentication" sdk=true %}

برای استفاده از single sign-on SAML با SDK تجزیه و تحلیل تعبیه‌شده، نیاز دارید SAML را هم در متابیس و هم در Identity Provider (IdP) خود راه‌اندازی کنید. مستندات [احراز هویت مبتنی بر SAML](../../people-and-groups/authenticating-with-saml.md) را ببینید.

پس از پیکربندی SAML در متابیس و IdP شما، می‌توانید SDK را برای استفاده از SAML با تنظیم `preferredAuthMethod` در `MetabaseAuthConfig` خود روی `"saml"` پیکربندی کنید:

```typescript
{% include_file "{{ dirname }}/snippets/authentication/auth-config-saml.tsx" snippet="example" %}
```

استفاده از احراز هویت SAML با SDK تجزیه و تحلیل تعبیه‌شده معمولاً شامل redirect کردن افراد به یک popup با صفحه ورود Identity Provider شما برای احراز هویت است. پس از احراز هویت موفق، فرد به محتوای جاسازی شده redirect می‌شود.

به دلیل ماهیت redirectها و popupهای درگیر در جریان SAML، احراز هویت SAML با SDK ممکن است در همه زمینه‌های جاسازی، به ویژه درون iframeها، بسته به سیاست‌های امنیتی مرورگر و پیکربندی IdP شما به طور یکپارچه کار نکند. توصیه می‌کنیم جریان‌های auth را در محیط‌های هدف خود تست کنید.

برخلاف احراز هویت JWT، نمی‌توانید یک تابع `fetchRequestToken` سفارشی در backend خود هنگام جفت کردن SAML با SDK پیاده‌سازی کنید.

## اگر هم SAML و هم JWT فعال باشند، SDK به طور پیش‌فرض از SAML استفاده می‌کند

می‌توانید این رفتار پیش‌فرض را با تنظیم `preferredAuthMethod="jwt"` در پیکربندی احراز هویت خود override کنید:

```typescript
authConfig: {
  metabaseInstanceUrl: "...",
  preferredAuthMethod: "jwt",
  // other JWT config...
}
```

## دریافت وضعیت احراز هویت متابیس

می‌توانید وضعیت احراز هویت متابیس را با استفاده از hook `useMetabaseAuthStatus` پرس‌وجو کنید. این مفید است اگر می‌خواهید اجزای متابیس را به طور کامل زمانی که کاربر احراز هویت نشده است مخفی کنید.

این hook فقط می‌تواند درون اجزای wrapped شده توسط `MetabaseProvider` استفاده شود.

```jsx
{% include_file "{{ dirname }}/snippets/authentication/get-auth-status.tsx" snippet="example" %}
```

## احراز هویت محلی با کلیدهای API

> SDK تجزیه و تحلیل تعبیه‌شده فقط از احراز هویت JWT در تولید پشتیبانی می‌کند. احراز هویت با کلیدهای API فقط برای توسعه محلی و اهداف ارزیابی پشتیبانی می‌شود.

برای توسعه محلی برای امتحان SDK، می‌توانید با استفاده از یک کلید API احراز هویت کنید.

ابتدا، یک [کلید API](../../people-and-groups/api-keys.md) ایجاد کنید.

سپس می‌توانید از کلید API برای احراز هویت با متابیس در برنامه خود استفاده کنید. فقط نیاز دارید کلید API خود را در شی config با کلید: `apiKey` شامل کنید.

```typescript
{% include_file "{{ dirname }}/snippets/authentication/auth-config-api-key.tsx" %}
```

## هشدار امنیتی: هر کاربر نهایی _باید_ حساب متابیس خود را داشته باشد

هر کاربر نهایی _باید_ حساب متابیس خود را داشته باشد.

مشکل اشتراک‌گذاری یک حساب متابیس بین کاربران نهایی این است که، حتی اگر داده را در سمت کلاینت از طریق SDK فیلتر کنید، همه کاربران نهایی همچنان به توکن جلسه دسترسی خواهند داشت، که می‌توانند از آن برای دسترسی مستقیم به متابیس از طریق API برای دریافت داده‌هایی که نباید ببینند استفاده کنند.

با این حال، اگر هر کاربر نهایی حساب متابیس خود را داشته باشد، می‌توانید مجوزها را در متابیس پیکربندی کنید و همه فقط به داده‌هایی که باید دسترسی خواهند داشت.

علاوه بر این، ما حساب‌های اشتراکی را استفاده ناعادلانه می‌دانیم. استفاده عادلانه از SDK شامل دادن حساب متابیس خود به هر کاربر نهایی تجزیه و تحلیل جاسازی‌شده است.

## راهنمای ارتقا برای راه‌اندازی‌های JWT SSO در نسخه SDK 54 یا پایین‌تر

اگر از نسخه SDK 1.54.x یا پایین‌تر ارتقا می‌دهید و از JWT SSO استفاده می‌کنید، نیاز دارید تغییرات زیر را انجام دهید.

**تغییرات Frontend**:

- [حذف `authProviderUri` از همه فراخوانی‌های `defineMetabaseAuthConfig`](#remove-authprovideruri-from-your-auth-config)
- **اگر از `fetchRequestToken` سفارشی استفاده می‌کنید:** [به‌روزرسانی signature تابع و hardcode کردن URLهای endpoint احراز هویت](#update-the-fetchrequesttoken-function-signature)

**تغییرات Backend**:

- [به‌روزرسانی endpoint backend برای برگرداندن پاسخ JSON `{ jwt: "token" }` برای درخواست‌های SDK](#update-your-jwt-endpoint-to-handle-sdk-requests).

علاوه بر این، اگر SAML راه‌اندازی شده است، اما ترجیح می‌دهید از JWT SSO استفاده کنید، نیاز دارید یک [روش احراز هویت ترجیحی](#if-both-saml-and-jwt-are-enabled-the-sdk-will-default-to-saml) تنظیم کنید.

### حذف `authProviderUri` از پیکربندی auth

`defineMetabaseAuthConfig` دیگر پارامتر `authProviderUri` را نمی‌پذیرد، بنابراین باید آن را حذف کنید.

**تغییرات تنظیمات Admin در متابیس**:

در **Admin Settings** > **Authentication** > **JWT SSO**، `JWT Identity Provider URI` را روی URL endpoint JWT SSO خود تنظیم کنید، مثلاً، `http://localhost:9090/sso/metabase`.

**قبل:**

```jsx
const authConfig = defineMetabaseAuthConfig({
  metabaseInstanceUrl: "https://your-metabase.example.com",
  authProviderUri: "http://localhost:9090/sso/metabase", // این خط را حذف کنید
});
```

**بعد:**

```jsx
const authConfig = defineMetabaseAuthConfig({
  metabaseInstanceUrl: "https://your-metabase.example.com",
});
```

SDK اکنون از تنظیم JWT Identity Provider URI پیکربندی شده در تنظیمات admin متابیس شما استفاده می‌کند (Admin > Settings > Authentication > JWT).

### به‌روزرسانی signature تابع `fetchRequestToken`

تابع `fetchRequestToken` دیگر پارامتر URL دریافت نمی‌کند. اکنون باید endpoint احراز هویت خود را مستقیماً در تابع مشخص کنید.

**قبل:**

```jsx
const authConfig = defineMetabaseAuthConfig({
  fetchRequestToken: async (url) => {
    // پارامتر url را حذف کنید
    const response = await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${yourToken}` },
    });
    return await response.json();
  },
  metabaseInstanceUrl: "http://localhost:3000",
  authProviderUri: "http://localhost:9090/sso/metabase", // این خط را حذف کنید
});
```

**بعد:**

```jsx
const authConfig = defineMetabaseAuthConfig({
  fetchRequestToken: async () => {
    // بدون پارامتر
    const response = await fetch("http://localhost:9090/sso/metabase", {
      // URL endpoint خود را hardcode کنید
      method: "GET",
      headers: { Authorization: `Bearer ${yourToken}` },
    });
    return await response.json();
  },
  metabaseInstanceUrl: "http://localhost:3000",
});
```

### به‌روزرسانی endpoint JWT برای مدیریت درخواست‌های SDK

endpoint JWT شما اکنون باید هم درخواست‌های SDK و هم درخواست‌های جاسازی تعاملی را مدیریت کند. SDK یک پارامتر query `response=json` اضافه می‌کند تا درخواست‌های خود را متمایز کند. برای درخواست‌های SDK، یک شی JSON با JWT برگردانید. برای جاسازی تعاملی، همچنان redirect کنید مانند قبل.

اگر از `fetchRequestToken` سفارشی استفاده می‌کردید، نیاز دارید endpoint را برای تشخیص `req.query.response === "json"` برای درخواست‌های SDK به‌روزرسانی کنید.

```jsx
app.get("/sso/metabase", async (req, res) => {
  // درخواست‌های SDK شامل پارامتر query 'response=json' هستند
  const isSdkRequest = req.query.response === "json";

  const user = getCurrentUser(req);

  const token = jwt.sign(
    {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      groups: [user.group],
      exp: Math.round(Date.now() / 1000) + 60 * 10,
    },
    METABASE_JWT_SHARED_SECRET,
  );

  if (isSdkRequest) {
    // برای درخواست‌های SDK، یک شی JSON با ویژگی jwt برگردانید
    res.status(200).json({ jwt: token });
  } else {
    // برای جاسازی تعاملی، مانند قبل redirect کنید
    const ssoUrl = `${METABASE_INSTANCE_URL}/auth/sso?token=true&jwt=${token}`;
    res.redirect(ssoUrl);
  }
});
```
