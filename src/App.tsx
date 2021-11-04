import React from "react";

import Timetable from "./components/Timetable";
import Row from "./components/Row";
import Timeslot from "./components/Timeslot";

import { timetable } from "./sample.json";
import Navigation from "./components/Navigation";

const getTable = () => {
  return (
    <div className="p-16">
      <Timetable>
        <div className="flex">
          <div className="minicard-width"></div>
          {timetable.cols.map((colitem) => {
            return (
              <div className="minicard-width text-center">{colitem.start}-{colitem.end}</div>
            )
          })}
        </div>
        {timetable.rows.map((rowitem) => {
          return (
            <Row title={rowitem.title}>
              {timetable.cols.map((colitem) => {
                const x = timetable.slots.find(
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
      </Timetable>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Navigation />
      {getTable()}
    </div>
  )
};

export default App;
