import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SideNav from "./components/landingpageComponents/SideNav";
function App() {
  return (
    <BrowserRouter>
      <main className="flex h-screen w-full bg-secondaryColor gap-4">
        <SideNav  />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
