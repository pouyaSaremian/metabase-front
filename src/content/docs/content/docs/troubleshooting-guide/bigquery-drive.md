---
title: عیب‌یابی اتصالات BigQuery و Google Drive در متابیس
---

# عیب‌یابی اتصالات BigQuery و Google Drive در متابیس

[این صفحه](../databases/connections/bigquery.md) نحوهٔ اتصال یک منبع داده BigQuery را توضیح می‌دهد، از جمله یکی که از یک فایل ذخیره‌شده در Google Drive استفاده می‌کند، مثل یک Google Sheet (GSheets).

## خطای 403 Forbidden POST

اگر با خطایی مواجه شدید که شبیه این است:

```
403 Forbidden POST https://www.googleapis.com/bigquery/v2/projects/PROJECT-NAME/queries { "code" : 403, "errors" : [ { "domain" : "global", "message" : "Access Denied: BigQuery BigQuery: Permission denied while getting Drive credentials.", "reason" : "accessDenied" } ], "message" : "Access Denied: BigQuery BigQuery: Permission denied while getting Drive credentials.", "status" : "PERMISSION_DENIED" }
```

ممکن است فراموش کرده باشید که [منبع Google Drive خود را](../databases/connections/bigquery.md#share-your-google-drive-source-with-the-service-account) با ایمیل service account به‌اشتراک بگذارید. بعد از اینکه این رفع شد، آن خطا باید ناپدید شود و می‌توانید منبع داده خود را مشاهده و کوئری کنید.

## مطالعهٔ بیشتر

- [عیب‌یابی اتصالات پایگاه داده](./db-connection.md)
