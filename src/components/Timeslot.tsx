import { MouseEvent, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Timeslot = (props: any) => {
  const [state, setState] = useState(props.empty);

  if (state === true) {
    return (
      <div className="minicard bg-gray-200 hover:bg-gray-300 text-gray-200 hover:text-gray-600">
        <FaPlus />
      </div>
    );
  } else {
    return (
      <div className="minicard text-gray-200 bg-gray-500 hover:bg-gray-600">
        {props.title}
      </div>
    );
  }
};

export default Timeslot;
