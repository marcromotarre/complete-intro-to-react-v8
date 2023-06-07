import { ICONS_PATH } from "../constants";

export default [
  {
    name: "creative",
    icon: `${ICONS_PATH}skills/skill-creative.svg`,
    click: () => {
      console.log("click on skill creative");
    },
  },
  {
    name: "team work",
    icon: `${ICONS_PATH}skills/skill-work-team.svg`,
    click: () => {
      console.log("click on skill team work");
    },
  },
  {
    name: "challanges lover",
    icon: `${ICONS_PATH}skills/skill-challange-lover.svg`,
    click: () => {
      console.log("click on skill challanges lover");
    },
  },
  {
    name: "positive",
    icon: `${ICONS_PATH}skills/skill-positive.svg`,
    click: () => {
      console.log("click on skill positive");
    },
  },
];
