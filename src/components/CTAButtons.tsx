import React from "react";
import Button from "./Button";

const CTAButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
      <Button
        variant="primary"
        size="lg"
        href="https://store.metabase.com/checkout"
      >
        رایگان Metabase Cloud را امتحان کنید
      </Button>
      <Button variant="outline" size="lg" href="/start/oss/">
        استقرار Metabase منبع باز
      </Button>
    </div>
  );
};

export default CTAButtons;
