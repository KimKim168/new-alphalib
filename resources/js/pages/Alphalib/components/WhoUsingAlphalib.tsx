import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const WhoUsingAlphalib = () => {
    const { usingAlphalib } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section className="py-16 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black tracking-tighter text-primary sm:text-4xl dark:text-white">
                        {currentLocale === 'kh' ? usingAlphalib?.name_kh || usingAlphalib?.name : usingAlphalib?.name}
                    </h2>

                    <div className="mt-2 h-0.5 w-20 rounded-full bg-[#081F62] dark:bg-white" />

                    <p className="mt-3 max-w-2xl text-base text-[#535F80] dark:text-gray-300">
                        {currentLocale === 'kh'
                            ? usingAlphalib?.short_description_kh || usingAlphalib?.short_description
                            : usingAlphalib?.short_description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                    {usingAlphalib?.children?.map((item: any) => (
                        <a
                            href={item?.link}
                            key={item?.id}
                            className="group rounded-2xl border border-transparent bg-white p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
                        >
                            {/* Logo */}
                            <div className="mb-6 flex justify-center">
                                <img
                                    src={`/assets/images/pages/thumb/${item?.icon}`}
                                    alt={item?.name}
                                    className="h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="line-clamp-2 text-[14px] leading-snug text-gray-800 dark:text-white">
                                {' '}
                                {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoUsingAlphalib;
