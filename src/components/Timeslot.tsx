import { MouseEvent } from "react";

const Timeslot = (props: any) => {
  const handleClick = (e : MouseEvent) => {
    console.log("clicked");
  }
  
  const handleClickEmpty = (e : MouseEvent) => {
    console.log("clicked empty " + e.buttons);
  }
  
  if (props.empty === true) {
    return <div className="minicard-slot bg-gray-200 hover:bg-gray-300" onClick={handleClickEmpty}></div>
  }
  return (
    <div className="minicard-slot bg-gray-300 hover:bg-gray-400" onClick={handleClick}>
      {props.title} <br />
      {props.start}-{props.end}
    </div>
  );
};

export default Timeslot;
