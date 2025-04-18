import React from "react";
import "./Switch.css"; // Import the CSS file for styles

interface SwitchProps {
  name: string;
  setValue: (value: boolean) => void;
  value: boolean;
}

const Switch: React.FC<SwitchProps> = ({ name, setValue, value }) => {
  return (
    <div className="switch-container">
      <span className="switch-label">{name}</span>
      <button
        onClick={() => setValue(!value)}
        className={`switch-button ${value ? "on" : "off"}`}
      >
        <div className={`switch-circle ${value ? "on" : "off"}`} />
      </button>
    </div>
  );
};

export default Switch;