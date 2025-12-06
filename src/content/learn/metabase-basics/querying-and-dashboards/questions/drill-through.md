---
title: "ایجاد نمودارهای تعاملی"
description: "نمودارهایی بسازید که مردم می‌توانند با استفاده از query builder، ساخت مدل‌ها، یا افزودن مقصدهای سفارشی کاوش کنند."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/questions/drill-through
  - /learn/basics/questions/drill-through
  - /learn/questions/drill-through
toc:
  - id: "create-interactive-charts"
    title: "ایجاد نمودارهای تعاملی"
    level: 1
    href: "#create-interactive-charts"
  - id: "what-is-drill-through-and-how-does-it-work"
    title: "Drill-through چیست و چگونه کار می‌کند؟"
    level: 2
    href: "#what-is-drill-through-and-how-does-it-work"
  - id: "zoom-in"
    title: "Zoom in"
    level: 3
    href: "#zoom-in"
  - id: "select-to-zoom"
    title: "Select to zoom"
    level: 4
    href: "#select-to-zoom"
  - id: "auto-zoom"
    title: "Auto-zoom"
    level: 4
    href: "#auto-zoom"
  - id: "view-these-records"
    title: "View these records"
    level: 3
    href: "#view-these-records"
  - id: "breakouts"
    title: "Breakouts"
    level: 3
    href: "#breakouts"
  - id: "x-rays"
    title: "X-rays"
    level: 2
    href: "#x-rays"
  - id: "how-to-create-charts-you-can-drill-through"
    title: "نحوه ایجاد نمودارهایی که می‌توانید drill through کنید"
    level: 2
    href: "#how-to-create-charts-you-can-drill-through"
  - id: "build-charts-using-query-builder"
    title: "ساخت نمودارها با استفاده از query builder"
    level: 3
    href: "#build-charts-using-query-builder"
  - id: "convert-sql-questions-to-models"
    title: "تبدیل سؤال‌های SQL به مدل‌ها"
    level: 3
    href: "#convert-sql-questions-to-models"
  - id: "add-the-question-to-a-dashboard-and-set-a-custom-destination"
    title: "افزودن سؤال به یک داشبورد و تنظیم یک مقصد سفارشی"
    level: 3
    href: "#add-the-question-to-a-dashboard-and-set-a-custom-destination"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "پرسیدن سؤال‌ها"
    href: "../questions.html"
---

# ایجاد نمودارهای تعاملی

نمودارهایی بسازید که مردم می‌توانند با استفاده از query builder، ساخت مدل‌ها، یا افزودن مقصدهای سفارشی کاوش کنند.

می‌توانید نمودارهایی در متابیس ایجاد کنید که مردم می‌توانند drill through کنند. مثل این:

![Zoom کردن روی یک دسته و بازه زمانی خاص، سپس مشاهده سفارش‌هایی که یکی از میله‌های نمودار را تشکیل می‌دهند.](../../../images/create-charts-with-explorable-data/zoom-and-view.gif)

اگر فقط سؤال‌ها را در SQL نوشته‌اید، ممکن است این واقعیت را از دست داده باشید که متابیس می‌تواند نمودارهای شما را قابل کاوش کند. یا شاید روی یک داشبورد کلیک کرده‌اید و متوجه شده‌اید که برخی نمودارها گزینه‌های drill-through بیشتری نسبت به سایرین دارند. نحوه‌های مختلفی که می‌توانید از طریق آن نمودارها drill through کنید و نحوه تنظیم drill-through روی نمودارهای خود (گاهی drill-down نامیده می‌شود) را پوشش می‌دهیم.

## Drill-through چیست و چگونه کار می‌کند؟

بیایید عملکرد drill-through را tour کنیم. در اینجا سؤالی که برای کاوش استفاده می‌کنیم:

![سؤال، composed شده در query builder، استفاده در مثال‌های drill-through زیر.](../../../images/create-charts-with-explorable-data/question-notebook-editor.png)

تجسم به یک **نمودار میله‌ای stacked** تنظیم شده است.

![تنظیم تجسم به یک نمودار میله‌ای stacked.](../../../images/create-charts-with-explorable-data/stacked-bar-chart.png)

روی هر جای نمودار کلیک کنید تا **Action Menu** باز شود. **Action Menu** چند گزینه drill-through مختلف ارائه می‌دهد که می‌توانید هنگام کاوش داده خود از آن‌ها انتخاب کنید.

![کلیک روی یک مقدار از یک نمودار Action Menu را می‌آورد، ارائه گزینه‌هایی برای zoom in، مشاهده رکوردها، breakout، و X-ray.](../../../images/create-charts-with-explorable-data/action-menu.png)

از هر یک از گزینه‌ها در منوی popup که در بالا می‌بینید گام به گام می‌رویم:

- [Zoom in روی داده](#zoom-in)
- [مشاهده رکوردهایی که آن داده را تشکیل می‌دهند](#view-these-records)
- [Break out داده](#breakouts)
- [X-ray داده](#x-rays)

### Zoom in

دو راه برای zoom in روی سفارش‌ها وجود دارد، [Select-to-zoom](#select-to-zoom) و [Auto-zoom](#auto-zoom).

#### Select to zoom

می‌توانید کلیک و drag کنید تا یک ناحیه از یک نمودار را برای zoom in انتخاب کنید.

![می‌توانید کلیک و drag کنید تا یک ناحیه از یک نمودار را انتخاب کنید، و متابیس روی مقادیر در آن ناحیه انتخاب شده zoom in می‌کند.](../../../images/create-charts-with-explorable-data/drag-select-to-zoom.png)

#### Auto-zoom

می‌توانید left-click کنید تا **منوی Drill-through** > **See this month by week** باز شود و متابیس یک close-up از داده اطراف مقداری که انتخاب کردید ایجاد می‌کند.

![Left-click روی یک نمودار برای باز کردن منوی Drill-through و انتخاب Zoom in. متابیس به طور خودکار یک close-up از داده اطراف مقدار ایجاد می‌کند.](../../../images/create-charts-with-explorable-data/auto-zoom.png)

گزینه **See this date** یک محدوده مناسب از مقادیر بر اساس محدوده کامل مقادیر در نمودار انتخاب می‌کند.

### View these records

می‌توانید روی یک مقدار روی یک نمودار کلیک کنید و `View these orders` را انتخاب کنید تا یک جدول با رکوردهای فردی که مقدار را تشکیل می‌دهند باز شود.

![کلیک روی یک مقدار و انتخاب View these orders یک جدول از رکوردهایی که مقدار را تشکیل می‌دهند می‌آورد.](../../../images/create-charts-with-explorable-data/view-these-orders.gif)

### Breakouts

**Breaking out** بر اساس یک دسته به ما اجازه انجام چیزهایی مثل دیدن سفارش‌های banana cream pie در ژوئن 2017 broken out بر اساس وضعیت مشتری (مثلاً، جدید یا VIP، و غیره) یا جنبه‌های مختلف دیگر سفارش را می‌دهد. نمودارهای مختلف گزینه‌های breakout مختلفی خواهند داشت، مثل Location و Time.

![کلیک روی یک مقدار گزینه‌هایی برای breakout داده ارائه می‌دهد. گزینه‌های مختلف بر اساس داده در نمودار ظاهر می‌شوند. GIF یک breakout بر اساس Category: Product Vendor نشان می‌دهد.](../../../images/create-charts-with-explorable-data/breakout-by-vendor.gif)

## X-rays

[X-rayها](../../../../docs/latest/exploration-and-organization/x-rays.html) کاوش‌های به طور خودکار تولید شده از داده شما هستند. می‌توانید روی هر جای یک نمودار کلیک کنید تا یک X-ray انجام دهید، و متابیس یک داشبورد پر از سؤال‌های مختلف درباره داده تولید می‌کند. گزینه‌ای برای ذخیره آن X-ray به عنوان یک داشبورد خواهید داشت، که سپس می‌توانید آن را به سلیقه خود ویرایش کنید، با حذف سؤال‌های نامرتبط، یا افزودن سؤال‌های جدید یا [جعبه‌های متنی](../dashboards/markdown.html) برای پر کردن داستانی که می‌خواهید بگویید.

![X-rayها (زیاد) نمودارهای مختلف بر اساس داده در جدول(های) شما ایجاد می‌کنند.](../../../images/create-charts-with-explorable-data/x-ray.png)

کلیک روی یک نقطه یا میله همچنین گزینه مقایسه داده را به شما می‌دهد، که یک داشبورد دیگر با نمودارهای به طور خودکار تولید شده به شما می‌دهد.

اگر X-rayها برای داده شما منطقی نیستند، می‌توانید [X-rayها را غیرفعال کنید](../../../../docs/latest/exploration-and-organization/x-rays.html#disabling-x-rays). بیشتر درباره [X-rayها در مستندات ما](../../../../docs/latest/exploration-and-organization/x-rays.html) یاد بگیرید.

## نحوه ایجاد نمودارهایی که می‌توانید drill through کنید

### ساخت نمودارها با استفاده از query builder

[Action Menu](#what-is-drill-through-and-how-does-it-work) را روی نمودارها به طور خودکار وقتی یک سؤال با استفاده از [query builder](../../../../docs/latest/questions/introduction.html) ایجاد می‌کنید دریافت می‌کنید. همین. همه آنچه باید انجام دهید.

### تبدیل سؤال‌های SQL به مدل‌ها

اگر یک سؤال با استفاده از SQL می‌نویسید، drill-through کامل out of the box دریافت نمی‌کنید. به عنوان مثال، قادر به drill down به رکوردهای unaggregated، یا zoom in روی یک دوره زمانی با granularity کوچکتر از سؤال اصلی خود نخواهید بود. مردم قادر به دریافت اطلاعات granularتر از آنچه پرس‌وجوی SQL شما ارائه می‌دهد نخواهند بود.

اما با برنامه‌ریزی دقیق پرس‌وجو، می‌توانید مردم را قادر به drill down روی نمودارهای خود با ساخت پرس‌وجوهای SQL خود با بالاترین سطح جزئیات که برای مشکل شما منطقی است، و سپس ساخت مدل‌ها روی آن‌ها کنید. به عنوان مثال، اگر می‌خواهید مردم drill down به رکوردهای unaggregated کنند، با یک پرس‌وجو که رکوردها را aggregate نمی‌کند شروع کنید. یا اگر می‌خواهید مردم قادر به تغییر granularity datetime باشند، تاریخ‌های خود را کوچک‌ترین granularity که منطقی است (مثلاً دقیقه) truncate کنید و از query builder برای انجام بقیه استفاده کنید.

پس فرآیند:

1. یک سؤال در SQL بنویسید که داده شروع مورد نیاز را کنار هم می‌آورد، مثل اینکه یک view برای مردم برای پرس‌وجو ایجاد می‌کنید. پس داده را از قبل فیلتر یا از قبل خلاصه نکنید (به جز فیلتر کردن ردیف‌ها و ستون‌هایی که می‌خواهید از "view" حذف کنید).
2. آن سؤال را ذخیره کنید و آن را به یک [مدل](../../getting-started/models.html) تبدیل کنید.
3. [متادیتای مدل را ویرایش کنید](../../../../docs/latest/data-modeling/models.html) تا نوع هر ستون را مشخص کنید. اگر متابیس بداند هر ستون شامل چه نوع داده‌ای است، می‌تواند جادوی drill-through خود را کار کند.

از آنجا، می‌توانید یا به مردم اجازه استفاده از مدل به عنوان نقطه شروع برای پرسیدن سؤال با query builder بدهید، یا می‌توانید سؤال‌های query builder بر اساس آن مدل برای مردم برای بازی با آن ایجاد کنید.

گزینه دیگر برای سؤال‌های مبتنی بر SQL این است که…

### افزودن سؤال به یک داشبورد و تنظیم یک مقصد سفارشی

[مقصدهای سفارشی](../dashboards/custom-destinations.html) همان چیز ارائه دادن منوی drill-through به مردم نیستند. یعنی، مردم قادر به slice و dice داده سؤال نخواهند بود اگر یک مقصد سفارشی اضافه کنید.

اما مقصدهای سفارشی *کنترل بیشتری* بر آنچه وقتی مردم روی یک نمودار کلیک می‌کنند اتفاق می‌افتد به شما می‌دهند، و مقصدهای سفارشی از برخی جهات قدرتمندتر از منوی drill-through هستند (علیرغم آنچه capitalization ناسازگار ما ممکن است نشان دهد). می‌توانید مردم را به سؤال دیگر، داشبورد، یا URL خارجی ارسال کنید، و حتی می‌توانید آن مقصدها را بر اساس مقادیر در نمودار parameterize کنید.

مقصدهای سفارشی برای هم سؤال‌های SQL و هم query builder کار می‌کنند، چون مقصدهای سفارشی رفتار کلیک پیش‌فرض را override می‌کنند. همچنین می‌توانید [cross-filtering](../dashboards/cross-filtering.html) را روی یک داشبورد تنظیم کنید، تا مردم بتوانند روی یک نمودار کلیک کنند تا یک فیلتر به‌روزرسانی شود.

[
      
        
        

      
      
        
        

      
    ](custom-expressions.html)
