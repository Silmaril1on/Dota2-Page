import React from "react";
import styled from "styled-components";

function HomeBtn({ children, variant }) {
  return <Button variant={variant}>{children}</Button>;
}

const Button = styled.button`
  border: 2px solid grey;
  border-radius: 5px;
  background-color: ${(props) =>
    props.variant === "transparent" ? "transparent" : "black"};
  display: ${(props) => (props.variant === "transparent" ? "none" : "flex")};
  color: white;
  cursor: pointer;
  font: bold 1rem trajan pro;
  height: 60px;
  justify-content: space-evenly;
  padding: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.4s;
  width: 220px;

  &:hover {
    border: 2px solid rgb(184, 64, 9);
    transform: translateY(-3px);
  }

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-evenly;
    margin-right: 20px;
  }
`;

export default HomeBtn;
