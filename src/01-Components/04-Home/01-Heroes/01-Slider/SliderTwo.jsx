import React from "react";
import heroSliderData from "./sliderData";
import "./slider.css";
import { NavLink } from "react-router-dom";

function SliderTwo() {
  const [heroes, setHeroes] = React.useState(heroSliderData);

  return (
    <div className="slider-two">
      {heroes.slice(25, 50).map((hero) => {
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

export default SliderTwo;
