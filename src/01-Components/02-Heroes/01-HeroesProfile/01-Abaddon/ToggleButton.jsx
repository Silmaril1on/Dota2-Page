import React from "react";
import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/Ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ToggleButton() {
  const navigate = useNavigate();

  const prevHero = () => {
    navigate("/heroes/medusa");
  };

  const nextHero = () => {
    navigate("/heroes/spectre");
  };

  return (
    <BtnContainer>
      <Arrow onClick={prevHero}>
        <AiFillCaretLeft style={{ color: "#a3a3a37a" }} />
      </Arrow>
      <Link to="/heroes">
        <Menu>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </Menu>
      </Link>
      <Arrow onClick={nextHero}>
        <AiFillCaretRight style={{ color: "#a3a3a37a" }} />
      </Arrow>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-around;
  position: absolute;
  top: 15%;
  right: 2.8%;
  max-width: 130px;
  min-width: 120px;
  width: 20%;
  z-index: 222;
`;

const Arrow = styled.div`
  border: 2px solid #a3a3a37a;
  transition: 0.3s;
  margin: 2px;
  padding: 18px 0;
  width: 15%;
  &:hover {
    border: 2px solid white;
  }
`;

const Menu = styled.div`
  border: 2px solid #a3a3a3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2px;
  padding: 5px;
  transition: 0.3s;
  width: 80px;
  &:hover {
    border: 2px solid white;
  }
`;

const Dot = styled.div`
  background-color: #a3a3a3;
  width: 15px;
  height: 15px;
  margin: 2px;
  @media (min-width: 600px) {
    height: 17px;
    width: 17px;
  }
`;

export default ToggleButton;
