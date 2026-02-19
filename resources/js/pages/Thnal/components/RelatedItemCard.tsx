const RelatedItemCard = ({ title, imageUrl, href }) => {
    return (
        <a href={href} className="group block h-full">
            <div className="relative h-full">
                {/* Animated Front Card */}
                <div className="relative z-10 flex h-full w-full flex-col overflow-hidden rounded-md border-2 border-background bg-background shadow transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 dark:border-border">
                    <img alt={title} className="aspect-[7/10] w-full border-b object-cover" src={imageUrl} />
                    <div className="flex flex-1 flex-col justify-between p-2">
                        <p className="line-clamp-3 text-base leading-normal font-medium text-foreground">{title}</p>
                    </div>

                    {/* Arrow Icon that slides in on hover */}
                    <div className="absolute right-2 bottom-2 flex size-5 translate-x-6 items-center justify-center rounded bg-primary/10 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </div>
                </div>

                {/* Static Background Border (Dashed) */}
                <div className="absolute inset-0 z-0 h-full w-full rounded-lg border border-dashed border-foreground/30"></div>
            </div>
        </a>
    );
};

export default RelatedItemCard;
