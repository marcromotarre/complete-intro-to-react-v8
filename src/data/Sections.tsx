import Certificates from "../components/sections/Certificates";
import Education from "../components/sections/Education";
import Languages from "../components/sections/Languages";
import Skills from "../components/sections/Skills";
import Technologies from "../components/sections/Technologies";
import WorkExperience from "../components/sections/WorkExperience";
import { ICONS_PATH } from "../constants";

export default [
  {
    name: "Work Experience",
    icon: `${ICONS_PATH}sections/section-work-experience.svg`,
    size: 100,
    component: WorkExperience,
    col: 1,
  },
  {
    name: "Education",
    icon: `${ICONS_PATH}sections/section-education.svg`,
    size: 100,
    component: Education,
    col: 1,
  },
  {
    name: "Technologies",
    icon: `${ICONS_PATH}sections/section-technologies.svg`,
    size: 80,
    component: Technologies,
    col: 2,
  },
  {
    name: "Skills",
    icon: `${ICONS_PATH}sections/section-skills.svg`,
    size: 100,
    component: Skills,
    col: 2,
  },
  {
    name: "Languages",
    icon: `${ICONS_PATH}sections/section-languages.svg`,
    size: 100,
    component: Languages,
    col: 2,
  },
  {
    name: "Certificates",
    icon: `${ICONS_PATH}sections/section-certificates.svg`,
    size: 100,
    component: Certificates,

    col: 2,
  },
];
