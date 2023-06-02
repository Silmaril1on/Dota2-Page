import React from "react";
import styled, { keyframes } from "styled-components";

function VerticalName({ children }) {
  return (
    <Div>
      {children}
      <Line />
    </Div>
  );
}

const fromDown = keyframes`
from {top: 0;}
to {top: 200px;}
  
`;

const Div = styled.div`
  animation-name: ${fromDown};
  animation-duration: 1.8s;
  display: none;
  font-family: trajan pro;
  letter-spacing: 2px;
  left: -320px;
  position: absolute;
  top: 200px;
  transform: rotate(-90deg);
  width: 800px;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    left: -330px;
  }
`;

const Line = styled.div`
  border: 1px solid #888;
  width: 450px;
  margin-top: 20px;
  height: 2px;
`;

export default VerticalName;
