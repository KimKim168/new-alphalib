import ButtonSimple from "../../Bottons/ButtonSimple";

const Hero02 = () => {
  return (
      <div id="track-trace" className="section-container items-center grid lg:grid-cols-2 gap-5 md:gap-10 justify-between mt-[16px] md:mt-10">
        <div>
          <h1 className="max-w-[17ch] text-4xl md:text-[85px] font-manrope-extra-bold text-primary leading-[1.2]! tracking-tighter">
            Track & Trace
          </h1>
          <p className="font-manrope-regular max-w-[60ch] text-[13px] sm:text-[15px]">
            Follow your parcel every step of the way, from pickup to doorstep.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <ButtonSimple title={'Log in Now'} link={'https://portal.sesorexpress.com/'} targetBlank={true}/>
          </div>
        </div>
        <img src="/assets/sesor/links/Delivery1.png" className="w-full rounded-xl" />
      </div>
  );
};

export default Hero02;
