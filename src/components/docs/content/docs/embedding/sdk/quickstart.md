---
title: SDK تجزیه و تحلیل تعبیه‌شده - شروع سریع
description: "این راهنما شما را در نحوه راه‌اندازی SDK تجزیه و تحلیل تعبیه‌شده در برنامه خود با متابیس راهنمایی می‌کند"
---

# SDK تجزیه و تحلیل تعبیه‌شده - شروع سریع

این راهنما شما را در نحوه راه‌اندازی SDK تجزیه و تحلیل تعبیه‌شده در برنامه خود با متابیس با استفاده از کلیدهای API راهنمایی می‌کند.

این راه‌اندازی:

- فقط برای ارزیابی است (تا بتوانید ببینید SDK چگونه کار می‌کند).
- فقط در localhost هنگام توسعه برنامه شما کار می‌کند (اگرچه متابیس شما نیازی به اجرای محلی ندارد).
- با هر دو نسخه Enterprise و Open Source متابیس، هم self-hosted و هم در Metabase Cloud کار می‌کند.

با این حال، اگر می‌خواهید از SDK در تولید استفاده کنید، همچنین نیاز دارید [احراز هویت SSO JWT را راه‌اندازی کنید](./authentication.md)، که نیاز به یک [پلن Pro](https://store.metabase.com/checkout/embedding) یا [Enterprise](https://www.metabase.com/pricing/) دارد. برای فعال کردن JWT SSO وقتی که متابیس را self-host می‌کنید، نیاز دارید تصویر Docker یا JAR نسخه Enterprise را اجرا کنید و [مجوز خود را فعال کنید](../../installation-and-operation/activating-the-enterprise-edition.md).

## پیش‌نیازها

- نسخه [متابیس](https://github.com/metabase/metabase/releases) 52 یا بالاتر (OSS یا EE). [نصب متابیس](../../installation-and-operation/installing-metabase.md) را ببینید.
- مطمئن شوید [نسخه React شما سازگار است](./introduction.md#embedded-analytics-sdk-prerequisites). (همچنین می‌توانید از [برنامه نمونه React](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable) استفاده کنید.)

اگر متابیس در حال اجرا _ندارید_، [شروع سریع CLI](./quickstart-cli.md) را بررسی کنید.

اگر _نمی‌خواهید_ از کد برنامه خود استفاده کنید، [شروع سریع با یک برنامه نمونه](./quickstart-with-sample-app.md) ما را بررسی کنید.

## نمای کلی

برای جاسازی یک داشبورد در برنامه خود با استفاده از SDK، نیاز دارید:

۱. [SDK را در متابیس فعال کنید](#1-enable-the-sdk-in-metabase)
۲. [یک کلید API در متابیس ایجاد کنید](#2-create-an-api-key-in-metabase)
۳. [SDK را در برنامه خود نصب کنید](#3-install-the-sdk-in-your-app)
۴. [اجزای SDK را در برنامه خود جاسازی کنید](#4-embed-sdk-components-in-your-app)
۵. [داشبورد متابیس جاسازی شده خود را مشاهده کنید](#5-view-your-embedded-metabase-dashboard)

## ۱. فعال کردن SDK در متابیس

در متابیس، روی آیکون چرخ‌دنده در بالا سمت راست کلیک کنید و به **Admin Settings > Embedding > Modular** بروید و **SDK for React** را فعال کنید.

## ۲. ایجاد یک کلید API در متابیس

هنوز در کنسول Admin، به **Settings > Authentication** بروید و روی تب **API keys** کلیک کنید. [یک کلید API جدید ایجاد کنید](../../people-and-groups/api-keys.md).

- نام کلید: "Embedded analytics SDK" (فقط برای اینکه کلید را آسان شناسایی کنید).
- گروه: "Admin" را انتخاب کنید (از آنجایی که این فقط برای تست محلی است).

## ۳. نصب SDK در برنامه خود

هنگام نصب بسته npm، استفاده از npm dist-tag که با نسخه اصلی متابیس شما مطابقت دارد بسیار مهم است. به عنوان مثال، اگر متابیس شما نسخه 1.56.x است، `56-stable` را اجرا می‌کنید. [نسخه‌گذاری SDK](./version.md) را ببینید.

از طریق npm:

```
npm install @metabase/embedding-sdk-react@53-stable
```

از طریق Yarn:

```
yarn add @metabase/embedding-sdk-react@53-stable
```

## ۴. جاسازی اجزای SDK در برنامه خود

در برنامه خود، اجزای SDK را import کنید، مانند این:

```jsx
{% include_file "{{ dirname }}/snippets/quickstart/example.tsx" %}
```

## ۵. مشاهده داشبورد متابیس جاسازی شده خود

برنامه خود را اجرا کنید و صفحه با داشبورد جاسازی شده را بازدید کنید.

![Embedded example dashboard](../images/embedded-example-dashboard.png)

## مراحل بعدی

- [تم‌دهی را برای تغییر ظاهر و احساس کاوش کنید](./appearance.md).
- با [راه‌اندازی JWT SSO در متابیس و برنامه خود](./authentication.md) برای ورود افراد، مدیریت مجوزها و استقرار برنامه خود در تولید ادامه دهید.
