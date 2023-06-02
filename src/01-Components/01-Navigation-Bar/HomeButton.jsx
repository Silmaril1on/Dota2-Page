import styled from "styled-components";
import logoSmall from "../../00-Assets/dota2_logo_symbol.png";
import logoBig from "../../00-Assets/dota2_logo_horiz.png";
import { Link } from "react-router-dom";

function HomeButton() {
  const imageUrl = window.innerWidth >= 950 ? logoBig : logoSmall;

  return (
    <>
      <Link to="/home">
        <Button style={{ backgroundImage: `url(${imageUrl})` }}></Button>
      </Link>
    </>
  );
}

export default HomeButton;

const Button = styled.button`
  background: transparent;
  background-size: cover;
  border: none;
  cursor: pointer;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;

  @media (min-width: 550px) {
    width: 60px;
    min-width: 60px;
    height: 60px;
    min-height: 60px;
    margin: 5px;
  }

  @media (min-width: 1200px) {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 200px;
    height: 50px;
    margin: 0 15px;
    margin-right: 35px;
  }
`;
