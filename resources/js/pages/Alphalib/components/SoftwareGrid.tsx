import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const SoftwareGrid = () => {
    const { ourSoftwares } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <div className="py-10 transition-colors duration-300 dark:bg-transparent">
            <div className="section-container mx-auto">
                <div className="mb-10">
                    <h2 className="text-3xl font-black tracking-tighter text-primary sm:text-4xl dark:text-white">
                        {currentLocale === 'kh' ? ourSoftwares?.name_kh || ourSoftwares?.name : ourSoftwares?.name}
                    </h2>
                    <div className="mt-2 h-0.5 w-20 rounded-full bg-[#081F62] dark:bg-white" />
                    <p className="mt-3 max-w-2xl text-base" style={{ color: '#535F80' }}>
                        {currentLocale === 'kh'
                            ? ourSoftwares?.short_description_kh || ourSoftwares?.short_description
                            : ourSoftwares?.short_description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {ourSoftwares?.children?.map((item) => (
                        <div
                            key={item?.id}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white bg-white p-8 shadow-[0_10px_40px_-15px_rgba(5,23,71,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(5,23,71,0.2)]"
                        >
                            {/* Subtle background glow on hover */}
                            <div
                                className="absolute -top-4 -right-4 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                                style={{ backgroundColor: '#081F62' }}
                            />

                            {/* Icon container */}
                            <div
                                className="mb-8 w-fit rounded-xl object-cover p-2 shadow-sm transition-all duration-300 group-hover:scale-110"
                                style={{ backgroundColor: '#081F62', color: '#FEFEFE' }}
                            >
                                <img src={`assets/images/pages/thumb/${item?.icon}`} className="h-10 w-10 object-center" />
                            </div>

                            <h3 className="mb-4 text-lg leading-tight font-bold transition-colors duration-300" style={{ color: '#051747' }}>
                                {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                            </h3>

                            <p className="mb-8 line-clamp-3 text-sm leading-relaxed" style={{ color: '#535F80' }}>
                                {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                            </p>

                            <Link
                                href={`/our_software/${item?.id}`}
                                className="group/btn flex cursor-pointer items-center text-xs font-black tracking-widest uppercase transition-all"
                                style={{ color: '#081F62' }}
                            >
                                {t('Read Details')}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareGrid;
