import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/Fi";
import { useGlobalContext } from "./filterContext";

function FilterSearch() {
  const { searchBar } = useGlobalContext();

  return (
    <Div>
      <Form>
        <FiSearch style={{ fontSize: "40", color: "grey" }} />
        <Input onChange={searchBar} type="text" name="search" />
      </Form>
    </Div>
  );
}

const Div = styled.div`
  background-color: #25282a;
  display: flex;
  padding: 5px;
  margin: 5px;
  height: 50px;
  width: 250px;
`;

const Form = styled.form`
  width: 250px;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input.attrs({
  type: "text, placeholder",
})`
  background-color: #25282a;
  color: white;
  &:focus {
    background-color: grey;
  }
  &:active {
  }
`;

export default FilterSearch;
