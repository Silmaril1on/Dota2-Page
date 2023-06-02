import video1 from "../../../../../00-Assets/medusa_split_shot.mp4";
import video2 from "../../../../../00-Assets/medusa_mystic_snake.mp4";
import video3 from "../../../../../00-Assets/medusa_mana_shield.mp4";
import video4 from "../../../../../00-Assets/medusa_stone_gaze.mp4";
import video5 from "../../../../../00-Assets/medusa_aghanims_shard.mp4";
import video6 from "../../../../../00-Assets/medusa_aghanims_scepter.mp4";
import skill1 from "../../../../../00-Assets/medusa_split_shot.png";
import skill2 from "../../../../../00-Assets/medusa_mystic_snake.png";
import skill3 from "../../../../../00-Assets/medusa_mana_shield.png";
import skill4 from "../../../../../00-Assets/medusa_stone_gaze.png";
import shard from "../../../../../00-Assets/aghs_shard.png";
import aghs from "../../../../../00-Assets/aghs_scepter.png";

const medusa = [
  {
    video: video1,
    img: skill1,
    name: "split shot",
    info: "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage.The extra targets will not receive other attack effects (such as critical strike).",
    stat1: "ability:",
    abi1: "no target",
    stat4: "outgoing damage:",
    abi4: "10.0%/14.0%/18.0%/22.0%",
    stat5: "extra targets:",
    abi5: "4.0",
    pierce1: "dispellable",
    pier1: "yes",
    quote: "The Gorgon's curse is her greatest strength.",
  },
  {
    video: video2,
    img: skill2,
    name: "mystic snake",
    info: "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns 16.0% mana based on the targets' total mana.",
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
    name: "mana shield",
    info: "Creates a shield that absorbs 98.0% of incoming damage in exchange for Medusa's mana. Provides bonus mana capacity.",
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
      "While Medusa was not gifted with eternal life upon birth, her curse bestowed her with impressive defensive powers.",
  },
  {
    video: video4,
    img: skill4,
    name: "stone gaze",
    info: "Any enemy units looking at Medusa will have their movement and attack speed slowed.  If 2.0 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone.  Petrified units are stunned, and take bonus physical attack damage.",
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
    quote: "The beauty of Medusa is legendary.",
  },
  {
    video: video5,
    img: skill3,
    img2: shard,
    name: "cold blooded",
    shard: "SHARD GRANTS NEW ABILITY",
    info: "When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy.",
  },
  {
    video: video6,
    img: skill4,
    img2: aghs,
    name: "mystic snake",
    shard: "SCEPTER ABILITY UPGRADE",
    info: "Causes Mystic Snake to turn enemies hit into stone. Stone duration increases with each bounce of the Mystic Snake.",
    quote: "the Gorgon's curse is her greatest strength.",
  },
];

export default medusa;
