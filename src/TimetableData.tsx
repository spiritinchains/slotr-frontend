// this file is a jogakhichuri ik

export interface TimetableObject {
  name: string;
  numrows: number;
  numcols: number;
  rows: string[];
  cols: {
    start: string;
    end: string;
  }[];
  slots: {
    title: string;
    row: number;
    col: number;
  }[];
}

export interface TimetableState {
  name: string;
  rows: {
    title: string,
    slots: SlotState[]
  }[],
  cols: {
    start: string,
    end: string
  }[];
}

export interface SlotState {
  title: string,
  state: "empty" | "normal" | "menu" | "editing"
};

export const getStateFromObject = (timetable: TimetableObject) => {
  let stateObj : TimetableState = {
    name: timetable.name,
    rows: [],
    cols: []
  };
  stateObj.cols = timetable.cols;
  for (let i = 0; i < timetable.numrows; i++) {
    let r : SlotState[] = [];
    for (let j = 0; j < timetable.numcols; j++) {
      r.push({
        title: "",
        state: "empty"
      });
    }
    stateObj.rows.push({
      title: timetable.rows[i],
      slots: r
    })
  }
  for (const e of timetable.slots) {
    stateObj.rows[e.row].slots[e.col] = {
      title: e.title,
      state: "normal"
    }
  }
  return stateObj;
};
