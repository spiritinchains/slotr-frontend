import {FaTimesCircle} from 'react-icons/fa';

const ColHeader = (props: any) => {
  return (
    <div className="minicard bg-gray-200">
      {props.title}
      <button className= "bg-red" onClick={()=>props.removeListener(props.index)}> <FaTimesCircle/> </button>
    </div>
  );
}

export default ColHeader;