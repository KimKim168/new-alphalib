import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const technologies = [
  { name: "publisher", label: "Publisher" },
  { name: "auther", label: "Auther" },
];

export default function ButtonCheckBox() {
  const [selected, setSelected] = useState(""); // track the selected checkbox

  const handleChange = (name) => {
    setSelected(name); // select only one at a time
  };

  return (
    <div>
      <div className="flex items-center gap-4 flex-wrap">
        {technologies.map(({ name, label }) => (
          <div key={name} className="flex items-center gap-2">
            <Checkbox
              id={name}
              checked={selected === name}
              onCheckedChange={() => handleChange(name)}
            />
            <label
              htmlFor={name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
