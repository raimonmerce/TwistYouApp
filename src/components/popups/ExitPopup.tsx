import { useTranslation } from "react-i18next";
import styles from "./ExitPopup.module.css";

const ExitPopup = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <p>{t("popup.confirmExit", "Seguro que quieres salir del juego?")}</p>
        <div className={styles.container}>
          <button onClick={onConfirm}>
            {t("popup.exit", "Salir")}
          </button>
          <button onClick={onCancel}>
            {t("popup.cancel", "Cancelar")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
