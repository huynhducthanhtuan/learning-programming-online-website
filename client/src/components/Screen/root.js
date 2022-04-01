
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Home, Shop, SignIn, Signup, DashboardAdmin,Course , AddCategory, AddCProduct, CourseDetail} from '../index'


const Root = () => {
    return (
        <Routes>
            <Route path="#" element={ <CourseDetail />} />
            <Route path="/course/:courseId" element={ <Course />} /> 
            <Route path="/admin/dashboard" element={ <DashboardAdmin />} />
            <Route path="/create/category" element={ <AddCategory />} />
            <Route path="/create/course" element={ <AddCProduct />} />
            {/* <Route path="/CardCourse" element={<CardCourse />}></Route> */}
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/shop" element={<Shop />}></Route> 
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}
export default Root
