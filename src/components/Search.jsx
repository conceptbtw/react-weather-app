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
    <form className="max-w-md w-full p-1 center gap-1 border border-white/10 rounded-full bg-white/10 shadow backdrop-blur" onSubmit={handleSubmit}>
      <input
        className="min-w-0 h-8 md:h-10 p-4 md:p-5 center flex-1 rounded-full outline-none placeholder-white/50 bg-transparent"
        type="text"
        placeholder="Lviv, UA"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="size-8 md:size-10 center" type="submit" aria-label="Search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Search;
