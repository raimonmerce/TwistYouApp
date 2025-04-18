import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className={styles.header}>
      {children}
  </div>;
};

export default Header;