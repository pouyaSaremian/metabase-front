---
title: "داستان پشت تولیدکننده Dataset AI ما"
description: "کاوش انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده Dataset AI منبع باز ما."
url: "https://www.metabase.com/blog/story-behind-ai-dataset-generator"
canonical: "story-behind-ai-dataset-generator.html"
image: "https://www.metabase.com/images/posts/ai-dataset-generator.png"
ogType: "article"
ogSiteName: "Metabase | Open source Business Intelligence and Embedded Analytics"
ogTitle: "داستان پشت تولیدکننده Dataset AI ما"
ogDescription: "کاوش انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده Dataset AI منبع باز ما."
ogImage: "https://www.metabase.com/images/posts/ai-dataset-generator.png"
ogUrl: "https://www.metabase.com/blog/story-behind-ai-dataset-generator"
twitterCard: "summary_large_image"
twitterSite: "@metabase"
twitterCreator: "Matthew Hefferon"
twitterTitle: "داستان پشت تولیدکننده Dataset AI ما"
twitterDescription: "کاوش انتخاب‌های طراحی، چالش‌ها و دستاوردهای پشت تولیدکننده Dataset AI منبع باز ما."
twitterImage: "https://www.metabase.com/images/posts/ai-dataset-generator.png"
author: "Matthew Hefferon"
datePublished: "Jul 15, 2025"
category: "Data explorations"
---

در Metabase، من اغلب به داده جعلی برای دمو ویژگی‌های جدید نیاز دارم. خودم را در حال کاوش در Kaggle یافتم، اما احساس الهام زیادی نمی‌کردم، و زمان زیادی را برای جستجو تلف می‌کردم. بنابراین یک ابزار کوچک برای کمک به تولید مجموعه داده‌ها ساختم و تصمیم گرفتم آن را منبع باز کنم.

در نهایت به صفحه اول Hacker News رسید، [۶۰۰+ ستاره در GitHub دریافت کرد](https://github.com/metabase/dataset-generator)، کمک‌های یک استارتاپ پشتیبانی شده توسط YC دریافت کرد، و توسط خبرنامه TLDR انتخاب شد.

ما [تولیدکننده داده AI](../ai-data-generator.html) را به مرورگر آورده‌ایم تا جامعه بتواند فوراً مجموعه داده‌ها را تولید کند. دسترسی باز، نتایج فوری، و رایگان برای کاوش.

## چرا نه Kaggle یا ChatGPT

همانطور که در بالا ذکر شد، من احساس الهام زیادی از مجموعه داده‌های Kaggle نمی‌کردم و مدام به ChatGPT برای تولید داده جعلی روی می‌آوردم. برای چیزی می‌پرسیدم، نتایج را دریافت می‌کردم، تجسم می‌کردم، و مشکلات را می‌دیدم. نمودارهای میله‌ای همه با همان ارتفاع، روندهای رشد به اشتباه، تغییرات کافی نیست، و غیره. خودم را در حال تکرار آن چرخه یافتم و فکر کردم... شاید راه بهتری وجود دارد.

## آنچه واقعاً انجام دادم

از آنجایی که قبلاً promptها را می‌نوشتم و تجربه‌ای داشتم، فکر کردم، چرا آن فرآیند را به یک ابزار ساده تبدیل نکنم؟ بنابراین ورودی‌های prompt خود را به چند dropdown تبدیل کردم:

- نوع کسب‌وکار
- تعداد ردیف
- Schema تک جدول یا چند جدول
- محدوده تاریخ
- الگوی رشد
- تغییر و دانه‌بندی

"Preview Data" را می‌زنید و یک schema نمونه و ۱۰ ردیف داده دریافت می‌کنید. اگر خوب به نظر می‌رسد، می‌توانید یک مجموعه داده کامل را به عنوان CSV، SQL صادر کنید، یا Metabase را برای کاوش آن راه‌اندازی کنید.

## چگونه کار می‌کند

### مرحله ۱: نحوه کار تولید schema

وقتی "Preview Data" را می‌زنید، برنامه یک prompt را به ارائه‌دهنده LLM انتخابی شما (OpenAI، Anthropic، یا Google) از طریق LiteLLM ارسال می‌کند. آن برای نوع کسب‌وکار تنظیم شده است و یک spec JSON که جداول، فیلدها، روابط و منطق را تعریف می‌کند برمی‌گرداند. آن را به عنوان یک نقشه برای یک مجموعه داده باورپذیر در نظر بگیرید.

در ابتدا، من فقط schema را با ChatGPT تولید می‌کردم. اما پس از اینکه چند نفر در Hacker News ذکر کردند که عالی می‌شد اگر مدل‌ها را عوض کنیم، یک [PR](https://github.com/metabase/dataset-generator/pull/6) عالی دریافت کردیم که پشتیبانی LiteLLM را اضافه کرد، بنابراین اکنون می‌توانید به راحتی بین ارائه‌دهندگان جابه‌جا شوید. ممنون از کمک [@manueltarouca](https://github.com/manueltarouca)!

### مرحله ۲: ردیف‌ها به صورت محلی توسط DataFactory تولید می‌شوند

من در ابتدا LLM را برای تولید همه ردیف‌ها داشت، اما به شدت کند بود، حتی برای ۱۰۰ ردیف. سعی کردم کار را به دسته‌ها تقسیم کنم، اما این مسائل جدیدی ایجاد کرد. به عنوان مثال، یک شناسه کاربر ممکن است `001`، `002`، `003` در دسته اول و چیزی مانند `u099`، `u100` در دسته دوم باشد.

بنابراین یک قدم به عقب برداشتم و یک بحث عمیق با Cursor داشتم. به چیزی سریع، واقع‌بینانه‌تر و ارزان‌تر برای اجرا نیاز داشتم. پس از برخی رفت و برگشت، تصمیم گرفتم DataFactory را بسازم. آن داده را به صورت محلی با استفاده از [Faker.js](https://fakerjs.dev/) تولید می‌کند و schema + قوانین شبیه‌سازی از LLM را اعمال می‌کند. همچنین منطق مانند:

- ریزش SaaS واقع‌بینانه و برنامه‌های قیمت‌گذاری
- جمع‌فرعی‌های تجارت الکترونیک، مالیات و حمل و نقل که واقعاً جمع می‌شوند
- ادعاهای مراقبت‌های بهداشتی که پرداخت‌ها هرگز از هزینه‌های روش تجاوز نمی‌کنند

![پیش‌نمایش داده یک کسب‌وکار B2B SaaS](../images/ai-dataset-generator-example.png)

### مرحله ۳: عملکرد و هزینه

با تقسیم آن به دو فاز، ابزار سریع و به طرز شگفت‌آوری ارزان می‌ماند. تولید schema تنها بخشی است که به LLM برخورد می‌کند، و می‌خواستم مطمئن شوم که من را به ورشکستگی نمی‌کشاند. بنابراین ردیابی token را اضافه کردم و اعداد را با استفاده از یک فرمول فوق‌العاده پیشرفته اجرا کردم:

> total\_tokens × cost\_per\_token = ???

معلوم شد... خیلی بد نیست. بیشتر پیش‌نمایش‌ها با GPT-4o حدود ۰.۰۳–۰.۰۵ دلار می‌آیند. پس از آن، همه رایگان است. هیچ فراخوانی API اضافی، فقط داده خالص، ۱۰۰٪، درجه A.

### خودتان امتحان کنید + کمک کنید

هنوز زود است، بنابراین ضد گلوله نیست. اما اگر به مجموعه داده‌های سریع و واقع‌بینانه نیاز دارید، آن را امتحان کنید. همه چیز به صورت محلی با Docker اجرا می‌شود، و تنها چیزی که نیاز دارید یک کلید API از ارائه‌دهنده LLM مورد علاقه خود برای شروع است.

اگر می‌خواهید کمک کنید، فضای زیادی برای ورود وجود دارد:

- افزودن انواع کسب‌وکار جدید یا تنظیم موارد موجود
- بهبود منطق schema یا قوانین شبیه‌سازی
- افزودن ویژگی عالی خود اینجا

زیرساخت از قبل وجود دارد. اگر ایده‌ای دارید، دوست دارم کمک شما را برای پیش بردن آن داشته باشم. [ستاره بزنید، fork کنید، یا یک PR در GitHub باز کنید](https://github.com/metabase/dataset-generator).

<!-- blog-related-posts -->

## ممکن است از این مطالب نیز لذت ببرید

<!-- blog-related-post-1 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک فهرست ناقص از هزینه‌های کمتر واضح مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-2 -->

![The hidden costs of the data stack Image](../images/posts/hidden-costs-of-the-data-stack/hidden-costs.jpg)

### [هزینه‌های پنهان پشته داده](the-hidden-cost-of-data-stacks.html)

یک فهرست ناقص از هزینه‌های کمتر واضح مرتبط با نگهداری یک پشته داده، و برخی چیزهایی که می‌توانید انجام دهید تا آن هزینه‌ها را تحت کنترل نگه دارید.

*May 12, 2023 • Data explorations • The Metabase Team • 9 min read*

---

<!-- blog-related-post-3 -->

![Bus factor of top GitHub projects Image](../images/posts/bus-factor/bus-factor.jpg)

### [عامل اتوبوس پروژه‌های برتر GitHub](bus-factor.html)

عامل اتوبوس برای هزار مخزن برتر GitHub با بیشترین ستاره چیست؟

*Nov 14, 2022 • Data explorations • The Metabase Team • 4 min read*

---

<!-- blog-related-post-4 -->

![Bus factor of top GitHub projects Image](../images/posts/bus-factor/bus-factor.jpg)

### [عامل اتوبوس پروژه‌های برتر GitHub](bus-factor.html)

عامل اتوبوس برای هزار مخزن برتر GitHub با بیشترین ستاره چیست؟

*Nov 14, 2022 • Data explorations • The Metabase Team • 4 min read*

<!-- /blog-related-posts -->
