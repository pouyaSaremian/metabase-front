---
title: "بهترین روش‌ها برای تجسم سری‌های زمانی"
description: "با سازماندهی نمودارهای سری زمانی در یک داشبورد، داستانی را روایت کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/time-series/compare-times
toc:
  - id: "best-practices-for-visualizing-time-series"
    title: "بهترین روش‌ها برای تجسم سری‌های زمانی"
    level: 1
    href: "#best-practices-for-visualizing-time-series"
  - id: "comparing-time-periods-side-by-side-on-a-dashboard"
    title: "مقایسه دوره‌های زمانی کنار هم روی یک داشبورد"
    level: 2
    href: "#comparing-time-periods-side-by-side-on-a-dashboard"
  - id: "tips-for-side-by-side-comparisons"
    title: "نکات برای مقایسه‌های کنار هم"
    level: 2
    href: "#tips-for-side-by-side-comparisons"
  - id: "use-the-same-question-for-each-column"
    title: "از همان سؤال برای هر ستون استفاده کنید"
    level: 3
    href: "#use-the-same-question-for-each-column"
  - id: "make-sure-the-axes-are-the-same-across-the-two-cards"
    title: "مطمئن شوید محورها در دو کارت یکسان هستند"
    level: 3
    href: "#make-sure-the-axes-are-the-same-across-the-two-cards"
  - id: "using-a-goal-line-and-or-trend-line"
    title: "استفاده از خط هدف و/یا خط روند"
    level: 3
    href: "#using-a-goal-line-and-or-trend-line"
  - id: "add-text-cards-to-group-related-cards"
    title: "افزودن کارت‌های متنی برای گروه‌بندی کارت‌های مرتبط"
    level: 3
    href: "#add-text-cards-to-group-related-cards"
  - id: "use-colors-to-distinguish-columns"
    title: "استفاده از رنگ‌ها برای تمایز ستون‌ها"
    level: 3
    href: "#use-colors-to-distinguish-columns"
  - id: "overlaying-two-time-series-on-the-same-chart"
    title: "overlay کردن دو سری زمانی روی همان نمودار"
    level: 2
    href: "#overlaying-two-time-series-on-the-same-chart"
  - id: "using-a-custom-column-to-group-static-date-ranges"
    title: "استفاده از یک ستون سفارشی برای group کردن محدوده‌های تاریخ static"
    level: 3
    href: "#using-a-custom-column-to-group-static-date-ranges"
  - id: "using-custom-expressions-to-compare-last-week-to-the-previous-week"
    title: "استفاده از عبارات سفارشی برای مقایسه هفته گذشته با هفته قبل"
    level: 2
    href: "#using-custom-expressions-to-compare-last-week-to-the-previous-week"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "تحلیل سری زمانی"
    href: "../time-series.html"
---

# بهترین روش‌ها برای تجسم سری‌های زمانی

با سازماندهی نمودارهای سری زمانی در یک داشبورد، داستانی را روایت کنید.

به استراتژی‌های مختلف برای مقایسه یک معیار بین دو دوره زمانی مختلف، مثل مقایسه این هفته با هفته گذشته، یا سال گذشته در مقابل قبلی می‌پردازیم. از پایگاه داده نمونه شامل شده با متابیس استفاده می‌کنیم تا بتوانید همراه باشید. این پایگاه داده نمونه شامل اطلاعات سفارش برای یک شرکت کاملاً واقعی، اصلاً ساختگی نیست که از 2015 تا 2020 وجود داشت. و برای flex کردن مهارت‌های query builder خود، به نحوه مقایسه سفارش‌های قرار داده شده در 2018 با آن‌ها در 2019 علاقه‌مندیم.

این مقاله بر روی مقاله قبلی درباره [مقایسه‌های سری زمانی](time-series-comparisons.html) بنا می‌شود، اما اینجا دو استراتژی مختلف را پوشش می‌دهیم:

- [مقایسه دوره‌های زمانی کنار هم روی یک داشبورد](#comparing-time-periods-side-by-side-on-a-dashboard)
  - [از همان سؤال برای هر ستون استفاده کنید](#use-the-same-question-for-each-column)
  - [مطمئن شوید محورها در دو کارت یکسان هستند](#make-sure-the-axes-are-the-same-across-the-two-cards)
  - [استفاده از خط هدف و/یا خط روند](#using-a-goal-line-and-or-trend-line)
  - [افزودن کارت‌های متنی برای گروه‌بندی کارت‌های مرتبط](#add-text-cards-to-group-related-cards)
  - [استفاده از رنگ‌ها برای تمایز ستون‌ها](#use-colors-to-distinguish-columns)
- [نکات برای مقایسه‌های کنار هم](#tips-for-side-by-side-comparisons)
  - [استفاده از یک ستون سفارشی برای group کردن محدوده‌های تاریخ static](#using-a-custom-column-to-group-static-date-ranges)
- [overlay کردن دو سری زمانی روی همان نمودار](#overlaying-two-time-series-on-the-same-chart)
- [استفاده از عبارات سفارشی برای مقایسه هفته گذشته با هفته قبل](#using-custom-expressions-to-compare-last-week-to-the-previous-week)
- [مطالعه بیشتر](#further-reading)

## مقایسه دوره‌های زمانی کنار هم روی یک داشبورد

![یک داشبورد با دو ستون، Date 1 در سمت چپ، Date 2 در سمت راست، هر کدام با کارت‌هایی متصل به widget فیلتر مربوطه. یک widget سوم به کارت‌ها در هر دو ستون متصل است تا بر اساس دسته محصول فیلتر کند.](../../../images/compare-times/side-by-side-dashboard.png)

این الگو نگهداری آسان و گسترش آسان دارد (یا با تغییر کارت‌ها یا افزودن کارت‌های جدید)، و به خصوص زمانی که می‌خواهید چندین معیار را مقایسه کنید مفید است.

اولین گام اینجا [پرسیدن یک سؤال](../../../../docs/latest/questions/introduction.html) است. برای داده خود، جدول `Orders` را انتخاب می‌کنیم. تعداد سفارش‌ها را خلاصه می‌کنیم، و بر اساس ماه group می‌کنیم. سپس سؤال را به عنوان "Orders per month" ذخیره می‌کنیم.

![نمای notebook سؤال ما که تعداد سفارش‌ها را group شده بر اساس ماه خلاصه می‌کند](../../../images/compare-times/orders-per-month.png)

بعد، سؤال "Orders per month" خود را به یک [داشبورد](../../../../docs/latest/dashboards/introduction.html) جدید اضافه می‌کنیم، و آن داشبورد را "Side-by-side comparison" یا هر چیزی می‌نامیم. سپس همان سؤال، "Orders per month"، را دوباره به داشبورد اضافه می‌کنیم (یعنی، به عنوان یک کارت دوم)، که آن را در سمت راست سؤال اصلی قرار می‌دهیم.

آنچه اینجا انجام می‌دهیم ایجاد دو ستون در داشبورد است: ستون چپ یک محدوده تاریخ خواهد داشت، و ستون راست یک محدوده تاریخ دوم خواهد داشت. یک [فیلتر](../../../../docs/latest/dashboards/filters.html) برای کنترل محدوده تاریخ برای کارت‌های ستون چپ، و فیلتر دیگری که محدوده تاریخ را برای ستون راست کنترل می‌کند attach می‌کنیم.

محدوده‌های تاریخ پیش‌فرض را با استفاده از گزینه "Between" برای هر فیلتر تنظیم می‌کنیم (می‌توانید تاریخ‌ها را تایپ کنید به جای کلیک از طریق تقویم).

- محدوده Date 1: `01/01/2018` تا `12/31/2018`
- محدوده Date 2: `01/01/2019` تا `12/31/2019`

![اتصال فیلتر Date 1 به هر کارت در ستون چپ (اما نه ستون راست).](../../../images/compare-times/filter-for-left-column.png)

تغییرات خود را ذخیره کنید، و **صفحه را refresh کنید تا نتایج به‌روزرسانی شوند**. همچنین می‌توانیم فیلترهای اضافی به داشبورد attach کنیم که می‌توانیم به کارت‌ها در هر دو ستون wire کنیم، مثلاً اگر می‌خواهیم سفارش‌ها را بر اساس یک دسته خاص فیلتر کنیم.

می‌توانید کارت‌های اضافی با سری زمانی اضافه کنید، و آن‌ها را به فیلتر مربوطه برای آن ستون wire کنید.

## نکات برای مقایسه‌های کنار هم

به خاطر داشته باشید که این الگو وقتی روی تلفن مشاهده می‌شود breakdown می‌شود، چون متابیس هر کارت را به یک ستون واحد collapse می‌کند. هنوز می‌توانید از داشبورد سر در بیاورید، اما نیاز به نگاه دقیق به تاریخ‌ها برای هر کارت دارید.

### از همان سؤال برای هر ستون استفاده کنید

به این ترتیب اگر می‌خواهید سؤال را تغییر دهید، فقط نیاز به به‌روزرسانی یک سؤال دارید، و هر دو ستون به‌روزرسانی دریافت می‌کنند.

### مطمئن شوید محورها در دو کارت یکسان هستند

متابیس به طور پیش‌فرض به auto-adjust کردن y-axis برای account کردن مقادیر می‌رود، اما می‌تواند دیدن تفاوت بین دو کارت را سخت کند اگر یک کارت در 500 به پایان برسد، و دیگری در 1000. در حالی که در حالت ویرایش داشبورد هستید، روی یک کارت hover کنید و روی آیکون palette کلیک کنید تا تنظیمات تجسم را ویرایش کنید. روی تب **Axes** کلیک کنید، **Auto y-axis range** را خاموش کنید و **y-axis Max** را تنظیم کنید (باید Min را 0 بگذارید).

![تنظیم مقدار y-axis Max به 600.](../../../images/compare-times/set-y-axis.png)

### استفاده از خط هدف و/یا خط روند

افزودن خط‌ها می‌تواند تمایز عملکرد معیار در نمودارها را برای مردم آسان‌تر کند. واضح است که سفارش‌ها در 2019 بیشتر از 2018 هدف را exceeded کردند.

### افزودن کارت‌های متنی برای گروه‌بندی کارت‌های مرتبط

برای آسان‌تر کردن درک setup split برای مردم، می‌توانیم کارت‌های متنی اضافه کنیم که نشان می‌دهند هر ستون با یکی از فیلترها مطابقت دارد: ستون چپ با Date 1 و ستون راست با Date 2. وقتی در حالت ویرایش داشبورد هستید، می‌توانید تنظیمات تجسم را برای کارت‌های متنی با hover روی کارت و کلیک روی **آیکون Palette** ویرایش کنید. به عنوان مثال، برای کارت با `## Date 1`، **Vertical alignment** را به "Top"، **Horizontal alignment** را به "Center" تنظیم کرده‌ایم، و تنظیم **Show background** را toggle off کرده‌ایم.

### استفاده از رنگ‌ها برای تمایز ستون‌ها

می‌توانید از رنگ‌های مختلف برای تمایز کارت‌ها در هر ستون استفاده کنید. روی یک کارت hover کنید و روی **آیکون Palette** کلیک کنید تا تنظیمات تجسم کارت را به‌روزرسانی کنید.

برای نکات بیشتر درباره داشبوردها، [بهترین روش‌های داشبورد BI](../dashboards/bi-dashboard-best-practices.html) را بررسی کنید.

## overlay کردن دو سری زمانی روی همان نمودار

حالا به یک رویکرد اساساً متفاوت. اینجا دو الگو را پوشش می‌دهیم:

- [استفاده از یک ستون سفارشی برای group کردن محدوده‌های تاریخ static](#using-a-custom-column-to-group-static-date-ranges)
- [استفاده از عبارات سفارشی برای مقایسه هفته گذشته با هفته قبل](#using-custom-expressions-to-compare-last-week-to-the-previous-week)

### استفاده از یک ستون سفارشی برای group کردن محدوده‌های تاریخ static

اینجا از یک statement [`case`](../../../../docs/latest/questions/query-builder/expressions-list.html#case) برای ایجاد یک ستون سفارشی استفاده می‌کنیم. می‌توانیم از عبارت **between** استفاده کنیم. اینجا، یک ستون جدید با استفاده از یک [عبارت سفارشی](../questions/custom-expressions.html) ایجاد می‌کنیم.

```mbql
case(between([Created At], "2018-01-01", "2018-12-31"), "2018", between([Created At], "2019-01-01", "2019-12-31"), "2019")
```

این عبارت می‌گوید که برای هر رکورد (ردیف) در نتایج، یک ستون جدید اضافه کنید. در حالتی که فیلد `Created At` بین 1 ژانویه 2018 و 31 دسامبر 2018 است، مقدار "2018" را در ستون Year برای آن رکورد قرار دهید. در حالتی که تاریخ `Created At` در آن محدوده 2019 می‌افتد، به جای آن "2019" قرار دهید. در غیر این صورت، آن را خالی بگذارید. بعد، می‌خواهیم برای همه رکوردهایی که ستون "Year" ایجاد شده خالی نیست فیلتر کنیم.

![query builder شامل یک ستون سفارشی به نام year، سال‌هایی که خالی هستند را فیلتر می‌کند، و سفارش‌ها را می‌شمارد، و بر اساس year و Created at بر اساس ماه سال group می‌کند.](../../../images/compare-times/custom-column-year.png)

و اینجا دو سری زمانی، 2018 در مقابل 2019، روی همان نمودار داریم:

![دو سری زمانی روی همان نمودار.](../../../images/compare-times/time-series-overlay.png)

که همچنین می‌توانید به عنوان یک نمودار میله‌ای تجسم کنید:

![همان سری، اما به عنوان نمودار میله‌ای.](../../../images/compare-times/bar-chart.png)

حالا، اگر می‌خواهید تاریخ‌ها را نسبت به تاریخ فعلی مقایسه کنید، می‌توانید از تابع [`interval`](../../../../docs/latest/questions/query-builder/expressions-list.html#interval) در یک statement [`case`](../../../../docs/latest/questions/query-builder/expressions-list.html#case) استفاده کنید، اما بعداً یک مورد استفاده متفاوت برای `interval` را پوشش می‌دهیم.

## استفاده از عبارات سفارشی برای مقایسه هفته گذشته با هفته قبل

یک راه برای مقایسه دوره‌های زمانی در مقاله قبلی درباره [مقایسه‌های سری زمانی](time-series-comparisons.html) پوشش دادیم. این بار از تابع [`interval`](../../../../docs/latest/questions/query-builder/expressions-list.html#interval) استفاده می‌کنیم، که به ما اجازه مشخص کردن یک مدت زمان نسبت به تاریخ فعلی را می‌دهد.

پایگاه داده نمونه فقط داده تا 2020 دارد (مطمئن نیستم چه اتفاقی برای شرکت افتاد)، پس نیاز دارید این را روی داده خود امتحان کنید، اما در اینجا نحوه کار آن:

با جدول `Orders` به عنوان داده شروع، دو خلاصه (معیار) اضافه می‌کنیم. در بخش **Summarize**، یک خلاصه را با استفاده از یک عبارت سفارشی که آن را "Last week" نامگذاری می‌کنیم تعریف می‌کنیم:

```mbql
CountIf(interval([Created At], -1, "week"))
```

در interval-speak، 0 به معنای هفته فعلی است، پس -1 می‌نویسیم تا فقط یک سفارش را بشماریم اگر `Created At` برای آن ردیف تاریخی از هفته گذشته باشد. همچنین می‌توانیم "week" را به "day"، "month"، "year"، یا intervalهای دیگر تغییر دهیم؛ مستندات پایگاه داده خود را بررسی کنید تا ببینید کدام intervalها را پشتیبانی می‌کند.

بعد، یک خلاصه دوم برای "Previous week" تعریف می‌کنیم.

```mbql
CountIf(interval([Created At], -2, "week") AND NOT interval([Created At], -1, "week"))
```

اینجا می‌گوییم فقط همه سفارش‌ها از دو هفته قبل را بشمارید به جز (`AND NOT`) سفارش‌ها از هفته گذشته.

در نهایت، نیاز به group کردن خلاصه‌ها داریم. چون می‌خواهیم ببینیم دوشنبه گذشته در مقابل دوشنبه قبل (و هر روز دیگر هفته) چگونه عمل کرد، می‌خواهیم `Created At` را بر اساس **Day of week** group کنیم.

## مطالعه بیشتر

- [مقایسه‌های سری زمانی](time-series-comparisons.html)
- [عبارات سفارشی در query builder](../questions/custom-expressions.html)
- [فیلترهای داشبورد](../../../../docs/latest/dashboards/filters.html)
- [بهترین روش‌های داشبورد BI](../dashboards/bi-dashboard-best-practices.html)

[
      
        
        

      
      
        
        

      
    ](time-series-comparisons.html)
