import useTranslation from '@/hooks/use-translation';
import { Head, usePage } from '@inertiajs/react';
import AlphalibLayout from './AlphalibLayout';
import Hero from './components/HeroAlphalib';
import { SlideWithAlertDialog } from './components/SlideShow/Slide';
import SoftwareGrid from './components/SoftwareGrid';
import WhoUsingAlphalib from './components/WhoUsingAlphalib';

const Index = () => {
    const { website_info, app_url } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const description =
        currentLocale === 'kh' ? website_info?.short_description_kh || website_info?.short_description : website_info?.short_description;
    const keywords = currentLocale === 'kh' ? website_info?.keywords_kh || website_info?.keywords : website_info?.keywords;
    const title = currentLocale === 'kh' ? website_info?.name_kh || website_info?.name : website_info?.name;
    const image = `${app_url}/assets/images/website_infos/${website_info.logo}`;
    return (
        <AlphalibLayout>
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
            <SlideWithAlertDialog />
            <Hero />
            <SoftwareGrid />
            <WhoUsingAlphalib />
        </AlphalibLayout>
    );
};

export default Index;
