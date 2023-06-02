import "./navigationBar.css";
import HomeButton from "./HomeButton";
import NavLinks from "./NavLinks";
import Login from "./Login";
import HomeBtn from "../04-Home/01-Heroes/HomeBtn";
import { BsSteam } from "react-icons/Bs";

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <HomeButton />
      <NavLinks />
      <Login />
      <a href="#">
        <HomeBtn variant="transparent">
          <BsSteam style={{ fontSize: "20", marginRight: "8" }} />
          <h4>play for free</h4>
        </HomeBtn>
      </a>
    </nav>
  );
};

export default NavigationBar;
