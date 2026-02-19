
import type { ComponentProps } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, usePage } from "@inertiajs/react";
import useTranslation from "@/hooks/use-translation";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const { url } = usePage();
  const { t } = useTranslation();
  
  const isActive = (path: string) => {
    if (path === "/") return url === "/";
    return url.startsWith(path);
  };

  const linkClass = (path: string) =>
    `${navigationMenuTriggerStyle()} transition-colors ${
      isActive(path) ? "bg-gray-200 text-black" : ""
    }`;

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/")}>
            <Link href="/">{t("Home")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/about_us")}>
            <Link href="/about_us">{t("About Us")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/solutions")}>
            <Link href="/solutions">{t("Solutions")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/our_software")}>
            <Link href="/our_software">{t("Our Softwares")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/community")}>
            <Link href="/community">{t("Community")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/blogs")}>
            <Link href="/blogs">{t("Blogs")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClass("/contact_us")}>
            <Link href="/contact_us">{t("Contact Us")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
