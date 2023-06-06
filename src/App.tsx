import { createRoot } from "react-dom/client";
import { Section as SectionInterface } from "./interfaces/Section";
import Section from "./components/Section";
import Header from "./components/Header";
import sections from "./data/Sections";
import Me from "./components/Me";

const App = () => {
  const sectionsColumn1 = sections.filter(({ col }) => col === 1);
  const sectionsColumn2 = sections.filter(({ col }) => col === 2);
  return (
    <div className="m-0 p-0 ">
      <div className="grid grid-cols-[auto_min(90%,1300px)_auto]">
        <div className="bg-main" />
        <Me />
        <div className="bg-main" />
        <div className="bg-secondary" />
        <div className="h-14 bg-secondary"></div>
        <div className="bg-secondary" />

        <div></div>
        <div className="flex justify-center pt-5">
          <div className="grid gap-x-16 sm:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col  justify-around">
              {sectionsColumn1.map(
                (section: SectionInterface, index: number) => (
                  <Section key={index} {...section}></Section>
                )
              )}
            </div>
            <div className="flex flex-col justify-around">
              {sectionsColumn2.map(
                (section: SectionInterface, index: number) => (
                  <Section key={index} {...section}></Section>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
