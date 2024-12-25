import Search from "./Search";

const Header = ({ setCity }) => {
  return (
    <header className="w-full lg:w-11/12 p-4 md:p-5 center border-b lg:border-x border-white/10 lg:rounded-b-xl bg-white/10 shadow backdrop-blur">
      <Search setCity={setCity} />
    </header>
  );
};

export default Header;
