const Row = (props: any) => {
  return (
    <div className="minicard-row bg-gray-50 flex">
      <div className="minicard-slot p-1 bg-gray-700 align-middle text-white">
        <span>{props.title}</span>
      </div>
      {props.children}
    </div>
  );
};

export default Row;
