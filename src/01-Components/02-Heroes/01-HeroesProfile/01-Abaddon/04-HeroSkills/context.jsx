import React, { useState, useContext } from "react";
import imageData from "./SkillsData";
import abaddon from "../02-AbilityDetails/abilityData";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({
    skill: "",
    subSkillContent: [],
  });

  const openSubmenu = (text, coordinates) => {
    const content = imageData.find((link) => link.skill === text);
    setPage(content);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const [skillIcons] = useState(abaddon);
  const [sliderData, setSliderData] = useState(abaddon[0]);

  const handleClick = (index) => {
    const slider = abaddon[index];
    setSliderData(slider);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        closeSubmenu,
        openSubmenu,
        page,
        location,
        skillIcons,
        handleClick,
        sliderData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
