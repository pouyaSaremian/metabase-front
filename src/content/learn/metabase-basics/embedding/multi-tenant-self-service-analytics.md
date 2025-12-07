---
title: "تحلیل خودخدمت چند مستأجری"
description: "کل اپلیکیشن متابیس (شامل query builder) را جاسازی کنید تا دسترسی امن و شخصی‌سازی شده به داده به مردم بدهید."
redirect_from:
  - /learn/metabase-basics/embedding/multi-tenant-self-service-analytics
  - /learn/customer-facing-analytics/multi-tenant-self-service-analytics
  - /learn/developing-applications/advanced-metabase/multi-tenant-self-service-analytics
  - /learn/embedding/multi-tenant-self-service-analytics
toc:
  - id: "multi-tenant-self-service-analytics"
    title: "تحلیل خودخدمت چند مستأجری"
    level: 1
    href: "#multi-tenant-self-service-analytics"
  - id: "the-target-customer-experience"
    title: "تجربه مشتری هدف"
    level: 2
    href: "#the-target-customer-experience"
  - id: "the-setup"
    title: "تنظیمات"
    level: 2
    href: "#the-setup"
  - id: "putting-metabase-in-your-app"
    title: "قرار دادن متابیس در اپلیکیشن شما"
    level: 2
    href: "#putting-metabase-in-your-app"
  - id: "public-link"
    title: "لینک عمومی"
    level: 3
    href: "#public-link"
  - id: "public-embed"
    title: "جاسازی عمومی"
    level: 3
    href: "#public-embed"
  - id: "static-embed"
    title: "جاسازی استاتیک"
    level: 3
    href: "#static-embed"
  - id: "embedded-analytics-js"
    title: "Embedded analytics JS"
    level: 3
    href: "#embedded-analytics-js"
  - id: "embedded-analytics-sdk"
    title: "Embedded analytics SDK"
    level: 3
    href: "#embedded-analytics-sdk"
  - id: "white-labeling-branding"
    title: "White labeling (برندینگ)"
    level: 2
    href: "#white-labeling-branding"
  - id: "single-sign-on"
    title: "Single sign-on"
    level: 2
    href: "#single-sign-on"
  - id: "permissions-management"
    title: "مدیریت مجوزها"
    level: 2
    href: "#permissions-management"
  - id: "row-and-column-security"
    title: "امنیت ردیف و ستون"
    level: 3
    href: "#row-and-column-security"
  - id: "impersonation"
    title: "Impersonation"
    level: 3
    href: "#impersonation"
  - id: "database-routing"
    title: "مسیریابی پایگاه داده"
    level: 3
    href: "#database-routing"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "جاسازی"
    href: "../embedding.html"
---

# تحلیل خودخدمت چند مستأجری

کل اپلیکیشن متابیس (شامل query builder) را جاسازی کنید تا دسترسی امن و شخصی‌سازی شده به داده به مردم بدهید.



پس، در حال بررسی جاسازی متابیس در اپلیکیشن خود برای ارائه تحلیل به مشتریان خود هستید. چگونه کار می‌کند؟

در این مقاله، با تجربه هدف برای مشتریان خود که ارائه خواهید داد شروع می‌کنیم، سپس از ویژگی‌های مرتبط که متابیس ارائه می‌دهد صحبت می‌کنیم، و نحوه کار با هم برای ارائه تحلیل خودخدمت.

## تجربه مشتری هدف

بیایید با آنچه تجربه تحلیل نهایی از دیدگاه مشتریان شما به نظر می‌رسد شروع کنیم.

**بازیگران:**

- شرکت شما: Megafauna Analytics
- مشتری 1: MammothCo
- مشتری 2: RhinoCo

**در اینجا آنچه می‌سازیم:**

شما یک شرکت B2B هستید، Megafauna Analytics، و از متابیس برای ارائه گزارش‌دهی به مشتریان خود با جاسازی متابیس در اپلیکیشن خود استفاده می‌کنید.

در اینجا نمای کلی از تجربه مشتری: Woolly از MammothCo به اپلیکیشن شما در megafauna-analytics.com وارد می‌شود، سپس به صفحه تحلیلی که برای MammothCo تنظیم کرده‌اید ناوبری می‌کند. آنجا، Woolly با مجموعه‌ای از صفحه‌ها با داشبوردها و نمودارهای پولیش شده نشان‌دهنده سفارش‌های MammothCo، تراکنش‌ها، و سایر داده برای MammothCo که ارائه داده‌اید، همه با رنگ‌های برند شما—Megafauna—روبرو می‌شود.

بیش از فقط مشاهده داشبوردهای استاتیک، Woolly می‌تواند روی داده رسم شده روی نمودارها کلیک کند و [drill-through](../querying-and-dashboards/questions/drill-through.html) کند. به عنوان مثال، می‌تواند روی یک هفته خاص از تراکنش‌ها zoom کند، یا روی یک میله در یک نمودار کلیک کند تا یک جدول فهرست ردیف‌های تجمیع نشده که آن میله را populate می‌کنند بالا بکشد.

![یک مثال از drill through یک سؤال در متابیس با استفاده از پایگاه داده نمونه شامل شده با نصب شما.](../../images/multi-tenant-embedding/drill-through.gif)

Woolly همچنین می‌تواند سؤال‌های خود را با query builder بپرسد.

![Query builder در متابیس به مردم اجازه کاوش داده خود و ایجاد سؤال‌های جدید را می‌دهد. آن‌ها می‌توانند داده را join کنند، فیلتر کنند، خلاصه کنند، مرتب کنند، از عبارات سفارشی استفاده کنند، و بیشتر.](../../images/multi-tenant-embedding/query-builder.png)

## تنظیمات

برای دادن تجربه Woolly که در بالا outlined شده است، نیاز به تنظیم موارد زیر داریم:

- [جاسازی متابیس در اپلیکیشن شما](#putting-metabase-in-your-app): افزودن drill-through به نمودارها و داشبوردهای جاسازی شده، گردآوری مجموعه‌ها، expose کردن یک query builder از پیش پر شده با یک مجموعه داده، یا حتی expose کردن کل رابط متابیس.
- [White labeling (برندینگ)](#white-labeling-branding): تطبیق نمودارها و داشبوردهای متابیس با ظاهر و احساس اپلیکیشن شما، اطمینان از تطابق با رنگ‌های برند شما (Megafauna).
- [Single sign-on (SSO)](#single-sign-on): فعال کردن اپلیکیشن و متابیس برای توافق روی اینکه کاربران آن‌ها چه کسانی هستند و چه داده‌ای می‌توانند ببینند، مرتبط کردن یک شخص معین در megafauna-analytics.com با یک حساب در متابیس جاسازی شده شما.
- [مدیریت مجوزها](#permissions-management): اجازه دادن به مردم برای کاوش داده خود، بدون دیدن داده هیچ کس دیگر.

در بخش‌های زیر هر ویژگی را با جزئیات مرور می‌کنیم.

## قرار دادن متابیس در اپلیکیشن شما

چندین راه برای handle کردن جاسازی متابیس در اپلیکیشن شما وجود دارد. برای خودخدمت کامل، می‌خواهید با Embedded analytics JS یا SDK بروید. اما در اینجا نمای کلی از گزینه‌ها است.

### لینک عمومی

گزینه dead simple (و ممکن است حتی به طور فنی به عنوان جاسازی واجد شرایط نباشد). یک سؤال یا داشبورد را در متابیس خود قرار می‌دهید، یک لینک به آن برای کسی ارسال می‌کنید، و به آن‌ها می‌گویید آن را به اشتراک نگذارند.

### جاسازی عمومی

یک [جاسازی عمومی](../../../docs/latest/embedding/public-links.html#public-embeds) یک قدم بالاتر است، چون لینک هنوز عمومی است، اما نمودار در اپلیکیشن شما از طریق یک iframe جاسازی شده قابل مشاهده است.

### جاسازی استاتیک

[جاسازی‌های استاتیک](../../../docs/latest/embedding/static-embedding.html) همانند جاسازی‌های عمومی به نظر می‌رسند، اما جاسازی‌های استاتیک یک iframe امن شده توسط یک JSON Web Token (JWT) امضا شده هستند. با جاسازی‌های استاتیک، می‌توانید فیلترهایی روی داشبوردها ایجاد کنید که پارامترها را می‌پذیرند و داده را بر اساس آن پارامترها فیلتر می‌کنند. به عنوان مثال، می‌توانید یک داشبورد پارامتری داشته باشید که یک user ID را می‌پذیرد، پس وقتی آن کاربر وارد می‌شود، داشبورد فقط داده محدود شده به user ID آن‌ها را نمایش می‌دهد. به عبارت دیگر، می‌توانید یک داشبورد عمومی برای داده کاربر ایجاد کنید که هر کاربری می‌تواند به آن دسترسی داشته باشد، اما هر فرد فقط داده مرتبط با خود را می‌بیند.

اشکال بزرگ با جاسازی استاتیک این است که مردم نمی‌توانند [از داده drill through کنند](../querying-and-dashboards/questions/drill-through.html) یا از query builder استفاده کنند، چون متابیس نمی‌داند شخص چه مجوزهای داده‌ای دارد. برای لینک کردن حساب‌ها در سراسر اپلیکیشن و متابیس شما، نیاز به Embedded analytics JS یا SDK و single sign-on داریم.

### Embedded analytics JS

Embedded analytics JS، در ترکیب با SSO و امنیت ردیف و ستون، چیزی است که گزارش‌دهی خودخدمت را ممکن می‌کند. مثل گزینه‌های جاسازی ساده‌تر بالا، یک snippet کد iframe-like به صفحه خود اضافه می‌کنید، فقط این بار می‌توانید هر صفحه متابیس که می‌خواهید را با تعامل کامل جاسازی کنید. در ترکیب با SSO و امنیت ردیف و ستون، متابیس جاسازی شده شما می‌داند Woolly چه کسی است و چه داده‌ای می‌تواند مشاهده کند، که یعنی متابیس می‌تواند به Woolly اجازه drill-through داده خود را بدون توانایی دیدن هر داده از کاربران RhinoCo یا سایر مستأجران بدهد.

و چون کل اپ متابیس در اختیار دارید، می‌توانید به کاربران MammothCo مجموعه‌ها، داشبوردها، و سؤال‌های از پیش تعریف شده، مثل تراکنش‌های هفته به هفته ارائه دهید. همچنین می‌توانید query builder متابیس را expose کنید، که به مشتریانی مثل Woolly اجازه ایجاد سؤال‌ها و داشبوردهای خود (و [حاشیه‌نویسی آن‌ها با Markdown](../querying-and-dashboards/dashboards/markdown.html)) بر اساس نیازهای در حال تکامل آن‌ها برای داده می‌دهد.

مستندات ما درباره [Embedded analytics JS](../../../docs/latest/embedding/embedded-analytics-js.html) را ببینید.

### Embedded analytics SDK

مثل Embedded analytics JS است، اما می‌توانید چیدمان کامپوننت‌ها را سفارشی کنید و رفتار را با pluginها تغییر دهید. می‌توانید از SSO با JWT یا SAML استفاده کنید. نکته: کار بیشتری از Embedded analytics JS است، و اپلیکیشن شما باید از React استفاده کند.

مستندات [SDK](../../../docs/latest/embedding/sdk/introduction.html) ما را بررسی کنید.

## White labeling (برندینگ)

می‌توانید ظاهر متابیس را برای تطابق با ظاهر و احساس اپلیکیشن خود سفارشی کنید. فونت، رنگ‌ها، لوگوها و بیشتر را تغییر دهید تا احساس بخش طبیعی اپلیکیشن شما را بدهد.

![در Admin panel، می‌توانید متابیس را تغییر دهید](../../images/multi-tenant-embedding/white-label-admin.png)

## Single sign-on

Single sign-on (SSO) به شما اجازه می‌دهد کاربران در اپلیکیشن خود را با کاربران در متابیس مرتبط کنید. با استفاده از SSO، از صفحه‌های ورود awkward که نمودارها باید باشند اجتناب می‌کنید. بدون SSO، یک کاربر به اپلیکیشن شما وارد می‌شود، اما هنوز باید به متابیس شما برای مشاهده داشبوردها و نمودارهای جاسازی شده فردی وارد شود—یک تجربه کاربری کمتر از ایده‌آل.

بگویید یک کاربر MammothCo را در اپلیکیشن خود، megafauna-analytics.com، با `name: Woolly; user_id: 13` تنظیم می‌کنید. برای هماهنگی با متابیس، سپس [یک حساب کاربری](../../../docs/latest/people-and-groups/managing.html) برای Woolly در اپ متابیس تنظیم می‌کنید. بعد، نیاز به مرتبط کردن ID Woolly در اپلیکیشن خود، megafauna-analytics.com، با حساب Woolly در متابیس دارید. برای انجام آن، می‌توانید یک attribute به حساب Woolly در متابیس اضافه کنید تا نشان دهد `user_id` Woolly در اپلیکیشن شما `13` است.

![افزودن attributeها به مردم در متابیس برای هماهنگی مجوزهای کاربر بین اپلیکیشن و متابیس جاسازی شده شما.](../../images/multi-tenant-embedding/add-attribute-user.png)

با SSO تنظیم شده، وقتی Woolly به megafauna-analytics.com وارد می‌شود، می‌تواند به صفحه‌هایی با متابیس جاسازی شده ناوبری کند و متابیس می‌داند او چه کسی است، و چه مجوزهایی باید داشته باشد.

مستندات ما درباره SSO را بررسی کنید:

- [احراز هویت با SAML](../../../docs/latest/people-and-groups/authenticating-with-saml.html)
- [احراز هویت مبتنی بر JWT](../../../docs/latest/people-and-groups/authenticating-with-jwt.html)
- [احراز هویت با Google Sign-In یا LDAP](../../../docs/latest/people-and-groups/google-sign-in.html)

## مدیریت مجوزها

حالا که SSO شما جزئیات درباره اینکه چه کسی از اپلیکیشن شما استفاده می‌کند را به متابیس ارائه می‌دهد، متابیس می‌تواند از آن attributeها برای فیلتر کردن آنچه هر شخص می‌بیند استفاده کند، تا ستون‌ها و ردیف‌های جداول خاص.

نحوه مدیریت مجوزها بستگی به نحوه ذخیره داده مشتری شما دارد:

- **Commingled (یک پایگاه داده برای همه مشتریان)**: می‌توانید از [امنیت ردیف و ستون](../../../docs/latest/permissions/row-and-column-security.html) یا [impersonation](../../../docs/latest/permissions/impersonation.html)، به علاوه سایر کنترل‌ها استفاده کنید.
- **Segregated (یک پایگاه داده به ازای هر مشتری)**: می‌توانید از [مسیریابی پایگاه داده](../../../docs/latest/permissions/database-routing.html) (علاوه بر امنیت ردیف و ستون، impersonation، و همه ابزارهای کنترل دسترسی دیگر که متابیس ship می‌کند) استفاده کنید.

### امنیت ردیف و ستون

امنیت ردیف و ستون با فیلتر کردن همه پرس‌وجوها بر اساس یک attribute کاربر کار می‌کند.

به عنوان مثال، اگر جدول `orders` شما شامل همه سفارش‌های مشتری است، می‌توانید آن جدول را بر اساس یک ستون، بگویید `user_id` فیلتر کنید. می‌توانید یک attribute، `user_id`، به کاربران خود در متابیس اختصاص دهید (و آن attribute را به tokenهای ورود آن‌ها attach کنید)، تا وقتی کاربران وارد می‌شوند و `orders` را مشاهده می‌کنند، فقط داده با ردیف‌هایی که با `user_id` آن‌ها match می‌کند را می‌بینند.

![افزودن امنیت ردیف و ستون به جدول Orders با فیلتر کردن سفارش‌ها بر اساس ستون User ID. کاربران فقط سفارش‌هایی که با attribute user_id آن‌ها مطابقت دارد را می‌بینند.](../../images/multi-tenant-embedding/row-and-column-security.png)

مستندات ما درباره [امنیت ردیف و ستون](../../../docs/latest/permissions/row-and-column-security.html) را ببینید.

### Impersonation

Impersonation به شما اجازه می‌دهد مجوزها را به roleها در پایگاه داده خود "outsource" کنید. از impersonation استفاده کنید وقتی ترجیح می‌دهید مجوزها را از طریق roleها در پایگاه داده خود مدیریت کنید، که به خصوص برای اعطای دسترسی SQL به جداول به مردم مفید است. [مستندات درباره impersonation](../../../docs/latest/permissions/impersonation.html) را ببینید.

### مسیریابی پایگاه داده

مسیریابی پایگاه داده برای تنظیمات یک-پایگاه-داده-به-ازای-هر-مشتری است. مسیریابی پایگاه داده به شما اجازه می‌دهد یک داشبورد واحد در برابر یک پایگاه داده اولیه (نوعی پایگاه داده template) بسازید، اما داشبورد پایگاه داده‌ای که پرس‌وجو می‌کند را بسته به اینکه چه کسی وارد شده است swap کند. [مسیریابی پایگاه داده](../../../docs/latest/permissions/database-routing.html) را ببینید.

[
      
        

      
      
        
        

      
    ](external-sharing.html)
