import { Link, usePage } from '@inertiajs/react';
import VideoFilePlayer from './VideoFilePlayer';
import YouTubeEmbed from './YouTubeEmbed';
import useTranslation from '@/hooks/use-translation';

const Hero = () => {
    const { heroVideo } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();

    const title =
        currentLocale === 'kh'
            ? heroVideo?.name_kh || heroVideo?.name
            : heroVideo?.name;

    const shortDescription =
        currentLocale === 'kh'
            ? heroVideo?.short_description_kh || heroVideo?.short_description
            : heroVideo?.short_description;

    const longDescription =
        currentLocale === 'kh'
            ? heroVideo?.long_description_kh || heroVideo?.long_description
            : heroVideo?.long_description;

    return (
        <section className="section-container pt-24 pb-10">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                {/* Left Section */}
                <div>
                    <h1 className="mb-2 lg:mb-2 text-2xl font-bold leading-tight text-gray-900 lg:text-[28px] max-w-lg">
                        {title}{' '}
                        <span className="text-purple-600">
                            {shortDescription}
                        </span>
                    </h1>

                    <p
                        className="mb-2 lg:mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl"
                        dangerouslySetInnerHTML={{ __html: longDescription }}
                    />

                    <div className=" flex flex-wrap gap-4">
                        <Link href={`/how_to`} className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 lg:px-8 lg:py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
                            {t('Explore Tutorial')}
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="relative">
                    <div className="overflow-hidden rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                        {heroVideo?.file_type_code === 'video-file' && (
                            <VideoFilePlayer
                                src={
                                    heroVideo?.files?.[0]?.file_name
                                        ? `/assets/files/videos/${heroVideo.files[0].file_name}`
                                        : ''
                                }
                            />
                        )}

                        {heroVideo?.file_type_code === 'video-youtube-url' &&
                            heroVideo?.external_link && (
                                <YouTubeEmbed url={heroVideo.external_link} />
                            )}
                    </div>

                    <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-purple-200 to-indigo-200 opacity-20" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
