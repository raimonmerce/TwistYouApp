import { useTranslation } from "react-i18next";
import { Page } from "../../types";

interface LandingProp {
  setContentPage: (value: Page) => void;
}

const Landing: React.FC<LandingProp> = ({ setContentPage }) => {
  const { t } = useTranslation();

  const handlePlay = () => {
    setContentPage("main")
  };

  return (
    <>
      <h1>TwintYou</h1>
      <button onClick={handlePlay}>{t("footer.play", "Round")}</button>
    </>
  );
};

export default Landing;