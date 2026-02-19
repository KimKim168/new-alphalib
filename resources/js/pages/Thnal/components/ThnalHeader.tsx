const ThnalHeader = () => {
  return (
    <header>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-4 py-3 px-3 sm:px-10 xl:px-20">
        <a href="/" className="flex flex-col items-center">
          <img
            src="/assets/thnal/tnal.png"
            alt="Cambodia Centralize Resources Logo"
            className="w-28 md:w-40 object-contain"
          />
          
          <h1 className="text-[10px] md:text-[14px] dark:text-[#ffffff] mt-2 font-bold text-[#ffffff] leading-tight text-center ">
            Cambodia Centralize <br /> Resources
          </h1>
        </a>
      </div>
    </header>
  );
};

export default ThnalHeader;
