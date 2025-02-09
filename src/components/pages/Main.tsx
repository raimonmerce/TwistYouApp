import React from "react";
import Switch from "../commons/Switch"
import DropdownSelector from "../commons/DropdownSelector"
import { useTranslation } from "react-i18next";
import { MAX_PLAYERS } from "../../constants";

interface MainProps {
  setNumberPlayers: (value: number) => void;
  numberPlayers: number;
  setAlcoholMode: (value: boolean) => void;
  alcoholMode: boolean;
  setExtremoMode: (value: boolean) => void;
  extremoMode: boolean;
  setMinigamesMode: (value: boolean) => void;
  minigamesMode: boolean;
}

const Main: React.FC<MainProps>  = ({
  setNumberPlayers,
  numberPlayers,
  setAlcoholMode,
  alcoholMode,
  setExtremoMode,
  extremoMode,
  setMinigamesMode,
  minigamesMode
}) => {
  const { t } = useTranslation();

  const generateItems = (MAX_PLAYERS: number) => {
    const items = [];
    for (let i = 2; i <= MAX_PLAYERS; i++) {
      items.push({ value: i.toString(), label: `${i} ${t('main.players', 'Jugadores')}` });
    }
    return items;
  };

  const items = generateItems(MAX_PLAYERS);

  const handleChangeMaxPlayers = (value: string) => {
    setNumberPlayers(Number(value));
  }

  return (
    <>
      "Main"
      <Switch name={t('main.alcohol', 'Alcohol')} setValue={setAlcoholMode} value={alcoholMode}/>
      <Switch name={t('main.extreme', 'Extremo')} setValue={setExtremoMode} value={extremoMode}/>
      <Switch name={t('main.minigames', 'Minijuegos')} setValue={setMinigamesMode} value={minigamesMode}/>
      <DropdownSelector items={items} onChange={handleChangeMaxPlayers} initialValue={numberPlayers}/>
    </>
  );
};

export default Main;