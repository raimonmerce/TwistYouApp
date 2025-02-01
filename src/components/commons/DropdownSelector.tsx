import React from "react";

interface DropdownSelectorProps {
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
  initialValue: any;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({ items, onChange, initialValue }) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} value={initialValue}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownSelector;
