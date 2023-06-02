import React from "react";
import styled from "styled-components";

const heroInfo =
  "In a time of great plague, an obscure monk of dark inclinations, one Rotund'jere, found himself promoted to the rank of Cardinal by the swift death of all his superiors. While others of the order went out to succor the ill, the newly ordained cardinal secluded himself within the Cathedral of Rumusque, busily scheming to acquire the property of dying nobles, promising them spiritual rewards if they signed over their terrestrial domains. As the plague receded to a few stubborn pockets, his behavior came to the attention of the greater order, which found him guilty of heresy and sentenced him to serve in the plague ward, ensorcelled with spells that would ensure him a slow and lingering illness. But they had not counted on his natural immunity. Rotund'jere caught the pox, but instead of dying, found it feeding his power, transforming him into a veritable plague-mage, a Pope of Pestilence. Proclaiming himself Necrophos, he travels the world, spreading plague wherever he goes, and growing in terrible power with every village his pestilential presence obliterates.";

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
