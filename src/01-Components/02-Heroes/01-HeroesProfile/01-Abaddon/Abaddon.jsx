import React from "react";
import icon from "../../../../00-Assets/hero_strength.png";
import HeroesBackground from "../../02-Reusable_Components/HeroesBackground";
import VerticalName from "../../02-Reusable_Components/VerticalName";
import VerticalHeroName from "../../02-Reusable_Components/VerticalHeroName";
import VerticalHeroNumber from "../../02-Reusable_Components/verticalHeroNumber";
import VerticalHeroIcon from "../../02-Reusable_Components/VerticalHeroIcon";
import ToggleButton from "../01-Abaddon/ToggleButton";
import HeroHeadlineInfo from "../../02-Reusable_Components/HeroHeadlineInfo";
import HeroType from "../../02-Reusable_Components/01-HeroMainContent/HeroType";
import HeroTypeText from "../../02-Reusable_Components/01-HeroMainContent/HeroTypeText";
import HeroTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroTitle";
import HeroPreTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroPreTitle";
import StrType from "../../02-Reusable_Components/01-HeroMainContent/StrType";
import HeroAbilities from "./04-HeroSkills/HeroAbilities";
import HeroBar from "./01-HeroBar/HeroBar";
import AbilityDetails from "./02-AbilityDetails/AbilityDetails";
import HeroInfo from "../01-Abaddon/HeroInfo";
import PageFooter from "../../../05-Footer/PageFooter";
import HeroFooterSlider from "../01-Abaddon/00-HeroFooterSlider/HeroFooterSlider";
import { Helmet } from "react-helmet";
import HeroAnimation from "../01-Abaddon/HeroAnimation";

function Abaddon() {
  return (
    <>
      <Helmet>
        <title>Dota 2 | Abaddon </title>
      </Helmet>
      <HeroesBackground />
      <VerticalName>
        <VerticalHeroIcon>{icon}</VerticalHeroIcon>
        <VerticalHeroName>abaddon</VerticalHeroName>
        <VerticalHeroNumber>102</VerticalHeroNumber>
      </VerticalName>
      <HeroAnimation />
      <ToggleButton />
      <HeroHeadlineInfo>
        <HeroType>
          <VerticalHeroIcon>{icon}</VerticalHeroIcon>
          <HeroTypeText>strength</HeroTypeText>
        </HeroType>
        <HeroTitle>abaddon</HeroTitle>
        <HeroPreTitle>SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS</HeroPreTitle>
        <HeroInfo />
        <StrType />
        <HeroAbilities />
      </HeroHeadlineInfo>
      <HeroBar />
      <AbilityDetails />
      <HeroFooterSlider />
      <PageFooter />
    </>
  );
}

export default Abaddon;
