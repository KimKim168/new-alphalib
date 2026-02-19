import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const StorySection = () => {
    const { ourStory } = usePage<any>().props;
    const { currentLocale } = useTranslation();
    return (
        <div className="mx-auto mb-20 max-w-7xl rounded-2xl bg-[linear-gradient(99deg,#f9fafb,#f8fafc,#f7f9fc,#f5f9fd,#f4f8fd,#f3f8fe,#f2f7fe,#f0f7ff,#eff6ff)] p-8 sm:p-12">
            <div className="mx-auto max-w-4xl">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
                    {currentLocale === 'kh' ? ourStory?.name_kh || ourStory?.name : ourStory?.name}
                </h2>

                <div
                    className="space-y-6 text-lg leading-relaxed text-gray-600"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? ourStory?.long_description_kh || ourStory?.long_description : ourStory?.long_description,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default StorySection;
