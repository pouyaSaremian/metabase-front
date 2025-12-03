---
title: اجزای UI جاسازی تعاملی
description: سفارشی کردن اجزای UI در جاسازی تعاملی متابیس با افزودن پارامترها به URL جاسازی.
---

# اجزای UI جاسازی تعاملی

برای تغییر رابط جاسازی تعاملی خود، می‌توانید پارامترها را به انتهای URL جاسازی خود اضافه کنید. اگر می‌خواهید رنگ‌ها یا فونت‌ها را در جاسازی خود تغییر دهید، [سفارشی‌سازی ظاهر](../configuring-metabase/appearance.md) را ببینید.

> اگر تازه با جاسازی متابیس شروع می‌کنید، استفاده از [تجزیه و تحلیل تعبیه‌شده JS](./embedded-analytics-js.md) را به جای جاسازی تعاملی در نظر بگیرید - این یک گزینه بهبود یافته و قابل سفارشی‌سازی بیشتر برای جاسازی عناصر تعاملی متابیس است. جاسازی تعاملی همچنان به طور کامل پشتیبانی می‌شود.

به عنوان مثال، می‌توانید [نوار nav بالایی](#top_nav) و [منوی nav کناری](#side_nav) متابیس را اینگونه غیرفعال کنید:

```
your_embedding_url?top_nav=false&side_nav=false
```

![Top nav and side nav disabled](./images/no-top-no-side.png)

در اینجا یک مثال با استفاده از constructor URL برای افزودن پارامترها به URL برای iframe آمده است:

```tsx
const mods = "logo=false&top_nav=true&search=true&new_button=true";

app.get("/sso/metabase", restrict, (req, res) => {
  const ssoUrl = new URL("/auth/sso", METABASE_SITE_URL);
  ssoUrl.searchParams.set("jwt", signUserToken(req.session.user));
  ssoUrl.searchParams.set("return_to", `${req.query.return_to ?? "/"}?${mods}`);

  res.redirect(ssoUrl);
});
```

پارامترها شامل موارد زیر هستند:

- [دکمه‌های عمل](#action_buttons)
- [اطلاعات اضافی](#additional_info)
- [مسیرهای breadcrumb](#breadcrumbs)
- [انواع موجودیت](#entity_types)
- [هدر](#header)
- [زبان محلی](#locale)
- [لوگو](#logo)
- [دکمه جدید](#new_button)
- [جستجو](#search)
- [Nav کناری](#side_nav)
- [Nav بالایی](#top_nav)

> برای اطمینان از اینکه پارامترهای query هنگام استفاده از [رفتار کلیک](../dashboards/interactive.md#customizing-click-behavior) حفظ می‌شوند، تنظیم [Site URL](../configuring-metabase/settings.md#site-url) Admin را روی URL سرور متابیس خود پیکربندی کنید.

## `action_buttons`

به‌طور پیش‌فرض در صفحات سؤال زمانی که [هدر](#header) فعال است قابل مشاهده است.

برای مخفی کردن دکمه‌های عمل مانند **Filter**، **Summarize**، دکمه سازنده پرس‌وجو و غیره:

```
header=false&action_buttons=false
```

![Action buttons](./images/action-buttons.png)

## `additional_info`

به‌طور پیش‌فرض در صفحات سؤال و داشبورد زمانی که [هدر](#header) فعال است قابل مشاهده است.

برای مخفی کردن متن خاکستری "Edited X days ago by FirstName LastName"، و همچنین breadcrumbها با نام‌های مجموعه، پایگاه داده و جدول:

```
header=false&additional_info=false
```

![Additional info](./images/additional-info.png)

## `breadcrumbs`

به‌طور پیش‌فرض در نوار nav بالایی نمایش داده می‌شود. Breadcrumbهای مجموعه مسیر به مورد را نشان می‌دهند (یعنی مجموعه(های) که مورد در آن است). این روی Breadcrumbهای Data تأثیر نمی‌گذارد اگر کاربر مجوزهای Query Builder داشته باشد. برای مخفی کردن breadcrumbها:

```
breadcrumbs=false
```

## `data_picker`

`data_picker` منوی انتخاب منابع داده در سؤال‌ها را کنترل می‌کند.

![Simple data picker](./images/data-picker.png)

رفتار پیش‌فرض برای data picker این است:

- نمایش جداول و مدل‌ها.
- حذف متریک‌ها و سؤال‌ها.
- نمایش یک منوی dropdown ساده. اگر 100 مورد یا بیشتر وجود داشته باشد، متابیس یک data picker پیشرفته نمایش می‌دهد.

می‌توانید data picker کامل را با تنظیم `data_picker=staged` انتخاب کنید:

![Full data picker](./images/full-data-picker.png)

data picker بالا سه نوع موجودیت انتخاب شده دارد:

```
data_picker=staged&entity_types=table,model,question
```

## `entity_types`

می‌توانید انواع موجودیت مختلف را در data picker، sidebar و منوی دکمه New نمایش دهید یا مخفی کنید. به عنوان مثال، ممکن است فقط بخواهید جداول را نمایش دهید:

```
entity_types=table
```

اگر فقط جداول مجاز باشند، sidebar مدل‌ها را نمایش نمی‌دهد:

![Sidebar without models](./images/sidebar-without-models.png)

انواع موجودیت موجود عبارتند از:

- `table`
- `model`
- `question` (فقط با `data_picker=staged` کار می‌کند)

می‌توانید انواع موجودیت را با کاما جدا کنید:

```
entity_types=table,model
```

## `header`

به‌طور پیش‌فرض در صفحات سؤال و داشبورد قابل مشاهده است.

برای مخفی کردن عنوان یک سؤال یا داشبورد، [اطلاعات اضافی](#additional_info)، و [دکمه‌های عمل](#action_buttons):

```
header=false
```

## `locale`

می‌توانید زبان رابط کاربری را از طریق یک پارامتر تغییر دهید. به عنوان مثال، برای تنظیم زبان محلی روی اسپانیایی:

```
locale=es
```

بیشتر در مورد [بومی‌سازی](../configuring-metabase/localization.md) بخوانید.

## `logo`

آیا لوگویی که sidebar nav را باز و بسته می‌کند نمایش داده شود. پیش‌فرض true است. رفتار لوگو بستگی به تنظیم `side_nav` دارد:

| `logo` | `side_nav` | نتیجه                                                                |
| ------ | ---------- | --------------------------------------------------------------------- |
| true   | true       | لوگوی پیکربندی شده شما را در sidebar نمایش می‌دهد                             |
| true   | false      | هیچ sidebar یا عملکرد لوگو                                      |
| false  | true       | یک آیکون sidebar عمومی نمایش می‌دهد (خاکستری در حالت عادی، رنگ برند در hover) |
| false  | false      | بدون sidebar یا لوگو، با breadcrumbها تراز شده به لبه چپ         |

## `new_button`

به‌طور پیش‌فرض مخفی است. برای نمایش دکمه **+ New** استفاده شده برای ایجاد پرس‌وجوها یا داشبوردها:

```
top_nav=true&new_button=true
```

## `search`

به‌طور پیش‌فرض مخفی است. برای نمایش جعبه جستجو در nav بالایی:

```
top_nav=true&search=true
```

## `side_nav`

sidebar ناوبری در routeهای `/collection` و صفحه اصلی نمایش داده می‌شود و در همه جاهای دیگر به‌طور پیش‌فرض مخفی است.

برای اجازه دادن به افراد برای کوچک کردن sidebar:

```
top_nav=true&side_nav=true
```

![Side nav](./images/side-nav.png)

## `top_nav`

به‌طور پیش‌فرض نمایش داده می‌شود. برای مخفی کردن نوار ناوبری بالایی:

```
top_nav=false
```

![Top nav bar](./images/top-nav.png)

پارامتر `top_nav` قابلیت مشاهده کل نوار ناوبری بالایی را کنترل می‌کند. وقتی `top_nav` روی `false` تنظیم می‌شود، همه عناصر فرزند (`search`، `new_button`، و `breadcrumbs`) به طور خودکار مخفی می‌شوند. وقتی `top_nav` روی `true` تنظیم می‌شود، می‌توانید قابلیت مشاهده این عناصر فرزند را به صورت جداگانه کنترل کنید.
