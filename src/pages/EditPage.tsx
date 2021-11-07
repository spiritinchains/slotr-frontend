import Timetable from "../components/Timetable";
import Navigation from "../components/Navigation";

import { FaPlusCircle, FaSave } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { TimetableState, getObjectFromState, TimetableObject } from '../TimetableData';
import { useState} from "react";
import { useParams} from 'react-router-dom';

import server from '../backend/actualServer';


const EditPage = () => {
  const [state, setState] = useRecoilState(timetableState);
  const [rowName, setRowName] = useState("DEFAULT");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("01:00");

  let {tid} = useParams();
  
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

  const handleRemoveRow = (index : number) => {
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
        rows: s.rows.filter( (row) => {
          return s.rows[index] != row;
        }),
        cols: s.cols,
      };
    });
  }

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

  const handleRemoveCol = (index : number) => {
    setState((s) => {
      let x: TimetableState = {
        name: s.name,
        rows: s.rows.map((e) => {
          return {
            title: e.title,
            slots: e.slots.filter((item)=>{
              return e.slots.indexOf(item) != index;
            }),
          };
        }),
        cols: s.cols.filter((item)=>{
          return s.cols.indexOf(item) != index;
        }),
      };
      return x;
    });

    console.log("REMOVE COL");
  }

  const handleSave = () => {
    server.saveDynamicData(getObjectFromState(state), tid);
  };
  const handleStaticSave = () => {
    console.log(tid);
  };


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
        <Timetable handleSlotChange={handleSlotChange} handleRemoveRow={handleRemoveRow} handleRemoveCol={handleRemoveCol}/>
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
