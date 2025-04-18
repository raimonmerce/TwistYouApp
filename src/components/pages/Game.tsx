import React from "react";
import CameraCapture from "../commons/CameraButton";
import { useTranslation } from "react-i18next";

interface GameProp {
  currentPlayer: string;
  currentTurn: string;
  round: number;
}

const Game: React.FC<GameProp> = ({ currentPlayer, currentTurn, round }) => {
  const { t } = useTranslation();

  return (
    <>
      <h4>{t("game.round", "Round")} {round}</h4>
      <h3>{currentPlayer}</h3>
      <p>{currentTurn}</p>

      {currentTurn === t("game.masterTasks.mt1") && (
        <CameraCapture captureMode="environment" />
      )}
      {currentTurn === t("game.masterTasks.mt2") && (
        <CameraCapture captureMode="user" />
      )}
    </>
  );
};

export default Game;