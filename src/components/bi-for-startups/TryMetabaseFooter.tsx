import React from "react";
import Button from "@/components/Button";

const TryMetabaseFooter: React.FC = () => {
  return (
    <div className="bg-metabase-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Metabase را 14 روز رایگان امتحان کنید
          </h3>
          <p className="text-lg mb-8 text-white/90">
            پرداخت به صورت pay-as-you-go، یا 10٪ تخفیف با اشتراک سالانه دریافت
            کنید.
          </p>
          <Button
            href="https://store.metabase.com/checkout"
            variant="secondary"
            size="lg"
            className="text-sm rounded-xl bg-white text-metabase-primary hover:bg-gray-100"
          >
            شروع کنید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TryMetabaseFooter;
