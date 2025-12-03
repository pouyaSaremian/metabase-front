---
title: Cumulative count and sum
redirect_from:
  - /docs/latest/questions/expressions/cumulativesum
  - /docs/latest/questions/expressions/cumulativecount
---

# Cumulative count and sum

توابع **Cumulative count** و **Cumulative sum** جمعِ تجمعی (Running total) را روی Breakoutها حساب می‌کنند:

- **Cumulative count**: مجموع تجمعی تعداد ردیف‌ها روی یک Breakout.
- **Cumulative sum**: مجموع تجمعی (Rolling sum) یک ستون روی Breakout.

## Syntax

می‌توانید از متریک‌های ازپیش‌تعریف‌شدهٔ «Cumulative count» و «Cumulative sum» استفاده کنید، یا یک عبارت سفارشی بنویسید:

```text
CumulativeCount
```

```text
CumulativeSum(column)
```

متریک‌های تجمعی فقط در گام **Summarize** در Query builder قابل استفاده‌اند؛  
نمی‌توانید از آن‌ها برای ساخت ستون سفارشی یا فیلتر استفاده کنید.

## نحوهٔ محاسبهٔ متریک‌های تجمعی

در پشت‌صحنه، Cumulative count در سه گام محاسبه می‌شود:

1. ردیف‌ها با استفاده از Breakout تعریف‌شده در بلوک **Group by** گروه‌بندی می‌شوند.
2. تعداد ردیف‌ها در هر گروه شمرده می‌شود.
3. برای هر گروه، مجموع تجمعی شمارش تمام گروه‌های قبلی (به‌علاوهٔ گروه فعلی) حساب می‌شود.

چون متریک‌های تجمعی به مقادیر ردیف‌های قبلی وابسته‌اند، ترتیب مرتب‌سازی در ستون Breakout اهمیت دارد.

مثلاً اگر جدولی دارید که بر اساس ماه گروه‌بندی شده است، متابیس Cumulative count را به این شکل محاسبه می‌کند:

| Month    | `Count()` | `CumulativeCount()` |
| -------- | --------- | ------------------- |
| July     | 5         | 5                   |
| November | 4         | 5 + 4 = 9           |
| March    | 2         | 5 + 4 + 2 = 11      |

اگر فقط ترتیب مرتب‌سازی را عوض کنید (بدون تغییر مقادیر)، Cumulative count نیز تغییر می‌کند:

| Month    | `Count()` | `CumulativeCount()` |
| -------- | --------- | ------------------- |
| March    | 2         | 2                   |
| July     | 5         | 2 + 5 = 7           |
| November | 4         | 2 + 5 + 4 = 11      |

وقتی تنها یک Breakout در Query دارید، متابیس به‌صورت پیش‌فرض داده‌ها را بر اساس ستون Breakout به‌ترتیب صعودی (طبق منطق دیتابیس برای آن نوع داده) مرتب می‌کند.  
برای تغییر نحوهٔ انباشته‌شدن متریک، می‌توانید برای ستون Breakout یک بلوک **Sort** اضافه کنید.

## متریک‌های تجمعی با چند Breakout

چون متریک‌های تجمعی براساس ردیف‌های قبلی محاسبه می‌شوند، متابیس باید بداند «ردیف قبلی» یعنی چه.  
متابیس برای محاسبه و نمایش متریک تجمعی ابتدا بررسی می‌کند آیا Breakout زمانی دارید یا نه، و سپس به ترتیب Breakoutهای دیگر نگاه می‌کند.

### Queryهایی با بعد زمانی (Datetime dimension)

اگر در بلوک **Group by** از یک بعد زمانی استفاده کنید، متابیس روی آن بعد زمانی انباشت را انجام می‌دهد و سپس بر اساس سایر فیلدهای **Group by** (به‌ترتیب) Breakout می‌زند:

![Cumulative count بر اساس دسته، منبع و created_at](../../images/cumulative-date-category.png)

اگر چند بعد زمانی داشته باشید (حتی چند Group روی یک ستون زمانی)، متابیس روی بُعد زمانیِ ریزتر (Granularتر) انباشت را انجام می‌دهد، مستقل از ترتیب آن‌ها.  
مثلاً اگر بر اساس «Created At: Month» و «Viewed At: Week» گروه‌بندی کنید، متابیس روی «Viewed At: Week» انباشت را انجام می‌دهد.

![Cumulative count با دو فیلد زمانی](../../images/cumulative-multiple-datetimes.png)

در Queryهایی که بعد زمانی دارند، بلوک‌های **Sort** روی فیلدهای غیرزمانی فقط ترتیب نمایش Breakoutها را عوض می‌کنند و روی نحوهٔ محاسبهٔ متریک تجمعی اثری ندارند.

### Queryهایی بدون بعد زمانی

اگر در بلوک **Group by** هیچ فیلد زمانی نداشته باشید، متابیس انباشت را روی **آخرین بعد** مشخص‌شده در بلوک **Group by** انجام می‌دهد و بقیهٔ فیلدها را در خروجی به‌ترتیب از چپ به راست Breakout می‌کند.

![Cumulative count با دو بعد دسته‌ای](../../images/cumulative-no-datetime.png)

به‌صورت پیش‌فرض، متابیس برای بعدی که برای انباشت استفاده می‌شود مرتب‌سازی صعودی اعمال می‌کند. می‌توانید برای بعد انباشت یک بلوک **Sort** اضافه کنید تا ترتیب را عوض کنید؛ این کار هم نحوهٔ محاسبهٔ متریک تجمعی و هم نمایشش را تغییر می‌دهد.

![Cumulative count با تغییر ترتیب انباشت](../../images/cumulative-no-datetime-order.png)

مرتب‌سازی بر اساس هر فیلدی _غیر از آخرین بعد انباشت_ فقط ترتیب Breakoutها را در خروجی عوض می‌کند و روی محاسبهٔ متریک تجمعی اثری ندارد.

## توابع مرتبط

### Cumulative count در SQL

در SQL می‌توانید با Window functionها متریک‌های تجمعی را محاسبه کنید.  
مثلاً برای محاسبهٔ Cumulative count سفارش‌ها بر اساس ماه:

```sql
SELECT
  created_month,
  SUM(count(*)) OVER (
    ORDER BY
      created_month ASC ROWS UNBOUNDED PRECEDING
  ) AS "sum"
FROM
  (
    SELECT
      quantity,
      DATE_TRUNC ('month', created_at) AS created_month
    FROM
      orders
  )
GROUP BY
  created_month
ORDER BY
  created_month ASC
```

### Cumulative sum در SQL

برای مجموع تجمعی (Cumulative sum) می‌توانید بنویسید:

```sql
SELECT
  created_month,
  SUM(SUM(quantity)) OVER (
    ORDER BY
      created_month ASC ROWS UNBOUNDED PRECEDING
  ) AS "sum"
FROM
  (
    SELECT
      quantity,
      DATE_TRUNC ('month', created_at) AS created_month
    FROM
      orders
  )
GROUP BY
  created_month
ORDER BY
  created_month ASC
```

هر زمان که در Query builder سؤالی بسازید، می‌توانید SQL تولیدشده را با کلیک روی دکمهٔ **View SQL** (**>\_**) در گوشهٔ بالا-راست ببینید.
