import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/radix/accordion';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';
import { RotateCwIcon } from 'lucide-react';
import { useState } from 'react';
import LibrarySidebarList from './LibrarySidebarList';

/* =========================
   STATIC FILTER DATA
========================= */

// Author / Creator
// Libraries / Library Types
const libraries = [
    { value: 'national_library', label: 'National Library' },
    { value: 'public_library', label: 'Public Library' },
    { value: 'school_library', label: 'School Library' },
    { value: 'university_library', label: 'University Library' },
    { value: 'research_library', label: 'Research Library' },
    { value: 'digital_library', label: 'Digital / E-Library' },
    { value: 'community_library', label: 'Community Library' },
    { value: 'private_library', label: 'Private Library' },
];

const authorCreators = [
    { value: 'unknown', label: 'Unknown Author' },
    { value: 'local', label: 'Local Author' },
    { value: 'international', label: 'International Author' },
    { value: 'government', label: 'Government / Ministry' },
    { value: 'ngo', label: 'NGO / Organization' },
    { value: 'university', label: 'University / Research Institute' },
];

// Publication Year (Custom Range)
const publicationYears = [
    { value: 'before_2000', label: 'Before 2000' },
    { value: '2000_2005', label: '2000 – 2005' },
    { value: '2006_2010', label: '2006 – 2010' },
    { value: '2011_2015', label: '2011 – 2015' },
    { value: '2016_2020', label: '2016 – 2020' },
    { value: '2021_2023', label: '2021 – 2023' },
    { value: '2024_present', label: '2024 – Present' },
];

// Subject
const subjects = [
    { value: 'education', label: 'Education' },
    { value: 'technology', label: 'Technology' },
    { value: 'science', label: 'Science' },
    { value: 'history', label: 'History' },
    { value: 'literature', label: 'Literature' },
    { value: 'religion', label: 'Religion' },
    { value: 'law', label: 'Law' },
    { value: 'health', label: 'Health' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'children', label: 'Children Books' },
];

export default function LibrarySidebar() {
    const { libraryTypes, fundingTypes, classTypes, provincesData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const initialQueryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();

    const [filters, setFilters] = useState({
        library_type_code: initialQueryParams.get('library_type_code') || '',
        library_code: initialQueryParams.get('library_code') || '',
        source_of_funding_type_code: initialQueryParams.get('source_of_funding_type_code') || '',
        class_type_code: initialQueryParams.get('class_type_code') || '',
        province_code: initialQueryParams.get('province_code') || '',

        // 🔹 New filters
        author_creator: initialQueryParams.get('author_creator') || '',
        publication_year: initialQueryParams.get('publication_year') || '',
        subject: initialQueryParams.get('subject') || '',
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
            if (value) queryParams.set(key, value);
            else queryParams.delete(key);
        });

        queryParams.set('page', '1');

        router.get(
            `${currentPath}?${queryParams.toString()}`,
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const resetFilter = () =>
        updateFilters({
            library_type_code: '',
            source_of_funding_type_code: '',
            class_type_code: '',
            province_code: '',
            author_creator: '',
            publication_year: '',
            subject: '',
        });

    return (
        <>
            <Accordion
                type="multiple"
                defaultValue={['library','funding', 'types', 'classes', 'provinces', 'author', 'year', 'subject']}
                className={cn('w-full rounded-lg border px-4', Object.values(filters).some(Boolean) && 'border-primary ring-4 ring-primary/20')}
            >
                {/* Library */}
                <AccordionItem value="library">
                    <AccordionTrigger className="font-semibold">{t('Library')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Libraries')}
                            value={filters.library_code}
                            onChange={(val) => updateFilters({ library_code: val })}
                            options={libraries}
                        />
                    </AccordionContent>
                </AccordionItem>

                {/* Author */}
                <AccordionItem value="author">
                    <AccordionTrigger className="font-semibold">{t('Author / Creator')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Authors')}
                            value={filters.author_creator}
                            onChange={(val) => updateFilters({ author_creator: val })}
                            options={authorCreators}
                        />
                    </AccordionContent>
                </AccordionItem>

                {/* Publication Year */}
                <AccordionItem value="year">
                    <AccordionTrigger className="font-semibold">{t('Publication Year')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Years')}
                            value={filters.publication_year}
                            onChange={(val) => updateFilters({ publication_year: val })}
                            options={publicationYears}
                        />
                    </AccordionContent>
                </AccordionItem>

                {/* Subject */}
                <AccordionItem value="subject" className="border-none">
                    <AccordionTrigger className="font-semibold">{t('Subject')}</AccordionTrigger>
                    <AccordionContent>
                        <LibrarySidebarList
                            heading={t('All Subjects')}
                            value={filters.subject}
                            onChange={(val) => updateFilters({ subject: val })}
                            options={subjects}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="flex justify-end">
                <button onClick={resetFilter} className="mt-2 flex items-center gap-2 rounded-md p-2 hover:bg-muted hover:underline">
                    <RotateCwIcon size={18} /> {t('Clear Filter')}
                </button>
            </div>
        </>
    );
}
