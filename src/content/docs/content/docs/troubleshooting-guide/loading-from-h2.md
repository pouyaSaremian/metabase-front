---
title: استفاده یا مهاجرت از یک پایگاه داده اپلیکیشن H2
---

# استفاده یا مهاجرت از یک پایگاه داده اپلیکیشن H2

متابیس را نصب کرده‌اید، اما:

- سعی می‌کنید پایگاه داده اپلیکیشن را از H2 به پایگاه داده دیگری migrate کنید و مشکلی پیش آمده است،
- سعی می‌کنید downgrade کنید به جای upgrade،
- متابیس یک پیام خطای `liquibase` را وقتی سعی می‌کنید آن را اجرا کنید لاگ می‌کند،
- متابیس پیام خطای دیگری که `H2` یا `h2` را ذکر می‌کند را در حالی که در حال اجرا است لاگ می‌کند، یا
- در Windows 10 هستید و یک هشدار دربارهٔ مجوزهای فایل دریافت می‌کنید.

## آیا در حال حاضر از H2 به‌عنوان پایگاه داده اپلیکیشن خود استفاده می‌کنید؟

**علت اصلی:** متابیس اطلاعات دربارهٔ کاربران، سؤال‌ها، و غیره را در یک پایگاه داده خودش به نام "application database"، یا به اختصار "app database" ذخیره می‌کند. به‌طور پیش‌فرض متابیس از H2 برای پایگاه داده اپلیکیشن استفاده می‌کند، اما آن را برای production توصیه نمی‌کنیم---چون یک پایگاه داده on-disk است، به خطاهای filesystem حساس است، مثل اینکه یک drive خراب شود یا یک فایل به‌درستی flush نشود.

**مراحل انجام:**

1. برای بررسی اینکه چه چیزی را به‌عنوان app database استفاده می‌کنید، به **پنل Admin** بروید، تب **Tools** را باز کنید، به "Diagnostic Info" اسکرول کنید، و به دنبال کلید `application-database` در JSON که نمایش می‌دهد بگردید.
2. به [مهاجرت از H2](../installation-and-operation/migrating-from-h2.md) برای دستورالعمل‌های نحوهٔ مهاجرت به یک app database قوی‌تر مراجعه کنید.

## آیا سعی می‌کنید پایگاه داده اپلیکیشن را از H2 به چیز دیگری migrate کنید؟

**علت اصلی:** سعی می‌کنید [app database را migrate کنید](../installation-and-operation/migrating-from-h2.md) از H2 به یک پایگاه داده production مثل PostgreSQL یا MySQL/MariaDB با استفاده از دستور `load-from-h2`، اما این به دلیل اینکه نام فایل پایگاه داده اشتباه است با یک پیام خطا مثل این شکست خورده است:

```
Command failed with exception: Unsupported database file version or invalid file header in file <YOUR FILENAME>
```

**مراحل انجام:**

1.  یک کپی از پایگاه داده H2 export شده ایجاد کنید (به [پشتیبان‌گیری از داده اپلیکیشن متابیس][backup] مراجعه کنید). _تا زمانی که این کار را انجام نداده‌اید ادامه ندهید_ در صورت بروز مشکل.

2.  بررسی کنید که فایل پایگاه داده H2 که export کرده‌اید `metabase.db.mv.db` نام دارد.

3.  H2 به‌طور خودکار extension `.mv.db` را به مسیر پایگاه داده که در command line مشخص می‌کنید اضافه می‌کند، بنابراین مطمئن شوید که مسیر به فایل DB که به دستور ارسال می‌کنید extension `.mv.db` را _شامل نمی‌شود_. به‌عنوان مثال، اگر یک پایگاه داده اپلیکیشن را export کرده‌اید، و می‌خواهید داده را از آن پایگاه داده H2 به یک پایگاه داده PostgreSQL با استفاده از `load-from-h2` بارگذاری کنید، دستور شما چیزی شبیه این خواهد بود:

    ```
    export MB_DB_TYPE=postgres
    export MB_DB_DBNAME=metabase
    export MB_DB_PORT=5432
    export MB_DB_USER=<username>
    export MB_DB_PASS=<password>
    export MB_DB_HOST=localhost
    java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar load-from-h2 /path/to/metabase.db # do not include .mv.db
    ```

اگر از [نسخه Pro یا Enterprise متابیس][enterprise] استفاده می‌کنید، می‌توانید از [serialization][serialization-docs] برای snapshot پایگاه داده اپلیکیشن خود استفاده کنید. Serialization زمانی مفید است که می‌خواهید [سؤال‌ها و داشبوردها را preload کنید][serialization-learn] در یک instance متابیس جدید.

## آیا سعی می‌کنید downgrade کنید؟

**علت اصلی:** متابیس از downgrading (یعنی، بازگشت به یک نسخه قبلی اپلیکیشن) پشتیبانی نمی‌کند.

**مراحل انجام:**

1.  متابیس را خاموش کنید.
2.  کپی پشتیبان از app database که قبل از تلاش برای upgrade یا downgrade ایجاد کردید را restore کنید.
3.  فایل JAR یا container نسخه قدیمی‌تری که می‌خواهید به آن revert کنید را restore کنید.
4.  متابیس را راه‌اندازی مجدد کنید.

## آیا app database قفل شده است؟

**علت اصلی:** گاهی اوقات متابیس راه‌اندازی نمی‌شود چون یک قفل app database به‌درستی در طول یک اجرای قبلی پاک نشده است. پیام خطا چیزی شبیه این است:

```
liquibase.exception.DatabaseException: liquibase.exception.LockException: Could not acquire change log lock.
```

**مراحل انجام:**

1.  یک shell روی سروری که متابیس روی آن نصب شده است باز کنید و قفل‌ها را به صورت دستی با اجرای این پاک کنید:

    ```
    java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar migrate release-locks
    ```

2.  بعد از اینکه این دستور تکمیل شد، instance متابیس خود را به صورت عادی راه‌اندازی مجدد کنید (_بدون_ flag `migrate release-locks`).

## آیا app database خراب شده است؟

**علت اصلی:** H2 کمتر قابل اعتماد از سیستم‌های مدیریت پایگاه داده production-quality است، و گاهی اوقات خود پایگاه داده خراب می‌شود. این می‌تواند منجر به از دست دادن داده در app database شود، اما نمی‌تواند داده در پایگاه‌داده‌هایی که متابیس به آن‌ها متصل است را آسیب برساند.

**مراحل انجام:** پیام‌های خطا بسته به نحوهٔ خراب شدن app database می‌توانند متفاوت باشند، اما در بیشتر موارد پیام لاگ `h2` را ذکر می‌کند. یک دستور و پیام معمولی:

```
myUser@myIp:~$ java --add-opens java.base/java.nio=ALL-UNNAMED -cp metabase.jar org.h2.tools.RunScript -script whatever.sql -url jdbc:h2:~/metabase.db
Exception in thread "main" org.h2.jdbc.JdbcSQLException: Row not found when trying to delete from index """"".I37: ( /* key:7864 */ X'5256470012572027c82fc5d2bfb855264ab45f8fec4cf48b0620ccad281d2fe4', 165)" [90112-194]
    at org.h2.message.DbException.getJdbcSQLException(DbException.java:345)
    [etc]
```

**نحوهٔ رفع این:** همه خطاهای H2 قابل بازیابی نیستند (به همین دلیل اگر از H2 استفاده می‌کنید، _لطفاً_ یک استراتژی پشتیبان‌گیری برای فایل پایگاه داده اپلیکیشن داشته باشید).

اگر یک نسخه اخیر را اجرا می‌کنید و از H2 استفاده می‌کنید، app database در `metabase.db.mv.db` ذخیره می‌شود. - یک shell روی سروری که instance متابیس روی آن در حال اجرا است باز کنید و سعی کنید فایل H2 خراب شده را با اجرای چهار دستور زیر بازیابی کنید:

```
java -cp metabase.jar org.h2.tools.Recover

mv metabase.db.mv.db metabase-old.db.mv.db

touch metabase.db.mv.db

java --add-opens java.base/java.nio=ALL-UNNAMED -cp target/uberjar/metabase.jar org.h2.tools.RunScript -script metabase.db.h2.sql -url jdbc:h2:`pwd`/metabase.db
```

## آیا متابیس را با H2 روی Windows 10 اجرا می‌کنید؟

**علت اصلی:** در برخی موقعیت‌ها در Windows 10، JAR متابیس نیاز به مجوز برای ایجاد فایل‌های محلی برای پایگاه داده اپلیکیشن دارد. هنگام اجرای JAR، یک پیام خطا مثل این می‌بینید:

```
Exception in thread "main" java.lang.AssertionError: Assert failed: Unable to connect to Metabase DB.
```

**مراحل انجام:**

1.  راست‌کلیک روی فایل JAR متابیس (_نه_ فایل app database).
2.  "Properties" را انتخاب کنید.
3.  "Unblock." را انتخاب کنید.

## آیا پایگاه داده اپلیکیشن خیلی طول می‌کشد تا بارگذاری شود؟

**علت اصلی:** از H2 به‌عنوان app database خود استفاده می‌کنید، و app database آنقدر بزرگ است که نمی‌تواند در کمتر از 5 ثانیه بارگذاری شود (که مقدار timeout پیش‌فرض است). پیام "Timeout" در کنسول وقتی سعی می‌کنید متابیس را راه‌اندازی کنید ظاهر می‌شود.

**مراحل انجام:**

1.  از یک پایگاه داده production-quality مثل PostgreSQL برای app database استفاده کنید (ترجیح داده می‌شود).
2.  به **پنل Admin** بروید و تنظیم timeout برای app database را افزایش دهید.
3.  متابیس را به یک سرور سریع‌تر منتقل کنید (به‌طور خاص، یک سرور با دیسک‌های سریع‌تر).

[backup]: ../installation-and-operation/backing-up-metabase-application-data.md
[enterprise]: https://www.metabase.com/pricing
[serialization-docs]: ../installation-and-operation/serialization.md
[serialization-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/serialization
