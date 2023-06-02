import React from "react";
import { BsSteam } from "react-icons/Bs";

function SteamButton() {
  return (
    <div className="mid-button">
      <div className="steam-logo">
        <BsSteam />
      </div>
      <div className="steam-content">
        <h2>play for free</h2>
        <h4>download on steam</h4>
      </div>
    </div>
  );
}

export default SteamButton;
