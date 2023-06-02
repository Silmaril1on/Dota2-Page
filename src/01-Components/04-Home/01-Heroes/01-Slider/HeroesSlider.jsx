import React from "react";
import "./slider.css";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";
import SliderThree from "./SliderThree";
import SliderFour from "./SliderFour";
import SliderFive from "./SliderFive";

function HeroesSlider() {
  return (
    <section className="heroes-slider-container">
      <SliderOne />
      <SliderTwo />
      <SliderThree />
      <SliderFour />
      <SliderFive />
    </section>
  );
}

export default HeroesSlider;
