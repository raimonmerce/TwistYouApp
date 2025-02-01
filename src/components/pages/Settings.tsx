import React, {useState} from "react";
import DropdownSelector from "../commons/DropdownSelector"
import Switch from "../commons/Switch"
import { useTranslation } from "react-i18next";

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [lenguageTag, setLenguageTag] = useState("es");
  const [darkMode, setDarkMode] = useState(false);

  const lenguages = [
    {value: "es", label: t("settings.spanish", "Español")},
    {value: "en", label: t("settings.english", "Catalan")},
    {value: "cat", label: t("settings.catalan", "Inglés")}
  ];

  const handleLenguageChange = (value: string) => {
    setLenguageTag(value);
    i18n.changeLanguage(value);
  }

  return (
    <>
      {t("settings.language", "Idioma")}
      <DropdownSelector items={lenguages} onChange={handleLenguageChange} initialValue={lenguageTag}/>
      <Switch name={t("settings.darkMode", "Modo oscuro")} setValue={setDarkMode} value={darkMode}/>
    </>
  );
};

export default Settings;