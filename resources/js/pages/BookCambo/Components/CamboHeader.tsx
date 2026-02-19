import { usePage } from '@inertiajs/react';
import CamboMenu from './CamboMenu';

const CamboHeader = () => {
    const { website_info } = usePage<any>().props;
    return (
        <div>
            {/* nav and slide */}
            <div className="border-b py-2 sm:py-6">
                <div className="section-container flex items-center gap-2">
                    <a href="/" className="flex flex-1 items-center gap-2 text-base md:text-xl lg:text-xl">
                        <div className="overflow-hidden rounded bg-white p-1">
                            <img src={`/assets/images/website_infos/${website_info?.logo}`} alt="logo" className="h-18 object-contain" />
                        </div>
                        <div className="hidden text-center text-sm font-bold text-[#104674] sm:block md:text-xl dark:text-white">
                            <p>{website_info?.name_kh}</p>
                            <p>{website_info?.name}</p>
                        </div>
                    </a>
                    <CamboMenu />
                </div>
            </div>
        </div>
    );
};

export default CamboHeader;
