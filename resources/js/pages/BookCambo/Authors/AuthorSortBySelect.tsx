import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { router } from '@inertiajs/react';
import { Check, ChevronsUpDownIcon } from 'lucide-react';
import * as React from 'react';

export default function AuthorSortBySelect() {
    const [open, setOpen] = React.useState(false);

    // Get current path + query
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

    // Initialize filter for "letter"
    const [filters, setFilters] = React.useState({
        letter: initialQueryParams.get('letter') || '',
    });

    const updateFilters = (updates: Partial<typeof filters>) => {
        const newFilters = { ...filters, ...updates };
        setFilters(newFilters);
        applyFilter(newFilters);
    };

    const applyFilter = (appliedFilters?: typeof filters) => {
        if (!currentPath) return;
        const f = appliedFilters ?? filters;
        const queryParams = new URLSearchParams(window.location.search);

        Object.entries(f).forEach(([key, value]) => {
            if (value) {
                queryParams.set(key, value);
            } else {
                queryParams.delete(key);
            }
        });

        queryParams.set('page', '1');
        router.get(`${currentPath}?${queryParams.toString()}`, {}, { preserveState: true, preserveScroll: true });
    };

    const resetFilter = () => updateFilters({ letter: '' });

    // Generate A-Z options dynamically
    const sortOptions = Array.from({ length: 26 }, (_, i) => {
        const letter = String.fromCharCode(65 + i); // 65 = 'A'
        return { value: letter.toLowerCase(), label: letter };
    });

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    className={cn(
                        'h-11 rounded-md border border-transparent bg-muted text-muted-foreground hover:bg-primary hover:text-white',
                        filters?.letter ? 'border border-primary ring-4 ring-primary/30' : '',
                    )}
                >
                    {sortOptions.find((o) => o.value === filters.letter)?.label || 'By Letter'} <ChevronsUpDownIcon />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[150px] p-0">
                <Command>
                    <CommandInput placeholder="Search letter..." />
                    <CommandList>
                        <CommandEmpty>No option found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem
                                value="NA"
                                onSelect={() => {
                                    resetFilter();
                                    setOpen(false);
                                }}
                            >
                                All
                                <Check className={cn('ml-auto', filters.letter === '' ? 'opacity-100' : 'opacity-0')} />
                            </CommandItem>
                            {sortOptions.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={(currentValue) => {
                                        const newValue = currentValue === filters.letter ? '' : currentValue;
                                        updateFilters({ letter: newValue });
                                        setOpen(false);
                                    }}
                                >
                                    {option.label}
                                    <Check className={cn('ml-auto', filters.letter === option.value ? 'opacity-100' : 'opacity-0')} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
