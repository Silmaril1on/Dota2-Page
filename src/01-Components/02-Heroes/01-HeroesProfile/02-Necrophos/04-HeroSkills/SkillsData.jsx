const tree =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg";
import skill1 from "../../../../../00-Assets/necrolyte_death_pulse.png";
import skill2 from "../../../../../00-Assets/necrolyte_sadist.png";
import skill3 from "../../../../../00-Assets/necrolyte_heartstopper_aura.png";
import skill4 from "../../../../../00-Assets/necrolyte_reapers_scythe.png";
import deathPulse from "../../../../../00-Assets/necrolyte_death_pulse.mp4";
import sadist from "../../../../../00-Assets/necrolyte_sadist.mp4";
import heartStop from "../../../../../00-Assets/necrolyte_heartstopper_aura.mp4";
import reaper from "../../../../../00-Assets/necrolyte_reapers_scythe.mp4";

const necroData = [
  {
    id: 1,
    img: tree,
    skill: "talent-tree",
    subSkillContent: [
      {
        header: "talent tree",
      },
      {
        talent1: "-2.5s death pulse cooldown",
        level: 25,
        talent2: "+0.5% heartstopper aura damage",
      },

      {
        talent1: "+30% heartstopper regen reduction",
        level: 20,
        talent2: "+15% ghost shroud self restoration amp",
      },
      {
        talent1: "+30 death pusle heal",
        level: 15,
        talent2: "+20% ghost shroud movement slow",
      },

      {
        talent1: "+2s heartstopper aura stackk duration",
        level: 10,
        talent2: "+100 reaper's scythe cast  range",
      },
    ],
  },
  {
    id: 2,
    img: skill1,
    skill: "DEATH PULSE",
    subSkillContent: [
      {
        video: deathPulse,
        name: "death pulse",
        desc: "Necrophos releases a wave of death around him, dealing damage to enemy units and healing allied units.",
      },
    ],
  },
  {
    id: 3,
    img: skill2,
    skill: "ghost shroud",
    subSkillContent: [
      {
        video: sadist,
        name: "ghost shroud",
        desc: "Necrophos slips into the realm that separates the living from the dead. Unable to attack or be attacked, he emits an aura that slows enemies around him. He takes additional magic damage in this form, but his restorative powers are amplified.",
      },
    ],
  },
  {
    id: 4,
    img: skill3,
    skill: "heartstopper aura",
    subSkillContent: [
      {
        video: heartStop,
        name: "heartstopper aura",
        desc: "Necrophos stills the hearts of his opponents, causing nearby enemy units to lose a percentage of their max health over time. Passively provides regen for 8.0 seconds for each unit Necrophos kills.",
      },
    ],
  },
  {
    id: 5,
    img: skill4,
    skill: "reaper's scythe",
    subSkillContent: [
      {
        video: reaper,
        name: "reaper's scythe",
        desc: "Stuns the target enemy hero, then deals damage based on how much life it is missing. If Necrophos kills an enemy this way, he'll permanently gain Health and Mana Regen. Any kill under this effect is credited to Necrophos.",
      },
    ],
  },
];

export default necroData;
