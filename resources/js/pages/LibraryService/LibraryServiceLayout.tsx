import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import { LanguageSwitcher } from '../Sesor/components/LanguageSwitcher';

interface LayoutProps {
    children: ReactNode;
}

const LibraryServiceLayout = ({ children }: LayoutProps) => {
    const { t, currentLocale } = useTranslation();
    const { website_info, name } = usePage<any>().props;

    const siteName =
        currentLocale === 'kh'
            ? website_info?.name_kh || name || website_info?.name
            : name || website_info?.name;

    const copyright =
        currentLocale === 'kh'
            ? website_info?.copyright_kh || website_info?.copyright
            : website_info?.copyright;

    return (
        <div className="bg-white ">
            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
                <div className="section-container flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src={`/assets/images/website_infos/${website_info?.logo}`}
                                alt={siteName}
                                className="h-14 w-auto"
                            />
                            <p className="hidden text-2xl font-bold text-indigo-600 transition-colors hover:text-indigo-700 md:block">
                                {siteName}
                            </p>
                        </Link>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/how_to"
                                className="flex text-black dark:text-black items-center justify-center border-r px-4 text-xs font-medium transition-colors md:w-28 md:text-base"
                            >
                                {t('How To')}
                            </Link>

                            <LanguageSwitcher />
                            {/* <SwitchDarkMode3D/> */}
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="mx-auto min-h-svh w-full flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-2 text-center text-gray-600">
                        <p className="text-sm sm:text-base">
                            {copyright}
                        </p>

                        <div className="flex items-center justify-center gap-2">
                            <img
                                src={`/assets/images/website_infos/${website_info?.logo}`}
                                className="w-8"
                            />
                            <p className="text-xs sm:text-sm">
                                {siteName}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LibraryServiceLayout;
