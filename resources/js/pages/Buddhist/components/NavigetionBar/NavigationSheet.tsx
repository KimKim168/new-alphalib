import NavLanguage from '@/components/Navbar/NavLanguage';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { SheetLogo } from '../../Logo/SheetLogo';
import { NavMenu } from './NavMenu';

export const NavigationSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded border-primary text-primary">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="px-6 py-3">
                <SheetLogo />
                <div className="mt-4 flex w-full justify-center">
                    <NavLanguage />
                </div>
                <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
            </SheetContent>
        </Sheet>
    );
};
