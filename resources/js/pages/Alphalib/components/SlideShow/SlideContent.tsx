import { Button } from '@/components/ui/button';

const SlideContent = () => {
    return (
        <div className="grid w-full gap-4 lg:grid-cols-2">
            <img src="/assets/sesor/main_page/promotion.png" className=" aspect-video w-full object-cover" />
            <div className="text-primary">
                <h1 className="font-manrope-extra-bold text-[15px] leading-[1.2]! tracking-tighter">
                    SESOR Express — Fast, Reliable $1 Delivery in Phnom Penh
                </h1>
                <p className='text-[15px]'>Send parcels up to <strong> 5 kg</strong> for just <strong>$1 each </strong> within Phnom Penh. Perfect for online sellers and businesses with regular shipments.</p>
                <p className='font-manrope-extra-bold mt-6 text-[15px]'>Key Conditions:</p>
                <ul className="mt-4 ml-6 list-inside font-manrope-regular list-disc text-[15px]">
                    <li>Minimum of <strong>10 orders </strong> at once or per pick-up </li>
                    <li>Maximum <strong>5 kg per parcel</strong></li>
                    <li>Delivery within <strong>1–2 days</strong></li>
                </ul>
                <div className='flex mt-6 gap-2 items-center text-[15px]'>
                    <p className='font-manrope-extra-bold'>Note:</p><p>This is a limited-time offer — get in now while it lasts!</p>
                </div>
                <p className='font-manrope-extra-bold text-[15px]'>You Sell! We Deliver! Just $1 each! Contact us now!</p>
                <div className="mt-5 flex items-center gap-4">
                    <Button size="lg" className="rounded-full font-manrope-bold text-[15px] bg-[#93288D]">
                        <a href='https://www.facebook.com/SESORexpress/' target='_blank'>Visit Facebook Page</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SlideContent;
