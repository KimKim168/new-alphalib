import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';
import { LogIn, UserPlus } from 'lucide-react';
import { AnimatedHero } from './AnimatedHeroProps';
import { ThnalLanguage } from './ThnalLanguage';
import useTranslation from '@/hooks/use-translation';

export default function Hero() {
    const { auth, banner, website_info } = usePage<any>().props;
    const {t, currentLocale} = useTranslation();
    const getInitials = (name?: string) => {
        if (!name) return '';
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
    };

    // const navLinks = [
    //   { label: "Solutions", href: "#" },
    //   { label: "Working", href: "#" },
    //   { label: "Discover", href: "#" },
    // ];

    const handleCtaClick = () => {
        alert('Primary CTA clicked!');
    };

    const handleSecondaryCtaClick = () => {
        alert('Secondary CTA clicked!');
    };

    return (
        <AnimatedHero
            backgroundImageUrl={banner?.image}
            logo={
                <a 
                href='/' className='flex items-center'>
                    <img src={`/assets/images/website_infos/${website_info?.logo}`} className="h-full w-20 object-contain" />
                   <span
                        className="bg-gradient-to-r from-[#ffd484] via-[#ffcf60] to-[#D4AF37] bg-clip-text stroke-amber-100 text-xl stroke-2 md:text-2xl font-semibold text-transparent"
                        style={{
                            WebkitTextStroke: '0.5px #FEF3C7', // amber-100
                        }}
                    >{currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name}</span>
                </a>
            }
            // navLinks={navLinks}

            // UPDATED: The top-right button now uses the same glass style for consistency
            topRightAction={
                <div className="flex gap-3">
                    <div className="flex items-center gap-3">
                        <div>
                            <SwitchDarkMode3D />
                        </div>
                        <div className="flex-shrink-0">
                            <ThnalLanguage />
                        </div>
                    </div>
                    <div className="flex min-w-0 flex-wrap items-center justify-end gap-3">
                        {auth?.user ? (
                            <Link prefetch href="/dashboard">
                                <Avatar className="bg-true-primary-six size-8 overflow-hidden rounded-full">
                                    <AvatarImage src={`/assets/images/users/thumb/${auth?.user?.image}`} alt={auth?.user?.name} />
                                    <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                        {getInitials(auth?.user?.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link prefetch href="/register">
                                    <Button variant="outline" size="icon" className="text-primary bg-white/10 backdrop-blur-sm">
                                        <UserPlus className="h-4 w-4" stroke="#0471c1" />
                                    </Button>
                                </Link>
                                <Link prefetch href="/login">
                                    <Button variant="outline" size="icon" className="text-primary bg-white/10 backdrop-blur-sm">
                                        <LogIn className="h-4 w-4" stroke="#0471c1" />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
            title={currentLocale === 'kh' ? banner?.name_kh || banner?.name : banner?.name}
            description={currentLocale === 'kh' ? banner?.short_description_kh || banner?.short_description : banner?.short_description}
            longDescription={currentLocale === 'kh' ? banner?.long_description_kh || banner?.long_description : banner?.long_description}
        />
    );
}
