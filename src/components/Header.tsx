"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuLink {
  href: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
  badge?: string;
}

interface DropdownMenu {
  id: string;
  title: string;
  sections: MenuLink[][];
  footer?: {
    links: MenuLink[];
  };
}

const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hoverHighlight, setHoverHighlight] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 100,
    opacity: 0,
  });
  const headerRef = useRef<HTMLElement>(null);
  const submenuContainerRef = useRef<HTMLDivElement>(null);

  // Persian translations for navigation
  const navItems = {
    product: "محصول",
    features: "ویژگی‌ها",
    docs: "مستندات",
    resources: "منابع",
    pricing: "قیمت‌گذاری",
    login: "ورود",
    getStarted: "شروع کنید",
  };

  // Product dropdown menu data
  const productMenu: DropdownMenu = {
    id: "product",
    title: navItems.product,
    sections: [
      [
        {
          href: "/product/business-intelligence",
          title: "هوش تجاری",
          description: "تجزیه و تحلیل خودسرویس برای تیم شما",
          icon: (
            <div className="bg-blue-50 border-2 border-blue-100 rounded-lg p-2 mb-6 w-16 h-12 flex items-end gap-1 group-hover:bg-blue-100 transition-colors">
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-5"
                style={{ height: "20px" }}
              />
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-5"
                style={{ height: "30px" }}
              />
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-6"
                style={{ height: "35px" }}
              />
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-9"
                style={{ height: "24px" }}
              />
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-6"
                style={{ height: "16px" }}
              />
              <div
                className="w-1 bg-blue-500 rounded-sm transition-all duration-400 group-hover:h-5"
                style={{ height: "20px" }}
              />
            </div>
          ),
        },
        {
          href: "/product/embedded-analytics",
          title: "تجزیه و تحلیل تعبیه شده",
          description: "تجزیه و تحلیل سریع و انعطاف‌پذیر برای مشتریان",
          icon: (
            <div
              className="relative w-16 h-12 mb-6 rounded-lg overflow-hidden"
              style={{ backgroundImage: "url(/embed-background.svg)" }}
            >
              <Image
                src="/embed.svg"
                alt="Embed"
                width={24}
                height={24}
                className="absolute transition-all duration-400 group-hover:left-0 group-hover:rotate-0"
                style={{ left: "40px", transform: "rotate(-15deg)" }}
              />
            </div>
          ),
        },
      ],
    ],
    footer: {
      links: [
        {
          href: "/data-sources/",
          title: "منابع داده",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.55556V16.4444C5 18.4089 8.13425 20 12 20C15.8658 20 19 18.4089 19 16.4444V7.55556M5 7.55556C5 9.52 8.13425 11.1111 12 11.1111C15.8658 11.1111 19 9.52 19 7.55556M5 7.55556C5 5.59111 8.13425 4 12 4C15.8658 4 19 5.59111 19 7.55556M19 12C19 13.9644 15.8658 15.5556 12 15.5556C8.13425 15.5556 5 13.9644 5 12"
                stroke="#509EE3"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/security",
          title: "امنیت",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="transparent"
            >
              <path
                d="M12.0031 4.75L4.75307 8C4.75307 8 4.00307 19.25 12.0031 19.25C20.0031 19.25 19.2531 8 19.2531 8L12.0031 4.75Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 12.75L11 14.25L14.25 9.75"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/cloud/",
          title: "ابر",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 14C4.75 15.7949 6.20507 17.25 8 17.25H16C17.7949 17.25 19.25 15.7949 19.25 14C19.25 12.2869 17.9246 10.8834 16.2433 10.759C16.1183 8.5239 14.2663 6.75 12 6.75C9.73368 6.75 7.88168 8.5239 7.75672 10.759C6.07542 10.8834 4.75 12.2869 4.75 14Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    },
  };

  // Features dropdown menu data
  const featuresMenu: DropdownMenu = {
    id: "features",
    title: navItems.features,
    sections: [
      [
        {
          href: "/features/analytics-dashboards",
          title: "داشبوردهای تحلیلی",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 12V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H12"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 13L15.73 19.5L16.77 16.77L19.5 15.73L13 13Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.77 16.77L19.5 19.5"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/features/query-builder",
          title: "سازنده کوئری",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 5.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1v-3.5ZM4.75 14.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1v-3.5ZM16.25 5v5M16.25 14v5"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/features/data-segregation",
          title: "تفکیک داده‌ها",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 5.75a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-3.5ZM4.75 14.75a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-3.5ZM13.75 5.75a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-3.5ZM13.75 14.75a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-3.5Z"
              />
            </svg>
          ),
        },
        {
          href: "/features/models",
          title: "مدل‌ها",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 8L12 4.75L19.25 8L12 11.25L4.75 8Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.75 16L12 19.25L19.25 16"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.25 8V16"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.75 8V16"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11.5V19"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/features/usage-analytics",
          title: "تحلیل کاربری",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10V6.75C17.5 5.64543 16.6046 4.75 15.5 4.75H7C5.89543 4.75 5 5.64543 5 6.75V17.25C5 18.3546 5.89543 19.25 7 19.25H10.25"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.75 17.5L19.75 19.5"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="15.25"
                cy="15"
                r="3"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7.25 8.25H15.25"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.25 12H10.25"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M7.25 16H9.25"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          href: "/features/metabot-ai",
          title: "متابات هوش مصنوعی",
          badge: "بتا",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.25 4.75H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2Z"
              />
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.57 7.177H8.43c-.75 0-1.36.461-1.36 1.03v5.413c0 .57.61 1.03 1.36 1.03h7.14c.75 0 1.36-.46 1.36-1.03V8.208c0-.57-.61-1.031-1.36-1.031Z"
              />
              <circle cx="9.625" cy="9.774" r=".75" fill="#8D93A5" />
              <circle cx="14.375" cy="9.774" r=".75" fill="#8D93A5" />
              <path
                stroke="#8D93A5"
                d="M13.266 11.152a1.266 1.266 0 1 1-2.532 0"
              />
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M14.709 17.079h2.002"
              />
            </svg>
          ),
        },
      ],
      [
        {
          href: "/product/embedded-analytics-sdk",
          title: "SDK تجزیه و تحلیل تعبیه شده",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 6.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2V6.75ZM9.75 8.75V19M5 8.25h14"
              />
            </svg>
          ),
        },
        {
          href: "/features/white-label-analytics",
          title: "تحلیل برچسب سفید",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m4.75 16 2.746-3.493a2 2 0 0 1 3.09-.067L13 15.25m-2.085-2.427c1.037-1.32 2.482-3.188 2.576-3.31a2 2 0 0 1 3.094-.073L19 12.25m-12.25 7h10.5a2 2 0 0 0 2-2V6.75a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2Z"
              />
            </svg>
          ),
        },
        {
          href: "/features/drill-through",
          title: "حفاری عمقی",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 19.25 15.5 15.5M4.75 11a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"
              />
            </svg>
          ),
        },
        {
          href: "/features/sql-editor",
          title: "ویرایشگر SQL",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 19.25h12.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1ZM19.25 9.25h-14M19.25 14.75h-14"
              />
            </svg>
          ),
        },
        {
          href: "/features/permissions",
          title: "مجوزها",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/product/csv-uploads",
          title: "آپلود CSV",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 17.5C6.45507 17.5 5 16.0449 5 14.25C5 12.5369 6.32542 11.1334 8.00672 11.009C8.13168 8.7739 9.98368 7 12.25 7C14.5163 7 16.3683 8.7739 16.4933 11.009C18.1746 11.1334 19.5 12.5369 19.5 14.25C19.5 16.0449 18.0449 17.5 16.25 17.5"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.25 17.5L12.25 13.25"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 14.5L12.25 12L15.5 14.5"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    ],
    footer: {
      links: [
        {
          href: "/releases",
          title: "آنچه جدید است",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.283 12.26 15.5 15l-.783-2.74a4.333 4.333 0 0 0-2.975-2.976L9 8.5l2.74-.783a4.333 4.333 0 0 0 2.976-2.975L15.5 2l.783 2.74a4.333 4.333 0 0 0 2.975 2.976L22 8.5l-2.74.783a4.334 4.334 0 0 0-2.976 2.975l-.001.001ZM6.5 22l.591-1.774a3.375 3.375 0 0 1 2.135-2.135L11 17.5l-1.774-.591a3.375 3.375 0 0 1-2.135-2.134L6.5 13l-.591 1.774a3.375 3.375 0 0 1-2.134 2.135L2 17.5l1.775.591a3.375 3.375 0 0 1 2.134 2.134L6.5 22Z"
              />
            </svg>
          ),
        },
        {
          href: "/roadmap",
          title: "نقشه راه",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#8D93A5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m4.75 6.75 4.5-2v12.5l-4.5 2V6.75ZM14.75 6.75l4.5-2v12.5l-4.5 2V6.75ZM14.75 6.75l-5.5-2v12.5l5.5 2V6.75Z"
              />
            </svg>
          ),
        },
      ],
    },
  };

  // Docs dropdown menu data
  const docsMenu: DropdownMenu = {
    id: "docs",
    title: navItems.docs,
    sections: [
      [
        {
          href: "/docs/latest/",
          title: "مستندات",
          description: "راهنمای Metabase",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/learn/",
          title: "یادگیری",
          description: "راهنماها و آموزش‌ها",
          icon: (
            <Image
              src="/Type=Learn.svg"
              alt="Learn icon"
              width={24}
              height={24}
            />
          ),
        },
      ],
    ],
  };

  // Resources dropdown menu data
  const resourcesMenu: DropdownMenu = {
    id: "resources",
    title: navItems.resources,
    sections: [
      [
        {
          href: "/blog",
          title: "وبلاگ",
          description: "اخبار، به‌روزرسانی‌ها و ایده‌ها",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/events/",
          title: "رویدادها",
          description:
            "به یک رویداد زنده بپیوندید یا به صورت آنلاین تماشا کنید",
          icon: (
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4.75 6.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2V6.75Z"
              />
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15.25 12-5.5-3.25v6.5l5.5-3.25Z"
              />
            </svg>
          ),
        },
        {
          href: "/case-studies",
          title: "مشتریان",
          description: "شرکت‌های واقعی، داده‌های واقعی، داستان‌های واقعی",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11.995 7.233c-1.45-1.623-3.867-2.06-5.683-.573-1.816 1.486-2.072 3.971-.645 5.73l6.328 5.86 6.329-5.86c1.426-1.759 1.201-4.26-.646-5.73-1.848-1.471-4.233-1.05-5.683.573Z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
        {
          href: "https://discourse.metabase.com/",
          title: "بحث",
          description: "اشتراک‌گذاری و ارتباط با سایر کاربران",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18.25C15.5 18.25 19.25 16.5 19.25 12C19.25 7.5 15.5 5.75 12 5.75C8.5 5.75 4.75 7.5 4.75 12C4.75 13.0298 4.94639 13.9156 5.29123 14.6693C5.50618 15.1392 5.62675 15.6573 5.53154 16.1651L5.26934 17.5635C5.13974 18.2547 5.74527 18.8603 6.43651 18.7307L9.64388 18.1293C9.896 18.082 10.1545 18.0861 10.4078 18.1263C10.935 18.2099 11.4704 18.25 12 18.25Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 12C9.5 12.2761 9.27614 12.5 9 12.5C8.72386 12.5 8.5 12.2761 8.5 12C8.5 11.7239 8.72386 11.5 9 11.5C9.27614 11.5 9.5 11.7239 9.5 12Z"
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5C15.2761 11.5 15.5 11.7239 15.5 12Z"
                stroke="#509EE3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          href: "/partners/",
          title: "متخصصان Metabase",
          description: "یک شریک متخصص پیدا کنید",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="7.25"
                stroke="#509EE3"
                strokeWidth="1.5"
              />
              <path
                d="M17 17C17 17 14.6667 14.2685 12 14.2685C9.33333 14.2685 7 17 7 17"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.25 11C15.25 12.7949 13.7949 14.25 12 14.25C10.2051 14.25 8.75 12.7949 8.75 11C8.75 9.20507 10.2051 7.75 12 7.75C13.7949 7.75 15.25 9.20507 15.25 11Z"
                stroke="#509EE3"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          href: "/community",
          title: "داستان‌های جامعه",
          description: "مشاوره عملی از جامعه ما",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.75 12.75C7.75 12.75 9 15.25 12 15.25C15 15.25 16.25 12.75 16.25 12.75"
                stroke="#509EE3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="10" r="0.75" fill="#509EE3" />
              <circle cx="10" cy="10" r="0.75" fill="#509EE3" />
            </svg>
          ),
        },
      ],
    ],
  };

  const chevronIcon = (
    <svg
      className="mr-2 transition-transform duration-200"
      fill="none"
      height="7"
      viewBox="0 0 11 7"
      width="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 1L5.5 5L9.5 1" strokeWidth="1.5" stroke="#509EE3" />
    </svg>
  );

  const handleDropdownToggle = (dropdownId: string): void => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleMobileMenuToggle = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    dropdownId: string
  ): void => {
    if (event.key === "Enter") {
      handleDropdownToggle(dropdownId);
    }
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const button = event.currentTarget;
    const container = submenuContainerRef.current;
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const left = buttonRect.left - containerRect.left;
      const width = buttonRect.width;

      setHoverHighlight({
        left,
        width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = (): void => {
    setHoverHighlight((prev) => ({ ...prev, opacity: 0 }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const DropdownMenu: React.FC<{ menu: DropdownMenu; isOpen: boolean }> = ({
    menu,
    isOpen,
  }) => {
    if (menu.id === "product") {
      // Special layout for product menu
      return (
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50
            ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-97 pointer-events-none"
            }
          `}
        >
          <div className="bg-white rounded-3xl shadow-[0_16px_28px_-6px_rgba(24,39,75,0.12),0_32px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden">
            {/* Main product items in special button-style layout */}
            <div className="bg-white flex gap-3 justify-between p-6">
              {menu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex-1 flex gap-3 min-w-[268px] p-3 border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <div className="flex-shrink-0">{link.icon}</div>
                  <div>
                    <h6 className="text-gray-700 text-sm font-bold mb-0 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h6>
                    <p className="text-gray-500 text-sm m-0">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer with platform links */}
            {menu.footer && (
              <div className="flex gap-6 p-8 bg-blue-50 hover:bg-blue-100 transition-colors">
                {menu.footer.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex-1 flex items-center justify-center gap-2 p-3 border border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all text-sm text-gray-600 hover:text-blue-600"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (menu.id === "docs") {
      // Special layout for docs menu
      return (
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50
            ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-97 pointer-events-none"
            }
          `}
        >
          <div className="bg-white rounded-3xl shadow-[0_16px_28px_-6px_rgba(24,39,75,0.12),0_32px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden w-[600px]">
            {/* Top section with button-style links */}
            <div className="bg-white flex gap-3 justify-between p-6 border-b border-gray-100">
              {menu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex-1 flex gap-3 min-w-[268px] p-3 border border-blue-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <div className="flex-shrink-0">{link.icon}</div>
                  <div>
                    <h6 className="text-gray-700 text-sm font-bold mb-0 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h6>
                    <p className="text-gray-500 text-sm m-0">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom section with featured items and guides */}
            <div className="flex">
              <div className="flex-1 p-6">
                <h6 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  شروع کار
                </h6>
                <div className="space-y-1">
                  {[
                    {
                      href: "/learn/metabase-basics/getting-started/index",
                      title: "پرسش و داشبوردها",
                      description:
                        "همه کسانی که داده‌ها را کاوش و تجزیه و تحلیل می‌کنند",
                      icon: (
                        <div className="w-12 h-12 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.25 20.75a2 2 0 0 1-2 2h-10.5a2 2 0 0 1-2-2v-10.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v10.5ZM7.75 18.25v-5.5M14.25 18.25v-5.5M11 18.25v-2.5"
                              stroke="#509EE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ),
                    },
                    {
                      href: "/learn/metabase-basics/embedding/overview",
                      title: "تعبیه کردن",
                      description:
                        "توسعه‌دهندگان ساخت تجزیه و تحلیل درون محصول",
                      icon: (
                        <div className="w-12 h-12 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.25 20.75a2 2 0 0 1-2 2h-10.5a2 2 0 0 1-2-2v-10.5a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2v10.5Z"
                              stroke="#509EE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="m7.75 13.75 2.5 2.25-2.5 2.25"
                              stroke="#509EE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ),
                    },
                    {
                      href: "/learn/metabase-basics/administration/administration-and-operation/guide",
                      title: "مدیریت",
                      description: "افرادی که نمونه شرکت خود را اجرا می‌کنند",
                      icon: (
                        <div className="w-12 h-12 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              stroke="#509EE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
                              stroke="#509EE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ),
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-shrink-0">{link.icon}</div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-1 group-hover:text-blue-500 transition-colors">
                          {link.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-6 border-l border-gray-100">
                <h6 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  راهنماها
                </h6>
                <div className="space-y-3">
                  {[
                    {
                      href: "/docs/latest/installation-and-operation/installing-metabase",
                      title: "نصب متابیس",
                    },
                    {
                      href: "/docs/latest/databases/connecting",
                      title: "اضافه کردن پایگاه داده",
                    },
                    {
                      href: "/docs/latest/questions/introduction",
                      title: "پرسیدن سوالات",
                    },
                    {
                      href: "/docs/latest/dashboards/introduction",
                      title: "ایجاد داشبورد",
                    },
                    {
                      href: "/docs/latest/troubleshooting-guide/",
                      title: "حل مشکلات رایج",
                    },
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block text-sm text-gray-700 hover:text-blue-500 transition-colors py-1"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (menu.id === "resources") {
      // Special two-column layout for resources menu
      return (
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50
            ${
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-97 pointer-events-none"
            }
          `}
        >
          <div className="bg-white rounded-3xl shadow-[0_16px_28px_-6px_rgba(24,39,75,0.12),0_32px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden w-[640px]">
            <div className="flex">
              {/* Left column - Menu items */}
              <div className="flex-1 p-6">
                {menu.sections[0].map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-start gap-4 group hover:bg-gray-50 p-4 rounded-lg transition-colors mb-2 last:mb-0"
                  >
                    <div className="flex-shrink-0 mt-1">{link.icon}</div>
                    <div>
                      <h6 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-500 transition-colors">
                        {link.title}
                      </h6>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right column - Recent Blog Posts */}
              <div className="flex-1 p-6 bg-gray-50 border-l border-gray-100">
                <h6 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                  آخرین پست‌های وبلاگ
                </h6>
                <div className="space-y-3">
                  {/* Featured blog post with image */}
                  <Link
                    href="/blog/story-behind-ai-dataset-generator"
                    className="block group"
                  >
                    <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                            stroke="#509EE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 12L11 14L15 10"
                            stroke="#509EE3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <h6 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                      داستان پشت تولیدکننده مجموعه داده هوش مصنوعی ما
                    </h6>
                  </Link>

                  {/* Other blog posts */}
                  {[
                    {
                      href: "/blog/how-to-build-sales-dashboards",
                      title:
                        "چگونه داشبوردهای فروش بسازیم که تیم‌های فروش واقعاً از آن استفاده کنند",
                    },
                    {
                      href: "/blog/what-is-embedded-analytics",
                      title: "تجزیه و تحلیل تعبیه شده چیست؟",
                    },
                    {
                      href: "/blog/metabase-community-data-stack-survey-2025",
                      title:
                        "نظرسنجی پشته داده جامعه متابیس: توسط تیم‌های داده، برای تیم‌های داده",
                    },
                    {
                      href: "/blog/top-5-dashboard-fails",
                      title: "۵ شکست بزرگ داشبورد (و نحوه رفع آن‌ها)",
                    },
                  ].map((post, index) => (
                    <Link key={index} href={post.href} className="block group">
                      <h6 className="text-sm font-medium text-gray-900 group-hover:text-blue-500 transition-colors">
                        {post.title}
                      </h6>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default layout for features menu
    return (
      <div
        className={`
          absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 z-50
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-97 pointer-events-none"
          }
        `}
      >
        <div className="bg-white rounded-3xl shadow-[0_16px_28px_-6px_rgba(24,39,75,0.12),0_32px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden">
          <div className="flex">
            {menu.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`${
                  menu.id === "features" && sectionIndex === 1
                    ? "border-l border-gray-200"
                    : ""
                } p-6 w-64`}
              >
                {section.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-start gap-3 group hover:bg-gray-50 p-2 mb-3 rounded-lg transition-colors w-full"
                  >
                    <div className="flex-shrink-0 mt-1">{link.icon}</div>
                    <div>
                      <h6 className="text-gray-700 text-sm font-bold mb-1 group-hover:text-blue-500 transition-colors">
                        {link.title}
                        {link.badge && (
                          <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </h6>
                      {link.description && (
                        <p className="text-gray-500 text-sm">
                          {link.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          {menu.footer && (
            <div className="flex gap-6 p-8 bg-gray-50 hover:bg-blue-50 transition-colors">
              {menu.footer.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm transition-all text-sm text-gray-600 hover:text-blue-600"
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[1001] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
    >
      <div className="container mx-auto px-5 py-4">
        <div className="flex items-center h-full">
          {/* Logo */}
          <div className="flex items-center lg:w-1/6">
            <Link href="/">
              <div className="block lg:hidden">
                <Image src="/logo.svg" alt="Metabase" width={50} height={50} />
              </div>
              <div className="hidden lg:block">
                <Image
                  src="/logo-with-wordmark.svg"
                  alt="Metabase"
                  width={148}
                  height={36}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            ref={submenuContainerRef}
            className="hidden lg:flex items-center justify-center flex-1 gap-3 relative"
            onMouseLeave={handleMouseLeave}
          >
            {/* Hover highlight background */}
            <div
              id="hover-highlight"
              className="absolute bg-blue-50 rounded-lg transition-all duration-300 pointer-events-none"
              style={{
                height: "40px",
                left: `${hoverHighlight.left}px`,
                width: `${hoverHighlight.width}px`,
                opacity: hoverHighlight.opacity,
              }}
            />

            {/* Product Dropdown */}
            <div className="relative">
              <button
                className={`
                  flex items-center gap-2 px-3 py-2 h-10 text-sm font-medium text-gray-700 
                  hover:text-blue-500 transition-colors z-10 relative
                  ${openDropdown === "product" ? "text-blue-500" : ""}
                `}
                onClick={() => handleDropdownToggle("product")}
                onKeyDown={(e) => handleKeyDown(e, "product")}
                onMouseEnter={handleMouseEnter}
                tabIndex={0}
              >
                {productMenu.title}
                <div
                  className={`transition-transform duration-200 ${
                    openDropdown === "product" ? "rotate-180" : ""
                  }`}
                >
                  {chevronIcon}
                </div>
              </button>
              <DropdownMenu
                menu={productMenu}
                isOpen={openDropdown === "product"}
              />
            </div>

            {/* Features Dropdown */}
            <div className="relative">
              <button
                className={`
                  flex items-center gap-2 px-3 py-2 h-10 text-sm font-medium text-gray-700 
                  hover:text-blue-500 transition-colors z-10 relative
                  ${openDropdown === "features" ? "text-blue-500" : ""}
                `}
                onClick={() => handleDropdownToggle("features")}
                onKeyDown={(e) => handleKeyDown(e, "features")}
                onMouseEnter={handleMouseEnter}
                tabIndex={0}
              >
                {featuresMenu.title}
                <div
                  className={`transition-transform duration-200 ${
                    openDropdown === "features" ? "rotate-180" : ""
                  }`}
                >
                  {chevronIcon}
                </div>
              </button>
              <DropdownMenu
                menu={featuresMenu}
                isOpen={openDropdown === "features"}
              />
            </div>

            {/* Docs Dropdown */}
            <div className="relative">
              <button
                className={`
                  flex items-center gap-2 px-3 py-2 h-10 text-sm font-medium text-gray-700 
                  hover:text-blue-500 transition-colors z-10 relative
                  ${openDropdown === "docs" ? "text-blue-500" : ""}
                `}
                onClick={() => handleDropdownToggle("docs")}
                onKeyDown={(e) => handleKeyDown(e, "docs")}
                onMouseEnter={handleMouseEnter}
                tabIndex={0}
              >
                {docsMenu.title}
                <div
                  className={`transition-transform duration-200 ${
                    openDropdown === "docs" ? "rotate-180" : ""
                  }`}
                >
                  {chevronIcon}
                </div>
              </button>
              <DropdownMenu menu={docsMenu} isOpen={openDropdown === "docs"} />
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className={`
                  flex items-center gap-2 px-3 py-2 h-10 text-sm font-medium text-gray-700 
                  hover:text-blue-500 transition-colors z-10 relative
                  ${openDropdown === "resources" ? "text-blue-500" : ""}
                `}
                onClick={() => handleDropdownToggle("resources")}
                onKeyDown={(e) => handleKeyDown(e, "resources")}
                onMouseEnter={handleMouseEnter}
                tabIndex={0}
              >
                {resourcesMenu.title}
                <div
                  className={`transition-transform duration-200 ${
                    openDropdown === "resources" ? "rotate-180" : ""
                  }`}
                >
                  {chevronIcon}
                </div>
              </button>
              <DropdownMenu
                menu={resourcesMenu}
                isOpen={openDropdown === "resources"}
              />
            </div>

            {/* Pricing Link */}
            <div className="flex flex-col">
              <button
                className="px-3 py-2 h-10 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors z-10 relative"
                onMouseEnter={handleMouseEnter}
                onClick={() => (window.location.href = "/pricing/")}
              >
                {navItems.pricing}
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center justify-end gap-2 lg:w-1/4">
            <Link
              href="/cloud/login"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
            >
              {navItems.login}
            </Link>
            <Link
              href="https://store.metabase.com/checkout"
              className="px-4 py-3 text-sm font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {navItems.getStarted}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center justify-end flex-1 gap-2">
            <Link
              href="https://store.metabase.com/checkout"
              className="px-4 py-3 text-sm font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {navItems.getStarted}
            </Link>
            <button
              onClick={handleMobileMenuToggle}
              className={`
                p-3 rounded-lg hover:bg-blue-50 transition-colors
                ${isMobileMenuOpen ? "bg-blue-50" : ""}
              `}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 22 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1001 1.5H20.9001"
                  stroke="#5A6072"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className={`transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <path
                  d="M1.1001 7H20.9001"
                  stroke="#5A6072"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <path
                  d="M1.1001 12.5H20.9001"
                  stroke="#5A6072"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className={`transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden
        ${
          isMobileMenuOpen
            ? "mobile-menu-height opacity-100"
            : "max-h-0 opacity-0"
        }
      `}
      >
        <div className="p-0">
          {/* Mobile Product Menu */}
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
              <span className="text-lg font-semibold text-gray-800">
                {productMenu.title}
              </span>
              <svg
                className="group-open:rotate-180 transition-transform duration-200"
                fill="none"
                height="7"
                viewBox="0 0 11 7"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L5.5 5L9.5 1"
                  strokeWidth="1.5"
                  stroke="#509EE3"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6">
              {productMenu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">{link.icon}</div>
                  <div>
                    <h6 className="font-semibold text-gray-800 mb-1">
                      {link.title}
                    </h6>
                    {link.description && (
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile Features Menu */}
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
              <span className="text-lg font-semibold text-gray-800">
                {featuresMenu.title}
              </span>
              <svg
                className="group-open:rotate-180 transition-transform duration-200"
                fill="none"
                height="7"
                viewBox="0 0 11 7"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L5.5 5L9.5 1"
                  strokeWidth="1.5"
                  stroke="#509EE3"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6">
              {featuresMenu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">{link.icon}</div>
                  <div>
                    <h6 className="font-semibold text-gray-800 mb-1">
                      {link.title}
                      {link.badge && (
                        <span className="mr-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                          {link.badge}
                        </span>
                      )}
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile Docs Menu */}
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
              <span className="text-lg font-semibold text-gray-800">
                {docsMenu.title}
              </span>
              <svg
                className="group-open:rotate-180 transition-transform duration-200"
                fill="none"
                height="7"
                viewBox="0 0 11 7"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L5.5 5L9.5 1"
                  strokeWidth="1.5"
                  stroke="#509EE3"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6">
              {docsMenu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">{link.icon}</div>
                  <div>
                    <h6 className="font-semibold text-gray-800 mb-1">
                      {link.title}
                    </h6>
                    {link.description && (
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile Resources Menu */}
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 border-b border-gray-100">
              <span className="text-lg font-semibold text-gray-800">
                {resourcesMenu.title}
              </span>
              <svg
                className="group-open:rotate-180 transition-transform duration-200"
                fill="none"
                height="7"
                viewBox="0 0 11 7"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1L5.5 5L9.5 1"
                  strokeWidth="1.5"
                  stroke="#509EE3"
                />
              </svg>
            </summary>
            <div className="px-6 pb-6">
              {resourcesMenu.sections[0].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0 mt-1">{link.icon}</div>
                  <div>
                    <h6 className="font-semibold text-gray-800 mb-1">
                      {link.title}
                    </h6>
                    {link.description && (
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </details>

          {/* Mobile Pricing */}
          <Link
            href="/pricing/"
            className="block p-6 text-lg font-semibold text-gray-800 hover:bg-gray-50 border-b border-gray-100"
          >
            {navItems.pricing}
          </Link>

          {/* Mobile Login */}
          <Link
            href="/cloud/login"
            className="block p-6 text-center bg-gray-50 text-lg font-semibold text-gray-800 hover:bg-gray-100"
          >
            {navItems.login}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
