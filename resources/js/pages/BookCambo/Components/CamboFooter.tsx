import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const CamboFooter = () => {
    const { application_info } = usePage().props;
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

    return (
        <footer className="relative bg-[#002349] pb-6 text-white">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-20">
                {/* Bottom Divider */}
                <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-4 text-sm text-white/60 md:mt-4 md:flex-row">
                    <div className={`${fontClass} text-center md:text-left`}>
                        © 2025 Book Cambodia. All Rights Reserved.
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="https://apps.apple.com/app/idYOUR_APP_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                        >
                            <SiAppstore size={20} className="text-white" />
                            <span className="text-sm text-white">App Store</span>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                        >
                            <SiGoogleplay size={20} className="text-white" />
                            <span className="text-sm text-white">Play Store</span>
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        Powered by:{' '}
                        <a
                            href="https://alphalib.org/"
                            className="text-white transition-opacity duration-300 hover:text-white hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Alphalib
                        </a>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default CamboFooter;
