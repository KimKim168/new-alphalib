'use client';

import { Link, usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MoveLeft, MoveRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';

export function SlideWithAlertDialog() {
    const { slides = [] } = usePage().props;
    const { t, currentLocale } = useTranslation();

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', duration: 45 }, [
        Autoplay({ delay: 6000, stopOnInteraction: false }),
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect); // Cleanup
    }, [emblaApi, onSelect]);

    // Helper to handle localized content
    const getLocaleText = (item, field) => {
        if (currentLocale === 'kh') return item?.[`${field}_kh`] || item?.[field];
        return item?.[field];
    };

    return (
        <section className="relative overflow-hidden bg-zinc-50 py-8 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-0 flex-[0_0_100%] px-6">
                            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
                                {/* Image Side */}
                                <div className="w-full lg:w-7/12">
                                    <div className="group relative overflow-hidden shadow-2xl">
                                        <AnimatePresence mode="wait">
                                            {selectedIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 1.05 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.8 }}
                                                    className="relative aspect-[16/10]"
                                                >
                                                    <img
                                                        src={`/assets/images/banners/${slide?.image}`}
                                                        alt={slide?.name}
                                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/5" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-5/12">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={selectedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <h2 className="mb-4 text-2xl font-black tracking-tighter text-zinc-900 lg:mb-6 lg:text-4xl dark:text-white">
                                            {getLocaleText(slide, 'name')}
                                        </h2>

                                        <p className="mb-6 line-clamp-3 text-zinc-500 lg:mb-8 lg:text-lg dark:text-zinc-400">
                                            {getLocaleText(slide, 'short_description')}
                                        </p>

                                        <Link href={'/about_us'}>
                                            <Button size="lg" className="group lg:h-14 rounded-none bg-zinc-900 px-8 text-white hover:bg-primary">
                                                {t('Read Details')}
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation & Progress */}
            <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-6">
                {/* Progress Indicator */}
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold tabular-nums">0{selectedIndex + 1}</span>
                    <div className="h-[2px] w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                        <motion.div
                            key={selectedIndex} // Restart animation on index change
                            className="h-full bg-zinc-900 dark:bg-white"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 6, ease: 'linear' }}
                        />
                    </div>
                    <span className="text-xs font-bold text-zinc-400 tabular-nums">0{slides?.length}</span>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-[1px] bg-zinc-200 p-[1px] dark:bg-zinc-800">
                    <NavButton onClick={() => emblaApi?.scrollPrev()} icon={<MoveLeft />} />
                    <NavButton onClick={() => emblaApi?.scrollNext()} icon={<MoveRight />} />
                </div>
            </div>
        </section>
    );
}

// Sub-component for cleaner code
const NavButton = ({ onClick, icon }) => (
    <button
        onClick={onClick}
        className="group flex h-8 w-10 items-center justify-center bg-white transition-all hover:bg-zinc-900 hover:text-white dark:bg-zinc-950 dark:hover:bg-primary"
    >
        {icon}
    </button>
);
