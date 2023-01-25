import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

import "./App.css";
import LandingPage from "./pages/LandingPage";
function App() {
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
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
