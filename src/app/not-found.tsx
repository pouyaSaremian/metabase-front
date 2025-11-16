"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const NotFound: React.FC = () => {
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
            {/* Minimal 404 Number with elegant gradient */}
            <div className="relative mb-16">
              <h1
                className="text-[140px] md:text-[200px] lg:text-[240px] font-black leading-none relative inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, var(--metabase-blue) 0%, var(--metabase-blue-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "fadeInUp 0.8s ease-out",
                }}
              >
                404
              </h1>

              {/* Subtle glow effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, var(--metabase-blue) 0%, transparent 70%)",
                  animation: "pulseGlow 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* Not Found Illustration */}
            <div
              className="mb-12 flex justify-center"
              style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
            >
              <div className="relative">
                <Image
                  src="/not_found.svg"
                  alt="صفحه یافت نشد"
                  width={200}
                  height={200}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                  priority
                />
              </div>
            </div>

            {/* Main Message - More refined typography */}
            <div
              className="relative z-10 mb-16 space-y-4"
              style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-metabase-text-primary tracking-tight">
                صفحه مورد نظر یافت نشد
              </h2>
              <p className="text-base md:text-lg text-metabase-text-secondary max-w-md mx-auto leading-relaxed">
                صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است
              </p>
            </div>

            {/* Action Buttons - Minimal design */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
              style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
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

            {/* Minimal Quick Links */}
            <div
              className="max-w-xl mx-auto"
              style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}
            >
              <p className="text-sm text-metabase-text-light mb-6 font-medium">
                صفحات محبوب
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  {
                    href: "/product/business-intelligence",
                    label: "هوش تجاری",
                  },
                  {
                    href: "/product/embedded-analytics",
                    label: "تجزیه و تحلیل تعبیه شده",
                  },
                  { href: "/pricing/", label: "قیمت‌گذاری" },
                  { href: "/blog", label: "وبلاگ" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-metabase-text-secondary hover:text-metabase-primary transition-colors duration-300 text-sm font-medium relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-metabase-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
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

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
