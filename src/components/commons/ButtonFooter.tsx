import React from "react";

interface ButtonFooterProps {
  onClick: () => void;
  text: string;
}

const ButtonFooter: React.FC<ButtonFooterProps> = ({ onClick, text}) => {
  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonFooter;
