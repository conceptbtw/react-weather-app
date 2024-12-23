const DataItem = ({ icon, data }) => {
  return (
    <li className="flex justify-between items-center border-b">
      <img className="size-8 md:size-10" src={icon} alt="Data icon" />
      <p className="">{data}</p>
    </li>
  );
};

export default DataItem;
