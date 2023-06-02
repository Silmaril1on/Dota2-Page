import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../04-HeroSkills/context";

function AbilityDescription() {
  const { sliderData } = useGlobalContext();
  const {
    name,
    shard,
    img,
    quote,
    info,
    abi1,
    abi2,
    abi3,
    abi4,
    abi5,
    abi6,
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
    stat6,
    pierce1,
    pierce2,
    pier1,
    pier2,
  } = sliderData;

  return (
    <DescContainer>
      <Section>
        <div>
          <DivRow>
            <div>
              <Img src={img} alt="icon" />
            </div>
            <div>
              <Title>{name}</Title>
              <Info>{info}</Info>
              <Shard>{shard}</Shard>
            </div>
          </DivRow>
          <DivStats>
            <DamageDiv>
              <Ability>
                {stat1} <Stat>{abi1}</Stat>
              </Ability>
              <Ability>
                {stat2}
                <Stat>{abi2}</Stat>
              </Ability>
              <Ability>
                {stat3}
                <StatBlue>{abi3}</StatBlue>
              </Ability>
              <Ability>
                {stat4}
                <Stat>{abi4}</Stat>
              </Ability>
              <Ability>
                {stat5}
                <Stat>{abi5}</Stat>
              </Ability>
              <Ability>
                {stat6}
                <Stat>{abi6}</Stat>
              </Ability>
            </DamageDiv>
            <PierceDiv>
              <Ability>
                {pierce1} <Stat>{pier1}</Stat>
              </Ability>
              <Ability>
                {pierce2} <Stat>{pier2}</Stat>
              </Ability>
            </PierceDiv>
          </DivStats>
          <Quote>{quote}</Quote>
        </div>
      </Section>
    </DescContainer>
  );
}

const DescContainer = styled.div`
  background-color: black;
  height: auto;
  width: 100%;
  @media (min-width: 1100px) {
    width: 40%;
    height: 100%;
    margin-left: 10px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const DivRow = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  padding: 10px;
  height: 100px;
  width: 100px;
`;

const Title = styled.h1`
  font: bold 1.5rem trajan pro;
  letter-spacing: 1px;
  padding: 5px 0;
`;

const Info = styled.p`
  color: #ddd;
  font: normal 0.9rem semplicitapro;
  padding: 5px 0;
  width: 97%;
`;

const Shard = styled.h3`
  background-color: #1c2e50;
  color: #ddd;
  font: normal 1rem trajan pro;
  text-align: center;
  width: 250px;
`;

const DivStats = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 10px 0;
  width: 100%;
`;

const DamageDiv = styled.div`
  height: auto;
  width: 50%;
`;

const Ability = styled.h3`
  color: #737373;
  display: flex;
  flex-direction: row;
  font: normal 0.9rem trajan pro;
  padding: 2px 10px;
`;

const StatBlue = styled.span`
  color: rgb(163, 220, 238);
  font: normal 0.9rem semplicitapro;
  margin-left: 5px;
  text-transform: capitalize;
`;

const Stat = styled.span`
  font: normal 0.8rem semplicitapro;
  color: white;
  text-transform: capitalize;
  margin-left: 5px;
  :nth-child(3) {
    color: blue;
  }
`;

const PierceDiv = styled.div`
  height: auto;
  width: 50%;
`;

const Quote = styled.p`
  color: grey;
  font: italic 0.9rem semplicitapro;
  padding: 10px 35px;
  background-color: #121212;
  margin: 15px;
`;

export default AbilityDescription;
