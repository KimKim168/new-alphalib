import { Link, usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';
import React from 'react';

const ContentAndResource = () => {
    const { allResoures, videoHeaderBottom } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const headerTitle =
        currentLocale === 'kh'
            ? videoHeaderBottom?.name_kh || videoHeaderBottom?.name
            : videoHeaderBottom?.name;

    return (
        <section id="resources" className="section-container bg-white py-14">
            <h2 className="mb-6 text-center text-2xl font-bold leading-tight text-gray-900 lg:text-[28px]">
                {headerTitle}
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {allResoures?.map((resource) => {
                    const title =
                        currentLocale === 'kh'
                            ? resource?.title_kh || resource?.title
                            : resource?.title;

                    const shortDescription =
                        currentLocale === 'kh'
                            ? resource?.short_description_kh || resource?.short_description
                            : resource?.short_description;

                    return (
                        <Link
                            href={`/detail/${resource?.id}`}
                            key={resource?.id}
                            className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative flex aspect-video items-center justify-center bg-gray-200">
                                <img
                                    src={`/assets/images/posts/${resource?.thumbnail}`}
                                    alt={title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                                    {title}
                                </h3>
                                <p className="line-clamp-2 text-sm text-gray-600">
                                    {shortDescription}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default ContentAndResource;
