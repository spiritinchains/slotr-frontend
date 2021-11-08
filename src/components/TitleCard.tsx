import { useState } from "react";
import { FaPen, FaSave } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { timetableState } from "../atoms";
import { TimetableState } from "../TimetableData";

const TitleCard = (props: any) => {
  const [state, setState] = useRecoilState(timetableState);
  const [titleEdit, setTitleEdit] = useState({
    isEditable: false,
    name: state.name,
  });

  const handleTitleChange = () => {
    return setState((s) => {
      let x: TimetableState = {
        name: titleEdit.name,
        rows: s.rows,
        cols: s.cols,
      };
      return x;
    });
  };

  if (titleEdit.isEditable) {
    return (
      <div className="flex justify-center items-center gap-4 font-display">
        <input
          className="rounded-md border border-gray-400 text-4xl p-2"
          value={titleEdit.name}
          onChange={(e) =>
            setTitleEdit({ isEditable: true, name: e.target.value })
          }
        />
        <button
          onClick={(e) => {
            handleTitleChange();
            setTitleEdit({ isEditable: false, name: titleEdit.name });
          }}
        >
          <FaSave className="text-2xl" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center gap-4 font-display">
        <h1 className="p-2 text-4xl">{titleEdit.name}</h1>
        <button
          onClick={(e) =>
            setTitleEdit({ isEditable: true, name: titleEdit.name })
          }
        >
          <FaPen className="text-2xl" />
        </button>
      </div>
    );
  }
};

export default TitleCard;
