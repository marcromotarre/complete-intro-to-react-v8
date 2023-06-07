import { NavigateFunction } from "react-router";

export type Technology = {
  name: string;
  icon: string;
  click?: ({ navigate }: { navigate?: NavigateFunction }) => void;
};
