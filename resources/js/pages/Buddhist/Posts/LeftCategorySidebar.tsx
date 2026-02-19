import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import LibrarySidebarList from '@/components/Sidebar/LibrarySidebarList';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import { RotateCwIcon } from 'lucide-react';
import { useState } from 'react';

export default function LeftCategorySidebar() {
    const { post_categories } = usePage<any>().props;

    const { t, currentLocale } = useTranslation();

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

    const [filters, setFilters] = useState({
        category_code: initialQueryParams.get('category_code') || '',
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

    const resetFilter = () =>
        updateFilters({
            category_code: '',
        });

    return (
        <>
            <Accordion
                type="multiple"
                defaultValue={['category']}
                className={cn(
                    'w-full rounded-lg border px-4',
                    Object.values(filters).some((val) => !!val) && 'border-primary ring-4 ring-primary/20',
                )}
            >
                <AccordionItem value="category" key="category" className='border-b-0'>
                    <AccordionTrigger className="pb-2 font-semibold">{t('Category')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            limit={15}
                            heading={t('All Category Source')}
                            value={filters.category_code}
                            key={filters.category_code}
                            onChange={(val) => updateFilters({ category_code: val })}
                            options={post_categories.map((item: any) => ({
                                value: item.code,
                                label: currentLocale === 'kh' ? item.name_kh || item.name : item.name,
                            }))}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex justify-end">
                <button onClick={resetFilter} className="mt-2 flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-muted hover:underline">
                    <RotateCwIcon size={18} /> {t('Clear Filter')}
                </button>
            </div>
        </>
    );
}
