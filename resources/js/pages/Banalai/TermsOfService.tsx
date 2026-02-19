
import useTranslation from '@/hooks/use-translation';
import BanalaiLayout from './Layout';
import { usePage } from '@inertiajs/react';

const TermsOfService = () => {
    const { data } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <BanalaiLayout>
           <div className='my-20 max-w-7xl mx-auto prose' dangerouslySetInnerHTML={{__html:currentLocale === 'kh' ? data?.long_description_kh || data?.long_description : data?.long_description}}></div>
        </BanalaiLayout>
    );
};
{
}
export default TermsOfService;
