import React from "react";
import { Helmet } from "react-helmet";
import icon from "../../../../00-Assets/hero_intelligence.png";
import HeroesBackground from "../../02-Reusable_Components/HeroesBackground";
import VerticalName from "../../02-Reusable_Components/VerticalName";
import VerticalHeroIcon from "../../02-Reusable_Components/VerticalHeroIcon";
import VerticalHeroName from "../../02-Reusable_Components/VerticalHeroName";
import VerticalHeroNumber from "../../02-Reusable_Components/verticalHeroNumber";
import ToggleButton from "../02-Necrophos/ToggleButton";
import HeroHeadlineInfo from "../../02-Reusable_Components/HeroHeadlineInfo";
import HeroType from "../../02-Reusable_Components/01-HeroMainContent/HeroType";
import HeroTypeText from "../../02-Reusable_Components/01-HeroMainContent/HeroTypeText";
import HeroTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroTitle";
import HeroPreTitle from "../../02-Reusable_Components/01-HeroMainContent/HeroPreTitle";
import HeroInfo from "../02-Necrophos/HeroInfo";
import RangeType from "../../02-Reusable_Components/01-HeroMainContent/RangeType";
import HeroAbilities from "../02-Necrophos/04-HeroSkills/HeroAbilities";
import HeroBar from "../02-Necrophos/01-HeroBar/HeroBar";
import AbilityDetails from "../02-Necrophos/02-AbilityDetails/AbilityDetails";
import HeroFooterSlider from "../02-Necrophos/00-HeroFooterSlider/HeroFooterSlider";
import PageFooter from "../../../05-Footer/PageFooter";
import HeroAnimation from "../02-Necrophos/HeroAnimation";

function Necrophos() {
  return (
    <>
      <Helmet>
        <title>Dota 2 | Necrophos</title>
      </Helmet>
      <HeroesBackground />
      <VerticalName>
        <VerticalHeroIcon>{icon}</VerticalHeroIcon>
        <VerticalHeroName>necrophos</VerticalHeroName>
        <VerticalHeroNumber>78</VerticalHeroNumber>
      </VerticalName>
      <HeroAnimation />
      <ToggleButton />
      <HeroHeadlineInfo>
        <HeroType>
          <VerticalHeroIcon>{icon}</VerticalHeroIcon>
          <HeroTypeText>strength</HeroTypeText>
        </HeroType>
        <HeroTitle>necrophos</HeroTitle>
        <HeroPreTitle>
          DAMAGES ENEMIES AND HEALS ALLIES SIMULTANEOUSLY
        </HeroPreTitle>
        <HeroInfo />
        <RangeType />
        <HeroAbilities />
      </HeroHeadlineInfo>
      <HeroBar />
      <AbilityDetails />
      <HeroFooterSlider />
      <PageFooter />
    </>
  );
}

export default Necrophos;
