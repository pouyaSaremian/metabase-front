---
title: جاسازی ایستا
redirect_from:
  - /docs/latest/embedding/signed-embedding
---

# جاسازی ایستا

همچنین شناخته شده به عنوان: جاسازی مستقل، یا جاسازی امضا شده.

{% include shared/in-page-promo-embedding-workshop.html %}

به طور کلی، جاسازی با نمایش یک URL متابیس درون یک iframe در وب‌سایت شما کار می‌کند. یک **جاسازی ایستا** (یا جاسازی امضا شده) یک iframe است که یک URL متابیس ایمن شده با یک JSON Web Token (JWT) امضا شده را بارگذاری می‌کند. متابیس فقط URL را بارگذاری می‌کند اگر درخواست یک JWT امضا شده با secret مشترک بین برنامه و متابیس شما ارائه دهد. JWT همچنین شامل یک ارجاع به منبع برای بارگذاری است، مثلاً، ID داشبورد، و هر مقدار برای پارامترهای قفل شده.

نمی‌توانید از جاسازی‌های ایستا با [امنیت ردیف و ستون](../permissions/row-and-column-security.md)، [حفاری](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through)، و داده خاص کاربر در [تحلیل استفاده](../usage-and-performance-tools/usage-analytics.md) ثبت نمی‌شود زیرا JWTهای امضا شده جلسات کاربر (جلسات سمت سرور) ایجاد نمی‌کنند. برای آن ویژگی‌ها، [تجزیه و تحلیل تعبیه‌شده JS](./embedded-analytics-js.md) را بررسی کنید.

با این حال، می‌توانید داده را در جاسازی‌های ایستا برای افراد یا گروه‌های خاص با [قفل کردن پارامترها](./static-embedding-parameters.md#restricting-data-in-a-static-embed-with-locked-parameters) محدود کنید.

## نحوه کار جاسازی ایستا

اگر می‌خواهید فیلترهای تعاملی متابیس را در iframe خود راه‌اندازی کنید، سرور وب شما نیاز دارد که هر بار که یک بازدیدکننده وب‌سایت ویجت فیلتر را به‌روزرسانی می‌کند، درخواست‌هایی به متابیس برای داده به‌روزرسانی شده انجام دهد.

برای درخواست داده به‌روزرسانی شده از متابیس، سرور وب شما یک [URL جاسازی متابیس](#adding-the-embedding-url-to-your-website) جدید تولید می‌کند. به عنوان مثال، اگر یک بازدیدکننده وب‌سایت مقدار "true" را در یک [ویجت فیلتر جاسازی شده](./static-embedding-parameters.md#adding-a-filter-widget-to-a-static-embed) وارد کند، سرور وب شما یک URL جاسازی جدید با یک پارامتر اضافی تولید می‌کند:

```
your_metabase_embedding_url?filter=true
```

برای جلوگیری از ویرایش URL جاسازی توسط افراد برای دسترسی به بخش‌های دیگر متابیس شما (مثلاً، با تغییر پارامتر به `filter=company_secrets`)، سرور وب شما یک JWT امضا شده به URL جاسازی جدید اضافه می‌کند:

```
your_metabase_embedding_url/your_signed_jwt?filter=true
```

JWT امضا شده با استفاده از [کلید secret متابیس](#regenerating-the-static-embedding-secret-key) شما تولید می‌شود. کلید secret به متابیس می‌گوید که درخواست برای داده فیلتر شده قابل اعتماد است، بنابراین نمایش نتایج در URL جاسازی جدید ایمن است. توجه داشته باشید که این کلید secret برای همه جاسازی‌های ایستا مشترک است، بنابراین هر کسی که به آن کلید دسترسی دارد به همه آثار جاسازی شده دسترسی خواهد داشت.

اگر می‌خواهید نمودارها را با ویژگی‌های تعاملی اضافی جاسازی کنید، مانند [حفاری به پایین](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) و [پرس‌وجوی خودخدمت](../questions/query-builder/editor.md)، [تجزیه و تحلیل تعبیه‌شده JS](./embedded-analytics-js.md) را ببینید.

## روشن کردن ویژگی جاسازی در متابیس

۱. به **Settings** > **Admin settings** > **Embedding > Static** بروید.
۲. **Enable static embedding** را روشن کنید.

## قابل جاسازی کردن یک سؤال یا داشبورد

![Sharing button to embed dashboard](./images/sharing-embed.png)

برای ایجاد یک جاسازی ایستا:

۱. به سؤال یا داشبوردی که می‌خواهید در وب‌سایت خود جاسازی کنید بروید.
۲. روی آیکون **sharing** کلیک کنید.
۳. **Embed** را انتخاب کنید.
۴. **Static embedding** را انتخاب کنید.
۵. اختیاری: [ظاهر جاسازی را سفارشی کنید](./static-embedding-parameters.md#customizing-the-appearance-of-a-static-embed)
۶. اختیاری: [پارامترها را به جاسازی اضافه کنید](./static-embedding-parameters.md).
۷. **Publish** را کلیک کنید.

![Preview](./images/04-preview.png)

## افزودن URL جاسازی به وب‌سایت شما

URL جاسازی برای یک سؤال یا داشبورد URL متابیس است که در iframe وب‌سایت شما نمایش داده می‌شود. توسط سرور وب شما با استفاده از [site URL متابیس](../configuring-metabase/settings.md#site-url)، [JWT امضا شده](#how-static-embedding-works)، و [پارامترها](./static-embedding-parameters.md) تولید می‌شود:

```
metabase_site_url/embed/question/your_jwt_token?parameter_name=value
```

پس از اینکه یک سؤال یا داشبورد را [قابل جاسازی](#making-a-question-or-dashboard-embeddable) کردید، نیاز دارید URL جاسازی برای آن سؤال یا داشبورد را در وب‌سایت خود قرار دهید:

۱. به سؤال یا داشبورد > **sharing icon** > **Embed** بروید.
۲. هر تغییری ایجاد کنید و کد را کپی کنید.
۳. [کد را پیش‌نمایش کنید](#previewing-the-code-for-an-embed)
۴. کد را به کد سرور که وب‌سایت شما را می‌سازد اضافه کنید.
۵. کد frontend را به کدی که صفحه‌ای که می‌خواهید مورد جاسازی شده در آن ظاهر شود را تولید می‌کند اضافه کنید.

برای مثال‌های بیشتر، [مخزن برنامه‌های مرجع ما](https://github.com/metabase/embedding-reference-apps) را ببینید.

## پیش‌نمایش کد برای یک جاسازی

۱. به سؤال یا داشبورد > **sharing icon** > **Embed this item in an application** بروید.
۲. **Code** را کلیک کنید.
۳. در بلوک کد بالا، کد نمونه برای سرور وب خود را پیدا خواهید کرد. همچنین قطعه iframe را برای قرار دادن در قالب HTML یا برنامه single page خود پیدا خواهید کرد.

وقتی تغییراتی در ظاهر و احساس یا تنظیمات پیش‌نمایش پارامتر ایجاد می‌کنید، متابیس کد را به‌روزرسانی می‌کند و تغییرات را برجسته می‌کند. مطمئن شوید که این تغییرات را به کد سرور واقعی خود کپی کنید.

![Code samples for embedding](./images/05-code.png)

متابیس کد سرور را برای موارد زیر تولید می‌کند:

- Clojure
- Node.js
- Python
- Ruby

برای قطعه‌های iframe:

- ERB
- JSX
- Mustache
- Pug/Jade

## اگر متابیس خود را serialize می‌کنید، از Entity IDها در جاسازی‌های ایستای خود استفاده کنید

استفاده از [Entity IDها](../installation-and-operation/serialization.md#metabase-uses-entity-ids-to-identify-and-reference-metabase-items) در جاسازی‌های ایستای شما اطمینان می‌دهد که IDها هنگام صادرات از یک متابیس و واردات به متابیس دیگر پایدار هستند.

برای استفاده از یک Entity ID در یک جاسازی ایستا، فقط باید map `resource` را در `payload` استفاده شده برای امضای توکن خود ویرایش کنید. ID مورد (autopopulated) را با Entity ID آن جایگزین کنید و تمام.

پس، در کد زیر `{ question: <ID> }` را به این تغییر می‌دهید:

```js
const payload = {
  resource: { question: <Entity ID goes here> },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
```

اگر متابیس خود را serialize نمی‌کنید، نگران اینکه از کدام ID استفاده می‌کنید نباشید؛ هر دو به خوبی کار می‌کنند.

## ویرایش یک سؤال یا داشبورد جاسازی شده

اگر [پارامترهای](./static-embedding-parameters.md) مورد جاسازی شده خود را تغییر می‌دهید:

۱. پس از ایجاد تغییرات، کد تولید شده توسط متابیس را کپی کنید.
۲. دوباره **Publish** را کلیک کنید.
۳. [کد را به‌روزرسانی کنید](#adding-the-embedding-url-to-your-website) در سرور خود تا با کد تولید شده توسط متابیس مطابقت داشته باشد.

## غیرفعال کردن جاسازی برای یک سؤال یا داشبورد

می‌توانید فهرستی از همه جاسازی‌های ایستای سؤال‌ها و داشبوردها را از **Admin settings** > **Embedding** > **Static** پیدا کنید.

۱. به سؤال یا داشبورد قابل جاسازی بروید.
۲. روی آیکون **sharing** (مربع با یک فلش اشاره به بالا سمت راست) کلیک کنید.
۳. **Embed** را انتخاب کنید.
۴. **Static embedding** را انتخاب کنید
۵. **Unpublish** را کلیک کنید.

## سفارشی کردن ظاهر جاسازی‌های ایستا

[سفارشی کردن ظاهر جاسازی‌های ایستا](./static-embedding-parameters.md#customizing-the-appearance-of-a-static-embed) را ببینید

## تازه‌سازی خودکار نتایج یک داشبورد جاسازی شده

> تازه‌سازی خودکار فقط برای داشبوردها در دسترس است، نه سؤال‌ها.

برای تازه‌سازی نتایج یک داشبورد در یک cadence خاص، می‌توانید URL جاسازی شده را با `refresh` پارامتریزه کنید. به عنوان مثال، برای تنظیم یک داشبورد جاسازی شده برای تازه‌سازی هر 60 ثانیه، `refresh=60` را به URL اضافه می‌کنید.

به عنوان مثال، کد زیر برای تولید یک URL iframe برای یک داشبورد عنوان داشبورد را نمایش می‌دهد و نتایج آن را هر 60 ثانیه تازه‌سازی می‌کند.

```js
var iframeUrl =
  METABASE_SITE_URL + "/embed/dashboard/" + token + "#titled=true&refresh=60";
```

برای فهرست کامل گزینه‌هایی که می‌توانید پارامتریزه کنید، [سفارشی کردن ظاهر یک جاسازی ایستا](./static-embedding-parameters.md#customizing-the-appearance-of-a-static-embed) را ببینید.

## حذف بنر "Powered by Metabase"

![Powered by Metabase](./images/powered-by-metabase.png)

بنر روی جاسازی‌های ایستای ایجاد شده با نسخه open-source متابیس ظاهر می‌شود. برای حذف بنر، باید به یک پلن [Pro](https://www.metabase.com/product/pro) یا [Enterprise](https://www.metabase.com/product/enterprise) ارتقا دهید.

## تولید مجدد کلید secret جاسازی ایستا

کلید secret جاسازی شما برای امضای JWTها برای همه [URLهای جاسازی](#adding-the-embedding-url-to-your-website) شما استفاده می‌شود.

۱. به **Admin** > **Embedding** > **Static embedding** بروید.
۲. در زیر **Regenerate secret key**، **Regenerate key** را کلیک کنید.

این کلید در همه جاسازی‌های ایستا مشترک است. هر کسی که به این کلید دسترسی دارد می‌تواند به همه آثار جاسازی شده دسترسی پیدا کند، بنابراین این کلید را ایمن نگه دارید. اگر این کلید را تولید مجدد کنید، باید کد سرور خود را با کلید جدید به‌روزرسانی کنید.

## تغییر اندازه داشبوردها برای مطابقت با محتوای آن‌ها

داشبوردها یک نسبت تصویر ثابت هستند، بنابراین اگر می‌خواهید اطمینان حاصل کنید که به طور خودکار به صورت عمودی برای مطابقت با محتوای آن‌ها اندازه‌گیری می‌شوند می‌توانید از اسکریپت [iFrame Resizer](https://github.com/davidjbradshaw/iframe-resizer) استفاده کنید. متابیس یک کپی برای راحتی سرو می‌دهد:

```html
<script src="{your-metabase-url}/app/iframeResizer.js"></script>

<iframe
  src="https://metabase.example.com/embed/dashboard/TOKEN"
  onload="iFrameResize({}, this)"
></iframe>
```

به دلیل تغییرات مجوز iframe-resizer، توصیه می‌کنیم که از نسخه 4.3.2 یا پایین‌تر iframe-resizer استفاده کنید.

## مقاصد سفارشی در داشبوردها در جاسازی‌های ایستا

فقط می‌توانید از گزینه **URL** برای [مقاصد سفارشی](../dashboards/interactive.md#custom-destinations) در داشبوردها با جاسازی ایستا استفاده کنید. URLهای خارجی در یک تب یا پنجره جدید باز می‌شوند.

می‌توانید مقادیر فیلتر را به URL خارجی منتقل کنید، مگر اینکه فیلتر قفل شده باشد.

## ترجمه جاسازی‌های ایستا

[ترجمه سؤال‌ها و داشبوردهای جاسازی شده](./translations.md) را ببینید.

## مطالعه بیشتر

- [پارامترها برای جاسازی‌های ایستا](./static-embedding-parameters.md).
- [مخزن برنامه‌های مرجع](https://github.com/metabase/embedding-reference-apps).
- [استراتژی‌های ارائه تجزیه و تحلیل مشتری‌محور](https://www.metabase.com/learn/metabase-basics/embedding/overview).
- [انتشار تجسم داده‌ها در وب](https://www.metabase.com/learn/metabase-basics/embedding/charts-and-dashboards).
- [سفارشی‌سازی ظاهر متابیس](../configuring-metabase/appearance.md).
