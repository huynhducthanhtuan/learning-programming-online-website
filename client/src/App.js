import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { SignUp, SignIn, Home, Course, ForgotPassword } from "./components";
import { reducer, initialState } from "./reducers";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
