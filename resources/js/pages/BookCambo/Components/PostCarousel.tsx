import { Badge } from '@/components/ui/badge';
import { usePage } from '@inertiajs/react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function PostCarousel() {
    const { posts } = usePage<any>().props;
    const { locale } = usePage().props;
    return (
        <>
            <Carousel opts={{ align: 'start' }}>
                <CarouselContent>
                    {posts?.map((item: any) => {
                        return (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="overflow-hidden">
                                    <a href={`/posts/${item.id}`} className="p-0">
                                        <div
                                            className="relative flex h-64 w-full items-end justify-start bg-cover bg-center text-left"
                                            style={{ backgroundImage: `url(/assets/images/posts/thumb/${item.thumbnail})` }}
                                        >
                                            <div className="absolute top-0 right-0 bottom-0 left-0 mt-20 bg-gradient-to-b from-transparent to-gray-900"></div>

                                            <main className="z-10 p-5">
                                                <h3 className={`text-md font-regular leading-7 font-medium tracking-tight text-white hover:underline`}>
                                                    {locale === 'kh' ? (item.title_kh ?? item.title) : item.title}
                                                </h3>
                                                <Badge variant="secondary" className="rounded bg-muted/20 text-white">
                                                    {locale === 'kh' ? (item.category?.name_kh ?? item.category?.name) : item.category?.name}
                                                </Badge>
                                                {/* <p className="text-gray-400">{formatToKhmerDateTime(item.created_at, false)}</p> */}
                                            </main>
                                        </div>
                                    </a>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-none p-2 transition" />
                <CarouselNext className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-none p-2 transition" />
            </Carousel>
        </>
    );
}
