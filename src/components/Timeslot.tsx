import { FaPlus } from "react-icons/fa";

const Timeslot = (props: any) => {
  if (props.state === "empty") {
    return (
      <div className="minicard bg-gray-200 hover:bg-gray-300 text-gray-200 hover:text-gray-600">
        <FaPlus />
      </div>
    );
  } else if (props.state === "normal") {
    return (
      <div className="minicard text-gray-200 bg-gray-500 hover:bg-gray-600">
        {props.title}
      </div>
    );
  } else return <div></div>
};

export default Timeslot;
