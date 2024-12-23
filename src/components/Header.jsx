import Search from "./Search";

const Header = ({ setCity }) => {
  return (
    <header className="w-full p-4 md:p-5 flex justify-center items-center border-b border-white/10 bg-white/10 shadow backdrop-blur">
      <Search setCity={setCity} />
    </header>
  );
};

export default Header;
