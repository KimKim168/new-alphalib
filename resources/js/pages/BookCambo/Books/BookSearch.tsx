import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import debounce from 'debounce';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface BookSearchProps {
    debounceSearch?: boolean; // default true
    buttonClassName?: string;
}

const BookSearch = ({ debounceSearch = true, buttonClassName = '' }: BookSearchProps) => {
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const [search, setSearch] = useState(initialQueryParams.get('search') || '');
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isOnBooksPage = currentPath === '/books';

    // Only debounce if enabled
    const debouncedSearch = useCallback(
        debounce((searchTerm: string) => {
            if (!isOnBooksPage || !debounceSearch) return;
            const queryParams = new URLSearchParams(window.location.search);
            if (searchTerm) queryParams.set('search', searchTerm);
            else queryParams.delete('search');
            queryParams.set('page', '1');
            router.get(`${currentPath}?${queryParams.toString()}`, {}, { preserveState: true, preserveScroll: true });
        }, 500),
        [currentPath, isOnBooksPage, debounceSearch],
    );

    useEffect(() => {
        return () => debouncedSearch.clear();
    }, [debouncedSearch]);

    const handleSearch = () => {
        if (isOnBooksPage && debounceSearch) {
            debouncedSearch(search);
        } else {
            const queryParams = new URLSearchParams();
            if (search) queryParams.set('search', search);
            router.get(`/books?${queryParams.toString()}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };
   const { t } = useTranslation();
       const { locale } = usePage().props;

    return (
        <div className="relative mx-auto w-full max-w-full">
            <div
                className={cn(
                    'flex items-center rounded-full border bg-muted ring-primary/20 transition-colors focus-within:border-primary focus-within:ring-4 dark:ring-primary/50',
                )}
            >
                <Button variant="ghost" size="icon" className="hidden rounded-full pl-4 hover:bg-accent sm:inline-block">
                    <SearchIcon className="h-5 w-5 text-primary" />
                </Button>

                <Input
                    type="search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if (isOnBooksPage && debounceSearch) debouncedSearch(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={t('Search...')}
                    className="flex-1 border-0 bg-transparent pl-4 text-base shadow-none focus-visible:ring-0 sm:text-lg"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(`translate-x-[0.5px] rounded-full bg-primary p-[20px] text-base text-primary-foreground hover:bg-primary/20`, buttonClassName)}
                    onClick={handleSearch}
                >
                    {/* <SearchIcon className="h-5 w-5 text-primary" /> */}{t('Go')}
                </Button>
            </div>
        </div>
    );
};

export default BookSearch;
