import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </div>
  );
}

export default App;
