const DriverSection = () => {
  return (
    <>
     <h2 id="our-team" className="mt-10 md:mt-15 mb-5 md:mb-5 text-center tracking-tight text-primary text-3xl font-manrope-extra-bold">Our Team</h2>
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
            src="/assets/sesor/about_us/driver.jpg"
            alt="Vision"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-1 pb-[16px] md:pb-12 lg:pb-0 justify-center items-center section-container">
          <div className="max-w-2xl text-white">
            <h2 className="text-[25px] text-center font-manrope-extra-bold text-primary-two md:text-[40px]">
              Our Driver
            </h2>
            <p className="text-[18px] leading-relaxed md:text-[27px] font-manrope-regular">
              Our dedicated and well-trained drivers are ready to pick up your items any time of the day.
            </p>
            <p className="mt-4 text-[18px] leading-relaxed md:text-[27px] font-manrope-regular">
              You can even choose your favorite driver to handle your parcel for a more personal delivery experience.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DriverSection;
