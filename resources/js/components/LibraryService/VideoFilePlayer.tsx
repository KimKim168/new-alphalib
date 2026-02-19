export default function VideoFilePlayer({ src }) {
    return (
        <div className="overflow-hidden rounded-xl bg-black shadow-sm">
            <video className="h-auto w-full" controls preload="metadata">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}