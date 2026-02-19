import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import LibrarySidebarList from '@/components/Sidebar/LibrarySidebarList';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import { RotateCwIcon } from 'lucide-react';
import { useState } from 'react';

export default function BookSidebar() {
    const { categories, authors, publishers } = usePage<any>().props;

    const { t, currentLocale } = useTranslation();

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

    const [filters, setFilters] = useState({
        category_code: initialQueryParams.get('category_code') || '',
        author_id: initialQueryParams.get('author_id') || '',
        publisher_id: initialQueryParams.get('publisher_id') || '',
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
            author_id: '',
            publisher_id: '',
        });

    return (
        <>
            <Accordion
                type="multiple"
                defaultValue={['categories', 'authors', 'publishers']}
                className={cn(
                    'w-full rounded-lg border border-transparent px-4',
                    Object.values(filters).some((val) => !!val) && 'border-primary ring-4 ring-primary/20',
                )}
            >
                <AccordionItem value="categories" key="categories">
                    <AccordionTrigger className="font-semibold">{t('Categories')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Categories')}
                            value={filters.category_code}
                            key={filters.category_code}
                            onChange={(val) => updateFilters({ category_code: val })}
                            options={categories.map((item: any) => ({
                                value: item.code,
                                label: currentLocale === 'kh' ? item.name_kh || item.name : item.name,
                            }))}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="authors" key="authors">
                    <AccordionTrigger className="font-semibold">{t('Authors')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Authors')}
                            value={filters.author_id}
                            key={filters.author_id}
                            onChange={(val) => updateFilters({ author_id: val })}
                            options={authors.map((item: any) => ({
                                value: item.id,
                                label: currentLocale === 'kh' ? item.name_kh || item.name : item.name,
                            }))}
                        />
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="publishers" key="publishers">
                    <AccordionTrigger className="font-semibold">{t('Publishers')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Publishers')}
                            value={filters.publisher_id}
                            key={filters.publisher_id}
                            onChange={(val) => updateFilters({ publisher_id: val })}
                            options={publishers.map((item: any) => ({
                                value: item.id,
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
