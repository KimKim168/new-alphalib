import PaginationTabs from '@/components/Pagination/PaginationTabs';
import useTranslation from '@/hooks/use-translation';
import { useState } from 'react';
import BookCamboLayout from '../BookCamboLayout';
import BookSearch from './BookSearch';
import BookSidebar from './BookSidebar';
import BookSidebarSheet from './BookSidebarSheet';
import BookSortBySelect from './BookSortBySelect';
import TableData from './TableData';

const Index = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(true);
    const { t, currentLocale } = useTranslation();
    return (
        <BookCamboLayout>
            <section className="section-container mb-40">
                {/* <div className="my-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">{t('Home')}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-foreground font-medium' href="/books">{t('Books')}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div> */}
                <div className="flex max-w-full flex-1 items-center gap-2 py-4">
                    <BookSidebarSheet className="size-11 md:hidden" />
                    <BookSearch />
                </div>
                <div className="flex">
                    <div className={`hidden transition-all duration-300 ease-in-out md:block ${isShowSidebar ? 'mr-6 w-58' : 'w-0 overflow-hidden'}`}>
                        <BookSidebar />
                    </div>
                    <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b-4 border-primary pb-2">
                            <div className="flex flex-1 items-center gap-2">
                                <div>
                                    <p className="text-lg font-bold text-primary">{t("Books")}</p>
                                </div>
                            </div>
                            <BookSortBySelect />
                        </div>
                        <TableData />
                        <PaginationTabs perPageList={[16, 32, 64, 128]} containerClassName="px-0" />
                    </div>
                </div>
            </section>
        </BookCamboLayout>
    );
};

export default Index;
