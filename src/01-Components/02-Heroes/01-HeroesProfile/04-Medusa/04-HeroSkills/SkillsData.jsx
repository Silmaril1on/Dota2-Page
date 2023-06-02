const tree =
  "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg";
import skill1 from "../../../../../00-Assets/medusa_split_shot.png";
import skill2 from "../../../../../00-Assets/medusa_mystic_snake.png";
import skill3 from "../../../../../00-Assets/medusa_mana_shield.png";
import skill4 from "../../../../../00-Assets/medusa_stone_gaze.png";
import splitShot from "../../../../../00-Assets/medusa_split_shot.mp4";
import mysticSnake from "../../../../../00-Assets/medusa_mystic_snake.mp4";
import manaShield from "../../../../../00-Assets/medusa_mana_shield.mp4";
import stoneGaze from "../../../../../00-Assets/medusa_stone_gaze.mp4";

const medusaData = [
  {
    id: 1,
    img: tree,
    skill: "talent-tree",
    subSkillContent: [
      {
        header: "talent tree",
      },
      {
        talent1: "split shot uses modifiers",
        level: 25,
        talent2: "+1.3 mana shield damage per mana",
      },

      {
        talent1: "+2s stone gaze duration",
        level: 20,
        talent2: "+2 mystic snake bounces",
      },
      {
        talent1: "-3s mystic snake cooldown",
        level: 15,
        talent2: "-10% split shot damage penalty",
      },

      {
        talent1: "+5% stone gaze bonus physical damage",
        level: 10,
        talent2: "+15% mystic snake turn and movement speed slow",
      },
    ],
  },
  {
    id: 2,
    img: skill1,
    skill: "split shot",
    subSkillContent: [
      {
        video: splitShot,
        name: "split shot",
        desc: "Medusa magically splits her shot into several arrows. These arrows deal a lower percent of her normal damage. The extra targets will not receive other attack effects (such as critical strike).",
      },
    ],
  },
  {
    id: 3,
    img: skill2,
    skill: "mystic snake",
    subSkillContent: [
      {
        video: mysticSnake,
        name: "mystic snake",
        desc: "A mystic snake made of energy jumps from target to target dealing damage. Damage and speed increases with each jump. After it reaches its last target, it returns to Medusa to replenish her with mana. The snake returns 16.0% mana based on the targets' total mana.",
      },
    ],
  },
  {
    id: 4,
    img: skill3,
    skill: "mana shield",
    subSkillContent: [
      {
        video: manaShield,
        name: "mana shield",
        desc: "Creates a shield that absorbs 98.0% of incoming damage in exchange for Medusa's mana. Provides bonus mana capacity.",
      },
    ],
  },
  {
    id: 5,
    img: skill4,
    skill: "stone gaze",
    subSkillContent: [
      {
        video: stoneGaze,
        name: "stone gaze",
        desc: "Any enemy units looking at Medusa will have their movement and attack speed slowed. If 2.0 seconds of total time is accumulated looking at Medusa while Stone Gaze is active, that unit will turn to stone. Petrified units are stunned, and take bonus physical attack damage.",
      },
    ],
  },
];

export default medusaData;
