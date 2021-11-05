import { FaPlusCircle } from "react-icons/fa";

const TableEditDash = () => {
  return (
    <div className="p-1 flex justify-center">
      <button type="button" className="btn-std">
        <div className="flex justify-center items-center">
          <FaPlusCircle />
          <span className="mx-2">Add Row</span>
        </div>
      </button>
      <button type="button" className="btn-std">
        <div className="flex justify-center items-center">
          <FaPlusCircle />
          <span className="mx-2">Add Column</span>
        </div>
      </button>
    </div>
  )
};

export default TableEditDash;
