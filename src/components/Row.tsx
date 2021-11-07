import {FaTimesCircle} from 'react-icons/fa';

const Row = (props: any) => {

  return (
    <div className="flex gap-1">
      <div className="minicard p-2 bg-gray-700 text-white">
        {props.title}
        <button className= "bg-red" onClick={()=>props.removeListener(props.index)}> <FaTimesCircle/> </button>
      </div>
      {props.children}
    </div>
  );
};

export default Row;
