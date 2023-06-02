const tree =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg";
import skill1 from "../../../../../00-Assets/spectre_spectral_dagger.png";
import skill2 from "../../../../../00-Assets/spectre_desolate.png";
import skill3 from "../../../../../00-Assets/spectre_dispersion.png";
import skill4 from "../../../../../00-Assets/spectre_haunt.png";
import dager from "../../../../../00-Assets/spectre_aghanims_scepter.mp4";
import desolate from "../../../../../00-Assets/spectre_desolate.mp4";
import dispersion from "../../../../../00-Assets/spectre_dispersion.mp4";
import haunt from "../../../../../00-Assets/spectre_haunt.mp4";

const spectreData = [
  {
    id: 1,
    img: tree,
    skill: "talent-tree",
    subSkillContent: [
      {
        header: "talent tree",
      },
      {
        talent1: "+5% dispersion",
        level: 25,
        talent2: "+30% haunt illusion damage",
      },

      {
        talent1: "+12% spectral dagger slow/bonus",
        level: 20,
        talent2: "+350 health",
      },
      {
        talent1: "+80 spectral dagger damage",
        level: 15,
        talent2: "+12 desolate damage",
      },

      {
        talent1: "+5 all stats",
        level: 10,
        talent2: "-4s spectral dagger cooldown",
      },
    ],
  },
  {
    id: 2,
    img: skill1,
    skill: "SPECTRAL DAGGER",
    subSkillContent: [
      {
        video: dager,
        name: "spectral dagger",
        desc: "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre phases through otherwise impassable terrain. Spectral Dagger applies an instance of Desolate to targets with no allied units within 400 radius of them.",
      },
    ],
  },
  {
    id: 3,
    img: skill2,
    skill: "desolate",
    subSkillContent: [
      {
        video: desolate,
        name: "desolate",
        desc: "Deals bonus damage whenever Spectre attacks an enemy that does not have any allied units within a 400.0 radius around them.",
      },
    ],
  },
  {
    id: 4,
    img: skill3,
    skill: "dispersion",
    subSkillContent: [
      {
        video: dispersion,
        name: "dispersion",
        desc: "Damage done to Spectre is reflected on her enemies, leaving her unharmed. The effect lessens with distance.",
      },
    ],
  },
  {
    id: 5,
    img: skill4,
    skill: "haunt",
    subSkillContent: [
      {
        video: haunt,
        name: "haunt",
        desc: "Creates a spectral nemesis to attack each enemy hero. At any moment during the duration, Spectre can use Reality to exchange places of a given haunt.Haunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself. They ignore terrain.",
      },
    ],
  },
];

export default spectreData;
