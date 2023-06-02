import React, { useState, useContext } from "react";
import heroSliderData from "../../04-Home/01-Heroes/01-Slider/sliderData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [heroSearch, setHeroSearch] = useState("");
  const [heroesList, setHeroesList] = useState(heroSliderData);

  const filterItems = (category) => {
    let newItems;
    if (category === "all") {
      newItems = heroSliderData;
    } else {
      newItems = heroSliderData.filter((item) => item.category === category);
    }
    setHeroesList(newItems);
  };

  const searchBar = (e) => {
    setHeroSearch(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        heroSearch,
        searchBar,
        heroesList,
        filterItems,
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
