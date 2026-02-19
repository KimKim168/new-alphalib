import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

export default function FreePlanSection() {
    const { bottom } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section className="bg-[linear-gradient(330deg,#e5eeff,#f0fff0)] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                    {currentLocale === 'kh' ? bottom?.name_kh || bottom?.name : bottom?.name}
                </h2>
                <p
                    className="mb-8 text-xl leading-relaxed text-gray-600"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? bottom?.short_description_kh || bottom?.short_description : bottom?.short_description,
                    }}
                />

                <div
                    className="mb-8 rounded-xl border border-gray-100 bg-white p-8 shadow-lg"
                    dangerouslySetInnerHTML={{
                        __html: currentLocale === 'kh' ? bottom?.long_description_kh || bottom?.long_description : bottom?.long_description,
                    }}
                ></div>

                <a
                    href={bottom?.link}
                    className="inline-block transform rounded-lg bg-[linear-gradient(88deg,#22c55e,#21c15c,#1fbd59,#1eb857,#1cb454,#1bb052,#19ac4f,#18a74d,#16a34a)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-green-600 hover:to-green-700 hover:shadow-xl"
                >
                    {currentLocale === 'kh' ? bottom?.button_title_kh || bottom?.button_title : bottom?.button_title}
                </a>
            </div>
        </section>
    );
}
