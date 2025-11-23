import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-metabase-bg-neutral-98 flex flex-col">
      <Header />
      <main className="flex-1 bg-metabase-bg-neutral-98">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
