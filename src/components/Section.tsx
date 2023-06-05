import { Section as SectionInterface } from "../interfaces/Section";

const Section = (section: SectionInterface) => {
  const { name, icon } = section;
  return (
    <div className="grid w-full grid-cols-[max-content_auto_48px] items-center gap-x-7">
      <h1 className="self-center">{name}</h1>
      <div className="flex h-full items-center justify-center">
        <div className="h-0.5 w-full bg-black"></div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-black">
        <img
          className="h-6"
          src="../icons/work-experience-icon.svg"
          alt="some file"
        />
      </div>
    </div>
  );
};

export default Section;
