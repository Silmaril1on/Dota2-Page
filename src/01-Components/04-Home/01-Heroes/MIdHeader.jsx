import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function MIdHeader() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500">
        <PreTitle>join the</PreTitle>
        <Title>battle of the ancients</Title>
      </div>
      <Paragraph>
        Every day, millions of players worldwide enter the battle as one of over
        a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest
        multi-player action RTS game ever made and there's always a new strategy
        or tactic to discover. It's completely free to play and always will be -
        start defending your ancient now.
      </Paragraph>
    </>
  );
}

const PreTitle = styled.h2`
  color: #e2dace;
  opacity: 0.6;
  font-size: 2rem;

  @media (min-width: 900px) {
    font-size: 3.5rem;
  }
`;

const Title = styled.h1`
  color: #e2dace;
  font-size: 3rem;

  @media (min-width: 900px) {
    font-size: 6.8rem;
  }
`;

const Paragraph = styled.p`
  color: gainsboro;
  font: bold 0.6rem semplicitapro;
  padding: 5%;
  width: 100%;

  @media (min-width: 900px) {
    font-size: 1.2rem;
    margin: 10px auto;
    width: 85%;
  }
`;

export default MIdHeader;
