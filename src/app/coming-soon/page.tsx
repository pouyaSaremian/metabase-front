"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom right, var(--metabase-bg-neutral-98), white, var(--metabase-bg-light))",
      }}
    >
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center">
            {/* Elegant Icon */}
            <div className="mb-12 flex justify-center">
              <div
                className="relative w-24 h-24 md:w-28 md:h-28"
                style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-metabase-primary"
                    style={{
                      animation: "pulseIcon 2s ease-in-out infinite",
                    }}
                  >
                    <path
                      d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-80"
                    />
                    <path
                      d="M12 8V12L15 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Message */}
            <div
              className="relative z-10 mb-12 space-y-4"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-metabase-text-primary tracking-tight">
                به زودی
              </h1>
              <p className="text-lg md:text-xl text-metabase-text-secondary max-w-lg mx-auto leading-relaxed">
                ما در حال ساخت چیزی فوق‌العاده هستیم
              </p>
              <p className="text-base text-metabase-text-light max-w-md mx-auto">
                به زودی این صفحه آماده خواهد شد. برای اطلاع از به‌روزرسانی‌ها،
                ایمیل خود را وارد کنید.
              </p>
            </div>

            {/* Email Subscription Form */}
            <div
              className="max-w-md mx-auto mb-16"
              style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="آدرس ایمیل شما"
                      required
                      className="flex-1 px-4 py-3 text-right border-2 border-metabase-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-metabase-primary focus:border-metabase-primary placeholder:text-metabase-text-light bg-white/80 backdrop-blur-sm transition-all duration-300"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-metabase-primary text-white rounded-lg font-bold text-sm hover:bg-metabase-primary-darker transition-all duration-300 shadow-lg shadow-metabase-primary/20 hover:shadow-metabase-primary/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? "در حال ارسال..." : "اطلاع‌رسانی به من"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm border-2 border-metabase-primary rounded-lg p-6">
                  <div className="flex items-center justify-center gap-3 text-metabase-primary mb-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="font-bold text-lg">با موفقیت ثبت شد!</p>
                  </div>
                  <p className="text-metabase-text-secondary text-sm">
                    به محض آماده شدن، به شما اطلاع خواهیم داد.
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
              style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
            >
              <Button
                href="/"
                variant="primary"
                size="lg"
                className="min-w-[180px] shadow-lg shadow-metabase-primary/20 hover:shadow-metabase-primary/30 transition-all duration-300"
              >
                بازگشت به صفحه اصلی
              </Button>
              <Button
                href="/docs/latest/"
                variant="outline"
                size="lg"
                className="min-w-[180px] border-2 hover:bg-metabase-bg-light transition-all duration-300"
              >
                مشاهده مستندات
              </Button>
            </div>

            {/* Social Links or Additional Info */}
            <div
              className="max-w-xl mx-auto"
              style={{ animation: "fadeInUp 0.8s ease-out 1s both" }}
            >
              <p className="text-sm text-metabase-text-light mb-4 font-medium">
                یا ما را در شبکه‌های اجتماعی دنبال کنید
              </p>
              <div className="flex items-center justify-center gap-4">
                {[
                  {
                    href: "https://www.twitter.com/metabase",
                    label: "توییتر",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9761 10.1625L22.7186 0.00012207H20.6469L13.0558 8.82396L6.99289 0.00012207H0L9.16837 13.3433L0 24.0001H2.07179L10.0881 14.6819L16.491 24.0001H23.4839L13.9756 10.1625H13.9761ZM11.1385 13.4609L10.2096 12.1322L2.81829 1.55974H6.00044L11.9653 10.0921L12.8942 11.4207L20.6479 22.5114H17.4657L11.1385 13.4614V13.4609Z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.github.com/metabase",
                    label: "گیت‌هاب",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.7888232,0 C5.72701843,0 0,5.72623326 0,12.7903935 C0,18.4412506 3.664381,23.2347038 8.74677616,24.9259565 C9.38668842,25.0437318 9.61988344,24.6487921 9.61988344,24.3095993 C9.61988344,24.0065243 9.60889108,23.2017267 9.60260973,22.1346828 C6.04501164,22.9072885 5.29439063,20.419875 5.29439063,20.419875 C4.71258083,18.942188 3.87402097,18.5488187 3.87402097,18.5488187 C2.71275688,17.7557986 3.96195983,17.7715019 3.96195983,17.7715019 C5.24571019,17.8617963 5.92095503,19.0897997 5.92095503,19.0897997 C7.06180474,21.0440839 8.9148022,20.4795478 9.64343849,20.1521326 C9.75964341,19.3261354 10.0901993,18.7623845 10.4553026,18.4428209 C7.61534847,18.1201167 4.62935298,17.0224513 4.62935298,12.12143 C4.62935298,10.7254006 5.12793493,9.58298052 5.94608042,8.68945886 C5.81417212,8.36596947 5.37526298,7.06494541 6.07170736,5.30459782 C6.07170736,5.30459782 7.14503259,4.96069405 9.5884767,6.61582907 C10.6084105,6.33159811 11.7029352,6.19026779 12.7903935,6.18477161 C13.8770666,6.19026779 14.9708062,6.33159811 15.9923103,6.61582907 C18.4341841,4.96069405 19.505939,5.30459782 19.505939,5.30459782 C20.2039537,7.06494541 19.7650445,8.36596947 19.6339214,8.68945886 C20.4536372,9.58298052 20.9482933,10.7254006 20.9482933,12.12143 C20.9482933,17.035014 17.9575868,18.1161909 15.1089958,18.4326137 C15.5675342,18.8275535 15.9766069,19.6080109 15.9766069,20.8014669 C15.9766069,22.5107785 15.9609036,23.8903194 15.9609036,24.3095993 C15.9609036,24.6519328 16.1917431,25.0500132 16.8402922,24.9251714 C21.9187615,23.2299928 25.5800018,18.4396803 25.5800018,12.7903935 C25.5800018,5.72623326 19.8529834,0 12.7888232,0" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/company/metabase",
                    label: "لینکدین",
                    icon: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                      >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                      </svg>
                    ),
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-metabase-text-secondary hover:text-metabase-primary transition-colors duration-300 text-sm font-medium group"
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-metabase-border-light group-hover:border-metabase-primary group-hover:bg-metabase-primary-lighter transition-all duration-300">
                      {social.icon}
                    </span>
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Elegant animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseIcon {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
