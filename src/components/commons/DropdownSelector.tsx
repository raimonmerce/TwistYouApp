import React from "react";
import styles from "./DropdownSelector.module.css";

interface DropdownSelectorProps {
  name: string;
  description: string;
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
  initialValue: any;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  name,
  description,
  items,
  onChange,
  initialValue
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h5>{name}</h5>
        <p className={styles.description}>{description}</p>
      </div>
      <select
        onChange={handleChange}
        value={initialValue}
        className={styles.dropdown}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;
