import CloseIcon from "../icons/close";

const ModalHeader = ({
  title,
  onClose,
}: {
  title: string;
  onClose: VoidFunction;
}) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-600 p-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <button
        className="group rounded-md p-2 hover:bg-robin-egg-blue"
        onClick={() => onClose()}
      >
        <CloseIcon
          className="fill-robin-egg-blue group-hover:fill-black"
          size={12}
        />
      </button>
    </div>
  );
};

export default ModalHeader;
