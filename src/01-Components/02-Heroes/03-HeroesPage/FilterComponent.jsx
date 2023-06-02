import React from "react";
import styled from "styled-components";
import FilterAttribute from "./FilterAttribute";
import FilterSearch from "./FilterSearch";

function FilterComponent() {
  return (
    <Section>
      <Title>filter heroes</Title>
      <FilterAttribute />
      <FilterSearch />
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
  border: 1px solid rgba(17, 17, 17, 0.5647058824);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3137254902);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 95%;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  color: white;
  font: normal 1.2rem trajan pro;
  padding: 20px;
`;

export default FilterComponent;
