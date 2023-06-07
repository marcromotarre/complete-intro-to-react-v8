import { ICONS_PATH } from "../constants";
import { Technology as TechnologyInterface } from "../interfaces/Technology";

const Technology = (technology: TechnologyInterface) => {
  const { name, icon, click } = technology;

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-y-2 align-middle">
      <button
        onClick={() => {
          if (click) click();
        }}
      >
        <img className="h-14" src={icon} alt="some file" />
      </button>
      <p className="text-xs capitalize text-light-text">{name}</p>
    </div>
  );
};

export default Technology;
