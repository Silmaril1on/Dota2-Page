import React from "react";
import styled from "styled-components";

const logo =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg";

function StrType() {
  return (
    <Main>
      <Cont>
        <Header>attack type</Header>
        <Inner>
          <Img src={logo} alt="sword" />
          <Title>melee</Title>
        </Inner>
      </Cont>
      <Cont>
        <Header>complexity</Header>
        <div>
          <Brick></Brick>
          <Brick></Brick>
          <Brick></Brick>
        </div>
      </Cont>
    </Main>
  );
}

const Main = styled.div`
  margin-top: 3%;
  width: 40%;
`;

const Cont = styled.div`
  padding-bottom: 20px;
`;

const Header = styled.h3`
  color: grey;
  font: normal 1.1rem trajan pro;
  letter-spacing: 1px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

const Img = styled.img`
  margin-right: 5px;
  width: 25px;
  height: 25px;
`;

const Title = styled.h4`
  font: normal 1.1rem trajan pro;
  color: white;
  letter-spacing: 1px;
`;

const Brick = styled.div`
  border: 1px solid white;
  display: inline-block;
  height: 15px;
  margin: 8px;
  transform: rotate(45deg);
  width: 15px;
  &:nth-child(1) {
    background-color: white;
  }
`;

export default StrType;
