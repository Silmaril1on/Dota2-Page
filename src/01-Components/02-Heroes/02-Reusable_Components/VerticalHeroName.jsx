import React from "react";
import styled from "styled-components";

function VerticalHeroName({ children }) {
  return <HeroTitle>{children}</HeroTitle>;
}

const HeroTitle = styled.h1`
  color: white;
  font-size: 1.4rem;
  font-family: trajan pro;
  margin: 5px;
  width: auto;
`;

export default VerticalHeroName;
