---
title: "ساخت یک اپلیکیشن CRUD پایه با actionها"
description: "نحوه تبدیل یک داشبورد به یک اپلیکیشن CRUD پایه با استفاده از actionها."
redirect_from:
  - /learn/metabase-basics/querying-and-dashboards/actions-crud
toc:
  - id: "build-a-basic-crud-app-with-actions"
    title: "ساخت یک اپلیکیشن CRUD پایه با actionها"
    level: 1
    href: "#build-a-basic-crud-app-with-actions"
  - id: "create-a-model"
    title: "ایجاد یک مدل"
    level: 2
    href: "#create-a-model"
  - id: "create-basic-actions"
    title: "ایجاد actionهای پایه"
    level: 2
    href: "#create-basic-actions"
  - id: "create-a-dashboard-and-add-the-accounts-model-to-it"
    title: "ایجاد یک داشبورد و افزودن مدل Accounts به آن"
    level: 2
    href: "#create-a-dashboard-and-add-the-accounts-model-to-it"
  - id: "add-a-filter-to-the-dashboard-and-connect-the-filter-to-the-model-card"
    title: "افزودن یک فیلتر به داشبورد و اتصال فیلتر به کارت مدل"
    level: 2
    href: "#add-a-filter-to-the-dashboard-and-connect-the-filter-to-the-model-card"
  - id: "add-the-three-basic-actions-to-dashboard"
    title: "افزودن سه action پایه به داشبورد"
    level: 2
    href: "#add-the-three-basic-actions-to-dashboard"
  - id: "change-the-update-and-delete-actions-to-get-values-from-the-id-parameter-set-by-the-dashboard-filter"
    title: "تغییر actionهای Update و Delete برای دریافت مقادیر از پارامتر ID تنظیم شده توسط فیلتر داشبورد"
    level: 2
    href: "#change-the-update-and-delete-actions-to-get-values-from-the-id-parameter-set-by-the-dashboard-filter"
  - id: "kick-the-tires-on-your-new-crud-app"
    title: "تست کردن اپلیکیشن CRUD جدید شما"
    level: 2
    href: "#kick-the-tires-on-your-new-crud-app"
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

# ساخت یک اپلیکیشن CRUD پایه با actionها

نحوه تبدیل یک داشبورد به یک اپلیکیشن CRUD پایه با استفاده از actionها.

از نحوه ساخت یک اپلیکیشن CRUD پایه در یک داشبورد راهنمایی می‌کنیم. یک اپلیکیشن داده کوچک می‌سازیم که اطلاعات حساب از پایگاه داده نمونه را نمایش می‌دهد که به شما اجازه ایجاد، خواندن، به‌روزرسانی، یا حذف رکوردها (CRUD) را می‌دهد.

در اینجا اپلیکیشن ما در عمل است:

![به‌روزرسانی یک رکورد در اپلیکیشن حساب پایه ما.](../../images/action-dashboard/account-app-in-action.gif)

مقدار منصفانه‌ای از تنظیمات اینجا وجود دارد، اما کار واقعی درگیر *چندین مرتبه* کمتر از نیاز به کد کردن یک اپلیکیشن داده به صورت دستی است.

## ایجاد یک مدل

با ایجاد یک مدل که فقط یک "wrapper" حول یک جدول داده خام است شروع می‌کنیم: در این مورد جدول Accounts.

Sidebar را باز کنید و بخش **Models** زیر **Data** نزدیک پایین را پیدا کنید. دکمه **+** را در بالا سمت چپ کلیک کنید. حالا **Notebook editor** را انتخاب کنید، سپس **Raw Data** > **Sample Database** > **Accounts**.

مدل را به عنوان "Accounts model" ذخیره کنید. این مدل را به عنوان یک جدول به اپلیکیشن Accounts خود اضافه می‌کنیم به عنوان راهی برای مرور رکوردها.

## ایجاد actionهای پایه

به مدل Accounts که تازه ایجاد کردید بروید و روی دکمه **Info** در بالا سمت راست کلیک کنید (آیکون **i** در دایره است)، سپس روی **Model details** کلیک کنید.

از صفحه جزئیات مدل Accounts، روی تب **Actions** کلیک کنید. در وسط صفحه، روی **Create basic actions** کلیک کنید، و متابیس actionهای Create، Update، و Delete را برای شما تولید می‌کند.

![Actionهای پایه تنظیم شده روی مدل Accounts.](../../images/action-dashboard/basic-actions.png)

اگر تب actionها را نمی‌بینید، یعنی adminهای شما [actionهای مدل را برای پایگاه داده شما فعال نکرده‌اند](../../../docs/latest/actions/introduction.html#enabling-actions-for-a-database). در حال حاضر، actionها فقط برای [برخی پایگاه‌های داده](../../../docs/latest/actions/introduction.html) در دسترس هستند. وقتی دسترسی به یک مدل در متابیس دارید، همچنین می‌توانید یک action سفارشی جدید از منوی **+ New**، یا از صفحه جزئیات مدل ایجاد کنید.

برای این راهنما، با [actionهای پایه](../../../docs/latest/actions/basic.html) که متابیس می‌تواند به طور خودکار برای شما تولید کند کار می‌کنیم: Create، Update، و Delete.

## ایجاد یک داشبورد و افزودن مدل Accounts به آن

به **+ New** > **Dashboard** بروید. داشبورد را "Account app" بنامید. این داشبورد جایی است که اضافه می‌کنیم:

- مدل
- widget فیلتر، و
- دکمه‌های action که به پایگاه داده می‌نویسند.

در حالی که در حالت ویرایش داشبورد هستید، روی دکمه **+** کلیک کنید تا "Accounts model" که ایجاد کردید را به داشبورد اضافه کنید.

## افزودن یک فیلتر به داشبورد و اتصال فیلتر به کارت مدل

بعد، در حالی که هنوز در حالت ویرایش داشبورد هستید، روی آیکون **filter** کلیک کنید و فیلتر **ID** را انتخاب کنید.

فیلتر را به کارت داشبورد با انتخاب فیلد **ID** از منوی dropdown کارت Model متصل کنید.

روی **Done** در sidebar تنظیمات Filter کلیک کنید.

![اتصال یک فیلتر ID به فیلد ID در کارت مدل.](../../images/action-dashboard/connect-filter-to-model-card.png)

اگر اینجا گیر کردید، [فیلترهای داشبورد](../../../docs/latest/dashboards/filters.html) را بررسی کنید.

## افزودن سه action پایه به داشبورد

هنوز در حالت ویرایش داشبورد، روی آیکون دکمه **Action** کلیک کنید تا یک action اضافه کنید (دکمه با نشانگر ماوس که روی یک جعبه کلیک می‌کند). روی دکمه action hover کنید و روی آیکون **چرخ‌دنده** کلیک کنید.

![افزودن یک action در حالت ویرایش داشبورد.](../../images/action-dashboard/add-action-button.png)

با افزودن action Create به داشبورد شروع می‌کنیم:

- **Button text** را "Create" برچسب بزنید
- **Button variant** را روی primary تنظیم شده بگذارید
- سپس **Pick an action** از Action Library: به دنبال مدل Accounts که ایجاد کردید بگردید، و action Create را انتخاب کنید.

![اتصال یک فیلتر ID به فیلد ID در کارت مدل.](../../images/action-dashboard/select-an-action.png)

همه فیلدها را روی "Ask the user" تنظیم شده بگذارید.

## تغییر actionهای Update و Delete برای دریافت مقادیر از پارامتر ID تنظیم شده توسط فیلتر داشبورد

دکمه‌های action برای Update و Delete را اضافه کنید (و رنگ‌های دکمه مختلف انتخاب کنید، هر کدام که دوست دارید).

سپس، actionهای Update و Delete را برای اجرا با استفاده از ID از فیلتر ID روی داشبورد تنظیم کنید.

![تنظیم فیلد ID برای دریافت مقدار از فیلتر ID روی داشبورد.](../../images/action-dashboard/get-id-from-filter.png)

اگر از قبل دکمه action را به داشبورد اضافه کرده‌اید، می‌توانید، در حالی که در حالت داشبورد هستید، روی دکمه‌ای که می‌خواهید تغییر دهید hover کنید، و روی آیکون **چرخ‌دنده** دکمه کلیک کنید. برای تغییر اینکه دکمه باید مقادیر خود را از کجا دریافت کند، روی **Change action** کلیک کنید.

وقتی همه دکمه‌های شما اضافه شدند، آزادانه آن‌ها را هر طور که دوست دارید مرتب کنید، سپس تغییرات خود را **Save** کنید.

## تست کردن اپلیکیشن CRUD جدید شما

یک شماره ID را در فیلتر ID وارد کنید، سپس روی دکمه **Update** کلیک کنید. یک مقدار را در یکی (یا بیشتر) از فیلدها تغییر دهید، سپس دکمه **Update** در پایین فرم را بزنید تا تغییرات خود را ارسال کنید. توجه کنید که پایگاه داده نمونه فعلی فاقد IDهای تولید شده سریالی است، پس اگر سعی می‌کنید یک رکورد جدید ایجاد کنید، نیاز به وارد کردن یک ID که از قبل در جدول accounts زیربنایی استفاده نشده است دارید.

در این نقطه، باید یک "اپلیکیشن" کارکردی داشته باشید که می‌تواند رکوردها را در جدول accounts ایجاد، بخواند، به‌روزرسانی، و حذف کند.

به ما بگویید چه نوع اپلیکیشن‌هایی با استفاده از actionها می‌سازید. موفق باشید!

## مطالعه بیشتر

- [مقدمه‌ای بر Actionها](../../../docs/latest/actions/start.html)
- [Actionهای پایه](../../../docs/latest/actions/basic.html)
- [Actionهای سفارشی](../../../docs/latest/actions/custom.html)
- [Actionها روی داشبوردها](../../../docs/latest/dashboards/actions.html)

[
      
        

      
      
        
        

      
    ](data-browser.html)
[
      
        
        

      
      
        
        

      
    ](mongodb.html)
