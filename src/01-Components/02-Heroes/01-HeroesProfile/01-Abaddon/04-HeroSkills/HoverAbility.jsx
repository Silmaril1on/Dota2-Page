import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import imageData from "./SkillsData";

function HoverAbility() {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  const [images] = React.useState(imageData);

  const displaySubMenu = (e, str) => {
    const page = str;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu(page, { center });
  };

  return (
    <Section>
      <Header>Abilities</Header>
      <Container>
        {images.map((image) => {
          return (
            <ImgCont key={image.id}>
              <Img
                src={image.img}
                alt="skill"
                onMouseEnter={(e) => displaySubMenu(e, image.skill)}
                onMouseLeave={closeSubmenu}
              />
            </ImgCont>
          );
        })}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  bottom: 0;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  position: absolute;
  width: auto;
  @media (min-width: 1300px) {
    bottom: 80px;
    right: 5%;
  }
`;

const Header = styled.h3`
  color: white;
  font: normal 1rem trajan pro;
  letter-spacing: 1px;
  width: 355px;
  text-align: center;
  @media (min-width: 600px) {
    width: 480px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
`;

const Img = styled.img`
  cursor: pointer;
  height: 100%;
  transition: 0.2s;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImgCont = styled.div`
  box-shadow: 0 0 15px 1px black;
  height: 60px;
  margin: 5px;
  width: 60px;
  &:first-child {
    box-shadow: none;
  }

  @media (min-width: 600px) {
    height: 85px;
    width: 85px;
  }
`;

export default HoverAbility;
