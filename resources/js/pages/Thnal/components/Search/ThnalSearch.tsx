'use client';

import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import debounce from 'debounce';
import { LibraryIcon, SearchIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type SearchType = 'library' | 'item' | 'list';

interface LibrarySearchProps {
    debounceSearch?: boolean; // default true
}

const ThnalSearch = ({ debounceSearch = true }: LibrarySearchProps) => {
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

    const [search, setSearch] = useState(initialQueryParams.get('search') || '');
    const [searchType, setSearchType] = useState<SearchType>((initialQueryParams.get('type') as SearchType) || 'library');

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const isOnLibrariesPage = currentPath === '/libraries';

    const placeholderMap: Record<SearchType, string> = {
        library: 'Search libraries by library name, title, author, publicsher...',
        item: 'Search items by title, short description...',
        list: 'Search lists by title, short description...',
    };

    const debouncedSearch = useCallback(
        debounce((searchTerm: string, type: SearchType) => {
            if (!isOnLibrariesPage || !debounceSearch) return;

            const queryParams = new URLSearchParams(window.location.search);

            if (searchTerm) queryParams.set('search', searchTerm);
            else queryParams.delete('search');

            queryParams.set('type', type);
            queryParams.set('page', '1');

            router.get(
                `${currentPath}?${queryParams.toString()}`,
                {},
                {
                    preserveState: true,
                    preserveScroll: true,
                },
            );
        }, 500),
        [currentPath, isOnLibrariesPage, debounceSearch],
    );

    useEffect(() => {
        return () => debouncedSearch.clear();
    }, [debouncedSearch]);

    const handleSearch = () => {
        const queryParams = new URLSearchParams();

        if (search) queryParams.set('search', search);
        queryParams.set('type', searchType);

        router.get(`/libraries?${queryParams.toString()}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <div className="relative w-full ">
            <div
                className={cn(
                    'flex items-center rounded-full border border-white bg-white/10 md:p-2 text-primary-foreground ring-primary/20 backdrop-blur-sm focus-within:ring-4 dark:ring-primary/50',
                )}
            >
                <Button variant="ghost" size="icon" className="hidden rounded-full pl-2 sm:inline-flex">
                    <LibraryIcon className="md:h-5 md:w-5 text-white" />
                </Button>

                {/* Search Type */}
                <select
                    value={searchType}
                    onChange={(e) => {
                        const value = e.target.value as SearchType;
                        setSearchType(value);

                        if (isOnLibrariesPage && debounceSearch) {
                            debouncedSearch(search, value);
                        }
                    }}
                    className="bg-transparent text-[12px] px-2 md:text-sm text-white outline-none sm:text-base"
                >
                    <option value="library">Library</option>
                    <option value="item">Items</option>
                    <option value="list">Lists</option>
                </select>

                <Input
                    type="search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if (isOnLibrariesPage && debounceSearch) {
                            debouncedSearch(e.target.value, searchType);
                        }
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholderMap[searchType]}
                    className="flex-1 border-0 bg-transparent pl-2 placeholder:text-white/80 text-base shadow-none focus-visible:ring-0 sm:pl-3 text-[12px] sm:text-lg"
                />

                <Button variant="ghost" size="icon" className="rounded-full bg-primary hover:bg-primary/50" onClick={handleSearch}>
                    <SearchIcon className="h-5 w-5 text-white dark:text-[#1f79ee]" />
                </Button>
            </div>
        </div>
    );
};

export default ThnalSearch;
