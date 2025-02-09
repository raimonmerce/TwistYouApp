import React from "react";
import { useTranslation } from "react-i18next";

interface GameProp {
  currentPlayer: string;
  currentTurn: string;
  round: number;
}


const Game: React.FC<GameProp> = ({currentPlayer, currentTurn, round}) => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('game.round', "Round")} {round}</p>
      <h2>
      {currentPlayer}
      </h2>
      <h3>
      {currentTurn}
      </h3>
    </>
  );
};

export default Game;