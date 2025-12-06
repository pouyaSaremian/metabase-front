---
title: "مرجع داده"
description: "ابزارهایی که متابیس برای یادگیری درباره داده شما ارائه می‌دهد را کشف کنید. این ابزارها شامل یک فرهنگ لغت داده قابل سفارشی، و همچنین ابزارهای ویرایش برای گردآوری متادیتای شما هستند."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/data-browser
  - /learn/basics/questions/data-browser
  - /learn/getting-started/data-browser
toc:
  - id: "data-reference"
    title: "مرجع داده"
    level: 1
    href: "#data-reference"
  - id: "browse-data"
    title: "مرور داده"
    level: 2
    href: "#browse-data"
  - id: "lightning-bolts-create-x-rays"
    title: "آذرخش‌ها X-ray ایجاد می‌کنند"
    level: 2
    href: "#lightning-bolts-create-x-rays"
  - id: "data-reference-pages"
    title: "صفحه‌های مرجع داده"
    level: 2
    href: "#data-reference-pages"
  - id: "access-metabase-admin"
    title: "دسترسی به Admin متابیس"
    level: 2
    href: "#access-metabase-admin"
  - id: "the-databases-page"
    title: "صفحه پایگاه‌های داده"
    level: 2
    href: "#the-databases-page"
  - id: "editing-metadata-in-table-metadata"
    title: "ویرایش متادیتا در Table Metadata"
    level: 2
    href: "#editing-metadata-in-table-metadata"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "پرس‌وجو و داشبوردها"
    href: "index.html"
---

# مرجع داده

ابزارهایی که متابیس برای یادگیری درباره داده شما ارائه می‌دهد را کشف کنید. این ابزارها شامل یک فرهنگ لغت داده قابل سفارشی، و همچنین ابزارهای ویرایش برای گردآوری متادیتای شما هستند.

می‌توانید از **Data Browser** برای کاوش جداول و فیلدها در پایگاه‌های داده متصل به متابیس خود استفاده کنید. Adminها همچنین می‌توانند داده را گردآوری کنند، یا با ویرایش مستقیم بخش مرجع داده، یا در تنظیمات admin.

## مرور داده

برای کاوش همه پایگاه‌های داده متصل به متابیس خود، روی **Browse Data** از sidebar ناوبری سمت چپ کلیک کنید.

وقتی روی جداول hover می‌کنید، آیکون‌ها ظاهر می‌شوند:

- آیکون **آذرخش زرد** یک [X-ray](../../../glossary/x-ray.html) ایجاد می‌کند.
- آیکون **کتاب خاکستری** شما را به [صفحه مرجع داده](#data-reference-pages) جدول می‌برد.

برای مشاهده ردیف‌ها در جدول، روی نام جدول کلیک کنید.

![ناوبری از طریق صفحه مرور داده برای دسترسی آسان به اطلاعات.](../../images/exploring-data-with-metabase-data-browser/browse-data.png)

## آذرخش‌ها X-ray ایجاد می‌کنند

متابیس می‌تواند یک جدول را [X-ray](../../../docs/latest/exploration-and-organization/x-rays.html) کند، که به طور خودکار مجموعه‌ای از سؤال‌ها تولید می‌کند که می‌توانید به عنوان یک داشبورد ذخیره کنید. در اینجا یک X-ray که متابیس برای جدول `People` ایجاد کرده است.

![مثال یک X-ray بر اساس جدول people.](../../images/exploring-data-with-metabase-data-browser/x-ray-examples.png)

## صفحه‌های مرجع داده

برای بازدید از بخش مرجع داده، روی **Browse data** در نوار nav سمت چپ کلیک کنید، یک پایگاه داده انتخاب کنید، سپس روی **Learn more about our data** کلیک کنید، یا روی یک جدول hover کنید و روی **آیکون کتاب** کلیک کنید.

صفحه‌های مرجع شامل نام‌ها و توضیحات جداول، و همچنین اطلاعات درباره [segmentها](../../../glossary/segment.html) و [معیارها](../../../glossary/metric.html) هستند. Segmentها فیلترهایی هستند که می‌توانید به راحتی در query builder به آن‌ها ارجاع دهید. معیارها راهی آسان برای ارجاع به یک عدد محاسبه شده (به عنوان مثال، درآمد) هستند.

![صفحه فرود برای بخش مرجع داده. سه تب در سمت چپ که می‌گویند Segments، Metrics، و Our Data.](../../images/exploring-data-with-metabase-data-browser/data-ref-landing.png)

بیایید به یک پایگاه داده بپردازیم. وقتی روی پایگاه داده نمونه خود کلیک می‌کنیم، دو تب در سمت چپ صفحه ظاهر می‌شوند.

تب **Details** شامل متادیتا درباره این پایگاه داده است. تب شامل سه بخش است که می‌توانید برای ارائه اطلاعات درباره این مجموعه داده به کاربران خود استفاده کنید:

- توضیحات عمومی
- چرا این پایگاه داده جالب است
- چیزهایی که باید درباره این پایگاه داده آگاه باشید

![صفحه مرجع داده برای پایگاه داده نمونه.](../../images/exploring-data-with-metabase-data-browser/data-reference.png)

Adminها گزینه کلیک روی دکمه **Edit** در گوشه بالا سمت راست برای به‌روزرسانی این اطلاعات را دارند ([که باید انجام دهند](../../sql/working-with-sql/sql-best-practices.html)).

تب **Tables** نام‌ها و توضیحات جداول را نمایش می‌دهد. می‌توانید روی یک جدول کلیک کنید تا یک تب **Details** مشاهده کنید، و همچنین تب **Fields in this table** را مشاهده کنید. می‌توانید فهرستی از **Questions about this table** مشاهده کنید (به شرطی که [مجوز](../../../docs/latest/permissions/introduction.html) مشاهده آن سؤال‌ها را داشته باشید)، و گزینه ایجاد یک X-ray از جدول را دارید.

تب Details سؤال‌های مفیدی برای پرسیدن از جدول در پایین صفحه پیشنهاد می‌کند.

![تب جزئیات جدول Accounts.](../../images/exploring-data-with-metabase-data-browser/data-ref-accounts-description.png)

Adminها می‌توانند نام‌ها و انواع فیلدها را در تب **Fields in this table** ویرایش کنند.

![تب فیلدها از جدول Accounts از یک admin](../../images/exploring-data-with-metabase-data-browser/data-ref-accounts-fields.png)

## دسترسی به Admin متابیس

برای دسترسی به Admin متابیس، به sidebar ناوبری بروید، روی آیکون **چرخ‌دنده** در پایین کلیک کنید، و **Admin settings** را انتخاب کنید.

در Admin panel می‌توانید پایگاه‌های داده را اضافه، به‌روزرسانی، و حذف کنید، و همچنین [متادیتا](../../../docs/latest/data-modeling/metadata-editing.html) درباره داده خود را ویرایش کنید.

## صفحه پایگاه‌های داده

صفحه **Databases** در **Admin Panel** اطلاعات اتصال درباره پایگاه‌های داده شما را نمایش می‌دهد:

- نوع پایگاه داده
- نحوه اتصال متابیس به instance متابیس شما
- تنظیمات sync

متابیس یک sync سبک هر ساعت انجام می‌دهد تا داده درون اپلیکیشن شما به‌روز بماند، اما می‌توانید از این صفحه برای [sync دستی پایگاه داده خود](../../../docs/latest/databases/sync-scan.html#choose-when-syncs-and-scans-happen)، مدیریت فرکانس sync، و با برخی پایگاه‌های داده، تعیین اینکه کدام schemaها sync شوند استفاده کنید.

## ویرایش متادیتا در Table Metadata

انتخاب نام‌های واضح و افزودن توضیحات به مردم کمک می‌کند داده‌ای که به دنبال آن هستند را پیدا کنند، و زمینه مهمی برای تحلیل ارائه می‌دهد. متابیس می‌تواند به طور خودکار سعی کند نام‌های قابل خواندن انسان از جداول و ستون‌های شما برای شما ایجاد کند، اما اگر متابیس از هدف بگذرد، همیشه می‌توانید ویژگی [Friendly Table and Field Names](../../../docs/latest/configuring-metabase/settings.html#friendly-table-and-field-names) را غیرفعال کنید.

Adminها می‌توانند تغییراتی در متادیتای شما در متابیس ایجاد کنند، با کلیک روی آیکون **چرخ‌دنده** در بالا سمت راست و رفتن به **Admin settings** > **Table metadata**. تب Table metadata گزینه‌هایی برای [ویرایش متادیتا](../../../docs/latest/data-modeling/metadata-editing.html) برای پایگاه داده، جداول، و ستون‌ها را نمایش می‌دهد. به عنوان مثال، می‌توانید نام، دید، نوع، و توضیحات یک ستون را ویرایش کنید. همچنین می‌توانید foreign keyها را remap کنید تا نام‌های قابل خواندن انسان به ستون‌های foreign key بدهید!

برخی نکات برای آسان‌تر کردن زندگی برای مردم:

- وقتی نام ستون‌ها گیج‌کننده هستند، می‌توانید نام آن‌ها را تغییر دهید یا یک توضیح اضافه کنید.
- می‌توانید ستون‌های استفاده نشده را مخفی کنید تا جداول راحت‌تر هضم شوند.
- می‌توانید رابط فیلتر ترجیحی خود را از سه گزینه (جعبه جستجو، فهرست مقادیر، یا جعبه ورودی ساده) انتخاب کنید.

شاید *مهم‌ترین* قطعه متادیتا که می‌توانید تغییر دهید [نوع فیلد](../../../docs/latest/data-modeling/semantic-types.html) است. فهرست طولانی‌ای از [انواع فیلد](../../../docs/latest/data-modeling/semantic-types.html) برای انتخاب وجود دارد. انتخاب نوع صحیح برای یک ستون می‌تواند اطلاعات را در چندین جدول متصل کند، و زمینه به متابیس بدهد تا بتواند تجسم‌های مناسب برای داده شما را انتخاب کند. به عنوان مثال، وقتی ستون‌های latitude و longitude را در جدول خود به طور دقیق شناسایی کردید، قادر به استفاده از [تجسم‌های نقشه](../../../docs/v0.54/questions/visualizations/map.html) خواهید بود.

## مطالعه بیشتر

- [مدل‌ها](../getting-started/models.html)

[
      
        

      
      
        
        

      
    ](time-series.html)
[
      
        
        

      
      
        
        

      
    ](actions-crud.html)
