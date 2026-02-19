import useTranslation from '@/hooks/use-translation';

const imgBgColors = ['bg-purple-500', 'bg-green-500', 'bg-yellow-400', 'bg-blue-500'];

export default function OurCoreValueData({ features }) {
    const { currentLocale } = useTranslation();
    return (
        <div>
            <section className="bg-white px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                        {currentLocale === 'kh' ? features?.title_kh || features?.title : features?.title}
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.children.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-xl border border-gray-100 p-8 shadow-md transition-shadow hover:shadow-xl"
                            >
                                <div
                                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
                                        imgBgColors[index % imgBgColors.length]
                                    }`}
                                >
                                    <img src={`/assets/images/pages/${item?.icon}`} alt={item.title} className="h-8 w-8 object-contain" />
                                </div>

                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                </h3>

                                <p className="text-gray-600">
                                    {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
