---
title: جاسازی تعاملی
redirect_from:
  - /docs/latest/enterprise-guide/full-app-embedding
  - /docs/latest/embedding/full-app-embedding
---

# جاسازی تعاملی

{% include plans-blockquote.html feature="Interactive embedding" convert_pro_link_to_embbedding=true %}

{% include shared/in-page-promo-embedding-workshop.html %}

**جاسازی تعاملی** به شما امکان می‌دهد برنامه کامل متابیس را در یک iframe جاسازی کنید. جاسازی تعاملی [مجوزهای](../permissions/introduction.md) و [SSO](../people-and-groups/start.md#authentication) شما را یکپارچه می‌کند تا افراد سطح دسترسی مناسب برای [پرس‌وجو](../questions/query-builder/editor.md) و [حفاری به پایین](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) در داده‌های خود را داشته باشند.

> اگر تازه با جاسازی متابیس شروع می‌کنید، استفاده از [تجزیه و تحلیل تعبیه‌شده JS](./embedded-analytics-js.md) را به جای جاسازی تعاملی در نظر بگیرید - این یک گزینه بهبود یافته و قابل سفارشی‌سازی بیشتر برای جاسازی عناصر تعاملی متابیس است. جاسازی تعاملی همچنان به طور کامل پشتیبانی می‌شود.

## دموی جاسازی تعاملی

برای درک آنچه می‌توانید با جاسازی تعاملی انجام دهید، [دموی جاسازی تعاملی ما](https://www.metabase.com/embedding-demo) را بررسی کنید.

برای دیدن سازنده پرس‌وجو در عمل، روی **Reports** > **+ New** > **Question** کلیک کنید.

## شروع سریع

[شروع سریع جاسازی تعاملی](./interactive-embedding-quick-start-guide.md) را بررسی کنید.

## پیش‌نیازهای جاسازی تعاملی

۱. مطمئن شوید که یک [توکن مجوز](../installation-and-operation/activating-the-enterprise-edition.md) برای یک [پلن Pro یا Enterprise](https://store.metabase.com/checkout/login-details) دارید.
۲. افراد را در [گروه‌های](../people-and-groups/start.md) متابیس سازماندهی کنید.
۳. [مجوزها](../permissions/introduction.md) را برای هر گروه راه‌اندازی کنید.
۴. [SSO](../people-and-groups/start.md#authentication) را راه‌اندازی کنید تا به طور خودکار مجوزها را اعمال کند و داده مناسب را به افراد هنگام ورود نشان دهد. به طور کلی، **استفاده از [SSO با JWT](../people-and-groups/authenticating-with-jwt.md) را توصیه می‌کنیم**.

اگر با یک وضعیت [چندمستأجری](https://www.metabase.com/learn/metabase-basics/embedding/multi-tenant-self-service-analytics) سروکار دارید، توصیه‌های ما را برای [پیکربندی مجوزها برای schemaهای مختلف مشتری](../permissions/embedding.md) بررسی کنید.

اگر برنامه خود را به صورت محلی اجرا می‌کنید و از نسخه Pro Cloud استفاده می‌کنید، یا متابیس و برنامه خود را در دامنه‌های مختلف میزبانی می‌کنید، باید گزینه SameSite کوکی جلسه محیط متابیس خود را روی "none" تنظیم کنید.

## فعال کردن جاسازی تعاملی در متابیس

۱. به **مدیر > جاسازی > تعاملی** بروید.
۲. **فعال کردن جاسازی تعاملی** را کلیک کنید.
۳. در زیر **مبدأهای مجاز**، URL وب‌سایت یا برنامه وب که می‌خواهید متابیس را در آن جاسازی کنید (مانند `https://*.example.com`) را اضافه کنید.

## راه‌اندازی جاسازی در وب‌سایت شما

۱. یک iframe با ویژگی `src` تنظیم شده روی ایجاد کنید:
   - [URL](#pointing-an-iframe-to-a-metabase-url) صفحه متابیس که می‌خواهید جاسازی کنید، یا
   - یک [endpoint احراز هویت](#pointing-an-iframe-to-an-authentication-endpoint) که به URL متابیس شما redirect می‌کند.
۲. اختیاری: بسته به نحوه راه‌اندازی برنامه وب شما، [متغیرهای محیطی](../configuring-metabase/environment-variables.md) را تنظیم کنید تا:
   - [توکن مجوز خود را اضافه کنید](../configuring-metabase/environment-variables.md#mb_premium_embedding_token).
   - [متابیس را در یک دامنه متفاوت جاسازی کنید](#embedding-metabase-in-a-different-domain).
   - [جاسازی تعاملی خود را ایمن کنید](#securing-interactive-embeds).
۳. اختیاری: ارتباط به و از متابیس جاسازی شده را با استفاده از پیام‌های [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) پشتیبانی شده فعال کنید:
   - [از متابیس](#supported-postmessage-messages-from-embedded-metabase)
   - [به متابیس](#supported-postmessage-messages-to-embedded-metabase)
۴. اختیاری: پارامترها را برای [نمایش یا مخفی کردن اجزای UI متابیس](#showing-or-hiding-metabase-ui-components) تنظیم کنید.

هنگامی که آماده راه‌اندازی جاسازی تعاملی خود هستید، مطمئن شوید که افراد کوکی‌های مرورگر از متابیس را **اجازه می‌دهند**، در غیر این صورت نمی‌توانند وارد شوند.

### اشاره کردن یک iframe به یک URL متابیس

به متابیس خود بروید و صفحه‌ای که می‌خواهید جاسازی کنید را پیدا کنید.

به عنوان مثال، برای جاسازی صفحه اصلی متابیس خود، ویژگی `src` را روی [site URL](../configuring-metabase/settings.md#site-url) خود تنظیم کنید، مانند:

```
src="https://metabase.yourcompany.com/"
```

برای جاسازی یک داشبورد متابیس خاص، می‌خواهید از URL Entity ID داشبورد `/dashboard/entity/[Entity ID]` استفاده کنید.

```
src="https://metabase.yourcompany.com/dashboard/entity/[Entity ID]"
```

برای دریافت Entity ID یک داشبورد، به داشبورد بروید و روی دکمه **info** کلیک کنید. در تب **Overview**، **Entity ID** را کپی کنید. سپس در ویژگی `src` iframe خود:

```
src=https://metabase.yourcompany.com/dashboard/entity/Dc_7X8N7zf4iDK9Ps1M3b
```

اگر داشبورد شما بیش از یک تب دارد، تب مورد نظر برای فرود افراد را انتخاب کنید و ID تب را کپی کنید. ID تب را به URL اضافه کنید:

```
src=https://metabase.yourcompany.com/dashboard/entity/Dc_7X8N7zf4iDK9Ps1M3b?tab=YLNdEYtzuSMA0lqO7u3FD
```

می‌توانید از ID ترتیبی یک داشبورد استفاده کنید، اما باید Entity ID را ترجیح دهید، زیرا Entity IDها در محیط‌های مختلف متابیس پایدار هستند (مثلاً، اگر در یک محیط staging تست می‌کنید، Entity IDها هنگام [صادرات داده و واردات آن](../installation-and-operation/serialization.md) به یک محیط تولید یکسان می‌مانند).

اگر می‌خواهید به یک سؤال، مجموعه یا مدل اشاره کنید، به مورد بروید، روی info آن کلیک کنید، Entity ID مورد را بگیرید و ساختار URL را دنبال کنید: `/[Item type]/entity/[Entity-Id]`. مثال‌ها:

- `/collection/entity/[Entity ID]`
- `/model/entity/[Entity ID]`
- `/question/entity/[Entity ID]`

### اشاره کردن یک iframe به یک endpoint احراز هویت

اگر می‌خواهید افراد را مستقیماً به صفحه ورود SSO خود بفرستید (یعنی از صفحه ورود متابیس با دکمه SSO رد شوید) و پس از احراز هویت به طور خودکار به متابیس redirect کنید، از این گزینه استفاده کنید.

نیاز دارید ویژگی `src` را روی endpoint auth خود تنظیم کنید، با یک پارامتر `return_to` که به URL متابیس encode شده اشاره می‌کند. به عنوان مثال، برای فرستادن افراد به صفحه ورود SSO خود و redirect خودکار آن‌ها به `https://metabase.yourcompany.com/dashboard/1`:

```
https://metabase.example.com/auth/sso?return_to=http%3A%2F%2Fmetabase.yourcompany.com%2Fdashboard%2F1
```

اگر از [JWT](../people-and-groups/authenticating-with-jwt.md) استفاده می‌کنید، می‌توانید از مسیر نسبی برای redirect استفاده کنید (یعنی URL متابیس شما بدون [site URL](../configuring-metabase/settings.md#site-url)). به عنوان مثال، برای فرستادن افراد به یک صفحه متابیس در `/dashboard/1`:

```
https://metabase.example.com/auth/sso?jwt=<token>&return_to=%2Fdashboard%2F1
```

باید همه پارامترها را در لینک redirect خود URL encode کنید (یا double encode، بسته به تنظیمات وب شما)، از جمله پارامترهای فیلتر (مثلاً، `filter=value`) و [تنظیمات UI](#showing-or-hiding-metabase-ui-components) (مثلاً، `top_nav=true`). به عنوان مثال، اگر دو پارامتر فیلتر به مثال JWT نشان داده شده در بالا اضافه کنید، لینک `src` شما می‌شود:

```
https://metabase.example.com/auth/sso?jwt=<token>&redirect=%2Fdashboard%2F1%3Ffilter1%3Dvalue%26filter2%3Dvalue
```

## سازگاری cross-browser

برای اطمینان از اینکه متابیس جاسازی شده شما در همه مرورگرها کار می‌کند، متابیس و برنامه جاسازی را در همان دامنه سطح بالا (TLD) قرار دهید. TLD با آخرین بخش یک آدرس وب نشان داده می‌شود، مانند `.com` یا `.org`.

توجه داشته باشید که جاسازی تعاملی شما باید با Safari سازگار باشد تا در _هر_ مرورگری در iOS (مانند Chrome در iOS) اجرا شود.

## جاسازی متابیس در یک دامنه متفاوت

> اگر متابیس و برنامه جاسازی شما قبلاً در همان دامنه سطح بالا (TLD) هستند، این بخش را رد کنید.

اگر می‌خواهید متابیس را در دامنه دیگری جاسازی کنید (مثلاً، اگر متابیس در `metabase.yourcompany.com` میزبانی می‌شود، اما می‌خواهید متابیس را در `yourcompany.github.io` جاسازی کنید)، می‌توانید به متابیس بگویید مقدار SameSite کوکی جلسه را روی "none" تنظیم کند.

می‌توانید مقدار SameSite کوکی جلسه را در **تنظیمات مدیر > جاسازی > امنیت > تنظیم کوکی SameSite** تنظیم کنید.

مقادیر SameSite شامل موارد زیر است:

- **Lax** (پیش‌فرض): به کوکی‌های جلسه متابیس امکان اشتراک‌گذاری در همان دامنه را می‌دهد. برای نمونه‌های تولید در همان دامنه استفاده می‌شود.
- **None (نیاز به HTTPS)**: از "None" استفاده کنید وقتی برنامه و متابیس شما در دامنه‌های مختلف میزبانی می‌شوند. با Safari و مرورگرهای مبتنی بر iOS ناسازگار است.
- **Strict** (توصیه نمی‌شود): به کوکی‌های جلسه متابیس امکان اشتراک‌گذاری با نمونه‌های جاسازی شده را نمی‌دهد. اگر نمی‌خواهید اشتراک‌گذاری جلسه با جاسازی را فعال کنید از این استفاده کنید.

همچنین می‌توانید [متغیر محیطی `MB_SESSION_COOKIE_SAMESITE`](../configuring-metabase/environment-variables.md#mb_session_cookie_samesite) را تنظیم کنید.

اگر از Safari استفاده می‌کنید، باید [ردیابی cross-site را مجاز کنید](https://support.apple.com/en-tj/guide/safari/sfri40732/mac). بسته به مرورگر، ممکن است هنگام مشاهده موارد جاسازی شده در تب‌های خصوصی/ناشناس نیز با مشکلاتی مواجه شوید.

بیشتر در مورد [کوکی‌های SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) بیاموزید.

## ایمن‌سازی جاسازی‌های تعاملی

متابیس از کوکی‌های HTTP برای احراز هویت افراد و نگه داشتن آن‌ها در متابیس جاسازی شده شما استفاده می‌کند، حتی زمانی که کسی جلسه مرورگر خود را می‌بندد. اگر از جریان‌های auth نموداری لذت می‌برید، [جاسازی تعاملی با SSO](./securing-embeds.md) را بررسی کنید.

برای محدود کردن مدت زمانی که یک فرد وارد می‌ماند، [`MAX_SESSION_AGE`](../configuring-metabase/environment-variables.md#max_session_age) را روی یک عدد به دقیقه تنظیم کنید. مقدار پیش‌فرض 20,160 (دو هفته) است.

به عنوان مثال، برای نگه داشتن افراد وارد شده برای حداکثر 24 ساعت:

```sh
MAX_SESSION_AGE=1440
```

برای پاک کردن خودکار کوکی‌های ورود یک فرد هنگام پایان جلسه مرورگر:

```sh
MB_SESSION_COOKIES=true
```

برای خارج کردن دستی کسی از متابیس، URL زیر را بارگذاری کنید (به عنوان مثال، در یک iframe مخفی در صفحه خروج برنامه شما):

```sh
https://metabase.yourcompany.com/auth/logout
```

اگر از [JWT](../people-and-groups/authenticating-with-jwt.md) برای SSO استفاده می‌کنید، توصیه می‌کنیم ویژگی `exp` (زمان انقضا) را روی مدت کوتاه تنظیم کنید (مثلاً، 1 دقیقه).

## پیام‌های postMessage پشتیبانی شده _از_ متابیس جاسازی شده

برای همگام ماندن با تغییرات URL متابیس جاسازی شده (مثلاً، زمانی که یک فیلتر اعمال می‌شود)، برنامه خود را برای گوش دادن به پیام‌های "location" از متابیس جاسازی شده راه‌اندازی کنید. اگر می‌خواهید از این پیام برای deep-linking استفاده کنید، توجه داشته باشید که "location" "window.location" را منعکس می‌کند.

```json
{
  "metabase": {
    "type": "location",
    "location": LOCATION_OBJECT_OR_URL
  }
}
```

برای پر کردن یک صفحه متابیس جاسازی شده (مانند یک سؤال) در کل iframe در برنامه خود، برنامه خود را برای گوش دادن به یک پیام "frame" با حالت "normal" از متابیس راه‌اندازی کنید:

```json
{
  "metabase": {
    "type": "frame",
    "frame": {
      "mode": "normal"
    }
  }
}
```

برای مشخص کردن اندازه یک iframe در برنامه خود تا با یک صفحه متابیس جاسازی شده (مانند یک داشبورد) مطابقت داشته باشد، برنامه خود را برای گوش دادن به یک پیام "frame" با حالت "fit" از متابیس راه‌اندازی کنید:

```json
{
  "metabase": {
    "type": "frame",
    "frame": {
      "mode": "fit",
      "height": HEIGHT_IN_PIXELS
    }
  }
}
```

## پیام‌های postMessage پشتیبانی شده _به_ متابیس جاسازی شده

برای تغییر URL جاسازی، یک پیام "location" از برنامه خود به متابیس ارسال کنید:

```json
{
  "metabase": {
    "type": "location",
    "location": LOCATION_OBJECT_OR_URL
  }
}
```

## استراتژی‌های گروه برای امنیت ردیف و ستون

اگر می‌خواهید چندین نفر از یک حساب مشتری واحد روی سؤال‌ها و داشبوردها همکاری کنند، نیاز دارید یک [گروه](../people-and-groups/managing.md#groups) برای هر حساب مشتری راه‌اندازی کنید.

می‌توانید [امنیت ردیف و ستون](../permissions/row-and-column-security.md) را با یک گروه واحد و جداگانه مدیریت کنید. به عنوان مثال، هر فرد می‌تواند بخشی از یک گروه مشتری باشد که مجوزهای داده را با امنیت ردیف و ستون از طریق یک ویژگی خاص که برای همه در همه حساب‌های مشتری شما اعمال می‌شود راه‌اندازی می‌کند.

علاوه بر این، هر فرد درون یک حساب مشتری واحد می‌تواند همچنین عضو یک گروه خاص به آن حساب مشتری باشد. به این ترتیب می‌توانند روی مجموعه‌ها با افراد دیگر در سازمان خود همکاری کنند، بدون اینکه چیزهای ایجاد شده توسط افراد از حساب‌های مشتریان دیگر را ببینند.

## نمایش یا مخفی کردن اجزای UI متابیس

[اجزای UI تعاملی](./interactive-ui-components.md) را ببینید

## برنامه‌های مرجع

برای ساخت یک جاسازی تعاملی نمونه با استفاده از SSO با JWT، برنامه‌های مرجع ما را ببینید:

- [Node.js + Express](https://github.com/metabase/metabase-nodejs-express-interactive-embedding-sample) (با [راهنمای شروع سریع](./interactive-embedding-quick-start-guide.md))
- [Node.js + React](https://github.com/metabase/sso-examples/tree/master/app-embed-example)

## مطالعه بیشتر

- [شروع سریع جاسازی تعاملی](./interactive-embedding-quick-start-guide.md)
- [استراتژی‌های ارائه تجزیه و تحلیل مشتری‌محور](https://www.metabase.com/learn/metabase-basics/embedding/overview).
- [استراتژی‌های مجوزها](https://www.metabase.com/learn/metabase-basics/administration/permissions/strategy).
- [سفارشی‌سازی ظاهر متابیس](../configuring-metabase/appearance.md).
