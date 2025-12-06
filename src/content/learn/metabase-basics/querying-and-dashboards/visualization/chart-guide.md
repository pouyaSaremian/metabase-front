---
title: "کدام نمودار را باید استفاده کنید؟"
description: "کدام نوع نمودارها و گراف‌ها را باید برای بهترین انتقال بینش از داده استفاده کنید؟ این راهنما به شما کمک می‌کند تجسم مناسب برای کار را انتخاب کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/visualization/chart-guide
  - /learn/basics/visualizing-data/guide
  - /learn/visualization/chart-guide
toc:
  - id: "which-chart-should-you-use"
    title: "کدام نمودار را باید استفاده کنید؟"
    level: 1
    href: "#which-chart-should-you-use"
  - id: "let-metabase-pick-the-chart-for-you"
    title: "بگذارید متابیس نمودار را برای شما انتخاب کند"
    level: 2
    href: "#let-metabase-pick-the-chart-for-you"
  - id: "two-charts-to-rule-them-all"
    title: "دو نمودار برای حکمرانی بر همه"
    level: 2
    href: "#two-charts-to-rule-them-all"
  - id: "tables"
    title: "جداول"
    level: 3
    href: "#tables"
  - id: "line-charts"
    title: "نمودارهای خطی"
    level: 3
    href: "#line-charts"
  - id: "when-you-only-have-one-value"
    title: "وقتی فقط یک مقدار دارید"
    level: 2
    href: "#when-you-only-have-one-value"
  - id: "static-numbers"
    title: "اعداد static"
    level: 3
    href: "#static-numbers"
  - id: "compared-with-a-goal"
    title: "مقایسه با یک هدف"
    level: 3
    href: "#compared-with-a-goal"
  - id: "position-in-a-range"
    title: "موقعیت در یک محدوده"
    level: 3
    href: "#position-in-a-range"
  - id: "comparing-metrics"
    title: "مقایسه معیارها"
    level: 2
    href: "#comparing-metrics"
  - id: "static-comparisons"
    title: "مقایسه‌های static"
    level: 3
    href: "#static-comparisons"
  - id: "one-measure-over-time"
    title: "یک معیار در طول زمان"
    level: 3
    href: "#one-measure-over-time"
  - id: "multiple-measures-over-time"
    title: "چندین معیار در طول زمان"
    level: 3
    href: "#multiple-measures-over-time"
  - id: "against-a-goal-or-benchmark-over-time"
    title: "در مقابل یک هدف یا benchmark در طول زمان"
    level: 3
    href: "#against-a-goal-or-benchmark-over-time"
  - id: "showing-the-relationship-between-measures"
    title: "نشان دادن رابطه بین معیارها"
    level: 2
    href: "#showing-the-relationship-between-measures"
  - id: "breakouts"
    title: "Breakouts"
    level: 2
    href: "#breakouts"
  - id: "a-metric-with-two-or-three-groups-or-categories"
    title: "یک معیار با دو یا سه گروه یا دسته"
    level: 3
    href: "#a-metric-with-two-or-three-groups-or-categories"
  - id: "a-measure-by-its-accumulating-values"
    title: "یک معیار بر اساس مقادیر accumulating آن"
    level: 3
    href: "#a-measure-by-its-accumulating-values"
  - id: "a-measure-by-sequential-steps"
    title: "یک معیار بر اساس مراحل sequential"
    level: 3
    href: "#a-measure-by-sequential-steps"
  - id: "categorical-breakout-over-time"
    title: "Breakout دسته‌ای در طول زمان"
    level: 3
    href: "#categorical-breakout-over-time"
  - id: "relative-changes-among-categories-over-time"
    title: "تغییرات نسبی بین دسته‌ها در طول زمان"
    level: 3
    href: "#relative-changes-among-categories-over-time"
  - id: "showing-how-values-are-distributed-across-a-numeric-range"
    title: "نشان دادن نحوه توزیع مقادیر در یک محدوده عددی"
    level: 2
    href: "#showing-how-values-are-distributed-across-a-numeric-range"
  - id: "when-your-data-contains-geographic-dimensions"
    title: "وقتی داده شما شامل ابعاد جغرافیایی است"
    level: 2
    href: "#when-your-data-contains-geographic-dimensions"
  - id: "specific-locations"
    title: "مکان‌های خاص"
    level: 3
    href: "#specific-locations"
  - id: "differences-between-regions"
    title: "تفاوت‌ها بین مناطق"
    level: 3
    href: "#differences-between-regions"
  - id: "distribution-of-coordinates"
    title: "توزیع مختصات"
    level: 3
    href: "#distribution-of-coordinates"
  - id: "is-a-map-the-best-choice"
    title: "آیا نقشه بهترین انتخاب است؟"
    level: 3
    href: "#is-a-map-the-best-choice"
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

# کدام نمودار را باید استفاده کنید؟

کدام نوع نمودارها و گراف‌ها را باید برای بهترین انتقال بینش از داده استفاده کنید؟ این راهنما به شما کمک می‌کند تجسم مناسب برای کار را انتخاب کنید.

انتخاب نمودار مناسب به دو سؤال می‌رسد: داده چگونه به نظر می‌رسد، و چه چیزی می‌خواهید communicate کنید؟

## بگذارید متابیس نمودار را برای شما انتخاب کند

متابیس بسیاری از جزئیات (مثل minimize کردن [chart junk](https://en.wikipedia.org/wiki/Chartjunk)) را handle می‌کند تا بتوانید روی آنچه می‌خواهید با تجسم خود communicate کنید تمرکز کنید. و برای سؤال‌های ساخته شده با استفاده از query builder، متابیس حدس می‌زند نمودار مناسب برای نمایش. به عنوان مثال، اگر یک معیار، مثل تعداد سفارش‌ها، را انتخاب کنید و آن سفارش‌ها را بر اساس زمان group کنید، متابیس به طور خودکار یک نمودار خطی که تعداد سفارش را در هر interval رسم می‌کند انتخاب می‌کند. در حالی که حدس زدن نوع نمودار صحیح توسط متابیس خوب است، هر بار کار نمی‌کند: برخی تجسم‌ها نیاز به ورودی اضافی دارند (مثلاً، متابیس نمی‌تواند به طور خودکار بداند یک progress bar نمایش دهد، چون باید به متابیس بگویید هدف باید چه باشد).

[پرس‌وجوهای Native](../../../../docs/latest/questions/native-editor/writing-sql.html)، با این حال، داستان متفاوتی هستند. متابیس همیشه نتایج را به عنوان جدول برمی‌گرداند، پس اگر چیزی غیر از جدول نیاز دارید، باید خودتان نوع تجسم را انتخاب کنید. متابیس همچنین برخی guardrailها را در جای خود قرار داده است؛ به عنوان مثال، اگر داده جغرافیایی در نتایج خود ندارید (مثل مختصات یا State)، متابیس Map viz را gray out می‌کند. اما روی انتخاب فقط یک تجسم واحد گیر نکنید—همیشه می‌توانید [یک داشبورد بسازید](../../../../docs/latest/dashboards/introduction.html) تا داده را با استفاده از چندین نمودار نشان دهید.

## دو نمودار برای حکمرانی بر همه

قبل از اینکه وارد شویم، باید توجه کنیم: نیاز به استفاده از هر نوع نمودار برای انجام تحلیل مناسب ندارید. بیشتر اوقات فقط به standbys قدیمی نیاز دارید: جداول و نمودارهای خطی.

### جداول

اغلب می‌خواهید بسیاری از معیارها را یکباره ببینید، مقادیر دقیق آن‌ها را فهرست کنید، و قادر به مرتب‌سازی آن معیارها باشید. شاید به سادگی می‌خواهید چند ستون اضافه یا حذف کنید، یا چند فیلتر اضافه کنید تا جستجوی مقادیر خاص برای مردم آسان شود. و این همان چیزی است که جداول برای آن هستند. جداول در متابیس یکی از همه‌کاره‌ترین انواع تجسم هستند، پس مقاله ما درباره [همه چیزهایی که می‌توانید با تجسم جدول انجام دهید](../../../../docs/latest/questions/visualizations/table.html) را بررسی کنید.

![یک جدول در یک داشبورد با دو فیلتر.](../../../images/guide-to-charts/table-in-dashboard-with-filters.png)

اگر علاوه بر آن می‌خواهید خلاصه‌های grouping ردیف‌ها را ببینید (مثل دیدن subtotal سالانه در یک grouping از نتایج سه‌ماهه)، یا ستون‌ها و ردیف‌ها را عوض کنید، می‌خواهید از یک pivot table استفاده کنید. [نحوه ایجاد یک pivot table برای خلاصه کردن داده خود](../../../../docs/latest/questions/visualizations/pivot-table.html) را بررسی کنید.

### نمودارهای خطی

همچنین اغلب می‌خواهید داده را به عنوان یک سری زمانی برای دیدن نحوه تغییر یک معیار خاص در طول زمان (مثل یک میانگین rolling 7 روزه) ارائه دهید، و آن زمانی است که به نمودار خطی می‌رسید. نمودارهای خطی شکل ساده‌ای به داده می‌دهند، که دیدن اینکه آیا اعداد trending up هستند، یا cyclical هستند، یا حداکثر مقدار برای X هفته گذشته چه بود، و غیره را آسان می‌کند.

![یک سری زمانی از تعداد سفارش‌ها در هر ماه، با یک خط روند.](../../../images/guide-to-charts/line-chart-time-series.png)

با آن از سر راه، بیایید برخی سناریوهای رایج را برای کمک به انتخاب viz مناسب برای communicate کردن یافته‌های خود مرور کنیم.

## وقتی فقط یک مقدار دارید

در این سناریو چند گزینه دارید.

### اعداد static

برای اعداد static، یا حداقل عددی که خیلی مکرر تغییر نمی‌کند، از تجسم [number](../../../../docs/latest/questions/visualizations/visualizing-results.html#numbers) (به درستی نامگذاری شده) استفاده کنید، که برای مقادیر at-a-glance مثل تعداد پاسخ‌دهندگان در یک نظرسنجی خوب است. به خاطر داشته باشید که یک عدد واحد ممکن است فاقد context باشد، پس بهتر است در یک داشبورد که آن را ارائه می‌دهد استفاده شود، مثل تعداد نظرسنجی‌های ارسال شده یا چند پاسخ‌دهنده سال گذشته داشتیم.

![اعداد وقتی با اعداد و نمودارهای دیگر contextualized شوند بهترین کار را می‌کنند.](../../../images/guide-to-charts/numbers-on-dashboard.png)

اما حتی آنگاه، باید استفاده از تجسم [trend](../../../../docs/latest/questions/visualizations/visualizing-results.html#trends) را در نظر بگیرید اگر عدد شما می‌تواند بر اساس زمان break out شود (مشاهده [مقایسه یک معیار در طول زمان](#one-measure-over-time) در زیر).

![تجسم روند آخرین مقدار یک معیار واحد، و همچنین تغییر درصد از مقدار قبلی را نشان می‌دهد.](../../../images/guide-to-charts/trend.png)

اما حتی *آنگاه*، آیا یک [نمودار خطی](../../../../docs/latest/questions/visualizations/visualizing-results.html#line-charts) بهتر خواهد بود؟ با یک نمودار خطی، می‌توانید تصویر بهتری (به معنای واقعی کلمه) از نحوه تغییر مقدار در طول زمان دریافت کنید. یا می‌توانید بهترین هر دو جهان را داشته باشید: یک داشبورد با یک نمودار روند برای آخرین مقدار (و تغییر آن از آخرین دوره زمانی)، جفت شده با یک نمودار خطی که تاریخچه آن مقدار را نشان می‌دهد.

### مقایسه با یک هدف

اگر می‌خواهید یک معیار را در context یک هدف، یا limit، یا threshold دیگر ببینید، از یک [progress bar](../../../../docs/latest/questions/visualizations/visualizing-results.html#progress-bars) استفاده کنید.

![از یک progress bar برای نشان دادن یک مقدار واحد در context یک هدف استفاده کنید.](../../../images/guide-to-charts/progress.png)

### موقعیت در یک محدوده

اگر context آن عدد یک scale یا محدوده است، از یک [gauge](../../../../docs/latest/questions/visualizations/visualizing-results.html#gauges) استفاده کنید. متابیس سه محدوده جزئی در محدوده کامل مقادیر انتخاب می‌کند، اما می‌توانید اندازه این محدوده‌ها را تنظیم کنید، یا محدوده‌های اضافی اضافه کنید، و آن‌ها را هر طور که دوست دارید برچسب بزنید.

![می‌توانید محدوده‌ها و رنگ‌ها روی یک gauge سفارشی کنید.](../../../images/guide-to-charts/gauge.png)

## مقایسه معیارها

اغلب می‌خواهیم ببینیم چندین مقدار چگونه در مقابل یکدیگر stack up می‌شوند. رایج‌ترین مقایسه عملکرد یک معیار واحد در طول زمان است (مثلاً، نحوه مقایسه هفته گذشته با هفته قبل). اما همچنین اغلب یک معیار را در ابعاد دیگر، مثل فروش در دسته‌های محصول مختلف مقایسه می‌کنید.

### مقایسه‌های static

برای معیارهایی که تغییر نمی‌کنند، مثل پاسخ‌ها در یک نظرسنجی یا یک گزارش سالانه، می‌توانید مقادیر را با یک [نمودار میله‌ای](../../../../docs/latest/questions/visualizations/visualizing-results.html#line-charts) (گاهی column chart نامیده می‌شود) مقایسه کنید. اگر موارد مختلف زیادی دارید که نیاز به مقایسه دارید، باید با تغییر به یک نمودار row بازی کنید تا ببینید آیا میله‌ها خوانا‌تر می‌شوند. برای بیشتر، [بر نمودار میله‌ای مسلط شوید](bar-charts.html) را ببینید.

### یک معیار در طول زمان

وقتی می‌خواهید دو مقدار sequential یک معیار را مقایسه و تأکید کنید، مثل مقدار این هفته در مقابل هفته گذشته، می‌توانید از یک نمودار [trend](../../../../docs/latest/questions/visualizations/visualizing-results.html#trends) استفاده کنید، که اساساً یک سری زمانی در یک جعبه است، که مقدار فعلی معیار، و مقدار قبلی آن معیار در هر interval که ردیابی می‌کنید (آخرین ساعت، روز، هفته، و غیره) را نشان می‌دهد.

اگر نیاز به تأکید بر آخرین delta ندارید، یک سری زمانی را در نظر بگیرید تا مردم بتوانند شکل معیار را در طول زمان ببینند (به خصوص مفید اگر آخرین داده uncharacteristic از روندهای بزرگتر است). روندها همچنین می‌توانند برای موقعیت‌هایی که تیم‌ها هر هفته به یک معیار نگاه می‌کنند و تقریباً رفتار آن را می‌دانند خوب باشند؛ viz روند راهی راحت برای نگه داشتن آن‌ها در جریان آخرین اعداد است، مثل وقتی که اعداد را [روی یک TV](../../../../docs/latest/dashboards/introduction.html#fullscreen-dashboards) می‌اندازید.

نمودارهای خطی فرمت کلاسیک برای سری زمانی هستند، اما همچنین می‌توانید مقادیر سری را به عنوان یک نمودار میله یا area ارائه دهید.

### چندین معیار در طول زمان

می‌توانید [دو سری زمانی را روی یک نمودار خطی واحد overlay کنید](../time-series/time-series-comparisons.html)، با هر خط به اشتراک گذاشتن y-axis. اگر معیارهای شما scaleها یا واحدهای اندازه‌گیری واقعاً متفاوتی دارند (مثلاً، دلار در مقابل quantity)، سپس می‌توانید از یک [نمودار combo](../../../../docs/latest/questions/visualizations/visualizing-results.html#combo-charts) با دو y-axis استفاده کنید، تا این تفاوت را highlight کنید. توجه کنید دو محور y: میانگین رتبه‌بندی محصول در سمت چپ و تعداد سفارش در سمت راست.

![یک نمودار combo که میانگین رتبه‌بندی محصول را به عنوان یک خط روی یک نمودار میله‌ای که تعداد سفارش‌ها را نشان می‌دهد نمایش می‌دهد، هر دو معیار group شده بر اساس سه‌ماهه.](../../../images/guide-to-charts/combo-chart.png)

### در مقابل یک هدف یا benchmark در طول زمان

همه آنچه اینجا نیاز دارید افزودن یک خط هدف به نمودار سری زمانی خود است. همچنین می‌توانید از خطوط هدف برای تنظیم [هشدارها](../../../../docs/latest/questions/alerts.html) استفاده کنید، که آن‌ها را حتی مفیدتر می‌کند.

## نشان دادن رابطه بین معیارها

گاهی می‌خواهید ببینید دو معیار مختلف چگونه correlate می‌کنند.

راه پایه برای دیدن یک رابطه رسم یک متغیر در امتداد x-axis و یکی در امتداد y است، و دیدن اینکه آیا یک الگو ظاهر می‌شود. آن یک [scatterplot](../../../../docs/latest/questions/visualizations/visualizing-results.html#scatterplots-and-bubble-charts) است. اغلب scatterplotها را با داده‌ای که خلاصه یا aggregate نشده است می‌بینید، پس هر نقطه روی نمودار یک رکورد فردی در داده را نشان می‌دهد—یک ورودی واحد، شخص، session، نمونه، و غیره.

![یک scatterplot که رابطه بین یک محصول را نشان می‌دهد](../../../images/guide-to-charts/scatterplot.png)

اگر می‌خواهید یک متغیر سوم معرفی کنید، می‌توانید اندازه هر نقطه را برای reflect کردن مقدار متغیر اضافی تغییر دهید، تبدیل یک scatterplot به یک **نمودار bubble**. در این مورد، به متابیس می‌گوییم اندازه نقطه را برای fit کردن رتبه‌بندی میانگین محصول تنظیم کند.

![یک نمودار bubble که رابطه بین قیمت محصول و تعداد سفارش‌ها را نشان می‌دهد، با اندازه هر bubble نشان دادن رتبه‌بندی محصول.](../../../images/guide-to-charts/bubble-chart.png)

## Breakouts

یک breakout ترکیب یک معیار را نشان می‌دهد—مثلاً، نحوه breakdown فروش ما بر اساس دسته.

### یک معیار با دو یا سه گروه یا دسته

[نمودارهای pie یا donut](../../../../docs/latest/questions/visualizations/pie-or-donut-chart.html) در نشان دادن نحوه تشکیل یک کل توسط دو یا سه بخش خوب هستند. دلیل اینکه نمودارهای pie فقط برای دو یا سه چیز کار می‌کنند این است که بیشتر از آن و مردم شروع به مشکل در مقایسه نسبت‌های نسبی بخش‌های مختلف می‌کنند. در آن مورد، بهتر است به یک نمودار میله یا row برسید.

![یک نمودار donut که ترکیب محصولات را در دو دسته نشان می‌دهد: Doohickey و Widget.](../../../images/guide-to-charts/donut-chart.png)

### یک معیار بر اساس مقادیر accumulating آن

اگر می‌خواهید یک accumulation را تجسم کنید، و وقتی آن مقدار شامل هم componentهای مثبت و هم منفی است، می‌خواهید به یک [نمودار waterfall](../../../../docs/latest/questions/visualizations/visualizing-results.html#waterfall-charts) بروید. با نمودارهای Waterfall، می‌توانید یک total در سمت راست دور شامل کنید تا مقدار cumulative ورودی‌های تشکیل‌دهنده—هر یک از میله‌های منتهی به total—را نمایش دهد.

![یک نمودار waterfall که سود و زیان برای دسته‌های فردی (میوه‌ها) که total سود را تشکیل می‌دهند نشان می‌دهد.](../../../images/guide-to-charts/waterfall.png)

### یک معیار بر اساس مراحل sequential

برای دیدن نحوه drop off یک مقدار از طریق یک فرآیند، و در کدام مرحله، می‌توانید از یک [نمودار funnel](../../../../docs/latest/questions/visualizations/funnel.html) استفاده کنید.

![یک نمودار funnel تعداد فرصت‌ها را نشان می‌دهد، و چند تا از آن‌ها در هر مرحله از فرآیند فروش از دست رفته‌اند.](../../../images/guide-to-charts/funnel.png)

نمودارهای funnel همچنین می‌توانند ترکیب یک جمعیت را نشان دهند، مثلاً، یک جمعیت شروع که هر مرحله یک سطح آموزش است که بیشتر آن جمعیت را winnow می‌کند: دبیرستان، لیسانس، فوق‌لیسانس، و غیره.

همچنین می‌توانید از یک نمودار میله‌ای برای رسم مراحل استفاده کنید. در اینجا یک ترفند جالب: روی یک داشبورد، می‌توانید [scalarها را برای تشکیل یک نمودار میله یا funnel ترکیب کنید](../../../../docs/latest/dashboards/multiple-series.html#combining-number-charts). همه آنچه نیاز دارید محاسبه معیار در هر مرحله است، سپس آن‌ها را روی یک کارت داشبورد با هم اضافه کنید (فقط یادتان باشد هر مرحله را به ترتیب اضافه کنید).

### Breakout دسته‌ای در طول زمان

اگر نیاز به نشان دادن نحوه تغییر یک عدد در طول زمان دارید، و ترکیب آن عدد را در هر interval نشان دهید، سپس استفاده از یک نمودار stacked area یا stacked bar را در نظر بگیرید. به عنوان مثال، بگویید می‌خواهیم هم total revenue (تعریف شده اینجا به عنوان مجموع `Order → Total`) را بدانیم، و همچنین نحوه تقسیم آن revenue بین چهار دسته محصول ما، `Doohickey`، `Gadget`، `Gizmo`، و `Widget`.

![نمودار میله‌ای stacked که سفارش‌ها را group شده بر اساس دسته در هر سال نشان می‌دهد.](../../../images/guide-to-charts/stacked-bar-chart.png)

### تغییرات نسبی بین دسته‌ها در طول زمان

اگر فقط می‌خواهید ببینید دسته‌های مختلف چگونه نسبت به یکدیگر در طول زمان تغییر می‌کنند، بدون توجه به آن count، می‌توانید از یک نمودار میله‌ای stacked تنظیم شده در 100% استفاده کنید.

![نمودار میله‌ای stacked در 100% که سفارش‌ها را group شده بر اساس دسته در هر سال نشان می‌دهد.](../../../images/guide-to-charts/stacked-100-percent.png)

## نشان دادن نحوه توزیع مقادیر در یک محدوده عددی

نمودار توزیع کلاسیک هیستوگرام است، که اساساً یک نمودار میله‌ای bunched up است که مقادیر را در یک محدوده bin می‌کند، مثل گرفتن سن هر مشتری، تقسیم مشتریان به محدوده‌های سنی، و شمارش تعداد مشتریان در هر محدوده سنی. هیستوگرام‌ها برای دریافت بینش درباره چیزهایی مثل اینکه مردم چقدر از یک مورد احتمالاً می‌خرند، محدوده قیمتی که احتمالاً در آن خرید می‌کنند، یا حتی زمان سال که بیشتر مردم خرید می‌کنند مفید هستند.

![یک هیستوگرام که تعداد سفارش‌ها را در یک محدوده قیمت نشان می‌دهد. Hover روی یک میله tooltip با میله را نشان می‌دهد](../../../images/guide-to-charts/histogram.png)

[داده خود را به عنوان یک هیستوگرام تجسم کنید](histograms.html) را بررسی کنید.

## وقتی داده شما شامل ابعاد جغرافیایی است

پس، واضح است که یک نقشه اینجا مفید خواهد بود، اما کدام نقشه؟ و آیا واقعاً به نقشه نیاز دارید، یا جدول انتخاب بهتری خواهد بود؟

### مکان‌های خاص

اگر می‌خواهید مکان‌های خاص افراد یا موارد فردی را رسم کنید، از یک [نقشه pin](../../../../docs/latest/questions/visualizations/map.html#pin-map) استفاده کنید.

![یک نقشه pin مختصات را روی یک نقشه رسم می‌کند.](../../../images/guide-to-charts/pin-map.png)

### تفاوت‌ها بین مناطق

اگر می‌خواهید بفهمید یک measurement چگونه بر اساس یک منطقه تعریف شده مثل کشور یا state متفاوت است، از یک [نقشه region](../../../../docs/latest/questions/visualizations/map.html#region-maps) (همچنین choropleth map نامیده می‌شود) استفاده کنید.

![یک نقشه choropleth مناطق bounded را بر اساس مقادیر در هر منطقه shade می‌کند.](../../../images/guide-to-charts/choropleth.png)

نقشه‌های region مرزهای تعریف شده (اغلب سیاسی) دارند و بر اساس موقعیت نسبی مقادیر در محدوده کل مقادیر shade می‌شوند. مقادیر bin می‌شوند، پس هر shade با یک bin مطابقت دارد (مثلاً، یک bin می‌تواند مقادیر بیشتر از 50 اما کمتر از 100 باشد).

### توزیع مختصات

اگر کمتر به مکان‌های دقیق علاقه‌مند هستید، و بیشتر به hot spotها علاقه‌مند هستید، می‌توانید مختصات خود را bin کنید تا یک [نقشه grid](../../../../docs/latest/questions/visualizations/map.html#grid-map) ایجاد کنید.

![یک نقشه grid با مختصات bin شده با 1 درجه.](../../../images/guide-to-charts/grid-map.png)
نقشه‌های grid شبیه heat mapهایی هستند که مکان‌ها را در یک grid که نقشه را overlay می‌کند bin می‌کنند، و برای نشان دادن جایی که hot spotها هستند خوب هستند.

برای بیشتر درباره کار با نقشه‌ها، [مستندات Maps](../../../../docs/latest/questions/visualizations/map.html) را ببینید.

### آیا نقشه بهترین انتخاب است؟

سپس موقعیت‌هایی وجود دارند که در آن‌ها نقشه مفید نیست. به عنوان مثال، اگر می‌خواهید ببینید stateها چگونه بر اساس یک مقدار خاص stack up می‌شوند، ممکن است بخواهید داده را به عنوان جدول نمایش دهید، تا مردم بتوانند آن داده را مرتب کنند و فوراً ببینند کدام stateها بیشترین درآمد را می‌کشند. با این گفته، با متابیس همیشه می‌توانید یک سؤال را به عنوان نقشه ذخیره کنید، و آن را به بینندگان واگذار کنید تا [drill through داده](../questions/drill-through.html) کنند.

## مطالعه بیشتر

وقتی روی نمودارهای خود settled شدید، زمان افزودن آن‌ها به یک داشبورد است. [بهترین روش‌ها برای داشبوردهای BI](../dashboards/bi-dashboard-best-practices.html) را بررسی کنید.

[
      
        
        

      
      
        
        

      
    ](line-charts.html)
