import { Checkbox } from "@/components/ui/checkbox";

const Deliverys = [
  {
    name: "1-2 Hour Express Delivery",
    label: "1-2 Hour Express Delivery",
    defaultChecked: true,
  },
  {
    name: "Same Day Delivery",
    label: "Same Day Delivery",

  },
  {
    name: "Next Day Delivery",
    label: "Next Day Delivery",
  },
];

export default function CheckBoxTypeOfDelivery() {
  return (
    <div className="mt-2 flex flex-col items-start gap-4">
      {Deliverys.map(({ name, label, defaultChecked }) => (
        <div key={name} className="flex items-center gap-4">
          <Checkbox defaultChecked={defaultChecked} id={`${name}-vertical`} />
          <label
            htmlFor={`${name}-vertical`}
            className="flex items-center gap-2 text-[15px] font-manrope-regular leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  );
}
