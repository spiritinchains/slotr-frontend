import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { getStateFromObject } from "../TimetableData";
import { timetable } from "../sample.json";
import TimetableHeader from "./TimetableHeader";
import ColHeader from "./ColHeader";
import Row from "./Row";
import Timeslot from "./Timeslot";
import { useEffect } from "react";

const Timetable = (props: any) => {
  const [state, setState] = useRecoilState(timetableState);
  useEffect(() => {
    let x = getStateFromObject(timetable);
    setState(x);
  });
  return (
    <div className="timetable bg-gray-100 border-gray-200 border">
      <TimetableHeader>
        {state.cols.map((colitem) => {
          return <ColHeader title={`${colitem.start}-${colitem.end}`} />;
        })}
      </TimetableHeader>
      {state.rows.map((rowitem) => {
        return (
          <Row title={rowitem.title}>
            {rowitem.slots.map((slotitem) => {
              return <Timeslot title={slotitem.title} state={slotitem.state} />;
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default Timetable;
