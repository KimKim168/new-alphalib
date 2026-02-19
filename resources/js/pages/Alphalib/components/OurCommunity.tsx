import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const OurCommunity = () => {
    const { community } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    return (
        <div className="section-container mx-auto">
            {/* Header */}
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end dark:border-[#FEFEFE]/10">
                <div>
                    <h2 className="mb-2 text-xl font-bold text-[#051747] lg:text-3xl dark:text-white">
                        {currentLocale === 'kh'
                            ? community?.name_kh || community?.name
                            : community?.name}
                    </h2>

                    <p className="max-w-md text-[#535F80] italic dark:text-gray-300">
                        {currentLocale === 'kh'
                            ? community?.short_description_kh || community?.short_description
                            : community?.short_description}
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6">
                {community?.children?.map((item: any) => (
                    <a
                        href={item?.link}
                        key={item?.id}
                        className="group rounded-2xl border border-transparent bg-white p-8 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
                    >
                        {/* Logo */}
                        <div className="mb-6 flex justify-center">
                            <img
                                src={`/assets/images/pages/thumb/${item?.icon}`}
                                alt={item?.name}
                                className="h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-[14px] leading-snug text-gray-800 dark:text-white">
                            {currentLocale === 'kh'
                                ? item?.name_kh || item?.name
                                : item?.name}
                        </h3>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default OurCommunity;
