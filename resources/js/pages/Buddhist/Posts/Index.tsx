import RefreshButton from '@/components/Button/RefreshButton';
import PaginationTabs from '@/components/Pagination/PaginationTabs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Layout from '../Layout';
import LeftCategorySidebarSheet from './LeftCategorySidebarSheet';
import PostSearch from './PostSearch';
import { SortBySelect } from './SortBySelect';
import TableData from './TableData';

const Index = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(true);
    const { t, currentLocale } = useTranslation();
    const { selected_category } = usePage<any>().props;

    return (
        <Layout>
            <section className="section-container mb-40">
                <div className="my-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{t('Home')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="font-medium text-foreground" href="/posts">
                                    {currentLocale === 'kh' ? selected_category?.name_kh || selected_category?.name : selected_category?.name}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex">
                    {/* <div className={`hidden transition-all duration-300 ease-in-out md:block ${isShowSidebar ? 'mr-6 w-58' : 'w-0 overflow-hidden'}`}>
                        <LeftCategorySidebar />
                    </div> */}
                    <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                            {/* Left Action Header */}
                            <div className="flex flex-1 items-center gap-2">
                                {/* Show Or Hide Sidebar Button Trigger */}
                                {/* <TooltipButton tooltip={isShowSidebar ? 'Hide Filter' : 'Show Filter'}>
                                    <Button
                                        onClick={() => setIsShowSidebar(!isShowSidebar)}
                                        variant="ghost"
                                        size="icon"
                                        className="hidden size-14 rounded-full bg-muted text-primary hover:bg-primary hover:text-white md:flex"
                                    >
                                        <SlidersHorizontalIcon className="h-5 w-5" />
                                    </Button>
                                </TooltipButton> */}
                                {/* Show Or Hide Sidebar Sheet Button Trigger */}
                                <LeftCategorySidebarSheet className="md:hidden" />
                                {/* Search Input */}
                                <div className="max-w-xl flex-1">
                                    <PostSearch />
                                </div>
                            </div>

                            {/* Right Action Header */}
                            <div className="flex w-full items-center justify-end gap-2 md:w-auto">
                                <RefreshButton className="size-[54px] rounded-full" />
                                <SortBySelect />
                            </div>
                        </div>
                        <TableData />
                        <PaginationTabs perPageList={[12, 22, 52, 102, 202]} containerClassName="px-0" />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Index;
