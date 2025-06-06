import { useTranslation } from "react-i18next";
import styles from "./FinishScreenPopup.module.css";

const FinishScreenPopup = ({ round }: { round: number }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h4>{t("popup.gameFinished")}</h4>
        <p>{t("popup.roundsReached", "You reached round")} {round}</p>
      </div>
    </div>
  );
};

export default FinishScreenPopup;
