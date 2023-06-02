import React from "react";
import styled from "styled-components";

function HeroTitle({ children }) {
  return <Title>{children}</Title>;
}

const Title = styled.div`
  font: bold 2rem trajan pro;
  letter-spacing: 2px;
  padding: 5px;
  @media (min-width: 700px) {
    font-size: 3rem;
  }
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
`;

export default HeroTitle;
