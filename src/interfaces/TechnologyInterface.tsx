import { NavigateFunction } from "react-router";
import { ModalProps } from "../components/common/modal/Modal";
import React from "react";

type TechnologyInterface = {
  name: string;
  icon: string;
  click?: ({
    navigate,
  }: {
    navigate?: NavigateFunction;
    setModalProps: any;
  }) => void;
};

export default TechnologyInterface;
