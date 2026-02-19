'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

// Generate letters A-Z
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

const workspaces = [{ id: 0, label: 'Sort by letter: ' }, ...alphabet.map((letter, index) => ({ id: index + 1, label: letter }))];

export default function SortCharacter() {
    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg bg-accent px-3 py-3">
                <span className="max-w-[17ch] truncate text-sm">
                    {selectedWorkspace.id === 0 ? (
                        'Sort by letter'
                    ) : (
                        <>
                            Sort by letter: <span className="font-medium text-blue-900">{selectedWorkspace.label}</span>
                        </>
                    )}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="max-h-64 w-52 overflow-y-auto" align="start">
                {workspaces.map(({ id, label }) => (
                    <DropdownMenuItem key={id} onClick={() => setSelectedWorkspace({ id, label })}>
                        <span>{label}</span>
                        {selectedWorkspace.id === id && <Check className="ml-auto" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
