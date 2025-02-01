import React from "react";

interface GameProp {
  currentPlayer: string;
  currentTurn: string;
}


const Game: React.FC<GameProp> = ({currentPlayer, currentTurn}) => {

  return (
    <>
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