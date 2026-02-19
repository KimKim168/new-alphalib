import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePage } from '@inertiajs/react';
import { Globe } from 'lucide-react';
import { router } from '@inertiajs/react';

export function LanguageSwitcher() {
    const { locale } = usePage().props as { locale?: string };

    const defaultLocale = locale ?? 'kh'; // Khmer default

    return (
        <Select
            value={defaultLocale}
            onValueChange={(val) => router.visit(`/lang/${val}`, { replace: true })}
        >
            <SelectTrigger className="h-9 w-[120px] border-none px-4 font-medium focus-visible:ring-[1px] text-black dark:text-white shadow-none">
                <Globe className="mr-1 h-3 w-3 text-black dark:text-white" />
                <SelectValue placeholder={defaultLocale} />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup className="font-medium text-[15px]">
                    <SelectItem value="kh">ភាសាខ្មែរ</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
