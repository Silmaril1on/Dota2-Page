import { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../04-HeroSkills/context";

function AbilityIcons() {
  const { skillIcons, handleClick } = useGlobalContext();

  return (
    <IconsContainer>
      {skillIcons.map((icon, index) => {
        return (
          <Div key={index}>
            <Img
              src={icon.img}
              alt="skill"
              onClick={() => handleClick(index)}
            ></Img>
            {icon.shard ? (
              <ShardImg
                src={icon.img2}
                alt="shard"
                onClick={() => handleClick(index)}
              />
            ) : (
              ""
            )}
          </Div>
        );
      })}
    </IconsContainer>
  );
}

const IconsContainer = styled.div`
  bottom: -100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  position: absolute;
  width: 100%;
  @media (min-width: 480px) {
    bottom: -40px;
  }
  @media (min-width: 600px) {
    bottom: -30px;
  }
`;

const Div = styled.div`
  height: 60px;
  width: auto;
  margin: 5px;
  display: flex;
  flex-direction: column;
  filter: grayscale(100%);
  transition: 0.4s;
  &:hover {
    transform: scale(1.2);
    filter: grayscale(0);
  }
`;

const Img = styled.img`
  box-shadow: 1px 1px 10px 2px black;
  cursor: pointer;
  height: 65px;
  object-fit: cover;
  width: 65px;
  @media (min-width: 600px) {
    height: 75px;
    width: 75px;
  }
`;

const ShardImg = styled.img`
  cursor: pointer;
  height: 65px;
  position: absolute;
  width: 65px;
  @media (min-width: 600px) {
    height: 75px;
    width: 75px;
  }
`;

export default AbilityIcons;
