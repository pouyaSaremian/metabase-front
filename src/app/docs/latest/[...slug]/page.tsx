import { Metadata } from "next";
import { DocsContent } from "@/components/docs/DocsContent";

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug ? slug.join("/") : "";
  const title = slug
    ? slug.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" - ")
    : "مستندات";

  return {
    title: `${title} | مستندات متابیس`,
    description: `مستندات متابیس - ${title}. راهنمای کامل و جامع برای استفاده از ویژگی‌های متابیس`,
    keywords: [
      "مستندات متابیس",
      "Metabase",
      title,
      "راهنمای متابیس",
      "هوش تجاری",
    ],
    openGraph: {
      title: `${title} | مستندات متابیس`,
      description: `مستندات متابیس - ${title}`,
      type: "article",
      locale: "fa_IR",
    },
    alternates: {
      canonical: `/docs/latest/${path}`,
    },
  };
}

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const path = slug ? slug.join("/") : "";
  const title = slug
    ? slug
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " "))
        .join(" - ")
    : "مستندات";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: `مستندات متابیس - ${title}`,
            inLanguage: "fa-IR",
            author: {
              "@type": "Organization",
              name: "Metabase",
            },
          }),
        }}
      />
      <DocsContent>
        <h1>{title}</h1>
        <p>این صفحه در حال توسعه است. محتوای مستندات به زودی اضافه خواهد شد.</p>
        <p className="text-sm text-gray-500">مسیر: {path || "/"}</p>
      </DocsContent>
    </>
  );
}
