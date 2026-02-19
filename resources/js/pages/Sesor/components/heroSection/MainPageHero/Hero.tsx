import QRCard from "../QRCard";

const Hero = () => {
  return (
    <div
      id="download-apps"
      className="relative mt-5 md:mt-10 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/sesor/main_page/hero.png')" }}
    >
      <div className="section-container">
        <div className="grid min-h-[450px] grid-cols-1 md:gap-10 items-center md:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-[16px] md:py-12 text-white md:text-left">
            {/* Logo + Title */}
            <div className="mb-1.5 md:mb-3 flex items-center gap-3 justify-start">
              <img
                src="/assets/sesor/miniLogox.png"
                alt="SESOR Logo"
                className="aspect-square w-12 md:w-14 rounded-xl object-cover"
              />
              <h2 className="text-[18px] md:text-[20px] leading-snug font-manrope-extra-bold">
                Download the SESOR Express Apps
              </h2>
            </div>

            {/* Description */}
            <p className="text-[18px] md:text-[20px] font-manrope-medium">
              "Get the App — Start Smart Deliveries"
            </p>

            {/* QR + Store Buttons */}
            <div className="mt-4 md:mt-8 grid gap-4 grid-cols-1 xl:gap-14 lg:grid-cols-2">
              {/* Google Play */}
              <div className="flex justify-center gap-2 md:justify-start">
                <QRCard
                  title="Sesor Driver"
                  qr="/assets/sesor/links/Driver-Android.png"
                  store="/assets/sesor/links/googlePlay.png"
                  link="https://play.google.com/store/apps/details?id=com.sesorx.driver"
                />
                <QRCard
                  title="Sesor Express"
                  qr="/assets/sesor/links/Express-Android.png"
                  store="/assets/sesor/links/googlePlay.png"
                  link="https://play.google.com/store/apps/details?id=com.sesorx.customer"
                />
              </div>

              {/* App Store */}
              <div className="flex justify-center gap-2 md:justify-start">
                <QRCard
                  title="Sesor Driver"
                  qr="/assets/sesor/links/Driver-IOS.png"
                  store="/assets/sesor/links/appStore.png"
                  link="https://apps.apple.com/us/app/sesor-driver/id6746039967"
                />
                <QRCard
                  title="Sesor Express"
                  qr="/assets/sesor/links/Express-IOS.png"
                  store="/assets/sesor/links/appStore.png"
                  link="https://apps.apple.com/kh/app/sesor-express/id6746038311"
                />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center self-end md:justify-end">
            <img
              src="/assets/sesor/main_page/hero2.png"
              alt="Phone Mockup"
              className="h-auto w-2/3 max-w-lg sm:w-1/2 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
