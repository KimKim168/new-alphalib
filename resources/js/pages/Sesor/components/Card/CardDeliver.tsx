const CardDeliver = () => (
    <div id="what-we-deliver" className="section-container mt-10">
        <div className="text-center">
            <h2 className="font-manrope-extra-bold tracking-tight text-primary text-3xl">What We Deliver</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center text-primary">
                    <div className="flex aspect-[16/6] w-full items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Service-04.png" className="h-full w-full" />
                    </div>
                    <h3 className="mt-1.5 text-[22px] font-manrope-semi-bold">Document</h3>
                    <p className="mt-1 text-[15px] font-manrope-regular max-w-[300px]">
                        At times, the secure and timely delivery of an important document can be more critical to a business.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center text-primary">
                    <div className="flex aspect-[16/6] w-full items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Service-05.png" className="h-full w-full" />
                    </div>
                    <h3 className="mt-1.5 text-[22px] font-manrope-semi-bold">Small to Medium Package</h3>
                    <p className="mt-1 text-[15px] font-manrope-regular max-w-[300px]">
                        Fast and convenient door-to-door delivery of groceries, household products, electronics, cosmetics, apparel, and other items.
                        resilience of a white horse.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center text-primary">
                    <div className="flex aspect-[16/6] w-full items-center justify-center text-primary">
                        <img src="/assets/sesor/service/Service-06.png" className="h-full w-full" />
                    </div>
                    <h3 className="mt-1.5 text-[22px] font-manrope-semi-bold"> Oversized Box</h3>
                    <p className="mt-1 text-[15px] font-manrope-regular max-w-[300px]">
                        Our Oversized Box Delivery service covers office equipment and bulk orders of any items or goods, ensuring they arrive
                        securely at your doorstep.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default CardDeliver;
