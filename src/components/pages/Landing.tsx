import { useTranslation } from "react-i18next";
import { Page } from "../../types";
import styles from "./Landing.module.css";

interface LandingProp {
  setContentPage: (value: Page) => void;
}

const Landing: React.FC<LandingProp> = ({ setContentPage }) => {
  const { t } = useTranslation();

  const handlePlay = () => {
    setContentPage("main")
  };

  return (
    <div className={styles.container}>
      <h1>TwistYou</h1>
      <button onClick={handlePlay}>{t("footer.play", "Round")}</button>
    </div>
  );
};

export default Landing;