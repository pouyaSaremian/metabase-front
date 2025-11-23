"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocsNavigationItem } from "@/types/docs";
import { cn } from "@/lib/utils";

interface DocsSidebarProps {
  data: DocsNavigationItem[];
  version: string;
  className?: string;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({
  data,
  className,
}) => {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Auto-expand items that contain the current path
  useEffect(() => {
    const newExpanded = new Set<string>();
    const findAndExpand = (items: DocsNavigationItem[]) => {
      items.forEach((item) => {
        if (item.children) {
          const hasActiveChild = item.children.some(
            (child) =>
              pathname?.includes(child.href) ||
              findActiveInChildren(child, pathname || "")
          );
          if (hasActiveChild || pathname?.includes(item.href)) {
            newExpanded.add(item.id);
            findAndExpand(item.children);
          }
        }
      });
    };
    findAndExpand(data);
    setExpandedItems(newExpanded);
  }, [pathname, data]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isActive = (href: string) => {
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const isSelected = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-20 right-4 z-50 p-2 bg-white border border-gray-200 rounded-md shadow-md"
        aria-label="Toggle docs menu"
        tabIndex={0}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        id="main-navigation-content"
        className={cn(
          "learn-left-sidebar",
          "hidden lg:block",
          isMobileOpen && "lg:block",
          className
        )}
      >
        {/* Docs/Learn Toggle */}
        <div className="hoverable-toggler mb-8">
          <div className="hover-highlight" />
          <Link
            href="/docs/latest"
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded text-base font-bold transition-all duration-300 relative z-1",
              "w-1/2",
              pathname?.startsWith("/docs")
                ? "bg-metabase-bg-blue-95 text-[#509ee3]"
                : "text-[#c6c9d2] hover:text-metabase-text-light"
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"
                stroke={pathname?.startsWith("/docs") ? "#509EE3" : "#8D93A5"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"
                stroke={pathname?.startsWith("/docs") ? "#509EE3" : "#8D93A5"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="relative -top-0.5">مستندات</span>
          </Link>
          <Link
            href="/learn"
            className={cn(
              "flex items-center gap-2 px-2 py-1 rounded text-base font-bold transition-all duration-300 relative z-1",
              "w-1/2",
              pathname?.startsWith("/learn")
                ? "bg-metabase-bg-blue-95 text-metabase-blue-60"
                : "text-[#c6c9d2] hover:text-metabase-text-light"
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14.0929L20 9.42144L12 4.75L4 9.42144L12 14.0929ZM12 14.0929L17.4756 10.8957C18.196 12.8186 18.4005 14.4134 18.0667 16.45C15.8121 16.68 13.6864 17.6604 12 19.25C10.3138 17.6606 8.18852 16.6802 5.93422 16.45C5.60018 14.4134 5.80465 12.8185 6.52533 10.8957L12 14.0929Z"
                stroke={pathname?.startsWith("/learn") ? "#509EE3" : "#8D93A5"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 9.5C12.5 9.7761 12.2761 10 12 10C11.7239 10 11.5 9.7761 11.5 9.5C11.5 9.2239 11.7239 9 12 9C12.2761 9 12.5 9.2239 12.5 9.5Z"
                stroke={pathname?.startsWith("/learn") ? "#509EE3" : "#8D93A5"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="relative -top-0.5">یادگیری</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <ul className="list-none m-0 p-0">
          {data.map((item) => (
            <DocsNavigationItem
              key={item.id}
              item={item}
              isExpanded={expandedItems.has(item.id)}
              onToggleExpand={toggleExpand}
              isActive={isActive}
              isSelected={isSelected}
              pathname={pathname || ""}
              expandedItems={expandedItems}
            />
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsMobileOpen(false);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="بستن منو"
        />
      )}
    </>
  );
};

interface DocsNavigationItemProps {
  item: DocsNavigationItem;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  isActive: (href: string) => boolean;
  isSelected: (href: string) => boolean;
  pathname: string;
  expandedItems: Set<string>;
}

const DocsNavigationItem: React.FC<DocsNavigationItemProps> = ({
  item,
  isExpanded,
  onToggleExpand,
  isActive,
  isSelected,
  pathname,
  expandedItems,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const active = isActive(item.href);
  const selected = isSelected(item.href);

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      onToggleExpand(item.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hasChildren) {
        onToggleExpand(item.id);
      }
    }
  };

  return (
    <li className={cn("list-none m-0 pb-1", isExpanded && "expanded")}>
      <Link
        href={item.href}
        onClick={hasChildren ? handleClick : undefined}
        onKeyDown={hasChildren ? handleKeyDown : undefined}
        className={cn(
          "block rounded-lg text-metabase-text-secondary text-sm font-normal leading-5",
          "py-1 pr-[38px] pl-2",
          "relative w-full",
          "transition-all duration-300",
          selected
            ? "bg-metabase-bg-blue-95 text-[#509ee3] font-bold selected"
            : active
            ? "bg-metabase-bg-blue-95 text-[#509ee3]"
            : "hover:bg-metabase-bg-blue-95 hover:text-[#509ee3]"
        )}
        tabIndex={0}
      >
        {item.title}
        {hasChildren && (
          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 flex items-center justify-center h-[30px] w-[30px] pointer-events-none">
            <svg
              className={cn(
                "block h-3 w-5 transition-transform duration-300 ease-in-out",
                isExpanded ? "rotate-0" : "-rotate-90 rtl:rotate-90"
              )}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.9"
                d="M3 8.96338L16 21.9634L29 8.96338"
                stroke={selected || active ? "#509ee3" : "#c6c9d2"}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300"
              />
            </svg>
          </div>
        )}
      </Link>
      {hasChildren && isExpanded && (
        <ul className="list-none m-0 p-0 block">
          {item.children!.map((child) => (
            <li
              key={child.id}
              className="list-none m-0 pb-1 border-l border-[#e4ecfb] pr-0 pl-[10px] rtl:border-r rtl:border-l-0 rtl:pl-0 rtl:pr-[10px]"
            >
              <DocsNavigationItem
                item={child}
                isExpanded={expandedItems.has(child.id)}
                onToggleExpand={onToggleExpand}
                isActive={isActive}
                isSelected={isSelected}
                pathname={pathname}
                expandedItems={expandedItems}
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Helper function to check if any child is active
function findActiveInChildren(
  item: DocsNavigationItem,
  pathname: string
): boolean {
  if (pathname.includes(item.href)) return true;
  if (item.children) {
    return item.children.some((child) => findActiveInChildren(child, pathname));
  }
  return false;
}
