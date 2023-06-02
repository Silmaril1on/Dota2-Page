import React from "react";
import "./navigationBar.css";
import { Outlet, NavLink } from "react-router-dom";

function NavLinks() {
  const [subMenu, setSubMenu] = React.useState(false);

  return (
    <ul className="nav-links">
      <li
        onMouseEnter={() => {
          setSubMenu(true);
        }}
        onMouseLeave={() => {
          setSubMenu(false);
        }}
      >
        game
        {subMenu && <SubLink />}
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNavLink" : "a")}
          to="/heroes"
        >
          heroes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? "activeNavLink" : "a")}
        >
          news
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/esports"
          className={({ isActive }) => (isActive ? "activeNavLink" : "a")}
        >
          esports
        </NavLink>
      </li>
    </ul>
  );
}

function SubLink() {
  return (
    <div className="submenu">
      <a href="#">patches</a>
      <a href="#">gameplay updates</a>
      <a href="#">previous updates</a>
    </div>
  );
}

export default NavLinks;
