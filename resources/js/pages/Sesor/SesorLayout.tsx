import { ReactNode } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Footer from './components/Footer';
import Navbar02Page from './components/navbars/navbar';
interface LayoutProps {
    children: ReactNode;
}

const SesorLayout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-white">
            <Navbar02Page />
            <main className={`mx-auto min-h-screen`}>{children}</main>
            {/* <ScrollToTopButton/> */}
            <Footer />
            {/* <a
                href="#"
                rel="noopener noreferrer"
                className="animate-fadeUp fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 via-sky-600 to-sky-500/90 text-white backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
                <FaTelegramPlane className="text-2xl" />
            </a> */}
        </div>
    );
};

export default SesorLayout;
