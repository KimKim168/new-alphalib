import { Link, usePage } from '@inertiajs/react';
import BookCategory from './BookCategory';
import ViewMore from './ViewMore';
import useTranslation from '@/hooks/use-translation';
export default function MyBookCard() {
    const { newArrivals, categoriesWithItems, locale } = usePage<any>().props;
    const { t } = useTranslation();
    return (
        <div className="relative overflow-hidden pt-6 lg:pt-8">
            <div className="section-container relative z-10">
                <div className="mb-10">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <BookCategory category={t('New Arrivals')} />
                        <Link href={`/books`}>
                            <ViewMore />
                        </Link>
                    </div>
                    {/* Grid Cards */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                        {newArrivals?.map((item: any) => (
                            <Link href={`/items/${item.id}`}>
                                <div className="group relative w-full overflow-hidden rounded border shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40">
                                    <img src={`/assets/images/items/thumb/${item.thumbnail}`} alt="image" className="aspect-[6/9] w-full object-cover" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {categoriesWithItems?.map((category: any) => (
                    <div key={category.id} className="mb-10">
                        {/* Category Header */}
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                            <BookCategory category={locale == 'kh' ? (category.name_kh ?? category.name) : category.name} />
                            <Link href={`/books?category_code=${category?.code}`}>
                                <ViewMore />
                            </Link>
                        </div>
                        {/* Grid Cards */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                            {category.items.map((item: any) => (
                                <Link href={`/items/${item.id}`}>
                                    <div className="group relative w-full overflow-hidden rounded border shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40">
                                        <img
                                            src={`/assets/images/items/thumb/${item.thumbnail}`}
                                            alt="image"
                                            className="aspect-[6/9] w-full object-cover"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
