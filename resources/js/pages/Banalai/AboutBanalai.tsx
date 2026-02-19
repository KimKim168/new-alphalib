import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const AboutBanalai = () => {
    const { aboutHeader, ourMission } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    const imgBgColors = [
        'bg-[linear-gradient(123deg,#6366f1,#6160f2,#5e5bf2,#5c55f3,#5950f4,#574af4,#5444f5,#523ff5,#4f39f6)]',
        'bg-[linear-gradient(123deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)]',
        'bg-[linear-gradient(123deg,#facc15,#f8c913,#f6c612,#f4c310,#f2c00f,#f0bc0d,#eeb90b,#ecb60a,#eab308)]',
    ];

    return (
        <section className="bg-white px-4 pt-32 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                        {currentLocale === 'kh' ? aboutHeader?.name_kh || aboutHeader?.name : aboutHeader?.name}
                    </h1>

                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        {currentLocale === 'kh'
                            ? aboutHeader?.short_description_kh || aboutHeader?.short_description
                            : aboutHeader?.short_description}
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                            {currentLocale === 'kh' ? ourMission?.name_kh || ourMission?.name : ourMission?.name}
                        </h2>

                        <div
                            className="mb-4 text-lg leading-relaxed text-gray-600"
                            dangerouslySetInnerHTML={{
                                __html:
                                    currentLocale === 'kh'
                                        ? ourMission?.long_description_kh || ourMission?.long_description
                                        : ourMission?.long_description,
                            }}
                        />
                    </div>

                    {/* Right */}
                    <div className="rounded-2xl bg-[linear-gradient(123deg,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#eff6ff,#f0f6ff,#f2f6ff,#f3f6ff,#f5f6ff,#f6f5ff,#f7f5ff,#f9f5ff,#faf5ff)] p-8 shadow-lg">
                        <div className="space-y-6">
                            {ourMission?.children?.map((item: any, index: number) => (
                                <div key={item.id} className="flex items-start">
                                    {/* Icon */}
                                    <div
                                        className={`mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${imgBgColors[index % imgBgColors.length]} `}
                                    >
                                        {item.icon ? (
                                            <img src={`/assets/images/pages/${item.icon}`} alt={item.name} className="h-6 w-6" />
                                        ) : (
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                            {currentLocale === 'kh' ? item?.name_kh || item?.name : item?.name}
                                        </h3>

                                        <p className="text-gray-600">
                                            {currentLocale === 'kh' ? item?.short_description_kh || item?.short_description : item?.short_description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanalai;
