import Row from "./Row";
import Timeslot from "./Timeslot";

import { useState } from "react";
import { timetable } from "../sample.json";

const Timetable = (props: any) => {
  const [routine, setRoutine] = useState(timetable);
  return (
    <div className="timetable bg-gray-100 font-display border-gray-200 border">
        <div className="flex">
          <div className="minicard-width"></div>
          {routine.cols.map((colitem) => {
            return (
              <div className="minicard-width text-center">{colitem.start}-{colitem.end}</div>
            )
          })}
        </div>
        {routine.rows.map((rowitem) => {
          return (
            <Row title={rowitem.title}>
              {routine.cols.map((colitem) => {
                const x = routine.slots.find(
                  (slotitem) =>
                    slotitem.rowid === rowitem.id &&
                    slotitem.colid === colitem.id
                );
                if (x) {
                  return (
                    <Timeslot
                      empty={false}
                      title={x.title}
                      start={colitem.start}
                      end={colitem.end}
                    />
                  );
                } else {
                  return (
                    <Timeslot empty={true} />
                  );
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
