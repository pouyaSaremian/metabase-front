"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TOCItem } from "@/types/docs";
import { cn } from "@/lib/utils";

interface DocsTOCProps {
  items: TOCItem[];
  className?: string;
}

export const DocsTOC: React.FC<DocsTOCProps> = ({ items, className }) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const headerOffset = 120; // approximate combined height of header/top padding

    const handleScroll = () => {
      let firstVisibleId = items[0]?.id ?? "";

      for (const item of items) {
        const element = document.getElementById(item.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        // Mimic original behavior: first heading below the top (with offset)
        if (rect.top >= headerOffset) {
          firstVisibleId = item.id;
          break;
        }
      }

      setActiveId(firstVisibleId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleItemClick =
    (item: TOCItem) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const element = document.getElementById(item.id);
      if (!element) {
        return;
      }

      const headerOffset = 120;
      const targetY =
        window.scrollY + element.getBoundingClientRect().top - headerOffset;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      setActiveId(item.id);
    };

  if (items.length === 0) return null;

  return (
    <aside
      className={cn(
        "h-[98vh]",
        "w-[250px] max-w-[250px] min-w-[250px] shrink-0",
        "overflow-y-auto",
        "sticky top-[63px]",
        "bg-white z-10",
        "self-start",
        "rtl:ml-0",
        "block",
        className
      )}
      aria-label="فهرست مطالب"
    >
      <div
        id="sub-navigation-content"
        className={cn("h-auto overflow-y-auto pt-12 static top-0")}
      >
        <h6 className="text-metabase-text-primary block font-bold pb-6 mb-0">
          در این صفحه
        </h6>
        <nav className="space-y-1" aria-label="فهرست مطالب صفحه">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={handleItemClick(item)}
              className={cn(
                "block text-sm mb-4 pl-5 relative",
                "text-metabase-text-light hover:text-metabase-text-secondary",
                "rtl:pl-0 rtl:pr-5",
                activeId === item.id &&
                  "text-metabase-text-secondary font-medium"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};
