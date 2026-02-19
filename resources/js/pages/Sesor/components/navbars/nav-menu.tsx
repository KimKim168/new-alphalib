import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import React, { ComponentProps } from 'react';
import { about, contact, services } from './config';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
    <NavigationMenu {...props} viewport={false}>
        <NavigationMenuList className="gap-1 space-x-0 text-sm">
            {/* About */}
            <NavigationMenuItem>
                <NavigationMenuTrigger className="font-manrope-bold text-[15px] text-primary">
                    <a href="/about_us">About Us</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 group-data-[viewport=false]/navigation-menu:bg-true-primary">
                    <ul className="grid w-[200px] md:grid-cols-1">
                        {about.map((item) => (
                            <ListItem key={item.title} title={item.title} href={`${item.id}`} className="py-1">
                                {item.title}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
                <NavigationMenuTrigger className="font-manrope-bold text-[15px] text-primary">
                    <a href="/service">Services</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 group-data-[viewport=false]/navigation-menu:bg-true-primary">
                    <ul className="grid w-[200px] md:grid-cols-1">
                        {services.map((item) => (
                            <ListItem key={item.title} title={item.title} href={`${item.id}`} className="py-1">
                                {item.title}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
                <NavigationMenuTrigger className="font-manrope-bold text-[15px] text-primary">
                    {' '}
                    <Link href="/#contact-detail">Contact Us</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-10 group-data-[viewport=false]/navigation-menu:bg-true-primary">
                    <ul className="grid w-[200px] md:grid-cols-1">
                        {contact.map((item) => (
                            <ListItem key={item.title} title={item.title} href={`/${item.id}`} className="py-1">
                                {item.title}
                            </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);

const ListItem = React.forwardRef<React.ElementRef<typeof Link>, React.ComponentPropsWithoutRef<typeof Link> & { title: string }>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li className="relative">
                <NavigationMenuLink asChild>
                    <Link
                        ref={ref}
                        className={cn(
                            'block space-y-2 rounded-md p-2 leading-none no-underline outline-hidden transition-colors select-none hover:bg-white/10',
                            className,
                        )}
                        {...props}
                    >
                        <p className="line-clamp-2 font-manrope-light text-sm leading-snug text-white">{children}</p>
                    </Link>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = 'ListItem';
