import ThnalLayout from './ThnalLayout';
import { Card } from './components/Card';
import Hero from './components/Hero';
import ThnalBanner from './components/ThnalBanner';
import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';

const Index = () => {
    const { website_info, app_url } = usePage<any>().props;
        const { t, currentLocale } = useTranslation();
    
        const description =
            currentLocale === 'kh' ? website_info?.short_description_kh || website_info?.short_description : website_info?.short_description;
        const keywords = currentLocale === 'kh' ? website_info?.keywords_kh || website_info?.keywords : website_info?.keywords;
        const title = currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name;
        const image = `${app_url}/assets/images/website_infos/${website_info.logo}`;
    return (
        <ThnalLayout>
            <Head>
                {/* Basic Meta */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={app_url} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>
            <Hero/>
            <div>
                <ThnalBanner />
                <Card />
            </div>
        </ThnalLayout>
    );
};

export default Index;
