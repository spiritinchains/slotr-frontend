const Timetable = (props: any) => {
  return (
    <div className="timetable bg-gray-200">
      <span>Routine</span>
      {props.children}
    </div>
  );
};

export default Timetable;
