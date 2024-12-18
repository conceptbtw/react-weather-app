const DataItem = ({ icon, data }) => {
  return (
    <li className="flex justify-center items-center">
      <img className="" src={icon} alt="Data icon" />
      <p className="">{data}</p>
    </li>
  );
};

export default DataItem;
