---
title: "یک راز متابیس"
description: "تفاوت بین لینک‌های عمومی، جاسازی‌های عمومی، و جاسازی‌های امضا شده چیست؟"
redirect_from:
  - /learn/metabase-basics/embedding/external-sharing
toc:
  - id: "a-metabase-mystery"
    title: "یک راز متابیس"
    level: 1
    href: "#a-metabase-mystery"
  - id: "can-you-help-us-find-the-hidden-message"
    title: "آیا می‌توانید به ما کمک کنید پیام پنهان را پیدا کنیم؟"
    level: 2
    href: "#can-you-help-us-find-the-hidden-message"
  - id: "for-internal-use-only"
    title: "فقط برای استفاده داخلی"
    level: 2
    href: "#for-internal-use-only"
  - id: "sharing-a-url-to-a-metabase-dashboard"
    title: "اشتراک‌گذاری یک URL به داشبورد متابیس"
    level: 2
    href: "#sharing-a-url-to-a-metabase-dashboard"
  - id: "clue-1"
    title: "سرنخ 1"
    level: 3
    href: "#clue-1"
  - id: "adding-a-metabase-dashboard-to-a-website"
    title: "افزودن یک داشبورد متابیس به یک وب‌سایت"
    level: 2
    href: "#adding-a-metabase-dashboard-to-a-website"
  - id: "clue-2"
    title: "سرنخ 2"
    level: 3
    href: "#clue-2"
  - id: "restricting-access-to-an-embedded-metabase-dashboard"
    title: "محدود کردن دسترسی به یک داشبورد متابیس جاسازی شده"
    level: 2
    href: "#restricting-access-to-an-embedded-metabase-dashboard"
  - id: "setting-up-a-login-page"
    title: "تنظیم یک صفحه ورود"
    level: 3
    href: "#setting-up-a-login-page"
  - id: "redirecting-people-to-different-urls-based-on-their-login"
    title: "هدایت مردم به URLهای مختلف بر اساس ورود آن‌ها"
    level: 3
    href: "#redirecting-people-to-different-urls-based-on-their-login"
  - id: "generating-a-static-embedding-url"
    title: "تولید URL جاسازی استاتیک"
    level: 3
    href: "#generating-a-static-embedding-url"
  - id: "restricting-data-with-a-locked-parameter"
    title: "محدود کردن داده با یک پارامتر قفل شده"
    level: 3
    href: "#restricting-data-with-a-locked-parameter"
  - id: "viewing-static-embeds-with-different-levels-of-access"
    title: "مشاهده جاسازی‌های استاتیک با سطوح مختلف دسترسی"
    level: 3
    href: "#viewing-static-embeds-with-different-levels-of-access"
  - id: "clue-3"
    title: "سرنخ 3"
    level: 3
    href: "#clue-3"
  - id: "the-game-is-afoot"
    title: "بازی در جریان است"
    level: 2
    href: "#the-game-is-afoot"
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

# یک راز متابیس

تفاوت بین لینک‌های عمومی، جاسازی‌های عمومی، و جاسازی‌های امضا شده چیست؟

[
    
    

      
      
    
  ](../../../events/interactive-embedding-workshop.html)

بگویید در حال کار روی یک تحلیل جالب در متابیس هستید، و نیاز به اشتراک‌گذاری کار خود دارید—ابتدا، برای بازخورد، و بعداً، به عنوان یک محصول نهایی.

[لینک‌ها و جاسازی‌های عمومی](../../../docs/latest/embedding/public-links.html)، و [جاسازی‌های استاتیک](../../../docs/latest/embedding/static-embedding.html) همه روش‌های رایگان و منبع باز برای شما برای اشتراک‌گذاری artifacts متابیس (مثل نمودارها و داشبوردها، اما [خود را محدود نکنید](../querying-and-dashboards/dashboards/markdown.html#one-last-pro-tip-for-gif-aficionados)) با افرادی که حساب متابیس یا مجوز دسترسی به داده خام شما ندارند.

هنگام انتخاب بین این گزینه‌های اشتراک‌گذاری داده، می‌خواهید در نظر بگیرید:

- چقدر سریع نیاز به اشتراک‌گذاری نتایج دارید
- چقدر زمینه می‌خواهید اضافه کنید
- سطح امنیت حول داده شما

## آیا می‌توانید به ما کمک کنید پیام پنهان را پیدا کنیم؟

در این آموزش، طیف وسیعی از موارد استفاده اشتراک‌گذاری داده را از دیدگاه یک تحلیلگر داده در متابیس کاوش می‌کنیم. کار ما بررسی یک راز باقی‌مانده از یکی از هم‌تیمی‌های ما است، که ناپدید شد درست وقتی که در حال حل قدیمی‌ترین باگ متابیس بودند.

یک نکته ناشناس دریافت کردیم که ممکن است یک پیام پنهان در پیام‌های commit git هم‌تیمی ما وجود داشته باشد، پس می‌خواهیم داده را برای هر چیزی که به عنوان عجیب یا مشکوک برجسته است تحلیل کنیم. البته، همچنین می‌خواهیم بررسی را با جامعه خود به اشتراک بگذاریم (ما منبع باز هستیم، بالاخره).

اگر می‌خواهید به بخش‌های سرگرم‌کننده بروید:

- [دریافت داده](https://docs.google.com/spreadsheets/d/1dN4t7SycigAZRAb0ptuWqOSJifm7jhr8fgTiIjp43bw/edit#gid=0).
- [سرنخ 1](#clue-1).
- [سرنخ 2](#clue-2).
- [سرنخ 3](#clue-3).
- [بازی در جریان است](#the-game-is-afoot)!

## فقط برای استفاده داخلی

قبل از اشتراک‌گذاری عمومی نتایج بررسی در حال انجام خود، می‌خواهیم مقداری بازخورد از تیم دریافت کنیم، و مطمئن شویم که هیچ اطلاعات قابل شناسایی شخصی (PII) را افشا نمی‌کنیم. تحلیل اولیه (شکل 1) در instance متابیس داخلی ما زندگی می‌کند—این نسخه فقط با تیم ما به اشتراک گذاشته می‌شود.

![یک اسکرین‌شات از داشبوردی که می‌خواهیم پس از بررسی به صورت عمومی به اشتراک بگذاریم.](../../images/external-sharing/internal-dashboard.png)

## اشتراک‌گذاری یک URL به داشبورد متابیس

یک [لینک عمومی ایجاد کنید](../../../docs/latest/embedding/public-links.html#create-a-public-link-for-a-dashboard) به داشبورد ما.

می‌توانید لینک عمومی به [داشبورد بررسی زنده](https://metabase-public.metabaseapp.com/public/dashboard/25d444d2-d211-413e-a6fa-4b62be733eec) را bookmark کنید. تصمیم گرفتیم داده commit را به صورت تجمیع شده نمایش دهیم تا تحلیل راحت‌تر خوانده شود. همچنین [مقصدهای سفارشی](../../../docs/latest/dashboards/interactive.html#custom-destinations) تنظیم کردیم تا مردم بتوانند پیام(های) commit کامل مرتبط با هر آمار نمایش داده شده در داشبورد را مشاهده کنند. همانطور که بررسی خود را ادامه می‌دهیم، می‌توانیم تغییرات خود را publish کنیم تا آخرین تحلیل در لینک عمومی نمایش داده شود.

### سرنخ 1

در طول تحلیل داده اکتشافی خود، به توزیع طول پیام commit git نگاه کردیم. یکی از outlierها (پیامی با بیشترین طول) شامل پیام زیر بود:

```txt
update the database sync event publication so that we can actually
track start & END as separate events but part of the same activity.
to do so we add a :tracking-hash to the events when they are published
which is meant to remain consistent throughout the sync, then we
implement our activity tracking code so that we can lookup an existing
activity item and update it based on the custom hash.

```

مطمئن نیستیم چرا END اینجا با حروف بزرگ است. ممکن است معنایی نداشته باشد، اما به جستجو ادامه می‌دهیم…

بعد: [سرنخ 2](#clue-2).

## افزودن یک داشبورد متابیس به یک وب‌سایت

بعد، می‌خواهیم داشبورد بررسی زنده خود را در کنار یک فرم وب برای نظرات نمایش دهیم، تا جامعه ما بتواند به یک مکان واحد برای مشارکت در بررسی برود. برای انجام آن، یک وب‌سایت جدید تنظیم می‌کنیم و داشبورد و فرم وب خود را به عنوان iframeهای جاسازی شده اضافه می‌کنیم.

ساده‌ترین راه برای تنظیم یک وب‌سایت استفاده از یک site builder رایگان است. اینجا، از [Google Sites](https://workspace.google.com/intl/en_ca/products/sites/) استفاده می‌کنیم. اگر از Google Workspace استفاده نمی‌کنید، می‌توانید ابزاری مثل Squarespace یا Webflow را امتحان کنید.

![آماده کردن یک وب‌سایت برای جاسازی‌های ما.](../../images/external-sharing/google-site-initial.png)

بعد، به [گزینه‌های اشتراک‌گذاری](../../../docs/latest/embedding/public-links.html#public-embeds) روی داشبورد متابیس خود برمی‌گردیم، و کد زیر **Public embed** را کپی می‌کنیم. یک عنصر embed به Google Site اضافه می‌کنیم و snippet کد را آنجا paste می‌کنیم:

![افزودن snippet iframe متابیس به یک عنصر embed در Google Site ما.](../../images/external-sharing/google-site-embed-snippet.png)

سپس، یک فرم Google عمومی ایجاد می‌کنیم و آن را در Google Drive ذخیره می‌کنیم. برای افزودن فرم به Google Site ما، می‌توانیم منوی **Insert** را (که در شکل 2 بالا نشان داده شده) اسکرول کنیم و **Form** را انتخاب کنیم.

حالا، یک [وب‌سایت بررسی زنده](https://sites.google.com/metabase.com/metabase-mystery-public/home) داریم که داشبورد متابیس ما را همراه با یک فرم برای نظرات نمایش می‌دهد. جامعه ما قادر به:

- دسترسی به آخرین داده و سرنخ‌ها از جاسازی عمومی داشبورد متابیس ما.
- مشارکت در جستجو با استفاده از یک فرم Google جاسازی شده.

### سرنخ 2

از آنجایی که به outlier حداکثر نگاه کردیم، فقط منطقی بود به commitها با حداقل طول پیام نیز نگاه کنیم. کوتاه‌ترین پیام فقط سه کاراکتر طول دارد، و دوباره با حروف بزرگ است:

```txt
LAG

```

بعد: [سرنخ 3](#clue-3).

## محدود کردن دسترسی به یک داشبورد متابیس جاسازی شده

امروز صبح، کسی جاسازی عمومی متابیس ما را با هزاران درخواست برای پارامتر پرس‌وجوی وجود نداشته `filter=some_spooky_nonsense` مورد حمله قرار داد. برای محافظت از سرنخ‌ها از دسترسی به دست‌های اشتباه، می‌خواهیم مطمئن شویم که فقط کاربران تأیید شده می‌توانند به ردیف‌های با سرنخ‌ها دسترسی پیدا کنند.

می‌توانیم این لایه امنیتی اضافی را با تغییر جاسازی عمومی به یک [جاسازی استاتیک](../../../docs/latest/embedding/static-embedding.html) اضافه کنیم. می‌خواهیم جاسازی استاتیک داشبورد ما نمایش دهد:

- بدون داده برای افرادی که وارد نمی‌شوند.
- داده محدود شده (همه چیز به جز سرنخ‌ها) برای افرادی که وارد می‌شوند.
- داده مخفی (سرنخ‌ها) برای افرادی که با رمز مخفی وارد می‌شوند.

جاسازی استاتیک با یک site generator مثل Google Sites کار نمی‌کند، چون نیاز به اجرای سرور وب خود داریم تا [token امضا شده](../../../docs/latest/embedding/static-embedding.html#how-static-embedding-works) که داده ما را امن می‌کند تولید کنیم. اگر می‌خواهید با بقیه آموزش جاسازی استاتیک همراه باشید، نیاز دارید:

- instance متابیس خود (و کلید مخفی جاسازی مرتبط).
- یک clone از [repo اپلیکیشن‌های مرجع جاسازی](https://github.com/metabase/embedding-reference-apps) (ما [مثال Node](https://github.com/metabase/embedding-reference-apps/tree/master/node) را تغییر می‌دهیم).
- یک کپی از [داده `metabase-mystery`](https://docs.google.com/spreadsheets/d/1dN4t7SycigAZRAb0ptuWqOSJifm7jhr8fgTiIjp43bw/edit#gid=0).

### تنظیم یک صفحه ورود

ابتدا، نیاز به راهی برای اعتبارسنجی هویت افرادی که سعی می‌کنند به وب‌سایت بررسی زنده ما دسترسی پیدا کنند داریم. معمولاً، این با یک صفحه ورود powered توسط یک سرویس احراز هویت (مثل Google sign-in) انجام می‌شود، تا:

- در ورود موفق، سرور وب ما یک پارامتر پرس‌وجو مثل `user=verified` به یک فیلتر روی داشبورد متابیس ما ارسال کند، که سرنخ‌ها را آشکار می‌کند.
- در ورود ناموفق، فیلتر داشبورد متابیس پارامتر صحیح را از سرور وب دریافت نمی‌کند، سرنخ‌ها را مخفی نگه می‌دارد، و بقیه داده را نمایش می‌دهد.

برای نشان دادن نمایش و مخفی کردن داده بر اساس ورود، با flow احراز هویت ساده تعریف شده در `login.pug` شروع می‌کنیم (که قطعاً ثابت می‌کند شما هم واقعی و هم غیرمشکوک هستید).

```pug
form(method="POST" action="/login")
    input(type="text" name="username" value="metabot")
    input(type="password" name="password" value="unverified")
    input(type="hidden" name="redirect" value=redirectUrl)
    p Can you be trusted?
    button(type="submit" class="primary") Yes
```

### هدایت مردم به URLهای مختلف بر اساس ورود آن‌ها

برای ردیابی اطلاعات ورود یک شخص، کد سرور در `index.js` را با یک متغیر به نام `messageType` تغییر می‌دهیم:

```javascript
function checkAuth(req, res, next) {
  const messageType = req.session.messageType;
  if (messageType) {
    return next();
  }
  req.session.redirectTo = req.path;
  return res.redirect("/login");
}
```

سپس، منطقی برای مدیریت انواع مختلف ورود تنظیم می‌کنیم. مقدار ذخیره شده در `messageType` برای [فیلتر داده](#restricting-data-with-a-locked-parameter) که در [URL جاسازی استاتیک](#generating-a-static-embedding-url) نمایش داده می‌شود استفاده می‌شود.

```javascript
if (username === "metabot" && password === "regularPassword") {
  // require a login to view the commit messages
  req.session.messageType = "not secret";
  res.redirect(req.session.redirectTo);
} else if (username === "metabot" && password === "secretPassword") {
  // require a login with the secret password to view the clues
  req.session.messageType = "secret";
  res.redirect(req.session.redirectTo);
} else {
  // allow people without logins to submit comments
  res.redirect("/");
}
```

### تولید URL جاسازی استاتیک

حالا، می‌توانیم کد سرور در `index.js` را برای تولید پویای URL جاسازی استاتیک برای هر شخصی که وارد می‌شود به‌روزرسانی کنیم. این URLها امن هستند چون با کلید مخفی جاسازی ما امضا شده‌اند. سرور همچنین مقدار `messageType` ("secret" یا "not secret") را به یک فیلتر روی داشبورد متابیس ما برای مخفی یا نمایش سرنخ‌ها در داده پاس می‌دهد. این فیلتر را در مرحله بعد تنظیم می‌کنیم.

```javascript
app.get("/signed_dashboard/:id", checkAuth, (req, res) => {
  const messageType = req.session.messageType;
  const unsignedToken = {
    resource: { dashboard: DASHBOARD_ID },
    params: { keep_secret: messageType },
    exp: Math.round(Date.now() / 1000) + 10 * 60, // 10 minute expiration
  };
  // sign the JWT token with our secret key
  const signedToken = jwt.sign(unsignedToken, MB_EMBEDDING_SECRET_KEY);
  // construct the URL of the iframe to be displayed
  const iframeUrl = `${MB_SITE_URL}/embed/dashboard/${signedToken}`;
  res.render("dashboard", { messageType: req.params.id, iframeUrl: iframeUrl });
});
```

### محدود کردن داده با یک پارامتر قفل شده

برای مشخص کردن ردیف‌های داده که باید نمایش داده شوند بسته به ورود یک شخص، به داده commit git خود برمی‌گردیم و یک [ستون سفارشی](../querying-and-dashboards/questions/custom-expressions.html) به نام **Message Type** اضافه می‌کنیم که از یک [عبارت case](../../../docs/latest/questions/query-builder/expressions/case.html) برای تنظیم ردیف‌های با سرنخ‌ها به "secret"، و بقیه داده به "not secret" استفاده می‌کند.

![تنظیم داده خام تا بتوانیم سرنخ‌ها را بر اساس مقدار فیلتر نمایش یا مخفی کنیم.](../../images/external-sharing/message-type-column.png)

سپس، برای مطمئن شدن از اینکه می‌توانیم همه داده روی داشبورد بررسی زنده خود را محدود کنیم، نیاز به ایجاد یک ستون **Message Type** برای *هر* یک از سؤال‌های روی داشبورد داریم.

وقتی داده تنظیم شد، یک فیلتر به داشبورد بررسی زنده خود اضافه می‌کنیم، و فیلتر را به همه ستون‌های **Message Type** در هر یک از سؤال‌های خود لینک می‌کنیم. همچنین "not secret" را زیر **Default value** قرار می‌دهیم تا فقط ردیف‌های غیرسرنخ به طور پیش‌فرض نمایش داده شوند.

![افزودن یک فیلتر برای مخفی کردن ردیف‌های با سرنخ‌ها.](../../images/external-sharing/message-type-dashboard-filter.png)

حالا، می‌توانیم [جاسازی استاتیک را فعال کنیم](../../../docs/latest/embedding/static-embedding.html#making-a-question-or-dashboard-embeddable) روی داشبورد خود و یک [پارامتر قفل شده](../../../docs/latest/embedding/static-embedding-parameters.html#restricting-data-in-a-static-embed-with-locked-parameters) تنظیم کنیم. پارامتر قفل شده مقدار `messageType` "secret" یا "not secret" را از سرور وب در طول flow ورود دریافت می‌کند (بسته به رمزی که استفاده می‌شود). این پارامتر قفل شده مقدار "secret" یا "not secret" را به فیلتر روی داشبورد *اصلی* ما قبل از اینکه نتایج در [URL جاسازی استاتیک](#generating-a-static-embedding-url) نمایش داده شوند اعمال می‌کند.

![افزودن یک پارامتر قفل شده به جاسازی استاتیک.](../../images/external-sharing/message-type-locked-parameter.png)

### مشاهده جاسازی‌های استاتیک با سطوح مختلف دسترسی

وقتی `layout.pug` را با [کد frontend برای جاسازی استاتیک ما](../../../docs/latest/embedding/static-embedding.html#previewing-the-code-for-an-embed) به‌روزرسانی کردیم، می‌توانیم کد سرور را اجرا کنیم تا یک سایت محلی با لینک به داشبورد بررسی زنده خود و یک فرم Google جاسازی شده برای نظرات بسازیم:

![وب‌سایت ساخته شده محلی با لینک به جاسازی استاتیک ما.](../../images/external-sharing/local-site.png)

کلیک روی لینک مردم را برای ورود برای مشاهده داده prompt می‌کند. سرنخ‌هایی که تا کنون پیدا کرده‌ایم به طور پیش‌فرض مخفی هستند:

![مردم باید وارد شوند تا داشبورد بررسی زنده را مشاهده کنند.](../../images/external-sharing/regular-login.gif)

برای دسترسی به ردیف‌های با سرنخ‌ها، مردم باید رمز مخفی را ارائه دهند:

![مردم باید رمز مخفی را ارائه دهند تا سرنخ‌ها در داده را مشاهده کنند.](../../images/external-sharing/secret-login.gif)

اگر ورود معتبر ندارید، می‌توانید از طریق فرم درخواست دسترسی دهید (یا فقط به عنوان یک نظر دهنده مشتاق در راز مشارکت کنید):

![مردم به صفحه اصلی هدایت می‌شوند اگر می‌توانند](../../images/external-sharing/failed-login.gif)

### سرنخ 3

سرنخ دیگر مخفی در توزیع—این بار، در طول پیام میانه:

```txt
fixes mobile password reSET and confirmation #869

```

## بازی در جریان است

نیاز به کمک بیشتر از دوستان داده خود داریم. تا کنون، سرنخ‌های END، LAG، و SET را پیدا کرده‌ایم. هم‌تیمی ما سعی داشت چه چیزی به ما بگوید؟ [داده را دریافت کنید](https://docs.google.com/spreadsheets/d/1dN4t7SycigAZRAb0ptuWqOSJifm7jhr8fgTiIjp43bw/edit#gid=0) و بازی کنید تا ببینید آیا می‌توانید راز را حل کنید.

راه‌حل توسط یک ویژگی متابیس paywall نشده (که این راز را کمی خیلی ترسناک می‌کرد)، اما اگر می‌خواهید مجموعه داده را با استفاده از متابیس کاوش کنید، می‌توانید:

- فایل CSV را به یک Google Sheet آپلود کنید و [متابیس را به Google Drive متصل کنید](../../../docs/latest/databases/connections/bigquery.html#connecting-metabase-to-google-drive-data-sources)، یا
- CSV را مستقیماً به یک پایگاه داده یا انبار داده متصل به متابیس sync کنید.

## مطالعه بیشتر

- [راهنمای اشتراک‌گذاری داده](../administration/administration-and-operation/guide-to-sharing-data.html)
- [پیکربندی مجوزها برای schemaهای مختلف مشتری](../../../docs/latest/permissions/embedding.html)
- [پنج مرحله غم جاسازی](../../grow-your-data-skills/analytics/embedding-mistakes.html)

[
      
        

      
      
        
        

      
    ](charts-and-dashboards.html)
[
      
        
        

      
      
        
        

      
    ](multi-tenant-self-service-analytics.html)
