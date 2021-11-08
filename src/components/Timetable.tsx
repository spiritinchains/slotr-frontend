import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { getStateFromObject } from "../TimetableData";
import { timetable } from "../sample.json";
import TimetableHeader from "./TimetableHeader";
import ColHeader from "./ColHeader";
import Row from "./Row";
import Timeslot from "./Timeslot";
import { useEffect } from "react";
import TimeslotStatic from "./TimeslotStatic";

const Timetable = (props: any) => {
  const [state, setState] = useRecoilState(timetableState);
  useEffect(() => {
    let x = getStateFromObject(timetable);
    setState(x);
  }, []);

  return (
    <div className="timetable bg-gray-100 border-gray-200 border">
      <TimetableHeader>
        {state.cols.map((colitem) => {
          return (
            <ColHeader
              title={`${colitem.start}-${colitem.end}`}
              removeListener={props.handleRemoveCol}
              index={state.cols.indexOf(colitem)}
              editable={props.editable}
            />
          );
        })}
      </TimetableHeader>
      {state.rows.map((rowitem) => {
        return (
          <Row
            title={rowitem.title}
            removeListener={props.handleRemoveRow}
            index={state.rows.indexOf(rowitem)}
            editable={props.editable}
          >
            {rowitem.slots.map((slotitem) => {
              if (props.editable === true) {
                return (
                  <Timeslot
                    title={slotitem.title}
                    state={slotitem.state}
                    rowindex={state.rows.indexOf(rowitem)}
                    index={rowitem.slots.indexOf(slotitem)}
                    onClick={props.handleSlotChange}
                  />
                );
              } else {
                return (
                  <TimeslotStatic
                    title={slotitem.title}
                    state={slotitem.state}
                  />
                );
              }
            })}
          </Row>
        );
      })}
    </div>
  );
};

export default Timetable;
