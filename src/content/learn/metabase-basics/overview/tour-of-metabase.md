---
title: "تور متابیس"
description: "متابیس یک محصول عمیق با ابزارهای زیادی برای ساده‌سازی هوش کسب‌وکار است، از نمودارهای قابل جاسازی و داشبوردهای تعاملی، تا ویرایشگرهای GUI و SQL، تا ممیزی و جداسازی داده، و بیشتر."
redirect_from:
  - /learn/metabase-basics/overview/tour-of-metabase
  - /learn/getting-started/tour-of-metabase
toc:
  - id: "a-tour-of-metabase"
    title: "تور متابیس"
    level: 1
    href: "#a-tour-of-metabase"
  - id: "what-is-metabase"
    title: "متابیس چیست؟"
    level: 2
    href: "#what-is-metabase"
  - id: "query-and-visualize-your-data"
    title: "پرس‌وجو و تجسم داده خود"
    level: 2
    href: "#query-and-visualize-your-data"
  - id: "connect-a-database"
    title: "اتصال یک پایگاه داده"
    level: 3
    href: "#connect-a-database"
  - id: "upload-spreadsheets"
    title: "آپلود صفحه‌گسترده‌ها"
    level: 3
    href: "#upload-spreadsheets"
  - id: "query-builder"
    title: "Query builder"
    level: 3
    href: "#query-builder"
  - id: "native-queries"
    title: "پرس‌وجوهای بومی"
    level: 3
    href: "#native-queries"
  - id: "visualize-results"
    title: "تجسم نتایج"
    level: 3
    href: "#visualize-results"
  - id: "create-interactive-dashboards"
    title: "ایجاد داشبوردهای تعاملی"
    level: 2
    href: "#create-interactive-dashboards"
  - id: "create-update-and-delete-records"
    title: "ایجاد، به‌روزرسانی و حذف رکوردها"
    level: 3
    href: "#create-update-and-delete-records"
  - id: "model-your-data"
    title: "مدل‌سازی داده خود"
    level: 2
    href: "#model-your-data"
  - id: "table-metadata"
    title: "متادیتای جدول"
    level: 3
    href: "#table-metadata"
  - id: "create-models-to-use-as-starting-data-for-new-questions"
    title: "ایجاد مدل‌ها برای استفاده به عنوان داده شروع برای سؤال‌های جدید"
    level: 3
    href: "#create-models-to-use-as-starting-data-for-new-questions"
  - id: "use-metrics-to-create-reusable-calculations"
    title: "استفاده از معیارها برای ایجاد محاسبات قابل استفاده مجدد"
    level: 3
    href: "#use-metrics-to-create-reusable-calculations"
  - id: "share-your-results"
    title: "اشتراک‌گذاری نتایج خود"
    level: 2
    href: "#share-your-results"
  - id: "alerts"
    title: "هشدارها"
    level: 3
    href: "#alerts"
  - id: "dashboard-subscriptions"
    title: "اشتراک‌های داشبورد"
    level: 3
    href: "#dashboard-subscriptions"
  - id: "embed-questions-and-dashboards"
    title: "جاسازی سؤال‌ها و داشبوردها"
    level: 2
    href: "#embed-questions-and-dashboards"
  - id: "find-things-and-stay-organized"
    title: "پیدا کردن چیزها و منظم ماندن"
    level: 2
    href: "#find-things-and-stay-organized"
  - id: "search"
    title: "جستجو"
    level: 3
    href: "#search"
  - id: "organize-with-collections"
    title: "سازماندهی با مجموعه‌ها"
    level: 3
    href: "#organize-with-collections"
  - id: "events-and-timelines"
    title: "رویدادها و timelineها"
    level: 3
    href: "#events-and-timelines"
  - id: "browse-data-models-and-metrics"
    title: "مرور داده، مدل‌ها و معیارها"
    level: 3
    href: "#browse-data-models-and-metrics"
  - id: "x-rays"
    title: "X-rayها"
    level: 3
    href: "#x-rays"
  - id: "manage-users"
    title: "مدیریت کاربران"
    level: 2
    href: "#manage-users"
  - id: "settings"
    title: "تنظیمات"
    level: 3
    href: "#settings"
  - id: "group-permissions-for-data-and-collections"
    title: "مجوزهای گروه برای داده و مجموعه‌ها"
    level: 3
    href: "#group-permissions-for-data-and-collections"
  - id: "row-and-column-security"
    title: "امنیت ردیف و ستون"
    level: 4
    href: "#row-and-column-security"
  - id: "usage-analytics"
    title: "تحلیل استفاده"
    level: 3
    href: "#usage-analytics"
  - id: "submit-a-pr-or-fork-the-source-code"
    title: "ارسال PR، یا fork کردن کد منبع"
    level: 2
    href: "#submit-a-pr-or-fork-the-source-code"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "نمای کلی متابیس"
    href: "index.html"
---

# تور متابیس

متابیس یک محصول عمیق با ابزارهای زیادی برای ساده‌سازی هوش کسب‌وکار است، از نمودارهای قابل جاسازی و داشبوردهای تعاملی، تا ویرایشگرهای GUI و SQL، تا ممیزی و جداسازی داده، و بیشتر.

این مقاله "آنچه در جعبه هنگام نصب متابیس می‌آید" است. متابیس *ابزارهای زیادی* در جعبه ابزار خود دارد (و نمی‌توانیم همه چیز را اینجا پوشش دهیم)، اما حتی متابیس‌کاران باتجربه از تور مجموعه ویژگی‌های آن بهره‌مند خواهند شد - به خصوص چون ما [ویژگی‌های جدید عمده را به طور منظم اضافه می‌کنیم](../../../releases.html).

![صفحه اصلی متابیس.](../../images/tour-of-metabase/home-page.png)

## متابیس چیست؟

متابیس یک ابزار هوش کسب‌وکار منبع باز است که می‌توانید به [بسیاری از پایگاه‌های داده محبوب](../../../data-sources/index.html) متصل کنید. متابیس به شما اجازه می‌دهد سؤال درباره داده خود بپرسید، و پاسخ‌ها را در فرمت‌هایی که منطقی هستند نمایش می‌دهد، چه یک نمودار میله‌ای باشد یا یک جدول دقیق.

![متابیس به بسیاری از پایگاه‌های داده مختلف متصل می‌شود](../../images/tour-of-metabase/data-stack.png)

می‌توانید سؤال‌های خود را ذخیره کنید، و سؤال‌ها را در داشبوردهای زیبا گروه‌بندی کنید. متابیس همچنین اشتراک‌گذاری سؤال‌ها و داشبوردها با بقیه تیم شما را آسان می‌کند.

در سطح بالا، از ویژگی‌هایی که به شما اجازه می‌دهند عبور می‌کنیم:

- [پرس‌وجو و تجسم داده خود](#query-and-visualize-your-data)
- [ساخت داشبوردهای تعاملی](#create-interactive-dashboards)
- [اشتراک‌گذاری نتایج خود](#share-your-results)
- [جاسازی نمودارها](#embed-questions-and-dashboards)
- [پیدا کردن چیزها و منظم ماندن](#find-things-and-stay-organized)
- [مدیریت کاربران](#manage-users)

## پرس‌وجو و تجسم داده خود

### اتصال یک پایگاه داده

متابیس از [بسیاری از پایگاه‌های داده مختلف](../../../docs/latest/databases/connecting.html#connecting-to-supported-databases) پشتیبانی می‌کند، و با یک [پایگاه داده نمونه](../../../glossary/sample-database.html) برای بازی شما ارسال می‌شود. و وقتی منابع داده خود را متصل کرده‌اید، متابیس ابزارهای زیادی برای کاوش آن‌ها به شما می‌دهد.

### آپلود صفحه‌گسترده‌ها

می‌توانید [CSVها را آپلود کنید](../../../docs/latest/databases/uploads.html) برای پرس‌وجو و تجسم در متابیس. این ویژگی برای تحلیل سریع ad hoc داده صفحه‌گسترده مفید است.

### Query builder

می‌توانید از **query builder** متابیس برای فیلتر و خلاصه کردن داده استفاده کنید.

با [عبارات سفارشی](../../../glossary/custom-expression.html)، می‌توانید تقریباً هر چیزی که با SQL قادر به انجام آن هستید را انجام دهید: [join جداول](../querying-and-dashboards/questions/joins-in-metabase.html)، ایجاد ستون‌های سفارشی، فیلتر و گروه‌بندی نتایج، [مقایسه سری زمانی](../querying-and-dashboards/time-series/time-series-comparisons.html)، و بیشتر. به علاوه، افرادی که SQL نمی‌دانند می‌توانند سؤال شما را تکثیر کنند و از آن به عنوان نقطه شروع برای سؤال دیگری استفاده کنند.

![Query builder.](../../images/tour-of-metabase/notebook-editor.png)

سؤال‌های query builder به طور خودکار یک منوی drill-through به تجسم‌های آن‌ها اعمال می‌شود، اجازه می‌دهد مردم روی یک جدول یا نمودار کلیک کنند تا [از داده drill through کنند](../querying-and-dashboards/questions/drill-through.html).

![استفاده از Action Menu برای زوم روی یک نمودار، سپس مشاهده ردیف‌هایی که یک مقدار تجمیع شده را تشکیل می‌دهند.](../../images/tour-of-metabase/drill-through.gif)

سؤال‌های پرسیده شده با query builder می‌توانند با یک [مدل](../getting-started/models.html)، یک جدول خام، یا با نتایج یک سؤال ذخیره شده شروع شوند، و می‌توانید آن‌ها را در هر زمان به SQL بومی تبدیل کنید.

### پرس‌وجوهای بومی

از **ویرایشگر پرس‌وجوی بومی** برای نوشتن سؤال‌ها در زبان‌های پرس‌وجوی بومی پایگاه داده استفاده کنید (معمولاً SQL برای پایگاه‌های داده رابطه‌ای، اما همچنین زبان‌های پرس‌وجوی دیگر برای منابع داده مثل MongoDB). برای سؤال‌های نوشته شده در SQL، می‌توانید از متغیرها در کد خود برای ایجاد [قالب‌های SQL](../../../docs/latest/questions/native-editor/sql-parameters.html) استفاده کنید، شامل متغیرهای [فیلتر فیلد](../../../glossary/field-filter.html) که می‌توانند فیلترهای dropdown هوشمند ایجاد کنند.

![یک تب مرجع داده مفید اطلاعات درباره جداول شما را در sidebar نشان می‌دهد.](../../images/tour-of-metabase/data-reference-sidebar.png)

مثل سؤال‌های query builder، می‌توانید از نتایج مدل‌ها یا [سؤال‌های ذخیره شده](../querying-and-dashboards/sql-in-metabase/organizing-sql.html) به عنوان نقاط شروع برای سؤال‌های جدید استفاده کنید، دقیقاً مثل اینکه یک جدول یا view استفاده می‌کردید. به عنوان مثال، برای ارجاع به سؤال 123 مثل این:

```sql
WITH gizmo_orders AS {{#123}}
```

### تجسم نتایج

وقتی یک سؤال می‌پرسید، متابیس حدس می‌زند مناسب‌ترین نوع تجسم برای نتایج، اما می‌توانید از هجده گزینه تجسم مختلف انتخاب کنید.

![از 16 نوع نمودار مختلف برای تجسم نتایج خود انتخاب کنید.](../../images/tour-of-metabase/visualization-options.png)

علاوه بر این، هر نوع تجسم مجموعه‌ای از گزینه‌های خود برای سفارشی‌سازی دارد. حتی می‌توانید [نقشه‌های سفارشی](../../../docs/latest/questions/visualizations/map.html) به instance متابیس خود اضافه کنید.

## ایجاد داشبوردهای تعاملی

می‌توانید سؤال‌ها و مدل‌ها را در یک [داشبورد با تب‌ها](../../../docs/latest/dashboards/introduction.html#dashboard-tabs) سازماندهی کنید، و آن‌ها را با کارت‌های متنی [Markdown](../querying-and-dashboards/dashboards/markdown.html)، کارت‌های لینک، و کارت‌های iframe زمینه‌سازی کنید.

![داشبورد نمونه با دو فیلتر: تاریخ و ایالت.](../../images/tour-of-metabase/example-dashboard.png)

می‌توانید فیلترها را به داشبوردها اضافه کنید و آن‌ها را به فیلدها روی سؤال‌ها متصل کنید تا نتایج را محدود کنید.

![اتصال یک فیلتر به چندین کارت روی یک داشبورد با مشخص کردن فیلد برای فیلتر.](../../images/tour-of-metabase/connect-filter-to-cards.png)

می‌توانید [فیلترها را لینک کنید](../querying-and-dashboards/dashboards/linking-filters.html)، [مقصدهای سفارشی](../querying-and-dashboards/dashboards/custom-destinations.html) ایجاد کنید (برای ارسال مردم به داشبورد دیگر یا URL خارجی)، یا حتی یک نمودار [یک فیلتر را با کلیک به‌روزرسانی کند](../querying-and-dashboards/dashboards/cross-filtering.html).

### ایجاد، به‌روزرسانی و حذف رکوردها

![داشبورد نمونه با یک دکمه action که یک رکورد در پایگاه داده را به‌روزرسانی می‌کند.](../../images/tour-of-metabase/dashboard-action.gif)

با [actionها](../../../docs/latest/actions/start.html) به پایگاه‌های داده خود بنویسید. می‌توانید داشبوردها، مدل‌ها، و actionها و سایر موارد متابیس را ترکیب کنید تا اپلیکیشن‌های CRUD پایه بسازید.

## مدل‌سازی داده خود

### متادیتای جدول

متابیس سعی می‌کند حدس بزند چگونه فیلدهای مختلف در جداول شما را نمایش دهد، اما اگر کنترل بیشتری می‌خواهید، می‌توانید نحوه مدیریت متابیس هر فیلد را سفارشی کنید، تنظیم دید فیلد، نوع، فرمت، و بیشتر.

![سفارشی‌سازی نحوه نمایش جداول و فیلدهای آن‌ها توسط متابیس.](../../images/tour-of-metabase/data-model.png)

### ایجاد مدل‌ها برای استفاده به عنوان داده شروع برای سؤال‌های جدید

[مدل‌ها](../getting-started/models.html) با سؤال‌هایی از query builder یا ویرایشگر SQL ساخته می‌شوند. می‌توانید از آن‌ها برای جمع‌آوری داده از چندین جدول، با ستون‌های محاسبه شده سفارشی، و توضیحات ستون و سایر متادیتا، برای ایجاد داده شروع عالی برای مردم برای پرسیدن سؤال‌های جدید استفاده کنید. به عنوان مثال، می‌توانید یک مدل برای "کاربران فعال"، یا "سفارش‌های اولویت"، یا هر طور که می‌خواهید کسب‌وکار خود را مدل کنید بسازید.

اگر متوجه شدید که از همان سؤال ذخیره شده بارها و بارها به عنوان داده شروع برای سؤال‌های جدید استفاده می‌کنید، ممکن است بخواهید آن سؤال ذخیره شده را به یک مدل تبدیل کنید، که به شما اجازه می‌دهد متادیتا مثل توضیحات ستون و انواع ستون اضافه کنید. همچنین می‌توانید به مدل‌ها در پرس‌وجوهای SQL ارجاع دهید، دقیقاً مثل اینکه در بالا با سؤال‌های ذخیره شده انجام دادیم.

### استفاده از معیارها برای ایجاد محاسبات قابل استفاده مجدد

[معیارها](../../../docs/latest/data-modeling/metrics.html) ایجاد کنید تا روش رسمی برای محاسبه اعداد مهم برای تیم خود را تعریف کنید. معیارها مثل محاسبات از پیش تعریف شده هستند: تجمیع‌های خود را یک بار ایجاد کنید، آن‌ها را به عنوان معیار ذخیره کنید، و هر زمان که نیاز به تحلیل داده خود دارید از آن‌ها استفاده کنید.

به عنوان مثال، ممکن است بخواهید یک معیار ایجاد کنید که درآمد را محاسبه می‌کند، تا مردم بتوانند به درآمد در سؤال‌های خود ارجاع دهند. به این ترتیب نحوه محاسبه درآمد را استاندارد می‌کنید (تا با پنج محاسبه مختلف برای درآمد مواجه نشوید).

می‌توانید همان نوع استانداردسازی را برای سؤال‌های SQL با کدگذاری کد SQL در [snippetها](../querying-and-dashboards/sql-in-metabase/snippets.html) انجام دهید، که در [پلن‌های Pro و Enterprise](../../../pricing/index.html) می‌توانید با [پوشه‌ها و مجوزها](../../../docs/latest/permissions/snippets.html) سازماندهی کنید.

## اشتراک‌گذاری نتایج خود

وقتی سؤال‌ها را پرسیده‌اید و داشبوردها را ساخته‌اید، زمان اشتراک‌گذاری تحلیل شما است.

### هشدارها

[یک هشدار تنظیم کنید](../../../docs/latest/questions/alerts.html) تا مردم را وقتی نتایج یک هدف را برآورده می‌کنند اطلاع دهید. می‌توانید هشدارها را از طریق ایمیل یا Slack، یا به یک webhook ارسال کنید.

### اشتراک‌های داشبورد

برای نگه داشتن مردم در جریان معیارهای کلیدی، می‌توانید [اشتراک‌های داشبورد](../../../docs/latest/dashboards/subscriptions.html) را از طریق ایمیل یا Slack تنظیم کنید - حتی به افرادی که حساب در متابیس شما ندارند.

![تنظیم یک اشتراک داشبورد برای ایمیل یا Slack نتایج به طور منظم.](../../images/tour-of-metabase/dashboard-subscription.png)

## جاسازی سؤال‌ها و داشبوردها

می‌توانید [نمودارها و داشبوردها را جاسازی کنید](../../../docs/latest/embedding/start.html) با استفاده از iframeها. در [پلن‌های Pro و Enterprise](../../../pricing/index.html)، حتی می‌توانید اپلیکیشن کامل متابیس را جاسازی کنید، که به شما اجازه می‌دهد کارهایی مثل [ارائه تحلیل چند مستأجری، خودخدمت](../embedding/multi-tenant-self-service-analytics.html) انجام دهید. یا، از [Embedding SDK](../../../docs/latest/embedding/sdk/introduction.html) برای جاسازی کامپوننت‌های متابیس فردی در React با کنترل کامل استایل و تعامل استفاده کنید.

## پیدا کردن چیزها و منظم ماندن

چیزها در این مورد پایگاه‌های داده و تحلیل آن‌ها هستند: سؤال‌ها، داشبوردها، و مجموعه‌هایی که شما و تیم‌هایتان ایجاد می‌کنید.

### جستجو

می‌دانید، برای پیدا کردن چیزها: داده، معیارها، بخش‌ها، داشبوردها، مدل‌ها، و سؤال‌ها. احتمالاً از نوار جستجو بیشتر استفاده می‌کنید، اما نکته اینجا این است که باید بدانید برای چه چیزی جستجو کنید.

### سازماندهی با مجموعه‌ها

مجموعه‌ها سؤال‌ها، مدل‌ها، داشبوردها، و سایر مجموعه‌ها را سازماندهی می‌کنند. آن‌ها مثل پوشه‌ها در یک سیستم فایل کار می‌کنند، و می‌توانید [مجوزها را روی مجموعه‌ها تنظیم کنید](../administration/permissions/collection-permissions.html)، دادن دسترسی ویرایش، مشاهده، یا بدون دسترسی به برخی گروه‌ها. گروه‌هایی با دسترسی ویرایش به یک مجموعه می‌توانند مهم‌ترین موارد را به مجموعه pin کنند - داشبوردهای "رسمی" شما.

![مجموعه‌ها سؤال‌ها و داشبوردها را گروه‌بندی می‌کنند. می‌توانید مجوزها را روی مجموعه‌ها از طریق گروه‌ها تنظیم کنید.](../../images/tour-of-metabase/collections-our-analytics.png)

### رویدادها و timelineها

![یک رویداد رسم شده روی یک سری زمانی.](../../images/tour-of-metabase/example-event.png)

[رویدادها و timelineها](../../../docs/latest/exploration-and-organization/events-and-timelines.html) به شما اجازه می‌دهند تاریخ‌های مهم را ثبت کنید و آن دانش را وقتی نیاز دارید (یعنی وقتی یک سری زمانی را مشاهده می‌کنید) در دسترس قرار دهید. می‌توانید رویدادها را در timelineها سازماندهی کنید، و آن timelineها را با مجموعه‌ها مرتبط کنید.

### مرور داده، مدل‌ها و معیارها

می‌توانید همه پایگاه‌های داده، مدل‌ها، و معیارهای موجود در متابیس خود را مرور کنید.

می‌توانید جداول و فیلدهای آن‌ها را مرور کنید، داده نمونه ببینید، و همچنین فهرستی از سؤال‌هایی که آن داده را پرس‌وجو می‌کنند.

![مرور داده برای کاوش پایگاه‌های داده، جداول، و فیلدها.](../../images/tour-of-metabase/data-reference.png)

### X-rayها

برای دادن یک شروع به شما در پرسیدن سؤال‌ها، متابیس می‌تواند یک جدول را برای شما [X-ray](../../../docs/latest/exploration-and-organization/x-rays.html) کند.

![بخشی از یک X-ray از پایگاه داده نمونه](../../images/tour-of-metabase/orders-table-x-ray.png)

این X-rayها یک دسته سؤال تولید می‌کنند که رکوردهای جدول را به روش‌های مختلف برش می‌دهند. می‌توانید X-ray را به عنوان یک داشبورد ذخیره کنید، هر سؤالی که علاقه‌ای به آن ندارید را حذف کنید، سؤال‌های جدید اضافه کنید، یا فقط از X-ray برای احساس کردن جدول استفاده کنید.

## مدیریت کاربران

مجوزها، احراز هویت، تحلیل استفاده: با قدرت بزرگ مسئولیت بزرگ می‌آید.

### تنظیمات

![تب Settings در Admin Panel.](../../images/tour-of-metabase/admin-settings-tab.png)

می‌توانید [ایمیل](../../../docs/latest/configuring-metabase/email.html) و [Slack](../../../docs/latest/configuring-metabase/slack.html) integrations را تنظیم کنید، تنظیمات locale مثل زبان و ارزها را سفارشی کنید، و احراز هویت را با [Google Sign-In یا LDAP](../../../docs/latest/people-and-groups/google-sign-in.html)، یا در [پلن‌های Pro و Enterprise](../../../pricing/index.html): [JWT](../../../docs/latest/people-and-groups/authenticating-with-jwt.html) یا [SAML](../../../docs/latest/people-and-groups/authenticating-with-saml.html) پیکربندی کنید.

### مجوزهای گروه برای داده و مجموعه‌ها

[گروه‌ها ایجاد کنید](../../../docs/latest/people-and-groups/managing.html#groups) در متابیس، مردم را به آن گروه‌ها اضافه کنید، و سطوح مختلف دسترسی به [پایگاه‌های داده](../administration/permissions/data-permissions.html) و [مجموعه‌ها](../administration/permissions/collection-permissions.html) را به گروه‌ها بدهید.

![افزودن مجوزها به پایگاه‌های داده و مجموعه‌ها با استفاده از گروه‌ها.](../../images/tour-of-metabase/data-permissions.png)

برخی پلن‌ها همچنین شامل توانایی تنظیم مجوزهای سطح اپلیکیشن هستند: چه کسی می‌تواند تنظیمات متابیس را ویرایش کند، لاگ‌ها و ابزارهای debugging را مشاهده کند، و سایر ویژگی‌های سطح اپلیکیشن.

#### امنیت ردیف و ستون

> امنیت ردیف و ستون فقط در
      [Pro](../../../product/pro.html) و
      [Enterprise](../../../product/enterprise.html)
      پلن‌ها (هم self-hosted و هم در Metabase Cloud) در دسترس است.

اگر نیاز به کنترل دانه‌ای روی اینکه چه کسی چه چیزی را می‌بیند دارید، می‌توانید دسترسی جدول را با استفاده از [امنیت ردیف و ستون](../../../docs/v0.56/permissions/row-and-column-security.html) محدود کنید.

همچنین می‌توانید مجوزهای سطح ردیف را برای پرس‌وجوهای SQL با [connection impersonation](../../../docs/latest/permissions/impersonation.html) تنظیم کنید.

### تحلیل استفاده

> تحلیل استفاده فقط در
      [Pro](../../../product/pro.html) و
      [Enterprise](../../../product/enterprise.html)
      پلن‌ها (هم self-hosted و هم در Metabase Cloud) در دسترس است.

اگر نیاز به دیدن اینکه همه چه چیزی را مشاهده می‌کنند دارید، [نحوه نگه داشتن tabs روی داده خود](../administration/permissions/keep-tabs-on-your-data.html) را بررسی کنید.

## ارسال PR، یا fork کردن کد منبع

متابیس منبع باز است، پس اگر متابیس فاقد ویژگی‌ای است که نیاز دارید، همیشه می‌توانید خودتان آن را بسازید. [releases](https://github.com/metabase/metabase/releases) ما را برای دیدن ویژگی‌هایی که اخیراً اضافه کرده‌ایم بررسی کنید، و [roadmap](../../../roadmap.html) برای آنچه در حال کار روی آن هستیم.

## مطالعه بیشتر

- در [blog](../../../blog.html) ما به‌روز بمانید.
- سؤال‌ها؟ ببینید آیا در [forum ما](https://discourse.metabase.com/) پاسخ داده شده‌اند، یا خودتان یک سؤال ارسال کنید.
- [فراتر از BI: مشکلات دیگر که می‌توانید با متابیس حل کنید](beyond-bi.html).

[
      
        
        

      
      
        
        

      
    ](next-steps.html)
