import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import Navigation from "../components/Navigation";
import Timetable from "../components/Timetable";
import { useParams } from 'react-router-dom';

import server from '../backend/actualServer';
import { useEffect, useState } from 'react';
import { getStateFromObject } from '../TimetableData';


const ViewPage = () => {
  const [state, setState] = useRecoilState(timetableState);
  const {tid} = useParams();



  useEffect(()=>{
    server.getDynamicData(String(tid)).then((x)=>{
      setState(getStateFromObject(x));
    })
  },[]);

  return (
    <div>
      <Navigation />
      <div className="mx-16 mt-8 py-4 text-gray-800 flex justify-between">
        <h1>{state.name}</h1>
        
      </div>
      <div className="mx-16">
        <Timetable editable={false} />
      </div>
    </div>
  );
};

export default ViewPage;
