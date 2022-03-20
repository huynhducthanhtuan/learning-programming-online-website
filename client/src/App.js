import React, { useReducer, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { reducer, initialState } from "./reducers";
import {
  Home,
  SignUp,
  SignIn,
  Cart,
  CreateCourse,
  CourseDetail,
  ForgotPassword,
} from "./components";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/create-course" element={<CreateCourse />}></Route>
        <Route path="/course-detail" element={<CourseDetail />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
