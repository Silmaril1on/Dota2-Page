import React from "react";
import styled from "styled-components";

function HeroType({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  top: -10px;
  position: absolute;
  width: 200px;
`;

export default HeroType;
