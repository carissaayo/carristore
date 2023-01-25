import { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline'

import Categories from '../components/landingpageComponents/Categories'
import FAQs from '../components/landingpageComponents/FAQs'
import Footer from '../components/landingpageComponents/Footer'
import Header from '../components/landingpageComponents/Header'
import Hero from '../components/landingpageComponents/Hero'
import Newsletter from '../components/landingpageComponents/Newsletter'
import Offer from '../components/landingpageComponents/Offer'
import Testimonials from '../components/landingpageComponents/Testimonials'

const LandingPage = () => {
     const [showScroll, setShowScroll] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  // Header Fixed Functionality
  useEffect(() => {
     const showHead = () => {
    if (window.scrollY > 100) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
    window.addEventListener("scroll", showHead);

    return () => window.removeEventListener("scroll", showHead);
  }, []);

  // Scroll To Top Functionality
  useEffect(() => {
    const scrollUp = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", scrollUp);

    return () => window.removeEventListener("scroll", scrollUp);
  }, []);
  return (
    <main className="h-full w-full relative">
   
        <Header showHeader={showHeader} />
        <Hero />
      <Offer />
      <Categories />
      <Testimonials />
      <Newsletter />
      <FAQs />
      <Footer />
      <a
        href="#"
        className={`${
          showScroll ? "bottom-40" : " bottom-[-30%]"
        } fixed  right-[2rem] z-30 transition-translate duration-300 w-[50px] h-[50px] rounded-full hover:[transform:translateY(-.25rem)] bg-white flex items-center justify-center`}
      >
        <ChevronDoubleUpIcon className="w-6 h-6 " />
      </a>
    </main>)
}

export default LandingPage