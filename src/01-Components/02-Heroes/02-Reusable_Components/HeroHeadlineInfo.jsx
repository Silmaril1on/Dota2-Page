import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

function HeroHeadlineInfo({ children }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Div data-aos="fade-up" data-aos-duration="1800">
      {children}
    </Div>
  );
}

const Div = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 450px;
  padding: 10px;
  position: relative;
  top: 250px;
  width: auto;
  @media (min-width: 700px) {
    height: 550px;
  }
  @media (min-width: 1000px) {
    left: 100px;
    padding: 10px 60px;
    top: 130px;
    width: 90%;
  }
`;

export default HeroHeadlineInfo;
