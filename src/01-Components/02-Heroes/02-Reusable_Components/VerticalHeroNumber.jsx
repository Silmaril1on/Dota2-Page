import React from "react";
import styled from "styled-components";

function VerticalHeroNumber({ children }) {
  return <Span>{children}</Span>;
}

const Span = styled.span`
  color: grey;
  font-size: 1.3rem;
  padding: 3px;
  margin: 5px;
  width: auto;
`;

export default VerticalHeroNumber;
