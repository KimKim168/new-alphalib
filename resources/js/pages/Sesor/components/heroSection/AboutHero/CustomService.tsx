const CustomService = () => {
    return (
        <div>
            {/* <h2 className="mt-10 mb-5 text-center text-3xl font-semibold tracking-tight text-primary">Mission</h2> */}
            <div className="relative mx-auto mt-10 w-full max-w-[2000px] overflow-hidden">
                {/* Background */}
                <img src="/assets/sesor/about_us/3BgMission.png" alt="Background" className="absolute inset-0 h-full w-full object-cover" />

                {/* Content Grid */}
                <div className="relative flex flex-col items-center gap-4 lg:flex-row">
                    {/* Left Content */}
                    <div className="flex flex-1 items-center justify-center pt-[16px] md:pt-12 lg:pt-0">
                        <div className="max-w-2xl text-white px-4 lg:px-0">
                            <h2 className="text-[25px] text-center font-manrope-extra-bold text-primary-two md:text-[40px]">Our Customer Service</h2>
                            <p className="text-[18px] leading-relaxed md:text-[27px] font-manrope-regular">
                                Our professional customer care team is here to support you during delivery time and after delivery.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="aspect-square lg:w-[500px]">
                        <img src="/assets/sesor/about_us/About Us-04.png" alt="Vision" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomService;
