import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import AlphalibLayout from '../AlphalibLayout';

const Show = () => {
    const { data } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <AlphalibLayout>
            {/* Hero Section */}
            <div className="section-container mt-6 gap-12">
                <div className="pb-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{t('Home')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/solutions">{t('Solutions')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="font-medium text-foreground" href={`/solution/${data?.id}`}>
                                     {currentLocale === 'kh' ? data?.name_kh || data?.name : data?.name}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                {/* Text Content */}
                <div className="w-full">
                    <h1 className="mb-6 w-full max-w-full text-xl leading-[1.1] font-black tracking-tighter text-zinc-900 lg:text-3xl dark:text-white">
                        {currentLocale === 'kh' ? data?.name_kh || data?.name : data?.name}
                    </h1>

                    <div
                        dangerouslySetInnerHTML={{
                            __html: currentLocale === 'kh'
                                ? data?.long_description_kh || data?.long_description
                                : data?.long_description,
                        }}
                        className="prose max-w-none"
                    ></div>

                </div>
            </div>

            {/* Features Section */}
        </AlphalibLayout>
    );
};

export default Show;
