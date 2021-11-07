import { FaTimesCircle } from "react-icons/fa";

const ColHeader = (props: any) => {
  return (
    <div className="minicard bg-gray-200">
      {props.title}
      {props.editable ? (
        <button
          className="bg-red"
          onClick={() => props.removeListener(props.index)}
        >
          <FaTimesCircle />
        </button>
      ) : null}
    </div>
  );
};

export default ColHeader;
