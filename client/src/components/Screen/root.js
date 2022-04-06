
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home, Shop, SignIn, Signup, DashboardTeacher ,Course , AddCategory, AddCProduct, CourseDetail, Cart , Checkout,
    MyCourses, ViewCourseToLearn} from '../index'


const Root = () => {
    return (
        <Routes>
       
            <Route path="/course/:courseId" element={ <Course />} /> 
            <Route path="/admin/dashboard" element={ <DashboardTeacher />} />
            <Route path="/create/category" element={ <AddCategory />} />
            <Route path="/create/course" element={ <AddCProduct />} />
            {/* <Route path="/CardCourse" element={<CardCourse />}></Route> */}
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/mycourses" element={<MyCourses />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/shop" element={< Shop/>}></Route> 
            <Route path="/checkout" element={< Checkout/>}></Route> 
            <Route path="/coursedetail/:courseId" element={< CourseDetail/>}></Route>
            <Route path="/coursedetail/:courseId/:lessonId" element={< ViewCourseToLearn/>}></Route>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}
export default Root
