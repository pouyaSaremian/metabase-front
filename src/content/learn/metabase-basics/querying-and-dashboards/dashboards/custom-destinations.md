---
title: "آموزش: مقصدهای کلیک سفارشی روی داشبوردها"
description: "می‌توانید کارت‌های داشبورد را تنظیم کنید تا مردم را به داشبوردها، سؤال‌های ذخیره شده، و URLها ارسال کنند، و از مقادیر از کارت برای به‌روزرسانی فیلترها در مقصد، یا parameterize کردن لینک‌ها به سایت‌های خارجی استفاده کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/dashboards/custom-destinations
  - /learn/building-analytics/dashboards/custom-destinations
  - /learn/dashboards/custom-destinations
toc:
  - id: "tutorial-custom-click-destinations-on-dashboards"
    title: "آموزش: مقصدهای کلیک سفارشی روی داشبوردها"
    level: 1
    href: "#tutorial-custom-click-destinations-on-dashboards"
  - id: "creating-orders-overview-and-product-details-dashboards"
    title: "ایجاد داشبوردهای Orders Overview و Product Details"
    level: 2
    href: "#creating-orders-overview-and-product-details-dashboards"
  - id: "customizing-click-behavior-orders-overview-dashboard"
    title: "سفارشی کردن رفتار کلیک: داشبورد Orders Overview"
    level: 2
    href: "#customizing-click-behavior-orders-overview-dashboard"
  - id: "passing-values-to-the-destination"
    title: "پاس دادن مقادیر به مقصد"
    level: 2
    href: "#passing-values-to-the-destination"
  - id: "custom-destination-url"
    title: "مقصد سفارشی: URL"
    level: 2
    href: "#custom-destination-url"
  - id: "add-navigation-with-text-boxes"
    title: "افزودن ناوبری با جعبه‌های متنی"
    level: 2
    href: "#add-navigation-with-text-boxes"
  - id: "custom-destinations-with-sql-questions"
    title: "مقصدهای سفارشی با سؤال‌های SQL"
    level: 2
    href: "#custom-destinations-with-sql-questions"
  - id: "recap"
    title: "خلاصه"
    level: 2
    href: "#recap"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "ساخت داشبوردها"
    href: "../dashboards.html"
---

# آموزش: مقصدهای کلیک سفارشی روی داشبوردها

می‌توانید کارت‌های داشبورد را تنظیم کنید تا مردم را به داشبوردها، سؤال‌های ذخیره شده، و URLها ارسال کنند، و از مقادیر از کارت برای به‌روزرسانی فیلترها در مقصد، یا parameterize کردن لینک‌ها به سایت‌های خارجی استفاده کنید.

متابیس برخی بلوک‌های ساختمانی ساده ارائه می‌دهد که به شما اجازه سفارشی کردن آنچه وقتی کسی روی یک نمودار روی داشبورد شما کلیک می‌کند اتفاق می‌افتد را می‌دهد. می‌توانید این primitiveها را ترکیب کنید تا مسیرهایی از طریق گزارش‌های خود ایجاد کنید، با داشبوردها که داشبوردهای بعدی را به‌روزرسانی می‌کنند، و حتی مردم را به سایت‌های خارجی ارسال می‌کنند.

برای این مقاله، روی یکی از گزینه‌ها برای سفارشی کردن رفتار کلیک تمرکز می‌کنیم: **Go to custom destination**. از یک سناریو با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) متابیس راهنمایی می‌کنیم تا به شما نشان دهیم مقصدهای سفارشی چگونه کار می‌کنند، و برخی ترفندهای مرتب برای ایجاد تجربه‌های تعاملی نشان می‌دهیم.

دو داشبورد سریع ایجاد می‌کنیم — یک داشبورد **Orders Overview** و یک داشبورد **Product Detail**. در اینجا تجربه کاربری که می‌خواهیم ایجاد کنیم: وقتی کسی داشبورد Orders Overview ما را مشاهده می‌کند، باید بتواند روی یک محصول کلیک کند و متابیس آن‌ها را به یک داشبورد Product Detail که بر اساس محصولی که کاربر کلیک کرد به‌روزرسانی می‌شود ببرد. وقتی مردم به داشبورد Product Detail رسیدند، متابیس باید قادر به ارسال مردم به URLهای خارجی مختلف بر اساس دسته محصولی که کلیک می‌کنند باشد.

بعد از آن، همچنین [مثال دیگری با استفاده از سؤال‌های SQL](#custom-destinations-with-sql-questions) را مرور می‌کنیم تا نشان دهیم مقصدهای سفارشی راهی عالی برای افزودن یک عنصر تعاملی به سؤال‌های SQL روی یک داشبورد هستند.

اگر از قبل داشبوردهای خود را برای کار دارید، می‌توانید [به جلو بپرید](#customizing-click-behavior-orders-overview-dashboard) به جایی که به سفارشی کردن مقصدها می‌پردازیم.

## ایجاد داشبوردهای Orders Overview و Product Details

بیایید با ساخت داشبورد **Orders Overview** خود و افزودن دو سؤال به آن شروع کنیم. این بخش را سریع مرور می‌کنیم — اگر به دنبال اطلاعات جزئی‌تر هستید، مستندات ما درباره [پرسیدن سؤال](../../../../docs/latest/questions/introduction.html) و [ایجاد داشبوردها](../../../../docs/latest/dashboards/introduction.html) را بررسی کنید:

بروید و یک داشبورد جدید ایجاد کنید، آن را Orders Overview نامگذاری کنید، و آن را در مکانی که منطقی است ذخیره کنید.

دو سؤال درباره سفارش‌های خود می‌پرسیم:

1. **یک جدول سفارش‌های ما چگونه به نظر می‌رسد؟**: با مرور جدول `Orders` شروع کنید، و save را کلیک کنید.
2. **سفارش‌ها چگونه بر اساس state تقسیم می‌شوند؟**: جدول `Orders` را برای شروع انتخاب کنید، و بر اساس فیلد `State` زیر **User** در sidebar خلاصه کنید. از آنجایی که بر اساس state خلاصه می‌کنیم، متابیس یک [نقشه منطقه](../../../../docs/latest/questions/visualizations/map.html#region-maps) برای ما تولید می‌کند. مطمئن شوید این سؤال را نیز ذخیره کنید.

بعد می‌توانیم آن سؤال‌های ذخیره شده را به داشبورد جدید خود اضافه کنیم. در حالی که به داشبورد خالی نگاه می‌کنیم، روی **آیکون مداد** کلیک کنید تا وارد حالت ویرایش شوید، و سؤال‌های ذخیره شده را با انتخاب **+** اضافه کنید. وقتی آن سؤال‌ها را اضافه کردید و داشبورد خود را ذخیره کردید، نتیجه باید شبیه این باشد:

![داشبورد Orders Overview.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/orders-overview.png)

بعد، نیاز به ساخت داشبورد **Product Detail** خود داریم، که در نهایت به Orders Overview لینک می‌شود. Product Detail نگاه نزدیک‌تری به یک مورد فردی در موجودی ما خواهد بود، پس همچنین [فیلتر داشبورد](../../../../docs/latest/dashboards/filters.html) را wire می‌کنیم که به ما اجازه وارد کردن یک مقدار ID بسته به محصولی که می‌خواهیم بررسی کنیم را می‌دهد.

این داشبورد را ایجاد کنید، آن را Product Detail نامگذاری کنید، و ذخیره کنید.

و بیایید دو سؤال جدید بپرسیم که به این داشبورد اضافه می‌کنیم:

1. **نام محصول چیست؟**: از جدول `Products` شروع کنید، روی **Visualize** کلیک کنید، و **Number** را انتخاب کنید، انتخاب `Title` در dropdown **Field to show**. این سؤال را ذخیره کنید.
2. **چند سفارش این محصول را شامل می‌شود؟**: با جدول `Orders` شروع کنید، و بر اساس count از `Product ID` زیر فهرست `Orders` خلاصه کنید. این را نیز با **Number** تجسم کنید، انتخاب `Count` در dropdown **Field to show**، و سؤال را ذخیره کنید.

به داشبورد Product Detail برگردید. در حالت ویرایش، سؤال‌های ذخیره شده جدید خود را اضافه کنید، و یادتان نرود نیاز به یک فیلتر داشبورد نیز داریم. برای افزودن یکی، روی آیکون **Add a filter** در بالا سمت راست کلیک کنید، و **ID** را انتخاب کنید. ستون مناسب را برای فیلتر روی هر کارت انتخاب کنید — کارت نام محصول ما روی `Product.ID` فیلتر می‌کند، در حالی که count سفارش‌های ما باید روی `Order.Product ID` فیلتر کند. تجسم‌ها را برای این سؤال‌ها به **Number** تنظیم کردیم تا مانند یک کارت متنی متغیر عمل کنند، تغییر متن بر اساس مقدار در فیلتر.

در اینجا تنظیمات فیلتر داشبورد به نظر می‌رسد:

![افزودن یک فیلتر به داشبورد Product Detail ما.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/filter-product-detail.png)

روی **Done** کلیک کنید و داشبورد خود را ذخیره کنید.

حالا نشان می‌دهیم چگونه می‌توانیم به یک وب‌سایت خارجی لینک کنیم. فقط به عنوان یک مثال، از [صفحه نتایج جستجو](../../../../search8ba0.html?query=interactive+dashboards) برای مستندات متابیس استفاده می‌کنیم، و برای محصولی که کاربر کلیک کرد جستجو می‌کنیم.

در اینجا مسیر کلیک کامل:

**Orders Overview** dashboard → **Product Detail** dashboard → سایت خارجی

این GIF مسیر کلیک را در عمل نشان می‌دهد:

![یک مسیر کلیک از داشبورد Orders overview به داشبورد Product detail، به صفحه جستجوی مستندات متابیس برای دسته کلیک شده: Widget.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/clickpath.gif)

## سفارشی کردن رفتار کلیک: داشبورد Orders Overview

بیایید به داشبورد **Orders Overview** برگردیم. می‌توانیم رفتارهای کلیک سفارشی را به هر [کارت](../../../../glossary/card.html) سؤال روی این داشبورد اضافه کنیم، اما بیایید فقط روی افزودن یک مقصد سفارشی به یک کارت تمرکز کنیم. بگویید می‌خواهیم کارت `Orders` (کارت شامل یک جدول سفارش‌ها) را تنظیم کنیم، تا وقتی کسی روی [ستون](../../../../glossary/column.html) `Product ID` کلیک می‌کند، متابیس آن‌ها را به صفحه Product Detail ارسال کند، و فیلتر روی داشبورد Product Detail را با `Product ID` محصولی که کاربر کلیک کرد plug کند.

شروع از صفحه Orders Overview، روی **آیکون مداد** کلیک می‌کنیم تا وارد حالت ویرایش داشبورد شویم. بعد، روی کارتی که می‌خواهیم سفارشی کنیم hover می‌کنیم. یک منو در بالا سمت راست ظاهر می‌شود. روی منوی **آیکون رفتار کلیک** (آیکون با نشانگر ماوس روی یک کارت) کلیک کنید.

![روی کارتی که می‌خواهید سفارشی کنید hover کنید، و روی آیکون رفتار کلیک کلیک کنید.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/click-behavior-icon.png)

متابیس یک sidebar برای شما slide می‌کند تا تنظیم کنید وقتی کسی روی این جدول کلیک می‌کند چه اتفاقی می‌افتد.

![برای کارت‌ها با جداول، می‌توانید رفتار کلیک را برای هر ستون سفارشی کنید. برای سؤال‌های composed شده با استفاده از query builder، رفتار کلیک پیش‌فرض باز کردن منوی action است.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/click-behavior-for-each-column.png)

بیایید یک lay of the land بگیریم:

- Card grid: از آنجایی که **Click behavior** را برای کارت Orders انتخاب کردیم، متابیس برچسب **On click** آن را با آبی highlight می‌کند. می‌توانیم رفتار on-click را روی کارت دیگر با کلیک روی برچسب آن کارت انتخاب کنیم.
- بالا سمت راست: منوی ویرایش اصلی، با گزینه‌هایی برای افزودن یک سؤال، جعبه متنی، یا فیلتر.
- Sidebar سمت راست: گزینه‌هایی برای سفارشی کردن رفتار on-click برای کارت فعلی.

از آنجایی که از query builder برای compose کردن سؤال Orders استفاده کردیم، متابیس رفتار کلیک پیش‌فرض را به **Open the drill-through menu** تنظیم کرد، که به مردم اجازه [drill through داده](../questions/drill-through.html) را می‌دهد.

![رفتار کلیک برای ستون Product ID. پیش‌فرض به Open the action menu.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/click-behavior-product-id.png)

بیایید رفتار کلیک را تغییر دهیم تا مردم را به داشبورد **Product Detail** خود ارسال کند.

جداول و مقصدهای سفارشی ترکیب به خصوص عالی می‌سازند، چون می‌توانیم مقصدهای سفارشی مختلف برای هر ستون در یک جدول تنظیم کنیم. در این مثال، فقط رفتار کلیک را برای یک ستون واحد تنظیم می‌کنیم. می‌خواهیم یک مقصد سفارشی روی کارت سؤال Orders تنظیم کنیم تا وقتی مردم روی یک مقدار در ستون `Product ID` کلیک می‌کنند، متابیس 1) آن‌ها را به داشبورد Product Detail ارسال کند و 2) آن داشبورد را با `Product ID` کلیک شده فیلتر کند.

گزینه‌های ما:

- Open the action menu (پیش‌فرض برای سؤال‌های composed شده با query-builder).
- Go to a custom destination.
- Update a dashboard filter.

**Go to a custom destination** را انتخاب می‌کنیم.

متابیس سه گزینه برای مقصدهای سفارشی ارائه می‌دهد:

- **Dashboard**
- **Saved question**
- **URL**

برای ارسال مردم به داشبورد **Product Detail**، گزینه **Dashboard** را انتخاب می‌کنیم، و داشبورد **Product Detail** خود را انتخاب می‌کنیم.

اینجا یک checkpoint:

![ستون Product ID را روی Go to a custom destination تنظیم کردیم، که آن را](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/link-to-product-detail.png)

## پاس دادن مقادیر به مقصد

تا کنون ستون `Product ID` را روی **Go to custom destination** تنظیم کردیم، که آن را برای لینک به داشبورد **Product Detail** تنظیم کردیم، اما کاملاً تنظیم این لینک تمام نشده است. بعد، می‌خواهیم **Pass values to this dashboard's filters**. فهرستی از فیلترهای موجود در داشبورد را خواهید دید. در این مورد، داشبورد **Product Detail** ما فقط یک فیلتر که می‌توانیم مقادیر را به آن pass کنیم دارد: **ID**.

روی **ID** کلیک کنید، و متوجه می‌شوید که می‌توانید مقادیر را از هر یک از ستون‌ها در جدول pass کنید، نه فقط ستون `Product ID`. اما در مورد ما، مقدار را از ستون `Product ID` pass می‌کنیم.

متابیس یک خلاصه ارائه می‌دهد:

![خلاصه رفتار کلیک که ما](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/pass-product-id.png)

اینجا، متابیس تأیید می‌کند که رفتار کلیک را برای ستون `Product ID` تنظیم کرده‌ایم تا:

- Go to a custom destination.
- به داشبورد **Product Detail** لینک کند.
- مقدار از ستون `Product ID` را به فیلتر `ID` روی داشبورد **Product Detail** pass کند.

بیایید آن را امتحان کنیم: از **Orders Overview**، روی ستون `Product ID` کلیک می‌کنیم، و متابیس ما را به داشبورد **Product Detail** می‌برد، با مقدار `14` plug شده در فیلتر `ID`.

![کلیک روی ستون Product ID در داشبورد Orders Overview شما را به Product Detail می‌فرستد و مقدار Product ID (در این مورد 14، ID برای Awesome Concrete Shoes) را در فیلتر ID روی آن داشبورد plug می‌کند.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/overview-to-detail.gif)

## مقصد سفارشی: URL

بعد، داشبورد **Product Detail** را تنظیم می‌کنیم تا وقتی مردم روی کارت **Product name** کلیک می‌کنند، متابیس آن‌ها را به یک سایت خارجی ارسال کند، و URL را با مقدار از کارت parameterize کند. می‌توانیم آن‌ها را به هر سایت خارجی ارسال کنیم، اما برای این مثال آن‌ها را به صفحه جستجو برای مستندات متابیس می‌فرستیم، فقط تا parameterization را در عمل ببینید (و چون خواندن مستندات ما شما را یک فرد بهتر می‌کند).

اینجا دوباره آن داشبورد:

![داشبورد جزئیات محصول، نشان‌دهنده جزئیات برای Lightweight Wool Computer کلاسیک.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/product-details.png)

مثل قبل، به حالت ویرایش داشبورد می‌رویم، روی کارت **Product name** hover می‌کنیم، و **Click behavior** را انتخاب می‌کنیم.

همان منویی که قبلاً دیدیم را خواهیم دید:

- Open the action menu.
- Go to a custom destination.
- Update a dashboard filter.

**Go to a custom destination** و **URL** را انتخاب می‌کنیم. بعد URL خود را وارد می‌کنیم، و [پارامترها](../../../../glossary/parameter.html) را با wrap کردن آن‌ها در براکت‌های دوتایی، مثل این: {{parameter}} شامل می‌کنیم. در این مورد، از `Title` به عنوان یک پارامتر در URL استفاده می‌کنیم:

```url
https://www.metabase.com/search?query={{Title}}
```

![Modal برای وارد کردن یک URL سفارشی. می‌توانید از براکت‌های دوتایی برای محصور کردن پارامترها استفاده کنید.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/enter-a-url.png)

می‌توانید dropdown **Values you can reference** را مشاهده کنید تا فهرست کامل مقادیری که می‌توانید به عنوان پارامتر در URL خود استفاده کنید را ببینید. می‌توانید هر (یا همه) مقادیر را در URL استفاده کنید، شامل استفاده مکرر از همان مقدار.

## افزودن ناوبری با جعبه‌های متنی

علاوه بر [افزودن زمینه برای داشبوردهای خود](markdown.html)، می‌توانید از کارت‌های متنی برای افزودن لینک‌های ناوبری مفید به داشبوردهای خود استفاده کنید، مثل افزودن یک کارت متنی که شما را به داشبورد **Orders Overview** که از آن شروع کردیم برمی‌گرداند. می‌توانید یک کارت متنی ایجاد کنید، متن را center کنید، و از Markdown برای ایجاد یک لینک به داشبورد **Orders Overview** استفاده کنید، فقط یک راحتی برای خوانندگان شما تا مرور از طریق مسیر کلیک را آسان کند. در اینجا داشبورد با آن لینک به نظر می‌رسد:

![استفاده از یک کارت متنی برای افزودن یک لینک ناوبری مفید.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/helpful-navigation-link.png)

## مقصدهای سفارشی با سؤال‌های SQL

داشبوردهای نمونه که در بالا استفاده کردیم فقط شامل سؤال‌های پرسیده شده با [query builder](../../../../glossary/query-builder.html) متابیس بودند، اما همچنین ممکن است [پرس‌وجوهای بومی](../../../../glossary/native-query.html) داشته باشید که می‌خواهید روی داشبورد خود تعاملی کنید.

با پرسیدن و افزودن یک سؤال SQL به داشبورد **Product Detail** خود شروع می‌کنیم، این بار درباره دسته‌های محصول. پس از ناوبری به native query builder، سؤال SQL زیر را وارد می‌کنیم:

```sql
select CATEGORY
from PRODUCTS
where
    {{TITLE}} and
    {{ID}}
```

متابیس یک sidebar slide می‌کند، جایی که دو متغیر می‌بینید: `TITLE` و `ID`. می‌خواهیم این سؤال دسته محصول را هر زمان که یک مقدار را در فیلدهای ID یا Title وارد می‌کنیم به ما نشان دهد. از dropdown، **Variable type** را برای هر دو به **Field filter** تنظیم کنید. بروید و متغیر `TITLE` را به فیلد `Product.Title` map کنید، و `ID` را به `Product.ID` map کنید.

می‌توانید تأیید کنید که سؤال اجرا می‌شود با افزودن یک ID نمونه به فیلتر فیلد؛ اینجا آن را با Product ID شماره 34 تست می‌کنیم، و پرس‌وجو را اجرا می‌کنیم. چون تجسم ما **Number** است، دسته (Gadget) برای این محصول را به عنوان متن زیر سؤال render شده می‌بینیم:

![ویرایش و اجرای پرس‌وجوی SQL ما.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/native-query-editor.png)

حالا سؤال را ذخیره کنید و آن را به داشبورد **Product Detail** خود اضافه کنید. در حالی که در حالت ویرایش هستیم، مطمئن شوید فیلتر داشبورد موجود خود را به کارت جدید خود لینک کنیم، که باید روی ستون `ID` کارت جدید **Product category** ما فیلتر کند.

بعد، **آیکون رفتار کلیک** را روی کارت جدید خود انتخاب کنید، جایی که منوی کمی متفاوت از قبل خواهید دید:

- Do nothing
- Go to a custom question
- Update a dashboard filter

دلیل وجود گزینه "Do nothing" این است که سؤال `Product category` را در SQL نوشتیم، و سؤال‌های SQL شامل **Action Menu** نمی‌شوند.

و اینجا جایی است که یک ترفند مرتب به شما نشان می‌دهیم. اگر به سؤال `Product category` برگردیم، می‌توانیم از `concat` برای ایجاد رشته‌هایی که بر اساس مقدار فیلتر به‌روزرسانی می‌شوند استفاده کنیم.

```sql
select concat('Category is ', CATEGORY)
from PRODUCTS
where
    {{TITLE}} and
    {{ID}}
```

![سؤال دسته به‌روزرسانی شده نوشته شده در SQL.](../../../images/custom-destinations-choose-what-happens-when-people-click-on-charts-in-your-dashboard/category-is-doohickey.png)

برای تمام کردن می‌توانستیم مقصد سفارشی را به یک URL parameterized خاص مثل قبل تنظیم کنیم، یا این کارت را به داشبورد دیگری که شامل آمار درباره سفارش‌ها بر اساس دسته‌های محصول آن‌ها است لینک کنیم.

## خلاصه

نشان دادیم چگونه مسیرهای کلیک ساده تنظیم کنید، و چگونه مقصدهای سفارشی را برای هم پرس‌وجوهای بومی و هم آن‌هایی که با query builder متابیس ساخته شده‌اند تنظیم کنید. اما این مثال‌ها فقط یک مسیر کلیک نشان دادند. می‌توانید رفتار را برای هر کارت سؤال روی داشبورد خود سفارشی کنید! به عنوان مثال، می‌توانستید یک داشبورد جزئیات State ایجاد کنید و رفتار کلیک را روی نقشه ایالات متحده سفارشی کنید تا متابیس مردم را به داشبورد جزئیات State، فیلتر شده بر اساس state کلیک شده ارسال کند.

سؤال‌های ساخته شده با استفاده از query builder متابیس به طور پیش‌فرض به منوی action می‌روند، که به کاربران اجازه [drill through داده](../questions/drill-through.html) را می‌دهد، اما برای سؤال‌های SQL، توصیه می‌کنیم یک مقصد را سفارشی کنید (جایی که منطقی است). مستندات ما را برای بیشتر درباره [داشبوردهای تعاملی](../../../../docs/latest/dashboards/interactive.html) بررسی کنید.

همچنین می‌توانید [attributeهای کاربر را به URLها یا فیلترهای مقصد pass کنید](markdown.html)، که به شما اجازه تطبیق تجربه‌ها برای کاربران خاص را می‌دهد.

پس خلاق باشید با تنظیم مسیرهای کلیک از طریق داده خود، و هر ترفندی که به آن می‌رسید را در [انجمن ما](https://discourse.metabase.com/t/programmatically-create-questions/12109) به اشتراک بگذارید.

[
      
        

      
      
        
        

      
    ](linking-filters.html)
[
      
        
        

      
      
        
        

      
    ](cross-filtering.html)
