import React from "react";
import styles from "./Setting.module.css";

interface SettingProps {
  name: string;
  description: string;
  setValue: (value: boolean) => void;
  value: boolean;
}

const Setting: React.FC<SettingProps> = ({ name, description, setValue, value }) => {
  return (
    <div className={styles.setting}>
      <div className={styles.info}>
        <h5>{name}</h5>
        <p className={styles.description}>{description}</p>
      </div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={value}
        onChange={() => setValue(!value)}
      />
    </div>
  );
};

export default Setting;
