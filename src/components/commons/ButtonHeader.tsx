import React from "react";
import styles from "./ButtonHeader.module.css";

interface ButtonHeaderProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ onClick, children }) => {

  return (
    <button className={styles.buttonHeader} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonHeader;