import React from "react";

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  const divStyle: React.CSSProperties = {
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9fafb",
    color: "#111827",
    margin: "1rem 0",
  };

  return <div style={divStyle}>{children}</div>;
};

export default Footer;
