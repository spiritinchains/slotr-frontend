import React from "react";

import Timetable from "./components/Timetable";
import Row from "./components/Row";
import Timeslot from "./components/Timeslot";

const App = () => {
  return (
  <Timetable>
    <Row title="Monday">
      <Timeslot title="class 1" />
      <Timeslot title="class 2" />
      <Timeslot title="class 3" />
    </Row>
  </Timetable>
  );
};

export default App;
