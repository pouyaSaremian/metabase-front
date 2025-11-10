import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import PricingGrid from "@/components/pricing/PricingGrid";

export const metadata: Metadata = {
  title: "قیمت‌گذاری متابیس",
  description:
    "پلن‌های متابیس برای همه: متن‌باز، استارتر، پرو و سازمانی. انتخاب بر اساس نیاز شما.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-10 md:py-14">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            برای هر کسب‌وکاری یک متابیس وجود دارد
          </h1>
          <div className="mx-auto max-w-6xl">
            <PricingGrid />
          </div>
        </section>
        <section id="compare" className="container mx-auto px-4 pb-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">
              مقایسهٔ خلاصهٔ پلن‌ها
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-neutral-800 border-separate border-spacing-y-2">
                <thead>
                  <tr>
                    <th className="text-right font-bold">ویژگی</th>
                    <th className="text-right font-bold">متن‌باز</th>
                    <th className="text-right font-bold">استارتر</th>
                    <th className="text-right font-bold">پرو</th>
                    <th className="text-right font-bold">سازمانی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-neutral-50">
                    <td className="py-3 px-3 rounded-r-lg">استقرار</td>
                    <td className="py-3 px-3">خود-میزبان</td>
                    <td className="py-3 px-3">ابری</td>
                    <td className="py-3 px-3">ابری/خود-میزبان</td>
                    <td className="py-3 px-3 rounded-l-lg">ابری/خود-میزبان</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-3 px-3 rounded-r-lg">پشتیبانی</td>
                    <td className="py-3 px-3">انجمن</td>
                    <td className="py-3 px-3">ایمیلی</td>
                    <td className="py-3 px-3">ایمیلی سریع</td>
                    <td className="py-3 px-3 rounded-l-lg">اولویت‌دار</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="py-3 px-3 rounded-r-lg">تعبیه</td>
                    <td className="py-3 px-3">پایه (نشان دارد)</td>
                    <td className="py-3 px-3">—</td>
                    <td className="py-3 px-3">تعاملی/چندمستاجره</td>
                    <td className="py-3 px-3 rounded-l-lg">
                      تعاملی/چندمستاجره
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
