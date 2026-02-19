import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ReadMoreBuddhist = ({ link }) => {
    return (
        <Button
            asChild
            size="lg"
            className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#93272c] to-[#812828] px-8 py-3 font-semibold text-white shadow-[4px_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:shadow-[6px_6px_12px_rgba(0,0,0,0.35)] active:translate-y-1 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)]"
        >
            <a href={link}>
                អានបន្ថែម <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
        </Button>
    );
};

export default ReadMoreBuddhist;
