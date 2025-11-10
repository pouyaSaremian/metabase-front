import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import PricingGrid from "@/components/pricing/PricingGrid";
import PlanComparison from "@/components/pricing/PlanComparison";

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
        <section className="bg-[#f5f7ff] py-10 md:py-14">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
              برای هر کسب‌وکاری یک متابیس وجود دارد
            </h1>
            <div className="mx-auto max-w-6xl">
              <PricingGrid />
            </div>
          </div>
        </section>
        <section id="compare" className=" mx-auto px-4 pb-16 bg-[#f5f7ff] ">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">
              مقایسهٔ کامل پلن‌ها
            </h2>
            <PlanComparison />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
