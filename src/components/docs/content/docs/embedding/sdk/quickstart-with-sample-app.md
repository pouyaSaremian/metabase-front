---
title: SDK تجزیه و تحلیل تعبیه‌شده - شروع سریع با برنامه نمونه
---

# SDK تجزیه و تحلیل تعبیه‌شده - شروع سریع با برنامه نمونه

{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true convert_pro_link_to_embbedding=true %}

این راهنما SDK تجزیه و تحلیل تعبیه‌شده را با یک [برنامه نمونه React](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable) راه‌اندازی می‌کند، اما می‌توانید با برنامه خود دنبال کنید.

{% include youtube.html id='AtMn-G-Al80' %}

## پیش‌نیازها

- [Node.js 20.x LTS یا بالاتر](https://nodejs.org/en) (برای برنامه نمونه).
- [نسخه متابیس v1.52 یا بالاتر](https://github.com/metabase/metabase/releases).
- [یک مجوز متابیس Pro یا Enterprise](https://www.metabase.com/pricing/) (اگر مجوز ندارید، [این شروع سریع](./quickstart.md) را بررسی کنید که راه‌اندازی JWT SSO پولی ندارد.)
- (اختیاری): [Docker](https://www.docker.com/)

## دو روش برای راه‌اندازی برنامه نمونه با متابیس

- [راه‌اندازی سریع با Docker](#quick-setup-with-docker) (شامل یک متابیس نمونه)
- [راه‌اندازی walkthrough](#walkthrough-setup) (متابیس خود را بیاورید، یا یک مورد جدید راه‌اندازی کنید)

## راه‌اندازی سریع با Docker

این راه‌اندازی سریع یک کانتینر Docker با برنامه نمونه و یک متابیس نمونه را اجرا می‌کند.

۱. `.env.docker.example` را به `.env.docker` کپی کنید.
۲. در فایل `.env.docker`، `<your_enterprise_token>` را با توکن جاسازی premium خود جایگزین کنید.
۳. در دایرکتوری سطح بالا، اجرا کنید:
   ```bash
   yarn start
   ```

این اسکریپت:

- یک تصویر Docker متابیس را pull می‌کند و در یک کانتینر اجرا می‌کند.
- JWT SSO را در متابیس راه‌اندازی می‌کند.
- برنامه نمونه را با یک سؤال تعاملی جاسازی شده build و اجرا می‌کند.

برنامه در [http://localhost:4400](http://localhost:4400) شروع می‌شود.

تمام! باید [در حال اجرا باشید](#at-this-point-you-should-be-up-and-running).

اگر می‌خواهید به متابیس نمونه که این دستور راه‌اندازی کرد وارد شوید، [http://localhost:4300](http://localhost:4300) را بازدید کنید. می‌توانید با ایمیل و رمز عبور به عنوان Rene Descartes وارد شوید:

- email: rene@example.com
- password: foobarbaz

## راه‌اندازی walkthrough

ما می‌خواهیم برخی راه‌اندازی در متابیس انجام دهیم، و سپس در برنامه نمونه. همچنین می‌توانید متابیس خود را بیاورید، در این صورت می‌توانید مرحله نصب را رد کنید.

در اینجا یک نمای کلی سریع از آنچه انجام خواهید داد آمده است:

### راه‌اندازی متابیس برای جاسازی

۱. [نصب نسخه Enterprise متابیس](#install-metabase-enterprise-edition) (اگر هنوز نصب نکرده‌اید)
۲. [فعال کردن مجوز خود](#activate-your-license)
۳. [فعال کردن جاسازی](#enable-embedding-in-metabase)
۴. [فعال کردن SSO با JWT](#enable-sso-with-jwt)

### راه‌اندازی برنامه نمونه

۵. [دریافت برنامه نمونه](#set-up-the-sample-application).
۶. [راه‌اندازی محیط برنامه](#set-up-the-application-environment).
۷. [اجرای سرور برنامه](#set-up-the-application-server) برای مدیریت احراز هویت با JWT و سرو دادن اجزای متابیس جاسازی شده.
۸. [اجرای برنامه کلاینت](#set-up-the-client-application) که شامل اجزای متابیس ساخته شده با SDK خواهد بود.

و سپس با استایل‌دهی بازی کنید.

بیایید شروع کنیم.

## نصب نسخه Enterprise متابیس

می‌توانید متابیس Pro را در یک پلن Cloud با [آزمایش رایگان](https://www.metabase.com/pricing/) اجرا کنید.

یا آن را به صورت محلی اجرا کنید. در اینجا یک docker one-liner آمده است:

```sh
docker run -d -p 3000:3000 --name metabase metabase/metabase-enterprise:latest
```

همچنین می‌توانید [JAR را دانلود کنید](https://downloads.metabase.com/enterprise/latest/metabase.jar)، و آن را اینگونه اجرا کنید:

```sh
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

به‌طور پیش‌فرض، متابیس در `http://localhost:3000` اجرا می‌شود.

اگر گیر کردید، [مستندات نصب](../../installation-and-operation/installing-metabase.md) ما را بررسی کنید.

## فعال کردن مجوز

برای فعال کردن SSO با JWT هنگام self-hosting، نیاز دارید [مجوز خود را فعال کنید](../../installation-and-operation/activating-the-enterprise-edition.md). پلن‌های متابیس Pro در Cloud این را برای شما انجام می‌دهند.

## فعال کردن جاسازی در متابیس

از هر صفحه متابیس، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و **Admin Settings** > **Embedding** را انتخاب کنید.

روشن کنید:

- SDK تجزیه و تحلیل تعبیه‌شده (در بخش **Modular** است)
- جاسازی ایستا

در غیر این صورت، همه این چیزها ناامیدکننده است.

## فعال کردن SSO با JWT

همچنین نیاز داریم JWT Provider URI خود را در متابیس به‌روزرسانی کنیم. به‌طور پیش‌فرض، این URI جایی است که SDK درخواست‌های ورود را redirect می‌کند.

از هر صفحه متابیس، روی آیکون **چرخ‌دنده** در بالا سمت راست کلیک کنید و **Admin Settings** > **Settings** > **Authentication** را انتخاب کنید.

روی کارتی که می‌گوید **JWT**، دکمه **Setup** را کلیک کنید.

### JWT Identity provider URI

در فیلد **JWT IDENTITY PROVIDER URI**، جایگذاری کنید

```txt
http://localhost:9090/sso/metabase
```

یا URL Cloud خود را جایگزین `http://localhost` کنید.

### رشته استفاده شده توسط کلید امضای JWT

دکمه **Generate key** را کلیک کنید.

کلید را کپی کنید و در فایل `.env` خود در متغیر env `METABASE_JWT_SHARED_SECRET` جایگذاری کنید.

سرور برنامه از این کلید برای امضای توکن‌ها استفاده می‌کند تا متابیس بداند درخواست‌های برنامه برای محتوا مجاز هستند.

## ذخیره و فعال کردن JWT

مطمئن شوید که دکمه **Save and enable** را فشار دهید، وگرنه همه باطل است.

## راه‌اندازی برنامه نمونه

[برنامه نمونه Metabase Node JS React SDK embedding](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable) را clone کنید.

```sh
git clone git@github.com:metabase/metabase-nodejs-react-sdk-embedding-sample.git
```

### Checkout کردن branch که با نسخه متابیس شما مطابقت دارد

branch را در [metabase-nodejs-react-sdk-embedding-sample](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable) repo که با نسخه متابیس شما مطابقت دارد checkout کنید.

مثلاً، اگر متابیس 1.53 را اجرا می‌کنید، مطمئن شوید repo برنامه نمونه روی branch `53-stable` است. می‌توانید نسخه متابیس خود را در UI متابیس با کلیک روی آیکون چرخ‌دنده در بالا سمت راست و انتخاب **About Metabase** پیدا کنید.

برای تعویض به branch دیگر، `git checkout <branch-name>` را اجرا کنید، مثلاً:

```
git checkout 52-stable
```

## راه‌اندازی محیط برنامه

در دایرکتوری اصلی برنامه نمونه، قالب `.env.example` را به `.env` کپی کنید.

```sh
cp .env.example .env
```

در `.env`، مطمئن شوید `VITE_METABASE_INSTANCE_URL` و `METABASE_INSTANCE_URL` به URL نمونه متابیس شما اشاره می‌کنند، مثلاً، `http://localhost:3000`.

`.env` شما چیزی شبیه به این خواهد بود:

```txt
# FRONTEND
CLIENT_PORT=3100
VITE_METABASE_INSTANCE_URL="http://localhost:3000"

# BACKEND
AUTH_PROVIDER_PORT=9090
METABASE_INSTANCE_URL="http://localhost:3000"
METABASE_JWT_SHARED_SECRET="TODO"
```

## راه‌اندازی سرور برنامه

به دایرکتوری `server` بروید:

```sh
cd server
```

بسته‌ها را نصب کنید:

```sh
npm install
```

سرور را شروع کنید:

```sh
npm start
```

## راه‌اندازی برنامه کلاینت

در یک ترمینال دیگر، به دایرکتوری `client` بروید:

```sh
cd client
```

وابستگی‌ها را نصب کنید:

```sh
npm install
```

این دستور [SDK تجزیه و تحلیل تعبیه‌شده متابیس](https://www.npmjs.com/package/@metabase/embedding-sdk-react) را نصب می‌کند، علاوه بر وابستگی‌های دیگر برنامه.

همچنین می‌توانید یک [نسخه متفاوت از SDK](./version.md) نصب کنید. فقط مطمئن شوید که نسخه اصلی SDK با نسخه اصلی متابیسی که استفاده می‌کنید مطابقت دارد.

برنامه کلاینت را شروع کنید:

```sh
npm start
```

مرورگر شما باید به طور خودکار برنامه را باز کند. به‌طور پیش‌فرض، برنامه در [http://localhost:3100](localhost:3100) اجرا می‌شود.

## در این نقطه، باید در حال اجرا باشید

در برنامه خود، یک جزء `InteractiveQuestion` جاسازی شده را خواهید دید.

```javascript
{% include_file "{{ dirname }}/snippets/quickstart-with-sample-app/example.tsx" snippet="example" %}
```

![Embedded Metabase components](../images/interactive-question-sample-app.png)

## مراحل بعدی

برای استایل دادن اجزا، سعی کنید برخی از گزینه‌های `theme` را در برنامه کلاینت در `client/src/App.jsx` تغییر دهید. برای بیشتر در مورد تم‌دهی، [ظاهر](./appearance.md) را بررسی کنید.
