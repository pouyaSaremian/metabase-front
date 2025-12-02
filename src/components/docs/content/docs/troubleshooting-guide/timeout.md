---
title: عیب‌یابی timeoutهای اتصال
---

# عیب‌یابی timeoutهای اتصال

اگر کوئری‌های شما hang می‌کنند یا timeout می‌شوند، مشکل ممکن است از این‌ها ناشی شود:

- [اتصال پایگاه داده](./db-connection.md)
- Load balancer
- Reverse proxy server (مثلاً، Nginx)
- Jetty
- سرویس Cloud

## منابع برای deploymentهای رایج

رفع مشکلات timeout به setup خاص شما بستگی دارد. این منابع ممکن است کمک کنند:

- [اتصالات Jetty][configuring-jetty]
- [عیب‌یابی EC2][ec2-troubleshooting]
- [مدیریت Connection Timeout Elastic Load Balancing][elb-timeout]
- [App Engine: Dealing with DeadlineExceededErrors][app-engine-timeout]

## آیا هنوز گیر کرده‌اید؟

اگر نمی‌توانید مشکل خود را با استفاده از راهنماهای عیب‌یابی حل کنید:

- در [انجمن متابیس][discourse] جستجو کنید یا بپرسید.
- برای [باگ‌ها یا محدودیت‌های شناخته شده][known-issues] جستجو کنید.

[app-engine-timeout]: https://cloud.google.com/appengine/articles/deadlineexceedederrors
[configuring-jetty]: https://jetty.org/docs/jetty/12/operations-guide/protocols/index.html
[discourse]: https://discourse.metabase.com/
[ec2-troubleshooting]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html
[elb-timeout]: https://aws.amazon.com/blogs/aws/elb-idle-timeout-control/
[known-issues]: ./known-issues.md
