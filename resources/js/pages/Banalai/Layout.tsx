import BanalaiFooter from '@/components/Banalai/BanalaiFooter';
import BanalaiNav from '@/components/Navbar/BanalaiNav';
import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const BanalaiLayout = ({ children }: LayoutProps) => {

    return (
        <div className='bg-white'>
            <BanalaiNav />
            <main className="mx-auto w-full flex-1 min-h-svh">{children}</main>
            <BanalaiFooter />
        </div>
    );
};

export default BanalaiLayout;
