import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import MyFooter from './components/Footer/MyFooter';
import MyNavigetion from './components/NavigetionBar/MyNavigetion';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-koulen-regular' : '';

    return (
        <div className={`flex min-h-screen flex-col ${fontClass}`}>
            <MyNavigetion />
            <main className="mx-auto w-full flex-1">{children}</main>
            <MyFooter />
        </div>
    );
};

export default Layout;
