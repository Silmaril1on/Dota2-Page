const tree =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg";
import skill1 from "../../../../../00-Assets/abaddon_death_coil-min.png";
import skill2 from "../../../../../00-Assets/abaddon_aphotic_shield-min.png";
import skill3 from "../../../../../00-Assets/abaddon_frostmourne-min.png";
import skill4 from "../../../../../00-Assets/abaddon_borrowed_time-min.png";
import mistCoil from "../../../../../00-Assets/abaddon_death_coil.mp4";
import aphoticShield from "../../../../../00-Assets/abaddon_aphotic_shield.mp4";
import frostMourne from "../../../../../00-Assets/abaddon_frostmourne.mp4";
import borrowedTime from "../../../../../00-Assets/abaddon_borrowed_time.mp4";

const imageData = [
  {
    id: 1,
    img: tree,
    skill: "talent-tree",
    subSkillContent: [
      {
        header: "talent tree",
      },
      {
        talent1: "400 AoE Mist Coil",
        level: 25,
        talent2: "-1 Curse of Avernus Attacks Required",
      },

      {
        talent1: "85 DPS Borrowed Time Immolation",
        level: 20,
        talent2: "+100 Aphotic Shield Barrier Amount",
      },
      {
        talent1: "+50 Mist Coil Heal/Damage",
        level: 15,
        talent2: "+65 Damage",
      },

      {
        talent1: "+8 strength",
        level: 10,
        talent2: "-15% Curse of Avernus Movement Slow",
      },
    ],
  },
  {
    id: 2,
    img: skill1,
    skill: "mist-coil",
    subSkillContent: [
      {
        video: mistCoil,
        name: "mist coil",
        desc: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health",
      },
    ],
  },
  {
    id: 3,
    img: skill2,
    skill: "aphotic-shield",
    subSkillContent: [
      {
        video: aphoticShield,
        name: "aphotic shield",
        desc: "Summons dark energies around an ally unit, creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.",
      },
    ],
  },
  {
    id: 4,
    img: skill3,
    skill: "curse-of-avernus",
    subSkillContent: [
      {
        video: frostMourne,
        name: "frost mourne",
        desc: "Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4.0 times, they become affected by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.",
      },
    ],
  },
  {
    id: 5,
    img: skill4,
    skill: "borrowed-time",
    subSkillContent: [
      {
        video: borrowedTime,
        name: "borrrowed time",
        desc: "When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.0.",
      },
    ],
  },
];

export default imageData;
