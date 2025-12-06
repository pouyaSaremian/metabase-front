---
title: "آموزش: لینک کردن فیلترها در داشبوردها"
description: "فیلترها را در داشبوردها لینک کنید تا انتخاب‌های موجود در یک فیلتر را بر اساس انتخاب فعلی فیلتر دیگر محدود کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/dashboards/linking-filters
  - /learn/building-analytics/dashboards/linking-filters
  - /learn/dashboards/linking-filters
toc:
  - id: "tutorial-linking-filters-in-dashboards"
    title: "آموزش: لینک کردن فیلترها در داشبوردها"
    level: 1
    href: "#tutorial-linking-filters-in-dashboards"
  - id: "prerequisites-for-linking-dashboard-filters"
    title: "پیش‌نیازها برای لینک کردن فیلترهای داشبورد"
    level: 2
    href: "#prerequisites-for-linking-dashboard-filters"
  - id: "setting-up-a-dashboard-with-a-single-question"
    title: "تنظیم یک داشبورد با یک سؤال واحد"
    level: 2
    href: "#setting-up-a-dashboard-with-a-single-question"
  - id: "adding-a-state-filter"
    title: "افزودن یک فیلتر State"
    level: 2
    href: "#adding-a-state-filter"
  - id: "adding-a-city-filter"
    title: "افزودن یک فیلتر City"
    level: 2
    href: "#adding-a-city-filter"
  - id: "example-of-how-unlinked-filters-can-disappoint-you"
    title: "مثال نحوه ناامید کردن فیلترهای لینک نشده"
    level: 2
    href: "#example-of-how-unlinked-filters-can-disappoint-you"
  - id: "link-filters-to-narrow-choices"
    title: "لینک کردن فیلترها برای محدود کردن انتخاب‌ها"
    level: 2
    href: "#link-filters-to-narrow-choices"
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

# آموزش: لینک کردن فیلترها در داشبوردها

فیلترها را در داشبوردها لینک کنید تا انتخاب‌های موجود در یک فیلتر را بر اساس انتخاب فعلی فیلتر دیگر محدود کنید.

> به دنبال مستندات درباره فیلترهای لینک شده هستید؟ [مستندات: فیلترهای لینک شده](../../../../docs/latest/dashboards/linked-filters.html) را ببینید.

با تنظیم یک داشبورد ساده با یک سؤال واحد شروع می‌کنیم. هدف اینجا تنظیم یک داشبورد با دو فیلتر لینک شده (گاهی فیلترهای زنجیره‌ای، یا فیلترهای cascading نامیده می‌شوند) است. هر فیلتر انتخاب‌های خود را بر اساس مقدار(های) از فیلتر دیگر محدود می‌کند.

در این مورد، لینک کردن فیلترهای State و City:

- مقادیر city را برای state انتخاب شده نمایش می‌دهد، یا
- state(های) صحیح را برای city انتخاب شده نمایش می‌دهد (از آنجایی که stateها می‌توانند شهرهایی با همان نام داشته باشند).

## پیش‌نیازها برای لینک کردن فیلترهای داشبورد

قبل از تلاش برای لینک کردن فیلترهای داشبورد، برخی [محدودیت‌هایی برای آگاهی](../../../../docs/latest/dashboards/linked-filters.html#limitations-of-linked-filters) وجود دارد.

## تنظیم یک داشبورد با یک سؤال واحد

بیایید مثال خود را با استفاده از [پایگاه داده نمونه](../../../../glossary/sample-database.html) شامل شده با متابیس شروع کنیم. برای آموزش‌های جزئی‌تر درباره پرسیدن سؤال و ایجاد داشبورد، مسیر [شروع کار](../../getting-started/index-2.html) را بررسی کنید. قبل از ادامه، نیاز به یک داشبورد جدید داریم. اگر مطمئن نیستید چگونه یکی بسازید، [مستندات](../../../../docs/latest/dashboards/introduction.html) ما آن را پوشش می‌دهد.

بعد، یک سؤال می‌پرسیم. روی **+ New** > **Question** > **Raw data** > **Sample database** > **People** کلیک کنید و **Visualize** را کلیک کنید. باید یک جدول ببینید که همه مشتریان در جدول people را فهرست می‌کند. بعد، روی **Visualization** (پایین سمت چپ) کلیک کنید و تجسم **Map** را انتخاب کنید. برای نوع نقشه، یک [نقشه pin](../../../../docs/latest/questions/visualizations/map.html) انتخاب کنید. اگر گیر کردید، [مستندات](../../../../docs/latest/questions/introduction.html) ما نحوه پرسیدن سؤال‌هایی مثل این را پوشش می‌دهد. مطمئن شوید سؤال خود را ذخیره کنید و آن را به داشبوردی که تازه ایجاد کردید اضافه کنید.

![داشبورد نمونه قبل از افزودن فیلتر یا ذخیره.](../../../images/linking-filters-in-dashboards/example-dashboard.png)

## افزودن یک فیلتر State

نیاز به یک [فیلتر داشبورد](../../../../docs/latest/dashboards/filters.html) داریم که به ما اجازه دیدن سفارش‌ها از stateهای مختلف بسته به مقداری که انتخاب می‌کنیم را می‌دهد.

1. روی **آیکون مداد** کلیک کنید تا داشبورد خود را ویرایش کنید.
2. برای افزودن یک فیلتر، روی **آیکون فیلتر** کلیک کنید.
3. می‌خواهیم یک فیلتر **Location** اضافه کنیم.
4. برای **What kind of filter?**، **Dropdown** را انتخاب کنید.
5. بعد، می‌خواهیم فیلتر را به کارت سؤال wire کنیم. روی کارت سؤال، `Person.State` را انتخاب کنید.
6. روی **Done** کلیک کنید تا فیلتر اضافه شود، و داشبورد را **Save** کنید.

![Wire کردن یک فیلتر به فیلد People.state، و برچسب زدن فیلتر](../../../images/linking-filters-in-dashboards/state-filter-setup.png)

فیلتر را امتحان کنید تا ببینید آیا کار می‌کند قبل از ادامه برای افزودن فیلتر بعدی. یک state از فیلتر انتخاب کنید: آیا نقشه تغییر می‌کند تا برای سفارش‌ها از آن state فیلتر شود؟ وقتی چندین state انتخاب می‌کنید چطور؟

## افزودن یک فیلتر City

برای لینک کردن فیلترها، نیاز به فیلتر دیگری داریم، در این مورد یک فیلتر برای شهرها. با دنبال کردن همان [مراحل outlined شده بالا](#adding-a-state-filter)، یک فیلتر location dropdown دیگر اضافه می‌کنیم، به جز این بار فیلتر را به فیلد `Person.City` کارت خود متصل می‌کنیم.

## مثال نحوه ناامید کردن فیلترهای لینک نشده

و اینجا جایی است که با یک مسئله مواجه می‌شویم. در حال حاضر، فیلترها مستقل از یکدیگر هستند. پس فیلتر State به ما اجازه انتخاب یک state، بگویید Vermont، را می‌دهد، و فیلتر City به ما اجازه انتخاب هر شهری - شامل شهرهای خارج از Vermont - را می‌دهد. اساساً، این داشبورد به ما اجازه تنظیم ترکیبات فیلتر بی‌معنی، مثل فیلتر کردن برای شهر Austin در state Vermont، که نحوه تنظیم universe ما در حال حاضر نیست (از نظر سیاسی)، را می‌دهد. همانطور که انتظار می‌رود، این ترکیب فیلترها نتیجه‌ای نمی‌دهد:

![ترکیبات فیلتر بی‌معنی نتیجه‌ای نمی‌دهند: Austin یک شهر در Vermont نیست.](../../../images/linking-filters-in-dashboards/no-results.png)

## لینک کردن فیلترها برای محدود کردن انتخاب‌ها

می‌توانیم ترکیبات فیلتر منطقی را با لینک کردن فیلترها اعمال کنیم. به عنوان مثال، اگر کسی Vermont را در فیلتر State انتخاب کند، فیلتر City باید "بداند" گزینه‌های شهرها را فقط به آن‌هایی که در state Vermont هستند محدود کند.

برای لینک کردن دو فیلتر، روی **آیکون مداد** کلیک می‌کنیم تا به حالت ویرایش داشبورد برگردیم. از آنجایی که می‌خواهیم فیلتر City به تغییر در فیلتر State واکنش نشان دهد، می‌خواهیم تنظیمات روی فیلتر City را تغییر دهیم. روی **آیکون چرخ‌دنده** روی فیلتر `City` کلیک می‌کنیم تا sidebar تنظیمات برای فیلتر `City` باز شود.

اینجا بخش مهم است: در sidebar، روی **تب Linked filters** کلیک می‌کنیم، که گزینه‌هایی برای محدود کردن انتخاب‌های این فیلتر، یعنی انتخاب‌های فیلتر City، به ما ارائه می‌دهد. متابیس فیلترهای موجود که می‌توانیم فیلتر City را به آن‌ها لینک کنیم را فهرست می‌کند. در این مورد، فقط یک فیلتر وجود دارد، فیلتر State، پس آن فیلتر را toggle می‌کنیم تا فیلتر را لینک کنیم.

![محدود کردن انتخاب‌های فیلتر City بر اساس مقادیر انتخاب شده برای فیلتر State.](../../../images/linking-filters-in-dashboards/linked-filter-city.png)

بیایید تغییرات خود را ذخیره کنیم، و آن را امتحان کنیم.

با فیلتر City لینک شده به فیلتر State، وقتی VT را برای فیلتر state وارد می‌کنیم، می‌بینیم که فیلتر City حالا می‌داند فقط شهرهای Vermont را نمایش دهد.

![فیلترهای لینک شده: فیلتر City می‌داند انتخاب‌های خود را بر اساس فیلتر State لینک شده محدود کند](../../../images/linking-filters-in-dashboards/vermont-cities.png)

همچنین می‌توانیم فیلتر State را به فیلتر City لینک کنیم تا انتخاب‌های موجود برای فیلتر State را بر اساس مقدار فیلتر city محدود کنیم. به این ترتیب، اگر Austin را در فیلتر city وارد کنیم، فیلتر State فقط stateهایی که شامل شهرهایی به نام Austin هستند را به شما نشان می‌دهد.

![فیلترهای لینک شده: فیلتر State انتخاب‌های خود را بر اساس مقدار در فیلتر City محدود می‌کند.](../../../images/linking-filters-in-dashboards/austins.png)

## مطالعه بیشتر

- [فیلترهای فیلد: ایجاد widgetهای فیلتر هوشمند برای سؤال‌های SQL](../sql-in-metabase/field-filters.html)
- [افزودن فیلترها به داشبوردها با سؤال‌های SQL](../sql-in-metabase/filters.html)
- [ایجاد widgetهای فیلتر برای نمودارها با استفاده از متغیرهای SQL](../sql-in-metabase/sql-variables.html)
- [فیلترهای داشبورد](../../../../docs/latest/dashboards/filters.html)

[
      
        

      
      
        
        

      
    ](bi-dashboard-best-practices.html)
[
      
        
        

      
      
        
        

      
    ](custom-destinations.html)
