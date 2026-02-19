import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

export const NavMenu = ({ orientation = 'horizontal' }: { orientation?: 'horizontal' | 'vertical' }) => {
    const { t } = useTranslation();
    const { url } = usePage();

    const links = [
        { label: t('Home'), href: '/' },
        { label: t('Libraries'), href: '/libraries' },
        { label: t('Register Library'), href: '/register-library' },
        { label: t('About'), href: '/about' },
        { label: t('Contact Us'), href: '/contact' },
    ];

    return (
        <ul className={cn('flex flex-1 justify-start gap-1', orientation === 'vertical' && 'w-full flex-col items-start gap-3')}>
            {links.map((item) => {
                const isActive = url === item.href || url.startsWith(item.href + '/');

                return (
                    <li key={item.label} className={orientation === 'vertical' ? 'w-full' : 'w-auto'}>
                        <Link
                            href={item.href}
                            className={cn(
                                'block w-full rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-gray-900',
                                isActive ? 'font-bold text-primary underline underline-offset-4' : 'font-medium text-foreground',
                            )}
                        >
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
