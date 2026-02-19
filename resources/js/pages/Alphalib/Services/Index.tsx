import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import AlphalibLayout from '../AlphalibLayout';
import useTranslation from '@/hooks/use-translation';

const Index = () => {
    const { banner, ourSolutions } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <AlphalibLayout>
            {/* Banner */}
            <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden lg:h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('/assets/images/banners/thumb/${banner?.image}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/20" />
                </div>
            </div>

            {/* Our Solutions Section */}
            <div className="py-10 transition-colors duration-300 dark:bg-transparent">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black tracking-tighter text-primary sm:text-4xl dark:text-white">
                            {currentLocale === 'kh'
                                ? ourSolutions?.name_kh || ourSolutions?.name
                                : ourSolutions?.name}
                        </h2>
                        <div className="mt-2 h-0.5 w-20 rounded-full bg-[#081F62] dark:bg-white" />
                        <p className="mt-3 max-w-2xl text-base" style={{ color: '#535F80' }}>
                            {currentLocale === 'kh'
                                ? ourSolutions?.short_description_kh || ourSolutions?.short_description
                                : ourSolutions?.short_description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {ourSolutions?.children?.map((item) => (
                            <div
                                key={item?.id}
                                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white bg-white p-8 shadow-[0_10px_40px_-15px_rgba(5,23,71,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(5,23,71,0.2)]"
                            >
                                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#081F62] opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                                <img
                                    src={`/assets/images/pages/thumb/${item?.icon}`}
                                    alt={currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                    className="mb-4 h-14 w-14 object-contain transition-all duration-300 group-hover:scale-110 rounded-xl"
                                />

                                <h3 className="mb-4 text-lg line-clamp-2 leading-tight font-bold text-[#051747] transition-colors duration-300">
                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                </h3>

                                <p className="pb-4 line-clamp-2 text-sm leading-relaxed text-[#535F80]">
                                    {currentLocale === 'kh'
                                        ? item?.short_description_kh || item?.short_description
                                        : item?.short_description}
                                </p>

                                <Link
                                    href={`/solution/${item?.id}`}
                                    className="group/btn mt-8 flex cursor-pointer items-center text-xs font-black tracking-widest text-[#081F62] uppercase transition-all"
                                >
                                    {t('Read Details')}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AlphalibLayout>
    );
};

export default Index;
