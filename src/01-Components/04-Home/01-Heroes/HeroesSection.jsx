import React from "react";
import styled from "styled-components";
import bannerBack from "../../../00-Assets/heroes_full.jpg";
import HeroesHeader from "./HeroesHeader";
import HomeBtn from "./HomeBtn";
import { NavLink } from "react-router-dom";

function HeroesSection() {
  return (
    <Content>
      <Section>
        <Gradient>
          <HeroesHeader />
          <NavLink to="/heroes">
            <HomeBtn>view all-heroes</HomeBtn>
          </NavLink>
        </Gradient>
      </Section>
    </Content>
  );
}

const Content = styled.section`
  background-image: url(${bannerBack});
  background-size: cover;
  background-position: center;
  height: 90vh;
  margin: 5% 0;
  text-align: center;
  width: 100%;
  @media (min-width: 1400px) {
    height: 180vh;
  }
`;

const Section = styled.section`
  background: linear-gradient(
    rgba(0, 0, 0, 5.95) 3%,
    rgba(0, 0, 0, 0.222) 45%,
    rgba(0, 0, 0, 0.222) 30%,
    rgba(0, 0, 0, 1.622) 90%
  );
  height: 100%;
  position: relative;
`;

const Gradient = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
`;

export default HeroesSection;
