import React from "react";
import TextInput from "../commons/TextInput";

interface PlayersProps {
  setPlayers: (value: string[]) => void;
  players: string[];
}

const Players: React.FC<PlayersProps> = ({
  players,
  setPlayers,
}) => {
  const handleInputChange = (value: string, index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  return (
    <div>
      {players.map((player, index) => (
        <TextInput
          key={index}
          id={`player-${index}`}
          placeholder={`Player ${index + 1}`}
          value={player}
          onChange={(value) => handleInputChange(value, index)}
        />
      ))}
    </div>
  );
};

export default Players;
