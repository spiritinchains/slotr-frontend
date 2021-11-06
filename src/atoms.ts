import { atom } from "recoil";
import { SlotState, TimetableState } from "./TimetableData";

const getBlankTableState = () : TimetableState => {
  return {
    name: "Table",
    rows: [],
    cols: []
  };
}

export const timetableState = atom({
  key: "timetable",
  default: getBlankTableState()
});
