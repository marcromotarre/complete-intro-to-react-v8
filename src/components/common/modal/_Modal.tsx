import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../icons/close";

const Modal = ({
  open = false,
  title = "",
  children,
  footer,
  onClose = () => {},
}: ModalProps) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  if (!open) return;

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

  return createPortal(
    <div className="z-30">
      <button
        onClick={() => onClose()}
        className="fixed h-screen w-screen bg-black opacity-60"
      ></button>
      <div
        className="fixed left-1/2 top-1/2  min-w-[600px] -translate-x-1/2 -translate-y-1/2
       rounded bg-white"
      >
        {children}
      </div>
    </div>,
    elRef.current
  );
};

export type ModalProps = {
  open?: boolean;
  title?: string;
  children?: ReactElement;
  onClose?: VoidFunction;
};

export default Modal;
