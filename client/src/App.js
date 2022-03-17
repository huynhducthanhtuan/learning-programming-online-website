import React, { useReducer, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { reducer, initialState } from "./reducers";
import SignUp from "./Components/Signup";
import Signin from "./Components/SignIn";
import Home from "./Components/Home";
import "./App.css";

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
