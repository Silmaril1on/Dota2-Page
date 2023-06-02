import React from "react";
import icon1 from "../../../../../00-Assets/icon_damage.png";
import icon2 from "../../../../../00-Assets/icon_attack_time.png";
import icon3 from "../../../../../00-Assets/icon_attack_range.png";
import icon4 from "../../../../../00-Assets/icon_projectile_speed.png";
import icon5 from "../../../../../00-Assets/icon_armor.png";
import icon6 from "../../../../../00-Assets/icon_magic_resist.png";
import icon7 from "../../../../../00-Assets/icon_movement_speed.png";
import icon8 from "../../../../../00-Assets/icon_turn_rate.png";
import icon9 from "../../../../../00-Assets/icon_vision.png";

const statsData = [
  {
    id: 1,
    title: "attack",
    info: [
      {
        id: 1,
        icons: icon1,
        stat: "48-54",
      },
      {
        id: 2,
        icons: icon2,
        stat: "1.7",
      },
      {
        id: 3,
        icons: icon3,
        stat: "600",
      },
      {
        id: 4,
        icons: icon4,
        stat: "1200",
      },
    ],
  },
  {
    id: 2,
    title: "defense",
    info: [
      {
        id: 1,
        icons: icon5,
        stat: "2.7",
      },
      {
        id: 2,
        icons: icon6,
        stat: "25%",
      },
    ],
  },
  {
    id: 3,
    title: "mobility",
    info: [
      {
        id: 7,
        icons: icon7,
        stat: "275",
      },
      {
        id: 8,
        icons: icon8,
        stat: "0.6",
      },
      {
        id: 9,
        icons: icon9,
        stat: "1800/800",
      },
    ],
  },
];

function HeroStats() {
  return (
    <div className="HS-main-container">
      <Attack />
      <h2>stats</h2>
    </div>
  );
}

function Attack() {
  const [lists, setLists] = React.useState(statsData);

  return (
    <div className="stat1">
      {lists.map((item) => {
        const { id, title, info } = item;
        return (
          <div key={id}>
            <h1>{title}</h1>
            {info.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.icons} alt="icon" />
                  <h3>{item.stat}</h3>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default HeroStats;
