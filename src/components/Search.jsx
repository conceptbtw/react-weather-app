const Search = () => {
  return (
    <form className="p-1 flex justify-center items-center gap-1 border">
      <input
        className="h-8 p-1 flex justify-center items-center border"
        type="text"
        placeholder="Lviv"
      ></input>
      <button
        className="size-8 flex justify-center items-center border"
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
