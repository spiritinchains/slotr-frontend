import Timetable from "../components/Timetable";
import Navigation from "../components/Navigation";

import { FaPlusCircle, FaSave } from "react-icons/fa";

const EditPage = () => {
  return (
    <div>
      <Navigation />
      <div className="mx-16 py-4 text-gray-800">
        <h1>Table Title</h1>
      </div>
      <div className="p-1 flex justify-center">
        <button className="btn-std">
          <FaPlusCircle /> Add Row
        </button>
        <button className="btn-std">
          <FaPlusCircle /> Add Column
        </button>
      </div>
      <div className="mx-16">
        <Timetable />
      </div>
      <div className="p-1 flex justify-center">
        <button className="btn-green">
          <FaSave /> Save
        </button>
      </div>
    </div>
  );
};

export default EditPage;
