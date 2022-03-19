import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { reducer, initialState } from "./reducers";
import SignUp from "./Components/Signup";
import Signin from "./Components/SignIn";
import Home from "./Components/Home";
import Course from "./Components/Course";
import ForgotPassword from "./Components/Forgot password";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
