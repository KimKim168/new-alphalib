import OurCoreValueData from '@/components/Banalai/OurCoreValueData';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import AboutBanalai from './AboutBanalai';
import BanalaiLayout from './Layout';
import StorySection from './StorySection';

const About = () => {
    const { ourCoreValueData, bottom } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    return (
        <BanalaiLayout>
            <AboutBanalai />
            <StorySection />
            <OurCoreValueData features={ourCoreValueData} />
            {/* CTA */}
            <div className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mt-20 rounded-2xl bg-[linear-gradient(92deg,#4f46e5,#4a4ae6,#454de7,#3f51e7,#3a55e8,#3558e9,#305cea,#2a5fea,#2563eb,#335deb,#4157eb,#4e51eb,#5c4beb,#6a45ea,#783fea,#8539ea,#9333ea)] p-8 text-center text-white sm:p-12">
                    <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{currentLocale === 'kh' ? bottom?.name_kh || bottom?.name : bottom?.name}</h2>
                    <p
                        className="mx-auto mb-8 max-w-2xl text-lg text-indigo-100"
                        dangerouslySetInnerHTML={{
                            __html: currentLocale === 'kh' ? bottom?.short_description_kh || bottom?.short_description : bottom?.short_description,
                        }}
                    ></p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href={bottom?.link}
                            className="rounded-lg bg-white px-8 py-4 font-semibold text-indigo-600 shadow-lg transition-colors hover:bg-gray-100 hover:shadow-xl"
                        >
                            {currentLocale === 'kh' ? bottom?.button_title_kh || bottom?.button_title : bottom?.button_title}
                        </a>
                        <a
                            href="/pricing"
                            className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            View Pricing
                        </a>
                    </div>
                </div>
            </div>
        </BanalaiLayout>
    );
};

export default About;
