import React from "react";
import styled from "styled-components";

function HeroTypeText({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  color: gainsboro;
  font: bold 0.8rem trajan pro;
  padding: 3px;
  @media (min-width: 700px) {
    font-size: 1rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

export default HeroTypeText;
