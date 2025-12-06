---
title: "بر نمودار میله‌ای مسلط شوید"
description: "یک نمودار میله‌ای ایجاد کنید و آن را با تنظیمات تجسم سفارشی کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/visualization/bar-charts
  - /learn/basics/visualizing-data/bar-charts
  - /learn/visualization/bar-charts
toc:
  - id: "master-the-bar-chart"
    title: "بر نمودار میله‌ای مسلط شوید"
    level: 1
    href: "#master-the-bar-chart"
  - id: "create-a-bar-chart"
    title: "ایجاد یک نمودار میله‌ای"
    level: 2
    href: "#create-a-bar-chart"
  - id: "bar-chart-settings"
    title: "تنظیمات نمودار میله‌ای"
    level: 2
    href: "#bar-chart-settings"
  - id: "data"
    title: "Data"
    level: 2
    href: "#data"
  - id: "display-settings"
    title: "تنظیمات Display"
    level: 2
    href: "#display-settings"
  - id: "add-a-goal-line"
    title: "افزودن یک خط هدف"
    level: 3
    href: "#add-a-goal-line"
  - id: "show-values"
    title: "نمایش مقادیر"
    level: 3
    href: "#show-values"
  - id: "add-a-trend-line"
    title: "افزودن یک خط روند"
    level: 3
    href: "#add-a-trend-line"
  - id: "stacking-options"
    title: "گزینه‌های Stacking"
    level: 3
    href: "#stacking-options"
  - id: "axes"
    title: "Axes"
    level: 2
    href: "#axes"
  - id: "label"
    title: "Label"
    level: 3
    href: "#label"
  - id: "show-lines-and-marks"
    title: "نمایش خطوط و علامت‌ها"
    level: 3
    href: "#show-lines-and-marks"
  - id: "scale"
    title: "Scale"
    level: 3
    href: "#scale"
  - id: "stacked-bar-charts"
    title: "نمودارهای میله‌ای stacked"
    level: 2
    href: "#stacked-bar-charts"
  - id: "don-t-stack"
    title: "Stack نکنید"
    level: 3
    href: "#don-t-stack"
  - id: "stack"
    title: "Stack"
    level: 3
    href: "#stack"
  - id: "stack-100"
    title: "Stack-100%"
    level: 3
    href: "#stack-100"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "تجسم داده"
    href: "../visualization.html"
---

# بر نمودار میله‌ای مسلط شوید

یک نمودار میله‌ای ایجاد کنید و آن را با تنظیمات تجسم سفارشی کنید.

[ایجاد یک نمودار میله‌ای](#create-a-bar-chart) و [ویرایش تنظیمات آن نمودار میله‌ای](#bar-chart-settings) را مرور می‌کنیم، سپس درباره [نمودارهای میله‌ای stacked](#stacked-bar-charts) و زمانی که ممکن است بخواهیم از آن‌ها استفاده کنیم صحبت می‌کنیم.

## ایجاد یک نمودار میله‌ای

می‌توانید با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) متابیس همراه باشید. **+ New** > **Question** > **Raw data** > **Sample database** را انتخاب کنید. جدول `Orders` پایگاه داده نمونه را به عنوان داده خود انتخاب کنید. بعد، تعداد ردیف‌ها را خلاصه کنید و بر اساس Product → Category group کنید.

![Notebook سؤال که تعداد سفارش‌ها را group شده بر اساس دسته محصول خلاصه می‌کند.](../../../images/master-the-bar-chart-visualization/notebook.png)

روی **Visualize** کلیک کنید، و متابیس داده را به عنوان یک نمودار میله‌ای ارائه می‌دهد:

![نمودار میله‌ای متواضع.](../../../images/master-the-bar-chart-visualization/bar-chart.png)

## تنظیمات نمودار میله‌ای

برای سفارشی کردن نمودار، روی آیکون **چرخ‌دنده** در پایین سمت چپ نمودار کلیک کنید تا sidebar تنظیمات باز شود، در تنظیمات، تب‌های زیر را پیدا می‌کنید:

- [Data](#data)
- [Display](#display-settings)
- [Axes](#axes)

## Data

اینجا می‌توانیم نمودار میله‌ای خود را با کلیک روی `...` زیر Y-axis فرمت و style کنیم.
برای تغییر رنگ میله‌ها، روی swatch رنگ کلیک کنید و از palette انتخاب کنید.

نمودار خود را در **تب Formatting** با تنظیم اعداد، جداکننده‌ها، اعشار، و scale سفارشی کنید. همچنین می‌توانید Prefix/Suffix را در صورت نیاز اضافه کنید. در **تب Style**، رنگ‌ها را انتخاب کنید، برچسب‌ها را تغییر دهید، یک نوع نمودار (خط، area، یا میله) انتخاب کنید، و Y-axis را بر اساس ترجیحات نمودار خود position کنید.

![فرمت و style.](../../../images/master-the-bar-chart-visualization/format-style.png)

## تنظیمات Display

در بخش Settings > Display، می‌توانید نمودار خود را به چندین روش سفارشی کنید:

### افزودن یک خط هدف

این مشخص می‌کند کجا می‌خواهید مقادیر باشند. متابیس می‌تواند [هشدار](../../../../docs/latest/questions/alerts.html) دهد وقتی مقادیر از آن هدف exceed می‌کنند (یا زیر آن drop می‌کنند). به عنوان مثال، می‌توانید یک خط هدف در 5500 اضافه کنید و آن را 'Arbitrary Sales Goal' نامگذاری کنید.

### نمایش مقادیر

Toggle کردن 'Show values' مقادیر count را بالای هر ستون قرار می‌دهد.

![افزودن یک خط هدف برای هدف فروش دلخواه ما.](../../../images/master-the-bar-chart-visualization/goal-line.png)

### افزودن یک خط روند

وقتی داده شما خلاصه شده و بر اساس یک فیلد datetime group شده است، می‌توانید یک خط روند اضافه کنید. خط روند جهت کلی که داده شما در طول زمان به آن می‌رود را نشان می‌دهد. برای افزودن یک خط روند، به سادگی گزینه 'Trend line' را toggle کنید.

### گزینه‌های Stacking

وقتی نمودارهای میله یا area با چندین سری ایجاد می‌کنید، می‌توانید نحوه نمایش سری‌ها را با گزینه‌های stacking انتخاب کنید. می‌توانید انتخاب کنید سری‌ها را stack نکنید، stack کنید، یا در 100% stack کنید.
همچنین می‌توانیم display را به یک [نمودار میله‌ای stacked](#stacked-bar-charts) تنظیم کنیم، که کمی بعد به آن می‌پردازیم.

## Axes

`Axes` را در **Sidebar Settings** انتخاب کنید.

اینجا می‌توانیم مشخص کنیم چگونه می‌خواهیم جدول ما سازماندهی شود.

### Label

اینجا می‌توانیم برچسب‌های محورها را مخفی یا سفارشی کنیم.

### نمایش خطوط و علامت‌ها

با گزینه‌های **Show lines and marks** می‌توانیم نحوه نمایش دسته‌ها و مقادیر در هر محور را تغییر دهیم. گزینه‌ها برای y-axis مخفی و نمایش هستند، در حالی که x-axis چندین گزینه بیشتر دارد:

- Hide
- Show
- Compact
- Rotate 45˚
- Rotate 90˚

### Scale

سه گزینه scaling Y-axis پیدا می‌کنیم:

- Linear
- Power
- Log

گزینه linear به طور خودکار انتخاب می‌شود، و برای مثال ما دقیق‌ترین نمایش از داده ما را ارائه می‌دهد، پس آن را نگه می‌داریم.

## نمودارهای میله‌ای stacked

اگر داده‌ای که تجسم می‌کنیم می‌تواند به چندین دسته در یک کل breakdown شود، می‌توانیم استفاده از یک نمودار میله‌ای stacked را در نظر بگیریم. یک نمودار میله‌ای stacked 100% مشابه است، اما آن بخش‌ها را به عنوان درصدهای نسبی نمایش می‌دهد، پس هر میله کل y-axis را span می‌کند.

برای ایجاد یک نمودار میله‌ای stacked، روی **Settings** > **Display** کلیک کنید و **Stack** یا **Stack - 100%** را انتخاب کنید.

بگویید می‌خواستیم ببینیم چند سفارش برای هر دسته محصول در سه‌ماهه‌های مختلف یک سال قرار داده شد. در اینجا آن مثال نمایش داده شده در سه style مختلف نمودار میله‌ای:

### Stack نکنید

![یک نمودار میله‌ای چندسری unstacked.](../../../images/master-the-bar-chart-visualization/multi-series-bar-chart.png)

### Stack

![یک نمودار میله‌ای stacked استاندارد.](../../../images/master-the-bar-chart-visualization/stacked-bar-chart.png)

### Stack-100%

![یک نمودار میله‌ای stacked 100%.](../../../images/master-the-bar-chart-visualization/stacked-100-bar-chart.png)

تنظیمات display مختلف را برای tailor کردن تجسم به داده و ترجیحات تیم خود کاوش کنید.

## مطالعه بیشتر

- [گزینه‌های تجسم](../../../../docs/latest/questions/visualizations/visualizing-results.html#line-charts)
- [تنظیم فرمت پیش‌فرض برای داده خود](../../../../docs/latest/data-modeling/formatting.html)
- [ایجاد نمودارها با داده قابل کاوش](../questions/drill-through.html)

[
      
        

      
      
        
        

      
    ](line-charts.html)
[
      
        
        

      
      
        
        

      
    ](histograms.html)
