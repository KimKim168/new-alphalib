import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import { AlertDialogSearch } from './Search/AlertDielogSearch';
import ThnalSearch from './Search/ThnalSearch';
import { ThnalLanguage } from './ThnalLanguage';

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

export const AnimatedHero2 = ({ backgroundImageUrl, logo, topRightAction, className }: AnimatedHeroProps) => {
    // Define the new reusable glass button style

    return (
        <div
            className={cn(
                'relative flex min-h-[100px] w-full flex-col items-center justify-center overflow-hidden bg-background lg:min-h-[180px]',
                className,
            )}
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/images/banners/${backgroundImageUrl}')` }}
            >
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="section-container absolute top-0 z-20 flex h-28 w-full items-center justify-between px-6 text-white"
            >
                <div className="flex items-center gap-2">{logo}</div>

                <div className="hidden md:block">{topRightAction}</div>
                {/* <div className='md:hidden'><ThnalLanguage /></div> */}
            </motion.header>
            <div className="section-container absolute top-24 z-20 hidden w-[500px] items-center gap-2 lg:flex xl:w-full">
                <div className="w-full flex-1">
                    <ThnalSearch />
                </div>
                <AlertDialogSearch />
            </div>
        </div>
    );
};
