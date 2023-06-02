import React, { useState, useContext } from "react";
import medusaData from "./SkillsData";
import medusa from "../02-AbilityDetails/abilityData";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({
    skill: "",
    subSkillContent: [],
  });

  const openSubmenu = (text, coordinates) => {
    const content = medusaData.find((link) => link.skill === text);
    setPage(content);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const [skillIcons, setSkillIcons] = useState(medusa);
  const [sliderData, setSliderData] = useState(medusa[0]);

  const handleClick = (index) => {
    const slider = medusa[index];
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
