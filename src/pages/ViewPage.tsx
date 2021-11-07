import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import Navigation from "../components/Navigation";
import Timetable from "../components/Timetable";

const ViewPage = () => {
  const [state, setState] = useRecoilState(timetableState);
  return (
    <div>
      <Navigation />
      <div className="mx-16 py-4 text-gray-800 flex justify-between">
        <h1>{state.name}</h1>
        <button className="btn-std">Edit</button>
      </div>
      <div className="mx-16">
        <Timetable editable={false} />
      </div>
    </div>
  );
};

export default ViewPage;
