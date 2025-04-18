import React from "react";

interface ButtonFooterProps {
  onClick: () => void;
  type: "primary" | "secondary" | "danger";
  text: string;
}

const ButtonFooter: React.FC<ButtonFooterProps> = ({ onClick, type, text}) => {
  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonFooter;
