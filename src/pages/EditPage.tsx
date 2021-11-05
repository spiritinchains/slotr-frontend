import Timetable from "../components/Timetable";
import Navigation from "../components/Navigation";
import TableEditDash from "../components/TableEditDash";

const EditPage = () => {
  return (
    <div>
      <Navigation />
      <TableEditDash />
      <div className="mx-16">
        <Timetable />
      </div>
      <div className="flex items-center justify-center">
        <button className="btn-green">Save</button>
      </div>
    </div>
  );
};

export default EditPage;
