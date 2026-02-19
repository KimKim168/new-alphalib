import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';

const VideoSessions = () => {
    const { allVideos, videoHeader } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    const headerTitle = currentLocale === 'kh' ? videoHeader?.name_kh || videoHeader?.name : videoHeader?.name;

    return (
        <section id="video" className="section-container">
            <h2 className="mb-6 text-center text-2xl font-bold leading-tight text-gray-900 lg:text-[28px]">{headerTitle}</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {allVideos?.map((video, index) => {
                    const videoTitle = currentLocale === 'kh' ? video?.name_kh || video?.name : video?.name;

                    return (
                        <Link
                            href={`/videos/${video?.id}`}
                            key={index}
                            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Thumbnail */}
                            <div className="group relative flex aspect-video items-center justify-center">
                                <img
                                    src={`/assets/images/videos/${video?.thumbnail}`}
                                    className="absolute inset-0 aspect-video h-full object-cover"
                                />
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">
                                    <svg className="ml-0.5 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="p-4">
                                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">{videoTitle}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default VideoSessions;
