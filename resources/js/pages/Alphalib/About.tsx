'use client';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import AlphalibLayout from './AlphalibLayout';
import OurCommunity from './components/OurCommunity';

export default function About() {
    const { banner, hero } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <AlphalibLayout>
            <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden lg:h-[400px]">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('/assets/images/banners/thumb/${banner?.image}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/20" />
                </div>

                {/* Content Container */}
            </div>
            <div className="my-12 flex items-center justify-start lg:my-20">
                <div className="section-container mx-auto grid w-full lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h1 className="max-w-[17ch] text-xl leading-[1.2]! font-semibold tracking-[-0.035em] lg:text-3xl">
                            {currentLocale === 'kh' ? hero?.name_kh || hero?.name : hero?.name}
                        </h1>

                        <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
                            {currentLocale === 'kh' ? hero?.short_description_kh || hero?.short_description : hero?.short_description}
                        </p>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: currentLocale === 'kh' ? hero?.long_description_kh || hero?.long_description : hero?.long_description,
                            }}
                        ></div>
                    </div>
                    <img src={`/assets/images/pages/${hero?.images?.[0]?.image}`} className="aspect-video w-full rounded-xl object-cover" />
                </div>
            </div>
            <OurCommunity />
        </AlphalibLayout>
    );
}
