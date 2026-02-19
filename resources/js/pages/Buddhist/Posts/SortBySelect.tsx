import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { router } from '@inertiajs/react';
import { ArrowDownNarrowWide } from 'lucide-react';
import * as React from 'react';

export function SortBySelect() {
    // Initialize from URL query or fallback to empty string
    const getInitialSort = () => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('sort_by') || '';
        }
        return '';
    };

    const [sortValue, setSortValue] = React.useState(getInitialSort);

    const handleSortChange = (value: string) => {
        setSortValue(value);

        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('sort_by', value);
        queryParams.delete('page'); // reset pagination
        const url = `${window.location.pathname}?${queryParams.toString()}`;

        router.visit(url, { preserveScroll: true });
    };

    return (
        <Select value={sortValue} onValueChange={handleSortChange}>
            <SelectTrigger className="flex h-[54px] cursor-pointer items-center gap-2 rounded-full border-transparent bg-muted px-6 shadow-none transition-colors hover:border-primary data-[placeholder]:text-foreground">
                <ArrowDownNarrowWide className="h-5 w-5" />
                <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="az">A → Z</SelectItem>
                    <SelectItem value="za">Z → A</SelectItem>
                    <SelectItem value="most_viewed">Most Viewed</SelectItem>
                    <SelectItem value="least_viewed">Least Viewed</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
