const Timetable = (props: any) => {
  return (
    <div className="timetable bg-gray-900">
      <span className="text-white">Routine</span>
      {props.children}
    </div>
  )
};

export default Timetable;
