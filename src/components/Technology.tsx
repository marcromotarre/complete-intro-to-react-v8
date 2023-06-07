import { useNavigate } from "react-router";
import { Technology as TechnologyInterface } from "../interfaces/TechnologyInterface";
import { useState } from "react";
import Modal, { ModalProps } from "./common/modal/Modal";

const Technology = (technology: TechnologyInterface) => {
  const { name, icon, click } = technology;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps>({ title: "" });
  return (
    <div className="grid grid-cols-1 justify-center justify-items-center gap-y-2 align-middle">
      <button
        onClick={() => {
          if (click) click({ navigate, setModalProps });
          setShowModal(true);
        }}
      >
        <img className="h-14" src={icon} alt="some file" />
      </button>
      <p className="text-xs capitalize text-light-text">{name}</p>
      {showModal && (
        <Modal
          {...modalProps}
          onClose={() => {
            setShowModal(false);
          }}
        ></Modal>
      )}
    </div>
  );
};

export default Technology;
