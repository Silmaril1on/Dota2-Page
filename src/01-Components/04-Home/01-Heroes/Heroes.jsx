import React from "react";
import styled from "styled-components";
import desktop from "../../../00-Assets/radiant_dire5.jpg";
import mobile from "../../../00-Assets/battle_mobile.jpg";
import HeroesSection from "./HeroesSection";
import MIdHeader from "./MIdHeader";
import HomeBtn from "../01-Heroes/HomeBtn";
import HeroesSlider from "./01-Slider/HeroesSlider";
import ProCircuitSection from "./ProCircuitSection";
import JoinBattle from "./JoinBattle";
import PageFooter from "../../05-Footer/PageFooter";

function Heroes() {
  const responsiveImg = window.innerWidth >= 650 ? desktop : mobile;
  return (
    <>
      <Section style={{ backgroundImage: `url(${responsiveImg})` }}>
        <Header />
        <HeroesSlider />
        <ProCircuitSection />
        <JoinBattle />
        <PageFooter />
      </Section>
    </>
  );
}

function Header() {
  return (
    <>
      <Main>
        <Gradient>
          <MIdHeader />
          <HomeBtn>see what's new</HomeBtn>
        </Gradient>
      </Main>
      <HeroesSection />
    </>
  );
}

const Section = styled.section`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  @media (min-width: 1200px) {
    height: 120vh;
  }
`;

const Main = styled.main`
  background: linear-gradient(
    rgba(0, 0, 0, 0.85) 5%,
    rgba(0, 0, 0, 0.222) 45%,
    rgba(0, 0, 0, 0.322) 50%,
    rgba(0, 0, 0, 0.622) 85%
  );
  font-family: trajan pro;
  height: 100%;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Gradient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  height: auto;
  position: absolute;
`;

export default Heroes;
