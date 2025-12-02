---
title: نصب متابیس
redirect_from:
  - /docs/latest/operations-guide/installing-metabase
---

<!-- markdownlint-disable-next-line MD025 -->
# نصب متابیس

متابیس به‌صورت یک فایل JAR جاوا ساخته و بسته‌بندی می‌شود و در هر جایی که جاوا در دسترس باشد قابل اجراست.

## متابیس کلود (پیشنهادی)

[Metabase Cloud](https://www.metabase.com/cloud/) آسان‌ترین راه برای اجرای متابیس است. کافی است در [دورهٔ آزمایشی رایگان](https://store.metabase.com/checkout) ثبت‌نام کنید و بقیهٔ مسیر را به سرویس بسپارید.

## میزبانی شخصی متابیس

برای آشنایی کلی با میزبانی شخصی، راهنمای [اجرای متابیس در محیط تولید](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-in-production) را بخوانید.

### اجرا روی Docker (گزینهٔ پیشنهادی برای میزبانی شخصی)

متابیس را در یک [کانتینر Docker](./running-metabase-on-docker.md) اجرا کنید.

### اجرای فایل JAR

اگر میزبانی شخصی انجام می‌دهید اما از Docker استفاده نمی‌کنید، اجرای فایل JAR ساده‌ترین راه شروع است، ولی ممکن است مهاجرت به محیط تولید را دشوارتر کند. به راهنمای [اجرای فایل Jar متابیس](./running-the-metabase-jar-file.md) مراجعه کنید.

## متابیس در محیط‌های Air‑gapped

اگر به‌دلیل الزامات امنیتی نیاز به محیط air-gapped دارید، نسخهٔ [Air-gapped متابیس](https://www.metabase.com/product/air-gapping) را بررسی کنید.

## خدمات حرفه‌ای تیم متابیس

اگر برای موارد زیر کمک می‌خواهید:

- راه‌اندازی
- آموزش
- پشتهٔ داده
- تع嬬ب
- مدل‌سازی داده

به صفحهٔ [خدمات حرفه‌ای](https://www.metabase.com/product/professional-services) سر بزنید.

## به‌روزرسانی متابیس

راهنمای [به‌روزرسانی متابیس](./upgrading-metabase.md) را مطالعه کنید.

## گزینه‌های دیگر نصب

- [اجرای متابیس روی Podman](./running-metabase-on-podman.md)
- [ساخت متابیس از منبع](../developers-guide/start.md)
- [اجرای متابیس روی Azure Web Apps](./running-metabase-on-azure.md)
- [اجرای متابیس به‌صورت سرویس systemd](./running-metabase-as-service.md)

در حال حاضر متابیس را در AWS Marketplace یا Azure Marketplace توزیع نمی‌کنیم.

همچنین متابیس نمودار helm رسمی پشتیبانی‌شده ندارد.

## ارتباط با متخصص متابیس

اگر برای راه‌اندازی پشتهٔ دادهٔ خود با متابیس به منابع فنی بیشتری نیاز دارید، با یکی از [متخصصان متابیس](https://www.metabase.com/partners/) ارتباط بگیرید.
