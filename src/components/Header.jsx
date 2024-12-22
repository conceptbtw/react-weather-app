import Search from "./Search";

const Header = ({ setCity }) => {
  return (
    <header className="w-full p-4 flex justify-center items-center border">
      <Search setCity={setCity} />
    </header>
  );
};

export default Header;
