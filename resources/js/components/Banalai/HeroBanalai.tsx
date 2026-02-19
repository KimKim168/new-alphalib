import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const HeroBanalai = () => {
    const { hero } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    return (
        <section id="home" className="bg-white px-4 pt-24 md:pb-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h1 className="mb-6 text-2xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-4xl">
                            {currentLocale === 'kh' ? hero?.name_kh || hero?.name : hero?.name}
                            <div className="bg-[linear-gradient(88deg,#155dfc,#1c59fb,#2454fb,#2b50fa,#324bf9,#3947f8,#4142f8,#483ef7,#4f39f6,#5834f7,#612ff7,#6a2af8,#7425f8,#7d1ff9,#861af9,#8f15fa,#9810fa)] bg-clip-text text-transparent" dangerouslySetInnerHTML={{__html:currentLocale === 'kh' ? hero?.short_description_kh || hero?.short_description : hero?.short_description}}>
                                
                            </div>
                        </h1>

                        <p
                            className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl"
                            dangerouslySetInnerHTML={{
                                __html: currentLocale === 'kh' ? hero?.long_description_kh || hero?.long_description : hero?.long_description,
                            }}
                        />

                        <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/banalai_register"
                                className="w-full rounded-lg bg-[linear-gradient(88deg,#155dfc,#1c59fb,#2454fb,#2b50fa,#324bf9,#3947f8,#4142f8,#483ef7,#4f39f6,#5834f7,#612ff7,#6a2af8,#7425f8,#7d1ff9,#861af9,#8f15fa,#9810fa)] px-6 py-4 text-center font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
                            >
                                {t('Get Started')}
                            </Link>

                            <Link
                                href="/support"
                                className="w-full rounded-lg border border-gray-300 bg-white px-6 py-4 text-center font-semibold text-gray-700 shadow-md transition-colors hover:bg-gray-50 hover:shadow-lg sm:w-auto"
                            >
                               {t('Demo')}
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2">
                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl shadow-md">
                                <img
                                    src={`/assets/images/pages/${hero?.images?.[0]?.image}`}
                                    alt="People collaborating with digital library resources"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanalai;
