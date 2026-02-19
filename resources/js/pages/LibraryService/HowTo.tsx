import BuddhistCardHoverGradient from '@/components/Card/BuddhistCardHoverGradient';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import LibraryServiceLayout from './LibraryServiceLayout';

const HowTo = () => {
    const { categoryWithPostsData, header } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const headerTitle =
        currentLocale === 'kh'
            ? header?.name_kh || header?.name
            : header?.name;

    const headerDescription =
        currentLocale === 'kh'
            ? header?.short_description_kh || header?.short_description
            : header?.short_description;

    return (
        <LibraryServiceLayout>
            <div className="mx-auto pt-26 section-container">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-start text-2xl font-bold leading-tight text-gray-900 lg:text-[28px]">
                        {headerTitle}
                    </h2>

                    <div
                        className="mt-2 max-w-5xl text-start text-lg text-gray-500 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: headerDescription }}
                    />
                </div>

                <div className="space-y-6 py-4">
                    {categoryWithPostsData?.map((section: any) => {
                        const sectionTitle =
                            currentLocale === 'kh'
                                ? section?.name_kh || section?.name
                                : section?.name;

                        return (
                            <div
                                key={section.id}
                                className="space-y-4 rounded-2xl bg-background"
                            >
                                {/* Section Header */}
                                <div className="flex items-center justify-between">
                                    <h1 className="text-2xl font-bold leading-tight text-primary dark:text-white">
                                        {sectionTitle}
                                    </h1>
                                </div>

                                {/* Videos Grid */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                                    {section?.videos?.map((video: any) => (
                                        <BuddhistCardHoverGradient
                                            key={video.id}
                                            item={video}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </LibraryServiceLayout>
    );
};

export default HowTo;
