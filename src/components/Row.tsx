const Row = (props: any) => {
  return (
    <div className="minicard-row">
      <div className="minicard-slot p-1 bg-gray-700 text-white">
        <span>{props.title}</span>
      </div>
      {props.children}
    </div>
  );
};

export default Row;
