import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metabase - تجزیه و تحلیل داده‌ها برای همه",
  description:
    "ابزار قدرتمند تجزیه و تحلیل داده‌ها که به شما کمک می‌کند بینش‌های ارزشمندی از داده‌هایتان کسب کنید",
  keywords: "تجزیه و تحلیل داده, داشبورد, گزارشگیری, هوش تجاری, Metabase",
  authors: [{ name: "Metabase Persian" }],
  openGraph: {
    title: "Metabase - تجزیه و تحلیل داده‌ها برای همه",
    description:
      "ابزار قدرتمند تجزیه و تحلیل داده‌ها که به شما کمک می‌کند بینش‌های ارزشمندی از داده‌هایتان کسب کنید",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabase - تجزیه و تحلیل داده‌ها برای همه",
    description:
      "ابزار قدرتمند تجزیه و تحلیل داده‌ها که به شما کمک می‌کند بینش‌های ارزشمندی از داده‌هایتان کسب کنید",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${inter.variable} ${vazirmatn.variable} font-vazirmatn antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
