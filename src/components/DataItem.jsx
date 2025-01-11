const DataItem = ({ icon, data }) => {
  return (
    <li className="flex justify-between items-center border-b border-white/10">
      <img className="size-8 md:size-10" src={icon} alt="Data icon" />
      <p>{data}</p>
    </li>
  );
};

export default DataItem;
