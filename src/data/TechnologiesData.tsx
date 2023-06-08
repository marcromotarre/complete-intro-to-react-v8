import { NavigateFunction } from "react-router";
import Modal, { ModalProps } from "../components/common/modal/Modal";
import ReactModal from "../components/mr-modals/ReactModal";
import ReduxModal from "../components/mr-modals/ReduxModal";

export default [
  {
    name: "react",
    icon: `icons/technologies/technology-react.svg`,
    click: () => {
      console.log("click on technology react");
    },
    modal: <ReactModal />,
  },

  {
    name: "nextjs",
    icon: `icons/technologies/technology-nextjs.svg`,
    click: () => {
      console.log("click on technology nextjs");
    },
    modal: <ReactModal />,
  },
  {
    name: "nodejs",
    icon: `icons/technologies/technology-nodejs.svg`,
    click: () => {
      console.log("click on technology nodejs");
    },
    modal: <ReactModal />,
  },
  {
    name: "webpack",
    icon: `icons/technologies/technology-webpack.svg`,
    click: () => {
      console.log("click on technology webpack");
    },
    modal: <ReactModal />,
  },
  {
    name: "git",
    icon: `icons/technologies/technology-git.svg`,
    click: () => {
      console.log("click on technology git");
    },
    modal: <ReactModal />,
  },
  {
    name: "redux",
    icon: `icons/technologies/technology-redux.svg`,
    click: () => {
      console.log("click on technology redux");
    },
    modal: <ReduxModal />,
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
    modal: <ReactModal />,
  },
  {
    name: "typescript",
    icon: `icons/technologies/technology-typescript.svg`,
    click: () => {
      console.log("click on technology typescript");
    },
    modal: <ReactModal />,
  },

  {
    name: "javascript",
    icon: `icons/technologies/technology-javascript.svg`,
    click: ({ navigate }: { navigate?: NavigateFunction }) => {
      navigate("/javascript");
    },
    modal: <ReactModal />,
  },
  {
    name: "figma",
    icon: `icons/technologies/technology-figma.svg`,
    click: () => {
      console.log("click on technology figma");
    },
    modal: <ReactModal />,
  },
  {
    name: "cypress",
    icon: `icons/technologies/technology-cypress.svg`,
    click: () => {
      console.log("click on technology cypress");
    },
    modal: <ReactModal />,
  },

  {
    name: "jest",
    icon: `icons/technologies/technology-jest.svg`,
    click: () => {
      console.log("click on technology jest");
    },
    modal: <ReactModal />,
  },
  {
    name: "yarn",
    icon: `icons/technologies/technology-yarn.svg`,
    click: () => {
      console.log("click on technology yarn");
    },
    modal: <ReactModal />,
  },
  {
    name: "npm",
    icon: `icons/technologies/technology-npm.svg`,
    click: () => {
      console.log("click on technology npm");
    },
    modal: <ReactModal />,
  },
  {
    name: "prisma",
    icon: `icons/technologies/technology-prisma.svg`,
    click: () => {
      console.log("click on technology prisma");
    },
    modal: <ReactModal />,
  },
];
