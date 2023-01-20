import { Route, BrowserRouter, Routes } from "react-router-dom";
import {ChevronDoubleUpIcon} from "@heroicons/react/24/outline"
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
  // const [showScroll, setShowScroll] = useState(false);
  
  
    // useEffect(() => {
    //   const scrollUp = () => {
    //     if (window.scrollY > 200) {
    //       setShowScroll(true);
    //     } else {
    //       setShowScroll(false);
    //     }
    //   };
    //   window.addEventListener("scroll", scrollUp);

    //   return () => window.removeEventListener("scroll", scrollUp);
    // }, []); 
  return (
    <main className="h-full w-full relative">
      <section className="bg-primaryColor text-white px-28">
        <Header />
        <Hero />
      </section>
      <Offer />
      <Categories />
      <Testimonials />
      <Newsletter />
      <FAQs />
      <Footer />

      <a
        href="#"
        className=" bottom-12 right-8 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full fixed"
      >
        <ChevronDoubleUpIcon className="w-6 h-6" />
      </a>
  

      {/* <a
                href="#"
                className={`${
                  showScroll ? "bottom-40" : " bottom-[-30%]"
                } fixed  right-[2rem] z-30 transition-translate duration-300 w-[50px] h-[50px] rounded-full hover:[transform:translateY(-.25rem)] bg-primaryColor flex items-center justify-center`}
              >
                <ChevronDoubleUp size={30} />
              </a> */}
    </main>
  );
}

export default App;
