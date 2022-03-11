import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/Home";
import Course from "./Components/course/Course";
import GlobalStyle from "./Components/GlobalStyle";
function App() {
  return (
    <GlobalStyle>
        <Routes>
          <Route path="/" element={<Course />}></Route>
        </Routes>
    </GlobalStyle>
  )
}
export default App;
