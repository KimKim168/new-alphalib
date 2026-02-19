const MissionHero = () => {
    return (
        <div id="vision-mission-core-values">
            <h2 className="mt-10 md:mt-15 mb-5 md:mb-5 text-center tracking-tight text-primary text-3xl font-manrope-extra-bold">Mission</h2>
            <div className="relative mx-auto w-full max-w-[2000px] overflow-hidden">
                {/* Background */}
                <img src="/assets/sesor/about_us/3BgMission.png" alt="Background" className="absolute inset-0 h-full w-full object-cover" />

                {/* Content Grid */}
                <div className="relative flex flex-col lg:items-center gap-4 lg:flex-row">
                    {/* Left Content */}
                    <div className="flex flex-1 items-center justify-start lg:justify-center px-4 pt-[16px] md:pt-8 lg:pb-0">
                        <div className="max-w-2xl text-white">
                            <h2 className="text-[25px] font-manrope-extra-bold text-primary-two md:text-[40px]">Driving innovation in logistics</h2>
                            <p className="mt-2 text-[18px] leading-relaxed md:text-[27px] font-manrope-regular">—always moving you forward.</p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="aspect-square lg:w-[500px]">
                        <img src="/assets/sesor/about_us/mission.jpg" alt="Vision" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionHero;
