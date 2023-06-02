import React from "react";
import styled from "styled-components";

const heroInfo =
  "Beauty is power. This thought comforted Medusa--the youngest and loveliest of three beautiful Gorgon sisters, born to a sea goddess--because she alone of the sisters was mortal. It comforted her, that is, until the day masked assailants invaded the Gorgon realm and tore the two immortal sisters from their home, unmoved by their beauty or by their tears. One of the invaders seized Medusa as well, but then cast her aside with a disgusted look: 'This one has the mortal stink upon her. We have no use for that which dies.' Humiliated, enraged, Medusa fled to the temple of her mother and cast herself before the goddess, crying, 'You denied me eternal life--therefore I beg you, give me power! Power, so I can dedicate what life I have to rescuing my sisters and avenging this injustice!' After long thought, the goddess granted her daughter's request, allowing Medusa to trade her legendary beauty for a face and form of terrifying strength. Never for a moment has Medusa regretted her choice. She understands that power is the only beauty worth possessing--for only power can change the world.";

function HeroInfo() {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <Container>
      <Desc>{readMore ? heroInfo : `${heroInfo.substring(0, 230)}...`}</Desc>
      <Button
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        {readMore ? "Close Hisotry" : "Read Full History"}
      </Button>
    </Container>
  );
}

const Container = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (min-width: 1000px) {
    height: 150px;
    width: 65%;
  }
  @media (min-width: 1400px) {
    width: 45%;
  }
`;

const Desc = styled.p`
  color: #eee;
  font: normal 0.6rem semplicitapro;
  height: auto;
  padding: 3px;
  overflow: auto;
  width: 90%;
  &::-webkit-scrollbar {
    background-color: #00000058;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 5px;
  }
  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: grey;
  cursor: pointer;
  font: normal 0.6rem semplicitapro;
  padding: 3px;
  text-decoration: underline;
  text-align: left;
  @media (min-width: 700px) {
    font-size: 1rem;
  }
`;

export default HeroInfo;
