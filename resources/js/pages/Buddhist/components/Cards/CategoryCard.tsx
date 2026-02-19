import BuddhistCardHoverGradient from '@/components/Card/BuddhistCardHoverGradient';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import ViewMore from '../Buttons/ViewMore';

export function CategoryWithPosts() {
    const { categoryWithPostsData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <div className="section-container space-y-4 py-10">
            {categoryWithPostsData.map((section: any) => (
                <div className="space-y-4 rounded-2xl bg-background lg:px-4 lg:py-5">
                    <div key={section.id}>
                        {/* Section header */}
                        <div className="flex items-center justify-between px-5">
                            <h1 className="text-xl font-medium text-primary dark:text-white">
                                {currentLocale === 'kh' ? section?.name_kh || section?.name : section?.name}
                            </h1>
                            <ViewMore href={`/posts?category_code=${section.code}`} />
                        </div>
                        {/* Pass only the sub array into HoverEffect */}
                        <>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {section?.posts?.map((item: any) => (
                                    <BuddhistCardHoverGradient key={item.id} item={item} />
                                ))}
                            </div>
                        </>
                    </div>
                </div>
            ))}
        </div>
    );
}
