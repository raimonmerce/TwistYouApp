import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
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

export default Content;