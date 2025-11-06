"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  badge?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [expandedResources, setExpandedResources] = useState<{
    choosing: boolean;
    more: boolean;
  }>({
    choosing: false,
    more: false,
  });

  const handleResourceToggle = (type: "choosing" | "more") => {
    setExpandedResources((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  // Persian translations
  const translations = {
    newsletter: {
      title: "عضویت در خبرنامه",
      description: "با آخرین به‌روزرسانی‌ها و اخبار Metabase در ارتباط باشید. هرگز اسپم ارسال نمی‌کنیم.",
      emailPlaceholder: "آدرس ایمیل",
      submit: "ثبت نام",
    },
    sections: {
      product: "محصول",
      pricing: "قیمت‌گذاری",
      useCases: "موارد استفاده",
      metabasePlans: "پلن‌های Metabase",
      features: "ویژگی‌ها",
      company: "شرکت",
      support: "پشتیبانی",
      resources: "منابع",
    },
    links: {
      watchDemo: "تماشای دمو",
      dataSources: "منابع داده",
      security: "امنیت",
      cloud: "ابر",
      roadmap: "نقشه راه",
      whatsNew: "تازه‌ها",
      plans: "پلن‌ها",
      openSource: "متن باز",
      selfServiceBI: "هوش تجاری خودسرویس",
      embeddedAnalytics: "تجزیه و تحلیل تعبیه شده",
      starterAndOSS: "Starter و متن باز",
      pro: "Pro",
      enterprise: "Enterprise",
      queryBuilder: "Query Builder",
      drillThrough: "Drill Through",
      collections: "Collections",
      usageAnalytics: "Usage analytics",
      analyticsDashboards: "Analytics dashboards",
      sqlEditor: "SQL editor",
      dataSegregation: "Data segregation",
      models: "Models",
      permissions: "Permissions",
      csvUpload: "CSV upload",
      embeddedAnalyticsSDK: "Embedded analytics SDK",
      whiteLabelAnalytics: "White label analytics",
      metabotAI: "Metabot AI",
      jobs: "فرصت‌های شغلی",
      privacyPolicies: "سیاست‌های حریم خصوصی",
      termsOfService: "شرایط استفاده",
      license: "مجوز",
      brandGuidelines: "راهنمای برند",
      documentation: "مستندات",
      help: "راهنما",
      professionalServices: "خدمات حرفه‌ای",
      onboarding: "Onboarding",
      status: "وضعیت",
      github: "GitHub",
      caseStudies: "مطالعات موردی",
      blog: "بلاگ",
      learn: "یادگیری",
      communityStories: "داستان‌های جامعه",
      glossary: "واژه‌نامه داده و هوش تجاری",
      partners: "شرکا",
      choosingMetabase: "انتخاب Metabase",
      moreResources: "منابع بیشتر",
    },
    copyright: "© Metabase 2025",
  };

  interface ColumnSection {
    sections: FooterSection[];
  }

  const footerColumns: ColumnSection[] = [
    {
      sections: [
        {
          title: translations.sections.product,
          links: [
            { href: "/demo", label: translations.links.watchDemo },
            { href: "/data-sources/", label: translations.links.dataSources },
            { href: "/security", label: translations.links.security },
            { href: "/cloud/", label: translations.links.cloud },
            { href: "/roadmap", label: translations.links.roadmap },
            { href: "/releases", label: translations.links.whatsNew },
          ],
        },
        {
          title: translations.sections.pricing,
          links: [
            { href: "/pricing/", label: translations.links.plans },
            { href: "/start/oss/", label: translations.links.openSource },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: translations.sections.useCases,
          links: [
            {
              href: "/product/business-intelligence",
              label: translations.links.selfServiceBI,
            },
            {
              href: "/product/embedded-analytics",
              label: translations.links.embeddedAnalytics,
            },
          ],
        },
        {
          title: translations.sections.metabasePlans,
          links: [
            { href: "/product/starter", label: translations.links.starterAndOSS },
            { href: "/product/pro", label: translations.links.pro },
            { href: "/product/enterprise", label: translations.links.enterprise },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: translations.sections.features,
          links: [
            { href: "/features/query-builder", label: translations.links.queryBuilder },
            { href: "/features/drill-through", label: translations.links.drillThrough },
            { href: "/features/collections", label: translations.links.collections },
            {
              href: "/features/usage-analytics",
              label: translations.links.usageAnalytics,
            },
            {
              href: "/features/analytics-dashboards",
              label: translations.links.analyticsDashboards,
            },
            { href: "/features/sql-editor", label: translations.links.sqlEditor },
            {
              href: "/features/data-segregation",
              label: translations.links.dataSegregation,
            },
            { href: "/features/models", label: translations.links.models },
            { href: "/features/permissions", label: translations.links.permissions },
            { href: "/product/csv-uploads", label: translations.links.csvUpload },
            {
              href: "/product/embedded-analytics-sdk",
              label: translations.links.embeddedAnalyticsSDK,
            },
            {
              href: "/features/white-label-analytics",
              label: translations.links.whiteLabelAnalytics,
            },
            {
              href: "/features/metabot-ai",
              label: translations.links.metabotAI,
              badge: "Beta",
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: translations.sections.company,
          links: [
            { href: "/jobs", label: translations.links.jobs, badge: "ما استخدام می‌کنیم!" },
            {
              href: "/privacy-policies",
              label: translations.links.privacyPolicies,
            },
            { href: "/terms", label: translations.links.termsOfService },
            { href: "/license/", label: translations.links.license },
            {
              href: "https://drive.google.com/drive/folders/1PbjChaDs_IROrrDz4n6eqmtcDITdVBf-?usp=sharing",
              label: translations.links.brandGuidelines,
              external: true,
            },
          ],
        },
        {
          title: translations.sections.support,
          links: [
            { href: "/docs/latest/", label: translations.links.documentation },
            { href: "/help/", label: translations.links.help },
            {
              href: "/product/professional-services",
              label: translations.links.professionalServices,
            },
            {
              href: "/product/onboarding-professional-service",
              label: translations.links.onboarding,
            },
            {
              href: "https://status.metabase.com/",
              label: translations.links.status,
              external: true,
            },
            {
              href: "https://github.com/metabase/metabase",
              label: translations.links.github,
              external: true,
            },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: translations.sections.resources,
          links: [
            { href: "/case-studies", label: translations.links.caseStudies },
            { href: "/blog", label: translations.links.blog },
            { href: "/learn/", label: translations.links.learn },
            {
              href: "/community",
              label: translations.links.communityStories,
            },
            { href: "/glossary/", label: translations.links.glossary },
            { href: "/partners/", label: translations.links.partners },
          ],
        },
      ],
    },
  ];

  const choosingMetabaseLinks: FooterLink[] = [
    {
      href: "/lp/business-intelligence-demo",
      label: "Business Intelligence",
    },
    {
      href: "/lp/bi-for-startups-demo",
      label: "Business Intelligence for Startups",
    },
    {
      href: "/lp/embedded-analytics-demo",
      label: "Embedded Analytics",
    },
    { href: "/lp/metabase-vs-tableau", label: "Metabase vs. Tableau" },
    { href: "/lp/metabase-vs-looker", label: "Metabase vs. Looker" },
    {
      href: "/lp/metabase-vs-looker-studio",
      label: "Metabase vs. Looker Studio",
    },
    { href: "/lp/metabase-vs-power-bi", label: "Metabase vs. PowerBI" },
    { href: "/lp/metabase-vs-superset", label: "Metabase vs. Superset" },
  ];

  const moreResourcesLinks: FooterLink[] = [
    {
      href: "/ai-data-generator",
      label: "Open source AI data generator",
    },
    { href: "/dashboards/", label: "Example Dashboards" },
    {
      href: "/learn/sql/working-with-sql/sql-best-practices",
      label: "SQL Best Practices",
    },
    {
      href: "/learn/cheat-sheets/which-chart-to-use",
      label: "Which chart to use? A cheat sheet",
    },
    {
      href: "/blog/what-is-embedded-analytics",
      label: "What is embedded analytics?",
    },
    { href: "/learn/sql/", label: "Learn SQL" },
    {
      href: "/learn/sql/working-with-sql/sql-join-types",
      label: "Types of SQL Joins",
    },
    {
      href: "/blog/6-most-common-type-of-data-bias-in-data-analysis",
      label: "Data Bias Examples",
    },
    {
      href: "/dashboards/marketing-teams",
      label: "Dashboard for Marketing Teams",
    },
    {
      href: "/dashboards/sales-teams",
      label: "Dashboards for Sales Teams",
    },
    {
      href: "/dashboards/engineering-teams",
      label: "Dashboards for Engineering Teams",
    },
  ];

  return (
    <footer className="bg-white relative z-[6] overflow-x-hidden">
      <div className="mx-auto max-w-[1280px] w-full pt-20 px-4 sm:px-6 lg:px-8">
        {/* Newsletter Form */}
        <form
          action="//metabase.us10.list-manage.com/subscribe/post?u=869fec0e4689e8fd1db91e795&id=b9664113a8"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          className="border-b border-[#f1f2f4] flex flex-col lg:flex-row lg:justify-between mb-[34px] pb-9"
          id="mc-embedded-subscribe-form"
        >
          <div>
            <h5 className="text-[#5a6072] text-lg font-bold leading-[26px] text-right mb-2">
              {translations.newsletter.title}
            </h5>
            <p className="text-[#5a6072] font-normal text-right">
              {translations.newsletter.description}
            </p>
          </div>
          <div className="mt-2 lg:mt-0">
            <div className="flex gap-3 h-[50px]">
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                placeholder={translations.newsletter.emailPlaceholder}
                className="flex-grow min-w-0 px-4 py-[0.834em] text-[#8d93a5] border border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#509ee3] focus:border-[#509ee3] placeholder:text-[#8d93a5] w-full lg:w-[360px]"
                required
              />
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-[#5ea4e3] hover:bg-[#2d86d4] text-white px-4 py-[0.834em] rounded-lg font-bold text-sm transition-colors duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#2d86d4]"
              >
                {translations.newsletter.submit}
              </button>
            </div>
            <div className="clear mt-2" id="mce-responses">
              <div
                className="response text-[#5a6072] text-sm mt-2 text-right hidden"
                id="mce-error-response"
              ></div>
              <div
                className="response text-[#5a6072] text-sm mt-2 text-right hidden"
                id="mce-success-response"
              ></div>
            </div>
          </div>
          {/* Bot protection field */}
          <div className="absolute left-[-5000px]">
            <input
              type="text"
              name="b_869fec0e4689e8fd1db91e795_b9664113a8"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
        </form>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-[10px] max-md:gap-0 w-full">
          {footerColumns.map((column, columnIndex) => {
            const isResourcesColumn = columnIndex === 4;
            return (
              <div
                key={columnIndex}
                className="flex flex-col flex-[1_1_20%] max-md:flex-[0_0_auto] max-md:basis-1/2 max-md:max-w-[50%] max-md:mb-5"
              >
                {column.sections.map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    <h6 className="text-[#5a6072] text-base font-black my-4">
                      {section.title}
                    </h6>
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center text-[#8d93a5] font-normal leading-[1.6em] mb-4 last:mb-0 hover:text-[#509ee3] transition-colors duration-200"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="flex items-center bg-[#e4ecfb] text-[#509ee3] text-xs font-bold h-5 mr-1 px-1 rounded transition-colors duration-200 hover:bg-[#c2daf0] hover:text-[#1c6bb0]">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </React.Fragment>
                ))}
                
                {/* Expandable sections for Resources column */}
                {isResourcesColumn && (
                  <>
                    {/* Choosing Metabase Expandable */}
                    <button
                      type="button"
                      onClick={() => handleResourceToggle("choosing")}
                      className="flex items-center text-[#8d93a5] font-normal leading-[1.6em] mb-4 hover:text-[#509ee3] transition-colors duration-200 cursor-pointer w-full text-right"
                    >
                      <span className="ml-1">{translations.links.choosingMetabase}</span>
                      <svg
                        className={`more-resources-chevron transition-transform duration-200 flex-shrink-0 ${
                          expandedResources.choosing ? "rotate-180" : ""
                        }`}
                        fill="none"
                        height="8"
                        viewBox="0 0 32 32"
                        width="8"
                      >
                        <rect fill="none" height="32" width="32" />
                        <path
                          d="M3 8.96338L16 21.9634L29 8.96338"
                          opacity="0.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          stroke="currentColor"
                        />
                      </svg>
                    </button>
                    <div
                      className={`flex flex-col ${
                        expandedResources.choosing ? "" : "hidden"
                      }`}
                    >
                      {choosingMetabaseLinks.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="flex items-center text-[#8d93a5] font-normal leading-[1.6em] mb-4 last:mb-0 hover:text-[#509ee3] transition-colors duration-200 pr-4"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {/* More Resources Expandable */}
                    <button
                      type="button"
                      onClick={() => handleResourceToggle("more")}
                      className="flex items-center text-[#8d93a5] font-normal leading-[1.6em] mb-4 hover:text-[#509ee3] transition-colors duration-200 cursor-pointer w-full text-right"
                    >
                      <span className="ml-1">{translations.links.moreResources}</span>
                      <svg
                        className={`more-resources-chevron transition-transform duration-200 flex-shrink-0 ${
                          expandedResources.more ? "rotate-180" : ""
                        }`}
                        fill="none"
                        height="8"
                        viewBox="0 0 32 32"
                        width="8"
                      >
                        <rect fill="none" height="32" width="32" />
                        <path
                          d="M3 8.96338L16 21.9634L29 8.96338"
                          opacity="0.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="5"
                          stroke="currentColor"
                        />
                      </svg>
                    </button>
                    <div
                      className={`flex flex-col ${
                        expandedResources.more ? "" : "hidden"
                      }`}
                    >
                      {moreResourcesLinks.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className="flex items-center text-[#8d93a5] font-normal leading-[1.6em] mb-4 last:mb-0 hover:text-[#509ee3] transition-colors duration-200 pr-4"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Logo and Social Links */}
        <div className="flex items-center justify-between mt-10 mb-[50px]">
          <div className="flex items-center gap-3 text-[#8d93a5]">
            <Link
              href="/"
              className="flex items-center text-[#8d93a5] transition-colors hover:text-[#5a6072]"
            >
              <div
                className="w-8 h-8 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: "url('/logo.svg')",
                  backgroundSize: "32px",
                }}
              />
            </Link>
            <span>{translations.copyright}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/channel/UCvg53nhM-xPUiFGqDJDhjaw"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:[&_path]:fill-[#5a6072]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#8D93A5"
                    fillRule="evenodd"
                    d="M21.377 1.078a3.01 3.01 0 0 1 2.122 2.128C24 5.083 24 9 24 9s0 3.917-.502 5.794a3.01 3.01 0 0 1-2.121 2.129c-1.872.503-9.377.503-9.377.503s-7.505 0-9.377-.503a3.01 3.01 0 0 1-2.121-2.129C0 12.917 0 9 0 9s0-3.917.502-5.794a3.01 3.01 0 0 1 2.121-2.128C4.495.575 12 .575 12 .575s7.505 0 9.377.503ZM15.818 9l-6.273 3.556V5.444L15.818 9Z"
                    clipRule="evenodd"
                    className="transition-colors"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 .575h24v16.85H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.github.com/metabase"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:[&_path]:fill-[#5a6072]"
            >
              <svg
                id=""
                className=""
                width="24"
                height="24"
                viewBox="0 0 26 26"
                fill="#8D93A5"
              >
                <path
                  d="M12.7888232,0 C5.72701843,0 0,5.72623326 0,12.7903935 C0,18.4412506 3.664381,23.2347038 8.74677616,24.9259565 C9.38668842,25.0437318 9.61988344,24.6487921 9.61988344,24.3095993 C9.61988344,24.0065243 9.60889108,23.2017267 9.60260973,22.1346828 C6.04501164,22.9072885 5.29439063,20.419875 5.29439063,20.419875 C4.71258083,18.942188 3.87402097,18.5488187 3.87402097,18.5488187 C2.71275688,17.7557986 3.96195983,17.7715019 3.96195983,17.7715019 C5.24571019,17.8617963 5.92095503,19.0897997 5.92095503,19.0897997 C7.06180474,21.0440839 8.9148022,20.4795478 9.64343849,20.1521326 C9.75964341,19.3261354 10.0901993,18.7623845 10.4553026,18.4428209 C7.61534847,18.1201167 4.62935298,17.0224513 4.62935298,12.12143 C4.62935298,10.7254006 5.12793493,9.58298052 5.94608042,8.68945886 C5.81417212,8.36596947 5.37526298,7.06494541 6.07170736,5.30459782 C6.07170736,5.30459782 7.14503259,4.96069405 9.5884767,6.61582907 C10.6084105,6.33159811 11.7029352,6.19026779 12.7903935,6.18477161 C13.8770666,6.19026779 14.9708062,6.33159811 15.9923103,6.61582907 C18.4341841,4.96069405 19.505939,5.30459782 19.505939,5.30459782 C20.2039537,7.06494541 19.7650445,8.36596947 19.6339214,8.68945886 C20.4536372,9.58298052 20.9482933,10.7254006 20.9482933,12.12143 C20.9482933,17.035014 17.9575868,18.1161909 15.1089958,18.4326137 C15.5675342,18.8275535 15.9766069,19.6080109 15.9766069,20.8014669 C15.9766069,22.5107785 15.9609036,23.8903194 15.9609036,24.3095993 C15.9609036,24.6519328 16.1917431,25.0500132 16.8402922,24.9251714 C21.9187615,23.2299928 25.5800018,18.4396803 25.5800018,12.7903935 C25.5800018,5.72623326 19.8529834,0 12.7888232,0"
                  className="transition-colors"
                />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/metabase"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:[&_path]:fill-[#5a6072]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2878_2487)">
                  <path
                    d="M13.9761 10.1625L22.7186 0.00012207H20.6469L13.0558 8.82396L6.99289 0.00012207H0L9.16837 13.3433L0 24.0001H2.07179L10.0881 14.6819L16.491 24.0001H23.4839L13.9756 10.1625H13.9761ZM11.1385 13.4609L10.2096 12.1322L2.81829 1.55974H6.00044L11.9653 10.0921L12.8942 11.4207L20.6479 22.5114H17.4657L11.1385 13.4614V13.4609Z"
                    fill="#8D93A5"
                    className="transition-colors"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2878_2487">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/metabase"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:[&_path]:fill-[#5a6072]"
            >
              <svg
                id=""
                className=""
                fill="#8D93A5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="28"
                height="28"
              >
                <path
                  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
                  className="transition-colors"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1399.98px) {
          footer > div {
            max-width: 1100px;
          }
        }
        @media (max-width: 1199.98px) {
          footer > div {
            max-width: 920px;
          }
        }
        @media (max-width: 991.98px) {
          footer > div {
            max-width: 680px;
          }
        }
        @media (max-width: 767.98px) {
          footer > div {
            max-width: 100%;
            padding: 80px 20px 0;
          }
          footer > div > div:nth-child(2) {
            gap: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

