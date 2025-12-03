---
title: عیب‌یابی LDAP
---

# عیب‌یابی LDAP

متابیس می‌تواند از LDAP برای احراز هویت استفاده کند. [این مقاله](../people-and-groups/ldap.md) نحوهٔ تنظیم آن را توضیح می‌دهد، و راهنمای زیر به شما کمک می‌کند اگر مشکلی پیش آمد عیب‌یابی کنید. اگر مشکل شما خاص LDAP نیست، به [راهنمای عیب‌یابی ما برای ورود](./cant-log-in.md) بروید.

## پیکربندی نمونه LDAP

می‌توانید متابیس را با LDAP با استفاده از این تعریف `docker-compose` تست کنید:

```yml
version: "3.7"
services:
  metabase-ldap:
    image: metabase/metabase:latest
    container_name: metabase-ldap
    hostname: metabase-ldap
    volumes:
      - /dev/urandom:/dev/random:ro
    ports:
      - 3000:3000
    networks:
      - metanet1
    environment:
      - "MB_LDAP_BIND_DN=cn=admin,dc=example,dc=org"
      - "MB_LDAP_ENABLED=true"
      - "MB_LDAP_GROUP_BASE=cn=readers"
      - "MB_LDAP_HOST=openldap"
      - "MB_LDAP_PASSWORD=adminpassword"
      - "MB_LDAP_PORT=1389"
      - "MB_LDAP_USER_BASE=ou=users,dc=example,dc=org"
      - "MB_LDAP_ATTRIBUTE_EMAIL=uid"
      # We are using the same field for email and first name, just for this example to work without modifications to the LDAP objects
      - "MB_LDAP_ATTRIBUTE_FIRSTNAME=uid"
      - "MB_LDAP_ATTRIBUTE_LASTNAME=sn"
  openldap:
    image: bitnamilegacy/openldap:2.4.57
    hostname: openldap
    container_name: openldap
    ports:
      - 1389:1389
    environment:
      - LDAP_ADMIN_USERNAME=admin
      - LDAP_ADMIN_PASSWORD=adminpassword
      - LDAP_USERS=user01@metabase.com,user02@metabase.com
      - LDAP_PASSWORDS=password1!,password2!
      - LDAP_PORT_NUMBER=1389
      - LDAP_ROOT=dc=example,dc=org
      - LDAP_USER_DC=users
      - LDAP_GROUP=readers
    networks:
      - metanet1
networks:
  metanet1:
    driver: bridge
```

اگر متغیرهای محیطی را به متابیس ارسال نمی‌کنید و می‌خواهید environment را به صورت دستی پیکربندی کنید، می‌توانید به پنل Admin بروید، "Settings" را انتخاب کنید، "Authentication" را انتخاب کنید، و سپس "LDAP Configuration" را انتخاب کنید و مقادیر زیر را وارد کنید:

- `USERNAME OR DN`: `cn=admin,dc=example,dc=org`
- `PASSWORD`: `adminpassword`
- `USER SEARCH BASE`: `ou=users,dc=example,dc=org`
- `USER FILTER`: `(&(objectClass=inetOrgPerson)(|(uid={login})))`
- `GROUP SEARCH BASE`: `cn=readers`

برای `USER FILTER`، می‌توانید مقدار پیش‌فرض را بگذارید، که به دنبال user ID در هر دو فیلد `uid` یا `email` می‌گردد.

## نرم‌افزار مرتبط برای عیب‌یابی

اگر با مشکلی مواجه شدید، بررسی کنید که می‌توانید به دایرکتوری LDAP خود وارد شوید و کوئری‌ها را با استفاده از نرم‌افزاری مثل [Apache Directory Studio][apache-directory-studio] صادر کنید. این به شما امکان می‌دهد کل درخت LDAP را ببینید و لاگ‌های اپلیکیشن LDAP خود را برای دیدن کوئری‌های اجرا شده مشاهده کنید.

<h2 id="current-limitations">محدودیت‌های فعلی</h2>

- هنگام استفاده از Metabase Enterprise با یک پایگاه داده MySQL و LDAP فعال، مطمئن شوید که همگام‌سازی فیلدهای binary از دایرکتوری LDAP خود را با استفاده از متغیر محیطی `MB_LDAP_SYNC_USER_ATTRIBUTES_BLACKLIST` غیرفعال می‌کنید. اگر این کار را نکنید، ممکن است به محدودیت اندازه فیلد 60K فیلد متن در MySQL برخورد کنید، که از ایجاد کاربران یا ورود آن کاربران جلوگیری می‌کند.

[apache-directory-studio]: https://directory.apache.org/studio/

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس](https://discourse.metabase.com/) جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده](./known-issues.md) جستجو کنید.
