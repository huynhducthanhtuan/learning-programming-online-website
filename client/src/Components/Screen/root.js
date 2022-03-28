
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home, Shop, SignIn, Signup, DashboardAdmin, CardCourse, AddCategory} from '../index'


const Root = () => {
    return (
        <Routes>
           {/* <Route path="/Course" element={ <Course />} />
            <Route path="/CourseDetail" element={ <CourseDetail />} />*/}
            <Route path="/admin/dashboard" element={ <DashboardAdmin />} />
            <Route path="/create/category" element={ <AddCategory />} />
            <Route path="/CardCourse" element={<CardCourse />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/shop" element={<Shop />}></Route> 
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}
export default Root