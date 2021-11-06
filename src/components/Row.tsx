const Row = (props: any) => {
  return (
    <div className="flex gap-1">
      <div className="minicard p-2 bg-gray-700 text-white">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

export default Row;
