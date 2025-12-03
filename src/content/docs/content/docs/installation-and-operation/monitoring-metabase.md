---
title: مانیتورینگ متابیس
redirect_from:
  - /docs/latest/operations-guide/jmx-monitoring
  - /docs/latest/operations-guide/enable-jmx
---

# مانیتورینگ متابیس

عیب‌یابی مشکلات مرتبط با کارایی (Performance) می‌تواند چالش‌برانگیز باشد. خوشبختانه JVM همراه با ابزارهایی عرضه می‌شود که به شناسایی بسیاری از مشکلات رایج کمک می‌کنند. فعال‌کردن JMX و استفاده از ابزاری مانند VisualVM می‌تواند در عیب‌یابی مشکلاتی مثل کمبود حافظه (Out of memory)، قفل‌شدن متابیس یا زمان پاسخ‌گویی بالا مفید باشد.

این راهنما فرض می‌کند که ابزار VisualVM را به‌صورت محلی نصب کرده‌اید. VisualVM معمولاً همراه با OpenJDK و Oracle JDK ارائه می‌شود و می‌توانید آن را در دایرکتوری `bin` نصب JDK پیدا کنید. در برخی توزیع‌های لینوکسی، VisualVM از JDK جدا شده و به‌صورت پکیج مستقل (`visualvm`) در دسترس است.

## اتصال به متابیس محلی (local)

اگر VisualVM روی سروری که متابیس روی آن اجرا می‌شود نصب است و می‌توانید VisualVM را روی همان سرور اجرا کنید، ساده‌ترین سناریو همین است، چون نیازی به راه‌اندازی ارتباط راه دور با نمونهٔ متابیس نخواهید داشت. در این حالت، متابیس را مثل همیشه راه‌اندازی کنید و VisualVM را جداگانه اجرا کنید.

![localprocess](images/LocalProcessVisualVM.png)

## اتصال به متابیس راه دور (remote)

مانیتورینگ یک نمونهٔ متابیس راه دور (یا نمونهٔ محلی که داخل کانتینر Docker اجرا می‌شود) سناریوی رایج‌تری است، اما به تنظیمات بیشتری نیاز دارد. ابتدا باید تعدادی خاصیت سیستمی (system properties) را مشخص کنیم تا به JVM اعلام کنیم که می‌خواهیم مانیتورینگ راه دور را فعال کنیم. اگر فرض کنیم متابیس را با دستور `java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar` اجرا می‌کنیم، لازم است این فراخوانی را به دستور زیر (شامل پراپرتی‌ها) تغییر دهیم:

```sh
java --add-to-start=jmx,jmx-remote \
     -Dcom.sun.management.jmxremote \
     -Dcom.sun.management.jmxremote.port=1099 \
     -Dcom.sun.management.jmxremote.rmi.port=1099 \
     -Dcom.sun.management.jmxremote.authenticate=false \
     -Dcom.sun.management.jmxremote.ssl=false \
     -Dcom.sun.management.jmxremote.local.only=false \
     -Djava.rmi.server.hostname=<Metabase Hostname> \
     -jar metabase.jar
```

پورت `1099` یک پورت متداول برای RMI/JMX است، اما می‌توانید از هر پورت قابل‌دسترسی دیگر هم استفاده کنید.

دستور بالا اپلیکیشن شما را برای مانیتورینگ از بیرون باز می‌کند و فقط باید روی شبکه‌های مورداعتماد و برای مدت‌زمان محدود استفاده شود. امن‌کردن این اتصال امکان‌پذیر است؛ برای جزئیات بیشتر، [مستندات Oracle](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html) را ببینید.

اگر متابیس را در یک کانتینر `docker` اجرا می‌کنید، باید همین system propertyها را تنظیم کنید و مطمئن شوید پورت مربوطه باز است. Docker این امکان را می‌دهد که متغیرهای محیطی را از طریق یک فایل جداگانه به دستور `docker run` پاس دهید. می‌توانید فایلی با نام `metabase-vars.env` بسازید و `JAVA_OPTS` را در آن مشخص کنید:

```sh
JAVA_OPTS=-Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.rmi.port=1099 -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.local.only=false -Djava.rmi.server.hostname=<Metabase Hostname>
```

این فایل انتظار دارد هر متغیر محیطی در یک خط جداگانه و بدون شکست خط اضافی قرار بگیرد:

```sh
docker run --env-file=metabase-vars.env -d -p 3000:3000 -p 1099:1099 -h <Metabase Hostname> --name metabase metabase/metabase
```

سوییچ `-p 1099:1099` پورت JMX را برای مانیتورینگ باز می‌کند و `--env-file=metabase-vars.env` متغیرهای محیطی مرتبط با JMX را به کانتینر پاس می‌دهد. پس از راه‌اندازی این نمونه، باید به VisualVM بگویید که چطور به آن متصل شود. ابتدا یک Remote Host جدید اضافه کنید:

![addremotehost](images/AddRemoteHost.png)

سپس نام میزبانی را که در بالا مشخص کرده‌اید وارد کنید:

![sethostname](images/SetRemoteHostName.png)

ماشینی که VisualVM روی آن اجرا می‌شود باید بتواند نام میزبانی را که مشخص کرده‌اید resolve کند (در صورت نیاز می‌توانید یک ورودی در فایل `hosts` اضافه کنید):

![addjmxhost](images/ClickAddJMXHost.png)

اگر از Docker استفاده می‌کنید، پورتی که برای JMX در VisualVM مشخص می‌کنید باید با پورتی که در system property و بخش `-p` نگاشت کرده‌اید یکسان باشد:

![jmxport](images/EnterJMXPort.png)

در نهایت، فرآیند JMX راه دور جدید را باز کنید:

![jmxinstance](images/OpenRemoteInstance.png)

## اطلاعات زمان اجرا (Runtime)

اتصال به یک نمونهٔ در حال اجرای متابیس از طریق VisualVM حجم زیادی از اطلاعات زمان اجرا را در اختیار شما قرار می‌دهد. چند مورد مهم:

### Heap dump

وقتی با مشکلات مربوط به حافظه روبه‌رو می‌شوید، معمولاً اولین سؤال این است که چه چیزی حافظهٔ اضافی مصرف می‌کند. یک heap dump در یک لحظهٔ مشخص، تصویر کاملی از آن‌چه در حافظه است می‌گیرد. این snapshot بعداً با ابزارهایی مانند [Eclipse Memory Analyzer Tool](https://www.eclipse.org/mat/) قابل‌تحلیل است. برای گرفتن heap dump، از تب **Monitor** در VisualVM استفاده کنید:

![heapdump](images/HeapDump.png)

### Thread dump

نمای مهم دیگر از وضعیت متابیس در حال اجرا، یک Thread Dump است. وقتی متابیس قفل‌شده به نظر می‌رسد یا پاسخ‌گویی آن بسیار کند است، thread dump نشان می‌دهد هر نخ (thread) در آن لحظه چه کاری انجام می‌دهد یا روی چه منبعی مسدود شده است. برای گرفتن thread dump، از تب **Threads** استفاده کنید:

![threaddump](images/ThreadDump.png)

## مطالعهٔ بیشتر

- [Running Metabase](../troubleshooting-guide/running.md)
- [Observability with Prometheus](./observability-with-prometheus.md)
