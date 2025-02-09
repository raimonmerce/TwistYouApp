import { useTranslation } from "react-i18next";

const ExitPopup = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => {
  const { t } = useTranslation();

  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{t("popup.confirmExit", "Seguro que quieres salir del juego?")}</p>
        <div className="popup-buttons">
          <button className="exit" onClick={onConfirm}>
            {t("popup.exit", "Salir")}
          </button>
          <button className="cancel" onClick={onCancel}>
            {t("popup.cancel", "Cancelar")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
