import PaginationTabs from '@/components/Pagination/PaginationTabs';
import LibrarySearch from '@/components/Search/LibrarySearch';
import ResourceList from '@/components/Section/ResourceList';
import ResourceMainCategory from '@/components/Section/ResourceMainCategory';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ELibraryLayout from '@/layouts/ELibraryLayout';

const Index = () => {
    return (
        <ELibraryLayout>
            <section className="section-container mb-40">
                <div className="my-4">
                    {/* <ResourceBreadcrumb /> */}
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Resources</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex gap-6">
                    <div className="w-58">
                        <ResourceMainCategory />
                    </div>
                    <div className="flex-1">
                        <div className="mb-6">
                            <LibrarySearch />
                        </div>
                        <ResourceList className="lg:grid-cols-4" />
                        <PaginationTabs />
                    </div>
                </div>
            </section>
        </ELibraryLayout>
    );
};

export default Index;
