import useTranslation from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import { AlertDialogSearch } from './Search/AlertDielogSearch';
import ThnalSearch from './Search/ThnalSearch';

// Interface definitions remain the same
interface NavLink {
    label: string;
    href: string;
}

interface AnimatedHeroProps {
    backgroundImageUrl: string;
    logo: React.ReactNode;
    navLinks: NavLink[];
    topRightAction?: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    ctaButton: {
        text: string;
        onClick: () => void;
    };
    secondaryCta?: {
        text: string;
        onClick: () => void;
    };
    className?: string;
}

// Animation variants remain the same
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const AnimatedHero = ({
    backgroundImageUrl,
    logo,
    // navLinks,
    topRightAction,
    title,
    description,
    longDescription,
    ctaButton,
    secondaryCta,
    className,
}: AnimatedHeroProps) => {
    // Define the new reusable glass button style
    const { t, currentLocale } = useTranslation();

    return (
        <div className={cn('relative flex min-h-[400px] md:min-h-[700px] w-full flex-col items-center justify-end pb-4 md:pb-0 md:justify-center overflow-hidden bg-background', className)}>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center "
                style={{ backgroundImage: `url('/assets/images/banners/${backgroundImageUrl}')` }}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="section-container absolute top-0 z-20 flex h-28 w-full items-center justify-between px-6 text-white md:px-12"
            >
                <div className="flex items-center gap-2">{logo}</div>

                <div className="hidden md:block">{topRightAction}</div>
            </motion.header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="section-container relative z-10 flex w-full flex-col justify-center px-6 text-left text-white md:px-12"
            >
                <motion.p
                    style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
                    variants={itemVariants}
                    // Updated text color to white and adjusted the shadow from 30px (too far) to 4px
                    className="mb-2 line-clamp-3 max-w-[600px] text-[12px]  md:text-[17px] leading-relaxed font-medium text-[#E5E7EB]"
                >
                    {title}
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        background: 'linear-gradient(182deg, #FFD885, #F8C25B, #EEA423, #E99913, #D9770B)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                       WebkitTextStroke: 'var(--text-stroke-width) #FDE68A', // fallback
                    }}
                    className={cn(
                        'text-stroke max-w-[790px] stroke-amber-300 md:py-2 text-2xl leading-tight font-semibold tracking-normal md:text-5xl',
                        currentLocale === 'kh' ? 'font-sans text-xl leading-tight' : 'font-serif',
                    )}
                >
                    {description}
                </motion.h1>

                <motion.p
                    style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.9)' }}
                    variants={itemVariants}
                    // Updated text color to white and adjusted the shadow from 30px (too far) to 4px
                    className="mt-2  max-w-[790px] text-[10px]  md:text-[16px] leading-relaxed font-medium text-[#F5F5F5]"
                >
                    {longDescription}
                </motion.p>
                <motion.div variants={itemVariants} className="mt-5 md:mt-10 flex max-w-[790px] items-center gap-x-4">
                    {/* UPDATED: Applied the new glass button style */}
                    <ThnalSearch />
                    <AlertDialogSearch />
                </motion.div>
            </motion.div>
        </div>
    );
};
