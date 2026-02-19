    import useTranslation from '@/hooks/use-translation';
    import { usePage } from '@inertiajs/react';
    import ViewMoreButton from './ViewMoreButton';

    const imgBgColors = ['bg-purple-500', 'bg-green-500', 'bg-yellow-400', 'bg-blue-500'];

    export default function FeaturesSection({ features }) {
        const { hasMore } = usePage<any>().props;
        const { t, currentLocale } = useTranslation();

        return (
            <section className="mt-4 bg-white px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 font-semibold text-gray-900">{t('One search. Unlimited knowledge.')}</p>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
                        {features?.map((item, index) => (
                            <a
                                key={index}
                                href={item?.link ? item?.link : item?.conrect}
                                className="flex flex-col items-center rounded-xl border border-gray-100 p-2 shadow-md transition-shadow hover:shadow-xl"
                            >
                                <div className={`mb-1 flex h-16 w-16 items-center justify-center rounded-lg`}>
                                    <img src={`/assets/images/banalai_library/${item?.icon}`} alt={item.title} className="h-full w-full object-contain" />
                                </div>

                                <h3 className="mb-2 line-clamp-3 text-center text-xs font-semibold text-gray-900">{currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}</h3>
                            </a>
                        ))}
                    </div>
                    <div className="mt-1 flex justify-end">{hasMore && <ViewMoreButton />}</div>
                </div>
            </section>
        );
    }
