import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ComponentProps } from 'react';

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
    const { post_categories, active_category_code } = usePage<any>().props; // Inertia provides current path
    const { url } = usePage(); // Inertia provides current path
    const activePath = url;

    const menuItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 7, name: 'About', link: '/about' },
    ];

    const getLinkClass = (linkPath: string) =>
        linkPath === activePath
            ? ' text-primary bg-accent dark:text-white font-semibold underline underline-offset-4'
            : ' dark:text-white hover:underline hover:underline-offset-4 transition';
    const { t, currentLocale } = useTranslation();

    return (
        <NavigationMenu {...props}>
            <NavigationMenuList className="justify-end gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
                {menuItems.map((item) => (
                    <NavigationMenuItem key={item.id} className="text-primary max-lg:w-full max-lg:text-center">
                        <NavigationMenuLink asChild>
                            <Link prefetch href={item.link} className={getLinkClass(item.link)}>
                                {t(item.name)}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}

                <span className="h-[1px] w-full bg-primary/60 lg:h-5 lg:w-[1px]"></span>

                {post_categories?.map((item: any) => {
                    const link = `/posts?category_code=${item?.code}`;
                    const isActive = String(item.code) === String(active_category_code); // check current category
                    return (
                        <NavigationMenuItem key={item.code} className="max-lg:w-full max-lg:text-center">
                            <NavigationMenuLink asChild>
                                <Link
                                    prefetch
                                    href={link}
                                    className={
                                        isActive
                                            ? 'bg-accent font-semibold text-primary underline underline-offset-4 dark:text-white'
                                            : 'text-primary transition hover:underline hover:underline-offset-4 dark:text-white'
                                    }
                                >
                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
};
