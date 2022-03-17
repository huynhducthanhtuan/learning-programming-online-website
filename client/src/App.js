import React, { useReducer, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { reducer, initialState } from "./reducers";
// import ForgotPassword from "./components/Forgot password"
// import EnterCode from "./components/Forgot Password-Enter code"
// import ForgotRePass from "./components/Forgot Password-Re Pass"
// import SignIn from "./components/Sign in"
// import SignUp from "./components/Signup";
import SignUp from "./Components/Signup";
import Signin from "./Components/SignIn";
import Home from "./Components/Home";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}
export default App;
