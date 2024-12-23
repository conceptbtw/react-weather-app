import { useState } from "react";

const Search = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form
      className="p-1 flex justify-center items-center gap-1 border border-white/10 rounded-full"
      onSubmit={handleSubmit}
    >
      <input
        className="h-8 md:h-10 p-4 md:p-5 flex justify-center items-center rounded-full outline-none bg-transparent"
        type="text"
        placeholder="Lviv, UA"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="size-8 md:size-10 flex justify-center items-center rounded-full"
        type="submit"
        aria-label="Search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
