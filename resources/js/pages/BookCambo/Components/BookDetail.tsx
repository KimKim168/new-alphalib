import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { BadgeCheckIcon } from 'lucide-react';
import { useState } from 'react';

export function RowRecord({ label, value }: { label: string; value?: string }) {
    if (!value) return null; // skip empty values
    return (
        <div className="flex gap-4 px-4 py-3">
            <p className="w-20 font-medium text-gray-700 dark:text-gray-300">{label}</p>
            <p className="text-gray-600 dark:text-gray-400">{value}</p>
        </div>
    );
}

export default function BookDetail() {
    const { showData } = usePage<any>().props;
    const [showAll, setShowAll] = useState(false);
    const { t } = useTranslation();

    // Data fields (order matters)
    const records = [
        { label: 'ISBN', value: showData.isbn },
        { label: 'EISBN', value: showData.eisbn },
        { label: 'DOI', value: showData.doi },
        { label: 'DDC', value: showData.ddc },
        { label: 'LCC', value: showData.lcc },
    ].filter((record) => record.value); // only show non-empty ones

    // Show first 2 by default
    const visibleRecords = showAll ? records : records.slice(0, 2);

    return (
        <div>
            {visibleRecords?.length > 0 && (
                <>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h3 className="my-4 text-lg font-bold text-gray-900 dark:text-white">{t('Book Details')} </h3>
                            <BadgeCheckIcon className="size-5 text-blue-800" />
                        </div>
                        {/* <a href="#">
                                        <Download className="size-5 hover:text-blue-800" />
                                    </a> */}
                    </div>
                    <div className="mx-auto w-full max-w-md">
                        <ul className="divide-y divide-gray-200 overflow-hidden dark:divide-gray-700">
                            {visibleRecords.map((record, idx) => (
                                <RowRecord key={idx} label={record.label} value={record.value} />
                            ))}
                        </ul>

                        {records.length > 2 && (
                            <div className="mt-2 flex justify-center">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="text-sm font-medium text-[#104674] hover:underline dark:text-blue-400"
                                >
                                    {showAll ? t('Show Less') : t('Show All')}
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
