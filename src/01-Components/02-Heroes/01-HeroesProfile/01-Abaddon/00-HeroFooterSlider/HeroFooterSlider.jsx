import React from "react";
import styled from "styled-components";
import heroSliderData from "../../../../04-Home/01-Heroes/01-Slider/sliderData";
import back from "../../../../../00-Assets/grey_painterly_wide-min.png";
import { Link } from "react-router-dom";
import AllHeroesMenu from "./AllHeroesMenu";

function HeroFooterSlider() {
  const [heros] = React.useState(heroSliderData);

  return (
    <Container>
      {heros.slice(1, 3).map((hero, index) => {
        return (
          <RowContainer key={index}>
            <Link to={hero.path}>
              <ImgDiv>
                <HeroImg src={hero.linkImg} alt="hero" />
              </ImgDiv>
              <InfoContainer>
                <HeroTitle>{hero.heroName}</HeroTitle>
                <RowInfo>
                  <Img src={hero.iconImage} alt="icon" />
                  <AttType>{hero.attType}</AttType>
                </RowInfo>
              </InfoContainer>
            </Link>
          </RowContainer>
        );
      })}
      <AllHeroesMenu />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative;
  width: 100%;
  @media (min-width: 750px) {
    flex-direction: row;
    height: 250px;
    justify-content: space-between;
    margin-top: 90px;
  }
  @media (min-width: 1200px) {
    margin-top: 130px;
  }
`;

const RowContainer = styled.div`
  background: url(${back});
  background-position: center;
  background-size: cover;
  display: flex;
  height: 300px;
  margin: 2px 2px;
  max-width: 600px;
  position: relative;
  width: auto;
  @media (min-width: 550px) {
    height: 400px;
  }
  @media (min-width: 750px) {
    width: 43%;
    height: auto;
  }
`;

const ImgDiv = styled.div`
  bottom: 0;
  position: absolute;
  height: 100%;
  overflow: hidden;
  right: 0;
  width: 100%;
  @media (min-width: 750px) {
    height: 400px;
    width: 100%;
  }
`;

const HeroImg = styled.img`
  height: auto;
  width: 100%;
  bottom: -15px;
  object-fit: cover;
  transition: 0.4s;
  position: absolute;
  vertical-align: top;
  filter: saturate(0.7);
  &:hover {
    cursor: pointer;
    bottom: 0;
    filter: saturate(1);
  }
`;

const InfoContainer = styled.div`
  height: auto;
  position: absolute;
  bottom: 30px;
  left: 30px;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  color: white;
  font: bold 1.4rem trajan pro;
  letter-spacing: 1px;
  text-shadow: 1px 1px 8px #000;
  @media (min-width: 550px) {
    font-size: 2rem;
  }
`;

const RowInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  height: 20px;
  width: 20px;
  @media (min-width: 550px) {
    height: 30px;
    width: 30px;
  }
`;

const AttType = styled.h3`
  color: #ccc;
  font: normal 1rem trajan pro;
  padding-left: 10px;
  letter-spacing: 1px;
  @media (min-width: 550px) {
    font-size: 1.4rem;
  }
`;

export default HeroFooterSlider;
