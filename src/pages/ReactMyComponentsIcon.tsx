import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/common/Title";
import ComponentsData from "../data/ComponentsData";
import classnames from "classnames";
import {
  ReactIcon,
  GitIcon,
  TypescriptIcon,
  JavascriptIcon,
  WebpackIcon,
  NextIcon,
  JestIcon,
  NodeIcon,
  YarnIcon,
  NpmIcon,
  CypressIcon,
  PrismaIcon,
  GithubIcon,
} from "../components/common/icons";
import { cloneElement } from "react";
import Code from "../components/common/code/Code";
const ReactMyComponentsIcon = () => {
  const navigate = useNavigate();

  const icons = [
    { icon: <ReactIcon />, size: 40 },
    { icon: <GitIcon />, size: 40 },
    { icon: <TypescriptIcon />, size: 40 },
    { icon: <JavascriptIcon />, size: 40 },
    { icon: <WebpackIcon />, size: 40 },
    { icon: <NextIcon />, size: 40 },
    { icon: <JestIcon />, size: 40 },
    { icon: <NodeIcon />, size: 40 },
    { icon: <YarnIcon />, size: 40 },
    { icon: <NpmIcon />, size: 40 },
    { icon: <CypressIcon />, size: 40 },
    { icon: <PrismaIcon />, size: 40 },
    { icon: <GithubIcon />, size: 40 },
  ];
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-1 gap-y-4 p-8">
        <Title icon={<ReactIcon size={30} />} title="React My Components" />
        <p className="text-xl">Icon</p>
        <p className="font-light">
          Here you have a list of components developed by me.You can click on
          them to know more information such as the implementation code or some
          examples of them.
        </p>
        <p className="font-light">
          In order to have all icons grouped by a single import I created an
          index file and export them
        </p>
        <Code>
          <div>{`
import React from "./ReactIcon";
import Git from "./GitIcon";
import Typescript from "./TypescriptIcon";
// ... more icons


export const ReactIcon = React;
export const GitIcon = Git;
export const TypescriptIcon = Typescript;
// ... more icons


const Icons = {
  ReactIcon: ReactIcon,
  GitIcon: GitIcon,
  TypescriptIcon: TypescriptIcon,
  // ... more icons
};

export default Icons;
          `}</div>
        </Code>
        <p className="font-light">
          So if you want to use an icon just need to import them
        </p>
        <Code>
          <div>{`import { NpmIcon, GitIcon, ReactIcon } from "../components/common/icons";`}</div>
        </Code>
        <p className="font-light">
          {`Let's paint all this icons click on one of them and you will see that is possible to edit them. You will be able to see also the Typescript code of these icons.`}
        </p>
        <div className="flex flex-wrap items-center justify-start">
          {icons.map(({ icon, size }, index) => (
            <div key={index} className="p-3">
              {cloneElement(icon, { size })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactMyComponentsIcon;
