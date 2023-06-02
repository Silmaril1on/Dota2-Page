import React from "react";
import styled from "styled-components";
import background from "../../../00-Assets/heroes-background.jpg";

function HeroesBackground() {
  return (
    <Div>
      <Skew></Skew>
    </Div>
  );
}

const Div = styled.div`
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 290vh;
  position: absolute;
  top: 0;
  overflow: hidden;
  z-index: -1;
  width: 100%;
  @media (min-width: 1700px) {
    height: 175vh;
  }
`;

const Skew = styled.div`
  background-color: rgba(0, 0, 0, 0.3764705882);
  height: 130vh;
  position: absolute;
  top: 0;
  right: 60%;
  transform: skew(-45deg);
  width: 420px;

  @media (min-width: 900px) {
    right: 30%;
    width: 800px;
  }
`;

export default HeroesBackground;
