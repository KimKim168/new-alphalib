import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import { Badge } from '@/components/ui/badge';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const Authorinfo = () => {
    const { showData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const renderField = (label: string, value: any) => {
        if (!value) return null;
        return (
            <div className="flex items-baseline gap-2">
                <strong className="shrink-0">{t(label)}:</strong> {value}
            </div>
        );
    };

    return (
        <>
            {/* General Information */}
            <Accordion type="single" defaultValue="general-info" collapsible className="mx-auto w-full max-w-full shadow-none">
                <AccordionItem value="general-info" className="border-none shadow-none">
                    <AccordionTrigger className="text-lg font-semibold">{t('General Information')}</AccordionTrigger>
                    <AccordionContent className="rounded border p-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                
                                {renderField('Affiliated Institution', showData?.library_data?.affiliated_institution)}

                                {showData?.library_data?.library_type && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Library Type')}:</strong>{' '}
                                        {currentLocale === 'kh'
                                            ? showData?.library_data?.library_type?.name_kh || showData?.library_data?.library_type?.name
                                            : showData?.library_data?.library_type?.name}
                                    </div>
                                )}

                                {renderField('Facebook', showData?.library_data?.facebook_name)}
                                {renderField('Website', showData?.library_data?.website)}
                                {renderField('Phone', showData?.library_data?.phone)}
                                {renderField('Email', showData?.library_data?.email)}
                                {showData?.library_data?.province && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Province')}:</strong>{' '}
                                        {currentLocale === 'kh' ? showData?.library_data?.province?.name_kh || showData?.library_data?.province?.name : showData?.library_data?.province?.name}
                                    </div>
                                )}
                                {renderField('Address', showData?.library_data?.address)}
                            </div>
                            <div className="space-y-2">
                                {showData?.library_data?.funding_type && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Source of Funding')}:</strong>{' '}
                                        {currentLocale === 'kh'
                                            ? showData?.library_data?.funding_type?.name_kh || showData?.library_data?.funding_type?.name
                                            : showData?.library_data?.funding_type?.name}
                                    </div>
                                )}

                                {showData?.library_data?.class_type && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Library Class')}:</strong>{' '}
                                        {currentLocale === 'kh'
                                            ? showData?.library_data?.class_type?.name_kh || showData?.library_data?.class_type?.name
                                            : showData?.library_data?.class_type?.name}
                                    </div>
                                )}

                                {showData?.library_data?.target_users?.length > 0 && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Target Users')}:</strong>{' '}
                                        <div className="flex flex-wrap gap-1">
                                            {showData?.library_data?.target_users?.map((item: any) => (
                                                <Badge className="rounded" variant="outline">
                                                    {item.type?.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {showData?.library_data?.age_of_target_users?.length > 0 && (
                                    <div className="flex items-baseline gap-2">
                                        <strong className="shrink-0">{t('Age of Target Users')}:</strong>{' '}
                                        <div className="flex flex-wrap gap-1">
                                            {showData?.library_data?.age_of_target_users?.map((item: any) => (
                                                <Badge className="rounded" variant="outline">
                                                    {item.type?.name}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {renderField('Memberships', showData?.library_data?.memberships)}
                                {renderField('Partnerships', showData?.library_data?.partnerships)}
                                {renderField('Programs', showData?.library_data?.programs_and_projects)}
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
};

export default Authorinfo;
