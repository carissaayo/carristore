import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="h-full w-full relative">
      <section className="bg-primaryColor text-white px-28">
        <Header />
        <Hero />
      </section>
        <Offer/>
        <Categories/>
        <Testimonials/>
        <Newsletter/>
        <FAQs/>
        <Footer/>
        <div className="absolute bottom-12 right-8">
          <a href="#" className="">Go Top</a>
        </div>
    </main>
  );
}

export default App;
