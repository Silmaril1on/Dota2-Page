import React from "react";
import { AppProvider } from "./context";
import HoverAbility from "./HoverAbility";
import SubSkill from "./SubSkill.jsx";

function HeroAbilities() {
  return (
    <AppProvider>
      <HoverAbility />
      <SubSkill />
    </AppProvider>
  );
}

export default HeroAbilities;
