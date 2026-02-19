import { usePage } from '@inertiajs/react';
import AlphalibLayout from '../AlphalibLayout';
import OurCommunity from '../components/OurCommunity';

const Index = () => {
    const { banner } = usePage<any>().props;
    return (
        <AlphalibLayout>
             <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden lg:h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('/assets/images/banners/thumb/${banner?.image}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/20" />
                </div>
            </div>
            <div className="mt-10 lg:mt-10">
                <OurCommunity />
            </div>
        </AlphalibLayout>
    );
};

export default Index;
