import { useTranslation } from "react-i18next";

const FinishScreenPopup = ({ round }: { round: number }) => {
  const { t } = useTranslation();  // Call useTranslation at the top level

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{t("popup.roundsReached", "You reached round")} {round}</p>
      </div>
    </div>
  );
};

export default FinishScreenPopup;
