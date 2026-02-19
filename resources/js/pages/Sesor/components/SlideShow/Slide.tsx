'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import SlideContent from './SlideContent';
import { Button } from '@/components/ui/button';

const images = [
  '/assets/sesor/main_page/slide1.png',
  // '/assets/sesor/main_page/slide2.png',
];

export function SlideWithAlertDialog() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative mx-auto">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 cursor-pointer">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full aspect-[16/5] object-cover transition cursor-pointer"
                  />
                </DialogTrigger>
                <DialogContent className="[&_svg]:invisible rounded-none gap-0 w-full sm:max-w-[1600px] h-auto overflow-y-auto">
                  {/*  */}
                  <SlideContent />
                  {/*  */}
                  <DialogFooter className="relative">
                    <DialogClose
                      asChild
                      className="absolute -top-4 -right-4  bg-[#5e2b97] hover:bg-[#5e2b97]/90 rounded-full border-0"
                    >
                      <Button size='icon' className='[&_svg]:visible'>
                        <span className="text-primary-two transition-transform hover:translate-x-[2px] hover:-translate-y-[2px]">
                        <svg
                          className="w-2 h-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 17L17 7M17 7V15M17 7H9"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Navigation Dots */}
      {/* <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${selectedIndex === index ? 'bg-[#922830]' : 'bg-gray-300'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div> */}
    </div>
  );
}
