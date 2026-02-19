import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CareerPostDetail from '../Card/CareerPostDetail';

function PopupDialog({ titleButton }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="mt-20 rounded-full border-0 bg-primary-two dark:bg-primary-two font-manrope-bold text-[15px] text-primary hover:bg-primary-two hover:text-primary"
        >
          {titleButton}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
          section-container
          max-h-[90vh] overflow-y-auto
          p-4 md:p-6 
          bg-true-primary
          sm:max-w-lg md:max-w-2xl lg:max-w-[1790px]
          [&_svg]:text-white [&_svg]:opacity-100
          rounded-2xl
        "
      >
        <DialogHeader>
          <DialogTitle>
            <div className="text-[18px] md:text-[20px] font-manrope-semi-bold text-white">
              Position: <span className="text-primary-two">Freelance Driver</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Career Form */}
        <div className="w-full">
          <CareerPostDetail />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { PopupDialog };
