import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AbilityIcons from "./AbilityIcons";
import { useGlobalContext } from "../04-HeroSkills/context";

function AbilityShowCase() {
  const { sliderData } = useGlobalContext();

  const container = useRef();

  useEffect(() => {
    container.current?.load();
  }, [sliderData.video]);

  return (
    <ShowCaseContainer>
      <VideoDiv>
        <Video ref={container} autoPlay={true} loop={true} muted>
          <source src={sliderData.video} type="video/mp4" />
        </Video>
      </VideoDiv>
      <AbilityIcons />
    </ShowCaseContainer>
  );
}

const ShowCaseContainer = styled.div`
  height: auto;
  position: relative;
  width: 100%;
  box-shadow: 3px 3px 8px #000;
  margin-bottom: 110px;
  @media (min-width: 480px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1100px) {
    width: 60%;
  }
`;

const VideoDiv = styled.div`
  height: 100%;
  width: 100%;
`;

const Video = styled.video`
  height: 100%;
  object-fit: cover;
  vertical-align: top;
  width: 100%;
`;

export default AbilityShowCase;
