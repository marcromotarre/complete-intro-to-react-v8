import Certificates from "../components/sections/Certificates";
import Languages from "../components/sections/Languages";
import Skills from "../components/sections/Skills";
import Technologies from "../components/sections/Technologies";
import WorkExperience from "../components/sections/WorkExperience";

export default [
  {
    name: "Work Experience",
    icon: "section-work-experience",
    size: 100,
    component: WorkExperience,
    col: 1,
  },
  {
    name: "Education",
    icon: "section-education",
    size: 100,
    component: WorkExperience,
    col: 1,
  },
  {
    name: "Technologies",
    icon: "section-technologies",
    size: 80,
    component: Technologies,
    col: 2,
  },
  {
    name: "Skills",
    icon: "section-skills",
    size: 100,
    component: Skills,
    col: 2,
  },
  {
    name: "Languages",
    icon: "section-languages",
    size: 100,
    component: Languages,
    col: 2,
  },
  {
    name: "Certificates",
    icon: "section-certificates",
    size: 100,
    component: Certificates,

    col: 2,
  },
];
