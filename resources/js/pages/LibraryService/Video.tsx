import VideoFilePlayer from '@/components/LibraryService/VideoFilePlayer';
import YouTubeEmbed from '@/components/LibraryService/YouTubeEmbed';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    Eye,
    VideoIcon,
    Play,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import LibraryServiceLayout from './LibraryServiceLayout';

/* ---------------- Utils ---------------- */

const timeAgo = (dateString: string, locale: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now.getTime() - past.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    const kh = {
        year: 'ឆ្នាំ',
        month: 'ខែ',
        week: 'សប្តាហ៍',
        day: 'ថ្ងៃ',
        hour: 'ម៉ោង',
        minute: 'នាទី',
        ago: 'មុន',
        now: 'ទើបតែ',
    };

    if (locale === 'kh') {
        if (years > 0) return `${years} ${kh.year} ${kh.ago}`;
        if (months > 0) return `${months} ${kh.month} ${kh.ago}`;
        if (weeks > 0) return `${weeks} ${kh.week} ${kh.ago}`;
        if (days > 0) return `${days} ${kh.day} ${kh.ago}`;
        if (hours > 0) return `${hours} ${kh.hour} ${kh.ago}`;
        if (minutes > 0) return `${minutes} ${kh.minute} ${kh.ago}`;
        return kh.now;
    }

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

    return 'Just now';
};

/* ---------------- Page ---------------- */

const Video = () => {
    const { showVideoData, relatedVideoData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    const mainVideo = showVideoData;

    const videoRefs = useRef<Record<number, HTMLAnchorElement | null>>({});

    useEffect(() => {
        const activeEl = videoRefs.current[mainVideo?.id];
        if (activeEl) {
            activeEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [mainVideo?.id]);

    const title =
        currentLocale === 'kh'
            ? mainVideo?.name_kh || mainVideo?.name
            : mainVideo?.name;

    const description =
        currentLocale === 'kh'
            ? mainVideo?.long_description_kh || mainVideo?.long_description
            : mainVideo?.long_description;

    return (
        <LibraryServiceLayout>
            <section className="pt-20 pb-8">
                <div className="section-container">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <Breadcrumb className="inline-block rounded-2xl p-1 backdrop-blur">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/#video">
                                            {t('Back to videos')}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/how_to">
                                            {t('Categories')}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="rounded-xl bg-indigo-600 px-4 py-2">
                                    <BreadcrumbPage className="text-sm font-medium text-white">
                                        {title}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="items-start lg:grid lg:grid-cols-3 lg:gap-8">
                        {/* Main Video */}
                        <div className="mb-8 lg:col-span-2">
                            {mainVideo?.file_type_code === 'video-file' && (
                                <VideoFilePlayer
                                    src={
                                        mainVideo?.files?.[0]?.file_name
                                            ? `/assets/files/videos/${mainVideo.files[0].file_name}`
                                            : ''
                                    }
                                />
                            )}

                            {mainVideo?.file_type_code ===
                                'video-youtube-url' &&
                                mainVideo?.external_link && (
                                    <YouTubeEmbed
                                        url={mainVideo.external_link}
                                    />
                                )}

                            <h1 className="my-4 text-2xl font-bold">
                                {title}
                            </h1>

                            <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
                                {mainVideo?.minute && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 text-primary" />
                                        {mainVideo.minute}
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Eye className="w-5 text-primary" />
                                    {mainVideo.total_view_count} {t('views')}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 text-primary" />
                                    {new Date(
                                        mainVideo.created_at
                                    ).toLocaleDateString()}
                                </div>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-6">
                                <h2 className="mb-3 text-xl font-bold">
                                    {t('Description')}
                                </h2>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Related Videos */}
                        <div className="lg:col-span-1">
                            <div className="rounded-xl border lg:sticky lg:top-32">
                                <div className="rounded-t-xl bg-indigo-600 py-3 text-center text-white">
                                    <p>{t('Related Videos')}</p>
                                    <div className="flex justify-center gap-2 text-sm">
                                        <VideoIcon className="w-4" />
                                        {relatedVideoData?.length}{' '}
                                        {t('videos')}
                                    </div>
                                </div>

                                <div className="max-h-[388px] overflow-y-auto pb-2">
                                    {relatedVideoData?.map((video: any) => {
                                        const isActive =
                                            mainVideo.id === video.id;

                                        const videoTitle =
                                            currentLocale === 'kh'
                                                ? video?.name_kh ||
                                                  video?.name
                                                : video?.name;

                                        return (
                                            <Link
                                                key={video.id}
                                                ref={(el) =>
                                                    (videoRefs.current[
                                                        video.id
                                                    ] = el)
                                                }
                                                href={`/videos/${video.id}`}
                                                className={`group relative flex gap-3 px-4 py-3 transition 
                                                    ${
                                                        isActive
                                                            ? 'bg-primary/10 text-indigo-600'
                                                            : 'hover:bg-gray-100'
                                                    }
                                                `}
                                            >
                                                {isActive && (
                                                    <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r" />
                                                )}

                                                <div className="relative aspect-video w-32 overflow-hidden rounded">
                                                    <img
                                                        src={`/assets/images/videos/${video.thumbnail}`}
                                                        alt={videoTitle}
                                                        className="h-full w-full object-cover"
                                                    />
                                                    {isActive && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                            <Play className="w-6 h-6 text-white" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="line-clamp-2 text-sm font-medium">
                                                        {videoTitle}
                                                    </h3>
                                                    <div className="mt-1 text-xs text-gray-600">
                                                        {
                                                            video.total_view_count
                                                        }{' '}
                                                        {t('views')} •{' '}
                                                        {timeAgo(
                                                            video.created_at,
                                                            currentLocale
                                                        )}
                                                    </div>

                                                    {isActive && (
                                                        <div className="mt-1 text-xs font-semibold text-indigo-600">
                                                            ▶ Now playing
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LibraryServiceLayout>
    );
};

export default Video;
