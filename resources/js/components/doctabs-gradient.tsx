"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  gradient: string;
}

interface GradientBreadcrumbProps {
  items: BreadcrumbItem[];
  activeId: string;
  onChange?: (id: string) => void;
}

export default function GradientBreadcrumb({
  items,
  activeId,
  onChange,
}: GradientBreadcrumbProps) {
  return (
    <nav className="w-full flex justify-start">
      <ol className="flex items-center gap-2 rounded-2xl bg-slate-100/60 p-1 backdrop-blur dark:bg-slate-800/60">
        {items.map((item, index) => {
          const isActive = item.id === activeId;

          const content = (
            <button
              onClick={() => onChange?.(item.id)}
              className={clsx(
                "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                isActive
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="breadcrumb-gradient"
                  className={clsx(
                    "absolute inset-0 rounded-xl",
                    item.gradient
                  )}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <span className="relative z-10">{item.label}</span>
            </button>
          );

          return (
            <React.Fragment key={item.id}>
              <li>
                {item.href && !isActive ? (
                  <Link href={item.href}>{content}</Link>
                ) : (
                  content
                )}
              </li>

              {index < items.length - 1 && (
                <li className="text-slate-400 select-none">
                    <ChevronRight className="w-6"/>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
