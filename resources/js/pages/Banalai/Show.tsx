import { usePage } from '@inertiajs/react';
import BanalaiLayout from './Layout';
import useTranslation from '@/hooks/use-translation';

const Show = () => {
    const { showData } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    return (
        <BanalaiLayout>
            <div className="mx-auto max-w-7xl px-4 pt-20 pb-20 sm:px-6 lg:px-8">
                {/* <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-lg`}>
                    <img src={`/assets/images/pages/${showData?.icon}`} alt={showData?.name} className="h-full w-full object-contain rounded-lg" />
                </div> */}
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">{currentLocale === 'kh' ? showData?.name_kh || showData?.name : showData?.name}</h3>

                {/* Short Description */}
                <p className="mb-4 text-gray-600 max-w-none" dangerouslySetInnerHTML={{__html:currentLocale === 'kh' ? showData?.short_description_kh || showData?.short_description : showData?.short_description}}></p>
                <div dangerouslySetInnerHTML={{ __html:currentLocale === 'kh' ? showData?.long_description_kh || showData?.long_description : showData?.long_description }} className="prose max-w-none prose-img:w-full"></div>
            </div>
        </BanalaiLayout>
    );
};

export default Show;
