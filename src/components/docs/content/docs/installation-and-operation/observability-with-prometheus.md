---
title: مشاهده‌پذیری (Observability) با Prometheus
---

# مشاهده‌پذیری (Observability) با Prometheus

می‌توانید متریک‌ها را از متابیس خود در قالب [Prometheus](https://prometheus.io/) صادر (export) کنید.

## اجرای متابیس و Prometheus به‌صورت محلی

برای این‌که تصور دقیقی از نحوهٔ کار متابیس و Prometheus در محیط تولید داشته باشید، در این راهنما نشان می‌دهیم چطور هر دو را به‌صورت محلی روی سیستم خود راه‌اندازی کنید.

## راه‌اندازی متابیس با متغیر `MB_PROMETHEUS_SERVER_PORT`

آخرین نسخهٔ [فایل JAR متابیس](https://www.metabase.com/start/oss/) را دانلود کنید و متابیس را با استفاده از یک متغیر محیطی که پورت سرور Prometheus را مشخص می‌کند اجرا کنید:

```sh
MB_PROMETHEUS_SERVER_PORT=9191 java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```

تنظیم `MB_PROMETHEUS_SERVER_PORT=9191` مشخص می‌کند که متابیس برای در دسترس‌گذاشتن متریک‌ها برای Prometheus از پورت `9191` استفاده کند. برای شفافیت دربارهٔ پورت‌های درگیر:

- پورت `3000` پورتی است که متابیس از آن برای سروکردن رابط وب استفاده می‌کند. می‌توانید با `MB_JETTY_PORT` این مقدار را تغییر دهید (مثلاً `MB_JETTY_PORT=3001`).
- پورت `9191` (یا هر پورتی که با متغیر محیطی `MB_PROMETHEUS_SERVER_PORT` تعیین کرده‌اید) پورتی است که Prometheus از آن متریک‌ها را از متابیس اسکرپ (scrape) می‌کند.
- پورت `9090` پورتی است که خود Prometheus برای رابط وب و API خود استفاده می‌کند.

وقتی متابیس را با این تنظیمات راه‌اندازی کنید، در لاگ‌ها می‌بینید که متابیس `prometheus metrics collector` و `prometheus metrics web-server` را شروع می‌کند:

```sh
(truncated logs)
2022-09-01 17:47:38,808 INFO metabase.util :: Database setup took 3.4 s
2022-09-01 17:47:38,826 INFO metabase.core :: Setting up prometheus metrics
2022-09-01 17:47:38,827 INFO metabase.prometheus :: Starting prometheus metrics collector
2022-09-01 17:47:38,839 INFO metabase.prometheus :: Starting prometheus metrics web-server on port 9,191
(truncated logs)
```

می‌توانید متابیس در حال اجرای خود را در نشانی `http://localhost:3000` ببینید.

## دانلود و پیکربندی Prometheus

[Prometheus را دانلود](https://prometheus.io/download) و فایل‌ها را استخراج کنید.

به دایرکتوری Prometheus بروید و برای پیکربندی آن، یک فایل YAML مانند نمونهٔ زیر ایجاد کنید:

## نمونهٔ فایل پیکربندی Prometheus

```yaml
global:
  scrape_interval: 15s # By default, scrape targets every 15 seconds.

  # Attach these labels to any time series or alerts when communicating with
  # external systems (federation, remote storage, Alertmanager).
  external_labels:
    monitor: "codelab-monitor"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # Override the global default and scrape targets from this job every 5 seconds.
    scrape_interval: 5s
    # use whatever port here that you set for MB_PROMETHEUS_SERVER_PORT
    static_configs:
      - targets: ["localhost:9191"]
```

باید مقدار `targets` را مطابق جایی که متابیس اجرا می‌شود تنظیم کنید. در این مثال، متابیس و Prometheus هر دو روی همان میزبان (`localhost`) اجرا می‌شوند.

## اجرای Prometheus به‌صورت محلی

در یک ترمینال جدید و در دایرکتوری Prometheus، دستور زیر را اجرا کنید:

```sh
./prometheus --config.file=prometheus.yml
```

سپس به نشانی `http://localhost:9090` سر بزنید. باید رابط وب Prometheus را ببینید و بتوانید متریک‌های مختلفی را که متابیس منتشر کرده جست‌وجو کنید.

![Prometheus page showing `jvm_thread_state` graph](./images/prometheus.png)

## نمونه‌ای از خروجی متریک‌ها

در این‌جا نمونه‌ای از خروجی منتشرشده توسط متابیس را می‌بینید:

```yaml
'# HELP jvm_threads_current Current thread count of a JVM
'# TYPE jvm_threads_current gauge
jvm_threads_current 81.0
'# HELP jvm_threads_daemon Daemon thread count of a JVM
'# TYPE jvm_threads_daemon gauge
jvm_threads_daemon 36.0
'# HELP jvm_threads_peak Peak thread count of a JVM
'# TYPE jvm_threads_peak gauge
jvm_threads_peak 81.0
'# HELP jvm_threads_started_total Started thread count of a JVM
'# TYPE jvm_threads_started_total counter
jvm_threads_started_total 104.0
'# HELP jvm_threads_deadlocked Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers
'# TYPE jvm_threads_deadlocked gauge
jvm_threads_deadlocked 0.0
```

## متریک‌های صادرشده

نمونه‌ای از متریک‌هایی که متابیس در اختیار Prometheus قرار می‌دهد:

- `c3p0_max_pool_size`
- `c3p0_min_pool_size`
- `c3p0_num_busy_connections`
- `c3p0_num_connections`
- `c3p0_num_idle_connections`
- `c3p0_num_threads_awaiting_checkout_default_user`
- `jetty_async_dispatches_total`
- `jetty_async_requests_total`
- `jetty_async_requests_waiting`
- `jetty_async_requests_waiting_max`
- `jetty_dispatched_active`
- `jetty_dispatched_active_max`
- `jetty_dispatched_time_max`
- `jetty_dispatched_time_seconds_total`
- `jetty_dispatched_total`
- `jetty_expires_total`
- `jetty_request_time_max_seconds`
- `jetty_request_time_seconds_total`
- `jetty_requests_active`
- `jetty_requests_active_max`
- `jetty_requests_total`
- `jetty_responses_bytes_total`
- `jetty_responses_total`
- `jetty_stats_seconds`
- `jvm_gc_collection_seconds_count`
- `jvm_gc_collection_seconds_sum`
- `jvm_memory_bytes_committed`
- `jvm_memory_bytes_init`
- `jvm_memory_bytes_max`
- `jvm_memory_bytes_used`
- `jvm_memory_objects_pending_finalization`
- `jvm_memory_pool_bytes_committed`
- `jvm_memory_pool_bytes_init`
- `jvm_memory_pool_bytes_max`
- `jvm_memory_pool_bytes_used`
- `jvm_memory_pool_collection_committed_bytes`
- `jvm_memory_pool_collection_init_bytes`
- `jvm_memory_pool_collection_max_bytes`
- `jvm_memory_pool_collection_used_bytes`
- `jvm_threads_current`
- `jvm_threads_daemon`
- `jvm_threads_deadlocked`
- `jvm_threads_deadlocked_monitor`
- `jvm_threads_peak`
- `jvm_threads_started_total`
- `jvm_threads_state`
- `process_cpu_seconds_total`
- `process_max_fds`
- `process_open_fds`
- `process_start_time_seconds`
- `process_virtual_memory_bytes`
- `metabase_email_messages_total`
- `metabase_email_messages_created`
- `metabase_email_message_errors_total`
- `metabase_email_message_errors_created`

## مطالعهٔ بیشتر

- [Running Metabase](../troubleshooting-guide/running.md)
- [Monitoring Metabase](./monitoring-metabase.md)
