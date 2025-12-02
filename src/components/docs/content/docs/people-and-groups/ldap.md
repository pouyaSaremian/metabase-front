---
title: LDAP
---

# LDAP

متابیس از احراز هویت با Lightweight Directory Access Protocol (LDAP) پشتیبانی می‌کند.

می‌توانید گزینه‌های SSO را در **Admin settings** > **Settings** > **Authentication** پیدا کنید.

## ویژگی‌های LDAP الزامی

باید دایرکتوری LDAP خود را با این ویژگی‌ها تنظیم کنید:

- email (پیش‌فرض به ویژگی `mail`)
- نام (پیش‌فرض به ویژگی `givenName`)
- نام خانوادگی (پیش‌فرض به ویژگی `sn`).

اگر تنظیم LDAP شما از ویژگی‌های دیگر برای این‌ها استفاده می‌کند، می‌توانید این را در بخش "Attributes" فرم ویرایش کنید.

![ویژگی‌ها](./images/ldap-attributes.png)

دایرکتوری LDAP شما باید فیلد ایمیل را برای هر ورودی که به یک کاربر متابیس تبدیل می‌شود پر کند، در غیر این صورت متابیس نمی‌تواند حساب را ایجاد کند، و آن شخص نمی‌تواند وارد شود. اگر هر فیلد نامی گم شده باشد، متابیس از پیش‌فرض "Unknown" استفاده می‌کند، و شخص می‌تواند نام خود را در [تنظیمات حساب](./account-settings.md) تغییر دهد.

## فعال کردن احراز هویت LDAP

در تب **Admin settings** > **Settings** > **Authentication**، به بخش LDAP بروید و روی **Set up** کلیک کنید. toggle در بالای فرم را برای فعال کردن LDAP بزنید، سپس فرم را با جزئیات مرتبط پر کنید.

## Provisioning کاربر

وقتی یک شخص از طریق LDAP وارد می‌شود، متابیس می‌تواند یک حساب متابیس برای آن‌ها به‌طور خودکار ایجاد کند (اگر قبلاً حساب متابیس ندارند).

## تنظیمات سرور

- LDAP Host. نام سرور شما. مثلاً، ldap.yourdomain.org
- LDAP Port. پورت سرور، معمولاً 389 یا 636 اگر SSL استفاده شود.
- تنظیمات امنیتی LDAP. گزینه‌ها None، SSL، یا StarTLS هستند.
- نام کاربری ادمین LDAP. نام متمایز برای bind شدن (در صورت وجود). این کاربر برای جستجوی اطلاعات دربارهٔ کاربران دیگر استفاده می‌شود.
- رمز عبور ادمین LDAP.

سپس تغییرات خود را ذخیره کنید. متابیس به‌طور خودکار [ویژگی‌های الزامی](#required-ldap-attributes) را از دایرکتوری LDAP شما می‌کشد.

## Schema کاربر

بخش **User Schema** در همین صفحه جایی است که می‌توانید تنظیمات مرتبط با اینکه متابیس کجا و چگونه به سرور LDAP شما متصل می‌شود تا کاربران را احراز هویت کند تنظیم کنید.

### پایه جستجوی کاربر

فیلد **User search base** باید با _نام متمایز_ (DN) ورودی در سرور LDAP شما که نقطه شروع هنگام جستجو برای کاربران است تکمیل شود.

به‌عنوان مثال، فرض کنید LDAP را برای شرکت خود، WidgetCo، پیکربندی می‌کنید، جایی که DN پایه شما `dc=widgetco,dc=com` است. اگر ورودی‌های کارمندان همه درون یک واحد سازمانی در سرور LDAP شما به نام `People` ذخیره شده‌اند، می‌خواهید فیلد user search base را با DN `ou=People,dc=widgetco,dc=com` تأمین کنید. این به متابیس می‌گوید که جستجو برای ورودی‌های تطبیق‌دار را در آن مکان درون سرور LDAP شروع کند.

### فیلتر کاربر

مقدار پیش‌فرض زیر را در فیلد **User filter** می‌بینید که خاکستری شده است:

```
(&(objectClass=inetOrgPerson)(|(uid={login})(mail={login})))
```

وقتی یک شخص به متابیس وارد می‌شود، این دستور تأیید می‌کند که ورود ارائه‌شده آن‌ها با یک فیلد UID _یا_ ایمیل در سرور LDAP شما تطبیق دارد، _و_ اینکه ورودی تطبیق‌دار یک objectClass از `inetOrgPerson` دارد.

این دستور پیش‌فرض برای بیشتر سرورهای LDAP کار می‌کند، چون `inetOrgPerson` یک objectClass به‌طور گسترده پذیرفته شده است. اما اگر شرکت شما مثلاً از یک objectClass متفاوت برای دسته‌بندی کارمندان استفاده می‌کند، این فیلد جایی است که می‌توانید یک دستور متفاوت برای نحوهٔ پیدا کردن و احراز هویت یک ورودی LDAP توسط متابیس هنگام ورود یک شخص تنظیم کنید.

## نگاشت گروه LDAP

اختصاص دستی افراد به [گروه‌ها](./managing.md#groups) در متابیس بعد از اینکه از طریق SSO وارد شده‌اند می‌تواند خسته‌کننده شود. در عوض، می‌توانید از گروه‌هایی که از قبل در دایرکتوری LDAP شما وجود دارند با فعال کردن [نگاشت‌های گروه](https://www.metabase.com/learn/metabase-basics/administration/permissions/ldap-auth-access-control#group-management) استفاده کنید.

به **Group Schema** در همان صفحه تنظیمات LDAP اسکرول کنید، و toggle را برای فعال کردن نگاشت گروه بزنید. انتخاب **Edit Mapping** یک مودال باز می‌کند که می‌توانید در آن نگاشت‌ها را ایجاد و ویرایش کنید، مشخص کردن اینکه کدام گروه LDAP با کدام گروه متابیس مطابقت دارد.

همانطور که در زیر می‌بینید، اگر یک گروه **Accounting** در هر دو سرور LDAP و instance متابیس خود دارید، فقط باید نام متمایز از سرور LDAP خود را (در مثال، `cn=Accounting,ou=Groups,dc=widgetco,dc=com` است) تأمین کنید و تطبیق آن را از منوی dropdown گروه‌های متابیس موجود انتخاب کنید.

![نگاشت گروه](images/ldap-group-mapping.png)

برخی چیزها برای در نظر گرفتن دربارهٔ نگاشت گروه:

- گروه Administrator مثل هر گروه دیگری کار می‌کند.
- به‌روزرسانی‌های عضویت گروه یک شخص بر اساس نگاشت‌های LDAP فوری نیستند؛ تغییرات فقط _بعد از_ اینکه افراد دوباره وارد می‌شوند اعمال می‌شوند.
- افراد فقط به گروه‌های نگاشت‌شده اضافه یا از آن‌ها حذف می‌شوند؛ همگام‌سازی روی گروه‌هایی در متابیس شما که نگاشت LDAP ندارند تأثیری ندارد.

## فیلتر عضویت گروه LDAP

{% include plans-blockquote.html feature="LDAP advanced features" %}

فیلتر جستجوی عضویت گروه. placeholderهای {dn} و {uid} به‌ترتیب با نام متمایز و UID کاربر جایگزین می‌شوند.

## همگام‌سازی ویژگی‌های کاربر با LDAP

{% include plans-blockquote.html feature="LDAP advanced features" %}

می‌توانید [ویژگی‌های کاربر][user-attributes-def] مثل نام‌ها، ایمیل‌ها، و نقش‌ها را از دایرکتوری LDAP خود مدیریت کنید. وقتی [امنیت ردیف و ستون][row-and-column-security] را تنظیم می‌کنید، دایرکتوری LDAP شما قادر خواهد بود [این ویژگی‌ها را][user-attributes-docs] به متابیس ارسال کند.

## عیب‌یابی مشکلات ورود

- [نمی‌تواند وارد شود](../troubleshooting-guide/cant-log-in.md).
- [عیب‌یابی LDAP](../troubleshooting-guide/ldap.md)

## مطالعهٔ بیشتر

- [استفاده از LDAP برای احراز هویت و کنترل دسترسی](https://www.metabase.com/learn/metabase-basics/administration/permissions/ldap-auth-access-control).
- [نمای کلی مجوزها](../permissions/start.md).

[row-and-column-security]: ../permissions/row-and-column-security.md
[google-saml-docs]: ./saml-google.md
[jwt-docs]: ./authenticating-with-jwt.md
[saml-docs]: ./authenticating-with-saml.md
[user-attributes-docs]: ../permissions/row-and-column-security.md#choosing-user-attributes-for-row-and-column-security
[user-attributes-def]: https://www.metabase.com/glossary/attribute#user-attributes-in-metabase
