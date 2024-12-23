const DataList = ({ children }) => {
  return (
    <ul className="min-w-32 md:min-w-40 w-full flex-1 justify-center items-center">
      {children}
    </ul>
  );
};

export default DataList;
