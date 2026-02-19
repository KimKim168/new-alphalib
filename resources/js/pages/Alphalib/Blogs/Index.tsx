'use client';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import AlphalibLayout from '../AlphalibLayout';
import useTranslation from '@/hooks/use-translation';

const BlogPage = () => {
    const { banner, data } = usePage<any>().props;
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

            {/* Blogs Section */}
            <div className="py-10 transition-colors duration-300 dark:bg-transparent">
                <div className="section-container mx-auto">
                    <div className="mb-10">
                        <h2 className="text-3xl font-black tracking-tighter text-primary sm:text-4xl dark:text-white">
                            {t('Our Blogs')}
                        </h2>
                        <div className="mt-2 h-0.5 w-20 rounded-full bg-[#081F62] dark:bg-white" />
                        <p className="mt-3 max-w-2xl text-base" style={{ color: '#535F80' }}>
                            {t('Empowering institutions with 17 years of technical expertise and innovation.')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {data?.map((item) => (
                            <div
                                key={item?.id}
                                className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl"
                            >
                                <img
                                    src={`/assets/images/posts/thumb/${item?.thumbnail}`}
                                    alt={currentLocale === 'kh' ? item?.title_kh || item?.title : item?.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="mb-2 text-2xl font-semibold">
                                        {currentLocale === 'kh' ? item?.title_kh || item?.title : item?.title}
                                    </h2>
                                    <p className="mb-4 text-gray-600">
                                        {currentLocale === 'kh'
                                            ? item?.short_description_kh || item?.short_description
                                            : item?.short_description}
                                    </p>
                                    <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
                                        <span>
                                            {new Date(item?.created_at).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: '2-digit',
                                            })}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/blog/${item?.id}`}
                                        className="group/btn mt-8 flex cursor-pointer items-center text-xs font-black tracking-widest uppercase transition-all"
                                        style={{ color: '#081F62' }}
                                    >
                                        {t('Read Details')}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AlphalibLayout>
    );
};

export default BlogPage;
