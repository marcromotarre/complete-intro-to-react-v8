import { ReactElement } from "react";

const ModalBody = ({ children }: { children?: ReactElement }) => {
  return <>{children ? <div className="p-4">{children}</div> : <div></div>}</>;
};

export default ModalBody;
