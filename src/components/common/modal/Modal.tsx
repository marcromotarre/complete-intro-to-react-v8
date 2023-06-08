import React, {
  useEffect,
  useRef,
  MutableRefObject,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../icons/close";
import Title from "../Title";

const Modal = ({ children, onClose = () => {} }: ModalProps) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  const header: ReactElement | undefined = children?.find(
    (modalComponent: ReactElement) => modalComponent.type.name === "ModalHeader"
  );

  const body: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === "ModalBody"
  );

  const footer: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === "ModalFooter"
  );
  debugger;
  return createPortal(
    <div className="z-30">
      <button
        onClick={() => onClose()}
        className="fixed h-screen w-screen bg-black opacity-60"
      ></button>
      <div
        className="fixed left-1/2  top-1/2 h-[min(fit-content,90vh)] w-[min(600px,95%)] -translate-x-1/2 -translate-y-1/2
       rounded bg-white"
      >
        {header && React.cloneElement(header, { onClose, ...header.props })}
        {body && body}
        {footer && footer}
      </div>
    </div>,
    elRef.current
  );
};

const ModalHeader = ({
  title,
  onClose,
  icon,
}: {
  title: string;
  onClose?: VoidFunction;
  icon?: ReactElement;
}) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-600 p-4">
      <Title icon={icon} title={title} />

      <button
        className="group rounded-md p-2 hover:bg-robin-egg-blue"
        onClick={() => {
          if (onClose) onClose();
        }}
      >
        <CloseIcon
          className="fill-robin-egg-blue group-hover:fill-black"
          size={12}
        />
      </button>
    </div>
  );
};

const ModalBody = ({ children }: { children?: ReactElement }) => {
  return <>{children ? <div className="p-4">{children}</div> : <div></div>}</>;
};

const ModalFooter = ({ children }: { children?: ReactElement }) => {
  return (
    <>
      <div className="w-full  border-b border-gray-600 p-4"></div>
      <div className="w-full p-4">{children}</div>
    </>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export type ModalProps = {
  children?: Array<ReactElement>;
  onClose?: VoidFunction;
};

export default Modal;
