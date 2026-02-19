import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function PaginationTabs() {
    const { t } = useTranslation();
    const { tableData } = usePage<any>().props;
    const links = tableData?.links || [];

    if(!tableData) return null;

    // Initialize perPage from query param or tableData.per_page
    const getInitialPerPage = () => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('perPage') || tableData.per_page?.toString() || '10';
        }
        return tableData.per_page?.toString() || '10';
    };

    const [rowsPerPage, setRowsPerPage] = useState(getInitialPerPage);

    const queryParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
    queryParams.delete('page');
    const queryString = queryParams.toString();

    const renderLabel = (label: string) => {
        // if (label.includes('Previous') || label.includes('Next')) {
        //     return t(label.replace(/&laquo;|&raquo;/g, '').trim());
        // }
        return label;
    };

    const handleRowsPerPageChange = (value: string) => {
        setRowsPerPage(value);
        queryParams.set('perPage', value);
        queryParams.delete('page'); // reset to first page
        const newQuery = queryParams.toString();
        const url = `${window.location.pathname}?${newQuery}`;
        router.visit(url, { preserveScroll: true });
    };

    return (
        <div className="flex flex-wrap items-center gap-2 p-6">
            <div className="flex items-center gap-2 p-2">
                <Select value={rowsPerPage} onValueChange={handleRowsPerPageChange}>
                    <SelectTrigger className="h-11 cursor-pointer space-x-1 rounded">
                        <SelectValue>{rowsPerPage}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="10">10 Per Page</SelectItem>
                        {tableData.total > 10 && <SelectItem value="20">20 Per Page</SelectItem>}
                        {tableData.total > 20 && <SelectItem value="50">50 Per Page</SelectItem>}
                        {tableData.total > 50 && <SelectItem value="100">100 Per Page</SelectItem>}
                        {tableData.total > 100 && <SelectItem value="200">200 Per Page</SelectItem>}
                    </SelectContent>
                </Select>

                <span className="text-sm whitespace-nowrap text-muted-foreground">
                    {t('Showing')} <span className="font-medium">{tableData.from}</span> {t('to')} <span className="font-medium">{tableData.to}</span>{' '}
                    {t('of')} <b>{tableData.total}</b> {t('results')}
                </span>
            </div>

            <div className="flex w-full max-w-full flex-wrap justify-end gap-2 p-2 lg:flex-1">
                {links.map((item: any, index: number) => (
                    <Link
                        key={item.label + index}
                        preserveScroll
                        href={item.url ? `${item.url}&${queryString}` : '#'}
                        className={cn(
                            'flex h-11 min-w-11 items-center justify-center rounded border px-4 whitespace-nowrap transition-all duration-300',
                            !item.url && 'cursor-not-allowed text-foreground/40',
                            item.url && 'hover:border-primary hover:shadow-[4px_4px_0px_0px] hover:shadow-primary dark:hover:shadow-white',
                            item.active && 'bg-primary text-primary-foreground hover:border-primary-foreground dark:hover:border-black',
                        )}
                    >
                        <span dangerouslySetInnerHTML={{ __html: t(renderLabel(item.label)) }} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
