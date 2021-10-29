const Row = (props: any) => {
  return (
    <div className="minicard-row bg-gray-600 flex">
      <div className="minicard bg-gray-400 align-middle">{props.title}</div>
      {props.children}
    </div>
  );
};

export default Row;
