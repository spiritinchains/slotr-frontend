import { FaPlus, FaSave, FaPen, FaTimesCircle } from 'react-icons/fa';
import { useState } from "react";

const Timeslot = (props: any) => {
  const [editTitle, setEditTitle] = useState("");

  if (props.state === "empty") {
    return (
      <div
        className="minicard bg-gray-200 hover:bg-gray-300 text-gray-200 hover:text-gray-600"
        onClick={() =>
          props.onClick(props.rowindex, props.index, "", "editing")
        }
      >
        <FaPlus />
      </div>
    );
  } else if (props.state === "editing") {
    return (
      <div className="minicard text-gray-200 bg-gray-500 hover:bg-gray-600">
        <input
          type="text"
          className="w-20 text-black"
          onChange={(e) => setEditTitle(e.target.value)}
          value={editTitle}
        />
        <button
          onClick={() =>
            editTitle=="" && props.onClick(props.rowindex, props.index, editTitle, "empty") ||
            editTitle!="" && props.onClick(props.rowindex, props.index, editTitle, "normal")
          }
        >
          <FaSave />
        </button>
      </div>
    );
  } else if (props.state === "normal") {
    return (
      <div className="minicard text-gray-200 bg-gray-500 hover:bg-gray-600">
        <p>{props.title}</p>
        <button
          onClick={() =>
            props.onClick(props.rowindex, props.index, editTitle, "editing")
          }
        >
         
          {" "}
          <FaPen />{" "}
        </button>

        <button onClick={() => {
          setEditTitle("");
          props.onClick(props.rowindex, props.index, editTitle, "empty")
        }}><FaTimesCircle/></button>
      </div>
    );
  } else return <div></div>;
};

export default Timeslot;
