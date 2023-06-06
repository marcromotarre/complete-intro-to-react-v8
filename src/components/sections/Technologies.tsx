import technologiesData from "../../data/TechnologiesData";
import { Technology as TechnologyInterface } from "../../interfaces/Technology";
import Technology from "../Technology";

const Technologies = () => {
  return (
    <div className="grid grid-cols-5 gap-x-2 gap-y-4">
      {technologiesData.map(
        (technology: TechnologyInterface, index: number) => (
          <Technology key={index} {...technology} />
        )
      )}
    </div>
  );
};

export default Technologies;
