import React from "react";
import styled from "styled-components";
import AbilityShowCase from "./AbilityShowCase";
import AbilityDescription from "./AbilityDescription";
import { AppProvider } from "../04-HeroSkills/context";

function AbilityDetails() {
  return (
    <AppProvider>
      <AbilityContainer>
        <Title>ability details</Title>
        <InnerContainer>
          <AbilityShowCase />
          <AbilityDescription />
        </InnerContainer>
      </AbilityContainer>
    </AppProvider>
  );
}

const AbilityContainer = styled.div`
  color: white;
  height: 100%;
  margin-top: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-bottom: 50px;
  @media (min-width: 900px) {
    margin-top: 300px;
  }
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  font: normal 1rem trajan pro;
  letter-spacing: 1px;
  width: 100%;
  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 1500px;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export default AbilityDetails;
