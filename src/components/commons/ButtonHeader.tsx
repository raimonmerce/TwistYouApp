import React from "react";

interface ButtonHeaderProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ onClick, children }) => {
  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div onClick={onClick} style={headerStyle}>
      {children}
    </div>
  );
};

export default ButtonHeader;