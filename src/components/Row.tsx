const Row = (props: any) => {
  return (
    <div className="minicard-row bg-gray-100 flex">
      <div className="minicard bg-gray-800 align-middle w-32 text-white">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};

export default Row;
