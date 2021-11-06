import Timetable from "../components/Timetable";
import Navigation from "../components/Navigation";

import { FaPlusCircle, FaSave } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { TimetableState } from "../TimetableData";
import { useState } from "react";

const EditPage = () => {
  const [state, setState] = useRecoilState(timetableState);
  const [rowName, setRowName] = useState("");
  const handleAddRow = () => {
    setState((s) => {
      return {
        name: s.name,
        rows: [
          ...s.rows,
          {
            title: rowName,
            slots: Array(s.cols.length).fill({
              title: "",
              state: "empty",
            }),
          },
        ],
        cols: s.cols,
      };
    });
  };
  const handleAddColumn = () => {
    setState((s) => {
      let x: TimetableState = {
        name: s.name,
        rows: s.rows.map((e) => {
          return {
            title: e.title,
            slots: [
              ...e.slots,
              {
                title: "",
                state: "empty",
              },
            ],
          };
        }),
        cols: [
          ...s.cols,
          {
            start: "14:00",
            end: "16:00",
          },
        ],
      };
      return x;
    });
  };
  const handleSave = () => {};
  return (
    <div>
      <Navigation />
      <div className="mx-16 py-4 text-gray-800">
        <h1>Table Title</h1>
      </div>
      <div className="p-1 flex justify-center">
        <input type="text" onChange={(e) => {
          setRowName(e.target.value);
        }} />
        <button className="btn-std" onClick={handleAddRow}>
          <FaPlusCircle /> Add Row
        </button>
        <button className="btn-std" onClick={handleAddColumn}>
          <FaPlusCircle /> Add Column
        </button>
      </div>
      <div className="mx-16">
        <Timetable />
      </div>
      <div className="p-1 flex justify-center">
        <button className="btn-green" onClick={handleSave}>
          <FaSave /> Save
        </button>
      </div>
    </div>
  );
};

export default EditPage;
