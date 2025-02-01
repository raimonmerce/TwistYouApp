import React from "react";

interface ButtonFooterProps {
  onClick: () => void;
  type: "primary" | "secondary" | "danger";
  text: string;
}

const ButtonFooter: React.FC<ButtonFooterProps> = ({ onClick, type, text}) => {
  const getButtonStyle = (): React.CSSProperties => {
    switch (type) {
      case "primary":
        return {
          backgroundColor: "#3b82f6",
          color: "white",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          fontWeight: "600",
          transition: "background-color 0.2s ease",
        };
      case "secondary":
        return {
          backgroundColor: "#6b7280",
          color: "white",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          fontWeight: "600",
          transition: "background-color 0.2s ease",
        };
      case "danger":
        return {
          backgroundColor: "#ef4444",
          color: "white",
          borderRadius: "8px",
          padding: "0.5rem 1rem",
          fontWeight: "600",
          transition: "background-color 0.2s ease",
        };
      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...getButtonStyle(),
        cursor: "pointer",
        border: "none",
        outline: "none",
      }}
      onMouseOver={(e) => {
        if (type === "primary") e.currentTarget.style.backgroundColor = "#2563eb";
        if (type === "secondary") e.currentTarget.style.backgroundColor = "#4b5563";
        if (type === "danger") e.currentTarget.style.backgroundColor = "#dc2626";
      }}
      onMouseOut={(e) => {
        if (type === "primary") e.currentTarget.style.backgroundColor = "#3b82f6";
        if (type === "secondary") e.currentTarget.style.backgroundColor = "#6b7280";
        if (type === "danger") e.currentTarget.style.backgroundColor = "#ef4444";
      }}
    >
        {text}
    </button>
  );
};

export default ButtonFooter;
