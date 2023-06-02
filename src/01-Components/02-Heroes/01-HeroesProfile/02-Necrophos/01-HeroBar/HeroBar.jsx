import React from "react";
import HeroAttributes from "./HeroAttributes";
import HeroRoles from "./HeroRoles";
import "../../../01-HeroesProfile/herosstats.css";
import HeroStats from "./HeroStats";

function HeroBar() {
  return (
    <div className="hero-bar-container">
      <HeroAttributes />
      <HeroRoles />
      <HeroStats />
    </div>
  );
}

export default HeroBar;
