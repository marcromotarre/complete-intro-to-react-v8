import { useState } from "react";
import Modal from "../common/modal/Modal";
import ReactIcon from "../common/icons/react";
import InfoIcon from "../common/icons/InfoIcon";

const ReactModal = () => {
  const buttons = [
    { name: "My Components", color: "denim" },
    { name: "Patterns", color: "jade" },
    { name: "Testing", color: "dodger-blue" },
    { name: "Hooks", color: "silver" },
    { name: "Project Setup", color: "yellow-orange" },
    { name: "Styling", color: "denim" },
    { name: "Interesting Questions", color: "silver" },
  ];
  return (
    <>
      <Modal onClose={() => {}}>
        <Modal.Header
          title="React"
          icon={<ReactIcon size={30} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <div>
              <p className="font-light text-medium-text">
                Since 2017 React is my passion. During these years I have become
                a subject matter expert.
              </p>
              <p className="font-light text-medium-text">
                Click on any of these sections to know more about.
              </p>
            </div>

            <div className="flex flex-wrap justify-start">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`m-2  rounded-md p-3 bg-${button.color}`}
                >
                  <p className="w-max font-light text-white">{button.name}</p>
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3">
            <InfoIcon color={"#7675FC"} size={25} />
            <p className="font-light text-black">
              This application have been developed with React
            </p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
