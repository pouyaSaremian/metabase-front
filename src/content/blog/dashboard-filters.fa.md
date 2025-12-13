---
title: "هیجان فیلتر بدون فیلتر"
description: "متابیس اکنون فیلترهای سراسر داشبورد دارد"
url: "https://www.metabase.com/blog/dashboard-filters"
canonical: "dashboard-filters.html"
image: "https://www.metabase.com/images/posts/unfiltered-filter-excitement.jpg"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "هیجان فیلتر بدون فیلتر"
ogDescription: "متابیس اکنون فیلترهای سراسر داشبورد دارد"
ogImage: "https://www.metabase.com/images/posts/unfiltered-filter-excitement.jpg"
ogUrl: "https://www.metabase.com/blog/dashboard-filters"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Maz Ameli"
twitterTitle: "هیجان فیلتر بدون فیلتر"
twitterDescription: "متابیس اکنون فیلترهای سراسر داشبورد دارد"
twitterImage: "https://www.metabase.com/images/posts/unfiltered-filter-excitement.jpg"
author: "Maz Ameli"
datePublished: "Jun 20, 2016"
category: "Using Metabase"
---

یکی از ویژگی‌هایی که به خصوص هیجان‌زده هستیم که در آخرین نسخه متابیس گنجانده‌ایم فیلترهای سراسر داشبورد است. اگر از روزهای اول از متابیس استفاده می‌کرده‌اید، پس شما یک فرد باحال هستید که احتمالاً می‌دانید کجا بهترین سوشی را پیدا کنید و غیره. اما همچنین، در حالی که می‌دانید متابیس راهی عالی برای پرسیدن آسان سوالات در مورد داده شما و ایجاد داشبوردها و گزارش‌های عالی است، یک چیز که در متابیس *آسان* نبوده است، تغییر آسان همه کارت‌ها در یک داشبورد است.

به عنوان مثال، اگر می‌خواستید همان مجموعه نمودارها یا متریک‌ها را ببینید، اما به روش‌های مختلف تقسیم شده (مانند بر اساس تاریخ، مشتری، یا دسته‌بندی)، باید آن داشبورد را بارها و بارها با تنظیمات جزئی کارت‌ها دوباره ایجاد می‌کردید.

فیلترهای داشبورد این را برطرف می‌کنند.

## ایجاد فیلترهای داشبورد

این آسان‌تر از گفتن نشان داده می‌شود، بنابراین بیایید به این مثال داشبورد سفارشات برای یک شرکت تخیلی که ویجت، چیزهای مختلف، گجت و مانند آن می‌سازد نگاهی بیندازیم.

![داشبورد](../images/dashboard-filters-post/01-starting-dashboard.png)

این داشبورد یک دسته نمودار و داده جالب روی آن دارد، اما داده را برای همه زمان‌ها نشان می‌دهد. در روزهای قدیم، اگر می‌خواستیم همین داشبورد را فقط با داده از، مثلاً، ژوئن ۲۰۱۶ ببینیم، باید *همه* سوالات را ویرایش می‌کردیم، که خسته‌کننده می‌بود.

در عوض، می‌توانیم یک فیلتر ماه و سال به این داشبورد اضافه کنیم. ابتدا، شروع به ویرایش داشبورد می‌کنیم، و سپس روی دکمه جدید **افزودن یک فیلتر** کلیک می‌کنیم، و **زمان** را انتخاب می‌کنیم، سپس **ماه و سال**.

![افزودن یک فیلتر](../images/dashboard-filters-post/02-Add-a-filter.png)

![افزودن فیلتر زمان](../images/dashboard-filters-post/03-add-time-filter.png)

![افزودن فیلتر ماه](../images/dashboard-filters-post/04-add-month-and-year-filter.png)

بعد، برای هر کارت در داشبورد، فقط باید فیلدی را که می‌خواهیم فیلتر روی آن انجام شود انتخاب کنیم.

![نقشه‌برداری کارت‌ها](../images/dashboard-filters-post/05-map-cards.png)

در این مثال، ما علاقه‌مند به فیلتر کردن کل داشبورد بر اساس زمانی که سفارشات ایجاد شدند هستیم، بنابراین فیلد «Created At» را برای هر یک از کارت‌های خود انتخاب می‌کنیم. سپس روی انجام کلیک می‌کنیم، سپس ذخیره.

![کارت‌های نقشه‌برداری شده](../images/dashboard-filters-post/06-cards-mapped-to-time-filter.png)

حالا می‌توانیم روی فیلتر جدید ماه و سال خود کلیک کنیم و یک ماه خاص انتخاب کنیم…

![منوی کشویی ماه](../images/dashboard-filters-post/08-month-dropdown.png)

…و همه کارت‌ها در داشبورد ما تغییر می‌کنند!

![فیلتر کردن بر اساس ماه](../images/dashboard-filters-post/09-filtering-by-month.png)

## انواع مختلف فیلترها

زمان تنها چیزی نیست که می‌توانیم روی آن فیلتر کنیم. بیایید بگوییم می‌خواهیم بتوانیم ببینیم که دسته‌بندی‌های مختلف محصول ما چگونه عمل می‌کنند — آیا ویجت‌ها بهتر از گجت‌ها می‌فروشند؟ به جای ایجاد یک داشبورد جدید با همان نمودارها، اما با دسته‌بندی‌های محصول مختلف، می‌توانیم فقط یک فیلتر دسته‌بندی اضافه کنیم.

بنابراین دوباره داشبورد را ویرایش می‌کنیم، یک فیلتر جدید اضافه می‌کنیم، و **دسته‌بندی‌های دیگر** را انتخاب می‌کنیم. این یک گزینه انعطاف‌پذیر است که به ما امکان می‌دهد روی اساساً هر چیزی که تاریخ، مکان، یا شناسه نیست فیلتر کنیم.

![فیلتر دسته‌بندی](../images/dashboard-filters-post/10-category-filter.png)

بعد بیایید فیلد «Category» محصول را برای همه کارت‌ها انتخاب کنیم، سپس دوباره روی انجام و ذخیره کلیک کنیم…

![فیلتر دسته‌بندی نقشه‌برداری شده](../images/dashboard-filters-post/11-category-filter-mapped.png)

…و حالا دو فیلتر داریم، که می‌توانیم به طور مستقل یا با هم استفاده کنیم. هورا!

![استفاده از هر دو فیلتر](../images/dashboard-filters-post/12-both-filters.png)

## خودتان امتحان کنید!

امید ما این است که این فیلترهای جدید حتی برای کم‌ترین همکاران پیچیده شما نیز شروع به کاوش داده شما را واقعاً آسان کنند. نگاهی بیندازید و به ما بگویید چه فکر می‌کنید! ما [@metabase](https://www.twitter.com/metabase) در Twitter هستیم. و اگر هنوز آخرین نسخه متابیس را ندارید، [می‌توانید آن را از اینجا دانلود کنید](../pricing/index.html).

xoxo
متابیس

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [راه‌اندازی یک خط لوله اساسی برای تحلیل لاگ](set-up-a-logging-pipeline-for-analysis.html)

می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-2 -->

![Set up a basic pipeline for log analysis Image](../images/posts/best-practices-logging-pipeline.jpg)

### [راه‌اندازی یک خط لوله اساسی برای تحلیل لاگ](set-up-a-logging-pipeline-for-analysis.html)

می‌توانید از یک ابزار BI برای تحلیل لاگ در مقیاس کوچک با تجسم داده استفاده کنید. در اینجا چند نکته و پیشنهاد برای شروع وجود دارد.

*Mar 04, 2024 • Using Metabase • The Metabase Team • 4 min read*

---

<!-- blog-related-post-3 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد متابیس در Zendesk](embed-metabase-in-zendesk.html)

داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

---

<!-- blog-related-post-4 -->

![Embed a Metabase dashboard in Zendesk Image](../images/posts/embed-metabase-in-zendesk/embed-a-metabase-dashboard-in-zendesk.jpg)

### [جاسازی یک داشبورد متابیس در Zendesk](embed-metabase-in-zendesk.html)

داده و بینش مشتری که نیاز دارید را به طور خودکار فیلتر شده و آماده استفاده در تیکت‌های پشتیبانی خود دریافت کنید. همچنین می‌توانید یک داشبورد را در Salesforce، Stripe، Jira یا پلتفرم‌هایی که اجازه جاسازی URL را می‌دهند جاسازی کنید.

*Feb 26, 2024 • Using Metabase • Ignacio Beines Furcada and Sarina Bloodgood • 5 min read*

<!-- /blog-related-posts -->
