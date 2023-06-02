import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function AllHeroesMenu() {
  return (
    <Container>
      <Link to="/heroes">
        <Bricks>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
          <Div></Div>
        </Bricks>
        <Title>all heroes</Title>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (min-width: 750px) {
    width: 20%;
  }
  @media (min-width: 1200px) {
    width: 15%;
  }
`;

const Bricks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 150px;
  justify-content: center;
`;

const Div = styled.div`
  height: 35px;
  width: 35px;
  background-color: grey;
  margin: 3px;
`;

const Title = styled.h1`
  color: grey;
  font: bold 1rem trajan pro;
  letter-spacing: 1px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export default AllHeroesMenu;
