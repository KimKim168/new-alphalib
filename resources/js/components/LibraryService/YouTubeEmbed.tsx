export default function YouTubeEmbed({ url }) {
    if (!url) return null;

    let embedUrl = '';

    try {
        // Already an embed URL ✅
        if (url.includes('/embed/')) {
            embedUrl = url;
        }
        // youtu.be format
        else if (url.includes('youtu.be/')) {
            const id = url.split('youtu.be/')[1]?.split('?')[0];
            embedUrl = `https://www.youtube.com/embed/${id}`;
        }
        // watch?v= format
        else if (url.includes('watch?v=')) {
            const parsed = new URL(url);
            const id = parsed.searchParams.get('v');
            embedUrl = `https://www.youtube.com/embed/${id}`;
        }
    } catch {
        return null;
    }

    if (!embedUrl) return null;

    return (
        <div className="relative h-0 overflow-hidden rounded-xl bg-black pb-[56.25%] shadow-lg">
            <iframe
                className="absolute inset-0 h-full w-full"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
