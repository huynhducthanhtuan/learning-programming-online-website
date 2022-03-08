import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/Forgot password";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
