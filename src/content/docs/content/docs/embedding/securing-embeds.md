---
title: ایمن‌سازی متابیس جاسازی شده
summary: چگونه داده‌های حساس را در انواع مختلف جاسازی مخفی و محافظت کنیم.
---

# ایمن‌سازی متابیس جاسازی شده

## ایمن‌سازی جاسازی‌ها با احراز هویت و مجوز

دو روش اساسی برای ایمن‌سازی چیزها در اینترنت وجود دارد:

۱. **احراز هویت** به _اینکه_ کسی کیست نگاه می‌کند (با استفاده از استانداردهایی مانند [JWT](../people-and-groups/authenticating-with-jwt.md) یا [SAML](../people-and-groups/authenticating-with-saml.md)).
۲. **مجوز** به _اینکه_ کسی به چه چیزی دسترسی دارد نگاه می‌کند (با استفاده از استانداردهایی مانند OAuth 2.0).

در این راهنما، عمدتاً در مورد احراز هویت صحبت خواهیم کرد.

## جاسازی عمومی

[جاسازی عمومی](public-links.md#public-embeds) شامل هیچ احراز هویت یا مجوزی نمی‌شود. یک جاسازی عمومی یک لینک عمومی با یک رشته منحصر به فرد در انتها نمایش می‌دهد، مانند این:

```plaintext
https://my-metabase.com/public/dashboard/184f819c-2c80-4b2d-80f8-26bffaae5d8b
```

رشته (در این مثال: `184f819c-2c80-4b2d-80f8-26bffaae5d8b`) به طور منحصر به فرد سؤال یا داشبورد متابیس شما را شناسایی می‌کند. از آنجایی که جاسازی‌های عمومی هیچ احراز هویت یا مجوزی انجام نمی‌دهند، هر کسی با URL می‌تواند داده را مشاهده کند.

### مثال: فیلترها در لینک‌های عمومی داده را ایمن نمی‌کنند

پس، چگونه کسی می‌تواند یک جاسازی عمومی را سوء استفاده کند؟ بگویید یک داشبورد داریم که داده Accounts را نمایش می‌دهد:

| Account ID | Plan    | Status   |
| ---------- | ------- | -------- |
| 1          | Basic   | Active   |
| 2          | Basic   | Active   |
| 3          | Basic   | Inactive |
| 4          | Premium | Inactive |
| 5          | Premium | Active   |

می‌خواهیم یک فیلتر "Status = Active" اضافه کنیم و لینک عمومی داشبورد را در یک جاسازی نمایش دهیم:

| Account ID | Plan    | Status |
| ---------- | ------- | ------ |
| 1          | Basic   | Active |
| 2          | Basic   | Active |
| 5          | Premium | Active |

برای اعمال و مخفی کردن فیلتر "Status = Active"، [پارامترهای query](public-links.md#public-embed-parameters) را به انتهای لینک عمومی در جاسازی خود اضافه می‌کنیم:

```plaintext
https://my-metabase.com/public/dashboard/184f819c-2c80-4b2d-80f8-26bffaae5d8b?status=active#hide_parameters=status
```

حتی اگر فیلتر را از جاسازی مخفی کرده باشیم، کسی می‌تواند لینک عمومی استفاده شده در جاسازی را بگیرد و پارامتر query `?status=active` را حذف کند:

```plaintext
https://my-metabase.com/public/dashboard/184f819c-2c80-4b2d-80f8-26bffaae5d8b
```

بارگذاری لینک عمومی بدون پارامتر query فیلتر "Status = Active" را از داده حذف می‌کند. فرد به داده Accounts اصلی دسترسی پیدا می‌کند، از جمله ردیف‌هایی با حساب‌های غیرفعال.

## جاسازی‌های ایستا با JWT مجاز می‌شوند

جاسازی ایستا از یک [جریان مجوز JWT](#static-embedding-with-jwt-authorization) برای انجام دو کار استفاده می‌کند:

- امضای منابع (مثلاً، URLهای نمودارها یا داشبوردها) برای اطمینان از اینکه فقط برنامه جاسازی شما می‌تواند از متابیس شما درخواست داده کند.
- امضای پارامترها (مثلاً، فیلترهای داشبورد) برای جلوگیری از [تغییر فیلترها](#example-filters-in-public-links-dont-secure-data) و دسترسی به داده‌های دیگر.

### جاسازی‌های ایستا جلسات کاربر ندارند

جاسازی‌های ایستا هویت افراد را در سمت متابیس احراز هویت نمی‌کنند، بنابراین افراد می‌توانند یک جاسازی ایستا را بدون ایجاد حساب متابیس مشاهده کنند. با این حال، بدون حساب متابیس، متابیس راهی برای به خاطر سپردن یک کاربر یا جلسه آن‌ها نخواهد داشت، که به این معنی است:

- [مجوزهای](../permissions/introduction.md) متابیس و [امنیت ردیف و ستون](../permissions/row-and-column-security.md) کار نمی‌کنند --- اگر نیاز دارید داده حساس را قفل کنید، باید [پارامترهای قفل شده](#example-securing-data-with-locked-parameters-on-a-static-embed) را برای _هر_ یک از جاسازی‌های ایستای خود راه‌اندازی کنید.
- هر انتخاب فیلتر در یک جاسازی ایستا پس از انقضای JWT امضا شده بازنشانی می‌شود.
- همه استفاده از جاسازی ایستا در [تحلیل استفاده](../usage-and-performance-tools/usage-analytics.md) تحت "External user" نمایش داده می‌شود.

## امنیت در جاسازی ایستا در مقابل جاسازی ماژولار و تعاملی

جاسازی ایستا فقط دسترسی مجاز به داده متابیس شما را تضمین می‌کند (شما تصمیم می‌گیرید _چه چیزی_ قابل دسترسی است).

اگر می‌خواهید جاسازی‌های ایستای خود را بر اساس هویت کسی ایمن کنید (شما تصمیم می‌گیرید _چه کسی_ به _چه چیزی_ دسترسی دارد)، باید جریان احراز هویت خود را راه‌اندازی کنید و به صورت دستی آن را به [پارامترهای قفل شده](#example-sending-user-attributes-to-a-locked-parameter) در هر یک از جاسازی‌های ایستای خود متصل کنید. توجه داشته باشید که پارامترهای قفل شده اساساً فیلترها هستند، بنابراین فقط می‌توانید محدودیت‌های **سطح ردیف** را در یک جاسازی ایستا راه‌اندازی کنید.

اگر می‌خواهید راه آسان‌تری برای جاسازی نمای‌های مختلف داده برای مشتریان مختلف (بدون اجازه دادن به مشتریان برای دیدن داده یکدیگر) داشته باشید، یاد بگیرید که [جاسازی ماژولار و تعاملی چگونه افراد را در یک جریان احراز هویت و مجوز می‌دهد](#modular-and-interactive-embedding-auth-with-jwt-or-saml).

### جاسازی ایستا با مجوز JWT

![Static embedding with JWT authorization.](./images/signed-embedding-jwt.png)

این نمودار نشان می‌دهد که چگونه یک جاسازی با یک JWT امضا شده ایمن می‌شود:

۱. **بازدیدکننده می‌رسد**: frontend شما یک درخواست برای نمایش یک [URL جاسازی متابیس](./static-embedding.md#adding-the-embedding-url-to-your-website) دریافت می‌کند.
۲. **درخواست امضا شده**: backend شما یک URL جاسازی متابیس با یک [JWT امضا شده](./static-embedding.md#how-static-embedding-works) تولید می‌کند. JWT امضا شده باید هر [پارامتر](./static-embedding-parameters.md) query که برای فیلتر کردن داده خود استفاده می‌کنید را encode کند.
۳. **پاسخ**: backend متابیس شما داده را بر اساس پارامترهای query encode شده در JWT امضا شده برمی‌گرداند.
۴. **موفقیت**: frontend شما صفحه متابیس جاسازی شده را با داده صحیح نمایش می‌دهد.

### مثال: ایمن‌سازی داده با پارامترهای قفل شده در یک جاسازی ایستا

در [مثال جاسازی عمومی](#example-filters-in-public-links-dont-secure-data)، به شما نشان دادیم (شاید نابخردانه) که چگونه کسی می‌تواند یک لینک عمومی منحصر به فرد را با ویرایش پارامترهای query آن سوء استفاده کند.

بیایید به مثال Accounts خود برگردیم:

| Account ID | Plan    | Status   |
| ---------- | ------- | -------- |
| 1          | Basic   | Active   |
| 2          | Basic   | Active   |
| 3          | Basic   | Inactive |
| 4          | Premium | Inactive |
| 5          | Premium | Active   |

به یاد داشته باشید، می‌توانیم داده را در یک جاسازی عمومی با شامل کردن یک پارامتر query در انتهای URL جاسازی فیلتر کنیم:

```plaintext
https://my-metabase.com/public/dashboard/184f819c-2c80-4b2d-80f8-26bffaae5d8b?status=active
```

| Account ID | Plan    | Status |
| ---------- | ------- | ------ |
| 1          | Basic   | Active |
| 2          | Basic   | Active |
| 5          | Premium | Active |

با جاسازی‌های ایستا، می‌توانیم فیلتر را با encode کردن پارامتر query در یک JWT امضا شده "قفل" کنیم. به عنوان مثال، بگویید فیلتر "Status = Active" را به عنوان یک [پارامتر قفل شده](./static-embedding-parameters.md) راه‌اندازی می‌کنیم. پارامتر query `?status=active` در JWT امضا شده encode می‌شود، بنابراین از URL جاسازی ایستا قابل مشاهده یا قابل ویرایش نخواهد بود:

```plaintext
https://my-metabase.com/dashboard/your_signed_jwt
```

اگر کسی سعی کند یک پارامتر query (امضا نشده) به انتهای URL جاسازی ایستا اضافه کند مانند این:

```plaintext
https://my-metabase.com/dashboard/your_signed_jwt?status=inactive
```

متابیس این درخواست غیرمجاز برای داده را رد می‌کند، بنابراین ردیف‌های حساب غیرفعال از جاسازی مخفی می‌مانند.

### مثال: ارسال ویژگی‌های کاربر به یک پارامتر قفل شده

بگویید که می‌خواهیم جدول Accounts را به مشتریان خود در معرض نمایش قرار دهیم، تا مشتریان بتوانند یک ردیف را بر اساس Account ID جستجو کنند.

| Account ID | Plan    | Status   |
| ---------- | ------- | -------- |
| 1          | Basic   | Active   |
| 2          | Basic   | Active   |
| 3          | Basic   | Inactive |
| 4          | Premium | Inactive |
| 5          | Premium | Active   |

اگر می‌خواهیم از ایجاد ورود متابیس برای هر یک از مشتریان خود جلوگیری کنیم، نیاز داریم:

- یک [داشبورد قابل جاسازی](./static-embedding.md#making-a-question-or-dashboard-embeddable) با داده Accounts.
- یک [پارامتر قفل شده](./static-embedding-parameters.md) برای فیلتر Account ID.
- یک جریان ورود در برنامه جاسازی خود (برنامه وب که می‌خواهیم متابیس را در آن جاسازی کنیم).

جریان ممکن است چیزی شبیه به این باشد:

۱. یک مشتری به برنامه وب ما وارد می‌شود.
۲. backend برنامه ما `account_id` مشتری را بر اساس ایمیل حساب استفاده شده در هنگام ورود جستجو می‌کند.
۳. backend برنامه ما از [کلید secret متابیس](./static-embedding.md#regenerating-the-static-embedding-secret-key) برای [تولید URL جاسازی](./static-embedding.md#how-static-embedding-works) با یک JWT امضا شده استفاده می‌کند. JWT امضا شده پارامترهای query را برای فیلتر کردن داشبورد Accounts روی `Account ID = account_id` encode می‌کند.
۴. متابیس داشبورد فیلتر شده را در URL جاسازی ایستا برمی‌گرداند.
۵. frontend برنامه ما داشبورد فیلتر شده را در یک iframe نمایش می‌دهد.

برای نمونه‌های کد، [برنامه مرجع جاسازی ایستا](https://github.com/metabase/embedding-reference-apps) را ببینید.

## احراز هویت جاسازی ماژولار و تعاملی با JWT یا SAML

جاسازی ماژولار (با استفاده از اجزای [SDK](./sdk/introduction.md) یا [JS](./embedded-analytics-js.md) تجزیه و تحلیل تعبیه‌شده)، و [جاسازی کامل برنامه تعاملی](./interactive-embedding.md) با SSO (یا [JWT](../people-and-groups/authenticating-with-jwt.md) یا [SAML](../people-and-groups/authenticating-with-saml.md)) یکپارچه می‌شوند تا افراد را در یک جریان احراز هویت و مجوز دهند. یکپارچه‌سازی auth این را آسان می‌کند که ویژگی‌های کاربر (مانند نقش یا بخش یک فرد) را به سطوح دانه‌بندی شده دسترسی داده نگاشت کنیم، از جمله:

- [جداول](../permissions/data.md)
- [ردیف‌ها](../permissions/row-and-column-security.md#row-level-security-filter-by-a-column-in-the-table)
- [ستون‌ها](../permissions/row-and-column-security.md#custom-row-and-column-security-use-a-sql-question-to-create-a-custom-view-of-a-table)
- [مجوزهای داده دیگر](../permissions/data.md)، مانند مجوزهای دانلود داده یا دسترسی SQL.

![Interactive embedding with SSO.](./images/full-app-embedding-sso.png)

این نمودار نشان می‌دهد که چگونه یک جاسازی تعاملی با [SSO](../people-and-groups/start.md#sso-for-metabase-pro-and-enterprise-plans) ایمن می‌شود:

۱. **بازدیدکننده می‌رسد**: frontend شما یک درخواست برای نمایش همه محتوا، از جمله یک جزء متابیس (مانند یک جزء React) دریافت می‌کند.
۲. **بارگذاری جاسازی**: جزء frontend شما frontend متابیس را با استفاده از [URL جاسازی](./interactive-embedding.md#pointing-an-iframe-to-a-metabase-url) خود بارگذاری می‌کند.
۳. **بررسی جلسه**: برای نمایش داده در URL جاسازی، backend متابیس شما برای یک جلسه معتبر (یک بازدیدکننده وارد شده) بررسی می‌کند.
۴. **اگر جلسه معتبری وجود ندارد**:
   - **Redirect به SSO**: frontend متابیس شما بازدیدکننده را به صفحه ورود SSO شما redirect می‌کند.
   - **احراز هویت SSO**: جریان SSO شما بازدیدکننده را احراز هویت می‌کند و یک جلسه بر اساس هویت آن‌ها تولید می‌کند. اطلاعات جلسه باید ویژگی‌های کاربر مانند عضویت گروه و مجوزهای [امنیت ردیف و ستون](../permissions/row-and-column-security.md) را encode کند.
   - **Redirect به متابیس**: جریان SSO شما بازدیدکننده را با اطلاعات جلسه به frontend متابیس شما redirect می‌کند.
۵. **درخواست**: frontend متابیس شما درخواست برای داده را به backend متابیس ارسال می‌کند، همراه با اطلاعات جلسه.
۶. **پاسخ**: backend متابیس شما داده را بر اساس ویژگی‌های کاربر encode شده در اطلاعات جلسه برمی‌گرداند.
۷. **موفقیت**: جزء frontend شما صفحه متابیس جاسازی شده را با داده صحیح برای بازدیدکننده وارد شده نمایش می‌دهد.

مکانیک مرحله ۴ بسته به اینکه از [JWT](../people-and-groups/authenticating-with-jwt.md) یا [SAML](../people-and-groups/authenticating-with-saml.md) برای SSO استفاده می‌کنید کمی متفاوت خواهد بود.

### مثال: ایمن‌سازی داده با SSO و امنیت ردیف و ستون

در مثال جاسازی ایستای خود، از [پارامترهای قفل شده](#example-securing-data-with-locked-parameters-on-a-static-embed) برای نمایش نمای‌های فیلتر شده امن جدول Accounts استفاده کردیم.

نکته خوب در مورد جاسازی ماژولار/تعاملی و یکپارچه‌سازی [SSO](../people-and-groups/start.md#sso-for-metabase-pro-and-enterprise-plans) این است که نیازی به مدیریت دستی پارامترهای قفل شده برای هر جاسازی نداریم. در عوض، می‌توانیم ویژگی‌های کاربر را از identity provider (IdP) خود به [مجوزها](../permissions/introduction.md) و [امنیت ردیف و ستون](../permissions/row-and-column-security.md) در متابیس نگاشت کنیم. افراد می‌توانند از اولین ورود خود احراز هویت و مجوز شوند تا زیرمجموعه‌های خاص داده را خودخدمت کنند.

بیایید مثال Accounts خود را برای شامل کردن یک Tenant ID گسترش دهیم. Tenant ID نشان‌دهنده سازمان والد برای یک گروه از مشتریان است:

| Tenant ID | Account ID | Plan    | Status   |
| --------- | ---------- | ------- | -------- |
| 999       | 1          | Basic   | Active   |
| 999       | 2          | Basic   | Active   |
| 999       | 3          | Basic   | Inactive |
| 777       | 4          | Premium | Inactive |
| 777       | 5          | Premium | Active   |

هنوز می‌خواهیم جدول Accounts را به مشتریان خود در معرض نمایش قرار دهیم، اما با چند نیاز اضافی:

- مشتریان فردی فقط می‌توانند داده برای Account ID خود را مشاهده کنند.
- مستأجران می‌توانند همه حساب‌های فرزند خود را مشاهده کنند (اما نه داده مستأجران دیگر).

برای راه‌اندازی این مجوزهای چندمستأجری، نیاز داریم:

۱. یک ویژگی `primary_id` در IdP خود ایجاد کنیم تا همه مستأجران و مشتریان را به طور منحصر به فرد شناسایی کنیم.
۲. یک ویژگی کاربر در IdP خود به نام `role` ایجاد کنیم و آن را برای هر فردی که از متابیس استفاده خواهد کرد روی `tenant` یا `customer` تنظیم کنیم.
۳. دو گروه در متابیس ایجاد کنیم: Tenants و Customers.
۴. عضویت گروه را بین متابیس و IdP خود همگام‌سازی کنیم تا:
   - افرادی با `role=tenant` به گروه Tenant اختصاص داده شوند.
   - افرادی با `role=customer` به گروه Customers اختصاص داده شوند.
۵. امنیت سطح ردیف را روی جدول Accounts برای هر گروه راه‌اندازی کنیم:
   - برای گروه Customers، جدول Accounts با `Account ID = primary_id` محدود می‌شود.
   - برای گروه Tenants، جدول Accounts با `Tenant ID = primary_id` محدود می‌شود.

وقتی Tenant A با SSO برای اولین بار وارد می‌شود:

- متابیس یک حساب برای آن‌ها ایجاد می‌کند.
- IdP ما ویژگی‌های `role=tenant` و `primary_id=999` را به متابیس ارسال می‌کند.
- متابیس به طور خودکار Tenant A را به گروه Tenant اختصاص می‌دهد.
- Tenant A مجوزهای گروه Tenant را دریافت می‌کند (از جمله امنیت ردیف و ستون).
- Tenant A یک نمای محدود شده از جدول Accounts را در همه جا در متابیس می‌بیند:

| Tenant ID | Account ID | Plan  | Status   |
| --------- | ---------- | ----- | -------- |
| 999       | 1          | Basic | Active   |
| 999       | 2          | Basic | Active   |
| 999       | 3          | Basic | Inactive |

وقتی Customer 1 وارد می‌شود، یک نسخه فیلتر شده متفاوت از جدول Accounts را بر اساس ویژگی‌های `role` و `primary_id` خود می‌بیند:

| Tenant ID | Account ID | Plan  | Status |
| --------- | ---------- | ----- | ------ |
| A         | 1          | Basic | Active |

## برنامه‌های نمونه

- [دموی جاسازی ماژولار](https://embedded-analytics-sdk-demo.metabase.com)
- [برنامه مرجع جاسازی ماژولار با SDK](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample)
- [دموی جاسازی تعاملی](https://embedding-demo.metabase.com/)
- [برنامه مرجع جاسازی تعاملی](https://github.com/metabase/sso-examples/tree/master/app-embed-example)
- [برنامه مرجع جاسازی ایستا](https://github.com/metabase/embedding-reference-apps)

## مطالعه بیشتر

- [پیکربندی مجوزها برای schemaهای مختلف مشتری](../permissions/embedding.md)
