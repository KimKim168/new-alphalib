import NoDataDisplay from '@/components/NoDataDisplay';
import { Link, usePage } from '@inertiajs/react';

const TableData = () => {
    const { tableData } = usePage<any>().props;

    return (
        <>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
                {tableData?.data?.map((item: any) => (
                    <>
                        {/* <LibraryCardHoverGradient key={item.id} item={item} /> */}
                        <Link href={`/items/${item.id}`}>
                            <div className="group relative w-full overflow-hidden rounded border shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-300/50 dark:bg-black dark:shadow-black/20 dark:hover:border-gray-700 dark:hover:shadow-black/40">
                                <img src={`/assets/images/items/thumb/${item.thumbnail}`} alt="" className="aspect-[6/9] w-full object-cover" />
                            </div>
                        </Link>
                    </>
                ))}
            </div>
            <div>{tableData?.data?.length < 1 && <NoDataDisplay />}</div>
        </>
    );
};

export default TableData;
