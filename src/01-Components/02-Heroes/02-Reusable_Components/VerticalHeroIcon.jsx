import React from "react";
import styled from "styled-components";

function VerticalHeroIcon({ children }) {
  return <Image src={children} alt="str" />;
}

const Image = styled.img`
  height: 15px;
  margin: 5px;
  width: 15px;
  @media (min-width: 1000px) {
    height: 30px;
    width: 30px;
  }
`;

export default VerticalHeroIcon;
