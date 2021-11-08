// Abandon all hope ye who enter here

import Timetable from "../components/Timetable";
import Navigation from "../components/Navigation";

import { FaPen, FaPlusCircle, FaSave } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { TimetableState, getObjectFromState, TimetableObject, getStateFromObject } from '../TimetableData';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import server from '../backend/actualServer';
import TitleCard from "../components/TitleCard";

//import server from "../backend/dummyServer";

const EditPage = () => {
  let {tid} = useParams();
  const [state, setState] = useRecoilState(timetableState);
  const [rowName, setRowName] = useState("DEFAULT");
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("01:00");
  const [tidState, setTid] = useState(tid);
  
  
  const handleAddRow = () => {
    if(state.rows.length >= 7) return;
    setState((s) => {
      let slotObjectTemplate = {
        title: "",
        state: "empty",
      };
      let emptySlots = new Array(s.cols.length);
      for (let i = 0; i < s.cols.length; i++) {
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

  const handleRemoveRow = (index: number) => {
    setState((s) => {
      let slotObjectTemplate = {
        title: "",
        state: "empty",
      };
      let emptySlots = new Array(s.cols.length);
      for (let i = 0; i < s.cols.length; i++) {
        emptySlots[i] = {};
        Object.assign(emptySlots[i], slotObjectTemplate);
      }
      return {
        name: s.name,
        rows: s.rows.filter((row) => {
          return s.rows[index] !== row;
        }),
        cols: s.cols,
      };
    });
  };

  const handleAddColumn = () => {
    if(state.cols.length >= 10) return;
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

  const handleRemoveCol = (index: number) => {
    setState((s) => {
      let x: TimetableState = {
        name: s.name,
        rows: s.rows.map((e) => {
          return {
            title: e.title,
            slots: e.slots.filter((item) => {
              return e.slots.indexOf(item) !== index;
            }),
          };
        }),
        cols: s.cols.filter((item) => {
          return s.cols.indexOf(item) !== index;
        }),
      };
      return x;
    });

    
  }

  

  const fetchDynamicData = async () => {
    let x = await server.getDynamicData(String(tid));
    console.log(x);
    setState( getStateFromObject(x));
  }

  const fetchStaticData = async () => {
    let x = await server.getStaticData(String(tid));
    console.log(x);
    setState( getStateFromObject(x));
  }

  const handleSave = () => {
    server.saveDynamicData(getObjectFromState(state), tid);
  };
  const handleStaticSave = () => {
    server.saveStaticData(getObjectFromState(state), tid);
  };

  const handleSlotChange = (
    rowindex: number,
    index: number,
    mytitle: string,
    mystate: "empty" | "normal" | "menu" | "editing"
  ) => {
    setState((s) => {
      let x: TimetableState = {
        name: s.name,
        rows: s.rows.map((e) => {
          return {
            title: e.title,
            slots: e.slots.map((slot) => {
              if (
                s.rows.indexOf(e) === rowindex &&
                e.slots.indexOf(slot) === index
              ) {
                return { title: mytitle, state: mystate };
              } else return slot;
            }),
          };
        }),
        cols: s.cols,
      };

      return x;
    });

    //console.log(rowindex, index);
  };

  useEffect(()=>{
    fetchDynamicData();
  }, [] );
  

  return (
    <div>
      <Navigation />
      <div className="flex justify-between mx-16 mt-8 py-4 text-gray-800">
        <TitleCard />
        <div className="flex">
        <button className="btn-yellow" onClick={()=>{
          fetchStaticData();
        }}>Load Saved Routine</button>
        <button className="btn-green" onClick={()=>{
          fetchDynamicData();
        }}>Load Current Routine</button>
        </div>
      </div>
      <div className="p-1 flex justify-center">
        <div className="flex border-gray-200 border rounded-lg bg-gray-100">
        <input
          type="text" className="edit_field" placeholder="Row/Day Name"
          onChange={(e) => {
            setRowName(e.target.value);
          }}
        />
        
        <button className="btn-std" onClick={handleAddRow}>
          <FaPlusCircle /> Add Day
        </button>
        <input type="time" onChange={(e) => setStartTime(e.target.value)} className="edit_field"/>{" "}
        <input type="time" onChange={(e) => setEndTime(e.target.value)} className="edit_field"/>
        <button className="btn-std" onClick={handleAddColumn}>
          <FaPlusCircle /> Add Timeslot
        </button>
        </div>
      </div>
      <div className="mx-16">
        <Timetable
          handleSlotChange={handleSlotChange}
          handleRemoveRow={handleRemoveRow}
          handleRemoveCol={handleRemoveCol}
          editable={true}
        />
      </div>
      <div className="p-1 flex justify-center">
        <button className="btn-green flex-wrap" onClick={handleSave}>
          <FaSave /> Save Current
        </button>
        <button className="btn-yellow flex-wrap" onClick={handleStaticSave}>
          <FaSave /> Save Permanent
        </button>
        
      </div>
    </div>
  );
};

export default EditPage;
