import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

interface SlideProps {
    path?: string;
}

const Slide: React.FC<SlideProps> = ({ path = '/assets/images/banners/' }) => {
    const { slides } = usePage<any>().props;
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const updateCurrent = () => setCurrent(api.selectedScrollSnap());
        updateCurrent();
        setCount(api.scrollSnapList().length);

        api.on('select', updateCurrent);

        return () => {
            api.off('select', updateCurrent);
        };
    }, [api]);

    return (
        <Carousel plugins={[Autoplay({ delay: 4000 })]} opts={{ align: 'start', loop: true }} setApi={setApi} className="relative">
            <CarouselContent>
                {slides.map((slide) => (
                    <CarouselItem key={slide.id}>
                        <div>
                            {slide.link ? (
                                <a href={slide.link}>
                                    <img
                                        src={`${path}${slide.image}`}
                                        alt={slide.title}
                                        className="mx-auto aspect-video max-h-[600px] w-full max-w-[1920px] object-cover"
                                    />
                                </a>
                            ) : (
                                <img
                                    src={`${path}${slide.image}`}
                                    alt={slide.title}
                                    className="mx-auto aspect-video max-h-[600px] w-full max-w-[1920px] object-cover"
                                />
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Pagination Dots */}

            {/* Navigation Arrows */}
            <div className="right-0 bottom-0 left-0 flex items-center justify-between gap-2 p-2 lg:absolute">
                <div>
                    <div className="flex transform items-center gap-2 px-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`size-3 rounded-full transition-colors ${current === index ? 'bg-primary' : 'bg-primary/30'}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="space-x-2">
                    <CarouselPrevious className="static top-0 left-4 z-10 h-10 w-10 -translate-y-0 transform rounded-md bg-background/80 text-primary shadow-none backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-background hover:shadow-lg" />
                    <CarouselNext className="static top-0 right-4 z-10 h-10 w-10 -translate-y-0 transform rounded-md bg-background/80 text-primary shadow-none backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-background hover:shadow-lg" />
                </div>
            </div>
        </Carousel>
    );
};

export default Slide;
