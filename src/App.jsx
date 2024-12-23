import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [city, setCity] = useState("Lviv, UA");

  return (
    <div className="min-h-svh flex flex-col justify-center items-center md:text-xl text-center font-bold bg-[url('./src/assets/images/bg.jpg')] bg-center bg-cover">
      <Header setCity={setCity} />
      <Main city={city} />
      <Footer />
    </div>
  );
};

export default App;
