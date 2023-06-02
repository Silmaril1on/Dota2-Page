import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";
import styled from "styled-components";
import "./skills.css";

function SubSkill() {
  const {
    isSubmenuOpen,
    page: { skill, subSkillContent },
    location,
  } = useGlobalContext();

  const container = useRef(null);
  const [width, setWidth] = useState("skillinfo");

  useEffect(() => {
    setWidth("skillinfo");
    const submenu = container.current;
    const { center } = location;
    submenu.style.left = `${center}px`;
    if (subSkillContent.length > 3) {
      setWidth("talentWidth");
    }
  }, [location, skill, subSkillContent]);

  return (
    <section
      className={`${isSubmenuOpen ? "skillinfo show" : "skillinfo"} ${width}`}
      ref={container}
    >
      {subSkillContent.map((item, index) => {
        const { video, name, desc, talent1, level, talent2, header } = item;
        return (
          <div key={index}>
            {header ? <Header>{header}</Header> : ""}
            {video ? (
              <Video autoPlay={true} loop={true} muted>
                <source src={video} type="video/mp4" />
              </Video>
            ) : (
              ""
            )}
            {name ? <Title>{name}</Title> : ""}
            {desc ? <Desc>{desc}</Desc> : ""}
            {talent1 ? (
              <TalentDiv>
                <TalentTitle>{talent1}</TalentTitle>
                <CircleDiv>
                  <Span>{level}</Span>
                </CircleDiv>
                <TalentTitle>{talent2}</TalentTitle>
              </TalentDiv>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </section>
  );
}

const Header = styled.h1`
  font: bold 1.5rem trajan pro;
  padding: 10px;
  text-align: center;
  text-shadow: 0 0 8px black;
`;

const Video = styled.video`
  width: 100%;
`;

const Title = styled.h3`
  font: bold 1.4rem trajan pro;
  letter-spacing: 1px;
  padding: 10px 15px;
`;

const Desc = styled.p`
  color: #ddd;
  font: normal 0.9rem semplicitapro;
  padding: 10px 15px;
`;

const TalentDiv = styled.div`
  background: linear-gradient(150deg, #3c4247, #0a0c0e);
  display: flex;
  flex-direction: row;
  height: 55px;
  margin: 5px;
  width: 490px;
`;

const TalentTitle = styled.h1`
  color: #ddd;
  font: normal 0.7rem semplicitapro;
  padding: 15px;
  text-align: center;
  width: 50%;
`;

const CircleDiv = styled.div`
  background: linear-gradient(325deg, #3c4247, #0a0c0e);
  border-radius: 50%;
  display: flex;
  height: 63px;
  justify-content: center;
  width: 63px;
`;

const Span = styled.span`
  background-color: #222;
  border-radius: 50%;
  color: #e7d292;
  font: bold 1.7rem trajan pro;
  height: 57px;
  padding: 12px;
  text-align: center;
  text-shadow: 0px 0px 8px #ff531c;
  width: 57px;
`;

export default SubSkill;
