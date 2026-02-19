import ButtonSimple from '../../Bottons/ButtonSimple';

const HeroBottom = () => {
    return (
        <div
            id="charges-rates"
            className="relative mt-10 w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/sesor/main_page/BgFaq.png')" }}
        >
            <div className="section-container">
                <div className="grid min-h-[450px] grid-cols-1 items-center md:grid-cols-2 md:gap-10">
                    {/* Left Content */}
                    <div className="flex flex-col py-6 text-start text-white md:py-12 md:text-left">
                        {/* Logo + Title */}
                        <p className="font-manrope-semi-bold text-[40px] text-primary-two">Charges & Rates</p>

                        <h2 className="font-manrope-semi-bold text-[25px] leading-snug">Fast delivery, clear pricing — request your quote today.</h2>

                        {/* Button at the End */}
                        <div className="mt-6 md:mt-30">
                            <ButtonSimple title='Contact Us' link='https://t.me/sesorx' targetBlank={true}/>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="mb-6 flex items-center justify-center self-center md:mb-0 md:justify-end">
                        <img
                            src="/assets/sesor/service/HeroBottom.png"
                            alt="Phone Mockup"
                            className="h-auto w-full max-w-lg rounded-2xl drop-shadow-2xl sm:w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;
