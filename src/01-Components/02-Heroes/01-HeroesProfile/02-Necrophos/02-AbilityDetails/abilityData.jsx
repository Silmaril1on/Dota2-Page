import video1 from "../../../../../00-Assets/necrolyte_death_pulse.mp4";
import video2 from "../../../../../00-Assets/necrolyte_sadist.mp4";
import video3 from "../../../../../00-Assets/necrolyte_heartstopper_aura.mp4";
import video4 from "../../../../../00-Assets/necrolyte_reapers_scythe.mp4";
import video5 from "../../../../../00-Assets/necrolyte_aghanims_shard.mp4";
import video6 from "../../../../../00-Assets/necrolyte_aghanims_scepter.mp4";
import skill1 from "../../../../../00-Assets/necrolyte_death_pulse.png";
import skill2 from "../../../../../00-Assets/necrolyte_sadist.png";
import skill3 from "../../../../../00-Assets/necrolyte_heartstopper_aura.png";
import skill4 from "../../../../../00-Assets/necrolyte_reapers_scythe.png";
import shard from "../../../../../00-Assets/aghs_shard.png";
import aghs from "../../../../../00-Assets/aghs_scepter.png";

const necrophos = [
  {
    video: video1,
    img: skill1,
    name: "death pulse",
    info: "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units.",
    stat1: "ability:",
    abi1: "no target",
    stat3: "damage type:",
    abi3: "magical",
    stat4: "damage: ",
    abi4: "100/160/220/280",
    stat5: "radius:",
    abi5: "500.0",
    stat6: "heal:",
    abi6: "55.0/80.0/105.0/130./",
    pierce1: "pierces spell:",
    pier1: "allies yes enemies",
    pierce2: "immunity:",
    pier2: "no",
    quote:
      "Poor souls who succumb to Rotund'jere's plagues are recycled for future use.",
  },
  {
    video: video2,
    img: skill2,
    name: "ghost shroud",
    info: "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified.",
    stat1: "ability:",
    abi1: "no target",
    stat2: "duration",
    abi2: "3.0/3.5/4.0/4.5",
    stat3: "restoration amplification:",
    abi3: "45.0%/55.0%",
    stat4: "movement slow:",
    abi4: "10.0%/15.0%",
    stat5: "slow radius:",
    abi5: "750.0",
    stat6: "increased magic damage",
    abi6: "-25.0%",
    pierce1: "pierces spell immunity",
    pier1: "no",
    pierce2: "dispellable",
    pier2: "yes",
    quote:
      "Rotund'jere uses the souls of his victims as bridge from life to afterlife.",
  },
  {
    video: video3,
    img: skill3,
    name: "heartstopper aura",
    info: "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time. Passively provides regen for 8.0 seconds for each unit Necrophos kills.",
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
      "Those who come within a short distance of Necrophos can feel pestilence and plague in the air.",
  },
  {
    video: video4,
    img: skill4,
    name: "reaper's scythe",
    info: "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos.",
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
      "The amount of death and suffering in the air increases the power of Necrophos's plague magic.",
  },
  {
    video: video5,
    img: skill3,
    img2: shard,
    name: "DEATH SEEKER",
    shard: "shard grants new ability",
    info: "Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies.",
  },
  {
    video: video6,
    img: skill4,
    img2: aghs,
    name: "GHOST SHROUD",
    shard: "SCEPTER ABILITY UPGRADE",
    info: "Reduces Ghost Shroud cooldown.",
    quote:
      "Rotund'jere uses the souls of his victims as bridge from life to afterlife.",
  },
];

export default necrophos;
