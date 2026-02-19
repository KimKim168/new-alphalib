import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/hooks/use-initials';
import { Link, usePage } from '@inertiajs/react';
import { LogIn, UserPlus } from 'lucide-react';
import { CamboLanguage } from './CamboLanguage';
import NavLanguage from '@/components/Navbar/NavLanguage';

const CamboTopHeader = () => {
    const getInitials = useInitials();
    const { auth } = usePage().props;

    return (
        <div className="mt-1 bg-true-primary py-2">
            <div className="section-container flex flex-wrap items-center justify-between gap-4 text-sm text-foreground lg:justify-end">
                {/* Left Section (Language Switcher) */}
                <div className="flex items-center gap-3">
                    <div>
                        <SwitchDarkMode3D />
                    </div>
                    <div className="flex-shrink-0">
                        <NavLanguage buttonClassName='ring-white/30' />
                    </div>
                </div>

                {/* Right Section (Login + Register / Profile) */}
                <div className="flex min-w-0 flex-wrap items-center justify-end gap-3">
                    {auth?.user ? (
                        <Link prefetch href="/dashboard">
                            <Avatar className="bg-true-primary-six size-10 border p-[1px] border-white overflow-hidden rounded-full">
                                <AvatarImage src={`/assets/images/users/thumb/${auth?.user?.image}`} alt={auth?.user?.name} />
                                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                    {getInitials(auth?.user?.name)}
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    ) : (
                        <div className="flex items-center gap-2">
                            {/* Register */}
                            <Link prefetch href="/register2" className="hidden sm:block">
                                <Button variant="outline" className="flex items-center gap-2 text-primary">
                                    <UserPlus className="h-4 w-4" stroke="#0471c1" />
                                    Register
                                </Button>
                            </Link>
                            {/* Login */}
                            <Link prefetch href="/login">
                                <Button variant="outline" className="flex items-center gap-2 text-primary">
                                    <LogIn className="h-4 w-4" stroke="#0471c1" />
                                    Login
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CamboTopHeader;
