import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';

import { TooltipButton } from '@/components/Button/TooltipButton';
import { Button } from '@/components/ui/button';
import { SlidersHorizontalIcon } from 'lucide-react';
import LeftCategorySidebar from './LeftCategorySidebar';
const LeftCategorySidebarSheet = ({ className }: { className?: string }) => {
    const { t, currentLocale } = useTranslation();
    return (
        <>
            <Sheet>
                <TooltipButton tooltip={'Show Filter'}>
                    <SheetTrigger>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn('size-14 rounded-full bg-muted text-primary hover:bg-primary hover:text-white', className)}
                        >
                            <SlidersHorizontalIcon className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                </TooltipButton>

                <SheetContent side="left" className="gap-0">
                    <SheetHeader>
                        <SheetTitle>{t('Filter')}</SheetTitle>
                    </SheetHeader>
                    <div className="overflow-y-scroll p-2">
                        <LeftCategorySidebar />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default LeftCategorySidebarSheet;
