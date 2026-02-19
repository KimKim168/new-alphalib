import LogosCard from '../../Card/LogoCard';

const DeliverSection = () => (
    <div id="who-we-deliver-for" className="flex items-center justify-center">
        <div className="section-container">
            <h2 className="mt-10 md:mt-15 mb-5 md:mb-5 text-center tracking-tight text-primary text-3xl font-manrope-extra-bold">
                Who We Deliver For
            </h2>
            <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
                <div className="flex flex-col space-y-4 font-manrope-extra-bold text-[18px] lg:text-[25px]">
                    <div>
                        <h3 className="text-primary-two">E-commerce stores – </h3>
                        <p className="font-manrope-regular text-[#231F20]">Fast, reliable delivery for your online orders.</p>
                    </div>
                    <div>
                        <h3 className="text-primary-two">Retail shops –</h3>
                        <p className="font-manrope-regular text-[#231F20]">Flexible delivery schedule to keep your shelves stocked.</p>
                    </div>
                    <div>
                        <h3 className="text-primary-two">Corporate offices –</h3>
                        <p className="font-manrope-regular text-[#231F20]">Secure transport of documents, parcels, and essential items.</p>
                    </div>
                    <div>
                        <h3 className="text-primary-two">Individuals –</h3>
                        <p className="font-manrope-regular text-[#231F20]">Sending gifts, important documents, or personal items.</p>
                    </div>
                </div>
                {/* Form */}
                <LogosCard />
            </div>
        </div>
    </div>
);

export default DeliverSection;
