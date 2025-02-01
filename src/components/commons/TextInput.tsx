import React from "react";

interface TextInputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ id, placeholder, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="border border-gray-300 rounded p-2 w-full"
    />
  );
};

export default TextInput;
