'use client';

import useTranslation from "@/hooks/use-translation";
import { usePage } from "@inertiajs/react";

const AlphalibFooter = () => {
  const { media_links, website_info } = usePage<any>().props;
  const { t, currentLocale } = useTranslation();
      
  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-[#051747] to-[#081F62] mt-20">

      {/* Decorative top border */}
      {/* <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7E9F0]/30 to-transparent" /> */}

      <div className="relative mx-auto section-container py-6">

        {/* item? Images */}
        <div className="flex justify-center gap-4">
          {media_links?.map((item) => (
            <a
              key={item?.id}
              href={item?.link}
              aria-label={item?.name}
              className="group flex items-center justify-center 
              w-10 h-10 rounded-xl 
              transition-all duration-300 
              hover:scale-110 hover:bg-white/10"
            >
              <img
                src={`/assets/images/links/thumb/${item?.image}`} 
                alt={item?.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-[#535F80]">
          {currentLocale === 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright}
        </div>

      </div>
    </footer>
  );
};

export default AlphalibFooter;
