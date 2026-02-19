import ButtonSimple from '../../Bottons/ButtonSimple';
import ButtonSimpleLink from '../../Bottons/ButtonSimpleLink';

const Hero04 = () => {
    return (
        <div className="relative mt-5 md:mt-10 w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/sesor/main_page/BgHero4.png')" }}>
            <div className="section-container">
                <div className="grid min-h-[450px] grid-cols-1 items-center md:gap-10 md:grid-cols-3">
                    {/* Left Content */}
                    <div className='col-span-2'>
                        <div className="flex flex-col py-[16px] md:py-12 text-start text-white md:text-left font-manrope-semi-bold">
                        {/* Logo + Title */}
                        <h2 className="text-[25px] leading-snug md:text-[40px]">Set your delivery plan without any delay,</h2>
                        <p className="text-[25px] text-primary-two md:text-[40px]">simple and reliable.</p>

                        {/* Button at the End */}
                        <div className="mt-6 md:mt-30">
                            <ButtonSimple title={'Book Now'} link='/service#inquiry-lead-form' targetBlank={false} />
                        </div>
                    </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center self-end md:justify-end">
                        <img
                            src="/assets/sesor/main_page/women.png"
                            alt="Phone Mockup"
                            className="h-auto w-2/2 max-w-lg drop-shadow-2xl sm:w-2/2 md:w-2/1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero04;
