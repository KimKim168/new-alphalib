import BuddhistCardHoverGradient from '@/components/Card/BuddhistCardHoverGradient';
import BuddhistCardHoverGradientRow from '@/components/Card/BuddhistCardHoverGradientRow';
import NoDataDisplay from '@/components/NoDataDisplay';
import HtmlContentDisplay from '@/components/Typography/HtmlContentDisplay';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { stripHtml } from '@/lib/utils';
import { Head, usePage } from '@inertiajs/react';
import { EyeIcon } from 'lucide-react';
import Layout from '../Layout';
export default function Show() {
    const { showData, relatedItems, relatedItemsTwo, app_url } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const descriptionContent = stripHtml(
        currentLocale === 'kh' ? showData?.short_description_kh || showData?.short_description : showData?.short_description,
    );
    const description = descriptionContent.length > 160 ? descriptionContent.slice(0, 157) + '…' : descriptionContent;
    const title = currentLocale === 'kh' ? showData?.title_kh || showData?.title : showData?.title;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* Open Graph for social sharing */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={`${app_url}/images/thumb/${showData.thumbnail}`} />
                {/* Twitter card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={`${app_url}/images/thumb/${showData.thumbnail}`} />
            </Head>

            <div className="min-h-[100vh] bg-muted">
                <div className="section-container py-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{t('Home')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {/* TODO : Display Actual Cateogry Name */}
                                <BreadcrumbLink href={`/posts?category_code=${showData?.category_code}`}>
                                    {currentLocale === 'kh' ? showData?.category?.name_kh || showData?.category?.name : showData?.category?.name}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-foreground" href={`/posts/${showData?.id}`}>
                                    {currentLocale === 'kh' ? showData?.title_kh || showData?.title : showData?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="pb-10">
                    <div className="mx-auto flex max-w-(--breakpoint-xl) flex-col items-start gap-8 px-4 lg:flex-row">
                        <div className="flex-1 space-y-4">
                            <div className="rounded-md bg-background p-6">
                                <h1 className="text-lg font-semibold md:text-2xl">
                                    {currentLocale === 'kh' ? showData?.title_kh || showData?.title : showData?.title}
                                </h1>
                                <div className="flex flex-wrap gap-3 py-4">
                                    {/* Views */}
                                    <div className="flex items-center gap-2 rounded bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                                        <EyeIcon className="h-5 w-5 text-gray-500" />
                                        <span>{showData?.total_view_count} views</span>
                                    </div>

                                    {/* Published Date */}
                                    {showData?.created_at && (
                                        <div className="flex items-center gap-2 rounded bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                                            <span className="font-medium">Published:</span>
                                            <span>
                                                {new Date(showData.created_at).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {showData?.short_description && (
                                    <HtmlContentDisplay
                                        className="prose-img:rounded-md"
                                        content={
                                            currentLocale === 'kh'
                                                ? showData?.short_description_kh || showData?.short_description
                                                : showData?.short_description
                                        }
                                    />
                                )}
                            </div>
                            {showData?.long_description && (
                                <div className="rounded-md bg-background p-6">
                                    <HtmlContentDisplay
                                        className="prose-img:rounded-md"
                                        content={
                                            currentLocale === 'kh'
                                                ? showData?.long_description_kh || showData?.long_description
                                                : showData?.long_description
                                        }
                                    />
                                </div>
                            )}
                            {relatedItemsTwo?.length > 0 && (
                                <div className="pt-8">
                                    <aside className="w-full shrink-0 lg:max-w-full">
                                        <div className="space-y-2">
                                            <div className="rounded-md bg-background">
                                                <h2 className="px-6 pt-6 text-center text-lg font-semibold text-[#961c1e] md:text-2xl">
                                                    {t('Related')}
                                                </h2>
                                                <div className="grid grid-cols-1 gap-4 p-2 pt-0">
                                                    {relatedItemsTwo?.map((item: any) => (
                                                        <BuddhistCardHoverGradientRow key={item.id} item={item} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            )}
                        </div>
                        <aside className="w-full shrink-0 lg:max-w-sm">
                            <div className="space-y-2">
                                <div className="rounded-md bg-background">
                                    <h2 className="px-6 pt-6 text-center text-lg font-semibold text-[#961c1e] md:text-2xl">{t('Related')}</h2>
                                    {relatedItems?.length > 0 ? (
                                        <div className="grid grid-cols-1 gap-4 p-2 pt-0">
                                            {relatedItems?.map((item: any) => (
                                                <BuddhistCardHoverGradient key={item.id} item={item} />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center space-y-2 py-6 text-gray-500">
                                            <NoDataDisplay />
                                            <p className="text-sm font-medium">{t('No Related Data')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
