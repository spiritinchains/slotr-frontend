import Draggable from "react-draggable";

const Timeslot = (props: any) => {
  return (
    <Draggable axis="x">
      <div className="minicard bg-gray-300">
        {props.title} <br />
        starttime-endtime
      </div>
    </Draggable>
  );
};

export default Timeslot;
