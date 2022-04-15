import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Signup,
  SignIn,
  ChangePassword,
  ForgotPassword,
  ForgotPasswordEnterCode,
  ForgotPasswordCreateNewPassword,
  Profile,
  UpdateProfile,
  Course,
  AddCategory,
  AddCProduct,
  ManageCourse,
  CourseDetail,
  Cart,
  Checkout,
  MyCourses,
} from "../components";

const Screens = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/change-password" element={<ChangePassword />}></Route>
      <Route
        path="/forgot-password-enter-code"
        element={<ForgotPasswordEnterCode />}
      ></Route>
      <Route
        path="/forgot-password-create-new-password"
        element={<ForgotPasswordCreateNewPassword />}
      ></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/update-profile" element={<UpdateProfile />}></Route>
      <Route path="/mycourses" element={<MyCourses />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      {/* <Route path="/coursedetail/:courseId" element={<CourseDetail />}></Route> */}
      <Route path="/learning/:courseId" element={<CourseDetail />}></Route>
      <Route path="/course/:courseId" element={<Course />} />
      <Route path="/create-category" element={<AddCategory />} />
      <Route path="/create-course" element={<AddCProduct />} />
      <Route path="/manage-courses" element={<ManageCourse />} />
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};
export default Screens;
