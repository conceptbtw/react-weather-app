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
      className="p-1 flex justify-center items-center gap-1 border"
      onSubmit={handleSubmit}
    >
      <input
        className="h-8 p-1 flex justify-center items-center border"
        type="text"
        placeholder="Lviv, UA"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="size-8 flex justify-center items-center border"
        type="submit"
        aria-label="Search"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
