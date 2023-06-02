import React from "react";
import styled from "styled-components";

const logo =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg";

function StrType() {
  return (
    <Main>
      <Cont>
        <Header>attack type</Header>
        <Inner>
          <Img src={logo} alt="sword" />
          <Title>range</Title>
        </Inner>
      </Cont>
      <Cont>
        <Header>complexity</Header>
        <Brick></Brick>
        <Brick></Brick>
        <Brick></Brick>
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
  height: 25px;
  margin-right: 5px;
  width: 25px;
`;

const Title = styled.h4`
  color: white;
  font: normal 1.1rem trajan pro;
  letter-spacing: 1px;
`;

const Brick = styled.div`
  border: 1px solid white;
  height: 15px;
  width: 15px;
  display: inline-block;
  margin: 8px;
  transform: rotate(45deg);
`;

export default StrType;
