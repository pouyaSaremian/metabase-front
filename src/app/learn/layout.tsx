import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PrismLoader } from "@/components/PrismLoader";

interface LearnLayoutProps {
  children: ReactNode;
}

export default function LearnLayout({ children }: LearnLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <PrismLoader />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
