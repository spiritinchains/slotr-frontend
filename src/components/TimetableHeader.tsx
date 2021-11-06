const TimetableHeader = (props: any) => {
  return (
    <div className="flex gap-1">
      <div className="minicard p-2"></div>
      {props.children}
    </div>
  );
};

export default TimetableHeader;
