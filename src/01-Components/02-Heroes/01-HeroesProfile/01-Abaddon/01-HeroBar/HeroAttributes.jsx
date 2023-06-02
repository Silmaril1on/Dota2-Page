import React from "react";
import "../../../01-HeroesProfile/herosstats.css";
import abaddon from "../../../../../00-Assets/abaddon-min.png";
import str from "../../../../../00-Assets/hero_strength.png";
import agi from "../../../../../00-Assets/hero_agility.png";
import int from "../../../../../00-Assets/hero_intelligence.png";

function HeroAttributes() {
  return (
    <main className="HA-main-container">
      <div className="HA-inner-div">
        <div className="HA-icon-div">
          <div className="HA-image-div">
            <img src={abaddon} alt="abaddon" />
          </div>
          <div className="HA-green-bar">
            604 <span>+3.2</span>
          </div>
          <div className="HA-blue-bar">
            291 <span>+3.2</span>
          </div>
        </div>
        <div className="HA-stats-div">
          <div>
            <img src={str} alt="str" />
            <h1>
              22 <span>+2.2</span>
            </h1>
          </div>
          <div>
            <img src={agi} alt="agi" />
            <h1>
              23 <span>+1.3</span>
            </h1>
          </div>
          <div>
            <img src={int} alt="int" />
            <h1>
              18 <span>+1.2</span>
            </h1>
          </div>
        </div>
      </div>
      <h2>attributes</h2>
    </main>
  );
}

export default HeroAttributes;
