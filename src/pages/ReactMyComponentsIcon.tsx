import Header from "../components/Header";
import Title from "../components/common/Title";
import classnames from "classnames";
import {
  ReactIcon,
  ReduxIcon,
  FigmaIcon,
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
  RecoilIcon,
} from "../components/common/icons";
import { cloneElement, useState } from "react";
import Code from "../components/common/code/Code";

const ReactMyComponentsIcon = () => {
  const icons = [
    { component: ReactIcon, icon: <ReactIcon />, size: 40 },
    { component: GitIcon, icon: <GitIcon />, size: 40 },
    { component: ReduxIcon, icon: <ReduxIcon />, size: 40 },
    { component: FigmaIcon, icon: <FigmaIcon />, size: 40 },
    { component: RecoilIcon, icon: <RecoilIcon />, size: 40 },
    { component: TypescriptIcon, icon: <TypescriptIcon />, size: 40 },
    { component: JavascriptIcon, icon: <JavascriptIcon />, size: 40 },
    { component: WebpackIcon, icon: <WebpackIcon />, size: 40 },
    { component: NextIcon, icon: <NextIcon />, size: 40 },
    { component: JestIcon, icon: <JestIcon />, size: 40 },
    { component: NodeIcon, icon: <NodeIcon />, size: 40 },
    { component: YarnIcon, icon: <YarnIcon />, size: 40 },
    { component: NpmIcon, icon: <NpmIcon />, size: 40 },
    { component: CypressIcon, icon: <CypressIcon />, size: 40 },
    { component: PrismaIcon, icon: <PrismaIcon />, size: 40 },
    { component: GithubIcon, icon: <GithubIcon />, size: 40 },
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
        <p className="font-light">{`You can edit some Icon properties such as colors and size`}</p>
        <div className="display grid grid-cols-1 gap-y-4">
          <div className="display grid grid-cols-[50px_auto]">
            <YarnIcon className="align-self-center justify-self-center " />
            <Code noHeader>
              <>{`<YarnIcon />`}</>
            </Code>
          </div>
          <div className="display grid grid-cols-[50px_auto] ">
            <YarnIcon size={30} />
            <Code noHeader>
              <>{`<YarnIcon />`}</>
            </Code>
          </div>
          <div className="display grid grid-cols-[50px_auto] ">
            <YarnIcon size={40} />
            <Code noHeader>
              <>{`<YarnIcon size={30} />`}</>
            </Code>
          </div>
          <div className="display grid grid-cols-[50px_auto] ">
            <YarnIcon size={40} catColor={"yellow"} />
            <Code noHeader>
              <>{`<YarnIcon catColor={"yellow"} size={30} />`}</>
            </Code>
          </div>
          <div className="display grid grid-cols-[50px_auto] ">
            <YarnIcon size={40} color={"green"} />
            <Code noHeader>
              <>{`<YarnIcon size={30} color={"green"} />`}</>
            </Code>
          </div>
          <div className="display grid grid-cols-[50px_auto] ">
            <YarnIcon size={40} circleColor={"transparent"} />
            <Code noHeader>
              <>{`<YarnIcon size={30} circleColor={"transparent"}  />`}</>
            </Code>
          </div>
        </div>
        <p className="font-light">Select an Icon and edit its props</p>
        <div className="flex max-w-[100vw] flex-shrink items-center justify-start overflow-x-scroll">
          {icons.map(({ icon, size }, index) => (
            <div
              key={index}
              className="m-2 flex
              h-[60px]
              w-[60px]
              items-center
              justify-center p-2"
            >
              {cloneElement(icon, { size })}
            </div>
          ))}
        </div>
        <div className="flex max-w-[100vw] flex-shrink items-center justify-start overflow-x-scroll">
          {icons.map(({ icon, size }, index) => (
            <div
              key={index}
              className="m-2 flex
                h-[60px]
                w-[60px]
                items-center
                justify-center rounded-lg bg-[#326EAC] p-2"
            >
              {cloneElement(icon, { size, color: "white" })}
            </div>
          ))}
        </div>
        <div className="flex max-w-[100vw] flex-shrink items-center justify-start overflow-x-scroll">
          {icons.map(({ icon, size }, index) => (
            <div
              key={index}
              className="m-2 flex
                h-[60px]
                w-[60px]
                items-center
                justify-center  p-2"
            >
              {cloneElement(icon, { size, color: "black" })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactMyComponentsIcon;
