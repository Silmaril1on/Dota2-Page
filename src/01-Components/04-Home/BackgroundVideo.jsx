import React from "react";
import styled from "styled-components";
import videoFile from "../../00-Assets/dota_montage_02.mp4";

function BackgroundVideo() {
  return (
    <>
      <Video autoPlay={true} loop={true}>
        <source src={videoFile} type="video/mp4" />
      </Video>
    </>
  );
}

export default BackgroundVideo;

const Video = styled.video`
  height: 100vh;
  position: absolute;
  object-fit: cover;
  opacity: 0.5;
  top: 0;
  width: 100%;
  z-index: -2;
`;
