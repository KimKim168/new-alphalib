const CardService = () => (
    <div id="our-services" className="section-container mt-5 md:mt-10">
        <div className="text-center">
            <h2 className="font-manrope-extra-bold text-primary text-xl md:text-3xl">Our Services</h2>
            <div className="mt-2.5 md:mt-5 grid gap-5 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-3 font-manrope-semi-bold">
                <div className="flex flex-col items-center rounded-[15px] bg-true-primary p-8 text-center">
                    <div className="flex aspect-square w-20 md:w-28 items-center justify-center text-primary">
                        <img src="/assets/sesor/main_page/HoursDelivery.png" />
                    </div>
                    <h3 className="mt-1 text-[18px] md:text-[22px] text-white font-manrope-semi-bold">Express (1-2 Hours) Delivery</h3>
                    <p className="mt-2 text-[13px] md:text-[15px] text-white font-manrope-regular">
                        Urgent documents and parcels are delivered at the shortest time possible with our express delivery solution.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[15px] bg-true-primary p-8 text-center">
                    <div className="flex aspect-square w-20 md:w-28 items-center justify-center text-primary">
                        <img src="/assets/sesor/main_page/SameDayDelivery.png" />
                    </div>
                    <h3 className="mt-1 text-[18px] md:text-[22px] text-white font-manrope-semi-bold">Same Day Delivery</h3>
                    <p className="mt-2 text-[13px] md:text-[15px] text-white font-manrope-regular">
                        Optimizing your delivery costs and secure the best standard price with same day delivery service.
                    </p>
                </div>
                <div className="flex flex-col items-center rounded-[15px] bg-true-primary p-8 text-center">
                    <div className="flex aspect-square w-20 md:w-28 items-center justify-center text-primary">
                        <img src="/assets/sesor/main_page/NextDayDelivery.png" />
                    </div>
                    <h3 className="mt-1 text-[18px] md:text-[22px] text-white font-manrope-semi-bold"> Next Day Delivery</h3>
                    <p className="mt-2 text-[13px] md:text-[15px] text-white font-manrope-regular">Non-urgent parcels are delivered at another day with a lower cost.</p>
                </div>
            </div>
        </div>
    </div>
);

export default CardService;
