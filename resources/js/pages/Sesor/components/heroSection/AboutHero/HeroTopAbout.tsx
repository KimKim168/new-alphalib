import { Button } from '@/components/ui/button';

const HeroTopAbout = () => {
  return (
    <div className="relative w-full max-w-[2000px] mx-auto" id='who-we-are'>
      {/* Background Image */}
      <img
        src="/assets/sesor/about_us/1BgAbout.png"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative w-full overflow-hidden ">
        {/* Right Positioned Image */}
        <img
          src="/assets/sesor/about_us/x.png"
          alt="SESOR Box"
          className="absolute right-0 md:-right-[250px] top-1/3 -translate-y-1/2 h-auto w-2/3 max-w-xl sm:w-1/2 md:w-[700px]"
        />

        {/* Content */}
        <div className="section-container relative grid min-h-[450px] grid-cols-1 items-center gap-10 md:grid-cols-1">
          {/* Left Content */}
          <div className="flex flex-col max-w-[1100px] py-6 md:py-12 text-white">
            <h2 className="text-[36px] text-primary-two md:text-[85px] font-manrope-extra-bold">
              Who We Are
            </h2>

            <div className="md:mt-4 space-y-5 text-base leading-relaxed md:text-2xl font-manrope-regular">
              <p>
                Inspired by the spirit of the white horse — swift, reliable, and noble —
                SESOR Express delivers more than just packages; we deliver trust,
                efficiency, and purpose.
              </p>
              <p>
                We exist to support businesses and individuals alike, helping them move
                forward by providing logistics solutions that are precise, reliable, and
                dependable. Every delivery we handle reflects our commitment to breaking
                barriers and opening new paths in the delivery landscape.
              </p>
              <p>
                With SESOR Express, you gain a trusted partner, a team dedicated to
                innovation, excellence, and exceptional service. We continue to evolve,
                embracing new technologies and ideas to provide smarter, more efficient
                logistics solutions, because every delivery matters to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTopAbout;
