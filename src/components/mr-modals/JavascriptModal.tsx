import Modal from "../common/modal/Modal";
import ReactIcon from "../common/icons/ReactIcon";
import InfoIcon from "../common/icons/InfoIcon";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import Code from "../common/code/Code";
import JavascriptIcon from "../common/icons/JavascriptIcon";

const JavascriptModal = ({
  onClose = () => {},
}: {
  onClose?: VoidFunction;
}) => {
  const navigate = useNavigate();
  const buttons = [
    { name: "Patterns", color: "bg-jade", navigate: "/javascript/patterns" },
    { name: "Styling", color: "bg-denim", navigate: "/javascript/styling" },
    {
      name: "Interesting Questions",
      color: "bg-silver",
      navigate: "/rjavascripteact/questions",
    },
  ];
  return (
    <>
      <Modal onClose={onClose}>
        <Modal.Header
          title="Javascript"
          icon={<JavascriptIcon size={20} />}
        ></Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-5">
            <div className="flex flex-wrap justify-start">
              {buttons.map((button, index) => (
                <button
                  onClick={() => {
                    navigate(button.navigate);
                  }}
                  key={index}
                  className={classnames(
                    button.color,
                    "m-2",
                    "rounded-md",
                    "p-3"
                  )}
                >
                  <p className={`w-max font-light text-white`}>{button.name}</p>
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="grid grid-cols-[max-content_auto] items-center gap-x-3"></div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JavascriptModal;
