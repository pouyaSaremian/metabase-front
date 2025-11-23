import { Metadata } from "next";
import { DocsContent } from "@/components/docs/DocsContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "مستندات متابیس - آخرین نسخه | Metabase Documentation",
  description:
    "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز. راهنمای جامع برای استفاده از تمام ویژگی‌های متابیس شامل سوالات، داشبوردها، مدل‌سازی داده و جاسازی.",
  keywords: [
    "مستندات متابیس",
    "Metabase documentation",
    "هوش تجاری",
    "تحلیل داده",
    "داشبورد",
    "بیزینس اینتلیجنس",
  ],
  openGraph: {
    title: "مستندات متابیس - آخرین نسخه",
    description:
      "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز برای تجزیه و تحلیل داده‌ها",
    type: "website",
    locale: "fa_IR",
  },
  alternates: {
    canonical: "/docs/latest",
  },
};

export default function LatestDocsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "مستندات متابیس - آخرین نسخه",
            description: "مستندات کامل متابیس - پلتفرم هوش تجاری منبع باز",
            inLanguage: "fa-IR",
            author: {
              "@type": "Organization",
              name: "Metabase",
            },
          }),
        }}
      />
      <DocsContent>
        <h1>مستندات متابیس</h1>
        <p>
          متابیس یک پلتفرم هوش تجاری منبع باز است. شما می‌توانید از متابیس برای
          پرسیدن سوالات درباره داده‌هایتان استفاده کنید، یا متابیس را در برنامه
          خود جاسازی کنید تا به مشتریان‌تان اجازه دهید داده‌های خود را به صورت
          مستقل بررسی کنند.
        </p>

        <section>
          <h2 id="getting-started">شروع کار</h2>
          <p>
            اگر تازه با متابیس شروع کرده‌اید، بهترین نقطه شروع بخش{" "}
            <Link href="/docs/latest/getting-started">شروع کار</Link> است.
          </p>
        </section>

        <section>
          <h2 id="main-categories">دسته‌بندی‌های اصلی</h2>

          <article>
            <h3 id="analytics">تحلیل و بررسی</h3>
            <p>
              یاد بگیرید چگونه سوالات بپرسید، نمودارها بسازید و داشبورد ایجاد
              کنید.
            </p>
          </article>

          <article>
            <h3 id="data-modeling">مدل‌سازی داده</h3>
            <p>
              یاد بگیرید چگونه داده‌های خود را مدل‌سازی کنید و معیارها و بخش‌ها
              ایجاد کنید.
            </p>
          </article>

          <article>
            <h3 id="databases">پایگاه‌های داده</h3>
            <p>
              یاد بگیرید چگونه به پایگاه‌های داده متصل شوید و آن‌ها را مدیریت
              کنید.
            </p>
          </article>

          <article>
            <h3 id="permissions">مجوزها</h3>
            <p>
              یاد بگیرید چگونه مجوزها را تنظیم کنید و دسترسی کاربران را مدیریت
              کنید.
            </p>
          </article>

          <article>
            <h3 id="embedding">جاسازی</h3>
            <p>
              یاد بگیرید چگونه متابیس را در برنامه خود جاسازی کنید و تجزیه و
              تحلیل را برای مشتریان خود فراهم کنید.
            </p>
          </article>
        </section>
      </DocsContent>
    </>
  );
}
