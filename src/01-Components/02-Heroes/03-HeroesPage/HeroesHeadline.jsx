import React from "react";
import { styled, keyframes } from "styled-components";

function HeroesHeadline() {
  return (
    <ContentBox>
      <Title>choose your hero</Title>
      <Desc>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </Desc>
    </ContentBox>
  );
}

const fadeIn = keyframes`
  from {opacity: 0};
  to {opacity: 1}
`;

const ContentBox = styled.div`
  animation: ${fadeIn};
  animation-duration: 1.888s;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  padding: 15px;

  @media (min-width: 1000px) {
    margin-top: 15%;
  }
`;

const Title = styled.h1`
  color: white;
  font: bold 1.7rem semplicitapro;
  text-transform: uppercase;
  padding: 10px;
  height: auto;
  text-shadow: 0 0 10px black;
  letter-spacing: 1px;

  @media (min-width: 500px) {
    font-size: 2.4rem;
  }
  @media (min-width: 700px) {
    font-size: 3rem;
  }
  @media (min-width: 1000px) {
    font-size: 4rem;
    line-height: 40px;
  }
`;

const Desc = styled.h3`
  color: #ddd;
  font: normal 0.7rem semplicitapro;
  text-align: center;
  padding: 10px;
  width: 80%;

  @media (min-width: 700px) {
    font-size: 1.2rem;
    padding: 20px;
  }
  @media (min-width: 1000px) {
    font-size: 1.4rem;
  }
`;
export default HeroesHeadline;
