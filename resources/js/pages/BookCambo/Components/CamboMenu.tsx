import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { AlignLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

const CamboMenu = () => {
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const [activePath, setActivePath] = useState('/');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActivePath(window.location.pathname);
        }
    }, []);

    const menuItems = [
        { id: 1, name: t('Home'), link: '/' },
        { id: 3, name: t('Books'), link: '/books' },
        { id: 3, name: t('Publishers'), link: '/publishers' },
        { id: 3, name: t('Authors'), link: '/authors' },
        { id: 4, name: t('About'), link: '/about' },
        { id: 4, name: t('Support'), link: '/support' },
    ];

    const getLinkClass = (linkPath: string) =>
        linkPath === activePath
            ? 'text-primary dark:text-white font-semibold underline underline-offset-4'
            : 'md:text-black dark:text-white hover:text-primary hover:underline hover:underline-offset-4 transition';

    return (
        <>
            {/* Desktop Menu */}
            <nav className="hidden py-3 xl:block">
                <ul className="flex items-center justify-center space-x-4 text-base text-black">
                    {menuItems.map((item, index) => (
                        <li key={item.id} className={`${index !== menuItems.length - 1 ? 'border-r border-black pr-4 dark:border-white' : ''}`}>
                            <Link href={item.link} className={getLinkClass(item.link)} aria-current={item.link === activePath ? 'page' : undefined}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="p-0">
                            <AlignLeft className="text-primary dark:text-white" width={35} height={35} aria-label="Toggle menu" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-background/20 backdrop-blur-xl">
                        <SheetHeader className="text-start">
                            <SheetTitle className="text-center text-white">{t('Menu')}</SheetTitle>
                            <ul className={`mt-4 flex flex-col justify-center space-y-4 text-white`}>
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.link}
                                            className={getLinkClass(item.link)}
                                            aria-current={item.link === activePath ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default CamboMenu;
