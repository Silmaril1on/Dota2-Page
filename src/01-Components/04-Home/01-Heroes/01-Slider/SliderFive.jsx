import React from "react";
import "./slider.css";
import heroSliderData from "./sliderData";
import { NavLink } from "react-router-dom";

function SliderFive() {
  const [heroes, setHeroes] = React.useState(heroSliderData);

  return (
    <div className="slider-five">
      {heroes.slice(100, 122).map((hero) => {
        const { id, image, iconImage, heroName, path } = hero;
        return (
          <div className="hero-card" key={id}>
            <NavLink to={path}>
              <img src={image} alt={heroName} />
              <div className="hero-title">
                <img src={iconImage} />
                <h1>{heroName}</h1>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

export default SliderFive;
