import UploadedFile from '@/components/Form/UploadedFileDisplay';
import PostmagesGallery from '@/components/GalleryViewer/PostmagesGallery';
import HtmlContentDisplay from '@/components/Typography/HtmlContentDisplay';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import BookCamboLayout from '../BookCamboLayout';
import PostCarousel from '../Components/PostCarousel';

const Show = ({ post }: { post: any }) => {
    const { posts, locale } = usePage<any>().props;
    const { t } = useTranslation();
    return (
        <BookCamboLayout>
            <ScrollProgress className="top-[0px] h-[2px]" />
            <div className="section-container relative z-10 mx-auto flex">
                <div className="section-container pointer-events-none absolute left-1/2 mx-auto h-full w-[calc(100%-2rem)] -translate-x-1/2 p-0 lg:w-full" />
                <main className="overflow-hidden pb-20 dark:prose-invert prose-h2:mb-0.5 prose-h3:mb-0.5 prose-p:m-0 prose-ul:m-0">
                    {/* <div className="py-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Posts</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{post.title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div> */}
                    <div className="mb-4">
                        <img className="w-full" src={`/assets/images/posts/${post.thumbnail}`} alt="" />
                    </div>
                    <HtmlContentDisplay content={locale === 'kh' ? (post.long_description_kh ?? post.long_description) : post.long_description} />
                    <div>
                        {post.images?.length > 0 && <PostmagesGallery label={t('Images')} images={post.images} basePath="/assets/images/posts/" />}
                        {post.files?.length > 0 && <UploadedFile label={t('Files')} files={post.files} basePath="/assets/files/posts/" />}
                    </div>
                </main>
            </div>

            {posts?.length > 0 && (
                <div className="section-container mb-20">
                    <p className="pb-2 text-2xl">{t('Related')}</p>
                    <PostCarousel />
                </div>
            )}
        </BookCamboLayout>
    );
};

export default Show;
