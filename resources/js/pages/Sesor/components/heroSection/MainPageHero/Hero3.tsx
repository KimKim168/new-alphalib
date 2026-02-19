import ButtonSimple from '../../Bottons/ButtonSimple';

const Hero03 = () => {
    return (
        <div className="relative mt-5 w-full bg-cover bg-center md:mt-10" style={{ backgroundImage: "url('/assets/sesor/main_page/Bghero3.png')" }}>
            <div className="section-container">
                <div className="grid min-h-[450px] grid-cols-1 items-center md:gap-10 md:grid-cols-3">
                    {/* Left Content */}
                    <div className="col-span-2">
                        <div className="flex flex-col py-[16px] md:py-12 text-start font-manrope-semi-bold text-white md:text-left">
                            {/* Logo + Title */}
                            <h2 className="text-[25px] font-manrope-semi-bold leading-snug md:text-[40px]">Deliver Smarter with Sesor Express —</h2>
                            <p className="text-[25px] font-manrope-semi-bold text-primary-two md:text-[40px]">Start Today</p>

                            {/* Button at the End */}
                            <div className="mt-6 md:mt-30">
                                <ButtonSimple title={'Sign Up / Register'} link='https://portal.sesorexpress.com/' targetBlank='_blank' />
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center self-end md:justify-end">
                        <img
                            src="/assets/sesor/main_page/box.png"
                            alt="Phone Mockup"
                            className="h-auto w-2/3 max-w-lg drop-shadow-2xl sm:w-1/2 md:w-2/2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero03;
