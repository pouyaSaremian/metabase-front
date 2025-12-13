import Image from "next/image";
import Link from "next/link";

interface GetStartedSectionProps {
  className?: string;
}

const GetStartedSection: React.FC<GetStartedSectionProps> = ({
  className = "",
}) => {
  // Data sources for marquee - matching the original structure
  const dataSourcesRow1 = [
    { name: "Amazon Athena", image: "/aws-athena.png" },
    { name: "Amazon Redshift", image: "/amazon-redshift.png" },
    { name: "Apache Pinot", image: "/apache-pinot-logo.jpeg" },
    { name: "BigQuery", image: "/big-query.png" },
    { name: "ClickHouse", image: "/clickhouse.png" },
  ];

  const dataSourcesRow2 = [
    { name: "Cube", image: "/cube-js.png" },
    { name: "Databricks", image: "/databricks.png" },
    { name: "Dremio", image: "/dremio.png" },
    { name: "Druid", image: "/druid.png" },
    { name: "DuckDB", image: "/duckdb.png" },
    { name: "Exasol", image: "/exasol.png" },
  ];

  const dataSourcesRow3 = [
    { name: "Firebolt", image: "/firebolt.png" },
    { name: "Google Sheets", image: "/google-sheets-icon.png" },
    { name: "Hydra", image: "/hydra.png" },
    { name: "MariaDB", image: "/mariadb-circle.png" },
  ];

  // Duplicate for seamless marquee
  const duplicateArray = (arr: typeof dataSourcesRow1, times: number) => {
    return Array(times)
      .fill(null)
      .flatMap(() => arr);
  };

  return (
    <section
      className={`bg-white py-12 lg:py-16 select-none w-full ${className}`}
      aria-labelledby="get-started-section-title"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12 px-4">
          <h2
            id="get-started-section-title"
            className="text-2xl lg:text-3xl xl:text-4xl font-bold text-metabase-primary-dark mb-4 select-none"
          >
            شروع سریع با <strong>نرم افزار هوش تجاری</strong> متابیس
          </h2>
        </div>

        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Deployment Options */}
              <article className="bg-metabase-blue-95 rounded-lg overflow-hidden flex flex-col">
                <header className="p-2 text-center h-1/2">
                  <div
                    className="flex justify-center items-center min-h-[176px] bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url(/Group-3358.svg)",
                      backgroundPosition: "center bottom",
                    }}
                  >
                    <Link
                      href="/docs/latest/installation-and-operation/running-metabase-on-docker"
                      className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:-translate-y-2 transition-all duration-200 -mr-2.5 relative z-10"
                    >
                      <Image
                        src="/image-62.svg"
                        alt="Docker"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </Link>
                    <Link
                      href="/docs/latest/installation-and-operation/running-the-metabase-jar-file"
                      className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:-translate-y-2 transition-all duration-200 -mr-2.5 relative z-20"
                    >
                      <Image
                        src="/jar.svg"
                        alt="JAR"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </Link>
                    <Link
                      href="/pricing/"
                      className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:-translate-y-2 transition-all duration-200 relative z-30"
                    >
                      <Image
                        src="/cloud.svg"
                        alt="Cloud"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </header>
                <div className="p-6">
                  <p className="text-base text-metabase-text-secondary leading-relaxed mb-0 select-none text-justify">
                    <strong>پلتفرم تحلیل داده</strong> متابیس در سه فرمت مختلف
                    قابل اجراست: <strong>فایل JAR</strong> برای سرورهای داخلی،{" "}
                    <strong>تصویر Docker</strong> برای محیط‌های کانتینری و{" "}
                    <strong>نسخه ابری</strong> برای استقرار در کلاد. این
                    انعطاف‌پذیری به شما امکان می‌دهد{" "}
                    <strong>نرم افزار هوش تجاری</strong> را متناسب با زیرساخت و
                    نیازهای سازمان خود انتخاب و deploy کنید.
                  </p>
                </div>
              </article>

              {/* Card 2: Data Sources Marquee */}
              <article className="bg-metabase-blue-95 rounded-lg overflow-hidden flex flex-col">
                <header className="py-6 text-center relative overflow-hidden datasources-gradient">
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <div
                      className="absolute left-0 top-0 bottom-0 w-20"
                      style={{
                        background:
                          "linear-gradient(90deg, #eef6fc 0%, rgba(255, 255, 255, 0) 100%)",
                      }}
                    ></div>
                    <div
                      className="absolute right-0 top-0 bottom-0 w-20"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #eef6fc 100%)",
                      }}
                    ></div>
                  </div>

                  {/* Marquee Row 1 - Slower */}
                  <div className="relative py-3 overflow-hidden">
                    <div className="flex flex-row animate-marquee-slower">
                      {duplicateArray(dataSourcesRow1, 4).map(
                        (source, index) => (
                          <Link
                            key={`row1-${index}`}
                            href={`/data-sources/${source.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="inline-flex items-center gap-1 bg-white rounded-full py-2 px-4 ml-2 shrink-0 hover:text-metabase-primary transition-colors duration-300 shadow-sm"
                            style={{ flexShrink: 0 }}
                          >
                            <Image
                              src={source.image}
                              alt={source.name}
                              width={20}
                              height={20}
                              className="object-contain"
                              loading="lazy"
                            />
                            <span className="text-sm text-metabase-text-secondary whitespace-nowrap">
                              {source.name}
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* Marquee Row 2 - Normal */}
                  <div className="relative py-0 overflow-hidden">
                    <div className="flex flex-row animate-marquee">
                      {duplicateArray(dataSourcesRow2, 4).map(
                        (source, index) => (
                          <Link
                            key={`row2-${index}`}
                            href={`/data-sources/${source.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="inline-flex items-center gap-1 bg-white rounded-full py-2 px-4 ml-2 shrink-0 hover:text-metabase-primary transition-colors duration-300 shadow-sm"
                            style={{ flexShrink: 0 }}
                          >
                            <Image
                              src={source.image}
                              alt={source.name}
                              width={20}
                              height={20}
                              className="object-contain"
                              loading="lazy"
                            />
                            <span className="text-sm text-metabase-text-secondary whitespace-nowrap">
                              {source.name}
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* Marquee Row 3 - Faster */}
                  <div className="relative py-3 overflow-hidden">
                    <div className="flex flex-row animate-marquee-faster">
                      {duplicateArray(dataSourcesRow3, 4).map(
                        (source, index) => (
                          <Link
                            key={`row3-${index}`}
                            href={`/data-sources/${source.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="inline-flex items-center gap-1 bg-white rounded-full py-2 px-4 ml-2 shrink-0 hover:text-metabase-primary transition-colors duration-300 shadow-sm"
                            style={{ flexShrink: 0 }}
                          >
                            <Image
                              src={source.image}
                              alt={source.name}
                              width={20}
                              height={20}
                              className="object-contain"
                              loading="lazy"
                            />
                            <span className="text-sm text-metabase-text-secondary whitespace-nowrap">
                              {source.name}
                            </span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </header>
                <div className="p-6">
                  <p className="text-base text-metabase-text-secondary leading-relaxed mb-0 select-none text-justify">
                    متابیس را به <strong>منبع داده</strong> خود متصل کرده و شروع
                    کنید. این <strong>پلتفرم تحلیل داده</strong> راه‌حلی برای{" "}
                    <strong>بصری‌سازی داده</strong> و{" "}
                    <strong>گزارش‌سازی</strong> است که برای تطبیق با{" "}
                    <strong>پایگاه داده</strong> استارتاپ تا{" "}
                    <strong>انبارهای داده</strong> عظیم طراحی شده است. بلافاصله
                    و بدون نیاز به استخراج داده،{" "}
                    <strong>داده‌های خود را تجزیه و تحلیل</strong> کنید.
                  </p>
                </div>
              </article>

              {/* Card 3: GitHub Open Source */}
              <article className="bg-metabase-blue-95 rounded-lg flex flex-col">
                <header className="p-2 text-center">
                  <div
                    className="flex justify-center items-center min-h-[176px] bg-center bg-no-repeat relative"
                    style={{
                      backgroundImage: "url(/grid-bg.svg)",
                      backgroundPosition: "center bottom",
                    }}
                  >
                    <div className="absolute top-[36%] inline-flex items-center gap-2 bg-white shadow-md text-metabase-primary border border-dashed border-metabase-primary rounded-2xl px-2 py-1 hover:scale-110 transition-all duration-200">
                      <Image
                        src={"./iran-map.svg"}
                        alt="Iran"
                        width={40}
                        height={40}
                      />
                      <span className="text-base font-bold">زبان فارسی</span>
                    </div>
                  </div>
                </header>
                <div className="p-6">
                  <p className="text-base text-metabase-text-secondary leading-relaxed mb-0 select-none">
                    متابیس با{" "}
                    <Link
                      href="https://github.com/metabase/metabase"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-metabase-primary font-bold hover:text-metabase-primary-darker transition-colors"
                    >
                      پشتیبانی کامل از زبان فارسی
                    </Link>{" "}
                    و <strong>محیط راست‌به‌چپ (RTL)</strong> طراحی شده است.
                    تمامی <strong>رابط کاربری فارسی</strong> و مستندات به فارسی
                    ترجمه شده‌اند تا تجربه‌ای بومی برای{" "}
                    <strong>کاربران فارسی‌زبان</strong> فراهم شود. این{" "}
                    <Link
                      href="/pricing"
                      className="text-metabase-primary font-bold hover:text-metabase-primary-darker transition-colors"
                    >
                      نرم افزار هوش تجاری فارسی
                    </Link>{" "}
                    با <strong>پشتیبانی کامل RTL</strong>، امکان استفاده آسان از
                    تمامی قابلیت‌های <strong>تحلیل داده</strong> و{" "}
                    <strong>گزارش‌سازی</strong> را برای تیم‌های فارسی‌زبان فراهم
                    می‌کند.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
