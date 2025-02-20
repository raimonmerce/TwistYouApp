import { useState, useEffect } from "react";
import { Page } from "../constants";

export const useExitHandler = (setContentPage: (page: Page) => void) => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showFinishScreen, setShowFinishScreen] = useState(false);

  const handleExitClick = () => setShowExitPopup(true);
  const handleCancelExitGame = () => setShowExitPopup(false);

  const handleExitGame = () => {
    setShowExitPopup(false);
    setShowFinishScreen(true);
    setContentPage("main");
  };

  useEffect(() => {
    if (showFinishScreen) {
      const timer = setTimeout(() => setShowFinishScreen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFinishScreen]);

  return {
    showExitPopup,
    handleExitClick,
    handleCancelExitGame,
    handleExitGame,
    showFinishScreen,
  };
};
