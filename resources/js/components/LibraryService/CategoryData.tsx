import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const CategoryData = () => {
    const { t, currentLocale } = useTranslation();
    const { allVideoCategories } = usePage().props;

    return (
        <div className="mx-auto mt-26 max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                    Our Categories
                </h2>
                <p className="mx-auto mt-2 max-w-5xl text-center text-gray-500 dark:text-gray-300">
                    Our library offers specialized databases with searchable digital academic content in text, audio, and journals—supporting
                    research, teaching, publishing, and self-study with fast, reliable access to high-quality resources.
                </p>
            </div>
            {/* Grid */}
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {allVideoCategories?.map((item) => (
                    <a
                        key={item.id}
                        href={`/videos`}
                        className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:shadow-lg dark:bg-gray-800"
                        aria-label={`View ${currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}`}
                    >
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
                            <img
                                src={
                                    item.image
                                        ? `/assets/images/video-categories/${item.image}`
                                        : '/assets/images/placeholder-category.jpg'
                                }
                                alt={currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Hover overlay */}
                            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 sm:opacity-0 sm:group-hover:opacity-100">
                                <span className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm">
                                    {t('View')}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2 px-4 py-4">
                            <h3 className="line-clamp-2 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                                {currentLocale === 'kh'
                                    ? (item.name_kh ?? item.name)
                                    : item.name}
                            </h3>

                            {item.short_description && (
                                <p className="line-clamp-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                                    {currentLocale === 'kh'
                                        ? (item.short_description_kh ?? item.short_description)
                                        : item.short_description}
                                </p>
                            )}
                        </div>
                    </a>
                ))}

                {/* Empty state */}
                {(!allVideoCategories || allVideoCategories.length === 0) && (
                    <p className="col-span-full text-center text-gray-500">
                        No categories available.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CategoryData;
