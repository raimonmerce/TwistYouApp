import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export default Footer;
