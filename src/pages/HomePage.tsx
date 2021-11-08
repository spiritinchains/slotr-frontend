import Navigation from "../components/Navigation";
import server from '../backend/actualServer';
import { useState} from 'react';
import {Link} from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";


const HomePage = () => {
  const [tid, setTid] = useState("");
  const createEntry = async () => {
    let t = await server.createRoutineData();
    setTid(String(t.id));
  }
  return (
    <div>
      <Navigation />
      <div className="mt-16 flex flex-col justify-center items-center font-display">
        <span className="m-8 font-logo text-6xl">[slotr]</span>
        <span className="font-display m-8">A routine management app</span>
        <button className="flex justify-center items-center gap-2 w-40 rounded-xl shadow-xl p-4 m-2 transition-colors hover:bg-green-600 bg-green-500 text-green-100"
         onClick={()=> createEntry()}>
          <FaPlusCircle /> Create
        </button>
        
        { tid!= "" &&<div> <Link to={`edit/${tid}`}> EDIT LINK : </Link> 
        <div>{`edit/${tid}`} </div> </div> }
        { tid!= "" &&<div> <Link to={`view/${tid}`}> VIEW LINK : </Link> 
        <div>{`view/${tid}`} </div></div> }
      </div>
    </div>
  );
};

export default HomePage;
