---
title: "آموزش: استفاده از متابیس با MongoDB"
description: "داده خود را در MongoDB با متابیس تجسم و کاوش کنید. پرس‌وجوهای بومی MongoDB را اجرا کنید و داده غیرجدولی را تحلیل کنید."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/mongodb
toc:
  - id: "tutorial-using-metabase-with-mongodb"
    title: "آموزش: استفاده از متابیس با MongoDB"
    level: 1
    href: "#tutorial-using-metabase-with-mongodb"
  - id: "step-1-create-a-mongodb-atlas-cluster"
    title: "مرحله 1: ایجاد یک cluster MongoDB Atlas"
    level: 2
    href: "#step-1-create-a-mongodb-atlas-cluster"
  - id: "step-2-set-up-metabase"
    title: "مرحله 2: تنظیم متابیس"
    level: 2
    href: "#step-2-set-up-metabase"
  - id: "step-3-configure-your-atlas-cluster-to-allow-connections-from-your-metabase"
    title: "مرحله 3: پیکربندی cluster Atlas شما برای اجازه اتصال از متابیس شما"
    level: 2
    href: "#step-3-configure-your-atlas-cluster-to-allow-connections-from-your-metabase"
  - id: "step-4-get-the-mongodb-connection-information"
    title: "مرحله 4: دریافت اطلاعات اتصال MongoDB"
    level: 2
    href: "#step-4-get-the-mongodb-connection-information"
  - id: "step-5-connect-metabase-to-mongodb"
    title: "مرحله 5: اتصال متابیس به MongoDB"
    level: 2
    href: "#step-5-connect-metabase-to-mongodb"
  - id: "step-5-see-your-data"
    title: "مرحله 5: مشاهده داده خود"
    level: 2
    href: "#step-5-see-your-data"
  - id: "step-6-build-a-query-without-writing-code"
    title: "مرحله 6: ساخت یک پرس‌وجو بدون نوشتن کد"
    level: 2
    href: "#step-6-build-a-query-without-writing-code"
  - id: "step-7-create-a-chart"
    title: "مرحله 7: ایجاد یک نمودار"
    level: 2
    href: "#step-7-create-a-chart"
  - id: "step-8-drill-through-the-data"
    title: "مرحله 8: Drill through داده"
    level: 2
    href: "#step-8-drill-through-the-data"
  - id: "step-9-querying-with-the-mongodb-query-language"
    title: "مرحله 9: پرس‌وجو با زبان پرس‌وجوی MongoDB"
    level: 2
    href: "#step-9-querying-with-the-mongodb-query-language"
  - id: "next-steps"
    title: "مراحل بعدی"
    level: 2
    href: "#next-steps"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "index.html"
---

# آموزش: استفاده از متابیس با MongoDB

داده خود را در MongoDB با متابیس تجسم و کاوش کنید. پرس‌وجوهای بومی MongoDB را اجرا کنید و داده غیرجدولی را تحلیل کنید.

برای این آموزش، از یک cluster MongoDB Atlas رایگان و یک trial رایگان Metabase Cloud برای ساخت یک داشبورد کاوش داده نمونه MongoDB استفاده می‌کنیم.

![داشبورد بهتر](../../images/mongodb/better-dashboard.png)

## مرحله 1: ایجاد یک cluster MongoDB Atlas

1. به [MongoDB Atlas](https://cloud.mongodb.com/) بروید و یک حساب ایجاد کنید.
2. یک cluster M0 رایگان ایجاد کنید. checkbox "Preload sample dataset" را علامت بزنید تا داده نمونه در cluster شما load شود – با آن در این آموزش کار می‌کنیم. ![رشته اتصال MongoDB](../../images/mongodb/create-cluster.png)

اگر پس از ایجاد cluster یک popup اتصال cluster دیدید، می‌توانید برای حالا آن را ببندید. در حالی که cluster در حال provision شدن است، بیایید یک instance Metabase Cloud ایجاد کنیم که به cluster متصل می‌شود.

## مرحله 2: تنظیم متابیس

1. از [https://www.metabase.com/cloud](../../../cloud/index.html) شروع کنید. از شما خواسته می‌شود یک حساب Metabase Store ایجاد کنید.
2. پلن Starter را انتخاب کنید. نگران نباشید: هر پلنی که انتخاب کنید، یک trial رایگان 14 روزه دریافت می‌کنید، و همیشه می‌توانید پلن خود را بعداً تغییر یا لغو کنید.
3. alias و region برای متابیس خود را انتخاب کنید: **Alias**: URL که برای ورود به متابیس خود استفاده می‌کنید. **Region** منطقه‌ای است که متابیس شما در آن host می‌شود ([می‌توانید بعداً آن را تغییر دهید](../../../docs/latest/cloud/change-region.html)).
4. حدود 2 دقیقه طول می‌کشد تا متابیس شما تنظیم شود. (در همین حال، می‌توانید [دسترسی شبکه را برای cluster Atlas خود پیکربندی کنید](#step-3-configure-your-atlas-cluster-to-allow-connections-from-your-metabase)). وقتی متابیس شما آماده شد، از شما خواسته می‌شود یک حساب جداگانه برای این متابیس جدید ایجاد کنید (جدا از حساب Metabase Cloud store شما).

می‌توانید جزئیات پایگاه داده خود را در صفحه تنظیم متابیس وارد کنید، اما بیایید آن مرحله را برای حالا رد کنیم و بعداً یک پایگاه داده اضافه کنیم.

## مرحله 3: پیکربندی cluster Atlas شما برای اجازه اتصال از متابیس شما

برای مطمئن شدن از اینکه متابیس می‌تواند داده در cluster شما را بخواند، نیاز به اجازه دسترسی از آدرس‌های IP استفاده شده توسط متابیس خود دارید.

در تنظیمات cluster Atlas خود، به **Network access** بروید و [آدرس‌های IP Metabase Cloud](../../../docs/latest/cloud/ip-addresses-to-whitelist.html) مطابق با منطقه‌ای که انتخاب کردید را اضافه کنید.

![فهرست مجاز IP](../../images/mongodb/ip-allowlist.png)

## مرحله 4: دریافت اطلاعات اتصال MongoDB

برای اتصال متابیس به MongoDB، نیاز به دریافت یا رشته اتصال یا پارامترهای اتصال دارید. برای یک پایگاه داده در یک cluster Atlas، گزینه رشته اتصال راحت‌تر است.

1. در رابط cluster Atlas خود، روی **Connect** کلیک کنید و **Drivers** را انتخاب کنید
2. رشته اتصال را در **"Add your connection string in your application code"** پیدا کنید ![رشته اتصال MongoDB](../../images/mongodb/connection-string.png) این اتصال برای کل cluster Atlas خواهد بود، اما متابیس نیاز به یک پایگاه داده خاص برای اتصال دارد.
3. رشته اتصال را ویرایش کنید تا نام پایگاه داده را بعد از `/` اضافه کنید: ``` mongodb+srv://metabot:metapass@metabase-magic.a5ej7.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=metabase-magic ```

اینجا از پایگاه داده `sample_mflix` از پیش load شده در cluster Atlas استفاده کردیم.

## مرحله 5: اتصال متابیس به MongoDB

می‌توانید متابیس را به MongoDB خود در حالی که متابیس خود را تنظیم می‌کنید متصل کنید، یا پایگاه داده خود را پس از initialize شدن متابیس با رفتن به **Admin Settings → Databases** متصل کنید.

در رابط اتصال، روی "Paste the connection string" کلیک کنید و رشته اتصال را paste کنید (یادتان باشد placeholder `<password>` را با رمز خود جایگزین کنید!):

![رابط متابیس](../../images/mongodb/metabase-connection-interface.png)

اگر مشکلی در اتصال دارید، [مستندات اتصال MongoDB](../../../docs/latest/databases/connections/mongodb.html) و [راهنمای عیب‌یابی اتصال](../../../docs/latest/troubleshooting-guide/db-connection.html) ما را بررسی کنید.

## مرحله 5: مشاهده داده خود

وقتی متابیس به MongoDB شما متصل شد، می‌توانید شروع به کاوش داده خود در متابیس کنید. اگر هنوز در حالت Admin هستید، روی **Exit Admin** در گوشه بالا سمت راست کلیک کنید.

در sidebar ناوبری سمت چپ، به Browse → Databases بروید و پایگاه داده تازه اضافه شده و collectionها در آن را پیدا کنید. اگر به پایگاه داده `sample_mflix` متصل شدید، باید collectionهایی مثل Movies، Theaters، Comments، و سایرین را ببینید.

![پایگاه داده Movies](../../images/mongodb/browse-databases.png)

روی یک collection کلیک کنید تا محتوای آن را ببینید:

![مشاهده جداول](../../images/mongodb/view-table.png)

متابیس اسناد MongoDB را در یک فرمت جدولی ارائه می‌دهد. از این view، می‌توانید شروع به کاوش داده کنید. به عنوان مثال، سعی کنید روی یک header کلیک کنید و داده را فیلتر کنید:

![فیلتر بر اساس header](../../images/mongodb/column-header.png)

برای کار با اسناد پیچیده‌تر، می‌توانید از query builder متابیس استفاده کنید.

## مرحله 6: ساخت یک پرس‌وجو بدون نوشتن کد

متابیس با یک query builder گرافیکی می‌آید که به شما اجازه کاوش داده خود بدون نوشتن هیچ کدی را می‌دهد.

برای شروع با query builder، روی دکمه "+ New" در گوشه بالا سمت راست کلیک کنید و "Question" را انتخاب کنید. "سؤال‌ها" در متابیس چیزی است که پرس‌وجوها و تجسم آن‌ها را می‌نامیم.

متابیس ساختار JSON داده MongoDB را parse می‌کند و به شما اجازه فیلتر، خلاصه، join، و مرتب‌سازی روی فیلدهای فردی را می‌دهد.

به عنوان مثال، می‌توانیم از داده فیلم نمونه از پیش load شده در cluster Atlas استفاده کنیم تا ببینیم آیا مردم فیلم‌های جدیدتر را پایین‌تر از قدیمی‌ها رتبه‌بندی می‌کنند. collection `Movies` شامل داده IMDB است که شبیه این است:

```json
{
  "rating": 7.4,
  "votes": 9847,
  "id": 439
}
```

بیایید یک پرس‌وجو برای محاسبه میانگین رتبه‌بندی فیلم IMBD برای هر سال در 50 سال گذشته بسازیم:

![سؤال query builder](../../images/mongodb/qb-question.png)

برای بیشتر درباره query builder، آموزش گام به گام ما درباره نحوه [پرسیدن یک سؤال در query builder](../getting-started/ask-a-question.html) را بررسی کنید.

توجه کنید که متابیس زیرفیلدها در فیلد "IMDB" را تشخیص می‌دهد و به شما اجازه ایجاد خلاصه بر اساس آن زیرفیلدها را می‌دهد.

برای پیش‌نمایش نتایج در یک جدول، روی دکمه "play" کنار بلوک Summarize کلیک کنید.

## مرحله 7: ایجاد یک نمودار

برای ایجاد یک نمودار، روی **Visualize** کلیک کنید.

![سری زمانی رتبه‌بندی بر اساس سال](../../images/mongodb/first-chart.png)

برای سفارشی کردن نمودار، روی آیکون تنظیمات **چرخ‌دنده** در پایین سمت چپ کلیک کنید. به عنوان مثال، برای افزودن یک خط روند، به تب "Display" تغییر دهید و "Trend line" را toggle کنید.

برای تأکید بر تغییر در رتبه‌بندی‌ها، می‌توانید محدوده محور y را در تب "Axes" ویرایش کنید.

![تنظیمات نمودار](../../images/mongodb/chart-settings.png)

به نظر می‌رسد فیلم‌های قدیمی‌تر واقعاً رتبه‌بندی‌های بهتری دریافت می‌کنند!

وقتی از نمودار خود راضی شدید، آن را با کلیک روی دکمه "Save" در گوشه بالا سمت راست در یک مجموعه ذخیره کنید. به این ترتیب قادر به بازدید مجدد از آن بعداً، به اشتراک‌گذاری آن، و افزودن آن به داشبوردها خواهید بود.

## مرحله 8: Drill through داده

نمودارهای ساخته شده با query builder تعاملی هستند: می‌توانید داده را اصلاح یا drill through کنید. موارد زیر را امتحان کنید:

- کلیک و drag کنید تا یک بخش از سری زمانی را برای zoom انتخاب کنید؛ متابیس محدوده تاریخ را محدود می‌کند.
- روی یک نقطه داده کلیک کنید و "See these movies" را انتخاب کنید تا فیلم‌های فردی از یک سال خاص و رتبه‌بندی آن‌ها را ببینید.
- روی یک نقطه داده کلیک کنید و "Filter by this data" را انتخاب کنید تا همه فیلم‌ها با رتبه‌بندی بالاتر را دریافت کنید.

## مرحله 9: پرس‌وجو با زبان پرس‌وجوی MongoDB

متابیس هر سؤالی که در query builder ایجاد می‌کنید را به یک پرس‌وجوی MongoDB تبدیل می‌کند. می‌توانید پرس‌وجویی که تولید می‌کند را در query builder با کلیک روی دکمه "View the native query" در گوشه بالا سمت راست ببینید، و هر سؤال query builder را به یک پرس‌وجوی MongoDB تبدیل کنید.

![پرس‌وجوی بومی در QB](../../images/mongodb/qb-native-query.png)

همچنین می‌توانید پرس‌وجوهای بومی MongoDB را از ابتدا ایجاد کنید: روی "+ New → Native query" در بالا سمت چپ کلیک کنید، پایگاه داده، collection خود را انتخاب کنید، و شروع به کد کردن کنید.

به عنوان مثال، collection فیلم نمونه داده درباره ژانرهای فیلم در آرایه `Genres` دارد. می‌توانید آرایه را unwind کنید و میانگین runtime فیلم را بر اساس ژانر محاسبه کنید:

```mongoql
[
  { $unwind: "$genres" },
  {
    $group: {
      _id: {
        genres: "$genres",
      },
      avg: {
        $avg: "$runtime",
      },
    },
  },
  {
    $project: {
      _id: false,
      genre: "$_id.genres",
      avg: true,
    },
  },
];
```

پرس‌وجو را اجرا کنید و نتیجه را با کلیک روی دکمه "Visualization" در پایین سمت چپ تجسم کنید. به عنوان مثال، می‌توانید نتایج را به عنوان یک نمودار میله‌ای تجسم کنید:

![نمودار پرس‌وجوی بومی](../../images/mongodb/native-query.png)

یادتان باشد سؤال خود را ذخیره کنید تا بتوانید آن را به یک داشبورد اضافه کنید!

## مراحل بعدی

در اینجا برخی چیزهایی که می‌توانید بعداً در متابیس امتحان کنید:

- [ایجاد یک داشبورد](../../../docs/latest/dashboards/introduction.html):
- [ایجاد مدل‌ها](../getting-started/models.html)
- [تنظیم مجوزها](../administration/permissions/data-permissions.html)
- [جاسازی متابیس](../../../docs/latest/embedding/introduction.html)

[
      
        

      
      
        
        

      
    ](actions-crud.html)
