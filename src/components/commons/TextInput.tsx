import React from "react";
import styles from "./TextInput.module.css";

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
      className={styles.textInput}
    />
  );
};

export default TextInput;
