import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";
import { Link } from "@inertiajs/react";
import { about, services, contact } from "./config";

export const NavMenuTwo = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 text-sm">
      {/* About */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-primary font-manrope-bold">
          <a href="/about_us">About Us</a>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-primary">
          <ul className="grid md:grid-cols-1 w-[200px]">
            {about.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.id} // ✅ use your id here
                className="py-1"
              >
                {item.title}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Services */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-primary font-manrope-bold">
          <a href="/service">Services</a>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-primary">
          <ul className="grid md:grid-cols-1 w-[200px]">
            {services.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.id} // ✅ use id from config
                className="py-1"
              >
                {item.title}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Contact */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-primary font-manrope-bold">
          Contact Us
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-primary">
          <ul className="grid md:grid-cols-1 w-[200px]">
            {contact.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                href={item.id} // ✅ use id
                className="py-1"
              >
                {item.title}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-2 leading-none no-underline outline-hidden transition-colors hover:bg-gray-500 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <p className="line-clamp-2 text-sm font-manrope-light leading-snug text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
