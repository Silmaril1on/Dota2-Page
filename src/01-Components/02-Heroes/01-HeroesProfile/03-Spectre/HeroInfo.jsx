import React from "react";
import styled from "styled-components";

const heroInfo =
  "Just as higher states of energy seek a lower level, the Spectre known as Mercurial is a being of intense and violent energy who finds herself irresistibly drawn to scenes of strife as they unfold in the physical world. While her normal spectral state transcends sensory limitations, each time she takes on a physical manifestation, she is stricken by a loss of self--though not of purpose. In the clash of combat, her identity shatters and reconfigures, and she begins to regain awareness. She grasps that she is Mercurial the Spectre--and that all of her Haunts are but shadows of the one true Spectre. Focus comes in the struggle for survival; her true mind reasserts itself; until in the final moments of victory or defeat, she transcends matter and is restored once more to her eternal form.";

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
