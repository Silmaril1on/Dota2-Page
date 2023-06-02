import React from "react";
import "../../../01-HeroesProfile/herosstats.css";
import necrophos from "../../../../../00-Assets/necrolyte-min.png";
import str from "../../../../../00-Assets/hero_strength.png";
import agi from "../../../../../00-Assets/hero_agility.png";
import int from "../../../../../00-Assets/hero_intelligence.png";

function HeroAttributes() {
  return (
    <main className="HA-main-container">
      <div className="HA-inner-div">
        <div className="HA-icon-div">
          <div className="HA-image-div">
            <img src={necrophos} alt="abaddon" />
          </div>
          <div className="HA-green-bar">
            516 <span>+2.1</span>
          </div>
          <div className="HA-blue-bar">
            327 <span>+1.1</span>
          </div>
        </div>
        <div className="HA-stats-div">
          <div>
            <img src={str} alt="str" />
            <h1>
              18 <span>+2.3</span>
            </h1>
          </div>
          <div>
            <img src={agi} alt="agi" />
            <h1>
              12 <span>+1.3</span>
            </h1>
          </div>
          <div>
            <img src={int} alt="int" />
            <h1>
              21 <span>+2.7</span>
            </h1>
          </div>
        </div>
      </div>
      <h2>attributes</h2>
    </main>
  );
}

export default HeroAttributes;
