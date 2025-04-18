import React from "react";
import Switch from "../commons/Switch"
import DropdownSelector from "../commons/DropdownSelector"
import { useTranslation } from "react-i18next";
import { MAX_PLAYERS } from "../../constants";
import { GameSettings } from "../../types";

interface MainProps {
  setNumberPlayers: (value: number) => void;
  numberPlayers: number;
  setSettings: (value: GameSettings) => void;
  settings: GameSettings;
}

const Main: React.FC<MainProps>  = ({
  setNumberPlayers,
  numberPlayers,
  setSettings,
  settings,
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

  const handleToggle = (key: keyof GameSettings, value: boolean) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <>
      <Switch 
        name={t('main.alcohol', 'Alcohol')} 
        setValue={(value) => handleToggle("alcoholMode", value)} 
        value={settings.alcoholMode} 
      />
      <Switch 
        name={t('main.extreme', 'Extremo')} 
        setValue={(value) => handleToggle("extremoMode", value)} 
        value={settings.extremoMode} 
      />
      <Switch 
        name={t('main.minigames', 'Minijuegos')} 
        setValue={(value) => handleToggle("minigamesMode", value)} 
        value={settings.minigamesMode} 
      />
            <Switch 
        name={t('main.master', 'Master')} 
        setValue={(value) => handleToggle("minigamesMode", value)} 
        value={settings.minigamesMode} 
      />
      <DropdownSelector 
        items={items} 
        onChange={handleChangeMaxPlayers} 
        initialValue={numberPlayers}
      />
    </>
  );
};

export default Main;