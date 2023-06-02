import React from "react";
import "./News";
import styled from "styled-components";

function NewsHeadline() {
  return (
    <section className="gradient-container">
      <div className="headline-container">
        <DataTitle>april 21, 2023</DataTitle>
        <MainTitle>the new frontiers update is here</MainTitle>
        <LinkTitle>read more</LinkTitle>
        <PostTitle>featured post</PostTitle>
      </div>
    </section>
  );
}

const DataTitle = styled.h6`
  color: gainsboro;
  padding-left: 5px;
  opacity: 0.8;

  @media (min-width: 550px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const MainTitle = styled.h1`
  color: #e5ded9;
  text-shadow: 0px 0px 10px #000;
  text-transform: capitalize;
  padding: 5px;

  @media (min-width: 550px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 4.5rem;
  }
`;

const LinkTitle = styled.h3`
  cursor: pointer;
  color: grey;
  font-size: 0.8rem;
  padding-left: 5px;
  transition: 0.4s;

  &:hover {
    color: white;
    letter-spacing: 3px;
  }

  @media (min-width: 550px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const PostTitle = styled.h5`
  color: white;
  background-color: rgba(220, 220, 220, 0.336);
  font-size: 0.6rem;
  letter-spacing: 1px;
  padding: 2px;
  position: absolute;
  top: 5px;
  right: 5px;
  width: auto;

  @media (min-width: 550px) {
    font-size: 1rem;
  }
`;
export default NewsHeadline;
