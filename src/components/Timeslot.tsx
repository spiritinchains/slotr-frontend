import { MouseEvent } from "react";
import { FaPlus } from "react-icons/fa";

const Timeslot = (props: any) => {
  const handleClick = (e: MouseEvent) => {
    console.log("clicked");
  };

  const handleClickEmpty = (e: MouseEvent) => {
    console.log("clicked empty " + e.buttons);
  };

  if (props.empty === true) {
    return (
      <div
        className="minicard-slot bg-gray-200 hover:bg-gray-300 text-gray-200 hover:text-gray-600"
        onClick={handleClickEmpty}
      >
          <FaPlus />
      </div>
    );
  }
  return (
    <div
      className="minicard-slot bg-gray-300 hover:bg-gray-400"
      onClick={handleClick}
    >
      {props.title} <br />
      {props.start}-{props.end}
    </div>
  );
};

export default Timeslot;
