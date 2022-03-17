import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// import ForgotPassword from "./components/Forgot password"
// import EnterCode from "./components/Forgot Password-Enter code"
// import ForgotRePass from "./components/Forgot Password-Re Pass"
// import SignIn from "./components/Sign in"
// import SignUp from "./components/Signup";
import SignUp from "./Components/Signup";
import Signin from "./Components/SignIn"

function App() {
  return (
    
    <div className="App">
      <Routes>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
