import { StarsBackground } from '@/components/animate-ui/backgrounds/stars';
import { Separator } from '@/components/ui/separator';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { HouseIcon, InfoIcon, LibraryIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import SwitchDarkMode3D from '../Switch/SwitchDarkMode3D';
import { FooterLogo } from '../../Logo/FooterLogo';

export default function MyFooter() {
    const { website_info, post_categories, media_links } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <footer className="relative border-t bg-dark-primary to-transparent text-white dark:bg-gray-950">
            <StarsBackground className="absolute inset-0 hidden dark:block" />

            <div className="section-container mx-auto">
                <div className="relative z-10 mx-auto max-w-7xl pt-14 pb-20">
                    {/* Background Banner */}
                    <div className="absolute right-0 bottom-0 z-0 h-auto w-full max-w-[2000px]">
                        {/* <img
                            src="/assets/backgrounds/footer_banner_for_light.png"
                            alt=""
                            className="z-0 w-[100%] max-w-7xl object-contain opacity-[15%] dark:hidden"
                        /> */}
                        <img
                            src="/assets/backgrounds/footer_banner_for_dark.png"
                            alt=""
                            className="z-0 w-[100%] max-w-7xl object-contain opacity-[40%] lg:opacity-[15%] dark:block"
                        />
                    </div>
                    <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-4">
                        {/* Logo & App */}
                        <div className="justify-self-center">
                            <FooterLogo />
                        </div>

                        {/* Company Info */}
                        <div className="lg:justify-self-center">
                            <h3 className="mb-4 text-xl font-bold">
                                {t('Information')} <Separator className="w-auto bg-white" />
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {website_info?.address && (
                                    <li className="flex gap-2">
                                        <span className="mt-0.5">
                                            <MapPinIcon size={18} className="size-5" />
                                        </span>
                                        <span>
                                            {currentLocale === 'kh' ? website_info?.address_kh || website_info?.address : website_info?.address}
                                        </span>
                                    </li>
                                )}
                                {website_info?.phone && (
                                    <li className="flex gap-2">
                                        <span className="mt-0.5">
                                            <PhoneIcon size={18} className="size-5" />
                                        </span>
                                        <a className="hover:underline" href={`tel:${website_info.phone}`}>
                                            {website_info.phone}
                                        </a>
                                    </li>
                                )}
                                {website_info?.email && (
                                    <li className="flex gap-2">
                                        <span className="mt-0.5">
                                            <MailIcon size={18} className="size-5" />
                                        </span>
                                        <a className="hover:underline" href={`mailto:${website_info.email}`}>
                                            {website_info.email}
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:justify-self-center">
                            <h3 className="mb-4 text-xl font-bold">
                                {t('Quick Links')} <Separator className="w-auto bg-white" />
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link prefetch href="/" className="flex items-center gap-2 hover:underline">
                                        <HouseIcon size={18} /> {t('Home')}
                                    </Link>
                                </li>
                                <li>
                                    <Link prefetch href="/about" className="flex items-center gap-2 hover:underline">
                                        <InfoIcon size={18} /> {t('About')}
                                    </Link>
                                </li>

                                {/* Dynamic post categories */}
                                {post_categories?.map((item: any) => (
                                    <li key={item.code}>
                                        <Link prefetch href={`/posts?category_code=${item.code}`} className="flex items-center gap-2 hover:underline">
                                            <LibraryIcon size={18} />
                                            {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="lg:justify-self-center">
                            <h3 className="mb-4 text-xl font-bold">
                                {t('Social Media')} <Separator className="w-auto bg-white" />
                            </h3>
                            <ul className="space-y-3">
                                {media_links?.length > 0 &&
                                    media_links?.map((item: any) => (
                                        <li>
                                            <a href={item.link} className="flex items-center gap-2 hover:underline">
                                                <img className="size-8" src={`/assets/images/links/thumb/${item.image}`} alt="" />
                                                {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="relative z-10 mx-auto max-w-7xl sm:pb-0">
                    <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
                        <p
                            className="text-center text-sm"
                            dangerouslySetInnerHTML={{
                                __html: currentLocale === 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright,
                            }}
                        />
                        <p className="text-sm">
                            {t('Deverloped By')} : <b>Library Tech</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-4 right-4 z-10">
                <SwitchDarkMode3D />
            </div>
        </footer>
    );
}
