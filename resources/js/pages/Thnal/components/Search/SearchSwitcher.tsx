import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SearchSwitcher({ workspaces, onChange }) {
    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

    const handleSelect = (workspace) => {
        setSelectedWorkspace(workspace);
        if (onChange) {
            onChange(workspace.value); // send the value back to parent
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 rounded-l-lg bg-accent px-2 py-4">
                <div className="flex flex-col gap-1 text-start leading-none">
                    <span className="max-w-[17ch] truncate text-sm leading-none font-semibold">{selectedWorkspace.label}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52" align="start">
                {workspaces.map((workspace) => (
                    <DropdownMenuItem key={workspace.id} onClick={() => handleSelect(workspace)}>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <span>{workspace.label}</span>
                            </div>
                        </div>
                        {selectedWorkspace.id === workspace.id && <Check className="ml-auto" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
