"use client";

import React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocsMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const DocsMobileMenu: React.FC<DocsMobileMenuProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="بستن منو"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 h-screen w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          "right-0 rtl:left-0 rtl:right-auto",
          isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
          "shadow-2xl"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="منوی مستندات"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">مستندات</h2>
          <button
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClose();
              }
            }}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#509ee3]"
            aria-label="بستن منو"
            tabIndex={0}
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-64px)]">{children}</div>
      </div>
    </>
  );
};
