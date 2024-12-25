import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [city, setCity] = useState("Lviv, UA");

  return (
    <div className="min-h-svh center flex-col text-center text-white/90 md:text-xl font-bold bg-[url('/bg.svg')] bg-center bg-cover">
      <Header setCity={setCity} />
      <Main city={city} />
      <Footer />
    </div>
  );
};

export default App;
