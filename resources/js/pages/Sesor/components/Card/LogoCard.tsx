import React from "react";

const LogosCard = () => {
  const logos = [
    "/assets/sesor/about_us/logo1.png",
    "/assets/sesor/about_us/logo2.png",
    "/assets/sesor/about_us/logo3.png",
    "/assets/sesor/about_us/logo4.png",
    "/assets/sesor/about_us/logo5.png",
    "/assets/sesor/about_us/logo6.png",
    "/assets/sesor/about_us/logo7.png",
    "/assets/sesor/about_us/logo8.png",
    "/assets/sesor/about_us/logo9.png",
    "/assets/sesor/about_us/logo10.png",
    "/assets/sesor/about_us/logo11.png",
    "/assets/sesor/about_us/logo12.png",
    "/assets/sesor/about_us/logo13.png",
    "/assets/sesor/about_us/logo14.png",
    "/assets/sesor/about_us/logo15.png",
    "/assets/sesor/about_us/logo16.png",
    "/assets/sesor/about_us/logo17.png",
    "/assets/sesor/about_us/logo18.png",
    "/assets/sesor/about_us/logo19.png",
    "/assets/sesor/about_us/logo20.png",
    "/assets/sesor/about_us/logo21.png",
  ];

  const totalLogos = logos.length;
  const fullRows = Math.floor((totalLogos - 5) / 4); // Number of full 4-col rows
  const lastRowStart = fullRows * 4; // index where last row begins
  const lastRowLogos = logos.slice(lastRowStart); // last 5 logos

  return (
    <div className="w-full bg-white py-10">
      <div className="space-y-6 md:space-y-10 px-4">
        {/* Render full 4-col rows */}
        {Array.from({ length: fullRows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-4 gap-6 md:gap-8 items-center justify-items-center"
          >
            {logos.slice(rowIndex * 4, rowIndex * 4 + 4).map((logo, idx) => (
              <div key={idx} className="grid place-items-center w-full">
                <img
                  src={logo}
                  alt={`Logo ${rowIndex * 4 + idx + 1}`}
                  className="max-h-24 sm:max-h-28 md:max-h-12 max-w-[80%] object-contain"
                />
              </div>
            ))}
          </div>
        ))}

        {/* Render last 5-logo row */}
        <div className="grid grid-cols-5 gap-6 md:gap-8 items-center justify-items-center">
          {lastRowLogos.map((logo, idx) => (
            <div key={idx} className="grid place-items-center w-full">
              <img
                src={logo}
                alt={`Logo ${lastRowStart + idx + 1}`}
                className="max-h-24 sm:max-h-28 md:max-h-24 max-w-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogosCard;
