import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import debounce from 'debounce';
import { SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface PublisherSearchProps {
    debounceSearch?: boolean; // default true
    buttonClassName?: string;
}

const PublisherSearch = ({ debounceSearch = true, buttonClassName = '' }: PublisherSearchProps) => {
    const { t } = useTranslation();
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    const [search, setSearch] = useState(initialQueryParams.get('search') || '');
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isOnPublishersPage = currentPath === '/publishers';

    // Only debounce if enabled
    const debouncedSearch = useCallback(
        debounce((searchTerm: string) => {
            if (!isOnPublishersPage || !debounceSearch) return;
            const queryParams = new URLSearchParams(window.location.search);
            if (searchTerm) queryParams.set('search', searchTerm);
            else queryParams.delete('search');
            queryParams.set('page', '1');
            router.get(`${currentPath}?${queryParams.toString()}`, {}, { preserveState: true, preserveScroll: true });
        }, 500),
        [currentPath, isOnPublishersPage, debounceSearch],
    );

    useEffect(() => {
        return () => debouncedSearch.clear();
    }, [debouncedSearch]);

    const handleSearch = () => {
        if (isOnPublishersPage && debounceSearch) {
            debouncedSearch(search);
        } else {
            const queryParams = new URLSearchParams();
            if (search) queryParams.set('search', search);
            router.get(`/publishers?${queryParams.toString()}`);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <div className="relative mx-auto w-full max-w-full">
            <div
                className={cn(
                    'flex items-center rounded-md border bg-muted ring-primary/20 transition-colors focus-within:border-primary focus-within:ring-4 dark:ring-primary/50',
                )}
            >
                <Button variant="ghost" size="icon" className="hidden rounded-md pl-4 hover:bg-accent sm:inline-block">
                    <SearchIcon className="h-5 w-5 text-primary" />
                </Button>

                <Input
                    type="search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if (isOnPublishersPage && debounceSearch) debouncedSearch(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={t("Search...")}
                    className="flex-1 border-0 bg-transparent pl-4 text-base shadow-none focus-visible:ring-0 sm:text-lg"
                />

                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        'translate-x-[0.5px] rounded-md bg-primary p-[20px] text-base text-primary-foreground hover:bg-primary/20',
                        buttonClassName,
                    )}
                    onClick={handleSearch}
                >
                    {/* <SearchIcon className="h-5 w-5 text-primary" /> */}{t('Go')}
                </Button>
            </div>
        </div>
    );
};

export default PublisherSearch;
