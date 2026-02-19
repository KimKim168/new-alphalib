import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { LogIn, UserPlus } from 'lucide-react';
import { AnimatedHero2 } from './AnimatedHeroProps2';
import { ThnalLanguage } from './ThnalLanguage';

export default function Hero2() {
    const { auth, banner, website_info } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    const getInitials = (name?: string) => {
        if (!name) return '';
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
    };

    const handleCtaClick = () => {
        alert('Primary CTA clicked!');
    };

    const handleSecondaryCtaClick = () => {
        alert('Secondary CTA clicked!');
    };

    return (
        <AnimatedHero2
            className="sticky top-0 z-50"
            backgroundImageUrl={banner?.image}
            logo={
                <a href="/" className="flex items-center">
                    <img src={`/assets/images/website_infos/${website_info?.logo}`} className="h-full w-20 object-contain" />
                    <span
                        className="bg-gradient-to-r from-[#ffd484] via-[#ffcf60] to-[#D4AF37] bg-clip-text stroke-amber-100 stroke-2 text-xl md:text-2xl font-semibold text-transparent"
                        style={{
                            WebkitTextStroke: '0.5px #FEF3C7', // amber-100
                        }}
                    >
                        {currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name}
                    </span>
                </a>
            }
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
                                <Link prefetch href="/register2">
                                    <Button variant="outline" size="icon" className="text-primary">
                                        <UserPlus className="h-4 w-4" stroke="#0471c1" />
                                    </Button>
                                </Link>
                                <Link prefetch href="/login">
                                    <Button variant="outline" size="icon" className="text-primary">
                                        <LogIn className="h-4 w-4" stroke="#0471c1" />
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        />
    );
}
