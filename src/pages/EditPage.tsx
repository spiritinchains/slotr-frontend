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
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  
  const handleAddRow = () => {
    
    setState((s) => {
      let slotObjectTemplate = {
        title: "",
        state: "empty",
      };
      let emptySlots = new Array(s.cols.length);
      for(let i = 0; i < s.cols.length; i++)
      {
        emptySlots[i] = {};
        Object.assign(emptySlots[i], slotObjectTemplate);
      }
      return {
        name: s.name,
        rows: [
          ...s.rows,
          {
            title: rowName,
            slots: emptySlots,
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
            start: startTime,
            end: endTime,
          },
        ],
      };
      return x;
    });
  };

  const handleSave = () => {};

  const handleSlotChange = (rowindex : number, index : number, mytitle: string, mystate: "empty" | "normal" | "menu" | "editing") => {
    setState((s) => {
      let x: TimetableState = {
        name: s.name,
        rows: s.rows.map((e) => {
            return {
              title: e.title,
              slots: e.slots.map((slot) =>{
                if(s.rows.indexOf(e) == rowindex && e.slots.indexOf(slot) == index)
                {
                  return { title: mytitle, state: mystate};
                }
                else
                  return slot;
              }),
            };
        }),
        cols: s.cols,
      };


      return x;
    })

    //console.log(rowindex, index);
  };
  

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
        <input type="time" onChange={(e)=>setStartTime(e.target.value)}/> <input type="time" onChange={(e)=>setEndTime(e.target.value)}/> 
        <button className="btn-std" onClick={handleAddColumn}>
          <FaPlusCircle /> Add Column
        </button>
      </div>
      <div className="mx-16">
        <Timetable handleSlotChange={handleSlotChange}/>
      </div>
      <div className="p-1 flex justify-center">
        <button className="btn-green" onClick={handleSave}>
          <FaSave /> Save
        </button>
        <button className="btn-green" onClick={handleSave}>
          <FaSave /> Save Permanent
        </button>
      </div>
    </div>
  );
};

export default EditPage;
