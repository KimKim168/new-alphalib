import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const { hero } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <div className="my-12 flex items-center justify-start lg:my-20">
            <div className="section-container mx-auto grid w-full lg:grid-cols-2 lg:gap-12">
                <div>
                    <h1 className="max-w-[17ch] text-xl leading-[1.2]! font-semibold tracking-[-0.035em] lg:text-3xl">
                        {currentLocale === 'kh' ? hero?.name_kh || hero?.name : hero?.name}
                    </h1>
                    <p className="mt-6 line-clamp-4 max-w-[60ch] text-foreground/80 sm:text-lg">
                        {currentLocale === 'kh' ? hero?.short_description_kh || hero?.short_description : hero?.short_description}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        {/* <Button className="rounded-full text-base" size="lg">
                            <Link href={`/about_us`}>{t("See More")} </Link>
                            <ArrowUpRight className="h-5! w-5!" />
                        </Button> */}
                        <Link href={'/about_us'}>
                            <Button size="lg" className="group mb-4 rounded-none bg-zinc-900 px-8 text-white hover:bg-primary lg:h-14">
                                {t('Read Details')}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
                <img src={`/assets/images/pages/${hero?.images?.[0]?.image}`} className="aspect-video w-full rounded-xl object-cover" />
            </div>
        </div>
    );
}
