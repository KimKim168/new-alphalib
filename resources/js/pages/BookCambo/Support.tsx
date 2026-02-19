import { usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import BookCamboLayout from './BookCamboLayout';
import GoogleMap from './Components/GoogleMap';
import useTranslation from '@/hooks/use-translation';

const Index = () => {
    const { contactData, website_info, locale } = usePage<any>().props;
    const { t } = useTranslation();
    return (
        <BookCamboLayout>
            <div className="mx-auto flex flex-col items-center border-t px-4">
                <h2 className="mt-10 text-center text-xl font-medium text-primary">{locale === 'kh' ? (contactData?.name_kh ?? contactData?.name) : contactData?.name}</h2>
                <p className="sm:text-xldark:text-gray-200 max-w-3xl text-center text-lg text-gray-700 dark:text-gray-400">
                   {locale === 'kh' ? (contactData?.short_description_kh ?? contactData?.short_description) : contactData?.short_description}
                </p>
            </div>

            <div className="section-container mx-auto grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl bg-muted p-6 shadow-sm">
                    <div className="rounded-full bg-primary p-4 text-primary-foreground">
                        <Mail className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">{t("Email")}</h4>
                        <p className="text-muted-foreground">{website_info?.email}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl bg-muted p-6 shadow-sm">
                    <div className="rounded-full bg-primary p-4 text-primary-foreground">
                        <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">{t("Phone")}</h4>
                        <p className="text-muted-foreground">{website_info?.phone}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 rounded-xl bg-muted p-6 shadow-sm">
                    <div className="rounded-full bg-primary p-4 text-primary-foreground">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">{t("Address")}</h4>
                        <p className="text-muted-foreground"> {locale === 'kh' ? (website_info?.address_kh ?? website_info?.address) : website_info?.address}</p>
                    </div>
                </div>
            </div>

            <GoogleMap google_map_embed={website_info?.google_map_embed} />
        </BookCamboLayout>
    );
};

export default Index;
