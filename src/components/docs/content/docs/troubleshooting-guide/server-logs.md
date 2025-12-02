---
title: نحوهٔ خواندن لاگ‌های سرور
---

# نحوهٔ خواندن لاگ‌های سرور

در اینجا یک مثال لاگ از اجرای یک کوئری:

```
2021-07-07 15:53:18,560 DEBUG middleware.log :: POST /api/dataset 202 [ASYNC: completed] 46.9 ms (17 DB calls) App DB connections: 1/10 Jetty threads: 3/50 (4 idle, 0 queued) (72 total active threads) Queries in flight: 0 (0 queued); h2 DB 4 connections: 0/1 (0 threads blocked)
```

بیایید لاگ را باز کنیم:

- **زمان لاگ:** `2021-07-07 15:53:18,560`.
- **سطح لاگ:** `DEBUG`. انواع مختلفی از سطوح لاگ وجود دارد. برای یادگیری بیشتر، [لاگ‌های متابیس][log-level] را بررسی کنید.
- **Namespace:**. `middleware.log`. می‌توانید سطح logging خود را تنظیم کنید تا اطلاعات بیشتر یا کمتر از این namespace دریافت کنید.
- **Method:** `POST`. فعل HTTP method، مثل POST، PUT، GET، DELETE.
- **Path:** `/api/dataset`. URL handling. توجه داشته باشید که پارامترهای URL شامل نمی‌شوند، که می‌تواند عیب‌یابی مشکلات خاص را کمی مشکل کند.
- **Code:** `202`. کد وضعیت HTTP.
- **ASYNC:** `[ASYNC: completed]`. اینکه آیا متابیس می‌تواند نتایج را به مرورگر تحویل دهد. اگر متابیس نمی‌توانست نتایج را تحویل دهد، مثلاً اگر کسی یک کوئری شروع کند و مرورگر خود را قبل از تمام شدن کوئری ببندد، وضعیت ASYNC "cancelled" می‌گوید.
- **زمان پاسخ:** `46.9 ms`. زمانی که متابیس برای handling درخواست می‌گیرد (از زمانی که متابیس درخواست را دریافت می‌کند تا زمانی که نتایج را به مرورگر برمی‌گرداند).
- **فراخوانی‌های پایگاه داده:** `(17 DB calls)`. تعداد statementهای کوئری استفاده شده، که علاوه بر فراخوانی‌ها به منبع(های) داده کوئری شده، شامل فراخوانی‌ها به پایگاه داده اپلیکیشن متابیس می‌شود.
- **اتصال‌های پایگاه داده اپلیکیشن:** `App DB connections: 1/10`. تعداد اتصالات فعال، و pool اتصالات در دسترس.
- **threadهای Jetty:** `Jetty threads: 3/50 (4 idle, 0 queued)`. تعداد threadهای فعال، و pool کل threadهای در دسترس را فهرست می‌کند. `(4 idle, 0 queued)` threadهای hot اضافی، و تعداد threadهای صف‌بندی شده هستند. اگر می‌بینید که تعداد threadها در pool خود را max می‌کنید، [متابیس در مقیاس][scale] را بررسی کنید.
- **threadهای Java:** `(72 total active threads)`. تعداد کل threadهایی که متابیس استفاده می‌کند.
- **کوئری‌های در حال پرواز:** `Queries in flight: 0 (0 queued)`. تعداد کوئری‌های فعال و صف‌بندی شده در همه منابع پایگاه داده متصل به متابیس. توصیه می‌کنیم **Database info** زیر را برای عیب‌یابی مشکلات مرتبط با پایگاه داده با درخواست بررسی کنید.
- **اطلاعات پایگاه داده**:`h2 DB 4 connections: 0/1 (0 threads blocked)`. نوع پایگاه داده، ID پایگاه داده، اتصالات فعال/pool (و صف) را نشان می‌دهد. این اطلاعات خاص به پایگاه داده مرتبط با درخواست (در این مورد یک درخواست `POST`) است، و نه به کوئری‌های کلی در حال پرواز.

[log-level]: ../configuring-metabase/log-configuration.md
[scale]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale
