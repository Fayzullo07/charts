import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Missing from "./pages/Missing";

import "./App.css";
import React from "react";

const App: React.FC = () => {
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
