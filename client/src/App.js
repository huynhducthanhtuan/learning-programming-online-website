import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/Forgot password";
import EnterCode from "./pages/Forgot Password-Enter code";
import ForgotRePass from "./pages/Forgot Password-Re Pass";
import SignIn from "./pages/Sign in";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        {/* sign in  */}
        <Route path="/sign-in" element={<SignIn/>}></Route>
        {/* forgot pass */}
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/forgot-password/code" element={<EnterCode/>}></Route>
        <Route path="/forgot-password/new-password" element={<ForgotRePass/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
