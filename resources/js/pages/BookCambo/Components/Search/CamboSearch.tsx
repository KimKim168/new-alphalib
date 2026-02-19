import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import BookSearch from '../../Books/BookSearch';

const CamboSearch = () => {
    const application_info = 'BookCamboLogo.png';
    const headerRef = useRef(null);
    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const { t } = useTranslation();
    const { locale } = usePage().props;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: [1] },
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, []);
    return (
        <>
            {/* <div className=" bg-[#002349] ">
                <div className={`mx-auto text-center max-w-screen-2xl px-3 pt-4 sm:px-10 xl:px-20 text-base text-white sm:text-xl lg:text-2xl ${fontClass}`}>{t('Welcome to Cambodia Book')}</div>
            </div> */}
            <div ref={sentinelRef} />
            <div
                ref={headerRef}
                className={`sticky top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-300 ease-in-out ${isSticky ? 'bg-background/50' : 'bg-true-primary'}`}
            >
                <div className="section-container flex items-center justify-center gap-2 py-6">
                    <BookSearch buttonClassName='translate-x-[0px]' />
                </div>
                {/* <div className="flex section-container items-center justify-center gap-2 py-6">
                    {isSticky && (
                        <a href="/">
                            <img src={`/assets/book_cambo/cbpa-no-bg.png`} className="w-16 lg:w-26" />
                        </a>
                    )}
                    <form
                        action="https://elibrary.rac.gov.kh/one_search"
                        method="GET"
                        className="flex flex-1 flex-row items-center justify-center gap-2 rounded-full border bg-white py-0 pr-0 pl-3 shadow-xl focus-within:border-indigo-500 focus-within:ring-1"
                    >
                        <Search className="text-black" />
                        <label htmlFor="search-bar" className="sr-only">
                            Search
                        </label>
                        <input
                            id="search-bar"
                            name="search"
                            placeholder="Search by: Title, ISBN, Author..."
                            className="w-full rounded-full bg-white px-4 py-2 text-sm text-black outline-none sm:text-base"
                        />
                        <button
                            type="submit"
                            className="rounded-full border border-[#104674] bg-[#104674] bg-[linear-gradient(135deg,#104674,#014f93)] px-3 py-2 font-semibold text-white transition-all duration-200 hover:border-[#104674] active:scale-95"
                        >
                            <span className="text-sm font-semibold">Go</span>
                        </button>
                    </form>
                </div> */}
            </div>
        </>
    );
};

export default CamboSearch;
