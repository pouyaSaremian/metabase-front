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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

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
