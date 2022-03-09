import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import Home from "./pages/home/Home";
>>>>>>> d580e5921c81ad3fd299a8f14ca37e57a48b4fc5
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}></Route>
       
=======
        <Route path="/" element={<Header />}></Route>
>>>>>>> d580e5921c81ad3fd299a8f14ca37e57a48b4fc5
      </Routes>
    </div>
  );
}

export default App;
