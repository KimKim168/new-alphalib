import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { about, contact, services } from './config';

export const NavigationSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className='text-primary'/>
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3">
                <a href="/">
                    <img id="logo-7" className="h-16 w-full object-contain" src="/assets/sesor/SESORLogo1.png"></img>
                </a>
                <div className="space-y-4 text-base">
                    <div>
                        <div className="font-manrope-bold text-primary text-[15px]"><Link href='/about_us'>About Us</Link> </div>

                        <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
                            {about.map((item) => (
                                <li key={item.title}>
                                    <Link href={`${item.id}`} className="flex items-center gap-2">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="font-manrope-bold text-primary text-[15px]"><Link href='/service'>Services</Link> </div>
                        <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
                            {services.map((item) => (
                                <li key={item.title}>
                                    <Link href={`${item.id}`} className="flex items-center gap-2">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="font-manrope-bold text-primary text-[15px]"><Link href='/#contact-detail'>Contact Us</Link> </div>
                        <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
                            {contact.map((item) => (
                                <li key={item.title}>
                                    <Link href={`/#contact-detail`} className="flex items-center gap-2">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
