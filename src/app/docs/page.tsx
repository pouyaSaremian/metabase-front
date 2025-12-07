import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مستندات متابیس | Metabase Documentation",
  description:
    "مستندات کامل متابیس برای شروع کار و استفاده از تمام ویژگی‌ها. راهنمای جامع پلتفرم هوش تجاری منبع باز.",
  keywords: [
    "مستندات متابیس",
    "Metabase documentation",
    "راهنمای متابیس",
    "هوش تجاری",
    "تحلیل داده",
  ],
  openGraph: {
    title: "مستندات متابیس",
    description: "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز",
    type: "website",
    locale: "fa_IR",
  },
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "مستندات متابیس",
            description:
              "راهنمای کامل برای استفاده از متابیس و تمام ویژگی‌های آن",
            inLanguage: "fa-IR",
          }),
        }}
      />
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            مستندات متابیس
          </h1>
          <p className="text-lg text-gray-600">
            راهنمای کامل برای استفاده از متابیس و تمام ویژگی‌های آن
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link
            href="/docs/latest"
            className="p-6 border border-gray-200 rounded-lg hover:border-[#509ee3] hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              آخرین نسخه
            </h2>
            <p className="text-gray-600">
              مستندات آخرین نسخه متابیس با تمام ویژگی‌های جدید
            </p>
          </Link>

          <Link
            href="/docs/all"
            className="p-6 border border-gray-200 rounded-lg hover:border-[#509ee3] hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              تمام نسخه‌ها
            </h2>
            <p className="text-gray-600">مشاهده مستندات تمام نسخه‌های متابیس</p>
          </Link>
        </div>

        <nav aria-label="دسته‌بندی‌های اصلی مستندات">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              دسته‌بندی‌های اصلی
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/docs/latest/getting-started"
                  className="hover:text-[#509ee3]"
                >
                  • شروع کار
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/analytics"
                  className="hover:text-[#509ee3]"
                >
                  • تحلیل و بررسی
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/data-modeling"
                  className="hover:text-[#509ee3]"
                >
                  • مدل‌سازی داده
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/databases"
                  className="hover:text-[#509ee3]"
                >
                  • پایگاه‌های داده
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/permissions"
                  className="hover:text-[#509ee3]"
                >
                  • مجوزها
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/latest/embedding"
                  className="hover:text-[#509ee3]"
                >
                  • جاسازی
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
