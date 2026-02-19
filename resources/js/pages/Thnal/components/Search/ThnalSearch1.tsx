import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AlertDialogSearch } from './AlertDielogSearch';
import SearchSwitcher from './SearchSwitcher';

const ThnalSearch = () => {
    const headerRef = useRef(null);
    const sentinelRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [selectedWorkspace, setSelectedWorkspace] = useState("Items"); // default
    const { t } = useTranslation();
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';

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

    const workspaces = [
        { id: 1, label: "Items", value: "Items" },
        { id: 2, label: "Libraries", value: "Libraries" },
        { id: 3, label: "Lists", value: "Lists" },
    ];

    // Placeholder mapping
    const placeholders = {
        Items: t('Search author, title, library name'),
        Libraries: t('Search library name'),
        Lists: t('Search list name'),
    };

    return (
        <>
            <div ref={sentinelRef} />
            <div
                ref={headerRef}
                className={`sticky top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
                    isSticky ? 'bg-background/70 shadow-md backdrop-blur-md' : ''
                }`}
            >
                <div className="mx-auto flex items-center gap-2 max-w-screen-2x px-3 py-2 sm:px-10 xl:px-20">
                    <div className="flex w-full items-center overflow-hidden rounded-xl border bg-white shadow-sm">
                        {/* Category Switcher */}
                        <div className="shrink-0">
                            <SearchSwitcher 
                                workspaces={workspaces} 
                                onChange={(value) => setSelectedWorkspace(value)} 
                            />
                        </div>
                        {/* Search Input */}
                        <form 
                            action="https://elibrary.rac.gov.kh/one_search" 
                            method="GET" 
                            className="flex flex-1 items-center"
                        >
                            <label htmlFor="search-bar" className="sr-only">
                                Search
                            </label>
                            <input
                                id="search-bar"
                                name="search"
                                placeholder={placeholders[selectedWorkspace] || t('Search for books, articles, and more...')}
                                className={`w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none sm:text-base ${fontClass}`}
                            />
                        </form>

                        {/* Search button */}
                        <button
                            type="submit"
                            className="mr-1 flex  shrink-0 items-center justify-center gap-1 rounded-md bg-[#1B6593] px-2 py-2 text-white transition-colors hover:bg-[#2381ba]"
                        >
                            <span className='text-sm'>Search</span> <Search className="h-5 w-5 text-white" />
                        </button>
                    </div>
                    <AlertDialogSearch />
                </div>
            </div>
        </>
    );
};

export default ThnalSearch;
