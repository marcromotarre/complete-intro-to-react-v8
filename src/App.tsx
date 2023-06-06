import { createRoot } from "react-dom/client";
import { Section as SectionInterface } from "./interfaces/Section";
import Section from "./components/Section";
import Header from "./components/Header";
import sections from "./data/Sections";
import me from "./data/Me.json";
import portfolioImage from "./icons/portfolio.jpg";

const App = () => {
  console.log(sections);
  const sectionsColumn1 = sections.filter(({ col }) => col === 1);
  const sectionsColumn2 = sections.filter(({ col }) => col === 2);
  return (
    <div className="m-0 p-0 ">
      <div className="grid grid-cols-[auto_min(90%,1300px)_auto]">
        <div className="bg-main" />
        <div className="flex justify-center bg-main ">
          <div className="grid grid-cols-[200px_auto] gap-x-10 p-4">
            <div className="flex items-center justify-center">
              <div className=" absolute h-halo-1 w-halo-1 rounded-full border-2"></div>
              <div className=" absolute h-halo-2 w-halo-2 rounded-full border-2"></div>
              <img
                className=" absolute  h-image-portfolio w-image-portfolio rounded-full"
                src={portfolioImage}
              ></img>
            </div>
            <div className=" grid grid-cols-1 gap-y-3">
              <div className="flex">
                <h1 className="text-6xl font-bold text-white">{me.name}</h1>
                <h1 className="pl-2 text-6xl font-thin text-white">
                  {me.lastName}
                </h1>
              </div>

              <h6 className="text-xl font-thin text-white">{me.role}</h6>
              <div className="h-px w-full bg-white"></div>
              <p className="font-thin text-white">{me.description}</p>
            </div>
          </div>
        </div>
        <div className="bg-main" />
        <div className="bg-secondary" />
        <div className="h-14 bg-secondary"></div>
        <div className="bg-secondary" />

        <div></div>
        <div className="flex justify-center">
          <div className="grid gap-x-16 sm:grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-y-3">
              {sectionsColumn1.map(
                (section: SectionInterface, index: number) => (
                  <Section key={index} {...section}></Section>
                )
              )}
            </div>
            <div className="grid grid-cols-1 gap-y-3">
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
const root = createRoot(container);
root.render(<App />);
