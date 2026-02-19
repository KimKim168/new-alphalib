import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import CamboFooter from './components/ThnalFooter';
import NavbarAlphalib from '../Alphalib/components/NavbarAlphalib';
interface LayoutProps {
    children: ReactNode;
}

const ThnalLayout = ({ children }: LayoutProps) => {
    const { telegram } = usePage<any>().props;
    return (
        <>
            <NavbarAlphalib/>
            <main className={`font-poppins-regular mx-auto min-h-screen`}>{children}</main>
            <CamboFooter />

            <a
                href={telegram?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fadeUp fixed right-6 bottom-6 md:bottom-1/5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-sky-500 to-sky-300/90 text-white shadow-xs shadow-sky-500/20 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40"
            >
                <img src={`/assets/images/links/thumb/${telegram?.image}`} />
            </a>
        </>
    );
};

export default ThnalLayout;
