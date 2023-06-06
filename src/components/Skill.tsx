import SkillInterface from "../interfaces/SkillInterface";

const Skill = (skill: SkillInterface) => {
  const { name, icon, click } = skill;

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-y-2 align-middle">
      <img
        className="h-14"
        src={`../icons/skills/${icon}.svg`}
        alt="some file"
        onClick={() => {
          if (click) click();
        }}
      />
      <p className="text-xs capitalize text-light-text">{name}</p>
    </div>
  );
};

export default Skill;
