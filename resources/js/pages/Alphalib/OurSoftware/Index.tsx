import React from 'react'
import AlphalibLayout from '../AlphalibLayout'
import SoftwareGrid from '../components/SoftwareGrid'
import { usePage } from '@inertiajs/react';

const Index = () => {
    const { banner } = usePage<any>().props;
  return (
    <AlphalibLayout>
        <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden lg:h-[400px]">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('/assets/images/banners/thumb/${banner?.image}')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/20" />
                </div>

                {/* Content Container */}
                
            </div>
        <SoftwareGrid/>
    </AlphalibLayout>
  )
}

export default Index
