import Search from "./Search";

const Header = ({ setCity }) => {
  return (
    <header className="w-11/12 sticky top-0 p-4 md:p-5 center border border-white/10 rounded-b-xl bg-white/10 shadow backdrop-blur z-50">
      <Search setCity={setCity} />
    </header>
  );
};

export default Header;
