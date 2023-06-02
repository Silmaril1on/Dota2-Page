import { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../../00-Assets/dota2_logo_symbol.png";

function PopUp() {
  const [showModal, setShowModal] = useState(true);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <Div>
          <InfoContainer>
            <Row>
              <Img src={logo} alt="logo" />
              <Headline>hello user</Headline>
            </Row>
            <Info>
              Only <Span>abaddon</Span>,<Span>spectre</Span>,{" "}
              <Span>necrophos</Span>
              and <Span>medusa</Span> is shown for showcase
            </Info>
            <Button onClick={hideModal}>close</Button>
          </InfoContainer>
        </Div>
      ) : (
        ""
      )}
    </>
  );
}

const slideDown = keyframes`
    0% {opacity: 0;}
    90% {opacity: 0;}
    100% {opacity: 1;}
`;

const Div = styled.div`
  animation-name: ${slideDown};
  animation-duration: 3s;
  align-items: center;
  background-color: #000000a6;
  backdrop-filter: blur(3px);
  display: flex;
  height: 1100px;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 22;
`;

const Row = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  margin-top: 7px;
  padding: 10px;
  justify-content: center;
`;

const InfoContainer = styled.main`
  border-radius: 10px;
  box-shadow: 2px 2px 25px 2px red;
  background-color: black;
  height: 250px;
  margin: 50px auto;
  text-align: center;
  width: 300px;
  z-index: 22;
  @media (min-width: 1300px) {
    width: 550px;
  }
`;

const Img = styled.img`
  background-color: black;
  height: 45px;
  padding: 5px;
  width: 45px;
`;

const Headline = styled.h1`
  font: bold 2rem semplicitapro;
  color: red;
  text-transform: uppercase;
`;

const Info = styled.p`
  color: #ccc;
  font: bold 1rem semplicitapro;
  padding: 20px;
`;

const Span = styled.span`
  color: red;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 4px;
`;

const Button = styled.button`
  background-color: #50626e;
  border-top: 2px solid grey;
  cursor: pointer;
  color: white;
  font: bold 1rem trajan pro;
  height: 35px;
  letter-spacing: 2px;
  transition: 0.3s;
  width: 150px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default PopUp;
