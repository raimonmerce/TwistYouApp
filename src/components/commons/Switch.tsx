import React from "react";

interface SwitchProps {
  name: string;
  setValue: (value: boolean) => void;
  value: boolean;
}

const Switch: React.FC<SwitchProps> = ({ name, setValue, value }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-lg font-medium">{name}</span>
      <button
        onClick={() => setValue(!value)}
        className={`w-12 h-6 flex items-center rounded-full p-1 ${
          value ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
            value ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Switch;
