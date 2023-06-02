import React from "react";
import { Helmet } from "react-helmet";
import icon from "../../../../00-Assets/hero_agility.png";
import HeroesBackground from "../../02-Reusable_Components/HeroesBackground";
import VerticalName from "../../02-Reusable_Components/VerticalName";
import VerticalHeroIcon from "../../02-Reusable_Components/VerticalHeroIcon";
import VerticalHeroName from "../../02-Reusable_Components/VerticalHeroName";
import VerticalHeroNumber from "../../02-Reusable_Components/verticalHeroNumber";
import ToggleButton from "../03-Spectre/ToggleButton";
import HeroHeadlineInfo from "../../02-Reusable_Components/HeroHeadlineInfo";
import HeroType from "../../02-Reusable_Components/01-HeroMainContent/HeroType";
import HeroTypeText from "../../02-Reusable_Components/01-HeroMainContent/HeroTypeText";
import HeroTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroTitle";
import HeroPreTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroPreTitle";
import HeroInfo from "../03-Spectre/HeroInfo";
import StrType from "../../02-Reusable_Components/01-HeroMainContent/StrType";
import HeroAbilities from "../03-Spectre/04-HeroSkills/HeroAbilities";
import HeroBar from "../03-Spectre/01-HeroBar/HeroBar";
import AbilityDetails from "../03-Spectre/02-AbilityDetails/AbilityDetails";
import HeroFooterSlider from "../03-Spectre/00-HeroFooterSlider/HeroFooterSlider";
import PageFooter from "../../../05-Footer/PageFooter";
import HeroAnimation from "../03-Spectre/HeroAnimation";

function Spectre() {
  return (
    <>
      <Helmet>
        <title>Dota 2 | Spectre</title>
      </Helmet>
      <HeroesBackground />
      <VerticalName>
        <VerticalHeroIcon>{icon}</VerticalHeroIcon>
        <VerticalHeroName>spectre</VerticalHeroName>
        <VerticalHeroNumber>44</VerticalHeroNumber>
      </VerticalName>
      <HeroAnimation />
      <ToggleButton />
      <HeroHeadlineInfo>
        <HeroType>
          <VerticalHeroIcon>{icon}</VerticalHeroIcon>
          <HeroTypeText>agility</HeroTypeText>
        </HeroType>
        <HeroTitle>spectre</HeroTitle>
        <HeroPreTitle>
          HAUNTS HER ENEMIES AND TELEPORTS TO HER TARGET
        </HeroPreTitle>
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

export default Spectre;
