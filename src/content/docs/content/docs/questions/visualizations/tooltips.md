---
title: Tooltipها
redirect_from:
  - /docs/latest/questions/sharing/visualizations/tooltips
---

<!-- markdownlint-disable-next-line MD025 -->
# Tooltipها

وقتی روی یک نقطهٔ داده در نمودار متابیس Hover کنید، یک Tooltip شامل اطلاعات آن داده خواهید دید.

![Tooltip](../images/tooltip.png)

## سفارشی‌سازی Tooltipها با چند Metric

در نمودارهای Line، Bar و Area می‌توانید مقادیر چند Metric را یا روی خود نمودار، یا فقط در Tooltipهایی که متابیس روی نقاط داده نمایش می‌دهد، نشان دهید.

مثلاً اگر سؤالی با دو Metric (یعنی دو Summarization – لزوماً لازم نیست [Metricهای متابیس](../../data-modeling/metrics.md) باشند) داشته باشید، مانند این سؤال که هم Count و هم Average `subtotal` را دارد:

![Question with multiple summarizations](../images/multiple-metrics.png)

می‌توانید هر دو Summarization (Count و Average) را هم‌زمان روی نمودار نمایش دهید:

![Count and average](../images/count-and-average.png)

یا می‌توانید فقط یکی از Metricها را روی نمودار نمایش دهید و Metric(های) دیگر را در Tooltip قرار دهید. برای این کار، در تنظیمات Visualization به تب **Data** بروید و روی X کنار Metricی که نمی‌خواهید روی نمودار ببینید کلیک کنید.

با حذف Metric از روی نمودار، این امکان را پیدا می‌کنید که آن را به‌عنوان Metric اضافی در Tooltip اضافه کنید. در تنظیمات Visualization، به تب **Display** بروید و از بخش **Additional tooltip metrics**، Metricهای موردنظر را به Tooltip اضافه کنید. فقط Metricهایی که در مرحلهٔ Summarization سؤال استفاده شده‌اند، برای اضافه‌شدن به Tooltip در دسترس خواهند بود.

![Add additional tooltip metrics from the display tab. Only available when your chart has multiple metrics](../images/metrics-in-tooltip.png)

در این مثال، Count روی نمودار باقی مانده، اما حالا وقتی روی میله‌های نمودار Hover کنید، Tooltip علاوه بر Count، مقدار Average مربوط را هم نشان می‌دهد.
