
import useTranslation from '@/hooks/use-translation';
import BanalaiLayout from './Layout';
import { usePage } from '@inertiajs/react';

const CookiePolicy = () => {
    const { data } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <BanalaiLayout>
           <div className=' max-w-7xl mx-auto prose prose-p:my-0 px-4 pt-28 pb-20  sm:px-6 lg:px-8"' dangerouslySetInnerHTML={{__html:currentLocale === 'kh' ? data?.long_description_kh || data?.long_description : data?.long_description}}></div>
        </BanalaiLayout>
    );
};
{
}
export default CookiePolicy;
