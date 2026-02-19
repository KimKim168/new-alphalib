import useTranslation from "@/hooks/use-translation";
import { HoverEffect } from "./ui/card-hover-effect";
import { usePage } from "@inertiajs/react";

export function Card() {
  const { t, currentLocale } = useTranslation();
 
  return (
    <div className="mt-10 section-container">
      <div>
            <h2 className="font-semibold text-2xl dark:text-[#ffff] text-black">{t("Interlibrary")}</h2>

            <p className="max-w-lg dark:text-gray-400 text-base mt-1 text-gray-700">
                {t("Over 1000 Libraries join and share their resources with thnal")}
            </p>

        </div>
      <HoverEffect />
    </div>
  );
}

