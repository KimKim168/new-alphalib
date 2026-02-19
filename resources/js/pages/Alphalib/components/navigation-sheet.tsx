"use client";

import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { Link, usePage } from "@inertiajs/react";
import useTranslation from "@/hooks/use-translation";

export const NavigationSheet = () => {
  const { url } = usePage();
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navigation items
  const menuItems = [
    { href: "/", label: t("Home") },
    { href: "/about_us", label: t("About Us") },
    { href: "/solutions", label: t("Solutions") },
    { href: "/our_software", label: t("Our Softwares") },
    { href: "/community", label: t("Community") },
    { href: "/blogs", label: t("Blogs") },
    { href: "/contact_us", label: t("Contact Us") },
  ];

  const isActive = (path: string) => {
    if (path === "/") return url === "/";
    return url.startsWith(path);
  };

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="md:hidden"
          aria-label="Open Navigation Menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 py-6 md:hidden">
        <div className="flex flex-col items-start gap-6">
          <Logo />

          <ul className="flex w-full flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  className={`block w-full rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:bg-gray-200 dark:hover:bg-slate-800 ${
                    isActive(item.href)
                      ? "bg-gray-200 text-black dark:bg-slate-700"
                      : ""
                  }`}
                  onClick={() => setMobileOpen(false)} // close sheet on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
