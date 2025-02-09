import React, { useState, useEffect } from "react";
import DropdownSelector from "../commons/DropdownSelector";
import Switch from "../commons/Switch";
import { useTranslation } from "react-i18next";

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [lenguageTag, setLenguageTag] = useState(i18n.language);
  const [darkMode, setDarkMode] = useState(false);

  const lenguages = [
    { value: "es", label: t("settings.spanish", "Español") },
    { value: "en", label: t("settings.english", "English") },
    { value: "cat", label: t("settings.catalan", "Catalan") }
  ];

  const handleLenguageChange = (value: string) => {
    setLenguageTag(value);
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    i18n.on("languageChanged", (lang) => {
      setLenguageTag(lang);
    });

    return () => {
      i18n.off("languageChanged");
    };
  }, [i18n]);

  return (
    <>
      <div>{t("settings.language", "Idioma")}</div>
      <DropdownSelector items={lenguages} onChange={handleLenguageChange} initialValue={lenguageTag} />
      <Switch name={t("settings.darkMode", "Modo oscuro")} setValue={setDarkMode} value={darkMode} />
    </>
  );
};

export default Settings;
