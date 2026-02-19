export default function LibraryResultItem({ item }: LibraryResultItemProps) {
    return (
        <div
            className="
                group flex flex-col gap-4 border-b p-4 transition-all duration-300
                bg-background
                hover:bg-slate-50/50 hover:shadow-md
                dark:border-slate-800
                dark:hover:bg-slate-900/60 dark:hover:shadow-black/30
                sm:flex-row sm:gap-6 sm:p-6
                md:hover:-translate-y-1
            "
        >
            {/* Left: Book Cover */}
            <div className="w-32 shrink-0">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full rounded-md shadow-sm dark:shadow-black/40"
                />
            </div>

            {/* Right: Content */}
            <a href="/book-detail/1" className="flex-1">
                {/* Title */}
               <h2
    className="
        cursor-pointer text-lg font-semibold
        hover:underline
        dark:text-amber-400 dark:hover:text-amber-300
    "
>
    {item.title}
</h2>


                {/* Authors */}
                <div className="mt-1 text-sm text-foreground/80 dark:text-slate-300">
                    <span className="font-semibold text-foreground dark:text-slate-200">
                        Authors:
                    </span>{' '}
                    {item.authors.map((author, index) => (
                        <span
                            key={author}
                            className="
                                cursor-pointer text-blue-600 hover:underline
                                dark:text-amber-400 dark:hover:text-amber-300
                            "
                        >
                            {author}
                            {index < item.authors.length - 1 && ', '}
                        </span>
                    ))}
                </div>

                {/* Summary */}
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground dark:text-slate-400">
                    <span className="font-semibold text-foreground dark:text-slate-200">
                        Description:
                    </span>{' '}
                    {item.summary}
                </p>

                <button
                    className="
                        mt-1 flex items-center gap-1 text-sm
                        text-blue-600 hover:underline
                        dark:text-amber-400 dark:hover:text-amber-300
                    "
                >
                    Show more
                </button>

                {/* Metadata */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-foreground/80 dark:text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-foreground dark:text-slate-200">
                        📘 {item.format ?? 'eBook'}
                    </span>
                    <span>
                        {item.language}, {item.year}
                    </span>
                </div>

                {/* Publisher */}
                <div className="mt-2 text-sm text-foreground/80 dark:text-slate-400">
                    <span className="font-semibold text-foreground dark:text-slate-200">
                        Publisher:
                    </span>{' '}
                    {item.publisher}
                    {item.location && `, ${item.location}`}
                </div>
            </a>
        </div>
    );
}
