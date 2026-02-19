import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const ThnalFooter = () => {
    const { website_info, media_links } = usePage<any>().props;
    // console.log(media_links)
    const {t, currentLocale} = useTranslation();
    return (
        <footer className="relative bg-[#002349] pb-6 text-white">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 xl:px-20">
                {/* Bottom Divider */}
                <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-4 text-sm text-white/60 md:mt-4 md:flex-row">
                    <div className={`text-center md:text-left`}>
                        {currentLocale === 'kh' ? website_info?.copyright_kh || website_info?.copyright : website_info?.copyright}
                    </div>
                    <div className="flex gap-3">
                        {media_links?.map((item)=>(
                            <a
                            key={item?.id}
                            href="https://apps.apple.com/app/idYOUR_APP_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 transition hover:bg-white/20"
                        >
                            <img src={`/assets/images/links/thumb/${item?.image}`} className="text-white w-7" />
                            <span className="text-sm text-white">{item?.name}</span>
                        </a>
                        ))}
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

export default ThnalFooter;
