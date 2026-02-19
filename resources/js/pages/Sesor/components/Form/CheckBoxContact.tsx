import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Deliverys = [
  {
    name: "Telegram",
    label: "Telegram",
  },
  {
    name: "Phone Call",
    label: "Phone Call",
  },
  {
    name: "Email",
    label: "Email",
  },
];

export default function CheckBoxContact() {
  const [selected, setSelected] = useState(""); // default selected

  const handleSelect = (name) => {
    setSelected(name); // Only one can be active
  };

  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {Deliverys.map(({ name, label }) => (
        <div key={name} className="flex items-center gap-4">
          <Checkbox
            checked={selected === name}
            onCheckedChange={() => handleSelect(name)}
            id={`${name}-vertical`}
          />
          <label
            htmlFor={`${name}-vertical`}
            className="flex items-center gap-2 text-[15px] font-manrope-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
