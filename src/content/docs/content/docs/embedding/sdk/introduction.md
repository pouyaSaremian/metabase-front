---
title: SDK تجزیه و تحلیل تعبیه‌شده
redirect_from:
  - /docs/latest/embedding/sdk
---

# SDK تجزیه و تحلیل تعبیه‌شده

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}

با SDK تجزیه و تحلیل تعبیه‌شده، می‌توانید اجزای جداگانه متابیس را با React جاسازی کنید (مانند نمودارهای مستقل، داشبوردها، سازنده پرس‌وجو و موارد بیشتر). می‌توانید دسترسی و تعامل را برای هر جزء مدیریت کنید و سفارشی‌سازی پیشرفته برای استایل‌دهی یکپارچه دارید.

## برنامه‌های نمونه ساخته شده با SDK تجزیه و تحلیل تعبیه‌شده

برای اینکه ایده‌ای از آنچه با SDK ممکن است به شما بدهیم، سایت‌های نمونه را در [metaba.se/sdk-demo](https://metaba.se/sdk-demo) گردآوری کرده‌ایم. بین وب‌سایت‌های فروشگاه مختلف پیمایش کنید. آن‌ها را بررسی کنید و در بخش‌های محصولات و تجزیه و تحلیل آن‌ها، و همچنین گزینه‌های New Question و New Dashboard جستجو کنید.

![Pug and play example app built with embedded analytics SDK](../images/pug-and-play.png)

در اینجا [کد منبع Shoppy](https://github.com/metabase/shoppy) است.

## پیش‌نیازهای SDK تجزیه و تحلیل تعبیه‌شده

- برنامه React با استفاده از React 18 یا React 19.
- Nodejs 20.x یا بالاتر.
- نسخه متابیس 1.52 یا بالاتر.

## شروع‌های سریع

- [شروع سریع](./quickstart.md) (اگر متابیس و یک برنامه دارید)
- [شروع سریع CLI](./quickstart-cli.md) (اگر یک برنامه دارید، اما متابیس ندارید)
- [شروع سریع با برنامه نمونه React](./quickstart-with-sample-app.md) (اگر هیچ کدام را ندارید)

## نصب

برای استفاده از SDK، باید SDK را در متابیس فعال کنید و SDK را در برنامه React خود نصب کنید.

### فعال کردن SDK در متابیس

۱. SDK تجزیه و تحلیل تعبیه‌شده را با رفتن به **Admin settings > Embedding > Modular** فعال کنید.
۲. **SDK for React** را روشن کنید.
۳. در **اشتراک‌گذاری منابع مبدأ متقابل (CORS)**، مبدأهای وب‌سایت یا برنامه خود که می‌خواهید جاسازی SDK را در آن‌ها مجاز کنید را وارد کنید، با فاصله جدا شده. Localhost به طور خودکار شامل می‌شود.

### نصب SDK در برنامه React شما

می‌توانید SDK تجزیه و تحلیل تعبیه‌شده برای React را از طریق npm نصب کنید. مطمئن شوید که از dist-tag که با نسخه متابیس شما مطابقت دارد استفاده کنید، مثال: 56-stable برای متابیس 56:

```bash
npm install @metabase/embedding-sdk-react@56-stable
```

یا با Yarn:

```bash
yarn add @metabase/embedding-sdk-react@56-stable
```

### حل عدم تطابق نسخه `@types/react`

در سناریوهای نادر، Embedding SDK و برنامه شما ممکن است از نسخه‌های اصلی مختلف `@types/react` استفاده کنند، که باعث تعارض‌های TypeScript می‌شود.

برای اعمال یک نسخه واحد `@types/react` در همه وابستگی‌ها، یک بخش `overrides` (npm) یا `resolutions` (Yarn) به `package.json` خود اضافه کنید و نسخه `@types/react` که برنامه شما استفاده می‌کند را مشخص کنید.

#### تنظیم نسخه @types/react با npm

```json
{
  "overrides": {
    "@types/react": "..."
  }
}
```

#### تنظیم نسخه @types/react با Yarn

```json
{
  "resolutions": {
    "@types/react": "..."
  }
}
```

## معماری

شروع با متابیس 57، SDK شامل دو بخش است:

- **بسته SDK** – بسته npm `@metabase/embedding-sdk-react` یک کتابخانه bootstrapper سبک است. هدف اصلی آن بارگذاری و اجرای کد SDK Bundle اصلی است.
- **SDK Bundle** – کد کامل SDK، مستقیماً از نمونه متابیس self-hosted شما یا Metabase Cloud سرو می‌شود، و بخشی از متابیس است. این اطمینان می‌دهد که کد SDK اصلی همیشه با نمونه متابیس مربوطه سازگار است.

## توسعه با SDK تجزیه و تحلیل تعبیه‌شده

با یکی از شروع‌های سریع شروع کنید، سپس این صفحات را برای اطلاعات بیشتر در مورد اجزا، تم‌دهی و موارد بیشتر ببینید.

- [احراز هویت](./authentication.md)
- [سؤال‌ها](./questions.md)
- [چت هوش مصنوعی](./ai-chat.md)
- [داشبوردها](./dashboards.md)
- [ظاهر](./appearance.md)
- [مجموعه‌ها](./collections.md)
- [پلاگین‌ها](./plugins.md)
- [پیکربندی](./config.md)
- [نسخه‌گذاری](./version.md)
- [یادداشت‌هایی در مورد Next.js](./next-js.md)

## کد منبع SDK تجزیه و تحلیل تعبیه‌شده

می‌توانید [کد منبع SDK تجزیه و تحلیل تعبیه‌شده را در مخزن متابیس](https://github.com/metabase/metabase/tree/master/enterprise/frontend/src/embedding-sdk) پیدا کنید.

## تغییرات

مشاهده changelog SDK:

- [56-stable](https://github.com/metabase/metabase/blob/release-x.56.x/enterprise/frontend/src/embedding-sdk-bundle/CHANGELOG.md)
- [55-stable](https://github.com/metabase/metabase/blob/release-x.55.x/enterprise/frontend/src/embedding-sdk-bundle/CHANGELOG.md)
- [54-stable](https://github.com/metabase/metabase/blob/release-x.54.x/enterprise/frontend/src/embedding-sdk/CHANGELOG.md)
- [53-stable](https://github.com/metabase/metabase/blob/release-x.53.x/enterprise/frontend/src/embedding-sdk/CHANGELOG.md)
- [52-stable](https://github.com/metabase/metabase/blob/release-x.52.x/enterprise/frontend/src/embedding-sdk/CHANGELOG.md)

## SDK تجزیه و تحلیل تعبیه‌شده در npm

SDK تجزیه و تحلیل تعبیه‌شده متابیس را در npm بررسی کنید: [metaba.se/sdk-npm](https://metaba.se/sdk-npm).

## محدودیت‌های SDK

SDK از موارد زیر پشتیبانی نمی‌کند:

- محتوای تأیید شده
- مجموعه‌های رسمی
- اشتراک‌ها
- هشدارها
- رندر سمت سرور (SSR)

محدودیت‌های دیگر:

- چندین داشبورد _تعاملی_ در همان صفحه برنامه. اگر نیاز دارید چندین داشبورد را در همان صفحه برنامه جاسازی کنید، می‌توانید داشبوردهای ایستا را جاسازی کنید.
- اگر Leaflet 1.x را به عنوان یک وابستگی در برنامه خود دارید، ممکن است با مشکلات سازگاری مواجه شوید. می‌توانید به جای آن از Leaflet 2.x استفاده کنید.

## مسائل، درخواست‌های ویژگی و پشتیبانی

[Bugها](https://github.com/metabase/metabase/issues/?q=is%3Aissue%20state%3Aopen%20label%3AType%3ABug%20label%3AEmbedding%2FSDK) و [درخواست‌های ویژگی](https://github.com/metabase/metabase/issues/?q=is%3Aissue%20state%3Aopen%20label%3AEmbedding%2FSDK%20label%3A%22Type%3ANew%20Feature%22) در GitHub ردیابی می‌شوند.

می‌توانید یک درخواست ویژگی موجود را با گذاشتن یک emoji reaction thumbs up روی issue upvote کنید. با خیال راحت نظرات با زمینه‌ای که می‌تواند مفید باشد بگذارید. [بیشتر بخوانید](https://www.metabase.com/docs/latest/troubleshooting-guide/requesting-new-features).

قبل از ایجاد issueهای جدید، لطفاً مطمئن شوید که یک issue برای مشکل یا درخواست ویژگی شما از قبل وجود ندارد.
برای جستجوی کمک:

- مشتریان پولی می‌توانند از طریق کانال‌های معمول با تیم موفقیت ما تماس بگیرند.
- افرادی که از نسخه open-source استفاده می‌کنند می‌توانند در [انجمن‌های بحث ما](https://discourse.metabase.com/) پست بگذارند.
