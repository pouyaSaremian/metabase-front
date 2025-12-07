---
 title: "استفاده از LDAP برای احراز هویت و کنترل دسترسی"
description: "درباره استفاده از LDAP برای احراز هویت مردم و مدیریت دسترسی آن‌ها به داده بیاموزید."
redirect_from:
  - /learn/metabase-basics/administration/permissions/ldap-auth-access-control
  - /learn/permissions/ldap-auth-access-control
toc:
  - id: "using-ldap-for-authentication-and-access-control"
    title: "استفاده از LDAP برای احراز هویت و کنترل دسترسی"
    level: 1
    href: "#using-ldap-for-authentication-and-access-control"
  - id: "setting-up-ldap"
    title: "تنظیم LDAP"
    level: 2
    href: "#setting-up-ldap"
  - id: "connecting-to-ldap"
    title: "اتصال به LDAP"
    level: 2
    href: "#connecting-to-ldap"
  - id: "creating-a-group"
    title: "ایجاد یک گروه"
    level: 3
    href: "#creating-a-group"
  - id: "authenticating"
    title: "احراز هویت"
    level: 3
    href: "#authenticating"
  - id: "permissions"
    title: "مجوزها"
    level: 3
    href: "#permissions"
  - id: "group-management"
    title: "مدیریت گروه"
    level: 3
    href: "#group-management"
  - id: "further-reading"
    title: "مطالعه بیشتر"
    level: 2
    href: "#further-reading"
breadcrumbs:
  - title: "خانه"
    href: "../../../index.html"
  - title: "مدیریت"
    href: "../index.html"
  - title: "مجوزها"
    href: "index.html"
---

# استفاده از LDAP برای احراز هویت و کنترل دسترسی

درباره استفاده از LDAP برای احراز هویت مردم و مدیریت دسترسی آن‌ها به داده بیاموزید.

احراز هویت و کنترل دسترسی برای اطمینان از اینکه مردم درست به داده مورد نیاز خود دسترسی دارند، و *فقط* مردم درست آن دسترسی را دارند ضروری است. این آموزش نحوه اتصال متابیس به یک سرور LDAP برای احراز هویت، و نحوه استفاده از اطلاعات گروه از آن سرور LDAP برای کنترل اینکه چه کسی می‌تواند جداول در متابیس را مشاهده کند را نشان می‌دهد. ما سعی نمی‌کنیم LDAP خود را به شما آموزش دهیم، اما فقط فرض می‌کنیم چند مفهوم اساسی را می‌دانید.

## تنظیم LDAP

پایگاه داده نمونه که با متابیس ship می‌شود چهار جدول دارد. جدول `People` اطلاعات شناسایی شخصی (PII) شامل می‌کند، پس فقط می‌خواهیم مردم در Human Resources بتوانند آن را ببینند. از آنجایی که شرکت ما از قبل از LDAP برای single sign-on (SSO) استفاده می‌کند، می‌خواهیم اطلاعات درباره اینکه چه کسی در HR است (و نیست) را از LDAP دریافت کنیم. ما از قبل یک رکورد در LDAP برای شرکت داریم:

```txt
dn: dc=metabase,dc=com
objectClass: top
objectClass: dcObject
objectClass: organization
o: Metabase

```

همچنین رکوردهایی برای Farrah (که در HR است) و Rasmus (که نیست) داریم:

```txt
dn: uid=farrah,dc=metabase,dc=com
objectClass: person
objectClass: inetOrgPerson
cn: Farrah Zubin
mail: farrah@example.metabase.com
givenName: Farrah
sn: Zubin
uid: farrah
userPassword: ------

dn: uid=rasmus,dc=metabase,dc=com
objectClass: person
objectClass: inetOrgPerson
cn: Rasmus Verdorff
mail: rasmus@example.metabase.com
givenName: Rasmus
sn: Verdorff
uid: rasmus
userPassword: ------

```

رکوردهای Farrah و Rasmus مشخص نمی‌کنند در کدام گروه‌ها هستند. به جای آن، نیاز به یک رکورد جداگانه `Groups` برای گروه‌های کاربر خود داریم، و زیر آن، یک رکورد `groupOfNames` که مشخص می‌کند Farrah و یک کارمند دیگر به نام Luis در `Human Resources` هستند:

```txt
dn: ou=Groups,dc=metabase,dc=com
objectClass: top
objectClass: organizationalUnit
ou: Groups

dn: cn=Human Resources,ou=Groups,dc=metabase,dc=com
objectClass: top
objectClass: groupOfNames
description: Human Resources
member: uid=farrah,dc=metabase,dc=com
member: uid=luis,dc=metabase,dc=com

```

> اگر با OpenLDAP دنبال می‌کنید و آن را از ابتدا تنظیم می‌کنید، ممکن است نیاز به تغییر فایل پیکربندی `slapd.conf` برای شامل کردن فایل‌های schema `cosine.schema` و `inetorgperson.schema` به همراه `core.schema` داشته باشید تا این کار کند.

## اتصال به LDAP

وقتی LDAP رکوردهای درست را دارد، می‌توانیم با استفاده از یک حساب با حقوق administrator به متابیس وارد شویم. نیاز به انجام چهار کار داریم:

1. [ایجاد یک گروه](#creating-a-group).
2. [به متابیس بگوییم مردم می‌توانند از طریق LDAP احراز هویت شوند](#authenticating).
3. [مشخص کنیم کدام جداول آن گروه می‌تواند دسترسی داشته باشد](#permissions).
4. [به متابیس بگوییم اطلاعات گروه را از LDAP دریافت کند](#group-management).

### ایجاد یک گروه

برای شروع، روی **آیکون چرخ‌دنده** در پایین navigation sidebar کلیک می‌کنیم و **Admin settings** \> **People** \> **Groups** را انتخاب می‌کنیم و **Create a Group** را انتخاب می‌کنیم. گروه خود را "Human Resources" می‌نامیم، اما *هیچ* شخصی را به آن در متابیس اضافه نمی‌کنیم: می‌خواهیم به LDAP برای مدیریت membership تکیه کنیم.

### احراز هویت

گام بعدی گفتن به متابیس است که می‌تواند مردم را از طریق LDAP احراز هویت کند. برای انجام این کار، روی **Authentication** کلیک می‌کنیم، LDAP را فعال می‌کنیم، و سپس تنظیمات را پر می‌کنیم تا به متابیس بگوییم کجا می‌تواند سرور را پیدا کند. ما از یک instance محلی روی پورت 389 استفاده می‌کنیم، و می‌خواهیم متابیس از حساب "Manager" برای دسترسی به LDAP استفاده کند. همه مردم ما زیر `metabase.com` هستند، و می‌توانیم آن‌ها را با استفاده از فیلتر جستجوی پیش‌فرض (که مردم را بر اساس ID یا آدرس ایمیل جستجو می‌کند) پیدا کنیم.

در این نقطه مردم می‌توانند از طریق LDAP وارد شوند. برای تست آن، می‌توانیم یک پنجره مرورگر anonymous باز کنیم و به عنوان Rasmus یا Farrah وارد شویم. هیچ یک از آن‌ها هنوز نمی‌توانند جدول `People` را ببینند چون به متابیس نگفته‌ایم اطلاعات گروه را از LDAP دریافت کند.

### مجوزها

بعد، به **Admin settings** \> **Permissions** \> **Data** می‌رویم و دسترسی عمومی به جدول `People` را غیرفعال می‌کنیم تا مردم به طور پیش‌فرض نتوانند آن جدول را ببینند. سپس دسترسی را به گروه `Human Resources` اعطا می‌کنیم. ([مستندات ما درباره امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html) اطلاعات بیشتری درباره مدیریت دسترسی جدول در متابیس دارند.)

### مدیریت گروه

بیایید به صفحه پیکربندی LDAP در **Admin settings** برگردیم. در پایین به متابیس می‌گوییم membershipهای گروه را با اطلاعات از LDAP همگام‌سازی کند، و می‌تواند گروه‌ها را زیر دامنه `metabase.com` پیدا کند.

آخرین گام گفتن به متابیس است که گروه‌های آن و گروه‌های LDAP چگونه مرتبط هستند. اگر روی **Edit mappings** و **Create a mapping** کلیک کنیم، می‌توانیم distinguished name که گروه را در LDAP شناسایی می‌کند را پر کنیم — در این مورد، DN برای گروه Human Resources که قبلاً ایجاد کردیم. سپس روی **Add** کلیک می‌کنیم، گروه متابیس که گروه LDAP با آن مطابقت دارد را انتخاب می‌کنیم، و تغییرات خود را ذخیره می‌کنیم.

این یک راه‌اندازی زیادی است. برای تست آن، بیایید یک پنجره anonymous باز کنیم و به عنوان Rasmus وارد شویم. مطمئناً، Rasmus هنوز نمی‌تواند جدول `People` را ببیند چون عضو گروه Human Resources نیست. اما اگر آن پنجره را ببندیم، یکی دیگر را باز کنیم، و به عنوان Farrah وارد شویم، *می‌توانیم* جدول `People` را ببینیم. و اگر به پنجره administrator برگردیم و `People` را نگاه کنیم، می‌توانیم آیکون‌هایی ببینیم که نشان می‌دهند حساب چه کسی از LDAP می‌آید به جای اینکه توسط متابیس مدیریت شود.

## مطالعه بیشتر

- [امنیت ردیف و ستون](../../../../docs/latest/permissions/row-and-column-security.html)
- [احراز هویت با Google Sign-In یا LDAP](../../../../docs/latest/people-and-groups/google-sign-in.html)

[
      
        
        

      
      
        
        

      
    ](keep-tabs-on-your-data.html)
