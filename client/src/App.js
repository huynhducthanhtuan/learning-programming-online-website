import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import GlobalStyle from "./Components/GlobalStyle";
import Signup from './Components/Signup'
function App() {
  return (
    <GlobalStyle>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    </GlobalStyle>
  )
}
export default App;
