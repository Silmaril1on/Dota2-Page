import video1 from "../../../../../00-Assets/abaddon_death_coil.mp4";
import video2 from "../../../../../00-Assets/abaddon_aphotic_shield.mp4";
import video3 from "../../../../../00-Assets/abaddon_frostmourne.mp4";
import video4 from "../../../../../00-Assets/abaddon_borrowed_time.mp4";
import video5 from "../../../../../00-Assets/abaddon_aghanims_shard.mp4";
import video6 from "../../../../../00-Assets/abaddon_aghanims_scepter.mp4";
import skill1 from "../../../../../00-Assets/abaddon_death_coil-min.png";
import skill2 from "../../../../../00-Assets/abaddon_aphotic_shield-min.png";
import skill3 from "../../../../../00-Assets/abaddon_frostmourne-min.png";
import skill4 from "../../../../../00-Assets/abaddon_borrowed_time-min.png";
import shard from "../../../../../00-Assets/aghs_shard.png";
import aghs from "../../../../../00-Assets/aghs_scepter.png";

const abaddon = [
  {
    video: video1,
    img: skill1,
    name: "mist coil",
    info: "Abaddon releases a coil of deathly mist that can damage an enemy unit or heal a friendly unit at the cost of some of Abaddon's health.",
    stat1: "ability:",
    abi1: "unit target",
    stat2: "affects:",
    abi2: "heroes",
    stat3: "damage type:",
    abi3: "magical",
    stat4: "self damage: ",
    abi4: "50.0%",
    stat5: "damage/heal: ",
    abi5: "110.0/160.0/210.0/260.0",
    stat6: "cast range:",
    abi6: "575.0",
    pierce1: "pierces spell:",
    pier1: "allies yes",
    pierce2: "immunity:",
    pier2: "enemies no",
    quote:
      "A mysterious vapor from the Font of Avernus now infuses the breath of Abaddon, who releases it at will.",
  },
  {
    video: video2,
    img: skill2,
    name: "aphotic shield",
    info: "Summons dark energies around an ally unit, creating an all damage barrier that absorbs a set amount of damage before expiring. When the barrier is destroyed it will burst and deal damage equal to the amount it could absorb to an area around it. Removes certain types of negative buffs and stuns on cast.",
    stat1: "ability:",
    abi1: "unit target",
    stat2: "affects:",
    abi2: "allied units",
    stat3: "damage type:",
    abi3: "magical",
    stat4: "duration",
    abi4: "15.0",
    stat5: "burst radius",
    abi5: "675.0",
    stat6: "damage barrier",
    abi6: "110.0/140.0/170.0/200.0",
    pierce1: "pierces spell immunity",
    pier1: "no",
    pierce2: "dispellable",
    pier2: "yes",
    quote:
      "The powers of the black mist rise to absorb attacks like the black mist absorbs light.",
  },
  {
    video: video3,
    img: skill3,
    name: "curse of avernus",
    info: "Abaddon strikes an enemy, slowing the target's movement speed. If the target gets hit 4.0 times, they become affected by a chilling curse causing them to be silenced and slowed, and all attacks against them gain an attack speed boost.",
    stat1: "ability:",
    abi1: "passive",
    stat2: "bassic duration",
    abi2: "5.0",
    stat3: "basic slow",
    abi3: "10.0%/15.0%/20.0%/25.0%",
    stat4: "curse duration",
    abi4: "4.5",
    stat5: "curse slow",
    abi5: "110.0/160.0/210.0/260.0",
    stat6: "curse attack speed",
    abi6: "40.0/60.0/80.0/100.0",
    pierce1: "pierces spell immunity",
    pier1: "no",
    pierce2: "dispellable:",
    pier2: "yes",
    quote:
      "While the baptized draw strength from the Font, the gifts of Avernus are debilitating to the uninitiated.",
  },
  {
    video: video4,
    img: skill4,
    name: "borrowed time",
    info: "When activated, all damage dealt to you will heal instead of harm. Most negative buffs will also be removed. If the ability is not on cooldown, it will automatically activate if your health falls below 400.0.",
    stat1: "ability:",
    abi1: "no target",
    stat2: "health threshold:",
    abi2: "400.0",
    stat3: "duration:",
    abi3: "4.0/5.0/6.0",
    stat4: "duration:",
    abi4: "7.0/8.0/9.0",
    stat5: "damage threshold",
    abi5: "525.0",
    stat6: "range:",
    abi6: "1200.0",
    pierce1: "dispellable",
    pier1: "no",
    quote:
      "The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. What should hurt, instead heals; and what should kill gives strength anew.",
  },
  {
    video: video5,
    img: skill3,
    img2: shard,
    name: "curse of avernus",
    shard: "shard ability upgrade",
    info: "Causes Mist Coil to deal Abaddon's attack damage on impact. Increases Curse of Avernus base slow.",
  },
  {
    video: video6,
    img: skill4,
    img2: aghs,
    name: "borrowed time",
    shard: "SCEPTER ABILITY UPGRADE",
    info: "Increases duration. While Borrowed Time is active, anytime an ally takes more than 525.0 damage while within 1200.0 range of Abaddon, an individual Mist Coil will automatically fire towards that ally.",
    quote:
      "The most unnatural of all the gifts of the Font of Avernus, this power defies mortal understanding. What should hurt, instead heals; and what should kill gives strength anew.",
  },
];

export default abaddon;
