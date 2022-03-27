import React, { useReducer, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./Components/GlobalStyle"
import "./App.css";
import { reducer, initialState } from "./reducers";
import SignUp from "./Components/Signup";
import Signin from "./Components/SignIn";
import Home from "./Components/Home";
import Shop from "./Components/Shop";


export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStyle>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </UserContext.Provider>
    </GlobalStyle>
  );
}
export default App;
