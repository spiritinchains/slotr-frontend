import Row from "./Row";
import Timeslot from "./Timeslot";
import TimetableHeader from "./TimetableHeader";
import ColHeader from "./ColHeader";

import { useState } from "react";
import { timetable } from "../sample.json";

const Timetable = (props: any) => {
  const [routine, setRoutine] = useState(timetable);
  return (
    <div className="timetable bg-gray-100 border-gray-200 border">
      <TimetableHeader>
        {routine.cols.map((colitem) => {
          return <ColHeader title={colitem.start + "-" + colitem.end} />;
        })}
      </TimetableHeader>
      {routine.rows.map((rowitem) => {
        return (
          <Row title={rowitem.title}>
            {routine.cols.map((colitem) => {
              const x = routine.slots.find(
                (slotitem) =>
                  slotitem.rowid === rowitem.id && slotitem.colid === colitem.id
              );
              if (x) {
                return <Timeslot empty={false} title={x.title} />;
              } else {
                return <Timeslot empty={true} />;
              }
            })}
          </Row>
        );
      })}
      {props.children}
    </div>
  );
};

export default Timetable;
