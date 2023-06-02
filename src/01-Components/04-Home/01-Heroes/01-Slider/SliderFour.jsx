import React from "react";
import "./slider.css";
import heroSliderData from "./sliderData";
import { NavLink } from "react-router-dom";

function SliderFour() {
  const [heroes, setHeroes] = React.useState(heroSliderData);

  return (
    <div className="slider-four">
      {heroes.slice(75, 100).map((hero) => {
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

export default SliderFour;
