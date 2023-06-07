import { NavigateFunction } from "react-router";
import Modal, { ModalProps } from "../components/common/modal/Modal";

export default [
  {
    name: "react",
    icon: `icons/technologies/technology-react.svg`,
    click: () => {
      console.log("click on technology react");
    },
  },

  {
    name: "nextjs",
    icon: `icons/technologies/technology-nextjs.svg`,
    click: () => {
      console.log("click on technology nextjs");
    },
  },
  {
    name: "nodejs",
    icon: `icons/technologies/technology-nodejs.svg`,
    click: () => {
      console.log("click on technology nodejs");
    },
  },
  {
    name: "webpack",
    icon: `icons/technologies/technology-webpack.svg`,
    click: () => {
      console.log("click on technology webpack");
    },
  },
  {
    name: "git",
    icon: `icons/technologies/technology-git.svg`,
    click: () => {
      console.log("click on technology git");
    },
  },
  {
    name: "redux",
    icon: `icons/technologies/technology-redux.svg`,
    click: () => {
      console.log("click on technology redux");
    },
  },
  {
    name: "recoil",
    icon: `icons/technologies/technology-recoil.svg`,
    click: ({
      setModalProps,
    }: {
      setModalProps: React.Dispatch<React.SetStateAction<ModalProps>>;
    }) => {
      setModalProps({
        title: "State Management Libraries for React",
        children: <div>hola</div>,
        open: true,
      });
    },
  },
  {
    name: "typescript",
    icon: `icons/technologies/technology-typescript.svg`,
    click: () => {
      console.log("click on technology typescript");
    },
  },

  {
    name: "javascript",
    icon: `icons/technologies/technology-javascript.svg`,
    click: ({ navigate }: { navigate?: NavigateFunction }) => {
      navigate("/javascript");
    },
  },
  {
    name: "figma",
    icon: `icons/technologies/technology-figma.svg`,
    click: () => {
      console.log("click on technology figma");
    },
  },
  {
    name: "cypress",
    icon: `icons/technologies/technology-cypress.svg`,
    click: () => {
      console.log("click on technology cypress");
    },
  },

  {
    name: "jest",
    icon: `icons/technologies/technology-jest.svg`,
    click: () => {
      console.log("click on technology jest");
    },
  },
  {
    name: "yarn",
    icon: `icons/technologies/technology-yarn.svg`,
    click: () => {
      console.log("click on technology yarn");
    },
  },
  {
    name: "npm",
    icon: `icons/technologies/technology-npm.svg`,
    click: () => {
      console.log("click on technology npm");
    },
  },
  {
    name: "prisma",
    icon: `icons/technologies/technology-prisma.svg`,
    click: () => {
      console.log("click on technology prisma");
    },
  },
];
