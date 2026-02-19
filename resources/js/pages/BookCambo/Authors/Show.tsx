import AvatarLogoFallback from '@/components/Avatar/AvatarLogoFallback';
import PaginationTabs from '@/components/Pagination/PaginationTabs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePage } from '@inertiajs/react';
import { MailIcon, SmartphoneIcon } from 'lucide-react';
import BookCamboLayout from '../BookCamboLayout';
import Authorinfo from './Authorinfo';
import TableData from './TableData';
import useTranslation from '@/hooks/use-translation';

const Show = () => {
    const { showData } = usePage<any>().props;
    const { t } = useTranslation();

    return (
        <BookCamboLayout>
            <div className="section-container relative mt-2 rounded outline-hidden">
                {/* Banner Image */}
                <div className="aspect-[21/5] overflow-hidden">
                    <AvatarLogoFallback
                        className="h-full w-full rounded-none object-cover"
                        fallbackClassName="rounded-none"
                        alt={showData?.library_data?.name_of_library}
                        image={`/assets/images/users/thumb/${showData.banner}`}
                    />
                    {/* <img src="/assets/sample_images/banners/library_banner.jpg" alt="Library Banner" className="h-full w-full object-cover" /> */}
                </div>

                <div className="bottom-0 left-0 flex gap-4 rounded pt-6 text-foreground md:absolute md:right-0 md:mx-4 md:bg-gradient-to-t md:from-black/70 md:to-transparent md:p-6 md:pt-20 md:text-white">
                    <AvatarLogoFallback
                        className="size-20 rounded-full border-4 border-white bg-white object-cover shadow md:size-24"
                        alt={showData?.name}
                        image={
                            showData?.library_data?.logo
                                ? `/assets/images/library_data/thumb/${showData?.library_data?.logo}`
                                : `/assets/images/users/thumb/${showData?.image}`
                        }
                    />
                    {/* <img
                        src="/assets/book_cambo/seller.png"
                        alt="Library Logo"
                        className="size-20 rounded-full border-4 border-white object-cover shadow md:size-24"
                    /> */}
                    {/* Info */}
                    <div className="space-y-1 text-left text-sm md:space-y-2 md:text-base">
                        <h1 className="text-lg font-bold md:text-2xl"> {showData.library_data?.name_of_library || showData?.name}</h1>
                        {showData.phone && (
                            <p className="flex items-center gap-2">
                                <SmartphoneIcon size={18} />
                                {showData.library_data?.phone || showData?.phone}
                            </p>
                        )}
                        {showData.email && (
                            <p className="flex items-center gap-2">
                                <MailIcon size={18} /> {showData.library_data?.email || showData?.email}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="section-container mb-20">
                <Tabs defaultValue="about" className="w-full">
                    <TabsList className="my-6 w-full justify-start rounded-none border-b bg-background p-0">
                        <TabsTrigger
                            value="about"
                            className="h-full rounded-none border-b-2 border-transparent bg-background text-lg data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                            {t('Books')}
                        </TabsTrigger>
                        <TabsTrigger
                            value="infos"
                            className="h-full rounded-none border-b-2 border-transparent bg-background text-lg data-[state=active]:border-primary data-[state=active]:shadow-none"
                        >
                            {t('Infos')}
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="about">
                        <div className="flex-1">
                            <TableData />
                            <PaginationTabs perPageList={[16, 32, 64, 128]} containerClassName="px-0" />
                        </div>
                    </TabsContent>
                    <TabsContent value="infos">
                        <Authorinfo />
                    </TabsContent>
                </Tabs>
            </div>
        </BookCamboLayout>
    );
};

export default Show;
