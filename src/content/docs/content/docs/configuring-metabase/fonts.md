---
title: فونت‌ها
redirect_from:
  - /docs/latest/enterprise-guide/fonts
  - /docs/latest/embedding/fonts
---

# فونت‌ها

{% include plans-blockquote.html feature="Customizable font" %}

در پلن‌های Pro و Enterprise می‌توانید فونتی را که متابیس استفاده می‌کند سفارشی کنید (فونت پیش‌فرض [Lato](https://fonts.google.com/specimen/Lato) است). می‌توانید از میان مجموعه‌ای انتخاب‌شده از Google Fonts، فونتی را برگزینید که وزن‌های Regular، Bold و Heavy موردنیاز متابیس برای اجزای مختلف رابط کاربری را پشتیبانی کند.

## فونت‌های درون‌ساخت

برای تغییر فونت متابیس، روی آیکون **چرخ‌دنده** در گوشهٔ بالا سمت راست کلیک کنید و به **Admin settings > Settings > Appearance** بروید. در بخش **Font** از میان فونت‌های موجود یکی را انتخاب کنید:

- [Custom font](#custom-fonts)
- [Lato](https://fonts.google.com/specimen/Lato)
- [Lora](https://fonts.google.com/specimen/Lora)
- [Merriweather](https://fonts.google.com/specimen/Merriweather)
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
- [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- [Oswald](https://fonts.google.com/specimen/Oswald)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Poppins](https://fonts.google.com/specimen/Poppins)
- [PT Sans](https://fonts.google.com/specimen/PT+Sans)
- [PT Serif](https://fonts.google.com/specimen/PT+Serif)
- [Raleway](https://fonts.google.com/specimen/Raleway)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
- [Slabo 27px](https://fonts.google.com/specimen/Slabo+27px)
- Source Sans Pro
- [Ubuntu](https://fonts.google.com/specimen/Ubuntu)

در حال حاضر Comic Sans در این لیست وجود ندارد.

## فونت‌های سفارشی

برای تنظیم فونت سفارشی، روی آیکون **چرخ‌دنده** در بالای صفحه کلیک کنید و به **Admin settings > Settings > Appearance** بروید.

در بخش **Font** گزینهٔ **Custom...** را انتخاب کنید و URL فایل‌های فونت خود را وارد کنید.

## گزینه‌های سبک فونت

می‌توانید سه سبک مختلف فونت را با سه URL جداگانه تنظیم کنید؛ هرکدام برای یک وزن/استایل که متابیس برای نمایش درست رابط کاربری به آن نیاز دارد. وزن‌های اصلی عبارتند از:

- Regular 400
- Bold 700
- Heavy 900 (که گاهی Black 900 نامیده می‌شود)

تنها مقداری که الزاماً باید تنظیم کنید وزن ۴۰۰ است؛ مرورگر در بسیاری از موارد بقیهٔ وزن‌ها را خودش پر می‌کند.

برای بهترین نتیجه، حداقل وزن‌های ۴۰۰ و ۷۰۰ را مشخص کنید. اگر یک فایل فونت دارید که چند وزن مختلف را در خود جا داده است، می‌توانید URL همان فایل را در چند فیلد تکرار کنید تا متابیس از همان فایل برای وزن‌های مختلف استفاده کند و استایل‌های فونت مرورگر را override کند.

### فرمت‌های پشتیبانی‌شدهٔ فایل فونت

برای فونت‌های سفارشی، متابیس از فرمت‌های `woff`، `woff2` و `ttf` پشتیبانی می‌کند. اگر URL شما پسوند مشخصی نداشته باشد، متابیس فرض می‌کند فایل از نوع `woff2` است.

## URLهای Google Font

برای گرفتن URL یک [Google Font](https://fonts.google.com/)، صفحهٔ فونت مورد نظر را باز کنید و استایل دلخواهتان را انتخاب کنید، سپس یک درخواست HTTP بفرستید تا CSS مربوط به فونت و آدرس فایل ttf/woff2 را بگیرید. برای مثال، اگر بخواهیم از Roboto Mono استفاده کنیم و وزن‌های ۴۰۰ و ۷۰۰ را داشته باشیم:

URL زیر را در مرورگر باز می‌کنیم:

`https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap`

خروجی پاسخی شبیه این خواهد بود:

```css
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v21/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSV0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/robotomono/v21/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSx0me8iUI0lkQ.woff2) format('woff2');
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
...
```

برای متن‌های لاتین، URLهای `src` مربوط به محدودهٔ یونیکد لاتین را برمی‌داریم؛ مثلاً:

- برای وزن ۴۰۰: `https://fonts.gstatic.com/s/robotomono/v21/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2`
- برای وزن ۷۰۰: `https://fonts.gstatic.com/s/robotomono/v21/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vrtSM1J-gEPT5Ese6hmHSh0me8iUI0.woff2`

سپس این URLها را در ورودی‌های مربوطه در مسیر **Admin settings > Settings > Appearance > Font** و در بخشی که نوشته «Tell us where to find the file for each font weight…» قرار می‌دهیم.

## میزبانی فونت روی GitHub

اگر فونتی را روی GitHub میزبانی می‌کنید، مخزن باید عمومی باشد و باید به نسخهٔ raw فایل در دامنهٔ `raw.githubusercontent.com` لینک بدهید.

برای مثال، اگر بخواهید از فونت Inter استفاده کنید و فونت در این آدرس قرار دارد:

`https://github.com/rsms/inter/blob/master/docs/font-files/Inter-Regular.woff2`

لینکی که باید در متابیس استفاده کنید این است:

`https://raw.githubusercontent.com/rsms/inter/master/docs/font-files/Inter-Regular.woff2`

این URL از الگوی زیر پیروی می‌کند:

```txt
raw.githubusercontent.com/${user}/${repo}/${branch}/${path}
```

دقت کنید که در لینک raw، دایرکتوری `/blob/` وجود ندارد.

## پشتیبانی از چند زبان

برای پشتیبانی از چند مجموعه کاراکتر (مثلاً هم‌زمان لاتین و سیریلیک) باید فایل‌های فونت را ادغام کنید یا از خانواده‌فونتی استفاده کنید که همهٔ اسکریپت‌های مورد نیاز شما را پوشش دهد.

## سفارشی‌سازی فونت برای آیتم‌های Embedding

علاوه بر [فونت‌های درون‌ساخت](#included-fonts)، اگر برای اینستنس متابیس خود یک فونت سفارشی تعریف کنید، آن فونت در تنظیمات [Embeddهای استاتیک](../embedding/static-embedding.md) به‌صورت گزینهٔ «Use instance font» قابل انتخاب خواهد بود.

## مطالعهٔ بیشتر

- [سفارشی‌سازی ظاهر متابیس](./appearance.md)
- تحلیل رو به کاربر نهایی: `https://www.metabase.com/learn/metabase-basics/embedding`
- [مستندات Embedding](../embedding/start.md)
