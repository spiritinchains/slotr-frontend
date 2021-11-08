const TimeslotStatic = (props: any) => {
  if (props.state === "empty") {
    return <div className="minicard bg-gray-200 text-gray-200"></div>;
  } else {
    return <div className="minicard text-gray-200 bg-gray-500">{props.title}</div>;
  }
};

export default TimeslotStatic;