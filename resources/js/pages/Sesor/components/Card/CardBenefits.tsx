const CardBenefits = () => (
    <div id="benefits" className="section-container mt-5 md:mt-10">
        <div className="text-center">
            <h2 className="font-manrope-extra-bold text-3xl tracking-tight text-primary">Benefits</h2>
            <div className="mt-2.5 grid gap-2 md:mt-5 md:grid-cols-2 md:gap-2 md:px-0 lg:grid-cols-5">
                <div className="flex flex-col items-center rounded-[8px] bg-primary px-8 py-4 text-center">
                    <div className="flex aspect-square w-16 items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Specifics.png" />
                    </div>
                    <h3 className="mt-1 font-manrope-extra-bold text-[15px] text-white">Specifics</h3>
                    <p className="mt-1 font-manrope-regular text-[9px] text-white">
                        Order our door-to-door delivery anytime via our mobile app or website — just download, schedule, and we’ll handle the rest.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[8px] bg-primary px-8 py-4 text-center">
                    <div className="flex aspect-square w-16 items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Package Tracking.png" />
                    </div>
                    <h3 className="mt-1 font-manrope-extra-bold text-[15px] text-white">Package Tracking</h3>
                    <p className="mt-1 font-manrope-regular text-[9px] text-white">
                        Customer can track their packages in real time throughout the entire delivery process.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[8px] bg-primary px-8 py-4 text-center">
                    <div className="flex aspect-square w-16 items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Free Pickup.png" />
                    </div>
                    <h3 className="mt-1 font-manrope-extra-bold text-[15px] text-white">Free Pickup</h3>
                    <p className="mt-1 font-manrope-regular text-[9px] text-white">
                        Our drivers are dispatched immediately after an order is placed, with average pickup time of 20 minutes.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[8px] bg-primary px-8 py-4 text-center">
                    <div className="flex aspect-square w-16 items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Convenience.png" />
                    </div>
                    <h3 className="mt-1 font-manrope-extra-bold text-[15px] text-white">Convenience</h3>
                    <p className="mt-1 font-manrope-regular text-[9px] text-white">
                        We operate from 7AM - 7PM to cater to your needs in a longer hour of the day.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[8px] bg-primary px-8 py-4 text-center">
                    <div className="flex aspect-square w-16 items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Payment.png" />
                    </div>
                    <h3 className="mt-1 font-manrope-extra-bold text-[15px] text-white">Payment</h3>
                    <p className="mt-1 font-manrope-regular text-[9px] text-white">
                        We offer credit with monthly cumulative billing for corporate/business sectors.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default CardBenefits;
