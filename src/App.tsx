import { createRoot } from "react-dom/client";
import Job from "./components/Job";

import workExperienceData from "./data/WorkExperience.json";
import sections from "./data/Sections.json";
import { Section as SectionInterface } from "./interfaces/Section";
import Section from "./components/Section";
import Header from "./components/Header";

const App = () => {
  const sectionsColumn1 = sections.filter(({ col }) => col === 1);
  const sectionsColumn2 = sections.filter(({ col }) => col === 2);
  return (
    <div className="m-0 p-0 ">
      <Header></Header>
      <div className="flex justify-center">
        <div className="grid gap-x-7 sm:w-5/6 sm:grid-cols-1 lg:w-max-app lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-y-3">
            {sectionsColumn1.map((section: SectionInterface, index: number) => (
              <Section {...section}></Section>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-y-3">
            {sectionsColumn2.map((section: SectionInterface, index: number) => (
              <Section {...section}></Section>
            ))}
          </div>
          <Job {...workExperienceData[0]} />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
