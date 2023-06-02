import video1 from "../../../../../00-Assets/spectre_spectral_dagger.mp4";
import video2 from "../../../../../00-Assets/spectre_desolate.mp4";
import video3 from "../../../../../00-Assets/spectre_dispersion.mp4";
import video4 from "../../../../../00-Assets/spectre_haunt.mp4";
import video5 from "../../../../../00-Assets/spectre_aghanims_shard.mp4";
import video6 from "../../../../../00-Assets/spectre_aghanims_scepter.mp4";
import skill1 from "../../../../../00-Assets/spectre_spectral_dagger.png";
import skill2 from "../../../../../00-Assets/spectre_desolate.png";
import skill3 from "../../../../../00-Assets/spectre_dispersion.png";
import skill4 from "../../../../../00-Assets/spectre_haunt.png";
import shard from "../../../../../00-Assets/aghs_shard.png";
import aghs from "../../../../../00-Assets/aghs_scepter.png";

const spectre = [
  {
    video: video1,
    img: skill1,
    name: "SPECTRAL DAGGER",
    info: "Spectre flings a dagger to draw a Shadow Path, dealing damage and slowing the movement speed of any enemies along the trail. Units hit by the dagger also trail a Shadow Path. While treading the path, Spectre phases through otherwise impassable terrain. Spectral Dagger applies an instance of Desolate to targets with no allied units within 400 radius of them.",
    stat1: "ability:",
    abi1: "unit target",
    stat2: "affects:",
    abi2: "enemy heroes",
    stat3: "damage type:",
    abi3: "magical",
    stat4: "move speed change",
    abi4: "10.0%/14.0%/18.0%/22.0%",
    stat5: "duration",
    abi5: "7.0",
    stat6: "cast range:",
    abi6: "575.0",
    pierce1: "dispellable",
    pier1: "yes",
    quote:
      "Mercurial's dagger eclipses the physical plane in shadow, a state in which mortals cower, but spectres thrive.",
  },
  {
    video: video2,
    img: skill2,
    name: "desolate",
    info: "Deals bonus damage whenever Spectre attacks an enemy that does not have any allied units within a 400.0 radius around them.",
    stat1: "ability:",
    abi1: "passive",
    stat3: "damage type:",
    abi3: "pure",
    stat4: "bonus damage",
    abi4: "21.0/34.0/47.0/60.0",
    stat5: "radius",
    abi5: "400.0",
    pierce1: "pierces spell immunity",
    pier1: "yes",
    quote:
      "Often times, warriors find themselves alone with a vision of Mercurial - the fated question is if it is the true Spectre.",
  },
  {
    video: video3,
    img: skill3,
    name: "dispersion",
    info: "Damage done to Spectre is reflected on her enemies, leaving her unharmed. The effect lessens with distance.",
    stat1: "ability:",
    abi1: "passive",
    stat2: "bassic duration",
    abi2: "5.0",
    stat3: "min radius",
    abi3: "400.0",
    stat4: "max radius",
    abi4: "800.",
    pierce1: "pierces spell immunity",
    pier1: "yes",
    quote:
      "A daunting task lies before enemies of Mercurial - killing a shadow with blade and magic.",
  },
  {
    video: video4,
    img: skill4,
    name: "haunt",
    info: "Creates a spectral nemesis to attack each enemy hero. At any moment during the duration, Spectre can use Reality to exchange places of a given haunt. Haunt illusions are uncontrollable, take extra damage, and deal less damage than Spectre herself.  They ignore terrain.",
    stat1: "ability:",
    abi1: "no target",
    stat2: "haunt duration",
    abi2: "5.0/6.0/7.0",
    stat3: "haunt damage:",
    abi3: "40.0%/60.0%/80.0%",
    stat4: "haunt damage taken:",
    abi4: "200.0%",
    pierce1: "pierces spell immunity",
    pier1: "yes",
    quote:
      "At the height of combat, Mercurial's physical manifestation shatters, and the shadowy pieces haunt those who still cling to life.",
  },
  {
    video: video5,
    img: skill3,
    img2: shard,
    name: "dispersion",
    shard: "shard ability upgrade",
    info: "Dispersion can be activated to increase damage reflected by 0.0% for 0.0s. Cooldown 0.0. Manacost 0.0.",
  },
  {
    video: video6,
    img: skill4,
    img2: aghs,
    name: "shadow step",
    shard: "SCEPTER ABILITY UPGRADE",
    info: "Allows Spectre to perform a single target Haunt on a visible enemy. Casts a Spectral Dagger on the target.",
    quote:
      "With great focus of will, Mercurial can sometimes limit the extent of her division.",
  },
];

export default spectre;
