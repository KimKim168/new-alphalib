'use client';
import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BuddhistSlideProps {
  images: string[];
}

export function BuddhistSlide({ images }: BuddhistSlideProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
  
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full">
      {/* Carousel */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full aspect-[4/3] shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          <ChevronLeft className="w-5 h-5 text-[#922830] dark:text-[#fd1925]" />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          <ChevronRight className="w-5 h-5 text-[#922830] dark:text-[#fd1925]" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              selectedIndex === index ? 'border-white border' : 'bg-gray-300'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
