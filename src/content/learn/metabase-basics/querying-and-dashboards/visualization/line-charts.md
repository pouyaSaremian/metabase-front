---
title: "راهنمای نمودارهای خطی"
description: "آنچه در مورد نمودارهای خطی صحبت می‌کنیم: سری‌های زمانی، خطوط روند، هشدارها و موارد دیگر."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/visualization/line-charts
  - /learn/basics/visualizing-data/line-charts
  - /learn/visualization/line-charts
toc:
  - id: "guide-to-line-charts"
    title: "راهنمای نمودارهای خطی"
    level: 1
    href: "#guide-to-line-charts"
  - id: "how-to-create-a-line-chart"
    title: "نحوه ایجاد یک نمودار خطی"
    level: 2
    href: "#how-to-create-a-line-chart"
  - id: "customizing-your-line-chart"
    title: "سفارشی کردن نمودار خطی خود"
    level: 2
    href: "#customizing-your-line-chart"
  - id: "data-tab-line-area-or-bar-chart"
    title: "تب Data: نمودار خطی، area، یا میله‌ای؟"
    level: 3
    href: "#data-tab-line-area-or-bar-chart"
  - id: "display-tab-trend-lines-and-goal-lines"
    title: "تب Display: خطوط روند و خطوط هدف"
    level: 3
    href: "#display-tab-trend-lines-and-goal-lines"
  - id: "axes-tab-scales-and-axis-labels"
    title: "تب Axes: scaleها و برچسب‌های محور"
    level: 3
    href: "#axes-tab-scales-and-axis-labels"
  - id: "line-chart-tips"
    title: "نکات نمودار خطی"
    level: 2
    href: "#line-chart-tips"
  - id: "pair-a-line-chart-with-a-trend-chart"
    title: "جفت کردن یک نمودار خطی با یک نمودار روند"
    level: 3
    href: "#pair-a-line-chart-with-a-trend-chart"
  - id: "hover-over-a-label-to-highlight-a-line"
    title: "Hover روی یک برچسب برای highlight کردن یک خط"
    level: 3
    href: "#hover-over-a-label-to-highlight-a-line"
  - id: "for-time-series-filter-out-any-time-period-still-in-progress"
    title: "برای سری زمانی، هر دوره زمانی که هنوز در حال پیشرفت است را فیلتر کنید"
    level: 3
    href: "#for-time-series-filter-out-any-time-period-still-in-progress"
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

# راهنمای نمودارهای خطی

آنچه در مورد نمودارهای خطی صحبت می‌کنیم: سری‌های زمانی، خطوط روند، هشدارها و موارد دیگر.

نمودارهای خطی برای رسم داده captured در یک sequence خوب هستند، چه آن sequence گذر زمان باشد، یا مراحل در یک فرآیند یا flow. این نمودارها به طور معمول برای رسم یک سری زمانی (همچنین run chart نامیده می‌شود) استفاده می‌شوند: مجموعه‌ای از markerها متصل شده با خطوط، با محور x نشان دادن گذر زمان و محور y رسم مقدار یک معیار در هر لحظه.

## نحوه ایجاد یک نمودار خطی

بیایید نگاهی به جدول `Orders` در [پایگاه داده نمونه](../../../../glossary/sample-database.html) که با متابیس ship می‌شود بیندازیم. از نوار ناوبری اصلی، روی **+ New** > **Question** کلیک کنید، که شما را به query builder متابیس می‌برد. **Raw Data** > **Sample Database** را انتخاب کنید، سپس جدول `Orders` را انتخاب کنید. روی **Visualize** کلیک کنید، سپس روی دکمه **Visualization** در پایین سمت راست کلیک کنید تا **Sidebar Visualization** باز شود.

![جدول سفارش‌ها](../../../images/line-charts/orders-table.png)

بیایید با نحوه *نکردن* ایجاد یک نمودار خطی شروع کنیم. اگر **line chart** را انتخاب کنید، متابیس یک نمودار خالی به شما ارائه می‌دهد.

![یک نمودار خطی خالی، قبل از تنظیم محورهای x و y.](../../../images/line-charts/empty-line-chart.png)

متابیس نمی‌تواند ذهن بخواند (هنوز)، پس نمی‌داند کدام ستون‌ها از جدول `Orders` برای محورهای x و y استفاده کند. برای ایجاد یک نمودار خطی، نیاز به انتخاب یک معیار برای متابیس برای رسم در طول زمان دارید. به عنوان مثال، می‌توانستید کل سفارش‌ها را در طول زمان با تنظیم محور x به `created_at` و محور y به `total` نشان دهید. متابیس به طور خودکار نمودار خطی را رسم می‌کند:

![یک نمودار خطی noisy بعد از تنظیم محورهای x و y، بدون خلاصه کردن داده در ابتدا.](../../../images/line-charts/created-at-total.png)

این از نظر فنی یک نمودار خطی است، اما بیشتر شبیه cardiograph یک مرغ مگس‌خوار startled به نظر می‌رسد، و این حتی بعد از اینکه متابیس نتایج نشان داده شده را truncate کرده است. (اگر روی مثلث هشدار خاکستری در بالا سمت راست hover کنید، می‌بینید که متابیس فقط 2,000 ردیف را رسم کرده است.)

برای خوانا‌تر کردن نمودار، می‌توانیم داده را خلاصه کنیم، پس هر نقطه روی نمودار خطی یک aggregate از ردیف‌ها است—"bucket"های رکوردها. (رسم ردیف‌های unaggregated در تجسم‌هایی مثل [نقشه‌های pin](../../../../docs/latest/questions/visualizations/map.html)، یا یک [scatterplot](../../../../docs/latest/questions/visualizations/visualizing-results.html#scatterplots-and-bubble-charts)، مثلاً، برای نشان دادن هر محصول رسم شده بر اساس قیمت و رتبه‌بندی بسیار رایج‌تر است.)

به عنوان مثال یک معیار aggregated، بیایید مجموع کل سفارش‌ها را برای هر ماه رسم کنیم. روی دکمه **Summarize** سبز کلیک کنید تا **Sidebar Summarize** باز شود. متابیس به طور پیش‌فرض به شمارش رکوردها می‌رود، اما به تعداد سفارش‌ها علاقه‌مند نیستیم، پس روی `Count` کلیک می‌کنیم و آن را به `Sum of` تغییر می‌دهیم و ستون `Total` را از `Order` انتخاب می‌کنیم.

بعد، می‌خواهیم کل سفارش‌ها را بر اساس ماه group کنیم. در بخش **Group by**، زیر `Order`، روی فیلد `Created At` mouse over کنید و روی دکمه `+` کلیک کنید تا grouping اضافه شود.

![روی Created At hover کنید و روی دکمه plus کلیک کنید تا یک grouping بر اساس ماه اضافه شود. می‌توانید سایر بازه‌های زمانی (روز، هفته، سال) را با کلیک روی by month انتخاب کنید.](../../../images/line-charts/add-grouping.png)

به محض افزودن grouping، متابیس نمودار را به‌روزرسانی می‌کند:

![مجموع کل سفارش‌ها بر اساس ماه.](../../../images/line-charts/sum-total-by-month.png)

این نمودار خیلی راحت‌تر خوانده می‌شود. و، البته، همیشه می‌توانیم یک بخش از خط را انتخاب کنیم تا نتایج را برای آن دوره زمانی فیلتر کنیم، و drill through کنیم تا آن رکوردهای فردی، unaggregated را ببینیم.

![Zoom کردن و drill through یک نمودار خطی برای مشاهده رکوردهای فردی.](../../../images/line-charts/drill-through.gif)

## سفارشی کردن نمودار خطی خود

برای سفارشی کردن نمودار خطی خود، می‌توانید روی دکمه **Settings** (آیکون چرخ‌دنده) در پایین سمت چپ کلیک کنید. تنظیمات زیادی برای پوشش اینجا بدون خسته کردن شما وجود دارد، پس فقط برخی highlights به شما می‌دهیم.

### تب Data: نمودار خطی، area، یا میله‌ای؟

تب **Data** جایی است که گزینه‌هایی برای خطوط خود را با کلیک روی دکمه سه‌نقطه انتخاب می‌کنید، و حتی نوع نمودار را تغییر می‌دهید.

تا اینجا به طور strict درباره نمودارهای خطی صحبت کرده‌ایم، اما [نمودارهای میله‌ای](bar-charts.html) و نمودارهای area مشابه هستند، و دلایل خوبی برای انتخاب آن‌ها به جای یک نمودار خطی، بسته به آنچه می‌خواهید communicate کنید وجود دارد:

![یک نمودار area.](../../../images/line-charts/area-chart.png)

نمودارهای area به طور معمول برای مقایسه مقادیر در طول زمان استفاده می‌شوند. اگر آن مقدار مقادیر زیادی رسم شده در طول زمان ندارید، یک نمودار میله‌ای را در نظر بگیرید. اگر می‌خواهید ترکیب مقادیر را در طول زمان ببینید، از یک نمودار میله‌ای stacked استفاده کنید.

همچنین می‌توانید نمودارهای خطی و area را در یک [نمودار combo](../../../../docs/latest/questions/visualizations/combo-chart.html) برای تجسم aggregationهای مختلف، مثل تعداد و مجموع کل سفارش‌ها نشان داده شده در زیر ترکیب کنید. نمودارهای combo را با جزئیات بیشتر [اینجا](../../../../docs/latest/questions/visualizations/visualizing-results.html#combo-charts) بحث می‌کنیم.

![تعداد سفارش‌ها به عنوان یک خط آبی، set شده در مقابل نمودار area سبز رسم شده مجموع کل سفارش‌ها.](../../../images/line-charts/total-and-count.png)

### تب Display: خطوط روند و خطوط هدف

تب **Display** به شما اجازه تغییر رنگ خط و style، handle کردن مقادیر missing، و غیره را می‌دهد. اگر قصد جاسازی نمودار خود را در اپلیکیشن خود دارید، گزینه [white labeling](../../../../docs/latest/configuring-metabase/appearance.html) ما را برای سفارشی‌سازی حتی بیشتر بررسی کنید.

می‌توانید یک خط روند از تنظیمات display یک نمودار سری زمانی اضافه کنید. toggle را می‌بینید اگر دقیقاً یک فیلد زمانی از **Summarize** > **Group by** انتخاب کرده‌اید. در مثال زیر، فیلد grouping "Created At: Month" را انتخاب کرده‌ایم:

![نمودار خطی با خطوط هدف و روند.](../../../images/line-charts/goal-and-trend-line.png)

همچنین می‌توانید یک خط هدف برای رسم یک خط افقی در مقدار هدف خود اضافه کنید. خطوط هدف به خصوص زمانی که با هشدارها جفت می‌شوند مفید هستند. به عنوان مثال، اگر در حال monitoring فروش هستید، و فقط می‌خواهید notify شوید اگر یک معیار زیر یک threshold خاص dip کند، می‌توانید یک خط هدف برای مشخص کردن آن threshold اضافه کنید و یک ایمیل دریافت کنید یا یک پیام Slack ارسال شود وقتی خط زیر آن می‌رود.

### تب Axes: scaleها و برچسب‌های محور

اینجا می‌توانید scale محورهای x و y را تنظیم کنید. برای محور x، می‌توانید scale سری زمانی یا ordinal را انتخاب کنید. سری زمانی تعداد مقادیر نمایش داده شده را محدود می‌کند، در حالی که scale ordinal هر مقدار در سری را در امتداد محور x فهرست می‌کند. از یک scale ordinal استفاده کنید اگر مراحل در یک sequence را رسم می‌کنید.

برای محور y، می‌توانید linear (پیش‌فرض)، یا power یا log scaleها را انتخاب کنید. Logarithmic scaleها عالی برای نشان دادن نرخ تغییر در طول زمان هستند، به خصوص وقتی داده شما یک افزایش یا decay نمایی دارد.

![نمای log scale از مجموع کل سفارش‌ها بر اساس ماه به ما نشان می‌دهد که رشد در totalها در طول زمان flattened شده است.](../../../images/line-charts/log-scale.png)

و احتمالاً می‌توانید power scaleها را نادیده بگیرید، چون هیچ کس واقعاً از آن‌ها استفاده نمی‌کند.

## نکات نمودار خطی

متابیس بسیاری از بهترین روش‌ها برای تجسم داده را برای شما handle می‌کند، اما در اینجا برخی نکات برای به خاطر سپردن هنگام ایجاد نمودارهای خطی.

### جفت کردن یک نمودار خطی با یک نمودار روند

وقتی یک داشبورد ایجاد می‌کنید، می‌توانید یک نمودار خطی را با یک نمودار [Trend](../../../../docs/latest/questions/visualizations/visualizing-results.html#trends) جفت کنید تا آخرین مقدار را آسان‌تر بخوانید.

![جفت کردن یک نمودار خطی با یک نمودار روند برای نشان دادن آخرین عدد.](../../../images/line-charts/dashboard-with-trend-and-line-charts.png)

### Hover روی یک برچسب برای highlight کردن یک خط

می‌توانید روی نام یکی از سری‌های خود در legend hover کنید تا آن را highlight کنید و بقیه را fade out کنید. همچنین می‌توانید روی یک سری کلیک کنید تا آن را مخفی (یا آشکار) کنید.

![Hover کردن روی برچسب‌ها در legend خط مربوطه را highlight می‌کند.](../../../images/line-charts/hover-to-highlight-line.gif)

### برای سری زمانی، هر دوره زمانی که هنوز در حال پیشرفت است را فیلتر کنید

وقتی با سری زمانی سروکار دارید، نمودارهای شما می‌توانند بهتر به نظر برسند اگر یک فیلتر برای exclude کردن روز، هفته، یا ماهی که در حال حاضر در حال پیشرفت است اضافه کنید؛ در غیر این صورت نمودار شما یک drop بزرگ در سمت راست دور خواهد داشت به دلیل دوره زمانی جزئی یا ناقص. فقط **Include this day** یا هفته، ماه، یا هر scale زمانی که با آن کار می‌کنید را uncheck کنید.

![مگر اینکه واقعاً نیاز به آخرین (و احتمالاً ناقص) دوره زمانی دارید، مطمئن شوید گزینه Include this... نیست](../../../images/line-charts/filter-include.png)

## مطالعه بیشتر

- [نمودار چندسری](../../../../docs/latest/dashboards/multiple-series.html)
- [مستندات نمودارهای خطی](../../../../docs/latest/questions/visualizations/visualizing-results.html#line-charts)
- [مقایسه‌های سری زمانی](../time-series/time-series-comparisons.html)
- [کدام نمودار باید استفاده کنید؟](chart-guide.html)

[
      
        

      
      
        
        

      
    ](chart-guide.html)
[
      
        
        

      
      
        
        

      
    ](bar-charts.html)
