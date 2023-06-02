import React from "react";
import styled from "styled-components";

function HeroPreTitle({ children }) {
  return <PreTitle>{children}</PreTitle>;
}

const PreTitle = styled.h3`
  font: bold 0.45rem trajan pro;
  color: #a5e0f3;
  letter-spacing: 1px;
  padding: 5px;
  @media (min-width: 700px) {
    font-size: 0.8rem;
  }
`;

export default HeroPreTitle;
