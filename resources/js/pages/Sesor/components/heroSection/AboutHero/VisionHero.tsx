const VisionHero = () => {
  return (
    <div id="vision-mission-core-values">
     <h2 className="mt-10 md:mt-15 mb-5 md:mb-5 text-center tracking-tight text-primary text-3xl font-manrope-extra-bold">Vision</h2>
    <div className="relative w-full max-w-[2000px] mx-auto overflow-hidden">
      {/* Background */}
      <img
        src="/assets/sesor/about_us/2BgVision.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content Grid */}
      <div className="flex flex-col gap-4 lg:flex-row items-center relative">
        {/* Left Image */}
        <div className="lg:w-[500px] aspect-square ">
          <img
            src="/assets/sesor/about_us/vision.jpg"
            alt="Vision"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 pb-4 md:pb-8 lg:pb-0 justify-center items-center section-container">
          <div className="max-w-2xl text-white">   
            <h2 className="text-[25px] font-manrope-extra-bold text-primary-two md:text-[40px]">
              Leading the future of delivery
            </h2>
            <p className="mt-2 text-[18px] leading-relaxed md:text-[27px] font-manrope-regular">
              — redefining technology, convenience, speed, and sustainability for people,
              businesses, and communities by providing trusted services.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisionHero;
