import React from "react";

import Timetable from "./components/Timetable";
import Row from "./components/Row";
import Timeslot from "./components/Timeslot";

const App = () => {
  return (
    <div className="p-16 w-4/5">
      <Timetable>
        <Row title="Mon">
          <Timeslot title="class 1" />
          <Timeslot title="class 2" />
          <Timeslot title="class 3" />
        </Row>
        <Row title="Wed">
          <Timeslot title="class 1" />
          <Timeslot title="class 2" />
          <Timeslot title="class 3" />
        </Row>
        <Row title="Fri">
          <Timeslot title="class 1" />
          <Timeslot title="class 2" />
          <Timeslot title="class 3" />
        </Row>
      </Timetable>
    </div>
  );
};

export default App;
