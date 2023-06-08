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
  const ModalHeaderMemo = React.memo(ModalHeader);
  const ModalBodyMemo = React.memo(ModalBody);
  const ModalFooterMemo = React.memo(ModalFooter);

  document.body.style.overflow = "hidden";

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
    (modalComponent: JSX.Element) =>
      modalComponent.type.name === ModalHeaderMemo.type.name
  );

  const body: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === ModalBodyMemo.type.name
  );

  const footer: ReactElement | undefined = children?.find(
    (modalComponent) => modalComponent.type.name === ModalFooterMemo.type.name
  );

  const onCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    // component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div className="z-30">
      <button
        onClick={() => {
          onCloseModal();
        }}
        className="fixed h-screen w-screen bg-black opacity-60"
      ></button>
      <div className="fixed left-1/2 top-1/2 w-[min(600px,80%)] -translate-x-1/2  -translate-y-1/2">
        <div
          className="flex h-[max(fit-content,100vh)] max-h-[90vh] 
       flex-col rounded bg-white"
        >
          {header &&
            React.cloneElement(header, {
              onClose: onCloseModal,
              ...header.props,
            })}
          {body && body}
          {footer && footer}
        </div>
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
    <div
      id="Modal.Header"
      className="flex w-full items-center justify-between border-b border-gray-600 p-4"
    >
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
  return (
    <div className="overflow-y-scroll">
      {children ? <div className="p-4">{children}</div> : <div></div>}
    </div>
  );
};

const ModalFooter = ({ children }: { children?: ReactElement }) => {
  return (
    <div>
      <div className="w-full  border-b border-gray-600"></div>
      <div className="w-full p-4">{children}</div>
    </div>
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
