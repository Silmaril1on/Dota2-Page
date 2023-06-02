import { useRef, useEffect } from "react";
import abaddon from "../../../../00-Assets/abaddon.webm";
import styled from "styled-components";
import AOS from "aos";

function HeroAnimation() {
  const container = useRef();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    container.current?.load();
  }, []);

  return (
    <VideoDiv data-aos="fade-right" data-aos-duration="1800">
      <Video ref={container} autoPlay={true} loop={true}>
        <source src={abaddon} type="video/webm" />
      </Video>
    </VideoDiv>
  );
}

const VideoDiv = styled.div`
  position: absolute;
  height: 280px;
  left: -20px;
  width: 320px;
  @media (min-width: 700px) {
    left: 100px;
    height: 350px;
    width: 500px;
  }
  @media (min-width: 1000px) {
    left: 48%;
    height: 450px;
  }
  @media (min-width: 1400px) {
    height: 900px;
    left: 32%;
    top: 8%;
    width: 1000px;
  }
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
`;

export default HeroAnimation;
