---
title: عیب‌یابی تجسم‌های سؤال و داشبورد
---

# عیب‌یابی تجسم‌های سؤال و داشبورد

برای شروع، بررسی کنید که آیا تنظیمات مرورگر فعلی شما با متابیس سازگار است:

1. cache مرورگر خود را پاک کنید، و صفحه خود را refresh کنید.
2. همه extensionها و pluginها را غیرفعال کنید. صفحه را دوباره بارگذاری کنید.
3. یک تلاش آخر بدهید---سعی کنید صفحه خود را در یک نشست private/incognito، یا یک مرورگر متفاوت باز کنید.

## قالب‌بندی کارت‌های داشبورد

1. مطمئن شوید که تغییرات را از [تنظیمات کارت](../dashboards/introduction.md#changing-a-cards-visualization-settings) ایجاد و ذخیره می‌کنید (_نه_ تنظیمات سؤال اصلی).
2. [تنظیمات تجسم کارت خود را reset کنید](../dashboards/introduction.md#resetting-a-cards-visualization-settings).

**توضیح**

تنظیمات تجسم روی یک کارت مستقل از تنظیمات روی سؤال اصلی است. وقتی برای اولین بار یک سؤال ایجاد می‌کنید، نوع تجسم انتخاب شده شما همراه با کوئری ذخیره می‌شود. وقتی آن سؤال را به یک داشبورد اضافه می‌کنید، داشبورد به‌طور پیش‌فرض همان تجسم را به‌عنوان سؤال اصلی نمایش می‌دهد. می‌توانید نوع تجسم اصلی را با استفاده از [تنظیمات تجسم کارت](../dashboards/introduction.md#changing-a-cards-visualization-settings) override کنید.

## تجسم سؤال‌های SQL

به سؤال SQL خود بروید و [نوع تجسم](../questions/visualizations/visualizing-results.md) را به یک جدول تغییر دهید. سپس، بررسی کنید که آیا هر یک از موقعیت‌های زیر برای نتایج کوئری خام اعمال می‌شود:

- [Aggregationها (countها، sumها، و غیره) اشتباه هستند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic#aggregated-results-counts-sums-etc-are-wrong).
- [نتایج ردیف‌های تکراری دارند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data).
- [نتایج ردیف‌های گم شده دارند](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-missing-data).

**توضیح**

اگر سؤال یا کارت داشبورد شما با یک [کوئری SQL دست‌نویس](../questions/native-editor/writing-sql.md) به جای [query builder](../questions/query-builder/editor.md) قدرت می‌گیرد، تجسم شما به تغییرات در داده زیربنایی حساس‌تر خواهد بود (مثلاً، فیلدهای تغییر نام داده شده، یا ظاهر ناگهانی یک مقدار null وحشی). برای یادگیری بیشتر، دربارهٔ [دلایل رایج برای نتایج کوئری غیرمنتظره](https://www.metabase.com/learn/sql/debugging-sql/sql-logic#common-reasons-for-unexpected-query-results) بخوانید.

اگر با چیزهایی مثل خطاهای syntax SQL یا [متغیرهای SQL](https://www.metabase.com/glossary/variable#example-variable-in-metabase) مشکل دارید، برای کمک بیشتر به [عیب‌یابی سؤال‌های SQL](./sql.md) مراجعه کنید.

## مشکلات مرتبط

- [تاریخ‌ها و زمان‌های من اشتباه هستند](./timezones.md).
- [داشبورد من کند است یا بارگذاری نمی‌شود](./my-dashboard-is-slow.md).
- [نمی‌توانم سؤال یا داشبورد خود را مشاهده یا ویرایش کنم](./cant-view-or-edit.md).
- [نمی‌توانم جداول خود را ببینم](./cant-see-tables.md).

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس](https://discourse.metabase.com/) جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده](./known-issues.md) جستجو کنید.
