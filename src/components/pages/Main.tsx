import React from "react";
import Switch from "../commons/Switch"
import DropdownSelector from "../commons/DropdownSelector"
import { useTranslation } from "react-i18next";

interface MainProps {
  setNumberPlayers: (value: number) => void;
  numberPlayers: number;
  setAlcoholMode: (value: boolean) => void;
  alcoholMode: boolean;
  setExtremoMode: (value: boolean) => void;
  extremoMode: boolean;
  setMinigamesMode: (value: boolean) => void;
  minigamesMode: boolean;
  maxPlayers: number;
}

const Main: React.FC<MainProps>  = ({
  setNumberPlayers,
  numberPlayers,
  setAlcoholMode,
  alcoholMode,
  setExtremoMode,
  extremoMode,
  setMinigamesMode,
  minigamesMode,
  maxPlayers
}) => {
  const { t } = useTranslation();

  const generateItems = (maxPlayers: number) => {
    const items = [];
    for (let i = 2; i <= maxPlayers; i++) {
      items.push({ value: i.toString(), label: `${i} ${t('main.players', 'Jugadores')}` });
    }
    return items;
  };

  const items = generateItems(maxPlayers);

  const handleChangeMaxPlayers = (value: string) => {
    setNumberPlayers(Number(value));
  }

  return (
    <>
      "Main"
      <Switch name={t('main.home', 'Alcohol')} setValue={setAlcoholMode} value={alcoholMode}/>
      <Switch name={t('main.extreme', 'Extremo')} setValue={setExtremoMode} value={extremoMode}/>
      <Switch name={t('main.minigames', 'Minijuegos')} setValue={setMinigamesMode} value={minigamesMode}/>
      <DropdownSelector items={items} onChange={handleChangeMaxPlayers} initialValue={numberPlayers}/>
    </>
  );
};

export default Main;