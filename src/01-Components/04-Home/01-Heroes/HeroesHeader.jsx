import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroesHeader() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500">
        <HeroesTitle>who will you</HeroesTitle>
        <Title>choose?</Title>
      </div>
      <Paragraph>
        From magical tacticians to fierce brutes and cunning rogues, Dota 2's
        hero pool is massive and limitlessly diverse. Unleash incredible
        abilities and devastating ultimates on your way to victory.
      </Paragraph>
    </>
  );
}

const HeroesTitle = styled.h2`
  color: #e2dace;
  opacity: 0.6;
  font-size: 1.8rem;

  @media (min-width: 900px) {
    font-size: 3.5rem;
  }
`;

const Title = styled.h1`
  color: #e2dace;
  font-size: 4rem;

  @media (min-width: 900px) {
    font-size: 9rem;
  }
`;

const Paragraph = styled.p`
  color: gainsboro;
  font: bold 0.7rem semplicitapro;
  padding: 5%;
  width: 100%;

  @media (min-width: 900px) {
    font-size: 1.2rem;
    margin: 10px auto;
    width: 85%;
  }
`;

export default HeroesHeader;
