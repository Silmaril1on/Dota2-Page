import React from "react";
import "../../../01-HeroesProfile/herosstats.css";
import spectre from "../../../../../00-Assets/medusa-min.png";
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
            120 <span>+0.3</span>
          </div>
          <div className="HA-blue-bar">
            399 <span>+1.4</span>
          </div>
        </div>
        <div className="HA-stats-div">
          <div>
            <img src={str} alt="str" />
            <h1>
              0 <span>+0.0</span>
            </h1>
          </div>
          <div>
            <img src={agi} alt="agi" />
            <h1>
              22 <span>+3.4</span>
            </h1>
          </div>
          <div>
            <img src={int} alt="int" />
            <h1>
              27 <span>+3.7</span>
            </h1>
          </div>
        </div>
      </div>
      <h2>attributes</h2>
    </main>
  );
}

export default HeroAttributes;
