import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import ForgotPassword from "./components/Forgot password"
import EnterCode from "./components/Forgot Password-Enter code"
import ForgotRePass from "./components/Forgot Password-Re Pass"
import SignIn from "./components/Sign in"
import SignUp from "./components/Sign up";

function App() {
  return (
    
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        {/* sign up  */}
        <Route path="/sign-up" element={<SignUp/>}></Route>
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
