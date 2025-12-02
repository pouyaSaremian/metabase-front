"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface AsideMenuItem {
  id: string;
  title: string;
  href: string;
  children?: AsideMenuItem[];
}

export interface AsideMenuSection {
  title: string;
  items: AsideMenuItem[];
}

export interface AsideMenuToggler {
  docs: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  learn: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
}

export interface AsideMenuProps {
  sections: AsideMenuSection[];
  toggler?: AsideMenuToggler;
  className?: string;
  activePath?: string;
}

export const AsideMenu: React.FC<AsideMenuProps> = ({
  sections,
  toggler,
  className,
  activePath,
}) => {
  const pathname = usePathname();
  const currentPath = activePath || pathname || "";
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeToggler, setActiveToggler] = useState<"docs" | "learn">("docs");
  const hoverHighlightRef = useRef<HTMLDivElement>(null);

  // Auto-expand items that contain the current path
  useEffect(() => {
    const newExpanded = new Set<string>();
    const findAndExpand = (items: AsideMenuItem[]) => {
      items.forEach((item) => {
        if (item.children) {
          const hasActiveChild = item.children.some(
            (child) =>
              currentPath.includes(child.href) ||
              findActiveInChildren(child, currentPath)
          );
          if (hasActiveChild || currentPath.includes(item.href)) {
            newExpanded.add(item.id);
            findAndExpand(item.children);
          }
        }
      });
    };
    sections.forEach((section) => {
      findAndExpand(section.items);
    });
    setExpandedItems(newExpanded);
  }, [currentPath, sections]);

  // Determine active toggler based on pathname
  useEffect(() => {
    if (toggler) {
      if (currentPath.startsWith(toggler.docs.href)) {
        setActiveToggler("docs");
      } else if (currentPath.startsWith(toggler.learn.href)) {
        setActiveToggler("learn");
      }
    }
  }, [currentPath, toggler]);

  // Handle hover highlight animation - matches original JS behavior
  useEffect(() => {
    if (!hoverHighlightRef.current || !toggler) return;

    const updateHighlight = (target: HTMLElement) => {
      if (!hoverHighlightRef.current) return;
      const rect = target.getBoundingClientRect();
      const container = target.parentElement?.getBoundingClientRect();
      if (container) {
        const isRTL = document.documentElement.dir === "rtl";
        hoverHighlightRef.current.style.width = `${rect.width - 8}px`;
        if (isRTL) {
          hoverHighlightRef.current.style.right = `${
            rect.right - container.right + 4
          }px`;
          hoverHighlightRef.current.style.left = "auto";
        } else {
          hoverHighlightRef.current.style.left = `${
            rect.left - container.left + 4
          }px`;
          hoverHighlightRef.current.style.right = "auto";
        }
      }
    };

    const docsLink = document.querySelector(
      '[data-toggler="docs"]'
    ) as HTMLElement;
    const learnLink = document.querySelector(
      '[data-toggler="learn"]'
    ) as HTMLElement;

    const handleDocsHover = () => {
      if (docsLink) updateHighlight(docsLink);
    };
    const handleLearnHover = () => {
      if (learnLink) updateHighlight(learnLink);
    };

    // Set initial position based on active toggler
    if (activeToggler === "docs" && docsLink) {
      updateHighlight(docsLink);
    } else if (activeToggler === "learn" && learnLink) {
      updateHighlight(learnLink);
    }

    if (docsLink) {
      docsLink.addEventListener("mouseenter", handleDocsHover);
    }
    if (learnLink) {
      learnLink.addEventListener("mouseenter", handleLearnHover);
    }

    return () => {
      if (docsLink) {
        docsLink.removeEventListener("mouseenter", handleDocsHover);
      }
      if (learnLink) {
        learnLink.removeEventListener("mouseenter", handleLearnHover);
      }
    };
  }, [toggler, activeToggler]);

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
    return currentPath === href || currentPath.startsWith(href + "/");
  };

  const isSelected = (href: string) => {
    return currentPath === href;
  };

  return (
    <aside
      id="main-navigation-content"
      className={cn(
        "learn-left-sidebar",
        "hidden lg:block",
        "w-96",
        "self-start",
        "z-10",
        className
      )}
    >
      {/* Docs/Learn Toggler */}
      {toggler && (
        <div className="hoverable-toggler">
          <div ref={hoverHighlightRef} className="hover-highlight" />
          <Link
            href={toggler.docs.href}
            data-toggler="docs"
            className={cn(activeToggler === "docs" && "active")}
          >
            {toggler.docs.icon || (
              <DocsIcon isActive={activeToggler === "docs"} />
            )}
            <span>{toggler.docs.label}</span>
          </Link>
          <Link
            href={toggler.learn.href}
            data-toggler="learn"
            className={cn(activeToggler === "learn" && "active")}
          >
            {toggler.learn.icon || (
              <LearnIcon isActive={activeToggler === "learn"} />
            )}
            <span>{toggler.learn.label}</span>
          </Link>
        </div>
      )}

      {/* Navigation Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h5>{section.title}</h5>
          <ul>
            {section.items.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isExpanded={expandedItems.has(item.id)}
                onToggleExpand={toggleExpand}
                isActive={isActive}
                isSelected={isSelected}
                currentPath={currentPath}
                expandedItems={expandedItems}
                level={0}
              />
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

interface MenuItemProps {
  item: AsideMenuItem;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
  isActive: (href: string) => boolean;
  isSelected: (href: string) => boolean;
  currentPath: string;
  expandedItems: Set<string>;
  level: number;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isExpanded,
  onToggleExpand,
  isActive,
  isSelected,
  currentPath,
  expandedItems,
  level,
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
    <li className={cn(isExpanded && "expanded")}>
      <Link
        href={item.href}
        onClick={hasChildren ? handleClick : undefined}
        onKeyDown={hasChildren ? handleKeyDown : undefined}
        className={cn(selected && "selected")}
        tabIndex={0}
      >
        {item.title}
        {hasChildren && (
          <div>
            <ChevronIcon isActive={active || selected} />
          </div>
        )}
      </Link>
      {hasChildren && isExpanded && (
        <ul>
          {item.children!.map((child) => (
            <MenuItem
              key={child.id}
              item={child}
              isExpanded={expandedItems.has(child.id)}
              onToggleExpand={onToggleExpand}
              isActive={isActive}
              isSelected={isSelected}
              currentPath={currentPath}
              expandedItems={expandedItems}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// Icons matching the HTML exactly
interface IconProps {
  isActive?: boolean;
}

const DocsIcon: React.FC<IconProps> = ({ isActive = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"
      stroke={isActive ? "#509EE3" : "#8D93A5"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"
      stroke={isActive ? "#509EE3" : "#8D93A5"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LearnIcon: React.FC<IconProps> = ({ isActive = false }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14.0929L20 9.42144L12 4.75L4 9.42144L12 14.0929ZM12 14.0929L17.4756 10.8957C18.196 12.8186 18.4005 14.4134 18.0667 16.45C15.8121 16.68 13.6864 17.6604 12 19.25C10.3138 17.6606 8.18852 16.6802 5.93422 16.45C5.60018 14.4134 5.80465 12.8185 6.52533 10.8957L12 14.0929Z"
      stroke={isActive ? "#509EE3" : "#509EE3"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 9.5C12.5 9.7761 12.2761 10 12 10C11.7239 10 11.5 9.7761 11.5 9.5C11.5 9.2239 11.7239 9 12 9C12.2761 9 12.5 9.2239 12.5 9.5Z"
      stroke={isActive ? "#509EE3" : "#509EE3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ChevronIconProps {
  isActive: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ isActive }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="chevron"
  >
    <path
      opacity="0.9"
      d="M3 8.96338L16 21.9634L29 8.96338"
      stroke={isActive ? "#509ee3" : "#c6c9d2"}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Helper function to check if any child is active
function findActiveInChildren(item: AsideMenuItem, pathname: string): boolean {
  if (pathname.includes(item.href)) return true;
  if (item.children) {
    return item.children.some((child) => findActiveInChildren(child, pathname));
  }
  return false;
}
