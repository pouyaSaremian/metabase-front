---
title: In
---

---

# In

تابع `in` مقادیر را مقایسه می‌کند و اگر `value1` برابر با هرکدام از `value2`، `value3` و… باشد، مقدار `true` برمی‌گرداند.

## نحو (Syntax)

```text
in(value1, value2, ...)
```

- `value1`: ستونی یا مقداری که می‌خواهید بررسی کنید.
- `value2, ...`: فهرستی از ستون‌ها یا مقادیر برای مقایسه با `value1`.

متابیس ردیف‌هایی را برمی‌گرداند که در آن‌ها مقدار `value1` برابر با یکی از مقدارهای لیست (`value2`، `value3` و …) باشد.  
تطابق باید دقیق باشد؛ مثلاً در رشته‌ها حساس به حروف بزرگ/کوچک است (Case‑sensitive).

مثال:

```text
in([Category], "Gadget", "Widget")
```

ردیف‌هایی را برمی‌گرداند که در آن‌ها مقدار `[Category]` برابر `Gadget` یا `Widget` است.

همچنین می‌توانید چند ستون را به‌صورت هم‌زمان بررسی کنید.  
مثلاً اگر بخواهید رکوردهایی را پیدا کنید که فیلدهای `[Title]` یا `[Category]` آن‌ها برابر `Gadget` باشد:

```text
in("Gadget", [Title], [Category])
```

## توابع مرتبط

### SQL

تابع `in` در متابیس از نظر رفتار شبیه تابع `IN` در SQL است.

اگر عبارتی مثل زیر داشته باشید:  
`in([title], "Lightweight Wool Computer", "Aerodynamic Cotton Lamp")`  
در SQL معادل این عبارت است:

```sql
title IN ('Lightweight Wool Computer', 'Aerodynamic Cotton Lamp')
```

اما در پشت‌صحنه، متابیس همین عبارت `IN` را به یک بخش `WHERE` با عملگر `OR` تبدیل می‌کند:

```sql
WHERE
  title = 'Lightweight Wool Computer'
  OR title = 'Aerodynamic Cotton Lamp'
```

## انواع دادهٔ قابل قبول

| نوع داده | سازگار با `in` |
| -------- | -------------- |
| String   | ✅             |
| Number   | ✅             |
| Timestamp| ❌             |
| Boolean  | ✅             |
| JSON     | ❌             |
