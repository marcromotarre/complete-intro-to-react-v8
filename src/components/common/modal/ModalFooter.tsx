import { ReactElement } from "react";

const ModalFooter = ({ children }: { children?: ReactElement }) => {
  return (
    <>
      <div className="w-full  border-b border-gray-600 p-4"></div>
      <div className="w-full p-4">{children}</div>
    </>
  );
};

export default ModalFooter;
