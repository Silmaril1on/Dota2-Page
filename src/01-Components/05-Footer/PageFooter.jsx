import React from "react";
import styled from "styled-components";
import valveLogo from "../../00-Assets/valve_logo.png";
import dotaLogo from "../../00-Assets/dota_footer_logo.png";

function PageFooter() {
  return (
    <Footer>
      <LogoSection>
        <Link href="https://www.valvesoftware.com/en/about">
          <Logo src={valveLogo} alt="ValveLogo" />
        </Link>
        <Link href="https://www.dota2.com/home">
          <Logo src={dotaLogo} alt="dotaLogo" />
        </Link>
      </LogoSection>
      <Desc>
        Dota and the Dota logo are trademarks and/or registered trademarks of
        Valve Corporation. 2023 Valve Corporation, all rights reserved.
      </Desc>
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  margin: 30px;
`;

const Logo = styled.img`
  width: auto;
  object-fit: cover;
  height: 40px;
`;

const Desc = styled.p`
  width: 350px;
  color: grey;
  font: normal 0.8rem semplicitapro;
  padding: 10px;
  text-align: center;
`;

export default PageFooter;
