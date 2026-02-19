import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export const HoverEffect = ({ className }: { className?: string }) => {
    const { t, currentLocale } = useTranslation();
  
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { bannalai } = usePage<any>().props;
    return (
        <div className={cn('grid grid-cols-2 gap-3 py-4 sm:grid-cols-3 lg:grid-cols-8', className)}>
            {bannalai?.map((item, idx) => (
                <a
                    key={item?.id}
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <img src={`/assets/images/banalai_library/thumb/${item?.icon}`} alt={item?.name} className="h-10 w-10 object-contain" />
                        <p className="mt-2 text-sm text-black dark:text-white/80">{currentLocale == 'kh' ? item?.name_kh || item?.name : item?.name}</p>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                'relative z-20 h-full w-full rounded-xl border p-3',
                'border bg-gradient-to-b from-white/10 to-white/5',
                'border dark:border-white/70',
                'transition-all duration-300',
                'group-hover:border-white/30 group-hover:shadow-xl',
                className,
            )}
        >
            <div className="relative z-50 flex flex-col items-start gap-1">{children}</div>
        </div>
    );
};
