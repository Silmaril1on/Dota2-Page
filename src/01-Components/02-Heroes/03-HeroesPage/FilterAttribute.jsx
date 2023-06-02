import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./filterContext";
import btnStr from "../../../00-Assets/filter-str-active.png";
import btnAgi from "../../../00-Assets/filter-agi-active.png";
import btnInt from "../../../00-Assets/filter-int-active.png";
import btnUni from "../../../00-Assets/filter-Uni-active.png";

function FilterAttribute() {
  const { filterItems } = useGlobalContext();
  const categoryBtns = [
    {
      category: "all",
      imgUrl: btnUni,
    },
    {
      category: "str",
      imgUrl: btnStr,
    },
    {
      category: "agi",
      imgUrl: btnAgi,
    },
    {
      category: "int",
      imgUrl: btnInt,
    },
  ];

  return (
    <Section>
      <Title>attribute</Title>
      {categoryBtns.map((item, index) => {
        return (
          <Img
            key={index}
            src={item.imgUrl}
            alt="icon"
            onClick={() => filterItems(item.category)}
          />
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  padding: 15px;
`;

const Title = styled.h1`
  color: #808fa6;
  font: normal 1.2rem trajan pro;
  letter-spacing: 1px;
  margin-right: 15px;
  padding: 5px;
`;

const Img = styled.img`
  cursor: pointer;
  height: 35px;
  filter: brightness(0.5) saturate(0);
  width: 45px;
`;

export default FilterAttribute;
