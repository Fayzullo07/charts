import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Missing from "./pages/Missing";

import "./App.css";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 1000, easing: "linear", delay: 100 });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
