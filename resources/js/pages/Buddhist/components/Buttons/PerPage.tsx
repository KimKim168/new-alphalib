import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const perPageOptions = [
  { id: 1, name: "8 Per Page" },
  { id: 2, name: "16 Per Page" },
  { id: 3, name: "32 Per Page" },
  { id: 4, name: "64 Per Page" },
];

export default function PerPage() {
  const [selectedOption, setSelectedOption] = useState(perPageOptions[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 border h-10 py-1 px-3 rounded-lg">
        <span className="text-sm">{selectedOption.name}</span>
        <ChevronsUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuLabel>Per Page</DropdownMenuLabel>
        {perPageOptions.map((option) => (
          <DropdownMenuItem
          className="outline-[#8b262b]]"
            key={option.id}
            onClick={() => setSelectedOption(option)}
          >
            <span>{option.name}</span>
            {selectedOption.id === option.id && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
