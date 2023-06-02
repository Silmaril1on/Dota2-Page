import React from "react";
import "../../../01-HeroesProfile/herosstats.css";
import spectre from "../../../../../00-Assets/spectre-min.png";
import str from "../../../../../00-Assets/hero_strength.png";
import agi from "../../../../../00-Assets/hero_agility.png";
import int from "../../../../../00-Assets/hero_intelligence.png";

function HeroAttributes() {
  return (
    <main className="HA-main-container">
      <div className="HA-inner-div">
        <div className="HA-icon-div">
          <div className="HA-image-div">
            <img src={spectre} alt="abaddon" />
          </div>
          <div className="HA-green-bar">
            626 <span>+4.3</span>
          </div>
          <div className="HA-blue-bar">
            267 <span>+0.8</span>
          </div>
        </div>
        <div className="HA-stats-div">
          <div>
            <img src={str} alt="str" />
            <h1>
              23 <span>+2.5</span>
            </h1>
          </div>
          <div>
            <img src={agi} alt="agi" />
            <h1>
              25 <span>+2.1</span>
            </h1>
          </div>
          <div>
            <img src={int} alt="int" />
            <h1>
              16 <span>+1.7</span>
            </h1>
          </div>
        </div>
      </div>
      <h2>attributes</h2>
    </main>
  );
}

export default HeroAttributes;
