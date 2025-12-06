---
title: "آموزش: Cross-filtering - استفاده از یک نمودار برای به‌روزرسانی یک فیلتر داشبورد"
description: "با فقط چند کلیک، می‌توانید هر نمودار یا جدولی را برای به‌روزرسانی یک فیلتر داشبورد پیکربندی کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/dashboards/cross-filtering
  - /learn/building-analytics/dashboards/cross-filtering
toc:
  - id: "tutorial-cross-filtering-using-a-chart-to-update-a-dashboard-filter"
    title: "آموزش: Cross-filtering - استفاده از یک نمودار برای به‌روزرسانی یک فیلتر داشبورد"
    level: 1
    href: "#tutorial-cross-filtering-using-a-chart-to-update-a-dashboard-filter"
  - id: "setting-up-the-filters"
    title: "تنظیم فیلترها"
    level: 2
    href: "#setting-up-the-filters"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "../index.html"
  - title: "ساخت داشبوردها"
    href: "../dashboards.html"
---

# آموزش: Cross-filtering - استفاده از یک نمودار برای به‌روزرسانی یک فیلتر داشبورد

با فقط چند کلیک، می‌توانید هر نمودار یا جدولی را برای به‌روزرسانی یک فیلتر داشبورد پیکربندی کنید.

متابیس به شما اجازه سفارشی کردن آنچه وقتی روی یک کارت در یک داشبورد کلیک می‌کنید اتفاق می‌افتد را می‌دهد. این مقاله نحوه تنظیم کارت‌ها برای به‌روزرسانی widgetهای فیلتر روی یک داشبورد—چیزی که **cross-filtering** می‌نامیم—را مرور می‌کند.

در اینجا داشبوردی که می‌خواهیم wire کنیم:

![داشبورد شروع ما که با کارت‌هایی درباره `Orders` از پایگاه داده نمونه شامل شده با متابیس.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/starter-dashboard.png)

این داشبورد cross-filtering اطلاعاتی درباره سفارش‌ها در [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با نصب متابیس شما را نشان می‌دهد.

در اینجا هدف ما: می‌خواهیم این داشبورد را تنظیم کنیم تا وقتی مردم روی یک state در نقشه کلیک می‌کنند، فیلتر State داشبورد به‌روزرسانی شود و هر کارت دیگر *به جز* کارت `Orders by State` را فیلتر کند.

همچنین می‌خواهیم داشبورد را wire کنیم تا وقتی مردم روی یک دسته در نمودار میله‌ای کلیک می‌کنند، فیلتر دسته به‌روزرسانی شود، و همه کارت‌ها *به جز* کارت `Orders by Product Category` به‌روزرسانی شوند تا سفارش‌ها را بر اساس آن دسته فیلتر کنند.

در اینجا داشبورد تمام شده در عمل:

![کلیک روی Wisconsin فیلتر state را به‌روزرسانی می‌کند، داشبورد را برای سفارش‌های قرار داده شده از کاربران در Wisconsin فیلتر می‌کند. کلیک روی Gadget یا Widget فیلتر Category را به‌روزرسانی می‌کند، و داشبورد را برای سفارش‌ها با محصولات در آن دسته‌ها فیلتر می‌کند.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/cross-filtering-example.gif)

## تنظیم فیلترها

از آنجایی که از قبل سؤال‌های مرتبط با سفارش‌ها را به داشبورد خود اضافه کردیم، با افزودن دو فیلتر شروع می‌کنیم: یک فیلتر State و یک فیلتر Category. فرآیند تنظیم برای هر دو فیلتر مشابه است، پس روی افزودن فیلتر State تمرکز می‌کنیم و ایده می‌گیرید.

از داشبورد، روی **آیکون مداد** کلیک می‌کنیم تا وارد حالت ویرایش داشبورد شویم. برای افزودن یک فیلتر state، **آیکون فیلتر** را از منو در بالا سمت راست انتخاب می‌کنیم. برای نوع فیلتر، `Location` را انتخاب می‌کنیم، و برای kind، `State` را انتخاب می‌کنیم. برای یادگیری بیشتر درباره تنظیم فیلترها، [فیلترهای داشبورد](../../../../docs/latest/dashboards/filters.html) را ببینید.

![افزودن یک فیلتر Location.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/add-state-filter.png)

بعد، می‌خواهیم هر کارت را به فیلتر state خود wire کنیم *به جز* کارتی که می‌خواهیم برای به‌روزرسانی آن فیلتر استفاده کنیم: کارت `Orders by state`. به این ترتیب، می‌توانیم روی stateهای مختلف کلیک کنیم، و کارت‌های دیگر به‌روزرسانی می‌شوند تا سفارش‌ها از کاربران در state کلیک شده را نشان دهند.

برای تنظیم این cross-filtering، بیایید `Column to filter on` هر کارت دیگر را به `User.State` تنظیم کنیم.

![اتصال هر کارت به فیلتر State <em>به جز</em> کارت Orders by State، چون می‌خواهیم از نقشه state برای به‌روزرسانی فیلتر State استفاده کنیم.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/wiring-state-filter.png)

بعد، می‌خواهیم نقشه ایالات متحده را برای به‌روزرسانی فیلتر state روی کلیک تنظیم کنیم. برای انجام آن، نیاز به تغییر رفتار کلیک برای سؤال `Orders by State` خود داریم. روی کارت `Orders by State` hover کنید و روی **آیکون رفتار کلیک** کلیک کنید:

![روی کارت Orders by State hover کنید و آیکون رفتار کلیک را انتخاب کنید.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/orders-by-state-click-behavior.png)

متابیس یک **sidebar رفتار کلیک** slide می‌کند جایی که می‌توانیم تعریف کنیم وقتی مردم روی کارت `Orders by State` کلیک می‌کنند چه اتفاقی می‌افتد. از آنجایی که می‌خواهیم کارت فیلتر `State` را به‌روزرسانی کند، گزینه `Update a dashboard filter` را انتخاب می‌کنیم.

![برای رفتار کلیک برای Orders by State، Update a dashboard filter را انتخاب کنید.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/update-a-dashboard-filter.png)

متابیس فیلترهای موجود داشبورد که می‌توانیم به‌روزرسانی کنیم را فهرست می‌کند:

![متابیس فیلترهای موجود برای به‌روزرسانی روی کلیک را فهرست می‌کند.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/available-filters.png)

از آنجایی که می‌خواهیم فیلتر `State` را به‌روزرسانی کنیم، فیلتر `State` را انتخاب می‌کنیم، و مقدار `User→State` را به فیلتر pass می‌کنیم.

![ما](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/select-column.png)

با آن، متابیس یک خلاصه از رفتار کلیک که تازه تعریف کردیم به ما می‌دهد. در این مورد، کارت `Orders by State` را برای به‌روزرسانی فیلتر `State` با pass کردن مقدار `User-State` به فیلتر تنظیم کردیم.

![متابیس رفتار کلیک پیکربندی شده ما را خلاصه می‌کند: کارت Orders by State یک فیلتر داشبورد را با pass کردن مقدار از ستون User→State به داشبورد به‌روزرسانی می‌کند](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/click-behavior-summary.png)

بیایید تغییرات خود را ذخیره کنیم، و رفتار کلیک جدید را امتحان کنیم:

![کلیک روی یک state یک بار بقیه کارت‌ها را بر اساس آن state فیلتر می‌کند. کلیک روی state دوم بار فیلتر را reset می‌کند.](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/update-state-filter.gif)

اگر روی Wisconsin کلیک کنیم، داشبورد کارت‌های دیگر را برای سفارش‌ها از کاربران از Wisconsin فیلتر می‌کند. اگر دوباره روی Wisconsin کلیک کنیم، فیلتر reset می‌شود، و کارت‌های دیگر روی داشبورد به‌روزرسانی می‌شوند تا همه سفارش‌ها از همه stateها را نشان دهند.

تا اینجا خوب است. حالا بیایید به تنظیم `Orders by Product Category` برای به‌روزرسانی فیلتر `Category` داشبورد بپردازیم.

فرآیند کم و بیش مشابه بالا است، پس گام به گام مرور نمی‌کنیم. همه آنچه نیاز داریم:

- افزودن یک فیلتر `Category` برای فیلتر کردن داشبورد بر اساس `Product→Category`.
- Wire کردن هر کارت *به جز* `Orders by Product Category` به فیلتر دسته داشبورد.
- تنظیم رفتار کلیک روی `Orders by Product Category` برای به‌روزرسانی فیلتر دسته با pass کردن مقادیر از ستون `Product→Category`.

Sidebar خلاصه رفتار کلیک پیکربندی شده ما را نشان می‌دهد:

![خلاصه رفتار کلیک برای Orders by Product Category: به‌روزرسانی داشبورد](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/update-category-filter.png)

بیایید تغییرات خود را ذخیره کنیم، و تمام است. یک داشبورد داریم که مردم می‌توانند با state یا دسته به سادگی با کلیک روی یک نمودار cross-filter کنند:

![خلاصه رفتار کلیک برای Orders by product category: به‌روزرسانی داشبورد](../../../images/cross-filtering-using-a-chart-to-update-a-dashboard-filter/finished-dashboard.gif)

در مثال ما، [کارت‌های متنی](../../../../glossary/text-card.html) اضافه کردیم تا به مردم بگوییم می‌توانند روی یک نمودار کلیک کنند تا داشبورد را فیلتر کنند، اما ممکن است بخواهید فقط به مردم اجازه دهید این عملکرد cross-filtering را خودشان کشف کنند. و اگر آن را از دست دادند، همیشه می‌توانند widgetهای فیلتر را با وارد کردن دستی مقادیر به‌روزرسانی کنند.

Cross-filtering موفق!

## مطالعه بیشتر

برای بیشتر درباره سفارشی کردن رفتار کلیک، مستندات ما درباره [مقصدهای سفارشی](../../../../docs/latest/dashboards/interactive.html#custom-destinations) را بررسی کنید، که نحوه تنظیم کارت‌های داشبورد برای لینک به داشبوردهای دیگر، سؤال‌های ذخیره شده، و حتی URLهای خارجی را پوشش می‌دهد، که به شما اجازه ایجاد clickpathهای غنی از طریق داده خود را می‌دهد.

در اینجا برخی لینک‌های اضافی که کار با فیلترها در متابیس را پوشش می‌دهند:

- [فیلترهای فیلد: ایجاد widgetهای فیلتر هوشمند برای سؤال‌های SQL](../sql-in-metabase/field-filters.html)
- [افزودن فیلترها به داشبوردها با سؤال‌های SQL](../sql-in-metabase/filters.html)
- [ایجاد widgetهای فیلتر برای نمودارها با استفاده از متغیرهای SQL](../sql-in-metabase/sql-variables.html)

[
      
        

      
      
        
        

      
    ](custom-destinations.html)
[
      
        
        

      
      
        
        

      
    ](markdown.html)
