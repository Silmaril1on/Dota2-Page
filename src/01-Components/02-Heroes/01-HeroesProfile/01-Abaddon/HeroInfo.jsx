import React from "react";
import styled from "styled-components";

const heroInfo =
  "The Font of Avernus is the source of a family's strength, a crack in primal stones from which vapors of prophetic power have issued for generations. Each newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism they are given an innate connection to the mystic energies of the land. They grow up believing themselves fierce protectors of their lineal traditions, the customs of the realm--but what they really are protecting is the Font itself. And the motives of the mist are unclear. When the infant Abaddon was bathed in the Font, they say something went awry. In the child's eyes there flared a light of comprehension that startled all present and set the sacerdotes to whispering. He was raised with every expectation of following the path all scions of Avernus took--to train in war, that in times of need he might lead the family's army in defense of the ancestral lands. But Abaddon was always one apart.Where others trained with weapons, he bent himself to meditation in the presence of the mist. He drank deep from the vapors that welled from the Font, learning to blend his spirit with the potency that flowed from far beneath the House; he became a creature of the black mist. There was bitterness within the House Avernus--elders and young alike accusing him of neglecting his responsibilities. But all such accusations stopped when Abaddon rode into battle, and they saw how the powers of the mist had given him mastery over life and death beyond those of any lord the House had ever known.";

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
