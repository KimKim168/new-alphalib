import Footer from '@/components/Footer/Footer';
import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import CamboHeader from './Components/CamboHeader';
import CamboTopHeader from './Components/CamboTopHeader';
interface LayoutProps {
    children: ReactNode;
}

const BookCamboLayout = ({ children }: LayoutProps) => {
    const { locale } = usePage().props;
    return (
        <>
            <CamboTopHeader />
            <CamboHeader />
            <main className={`mx-auto`}>{children}</main>
            {/* <CamboFooter/> */}
            <Footer />
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fadeUp fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-sky-500 to-sky-300/90 text-white shadow-lg shadow-sky-500/20 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40"
            >
                <FaTelegramPlane className="text-2xl" />
            </a>
        </>
    );
};

export default BookCamboLayout;
