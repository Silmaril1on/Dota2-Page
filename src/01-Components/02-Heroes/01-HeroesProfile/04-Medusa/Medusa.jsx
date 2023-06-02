import React from "react";
import { Helmet } from "react-helmet";
import icon from "../../../../00-Assets/hero_agility.png";
import HeroesBackground from "../../02-Reusable_Components/HeroesBackground";
import VerticalName from "../../02-Reusable_Components/VerticalName";
import VerticalHeroIcon from "../../02-Reusable_Components/VerticalHeroIcon";
import VerticalHeroName from "../../02-Reusable_Components/VerticalHeroName";
import VerticalHeroNumber from "../../02-Reusable_Components/verticalHeroNumber";
import HeroAnimation from "../04-Medusa/HeroAnimation";
import ToggleButton from "../04-Medusa/ToggleButton";
import HeroHeadlineInfo from "../../02-Reusable_Components/HeroHeadlineInfo";
import HeroType from "../../02-Reusable_Components/01-HeroMainContent/HeroType";
import HeroTypeText from "../../02-Reusable_Components/01-HeroMainContent/HeroTypeText";
import HeroTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroTitle";
import HeroPreTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroPreTitle";
import HeroInfo from "../04-Medusa/HeroInfo";
import RangeType from "../../02-Reusable_Components/01-HeroMainContent/RangeType";
import HeroAbilities from "../04-Medusa/04-HeroSkills/HeroAbilities";
import HeroBar from "../04-Medusa/01-HeroBar/HeroBar";
import AbilityDetails from "../04-Medusa/02-AbilityDetails/AbilityDetails";
import HeroFooterSlider from "../04-Medusa/00-HeroFooterSlider/HeroFooterSlider";
import PageFooter from "../../../05-Footer/PageFooter";

function Medusa() {
  return (
    <>
      <Helmet>
        <title>Dota 2 | Medusa</title>
      </Helmet>
      <HeroesBackground />
      <VerticalName>
        <VerticalHeroIcon>{icon}</VerticalHeroIcon>
        <VerticalHeroName>medusa</VerticalHeroName>
        <VerticalHeroNumber>37</VerticalHeroNumber>
      </VerticalName>
      <HeroAnimation />
      <ToggleButton />
      <HeroHeadlineInfo>
        <HeroType>
          <VerticalHeroIcon>{icon}</VerticalHeroIcon>
          <HeroTypeText>agility</HeroTypeText>
        </HeroType>
        <HeroTitle>
          medusa
          <HeroPreTitle>
            IMMOBILIZES HER ENEMIES WITH HER STONE GAZE
          </HeroPreTitle>
          <HeroInfo />
          <RangeType />
        </HeroTitle>
        <HeroAbilities />
      </HeroHeadlineInfo>
      <HeroBar />
      <AbilityDetails />
      <HeroFooterSlider />
      <PageFooter />
    </>
  );
}

export default Medusa;
