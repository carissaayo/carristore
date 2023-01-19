import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Offer from "./components/Offer";

function App() {
  return (
    <main className="h-full w-full ">
      <section className="bg-primaryColor text-white px-32">
        <Header />
        <Hero />
      </section>
        <Offer/>
    </main>
  );
}

export default App;
