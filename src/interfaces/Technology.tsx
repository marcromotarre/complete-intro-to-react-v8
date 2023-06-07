import { NavigateFunction } from "react-router";
import { ModalProps } from "../components/common/modal/Modal";

export type Technology = {
  name: string;
  icon: string;
  click?: ({ navigate }: { navigate?: NavigateFunction,  setModalProps: React.Dispatch<React.SetStateAction<ModalProps> }) => void;
};
