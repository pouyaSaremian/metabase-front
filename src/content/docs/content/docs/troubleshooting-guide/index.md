---
title: راهنماهای عیب‌یابی
---

# راهنماهای عیب‌یابی

مشکلات، علل آن‌ها، نحوهٔ تشخیص آن‌ها، و نحوهٔ رفع آن‌ها.

## دریافت اطلاعات تشخیصی

- [دانلود اطلاعات تشخیصی](./diagnostic-info.md)
- [ایجاد یک فایل HAR](./create-har-file.md)

## نصب

- [اجرای JAR متابیس][running].
- [اجرای متابیس روی Docker][docker].
- [استفاده یا مهاجرت از یک پایگاه داده اپلیکیشن H2][appdb].

## احراز هویت

- [افراد نمی‌توانند به متابیس وارد شوند][login].
- [LDAP][ldap].
- [SAML][saml].

## مجوزها

- [مجوزهای من کار نمی‌کنند][permissions].
- [امنیت ردیف و ستون کار نمی‌کند][row-and-column].

## پایگاه‌داده‌ها

- [نمی‌توانم به یک پایگاه داده متصل شوم][db-connection].
- [نمی‌توانم جداول خود را ببینم][cant-see-tables].
- [داده در متابیس با پایگاه داده من تطبیق ندارد][sync-fingerprint-scan].
- [پایگاه داده من کند است][db-performance].
- [اتصال یا کوئری من timeout می‌شود][timeout].

## سؤال‌ها و داشبوردها

- [نمی‌توانم سؤال یا داشبورد خود را ذخیره کنم][proxies].
- [نمی‌توانم سؤال یا داشبورد خود را مشاهده یا ویرایش کنم][view-edit].
- [تجسم‌های من اشتباه هستند][visualization].
- [داشبورد من کند است یا بارگذاری نمی‌شود][slow-dashboard].
- [سؤال SQL من کار نمی‌کند][sql].
- [تاریخ‌ها و زمان‌ها در سؤال‌ها و نمودارهای من اشتباه هستند][incorrect-times].
- [فیلترهای من کار نمی‌کنند][filters].
- [فیلترهای مرتبط من کار نمی‌کنند][linked-filters].

## مدل‌ها

- [مدل من کار نمی‌کند][models].

## ایمیل و هشدارها

- [متابیس ایمیل ارسال نمی‌کند][not-sending-email].
- [عیب‌یابی اعلان‌ها](./notifications.md).

## پیام‌های خطا

- [یک پیام خطا دریافت می‌کنم][error-message].

## فکر می‌کنید یک باگ پیدا کرده‌اید؟

- [نحوهٔ پیدا کردن باگ‌ها یا محدودیت‌های شناخته شده][known-issues].
- [ثبت گزارش باگ][bugs].

## درخواست ویژگی

به [درخواست ویژگی‌های جدید][feature-request] مراجعه کنید.

## آموزش‌های متابیس

برای آموزش‌هایی که شما را از طریق نحوهٔ استفاده از ویژگی‌های متابیس راهنمایی می‌کنند، [Learn Metabase][learn] را بررسی کنید.

## انجمن متابیس

برای دیدن اینکه آیا شخص دیگری با مشکل مشابهی مواجه شده است، [انجمن ما در Discourse][forum] را بررسی کنید.

## ارتقای متابیس

متابیس ویژگی‌های جدید اضافه می‌کند و باگ‌ها را با هر انتشار رفع می‌کند. [ارتقا به آخرین و بهترین نسخه][upgrade] ممکن است مشکل شما را حل کند. اگر از [Metabase Cloud][cloud] استفاده می‌کنید، ما ارتقاها را برای شما مدیریت می‌کنیم. برای دیدن آنچه جدید است، [یادداشت‌های انتشار][releases] را بررسی کنید.

[appdb]: ./loading-from-h2.md
[bugs]: ./bugs.md
[cant-see-tables]: ./cant-see-tables.md
[cloud]: https://www.metabase.com/cloud/
[db-connection]: ./db-connection.md
[db-performance]: ./db-performance.md
[docker]: ./docker.md
[error-message]: error-message.md
[feature-request]: requesting-new-features.md
[filters]: ./filters.md
[forum]: https://discourse.metabase.com/
[incorrect-times]: ./timezones.md
[known-issues]: ./known-issues.md
[ldap]: ./ldap.md
[learn]: https://www.metabase.com/learn
[linked-filters]: ./linked-filters.md
[login]: ./cant-log-in.md
[models]: ./models.md
[not-sending-email]: ./cant-send-email.md
[permissions]: ./permissions.md
[proxies]: ./proxies.md
[releases]: https://github.com/metabase/metabase/releases
[running]: ./running.md
[saml]: ./saml.md
[row-and-column]: ./row-and-column-security.md
[slow-dashboard]: ./my-dashboard-is-slow.md
[sql]: ./sql.md
[sync-fingerprint-scan]: ./sync-fingerprint-scan.md
[timeout]: ./timeout.md
[upgrade]: ../installation-and-operation/upgrading-metabase.md
[view-edit]: ./cant-view-or-edit.md
[visualization]: ./visualization.md
