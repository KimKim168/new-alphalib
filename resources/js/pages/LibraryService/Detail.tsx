import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import LibraryServiceLayout from './LibraryServiceLayout';

const Detail = () => {
    const { showData, relatedData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const title =
        currentLocale === 'kh'
            ? showData?.title_kh || showData?.title
            : showData?.title;

    const longDescription =
        currentLocale === 'kh'
            ? showData?.long_description_kh || showData?.long_description
            : showData?.long_description;

    return (
        <LibraryServiceLayout>
            <div className="section-container my-20 ">
                {/* Breadcrumb */}
                <div className="mb-4">
                    <Breadcrumb className="inline-block rounded-2xl p-1 backdrop-blur dark:bg-slate-800/60">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/#resources">
                                        {t('Back to resources')}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem className="rounded-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-2">
                                <BreadcrumbPage className="text-sm font-medium text-white">
                                    {title}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Content */}
                    <article className="w-full lg:w-3/4">
                        <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900 lg:text-[28px]">
                            {title}
                        </h1>

                        <div
                            className="prose text-lg text-gray-700"
                            dangerouslySetInnerHTML={{
                                __html: longDescription,
                            }}
                        />
                    </article>

                    {/* Sidebar */}
                    <aside className="sticky top-24 w-full lg:w-1/4">
                        {/* Sidebar Header */}
                        <div className="mb-6 rounded-2xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] p-[1px]">
                            <div className="rounded-2xl bg-white px-5 py-4 dark:bg-gray-900">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {t('Related')}
                                </h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {t('Explore more library resources')}
                                </p>
                            </div>
                        </div>

                        {/* Related Cards */}
                        <div className="space-y-4">
                            {relatedData
                                ?.filter(
                                    (item) => item?.id !== showData?.id
                                )
                                .map((item) => {
                                    const itemTitle =
                                        currentLocale === 'kh'
                                            ? item?.title_kh || item?.title
                                            : item?.title;

                                    const itemDescription =
                                        currentLocale === 'kh'
                                            ? item?.short_description_kh ||
                                              item?.short_description
                                            : item?.short_description;

                                    return (
                                        <Link
                                            key={item?.id}
                                            href={`/detail/${item?.id}`}
                                            className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                                        >
                                            {/* Image */}
                                            <div className="relative h-[90px] w-[90px] flex-shrink-0 overflow-hidden rounded-xl">
                                                <img
                                                    src={`/assets/images/posts/${item?.thumbnail}`}
                                                    alt={itemTitle}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col justify-between">
                                                <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white">
                                                    {itemTitle}
                                                </h3>

                                                <p className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                                    {itemDescription}
                                                </p>

                                                <span className="mt-1 inline-flex items-center text-xs font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
                                                    {t('Read more')} →
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>
                    </aside>
                </div>
            </div>
        </LibraryServiceLayout>
    );
};

export default Detail;
