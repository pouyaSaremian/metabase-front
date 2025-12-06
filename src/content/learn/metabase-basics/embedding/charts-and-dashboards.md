---
title: "انتشار تجسم‌های داده در وب"
description: "اشتراک‌گذاری نمودارها و داشبوردهای مستقل با مردم خوب اینترنت."
redirect_from:
  - /learn/metabase-basics/embedding/charts-and-dashboards
  - /learn/customer-facing-analytics/embedding-charts-and-dashboards
  - /learn/developing-applications/advanced-metabase/embedding-charts-and-dashboards
  - /learn/embedding/embedding-charts-and-dashboards
toc:
  - id: "publishing-data-visualizations-to-the-web"
    title: "انتشار تجسم‌های داده در وب"
    level: 1
    href: "#publishing-data-visualizations-to-the-web"
  - id: "public-links-and-embeds"
    title: "لینک‌ها و جاسازی‌های عمومی"
    level: 2
    href: "#public-links-and-embeds"
  - id: "sharing-options"
    title: "گزینه‌های اشتراک‌گذاری"
    level: 2
    href: "#sharing-options"
  - id: "public-links"
    title: "لینک‌های عمومی"
    level: 3
    href: "#public-links"
  - id: "public-embeds"
    title: "جاسازی‌های عمومی"
    level: 3
    href: "#public-embeds"
  - id: "enable-embedding-in-other-applications"
    title: "فعال کردن جاسازی در اپلیکیشن‌های دیگر"
    level: 2
    href: "#enable-embedding-in-other-applications"
  - id: "hide-or-lock-parameters-to-restrict-what-data-is-shown"
    title: "مخفی یا قفل کردن پارامترها برای محدود کردن داده نمایش داده شده"
    level: 3
    href: "#hide-or-lock-parameters-to-restrict-what-data-is-shown"
  - id: "examples"
    title: "مثال‌ها"
    level: 2
    href: "#examples"
  - id: "an-example-using-django"
    title: "یک مثال با استفاده از Django"
    level: 3
    href: "#an-example-using-django"
  - id: "an-example-using-shiny"
    title: "یک مثال با استفاده از Shiny"
    level: 3
    href: "#an-example-using-shiny"
  - id: "embedded-analytics-js"
    title: "Embedded analytics JS"
    level: 2
    href: "#embedded-analytics-js"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../index.html"
  - title: "جاسازی"
    href: "../embedding.html"
---

# انتشار تجسم‌های داده در وب

اشتراک‌گذاری نمودارها و داشبوردهای مستقل با مردم خوب اینترنت.

[
    
    

      
      
    
  ](../../../events/interactive-embedding-workshop.html)

در این آموزش، چند گزینه برای انتشار نمودارها و داشبوردهای متابیس، از کمترین تا بیشترین تلاش نشان می‌دهیم.

با لینک‌های عمومی بدون کد شروع می‌کنیم، به جاسازی‌های عمومی که فقط نیاز به یک snippet کد دارند می‌رسیم، و با کد نمونه برای کسانی که می‌خواهند اپلیکیشن وب خود را spin up کنند پایان می‌دهیم.

اگر می‌خواهید برخی مثال‌هایی از زمان و دلیل انتخاب یک نوع انتشار نسبت به دیگری ببینید، [یک راز متابیس](external-sharing.html) را بررسی کنید.

## لینک‌ها و جاسازی‌های عمومی

برای اشتراک‌گذاری سریع سؤال‌ها و داشبوردها، می‌توانید به سادگی یک لینک عمومی ارسال کنید، یا یک iframe در وب‌سایت خود (یا در هر چیزی که HTML را render می‌کند) قرار دهید. این راهی عالی برای اشتراک‌گذاری نمودارها و داشبوردها on the fly است.

## گزینه‌های اشتراک‌گذاری

بگویید می‌خواهیم یک داشبورد را به اشتراک بگذاریم. روی آیکون **Sharing** کلیک می‌کنیم و گزینه **Sharing and embedding** را انتخاب می‌کنیم.

![یک داشبورد نمونه با استفاده از پایگاه داده نمونه شامل شده با متابیس. برای دسترسی به گزینه‌های اشتراک‌گذاری، روی فلش در بالا سمت راست کلیک کنید و Sharing and embedding را انتخاب کنید.](../../images/embedding-charts-and-dashboards/example-dashboard.png)

این گزینه‌های اشتراک‌گذاری ما را باز می‌کند:

![گزینه‌های اشتراک‌گذاری شامل: Public link، Public embed، و Embed this dashboard in an Application (یک جاسازی استاتیک).](../../images/embedding-charts-and-dashboards/sharing-options.png)

### لینک‌های عمومی

یک لینک عمومی ساده‌ترین راه برای اشتراک‌گذاری یک داشبورد است. لینک‌های عمومی حتی جاسازی نیستند؛ آن‌ها فقط لینک‌هایی به یک سؤال یا داشبورد واحد هستند، اگرچه این موارد عمومی کمی متفاوت از نسخه‌های اصلی آن‌ها هستند.

![یک مثال از استفاده از یک لینک عمومی برای اشتراک‌گذاری یک داشبورد، با footer Powered by Metabase.](../../images/embedding-charts-and-dashboards/powered-by-metabase.png)

این لینک‌های عمومی یک **footer Powered by Metabase** شامل می‌کنند، که می‌توانید اگر [پلن Pro یا Enterprise](../../../pricing/index.html) دارید حذف کنید. نمودارها همچنین drill-through غیرفعال خواهند داشت، و نمی‌توانیم [رفتار کلیک را سفارشی کنیم](../querying-and-dashboards/dashboards/custom-destinations.html) روی یک داشبورد.

اگر یک مقدار فیلتر پیش‌فرض تنظیم کرده باشیم، متابیس آن فیلتر را به سؤال یا داشبورد اعمال می‌کند. مردم قادر به تغییر فیلتر خواهند بود، پس نمی‌توانیم به فیلترها برای محدود کردن داده‌ای که مردم می‌بینند تکیه کنیم. برای قفل (یا مخفی) کردن یک فیلتر، نیاز به استفاده از یک [جاسازی استاتیک](#enable-embedding-in-other-applications) داریم.

همچنین می‌توانیم URL را فرمت کنیم تا یک مقدار به یک فیلتر اختصاص دهیم، یا فیلتر را کاملاً مخفی کنیم—اگرچه در نظر داشته باشید که گیرنده می‌تواند به سادگی URL را ویرایش کند.

در حالی که این لینک‌های عمومی حدس زدن سخت هستند، هر کسی با آن لینک می‌تواند داشبورد ما را مشاهده کند، پس بهترین راه‌حل برای اشتراک‌گذاری داده حساس نیست. با این حال، می‌توانیم به سرعت یک لینک عمومی به یک داشبورد (با یک مشتری، به عنوان مثال) به اشتراک بگذاریم، سپس آن را غیرفعال کنیم وقتی آن را دیده‌اند. اگر داشبورد را دوباره به اشتراک بگذاریم، متابیس یک لینک جدید تولید می‌کند (پس نیاز به نگرانی درباره دسترسی به لینک قدیمی نداریم). اگر به طور تصادفی یک لینک را به اشتراک گذاشتید، می‌توانید آن را در هر زمان غیرفعال کنید؛ فقط sharing را به off toggle کنید. Adminها می‌توانند همه لینک‌های عمومی را از Admin panel مشاهده و غیرفعال کنند.

### جاسازی‌های عمومی

می‌توانیم یک سؤال یا داشبورد را در وب‌سایت خود با استفاده از یک iframe جاسازی کنیم. به سادگی کپی و paste کردن کد از متابیس شما و قرار دادن آن در کد منبع یک صفحه وب است. حتی می‌توانیم آن را با site builderهای بدون کد استفاده کنیم—هر جایی که می‌توانیم HTML قرار دهیم. به عنوان مثال، می‌توانید یک داشبورد را در یک بلاگ جاسازی کنید تا به [گفتن یک داستان با داده](https://punctumbooks.pubpub.org/pub/visualization-book-usage-statistics-metabase/release/2) کمک کنید، یا به سادگی [کل صفحه را با یک داشبورد پر کنید](https://data.color.com/v2/cardio.html).

در اینجا یک iframe برای نمایش یک داشبورد وجود دارد:

```html
<iframe
  src="http://your-website.com/public/dashboard/f54f5ae5-39a4-4662-85d5-a02e78165279"
  frameborder="0"
  width="800"
  height="600"
  allowtransparency
></iframe>
```

یک iframe یک پنجره مرورگر دیگر، تودرتو درون پنجره مرورگر فعلی ایجاد می‌کند. پنجره iframe به URL خود اشاره می‌کند، و پاسخ از آن آدرس را ارائه می‌دهد - در این مورد، نمودار یا داشبوردی که می‌خواهیم ارائه دهیم. مثل لینک عمومی، نمودار **footer Powered by Metabase** را خواهد داشت.

می‌توانیم عرض و ارتفاع را برای مناسب کردن نمودار یا داشبورد خود تنظیم کنیم. اگر یک داشبورد را جاسازی می‌کنیم و iframe به اندازه کافی عریض نیست تا چیدمان داشبورد را در خود جای دهد، متابیس سؤال‌ها را به ترتیبی که ظاهر می‌شوند، از چپ به راست، در داشبورد stack می‌کند.

## فعال کردن جاسازی در اپلیکیشن‌های دیگر

اگر می‌خواهیم محدود کنیم چه کسی می‌تواند نمودار یا داشبورد ما را ببیند، یا یک فیلتر را قفل کنیم، نیاز به استفاده از یک جاسازی استاتیک داریم. این ویژگی جدا از گزینه‌های اشتراک‌گذاری عمومی است، و فقط برای adminها قابل دسترسی است. همچنین باید تنظیم `Embedding in other Applications` را قبل از کار فعال کنیم. در **Admin Panel** در تب **Settings**، روی `Embedding in other Applications` کلیک می‌کنیم و `Enabled` را toggle می‌کنیم.

بیایید به داشبوردی که می‌خواهیم به اشتراک بگذاریم برگردیم. با جاسازی فعال شده، یک کلید مخفی دریافت می‌کنیم.

![با جاسازی فعال شده، شما](../../images/embedding-charts-and-dashboards/embedding-enabled.png)

برای تنظیم یک جاسازی استاتیک، نیاز به قرار دادن مقداری کد در سرور خود برای امضا کردن JSON Web Tokenها (JWT) برای کاربران خود داریم. متابیس کد برای Clojure، Python، Ruby، و JavaScript (Node.js) تولید می‌کند، اما باید بتوانید آن کد را برای سرورهای نوشته شده در زبان‌های دیگر نیز ترجمه کنید.

![متابیس کد شما را ارائه می‌دهد](../../images/embedding-charts-and-dashboards/embed-code.png)

قبل از زدن دکمه **Publish**، بیایید برخی از گزینه‌های خود را مرور کنیم.

### مخفی یا قفل کردن پارامترها برای محدود کردن داده نمایش داده شده

اگر سؤال یا داشبورد ما یک فیلتر دارد، می‌توانیم فیلتر را غیرفعال کنیم، یا پارامترها را قفل کنیم تا یک مقدار فیلتر ثابت تنظیم کنیم.

بگویید می‌خواهیم یک داشبورد را به کسی نشان دهیم، اما فقط می‌خواهیم به آن‌ها اجازه دهیم سفارش‌ها در دسته `Gadget` را ببینند.

![قفل کردن یک فیلتر با مقدار Gadget.](../../images/embedding-charts-and-dashboards/locked-parameters.png)

در مثال ما، پارامترها فیلتر روی داشبورد را تنظیم می‌کنند. اینجا فیلتر Category را به `Gadget` تنظیم می‌کنیم.

در اینجا مقداری کد نمونه برای یک سرور نوشته شده در Clojure وجود دارد:

```clojure
(require '[buddy.sign.jwt :as jwt])

(def metabase-site-url   "MY-DOMAIN-HERE")
(def metabase-secret-key "SECRET-KEY-HERE")

(def payload
  {:resource {:dashboard 3}
   :params   {"category" ["Gadget"]}
   :exp      (+ (int (/ (System/currentTimeMillis) 1000)) (* 60 10))}) ; 10 minute expiration

(def token (jwt/sign payload metabase-secret-key))

(def iframe-url (str metabase-site-url "/embed/dashboard/" token "#bordered=true&titled=true"))
```

این کد از کلید مخفی که متابیس به ما می‌دهد برای امضا کردن JWT token استفاده می‌کند: کاربران ما نمی‌بینند—و *نباید* ببینند—کلید مخفی.

در اینجا نحوه انجام آن است.

1. در متابیس، داشبوردی که می‌خواهیم در اپلیکیشن خود جاسازی کنیم را publish می‌کنیم.
2. iframe را در یک صفحه از اپلیکیشن خود قرار می‌دهیم.
3. کد برای امضا کردن JSON Web Tokenها را در سرور خود قرار می‌دهیم.
4. کاربر ما به اپلیکیشن ما وارد می‌شود.
5. کاربر یک صفحه در اپلیکیشن ما با داشبورد جاسازی شده درخواست می‌کند.
6. وقتی سرور درخواست برای آن صفحه را handle می‌کند، token کاربر را امضا می‌کند و آن token را به عنوان URL منبع iframe قرار می‌دهد.
7. وقتی صفحه بارگذاری می‌شود، صفحه داشبورد را از instance متابیس ما با استفاده از token امضا شده درخواست می‌کند.
8. داشبورد در یک iframe در اپلیکیشن ما با پارامترها و انقضا تنظیم شده توسط سرور اپلیکیشن ما بارگذاری می‌شود.

اگر token امضا نشده باشد، یا اگر به هر طریقی تغییر یافته باشد، داشبورد بارگذاری نمی‌شود.

در map `payload`، می‌توانیم مشخص کنیم JWT امضا شده چه زمانی منقضی می‌شود (در کد بالا، token پس از 10 دقیقه منقضی می‌شود).

فیلد `:params` جایی است که می‌توانیم یک پارامتر را قفل کنیم تا یک فیلتر پیش‌فرض و ثابت روی داشبورد یا سؤال خود تنظیم کنیم. به عنوان مثال، می‌توانیم یک داشبورد با یک فیلتر برای user ID ایجاد کنیم، سپس—در سرور خود—programmatically یک ID کاربر را به عنوان پارامتر قرار دهیم. token امضا شده فیلتر را به آن ID قفل می‌کند، پس هر کاربری که آن داشبورد را می‌بیند فقط داده‌ای که توسط ID آن‌ها فیلتر شده است را می‌بیند.

## مثال‌ها

مثال‌های جاسازی را در چندین زبان در [یک repository Git عمومی](https://github.com/metabase/embedding-reference-apps/) نگهداری می‌کنیم. زیربخش‌های زیر یک مثال حداقلی در Django (یک framework وب Python محبوب) و Shiny (محبوب‌ترین framework وب برای R) را مرور می‌کنند.

### یک مثال با استفاده از Django

اپلیکیشن Django حداقلی ما فقط شامل دو فایل است: یک template HTML در `index.html` و یک برنامه Python کوتاه در `index.py`. template کوتاه و شیرین است:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>Embed {{ title }}</h1>
    <iframe
      src="{{iframeUrl}}"
      frameborder="1"
      width="800"
      height="600"
    ></iframe>
  </body>
</html>
```

نیاز به دو مقدار دارد: عنوان صفحه در `title` و URL iframe شامل جاسازی استاتیک در `iframeUrl`. عنوان فقط یک رشته است، اما همانطور که در بالا توضیح داده شد، نیاز به انجام مقداری کار برای ساخت URL داریم. برنامه با برخی کتابخانه‌ها و تنظیمات مورد نیاز Django شروع می‌شود:

```python
# Required by Django
import os
from django.conf.urls import url
from django.http import HttpResponse
from django.template.loader import render_to_string

DEBUG = True
SECRET_KEY = '4l0ngs3cr3tstr1ngw3lln0ts0l0ngw41tn0w1tsl0ng3n0ugh'
ROOT_URLCONF = __name__
TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [os.getcwd()]
}]
```

سپس چند کتابخانه و چند مقدار برای جاسازی را شامل می‌کنیم:

```python
# Required for Metabase embedding
import time
import jwt
METABASE_SITE_URL = 'http://localhost:3000'
METABASE_SECRET_KEY = '40e0106db5156325d600c37a5e077f44a49be1db9d02c96271e7bd67cc9529fa'
```

نیاز به `time` برای محاسبه زمان انقضا برای token امضا شده خود و کتابخانه [`jwt`](https://pyjwt.readthedocs.io/) برای امضا کردن token داریم. `METABASE_SITE_URL` به برنامه می‌گوید کجا instance متابیس ما را پیدا کند—در این مورد آن را به صورت محلی اجرا می‌کنیم—و `METABASE_SECRET_KEY` مقداری است که متابیس تولید می‌کند که آن را به آن برمی‌گردانیم تا ثابت کنیم مجاز به دسترسی به سؤال‌ها هستیم. این را در کد منبع خود در یک محیط production قرار نمی‌دهیم؛ در عوض، آن را در یک متغیر محیط یا یک فایل پیکربندی جداگانه ذخیره می‌کنیم.

باید سه مقدار را در token که به متابیس ارسال می‌کنیم شامل کنیم. از آنجایی که یکی از آن‌ها زمان انقضای token است، که برای هر درخواست تغییر می‌کند، کد برای ساخت token را در تابعی که درخواست‌ها برای صفحه‌ها را handle می‌کند قرار می‌دهیم. برای اهداف مثال سؤال #1 را می‌خواهیم، و می‌خواهیم token از حالا تا ده دقیقه در آینده معتبر باشد:

```python
# Handle requests for '/'.
def home(request):
    payload = {
        'resource': {'question': 1},
        'params': {},
        'exp': round(time.time()) + (60 * 10)
    }
    token = jwt.encode(payload, METABASE_SECRET_KEY, algorithm='HS256')
    iframeUrl = METABASE_SITE_URL + '/embed/question/' + token + '#bordered=true&titled=true'
    html = render_to_string('index.html', {
        'title': 'Embedding Metabase',
        'iframeUrl': iframeUrl
    })
    return HttpResponse(html)
```

از تابع `jwt.encode` از کتابخانه `jwt` برای رمزگذاری پارامترهای token با استفاده از کلید مخفی که از متابیس دریافت کردیم استفاده می‌کنیم. (پارامتر `algorithm='HS256'` به `jwt.encode` می‌گوید از کدام الگوریتم hashing استفاده کند—باید همیشه از آن یکی استفاده کنیم.) سپس آن token رمزگذاری شده را در یک URL قرار می‌دهیم، template HTML را render می‌کنیم، و آن را به اپلیکیشن برمی‌گردانیم. در نهایت، برنامه با گفتن Django نحوه match کردن درخواست‌های ورودی به توابع rendering پایان می‌یابد:

```python
urlpatterns = [
    url(r'^$', home, name='homepage')
]
```

اگر اپلیکیشن خود را از خط فرمان با اجرا کنیم:

```bash
$ django-admin runserver --pythonpath=. --settings=index
```

و سپس مرورگر خود را به `http://localhost:8000/` اشاره کنیم، چیزهای زیر به ترتیب اتفاق می‌افتند:

1. مرورگر یک درخواست HTTP برای `/` (ریشه وب‌سایت) به اپلیکیشن Django که روی پورت 8000 گوش می‌دهد ارسال می‌کند.
2. آن اپلیکیشن URL در درخواست را به تابع `home` match می‌کند.
3. `home` یک token جدید تولید می‌کند که زمان انقضای آن 10 ثانیه در آینده است.
4. سپس `index.html` را می‌خواند و `{{title}}` را با "`Embedding Metabase`" و `{{iframeUrl}}` را با URL که شامل token تازه تولید شده است جایگزین می‌کند.
5. `home` سپس آن HTML را به مرورگر برمی‌گرداند.
6. همانطور که مرورگر آن HTML را نمایش می‌دهد به iframe می‌رسد. ویژگی `src` در تگ `iframe` به آن می‌گوید یک درخواست به متابیس ارسال کند.
7. وقتی متابیس یک درخواست که URL آن با `/embed/question` شروع می‌شود را دریافت می‌کند، بقیه مسیر را از URL استخراج می‌کند و آن را رمزگشایی می‌کند.
8. از آنجایی که URL با یک کلید مخفی که متابیس تولید کرده رمزگذاری شده است، رمزگشایی موفق است، که به متابیس می‌گوید فرستنده مجاز به مشاهده سؤال است. مقادیر جاسازی شده در token به متابیس می‌گوید کدام سؤال درخواست شده است.
9. متابیس سؤال را اجرا می‌کند و HTML که در رابط خود نمایش می‌دهد را تولید می‌کند، سپس آن HTML را به مرورگری که درخواست را داده است برمی‌گرداند.
10. مرورگر آن HTML را در iframe قرار می‌دهد و آن را به کاربر نشان می‌دهد.

### یک مثال با استفاده از Shiny

مثال Shiny حداقلی ما کمی ساده‌تر از مثال Django نشان داده شده در بالا است چون Shiny نیاز به boilerplate کمتری دارد. برای شروع، کتابخانه‌های Shiny خود، مدیریت web tokenها، و چسباندن رشته‌ها با هم را load می‌کنیم:

```r
library(shiny)
library(jose)
library(glue)
```

سپس دو مقدار را تعریف می‌کنیم که مشخص می‌کند متابیس کجا در حال اجرا است (از یک instance محلی استفاده می‌کنیم) و کلید مخفی که متابیس برای احراز هویت ارائه داده است:

```r
METABASE_SITE_URL <- 'http://localhost:3000'
METABASE_SECRET_KEY <- '40e0106db5156325d600c37a5e077f44a49be1db9d02c96271e7bd67cc9529fa'
```

رابط کاربری بر اساس یک framework CSS محبوب به نام [Bootstrap](https://www.bootstrap-ui.com/) است و دو عنصر دارد: heading سطح-1 شامل عنوان صفحه و یک `div` شامل iframe ما. UI خود iframe را نمی‌سازد؛ در عوض، از تابع `uiOutput` برای render کردن چیزی به نام `container` استفاده می‌کند:

```r
ui <- bootstrapPage(
  h1('Page title'),
  uiOutput('container')
)
```

`container` از کجا می‌آید؟ در Shiny، پاسخ این است، "سرور." همانطور که در زیر نشان داده شده است، `server` یک claim JWT می‌سازد و آن را رمزگذاری می‌کند تا URL iframe را بسازد. سپس `renderUI` را فراخوانی می‌کند تا محتوای HTML iframe را دریافت کند و آن را به `output$container` اختصاص می‌دهد. وقتی این اختصاص اتفاق می‌افتد، Shiny به طور خودکار به UI می‌گوید که نیاز به redraw کردن صفحه دارد:

```r
server <- function(input, output) {
  # Token expires 10 minutes in the future.
  expiry <- as.integer(unclass(Sys.time())) + (60 * 10)

  # Construct params in two steps so that JSON conversion knows it's a list.
  params <- list()
  names(params) <- character(0)

  # Create the JWT claim.
  claim <- jwt_claim(exp = expiry, resource = list(question = 1), params = params)

  # Encode token and use it to construct iframe URL.
  token <- jwt_encode_hmac(claim, secret = METABASE_SECRET_KEY)
  url <- glue("{METABASE_SITE_URL}/embed/question/{token}#bordered=true&titled=true")
  output$container <- renderUI(tags$iframe(width = "600", height = "600", src = url))
}
```

بیایید تابع `server` را با جزئیات بیشتر مرور کنیم. ابتدا، می‌خواهیم token ما برای ده دقیقه معتبر باشد، پس زمان فعلی را به عنوان یک عدد صحیح دریافت می‌کنیم و 600 ثانیه اضافه می‌کنیم:

```r
  expiry <- as.integer(unclass(Sys.time())) + (60 * 10)
```

سپس از تابع `jwt_claim` از کتابخانه [`jose`](https://github.com/jeroen/jose/) برای ساخت token استفاده می‌کنیم. این تابع نام خود را از این واقعیت می‌گیرد که ما claim می‌کنیم مجاز به انجام چیزی هستیم، و هر تعداد پارامتر نام‌گذاری شده را به عنوان ورودی می‌گیرد:

```r
  params <- list()
  names(params) <- character(0)
  claim <- jwt_claim(exp = expiry, resource = list(question = 1), params = list())
```

دو خط اول کد نشان داده شده در بالا مورد نیاز هستند چون `jose` به کتابخانه دیگری به نام `jsonlite` برای تبدیل ساختارها به رشته‌های JSON تکیه می‌کند، و به طور پیش‌فرض آن کتابخانه یک لیست خالی را به یک آرایه خالی `[]` به جای یک map خالی `{}` تبدیل می‌کند. یک تفاوت کوچک است، اما وقتی متابیس ساختار را رمزگشایی می‌کند، نیاز دارد `params` یک map با کلیدها باشد. راه‌حل این است که `params` یک لیست خالی از نام‌ها بدهیم تا `jsonlite` `{}` مورد نیاز را تولید کند؛ برای مطمئن شدن از اینکه این کار می‌کند، مطمئن شوید `jose` نسخه 0.3 یا بالاتر دارید.

وقتی claim را داریم می‌توانیم آن را با `jwt_encode_hmac` رمزگذاری کنیم و URL iframe را بسازیم. `jwt_encode_hmac` به طور پیش‌فرض از الگوریتم رمزگذاری HS256 استفاده می‌کند، پس نیاز به مشخص کردن صریح آن نداریم:

```r
  token <- jwt_encode_hmac(claim, secret = METABASE_SECRET_KEY)
  url <- glue("{METABASE_SITE_URL}/embed/question/{token}#bordered=true&titled=true")
```

در نهایت، از `renderUI` برای دریافت HTML iframe استفاده می‌کنیم و آن را به `output$container` اختصاص می‌دهیم، که به طور خودکار یک به‌روزرسانی صفحه مرورگر را trigger می‌کند:

```r
  output$container <- renderUI(tags$iframe(width = "600", height = "600", src = url))
```

آخرین خط فایل اپلیکیشن ما را روی پورت 8001 اجرا می‌کند:

```r
shinyApp(ui = ui, server = server, options = list(port = 8001))
```

اگر این برنامه را از خط فرمان با `Rscript app.R` اجرا کنیم و مرورگر خود را به `http://localhost:8001` اشاره کنیم، سؤال جاسازی شده خود را می‌بینیم.

## Embedded analytics JS

اگر می‌خواهید پتانسیل کامل متابیس را هنگام جاسازی باز کنید، که به مردم اجازه drill through داده را می‌دهد، یا آن‌ها را به [مقصدهای سفارشی](../../../docs/latest/dashboards/interactive.html#custom-destinations) مثل داشبوردهای دیگر یا URLهای خارجی ارسال کند، نیاز به Embedded analytics JS دارید. برای یادگیری بیشتر، [ارائه تحلیل به مشتریان خود](overview.html) و [جاسازی متابیس در اپلیکیشن خود برای ارائه تحلیل چند مستأجری، خودخدمت](multi-tenant-self-service-analytics.html) را ببینید.

## مطالعه بیشتر

- [مستندات جاسازی](../../../docs/latest/embedding/start.html)
- [اپلیکیشن‌های مرجع جاسازی](https://github.com/metabase/embedding-reference-apps/)
- [جاسازی متابیس در اپلیکیشن‌های دیگر](../../../docs/latest/embedding/introduction.html)
- [پنج مرحله غم جاسازی](../../grow-your-data-skills/analytics/embedding-mistakes.html)

[
      
        

      
      
        
        

      
    ](overview.html)
[
      
        
        

      
      
        
        

      
    ](external-sharing.html)
