import Search from "./Search";

const Header = ({ setCity }) => {
  return (
    <header className="w-full sticky top-0 lg:w-11/12 p-4 md:p-5 center border-b lg:border-x border-white/10 lg:rounded-b-xl bg-white/10 shadow backdrop-blur z-50">
      <Search setCity={setCity} />
    </header>
  );
};

export default Header;
