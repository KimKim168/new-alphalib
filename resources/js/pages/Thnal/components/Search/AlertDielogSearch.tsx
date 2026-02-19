import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitPullRequestDraftIcon, X } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from '../ui/alert-dialog';

const SEARCH_FIELDS = ['Author', 'ISBN', 'ISSN', 'Journal Name', 'OCLC Number', 'Publisher', 'Subject', 'Title'];

const LOGIC_OPERATORS = ['AND', 'OR', 'NOT'];

const FORMATS = ['PDF', 'EPUB', 'MOBI', 'Hardcover', 'Paperback'];

const LANGUAGES = [
    { value: 'en', label: 'English' },
    { value: 'kh', label: 'Khmer' },
];

export function AlertDialogSearch() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 rounded-full text-white hover:text-black">
                    <GitPullRequestDraftIcon className="h-5 w-5 " />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="flex max-h-[90vh] max-w-4xl flex-col overflow-y-auto rounded-2xl shadow-2xl">
                <form className="flex h-full flex-col">
                    {/* ---------- Header ---------- */}
                    <div className="flex items-center justify-end">
                        <AlertDialogCancel asChild>
                            <button type="button" className="border-0 text-gray-500 transition hover:text-gray-900" aria-label="Close">
                                <X className="size-5" />
                            </button>
                        </AlertDialogCancel>
                    </div>

                    {/* ---------- Body ---------- */}
                    <div className="flex-1 space-y-8 overflow-y-auto">
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Left: Search Rows */}
                            <div className="space-y-4">
                                <Label>Advanced Search</Label>

                                {[1, 2, 3].map((row) => (
                                    <div key={row} className="mt-1 flex gap-3">
                                        {/* Search field */}
                                        <Select>
                                            <SelectTrigger className="w-[140px]">
                                                <SelectValue placeholder="Keyword" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {SEARCH_FIELDS.map((field) => (
                                                    <SelectItem key={field} value={field}>
                                                        {field}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        {/* Input */}
                                        <Input placeholder="Enter your search term" />

                                        {/* Logic operator */}
                                        <Select>
                                            <SelectTrigger className="w-[100px]">
                                                <SelectValue placeholder="AND" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {LOGIC_OPERATORS.map((op) => (
                                                    <SelectItem key={op} value={op}>
                                                        {op}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Filters */}
                            <div className="space-y-6">
                                {/* Year range */}
                                <div>
                                    <Label>Year</Label>
                                    <div className="mt-1 flex gap-4">
                                        <Input placeholder="From" />
                                        <Input placeholder="To" />
                                    </div>
                                </div>

                                {/* Format & Language */}
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Label>Format</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select format" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {FORMATS.map((format) => (
                                                    <SelectItem key={format} value={format.toLowerCase()}>
                                                        {format}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex-1">
                                        <Label>Language</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {LANGUAGES.map(({ value, label }) => (
                                                    <SelectItem key={value} value={value}>
                                                        {label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- Footer ---------- */}
                    <AlertDialogFooter className="mt-6 flex justify-end gap-4">
                        <AlertDialogAction asChild>
                            <Button type="submit" className="bg-[#1B6593]">
                                Search
                            </Button>
                        </AlertDialogAction>

                        <AlertDialogCancel asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </AlertDialogCancel>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
