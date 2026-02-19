import { Link, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

const Navbar02Page = () => {
    const { locale } = usePage().props;
    return (
        <div>
            <nav className="section-container h-20 border-b bg-background md:h-24">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Logo />
                        {/* Desktop Menu */}
                        <NavMenu className="hidden lg:block" />
                    </div>

                    <div className="flex items-center gap-1">
                        <a
                            href="https://portal.sesorexpress.com/"
                            target="_blank"
                            className="hidden items-center justify-center gap-1 px-4 py-2 font-manrope-bold text-[15px] text-primary sm:inline-flex"
                        >
                            <User /> <span>Log in / Register</span>
                        </a>
                        <Link
                            href="/service#inquiry-lead-form"
                            className="hidden px-4 py-2 font-manrope-bold text-[15px] text-primary hover:underline md:inline-block"
                        >
                            Book Your Delivery
                        </Link>

                        <LanguageSwitcher />
                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar02Page;
