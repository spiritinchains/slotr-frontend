const Timetable = (props: any) => {
  return (
    <div className="timetable bg-gray-100 font-display">
      {props.children}
    </div>
  );
};

export default Timetable;
